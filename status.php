<?php
/**
 * System Status Check
 * Diagnoses XAMPP services and connectivity
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Status Check</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; padding: 20px; }
        .container { max-width: 800px; margin: 0 auto; }
        h1 { color: white; text-align: center; margin-bottom: 30px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
        .status-box { background: white; border-radius: 12px; padding: 25px; margin-bottom: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
        .status-box h2 { color: #333; margin-bottom: 15px; font-size: 18px; border-bottom: 3px solid #667eea; padding-bottom: 10px; }
        .status-item { display: flex; align-items: center; padding: 12px; margin: 8px 0; background: #f5f5f5; border-radius: 6px; }
        .status-icon { font-size: 24px; margin-right: 15px; min-width: 30px; }
        .status-text { flex: 1; }
        .status-text strong { color: #333; display: block; margin-bottom: 3px; }
        .status-text small { color: #666; }
        .pass { color: #4caf50; }
        .fail { color: #f44336; }
        .warn { color: #ff9800; }
        .info { color: #2196f3; }
        .instructions { background: white; border-radius: 12px; padding: 25px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
        .instructions h2 { color: #333; margin-bottom: 20px; }
        .instructions ol { margin-left: 25px; }
        .instructions li { margin: 12px 0; color: #555; line-height: 1.6; }
        .instructions strong { color: #333; }
        .code { background: #f5f5f5; padding: 10px; border-radius: 4px; font-family: monospace; margin: 10px 0; border-left: 3px solid #667eea; }
        .success-banner { background: #4caf50; color: white; padding: 15px; border-radius: 6px; margin-bottom: 20px; text-align: center; display: none; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔍 System Status Check</h1>
        
        <div id="successBanner" class="success-banner">
            ✅ All systems operational! You can now access the admin panel.
        </div>

        <!-- PHP & Extensions Status -->
        <div class="status-box">
            <h2>📦 PHP & Extensions</h2>
            <div class="status-item">
                <span class="status-icon pass">✓</span>
                <div class="status-text">
                    <strong>PHP Version</strong>
                    <small><?php echo phpversion(); ?></small>
                </div>
            </div>
            
            <div class="status-item">
                <span class="status-icon <?php echo extension_loaded('mysqli') ? 'pass' : 'fail'; ?>">
                    <?php echo extension_loaded('mysqli') ? '✓' : '✗'; ?>
                </span>
                <div class="status-text">
                    <strong>MySQLi Extension</strong>
                    <small><?php echo extension_loaded('mysqli') ? 'Loaded' : 'NOT LOADED - Required for database'; ?></small>
                </div>
            </div>

            <div class="status-item">
                <span class="status-icon <?php echo extension_loaded('pdo') ? 'pass' : 'warn'; ?>">
                    <?php echo extension_loaded('pdo') ? '✓' : '⚠'; ?>
                </span>
                <div class="status-text">
                    <strong>PDO Extension</strong>
                    <small><?php echo extension_loaded('pdo') ? 'Loaded' : 'Not loaded (optional)'; ?></small>
                </div>
            </div>
        </div>

        <!-- Database Connectivity -->
        <div class="status-box">
            <h2>🗄️ Database Status</h2>
            <?php
            $mysqli = @new mysqli('localhost', 'root', '', 'mysql', 3306);
            $dbConnected = !$mysqli->connect_error;
            
            if ($dbConnected) {
                echo '<div class="status-item">
                    <span class="status-icon pass">✓</span>
                    <div class="status-text">
                        <strong>MySQL Connection</strong>
                        <small>Connected successfully to ' . htmlspecialchars($mysqli->server_info) . '</small>
                    </div>
                </div>';

                // Check travel_db
                $result = $mysqli->query("SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME='travel_db'");
                if ($result && $result->num_rows > 0) {
                    echo '<div class="status-item">
                        <span class="status-icon pass">✓</span>
                        <div class="status-text">
                            <strong>travel_db Database</strong>
                            <small>Database exists</small>
                        </div>
                    </div>';

                    // Check tables
                    $mysqli->select_db('travel_db');
                    $tables = $mysqli->query('SHOW TABLES');
                    $tableCount = $tables ? $tables->num_rows : 0;
                    echo '<div class="status-item">
                        <span class="status-icon ' . ($tableCount >= 4 ? 'pass' : 'warn') . '">' . ($tableCount >= 4 ? '✓' : '⚠') . '</span>
                        <div class="status-text">
                            <strong>Database Tables</strong>
                            <small>' . $tableCount . ' tables found (need: users, gallery, bookings, contacts)</small>
                        </div>
                    </div>';
                } else {
                    echo '<div class="status-item">
                        <span class="status-icon warn">⚠</span>
                        <div class="status-text">
                            <strong>travel_db Database</strong>
                            <small>Database does not exist - Run setup script</small>
                        </div>
                    </div>';
                }

                $mysqli->close();
            } else {
                echo '<div class="status-item">
                    <span class="status-icon fail">✗</span>
                    <div class="status-text">
                        <strong>MySQL Connection</strong>
                        <small>' . htmlspecialchars($mysqli->connect_error) . '</small>
                    </div>
                </div>';
            }
            ?>
        </div>

        <!-- File System Status -->
        <div class="status-box">
            <h2>📁 File System</h2>
            <?php
            $paths = [
                'logs' => __DIR__ . '/../logs',
                'gallery' => __DIR__ . '/../gallery',
                'admin' => __DIR__ . '/../admin',
                'database' => __DIR__ . '/../database',
            ];

            foreach ($paths as $name => $path) {
                $exists = is_dir($path);
                $writable = is_writable($path);
                $icon = $exists ? ($writable ? 'pass' : 'warn') : 'fail';
                $text = $exists ? ($writable ? 'Exists & Writable' : 'Exists but NOT writable') : 'Does NOT exist';
                
                echo '<div class="status-item">
                    <span class="status-icon ' . $icon . '">' . ($exists ? ($writable ? '✓' : '⚠') : '✗') . '</span>
                    <div class="status-text">
                        <strong>' . ucfirst($name) . '/</strong>
                        <small>' . $text . '</small>
                    </div>
                </div>';
            }
            ?>
        </div>

        <!-- Setup Instructions -->
        <div class="instructions">
            <h2>🚀 Getting Started - Step by Step</h2>
            <ol>
                <li>
                    <strong>Start XAMPP Services</strong>
                    <div class="code">1. Open: C:\xampp\xampp-control.exe
2. Click "Start" next to Apache
3. Click "Start" next to MySQL
4. Wait for them to say "Running" (green)</div>
                </li>
                <li>
                    <strong>Create Database</strong>
                    <div class="code">Open browser: http://localhost/travel/fix_mysql.php
This will automatically create travel_db and tables</div>
                </li>
                <li>
                    <strong>Access Admin Panel</strong>
                    <div class="code">Open browser: http://localhost/travel/admin

Login with:
Username: admin
Password: Admin@123</div>
                </li>
            </ol>

            <h2 style="margin-top: 25px;">✅ Common Issues & Solutions</h2>
            <ol>
                <li>
                    <strong>"Connection Refused" Error</strong>
                    <div class="code">→ Start Apache & MySQL from XAMPP Control Panel</div>
                </li>
                <li>
                    <strong>"Database not found"</strong>
                    <div class="code">→ Run: http://localhost/travel/fix_mysql.php</div>
                </li>
                <li>
                    <strong>"Access denied for user 'pma'"</strong>
                    <div class="code">→ Run: http://localhost/travel/setup_phpmyadmin.php</div>
                </li>
                <li>
                    <strong>"Plugin caching_sha2_password not found"</strong>
                    <div class="code">→ This is being handled automatically by Database.php</div>
                </li>
            </ol>
        </div>
    </div>

    <script>
        // Check if everything is working
        <?php if ($dbConnected && $tableCount >= 4): ?>
        document.getElementById('successBanner').style.display = 'block';
        <?php endif; ?>
    </script>
</body>
</html>
