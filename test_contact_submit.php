<?php
require_once 'config/db.php';

echo "Testing contact form submission...\n\n";

// Test data
$name = "Test User";
$email = "test@example.com";
$phone = "1234567890";
$subject = "Test Subject";
$message = "This is a test message from the contact form.";

echo "Inserting test contact...\n";

// Insert test data
$stmt = $connection->prepare("INSERT INTO contacts (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $name, $email, $phone, $subject, $message);

if ($stmt->execute()) {
    echo "✓ Test contact inserted successfully (ID: " . $stmt->insert_id . ")\n";

    // Verify it was inserted
    $result = $connection->query('SELECT COUNT(*) as count FROM contacts');
    $row = $result->fetch_assoc();
    echo "✓ Total contacts now: " . $row['count'] . "\n";

    // Show the inserted contact
    $result = $connection->query('SELECT * FROM contacts ORDER BY id DESC LIMIT 1');
    $contact = $result->fetch_assoc();
    echo "\nContact details:\n";
    echo "- Name: " . $contact['name'] . "\n";
    echo "- Email: " . $contact['email'] . "\n";
    echo "- Subject: " . $contact['subject'] . "\n";
    echo "- Message: " . $contact['message'] . "\n";
    echo "- Status: " . $contact['status'] . "\n";
    echo "- Created: " . $contact['created_at'] . "\n";

} else {
    echo "✗ Failed to insert test contact: " . $stmt->error . "\n";
}

$stmt->close();
$connection->close();
?>

