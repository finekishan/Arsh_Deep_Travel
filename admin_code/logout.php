<?php
/**
 * Admin Logout
 * File: admin/logout.php
 * Security: Session destruction, regeneration, audit log
 */

require_once '../config/db.php';
require_once '../config/auth.php';

// Log logout action
if (isLoggedIn()) {
    logAdminAction('LOGOUT', 'User logged out');
}

// Destroy session completely
session_destroy();

// Clear all session variables
$_SESSION = [];

// Delete session cookie
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

// Redirect to login page
header('Location: index.php?message=Logged%20out%20successfully');
exit();
?>
