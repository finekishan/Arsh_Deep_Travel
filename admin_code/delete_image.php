<?php
/**
 * Image Delete Handler
 * File: admin/delete_image.php
 * Security: Admin verification, prepared statements, file deletion
 */

require_once '../config/db.php';
require_once '../config/auth.php';

// Require admin login
requireAdmin();

header('Content-Type: application/json');

$image_id = intval($_POST['image_id'] ?? 0);

if ($image_id <= 0) {
    echo json_encode(['success' => false, 'message' => 'Invalid image ID']);
    exit();
}

// Fetch image from database using prepared statement
$stmt = $connection->prepare('SELECT image_path FROM gallery WHERE id = ?');
$stmt->bind_param('i', $image_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(['success' => false, 'message' => 'Image not found']);
    exit();
}

$image = $result->fetch_assoc();
$image_path = '../website/' . $image['image_path'];

// Delete from database
$stmt = $connection->prepare('DELETE FROM gallery WHERE id = ?');
$stmt->bind_param('i', $image_id);

if ($stmt->execute()) {
    // Delete physical file
    if (file_exists($image_path)) {
        unlink($image_path);
    }
    
    logAdminAction('GALLERY_DELETE', 'Image ID: ' . $image_id);
    echo json_encode(['success' => true, 'message' => 'Image deleted successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to delete image']);
}

$stmt->close();
?>
