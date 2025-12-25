<?php
require_once '../config/db.php';

$message = '';
$message_type = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize input
    $name = trim($_POST['name'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $user_message = trim($_POST['msg'] ?? '');

    // Validate input
    if (empty($name) || empty($phone) || empty($user_message)) {
        $message = 'Please fill in all required fields.';
        $message_type = 'error';
    } elseif (strlen($phone) < 10) {
        $message = 'Please enter a valid phone number.';
        $message_type = 'error';
    } else {
        // Insert into bookings table
        $stmt = $connection->prepare("INSERT INTO bookings (name, phone, message) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $name, $phone, $user_message);

        if ($stmt->execute()) {
            $message = 'Thank you for your booking request! We will contact you soon.';
            $message_type = 'success';
        } else {
            $message = 'Sorry, there was an error submitting your booking. Please try again.';
            $message_type = 'error';
        }

        $stmt->close();
    }
}

// If this is an AJAX request, return JSON response
if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
    header('Content-Type: application/json');
    echo json_encode([
        'success' => $message_type === 'success',
        'message' => $message
    ]);
    exit;
}

// Otherwise, redirect back to the referring page with a message
$referer = $_SERVER['HTTP_REFERER'] ?? 'index.php';
if ($message_type === 'success') {
    header("Location: $referer?booking=success");
} else {
    header("Location: $referer?booking=error");
}
exit;
?>

