<?php
require_once 'config/db.php';

echo "Testing booking form submission...\n\n";

// Test data
$name = "Test User";
$phone = "1234567890";
$message = "Test booking message";

// Insert test booking
$stmt = $connection->prepare("INSERT INTO bookings (name, phone, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $phone, $message);

if ($stmt->execute()) {
    echo "✓ Test booking inserted successfully (ID: " . $stmt->insert_id . ")\n";

    // Verify it was inserted
    $result = $connection->query('SELECT COUNT(*) as count FROM bookings');
    $row = $result->fetch_assoc();
    echo "✓ Total bookings now: " . $row['count'] . "\n";

    // Show the inserted booking
    $result = $connection->query('SELECT * FROM bookings ORDER BY id DESC LIMIT 1');
    $booking = $result->fetch_assoc();
    echo "\nBooking details:\n";
    echo "- Name: " . $booking['name'] . "\n";
    echo "- Phone: " . $booking['phone'] . "\n";
    echo "- Message: " . $booking['message'] . "\n";
    echo "- Status: " . $booking['status'] . "\n";
    echo "- Created: " . $booking['created_at'] . "\n";

} else {
    echo "✗ Failed to insert test booking: " . $stmt->error . "\n";
}

$stmt->close();
$connection->close();
?>

