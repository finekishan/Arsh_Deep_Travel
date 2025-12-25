<?php
/**
 * Database Configuration Template
 * File: config/connect.example.php
 * 
 * Instructions:
 * 1. Copy this file to connect.php
 * 2. Update the database credentials below
 * 3. Make sure MySQL is running
 */

require_once __DIR__ . '/Database.php';

// Configuration - UPDATE THESE VALUES
$dbConfig = [
    'host' => 'localhost',
    'user' => 'root',           // Change to your MySQL username
    'pass' => '',               // Set your MySQL password here
    'db' => 'travel_db',        // Database name
    'port' => 3306,
    'charset' => 'utf8mb4'
];

// Create database instance
try {
    $db = Database::getInstance($dbConfig);
    
    // Verify connection
    if (!$db->isConnected()) {
        throw new Exception('Failed to establish database connection');
    }
} catch (Exception $e) {
    error_log('Database connection error: ' . $e->getMessage());
    
    // Show user-friendly error
    if (php_sapi_name() !== 'cli') {
        // Web context - show error page
        ?>
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Database Error</title>
            <style>
                body { font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px; }
                .error-box { background: white; border: 2px solid #d32f2f; border-radius: 5px; padding: 20px; max-width: 600px; margin: 0 auto; }
                h1 { color: #d32f2f; }
                p { color: #333; line-height: 1.6; }
                .details { background: #f5f5f5; padding: 10px; border-radius: 3px; font-family: monospace; font-size: 12px; color: #666; }
            </style>
        </head>
        <body>
            <div class="error-box">
                <h1>Database Connection Error</h1>
                <p>Unable to connect to the database. Please try one of the following:</p>
                <ol>
                    <li>Ensure MySQL/MariaDB is running (start from XAMPP Control Panel)</li>
                    <li>Check database credentials in <code>config/connect.php</code></li>
                    <li>Verify database <code>travel_db</code> exists</li>
                    <li>Check database user has proper privileges</li>
                </ol>
                <p><strong>Error Details:</strong></p>
                <div class="details"><?php echo htmlspecialchars($e->getMessage()); ?></div>
                <p style="margin-top: 20px; color: #999; font-size: 12px;">For setup help, see README.md</p>
            </div>
        </body>
        </html>
        <?php
    } else {
        // CLI context - just exit with error
        echo "Database connection error: " . $e->getMessage() . PHP_EOL;
    }
    exit();
}

?>