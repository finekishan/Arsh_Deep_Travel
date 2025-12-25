<?php
/**
 * Image Upload Handler
 * File: admin/upload_image.php
 * Security: File type validation, size limit, secure filename, prepared statements
 */

require_once '../config/db.php';
require_once '../config/auth.php';

// Require admin login
requireAdmin();

header('Content-Type: application/json');

// Check if file was uploaded
if (!isset($_FILES['image_file'])) {
    echo json_encode(['success' => false, 'message' => 'No file uploaded']);
    exit();
}

$image_name = sanitizeInput($_POST['image_name'] ?? '');
$description = sanitizeInput($_POST['description'] ?? '');
$file = $_FILES['image_file'];

// Validate input
if (empty($image_name)) {
    echo json_encode(['success' => false, 'message' => 'Image name is required']);
    exit();
}

// Validate file
$allowed_types = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
$max_size = 5 * 1024 * 1024; // 5MB

if (!in_array($file['type'], $allowed_types)) {
    echo json_encode(['success' => false, 'message' => 'Invalid file type. Allowed: JPG, PNG, WebP, GIF']);
    exit();
}

if ($file['size'] > $max_size) {
    echo json_encode(['success' => false, 'message' => 'File size exceeds 5MB limit']);
    exit();
}

if ($file['error'] !== UPLOAD_ERR_OK) {
    echo json_encode(['success' => false, 'message' => 'Upload error: ' . $file['error']]);
    exit();
}

// Create upload directory if it doesn't exist
$upload_dir = '../website/assets/img/gallery/';
if (!is_dir($upload_dir)) {
    mkdir($upload_dir, 0755, true);
}

// Generate secure filename
$file_ext = pathinfo($file['name'], PATHINFO_EXTENSION);
$secure_filename = bin2hex(random_bytes(16)) . '.' . $file_ext;
$upload_path = $upload_dir . $secure_filename;
$db_path = 'assets/img/gallery/' . $secure_filename;

// Move uploaded file
if (!move_uploaded_file($file['tmp_name'], $upload_path)) {
    echo json_encode(['success' => false, 'message' => 'Failed to save file']);
    exit();
}

// Insert into database using prepared statement
$stmt = $connection->prepare('INSERT INTO gallery (image_name, image_path, description, uploaded_by) VALUES (?, ?, ?, ?)');

if (!$stmt) {
    unlink($upload_path); // Delete uploaded file on DB error
    echo json_encode(['success' => false, 'message' => 'Database error: ' . $connection->error]);
    exit();
}

$stmt->bind_param('sssi', $image_name, $db_path, $description, $_SESSION['user_id']);

if ($stmt->execute()) {
    logAdminAction('GALLERY_UPLOAD', 'Image: ' . $image_name);
    echo json_encode(['success' => true, 'message' => 'Image uploaded successfully', 'image_id' => $stmt->insert_id]);
} else {
    unlink($upload_path); // Delete uploaded file on DB error
    echo json_encode(['success' => false, 'message' => 'Failed to save to database']);
}

$stmt->close();
?>
