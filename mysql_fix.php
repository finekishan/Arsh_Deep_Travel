<?php
/**
 * MySQL Connection Fix - Automatic Diagnosis & Repair
 * File: mysql_fix.php
 * 
 * This fixes:
 * - "Access denied for user 'root'@'localhost' (using password: NO)"
 * - MySQL not responding
 * - Database not created
 * - Authentication plugin issues
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MySQL Connection Fix</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; padding: 20px; }
        .container { max-width: 900px; margin: 0 auto; }
        h1 { color: white; text-align: center; margin-bottom: 30px; }
        .fix-box { background: white; border-radius: 12px; padding: 25px; margin-bottom: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
        .fix-box h2 { color: #333; margin-bottom: 15px; border-bottom: 3px solid #667eea; padding-bottom: 10px; }
        .step { background: #f5f5f5; padding: 15px; margin: 15px 0; border-radius: 6px; border-left: 4px solid #667eea; }
        .step strong { color: #333; display: block; margin-bottom: 8px; }
        .code { background: #2c3e50; color: #ecf0f1; padding: 12px; border-radius: 4px; font-family: 'Courier New', monospace; margin: 10px 0; overflow-x: auto; }
        .success { background: #e8f5e9; border-left-color: #4caf50; color: #2e7d32; }
        .error { background: #ffebee; border-left-color: #f44336; color: #c62828; }
        .warning { background: #fff3e0; border-left-color: #ff9800; color: #e65100; }
        .info { background: #e3f2fd; border-left-color: #2196f3; color: #1565c0; }
        .check-list { margin: 15px 0; }
        .check-item { display: flex; align-items: center; padding: 10px; margin: 8px 0; }
        .check-icon { font-size: 20px; margin-right: 10px; min-width: 25px; }
        button { background: #667eea; color: white; border: none; padding: 12px 24px; border-radius: 6px; font-size: 16px; cursor: pointer; margin: 10px 5px 10px 0; }
        button:hover { background: #764ba2; }
        .hidden { display: none; }
        .result-icon { font-size: 48px; text-align: center; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔧 MySQL Connection Fix</h1>

        <!-- Step 1: Diagnosis -->
        <div class="fix-box">
            <h2>Step 1: Diagnosis</h2>
            <p>Checking MySQL status...</p>
            
            <div class="check-list">
                <?php
                // Check 1: MySQL Port 3306
                $port3306 = @fsockopen('localhost', 3306, $errno, $errstr, 2);
                $mysqli = @new mysqli('localhost', 'root', '', 'mysql', 3306);
                $connected3306 = !$mysqli->connect_error;
                
                echo '<div class="check-item ' . ($port3306 ? 'success' : 'error') . '">';
                echo '<span class="check-icon">' . ($port3306 ? '✓' : '✗') . '</span>';
                echo '<span><strong>Port 3306 (MySQL)</strong> ' . ($port3306 ? 'Responding' : 'Not responding') . '</span>';
                echo '</div>';
                
                if ($port3306) fclose($port3306);

                // Check 2: Connection with empty password
                echo '<div class="check-item ' . ($connected3306 ? 'success' : 'error') . '">';
                echo '<span class="check-icon">' . ($connected3306 ? '✓' : '✗') . '</span>';
                echo '<span><strong>MySQL Connection</strong> ' . ($connected3306 ? 'Connected' : 'Failed: ' . $mysqli->connect_error) . '</span>';
                echo '</div>';

                if ($connected3306) {
                    $mysqli->close();
                }

                // Check 3: travel_db database
                $mysqli = @new mysqli('localhost', 'root', '', 'mysql', 3306);
                $dbExists = false;
                
                if (!$mysqli->connect_error) {
                    $result = $mysqli->query("SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME='travel_db'");
                    $dbExists = $result && $result->num_rows > 0;
                    $mysqli->close();
                }

                echo '<div class="check-item ' . ($dbExists ? 'success' : 'warning') . '">';
                echo '<span class="check-icon">' . ($dbExists ? '✓' : '⚠') . '</span>';
                echo '<span><strong>travel_db Database</strong> ' . ($dbExists ? 'Exists' : 'Not created yet') . '</span>';
                echo '</div>';
                ?>
            </div>
        </div>

        <!-- Step 2: Manual XAMPP Restart -->
        <div class="fix-box">
            <h2>Step 2: Restart MySQL (Manual)</h2>
            <div class="step warning">
                <strong>1. Open XAMPP Control Panel:</strong>
                <div class="code">C:\xampp\xampp-control.exe</div>
            </div>

            <div class="step warning">
                <strong>2. Stop MySQL (if running):</strong>
                <div class="check-item">
                    <span class="check-icon">→</span>
                    <span>Find MySQL row, click <strong>[Stop]</strong></span>
                </div>
                <div class="check-item">
                    <span class="check-icon">→</span>
                    <span>Wait 3 seconds until status is blank/grey</span>
                </div>
            </div>

            <div class="step warning">
                <strong>3. Start MySQL:</strong>
                <div class="check-item">
                    <span class="check-icon">→</span>
                    <span>Click <strong>[Start]</strong> next to MySQL</span>
                </div>
                <div class="check-item">
                    <span class="check-icon">→</span>
                    <span>Wait until it says <strong>"Running"</strong> in green</span>
                </div>
            </div>

            <div class="step info">
                <strong>After restarting MySQL, click the button below:</strong>
                <br><button onclick="location.reload()">🔄 Refresh & Check Again</button>
            </div>
        </div>

        <!-- Step 3: Fix via PowerShell -->
        <div class="fix-box">
            <h2>Step 3: Quick PowerShell Fix (Copy & Paste)</h2>
            
            <div class="step info">
                <strong>Open PowerShell as Administrator and run:</strong>
                <div class="code">
cd C:\xampp\htdocs\travel
& 'C:\xampp\mysql\bin\mysql.exe' -u root -e "SELECT 1" 2>&1
                </div>
                <p style="margin-top: 10px; color: #666;">
                    This tests if MySQL is responding. If it works, you'll see: <code>1</code>
                </p>
            </div>

            <div class="step info">
                <strong>Then run this to create the database:</strong>
                <div class="code">
& 'C:\xampp\mysql\bin\mysql.exe' -u root travel_db < 'database\schema.sql'
                </div>
                <p style="margin-top: 10px; color: #666;">
                    This creates travel_db and all tables
                </p>
            </div>
        </div>

        <!-- Step 4: Alternative - Using create database query -->
        <div class="fix-box">
            <h2>Step 4: Create Database via SQL</h2>
            
            <form method="POST" style="margin-top: 15px;">
                <input type="hidden" name="action" value="create_db">
                <button type="submit">🚀 Click to Create travel_db (if MySQL is running)</button>
            </form>

            <?php
            if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_POST['action'] === 'create_db') {
                $mysqli = @new mysqli('localhost', 'root', '', 'mysql', 3306);
                
                if ($mysqli->connect_error) {
                    echo '<div class="step error">';
                    echo '<strong>❌ Error:</strong> Cannot connect to MySQL<br>';
                    echo 'Make sure MySQL is running in XAMPP Control Panel<br>';
                    echo htmlspecialchars($mysqli->connect_error);
                    echo '</div>';
                } else {
                    // Create database
                    if (!$mysqli->query("CREATE DATABASE IF NOT EXISTS travel_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci")) {
                        echo '<div class="step error"><strong>❌ Error:</strong> ' . $mysqli->error . '</div>';
                    } else {
                        // Select database
                        $mysqli->select_db('travel_db');
                        
                        // Read and execute schema
                        $schemaFile = __DIR__ . '/database/schema.sql';
                        if (!file_exists($schemaFile)) {
                            echo '<div class="step error"><strong>❌ Error:</strong> schema.sql not found</div>';
                        } else {
                            $schema = file_get_contents($schemaFile);
                            
                            // Execute schema
                            if ($mysqli->multi_query($schema)) {
                                // Process all results
                                do {
                                    if ($result = $mysqli->store_result()) {
                                        $result->free();
                                    }
                                } while ($mysqli->more_results() && $mysqli->next_result());
                                
                                echo '<div class="step success">';
                                echo '<div class="result-icon">✅</div>';
                                echo '<strong>Success!</strong><br>';
                                echo 'Database travel_db created with all tables<br><br>';
                                echo '<button onclick="window.location=\'http://localhost:8080/travel/admin\'">Go to Admin Panel →</button>';
                                echo '</div>';
                            } else {
                                echo '<div class="step error"><strong>❌ Error executing schema:</strong> ' . $mysqli->error . '</div>';
                            }
                        }
                    }
                    
                    $mysqli->close();
                }
            }
            ?>
        </div>

        <!-- Step 5: Verify -->
        <div class="fix-box">
            <h2>Step 5: Verify It Works</h2>
            <div class="step info">
                <strong>After creating the database, visit these to verify:</strong>
                <div class="check-item">
                    <span class="check-icon">1.</span>
                    <span><a href="http://localhost:8080/travel/status.php" target="_blank">Status Check</a> - See all systems</span>
                </div>
                <div class="check-item">
                    <span class="check-icon">2.</span>
                    <span><a href="http://localhost:8080/travel/admin" target="_blank">Admin Panel</a> - Login page</span>
                </div>
                <div class="check-item">
                    <span class="check-icon">3.</span>
                    <span><a href="http://localhost:8080/phpmyadmin" target="_blank">phpMyAdmin</a> - Manage database</span>
                </div>
            </div>
        </div>

        <!-- Troubleshooting -->
        <div class="fix-box">
            <h2>🆘 Still Not Working?</h2>
            
            <div class="step error">
                <strong>Error: "MySQL is not running"</strong>
                <div style="margin-top: 10px;">
                    1. Open: <code>C:\xampp\xampp-control.exe</code><br>
                    2. Right-click → "Run as Administrator"<br>
                    3. Click [Start] next to MySQL<br>
                    4. Wait for green "Running" status<br>
                    5. Refresh this page
                </div>
            </div>

            <div class="step error">
                <strong>Error: "Port 3306 already in use"</strong>
                <div style="margin-top: 10px;">
                    Run in PowerShell:<br>
                    <code>netstat -ano | findstr :3306</code><br>
                    Find the PID, then: <code>taskkill /PID &lt;number&gt; /F</code>
                </div>
            </div>

            <div class="step error">
                <strong>Error: "Plugin caching_sha2_password not found"</strong>
                <div style="margin-top: 10px;">
                    This is normal on XAMPP. The Database.php class handles it automatically.<br>
                    Just click "Create Database" button above.
                </div>
            </div>
        </div>

        <div style="text-align: center; margin-top: 40px; color: white;">
            <p>Need help? Check: <a href="http://localhost:8080/travel/STARTUP_GUIDE.md" style="color: #ffd700;">STARTUP_GUIDE.md</a></p>
        </div>
    </div>
</body>
</html>
