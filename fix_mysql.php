<?php
/**
 * MySQL Authentication Plugin Fix
 * File: fix_mysql.php
 * 
 * Solves: "Plugin caching_sha2_password could not be loaded"
 * 
 * Run this once to fix MySQL authentication issues
 */

echo "=== MySQL Authentication Fix ===\n\n";

// Step 1: Check if MySQL is running
echo "Step 1: Checking MySQL connection...\n";
$mysqli = @new mysqli('localhost', 'root', '');

if ($mysqli->connect_error) {
    echo "❌ ERROR: Cannot connect to MySQL\n";
    echo "Error: " . $mysqli->connect_error . "\n";
    echo "\nFix: Start MySQL from XAMPP Control Panel\n";
    exit(1);
}

echo "✓ Connected to MySQL\n\n";

// Step 2: Check if travel_db exists
echo "Step 2: Checking if travel_db database exists...\n";
$result = $mysqli->query("SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME='travel_db'");

if ($result && $result->num_rows > 0) {
    echo "✓ Database 'travel_db' exists\n\n";
} else {
    echo "⚠ Database 'travel_db' not found. Creating...\n";
    
    if ($mysqli->query("CREATE DATABASE travel_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci")) {
        echo "✓ Database created\n\n";
    } else {
        echo "❌ Failed to create database: " . $mysqli->error . "\n";
        exit(1);
    }
}

// Step 3: Fix root user authentication plugin
echo "Step 3: Fixing root user authentication plugin...\n";

try {
    // Check current plugin for root user
    $query = "SELECT user, plugin FROM mysql.user WHERE user='root'";
    $result = $mysqli->query($query);
    
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $currentPlugin = $row['plugin'];
        
        echo "Current plugin: $currentPlugin\n";
        
        // If using caching_sha2_password, change to mysql_native_password
        if ($currentPlugin === 'caching_sha2_password' || $currentPlugin === 'sha256_password') {
            echo "Changing to mysql_native_password...\n";
            
            // Use native password instead of problematic plugin
            if ($mysqli->query("ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY ''")) {
                echo "✓ Root user updated\n";
                $mysqli->query("FLUSH PRIVILEGES");
                echo "✓ Privileges flushed\n\n";
            } else {
                echo "❌ Failed to update root user: " . $mysqli->error . "\n";
                exit(1);
            }
        } else {
            echo "✓ Root user already using compatible plugin\n\n";
        }
    }
} catch (Exception $e) {
    echo "Note: " . $e->getMessage() . "\n\n";
}

// Step 4: Create travel_user (recommended for security)
echo "Step 4: Creating 'travel_user' database user (recommended)...\n";

$travelUserExists = false;
$result = $mysqli->query("SELECT user FROM mysql.user WHERE user='travel_user' AND host='localhost'");

if ($result && $result->num_rows > 0) {
    $travelUserExists = true;
    echo "⚠ travel_user already exists\n";
} else {
    // Create new user with limited privileges
    if ($mysqli->query("CREATE USER 'travel_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Travel@123'")) {
        echo "✓ Created travel_user\n";
        
        // Grant privileges
        if ($mysqli->query("GRANT ALL PRIVILEGES ON travel_db.* TO 'travel_user'@'localhost'")) {
            echo "✓ Granted privileges to travel_user\n";
            $mysqli->query("FLUSH PRIVILEGES");
            echo "✓ Privileges flushed\n\n";
        }
    } else {
        // User might already exist, that's ok
        echo "⚠ Could not create travel_user (may already exist)\n\n";
    }
}

// Step 5: Verify database schema
echo "Step 5: Checking database schema...\n";

$mysqli->select_db('travel_db');
$result = $mysqli->query("SHOW TABLES");

if ($result && $result->num_rows > 0) {
    echo "✓ Database has " . $result->num_rows . " tables:\n";
    while ($row = $result->fetch_row()) {
        echo "  • " . $row[0] . "\n";
    }
    echo "\n";
} else {
    echo "⚠ No tables found in travel_db\n";
    echo "Run: mysql -u root travel_db < database/schema.sql\n\n";
}

// Step 6: Test connection with new credentials
echo "Step 6: Testing connection methods...\n";

// Test 1: Root connection
$test1 = @new mysqli('localhost', 'root', '', 'travel_db');
if (!$test1->connect_error) {
    echo "✓ Root connection works\n";
    $test1->close();
} else {
    echo "❌ Root connection failed: " . $test1->connect_error . "\n";
}

// Test 2: travel_user connection (if created)
if ($travelUserExists || true) {
    $test2 = @new mysqli('localhost', 'travel_user', 'Travel@123', 'travel_db');
    if (!$test2->connect_error) {
        echo "✓ travel_user connection works\n";
        $test2->close();
    } else {
        echo "⚠ travel_user connection: " . $test2->connect_error . "\n";
    }
}

$mysqli->close();

echo "\n=== Fix Complete ===\n";
echo "\nNext steps:\n";
echo "1. Update config/connect.php if needed\n";
echo "2. Run test_connection.php to verify\n";
echo "3. Import schema if not done: mysql -u root travel_db < database/schema.sql\n";
echo "\nRecommended credentials in config/connect.php:\n";
echo "  user: 'travel_user'\n";
echo "  pass: 'Travel@123'\n";
echo "  (more secure than using root)\n";
?>
