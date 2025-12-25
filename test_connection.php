<?php
/**
 * Database Connection Test
 * File: test_connection.php
 * 
 * Usage: Open http://localhost/travel/test_connection.php in browser
 * Tests MySQLi, PDO, and shows database info
 */

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Database Connection Test</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f0f2f5; padding: 20px; }
        .container { max-width: 900px; margin: 0 auto; }
        h1 { color: #333; margin-bottom: 30px; text-align: center; }
        .test-box { background: white; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .test-box h2 { font-size: 18px; margin-bottom: 15px; color: #333; border-bottom: 2px solid #ddd; padding-bottom: 10px; }
        .result { padding: 10px; margin: 10px 0; border-radius: 4px; font-family: monospace; font-size: 13px; }
        .success { background: #e8f5e9; border-left: 4px solid #4caf50; color: #2e7d32; }
        .error { background: #ffebee; border-left: 4px solid #f44336; color: #c62828; }
        .warning { background: #fff3e0; border-left: 4px solid #ff9800; color: #e65100; }
        .info { background: #e3f2fd; border-left: 4px solid #2196f3; color: #1565c0; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background: #f5f5f5; font-weight: 600; }
        .status-icon { margin-right: 5px; font-weight: bold; }
        .status-pass::before { content: "✓ "; color: #4caf50; }
        .status-fail::before { content: "✗ "; color: #f44336; }
        .status-warn::before { content: "⚠ "; color: #ff9800; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔗 Database Connection Test</h1>

        <!-- PHP Version & Extensions -->
        <div class="test-box">
            <h2>PHP Information</h2>
            <div class="result info">
                <strong>PHP Version:</strong> <?php echo phpversion(); ?>
            </div>

            <table>
                <tr>
                    <th>Extension</th>
                    <th>Status</th>
                </tr>
                <?php
                $extensions = ['mysqli', 'pdo', 'pdo_mysql'];
                foreach ($extensions as $ext) {
                    $loaded = extension_loaded($ext);
                    $status = $loaded ? '<span class="status-pass">Loaded</span>' : '<span class="status-fail">Not Loaded</span>';
                    echo "<tr><td><strong>$ext</strong></td><td>$status</td></tr>";
                }
                ?>
            </table>
        </div>

        <!-- MySQLi Connection Test -->
        <div class="test-box">
            <h2>MySQLi Connection Test</h2>
            <?php
            $mysqli_config = [
                'host' => 'localhost',
                'user' => 'root',
                'pass' => '',
                'db' => 'travel_db',
                'port' => 3306
            ];

            try {
                $mysqli = @new mysqli(
                    $mysqli_config['host'],
                    $mysqli_config['user'],
                    $mysqli_config['pass'],
                    $mysqli_config['db'],
                    $mysqli_config['port']
                );

                if ($mysqli->connect_error) {
                    echo '<div class="result error">
                        <strong>Connection Failed:</strong> ' . htmlspecialchars($mysqli->connect_error) . '
                    </div>';
                } else {
                    echo '<div class="result success">
                        <strong>Connection Successful!</strong><br>
                        Server: ' . htmlspecialchars($mysqli->server_info) . '<br>
                        Client: ' . htmlspecialchars($mysqli->client_info) . '
                    </div>';

                    // Show database info
                    $result = $mysqli->query('SELECT DATABASE() as db');
                    if ($result) {
                        $row = $result->fetch_assoc();
                        echo '<div class="result info">
                            <strong>Current Database:</strong> ' . htmlspecialchars($row['db'] ?: 'None') . '
                        </div>';
                    }

                    // Show tables
                    $result = $mysqli->query('SHOW TABLES');
                    if ($result && $result->num_rows > 0) {
                        echo '<div class="result info">
                            <strong>Tables in Database:</strong><br>';
                        while ($row = $result->fetch_row()) {
                            echo '• ' . htmlspecialchars($row[0]) . '<br>';
                        }
                        echo '</div>';
                    } else {
                        echo '<div class="result warning">
                            <strong>No tables found.</strong> Run ADMIN_PANEL_SETUP_CHECKLIST.md to import schema.
                        </div>';
                    }

                    $mysqli->close();
                }
            } catch (Exception $e) {
                echo '<div class="result error">
                    <strong>Error:</strong> ' . htmlspecialchars($e->getMessage()) . '
                </div>';
            }
            ?>
        </div>

        <!-- Database Class Test -->
        <div class="test-box">
            <h2>Database Class Connection Test</h2>
            <?php
            try {
                require_once 'config/Database.php';

                $db = Database::getInstance($mysqli_config);

                if ($db->isConnected()) {
                    echo '<div class="result success">
                        <strong>Database Class Connected!</strong>
                    </div>';

                    // Test fetchAll
                    try {
                        $rows = $db->fetchAll('SHOW TABLES');
                        echo '<div class="result info">
                            <strong>Tables Count:</strong> ' . count($rows) . '
                        </div>';
                    } catch (Exception $e) {
                        echo '<div class="result warning">
                            Tables not accessible: ' . htmlspecialchars($e->getMessage()) . '
                        </div>';
                    }
                } else {
                    echo '<div class="result error">
                        <strong>Database Class Failed to Connect</strong>
                    </div>';
                }
            } catch (Exception $e) {
                echo '<div class="result error">
                    <strong>Error:</strong> ' . htmlspecialchars($e->getMessage()) . '
                </div>';
            }
            ?>
        </div>

        <!-- Connection Parameters -->
        <div class="test-box">
            <h2>Connection Parameters (from config/connect.php)</h2>
            <table>
                <tr>
                    <th>Parameter</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td><strong>Host</strong></td>
                    <td><?php echo htmlspecialchars($mysqli_config['host']); ?></td>
                </tr>
                <tr>
                    <td><strong>User</strong></td>
                    <td><?php echo htmlspecialchars($mysqli_config['user']); ?></td>
                </tr>
                <tr>
                    <td><strong>Password</strong></td>
                    <td><?php echo $mysqli_config['pass'] ? '(set)' : '(empty)'; ?></td>
                </tr>
                <tr>
                    <td><strong>Database</strong></td>
                    <td><?php echo htmlspecialchars($mysqli_config['db']); ?></td>
                </tr>
                <tr>
                    <td><strong>Port</strong></td>
                    <td><?php echo $mysqli_config['port']; ?></td>
                </tr>
            </table>
        </div>

        <!-- Troubleshooting -->
        <div class="test-box">
            <h2>🔧 Troubleshooting Guide</h2>
            <div class="result info">
                <strong>If connection fails:</strong><br>
                1. Ensure MySQL is running (start from XAMPP Control Panel)<br>
                2. Check if database exists: <code>CREATE DATABASE travel_db;</code><br>
                3. Import schema: <code>mysql -u root travel_db &lt; database/schema.sql</code><br>
                4. Update credentials in <code>config/connect.php</code><br>
                5. Check logs in <code>logs/database.log</code>
            </div>
        </div>

        <!-- Usage Examples -->
        <div class="test-box">
            <h2>💡 Usage Examples</h2>
            <div class="result info">
                <strong>Fetch single row:</strong><br>
                <code>$row = $db->fetchOne('SELECT * FROM users WHERE id = ?', [1]);</code><br><br>

                <strong>Fetch all rows:</strong><br>
                <code>$rows = $db->fetchAll('SELECT * FROM gallery ORDER BY uploaded_at DESC');</code><br><br>

                <strong>Insert data:</strong><br>
                <code>$id = $db->insert('INSERT INTO gallery (image_name, uploaded_by) VALUES (?, ?)', ['My Image', 1], 'si');</code><br><br>

                <strong>Update data:</strong><br>
                <code>$affected = $db->update('UPDATE users SET email = ? WHERE id = ?', ['new@email.com', 1], 'si');</code><br><br>

                <strong>Delete data:</strong><br>
                <code>$affected = $db->delete('DELETE FROM gallery WHERE id = ?', [1], 'i');</code>
            </div>
        </div>

        <div style="text-align: center; margin-top: 30px; color: #999; font-size: 12px;">
            <p>Test Page Created: <?php echo date('Y-m-d H:i:s'); ?></p>
        </div>
    </div>
</body>
</html>
