<?php
echo "Testing database connection from travel root...\n";

try {
    require_once 'config/db.php';
    echo "✓ Config file loaded successfully\n";

    if (isset($connection)) {
        echo "✓ Connection variable exists\n";
        echo "Connection status: " . ($connection->ping() ? "Connected" : "Disconnected") . "\n";

        // Test a simple query
        $result = $connection->query("SELECT 1 as test");
        if ($result) {
            $row = $result->fetch_assoc();
            echo "✓ Test query successful: " . $row['test'] . "\n";
        } else {
            echo "✗ Test query failed: " . $connection->error . "\n";
        }

        $connection->close();
        echo "✓ Connection closed\n";
    } else {
        echo "✗ Connection variable not set\n";
    }
} catch (Exception $e) {
    echo "✗ Exception: " . $e->getMessage() . "\n";
}
?>

