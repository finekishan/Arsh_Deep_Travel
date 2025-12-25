<?php
require_once 'config/db.php';

echo "Testing database connection and contacts table...\n\n";

// Check if table exists
$result = $connection->query("SHOW TABLES LIKE 'contacts'");
if ($result->num_rows > 0) {
    echo "✓ Contacts table exists\n";

    // Check count of contacts
    $result = $connection->query('SELECT COUNT(*) as count FROM contacts');
    if ($result) {
        $row = $result->fetch_assoc();
        echo "✓ Contacts count: " . $row['count'] . "\n";

        if ($row['count'] > 0) {
            // Show recent contacts
            echo "\nRecent contacts:\n";
            $result = $connection->query('SELECT id, name, email, subject, status, created_at FROM contacts ORDER BY created_at DESC LIMIT 5');
            while ($contact = $result->fetch_assoc()) {
                echo "- ID: {$contact['id']}, Name: {$contact['name']}, Email: {$contact['email']}, Subject: {$contact['subject']}, Status: {$contact['status']}, Date: {$contact['created_at']}\n";
            }
        }
    } else {
        echo "✗ Query failed: " . $connection->error . "\n";
    }
} else {
    echo "✗ Contacts table does not exist\n";

    // Try to create the table
    echo "Creating contacts table...\n";
    $create_sql = "CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(15),
        subject VARCHAR(255),
        message TEXT NOT NULL,
        status ENUM('unread', 'read', 'replied') DEFAULT 'unread',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_status (status),
        INDEX idx_created_at (created_at),
        INDEX idx_email (email)
    )";

    if ($connection->query($create_sql)) {
        echo "✓ Contacts table created successfully\n";
    } else {
        echo "✗ Failed to create contacts table: " . $connection->error . "\n";
    }
}

$connection->close();
?>
