<?php
/**
 * Database Configuration & Connection
 * File: config/db.php
 * 
 * This file now uses the new Database class (config/Database.php)
 * for better error handling, connection pooling, and security.
 * 
 * Backward compatible - existing code using $connection still works
 */

// Load the new Database class
require_once __DIR__ . '/Database.php';

// Configuration
$dbConfig = [
    'host' => 'localhost',
    'user' => 'root',
    'pass' => '',
    'db' => 'travel_db',
    'port' => 3307,
    'charset' => 'utf8mb4'
];

// Initialize database connection using singleton
try {
    $db = Database::getInstance($dbConfig);
    
    // For backward compatibility with existing code using $connection directly
    // This allows old code like "$connection->prepare()" to still work
    $connection = $db->getConnection();
    
    if (!$connection || !$db->isConnected()) {
        throw new Exception('Failed to connect to database');
    }

    // === AUTO-MIGRATION: Create tables if they don't exist ===
    autoMigrateTables($connection);

} catch (Exception $e) {
    error_log("Database connection failed: " . $e->getMessage());
    
    // Show error for web requests
    if (php_sapi_name() !== 'cli') {
        ?>
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Database Connection Error</title>
            <style>
                body { font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px; }
                .error-box { background: white; border: 2px solid #d32f2f; border-radius: 5px; padding: 20px; max-width: 600px; margin: 0 auto; }
                h1 { color: #d32f2f; }
                p { color: #333; line-height: 1.6; }
                .details { background: #f5f5f5; padding: 10px; border-radius: 3px; font-family: monospace; font-size: 12px; color: #666; overflow-x: auto; }
                .steps { margin-top: 20px; }
                .steps ol { margin-left: 20px; }
                .steps li { margin: 8px 0; }
            </style>
        </head>
        <body>
            <div class="error-box">
                <h1>⚠️ Database Connection Error</h1>
                <p><strong>Error:</strong> <?php echo htmlspecialchars($e->getMessage()); ?></p>
                
                <div class="steps">
                    <p><strong>Quick Fix:</strong></p>
                    <ol>
                        <li>Open XAMPP Control Panel: <code>C:\xampp\xampp-control.exe</code></li>
                        <li>Click <strong>Start</strong> next to Apache</li>
                        <li>Click <strong>Start</strong> next to MySQL (wait for green)</li>
                        <li>Refresh this page</li>
                    </ol>
                </div>

                <div class="steps">
                    <p><strong>If still not working:</strong></p>
                    <ol>
                        <li>Visit: <a href="http://localhost:8080/travel/fix_mysql.php">http://localhost:8080/travel/fix_mysql.php</a></li>
                        <li>This will create the database and tables</li>
                        <li>Refresh this page</li>
                    </ol>
                </div>

                <p style="margin-top: 20px; color: #999; font-size: 12px;">
                    For more help, see: ADMIN_PANEL_SETUP_CHECKLIST.md or visit: 
                    <a href="http://localhost:8080/travel/status.php">http://localhost:8080/travel/status.php</a>
                </p>
            </div>
        </body>
        </html>
        <?php
    }
    exit();
}

/**
 * Auto-migration function - creates tables if they don't exist
 */
function autoMigrateTables($connection) {
    // Check if users table exists (if not, assume no tables exist)
    $result = $connection->query("SHOW TABLES LIKE 'users'");
    if ($result && $result->num_rows > 0) {
        // Tables already exist, skip migration
        return;
    }

    // Tables don't exist, run the schema
    echo "<!-- Auto-creating database tables... -->";

    $schemaFile = __DIR__ . '/../database/schema.sql';
    if (!file_exists($schemaFile)) {
        error_log("Schema file not found: $schemaFile");
        return;
    }

    $schema = file_get_contents($schemaFile);
    if (!$schema) {
        error_log("Could not read schema file: $schemaFile");
        return;
    }

    // Split schema into individual statements
    $statements = array_filter(array_map('trim', explode(';', $schema)));

    $connection->begin_transaction();
    try {
        foreach ($statements as $statement) {
            if (!empty($statement) && !preg_match('/^--/', $statement)) {
                if (!$connection->query($statement)) {
                    throw new Exception("Migration failed: " . $connection->error . " | SQL: $statement");
                }
            }
        }
        $connection->commit();
        error_log("Database tables created successfully via auto-migration");
        echo "<!-- Database tables created successfully! -->";
    } catch (Exception $e) {
        $connection->rollback();
        error_log("Auto-migration failed: " . $e->getMessage());
        echo "<!-- Auto-migration failed: " . htmlspecialchars($e->getMessage()) . " -->";
    }
}

// For new code, use the $db object with methods like:
// $db->fetchOne($sql, $params)
// $db->fetchAll($sql, $params)
// $db->insert($sql, $params)
// $db->update($sql, $params)
// $db->delete($sql, $params)

?>

