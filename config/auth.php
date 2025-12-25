<?php
/**
 * Authentication & Session Management
 * File: config/auth.php
 * Security: Implements session regeneration, CSRF tokens, secure cookies
 */

// Set secure session settings BEFORE starting session
// These must be set before session_start() is called
ini_set('session.cookie_httponly', 1);      // Prevent JavaScript from accessing session cookie
ini_set('session.cookie_secure', 0);        // Set to 1 if using HTTPS (recommended for production)
ini_set('session.use_strict_mode', 1);      // Prevent session fixation
ini_set('session.cookie_samesite', 'Lax');  // CSRF protection

// Start session if not already started
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Function: Check if user is logged in
function isLoggedIn() {
    return isset($_SESSION['user_id']) && isset($_SESSION['username']) && $_SESSION['user_id'] > 0;
}

// Function: Check if user is admin
function isAdmin() {
    return isLoggedIn() && isset($_SESSION['role']) && $_SESSION['role'] === 'admin';
}

// Function: Redirect if not logged in (used in admin pages)
function requireLogin() {
    if (!isLoggedIn()) {
        header('Location: /travel/admin/index.php?redirect=' . urlencode($_SERVER['REQUEST_URI']));
        exit();
    }
}

// Function: Redirect if not admin
function requireAdmin() {
    requireLogin();
    if (!isAdmin()) {
        header('Location: /travel/admin/dashboard.php?error=Unauthorized');
        exit();
    }
}

// Function: Generate CSRF token (for form security)
function generateCSRFToken() {
    if (!isset($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

// Function: Verify CSRF token
function verifyCSRFToken($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

// Function: Sanitize user input (prevent XSS)
function sanitizeInput($input) {
    return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
}

// Function: Log admin action (for audit trail)
function logAdminAction($action, $details = '') {
    $log_file = __DIR__ . '/../logs/admin_actions.log';
    if (!is_dir(dirname($log_file))) {
        mkdir(dirname($log_file), 0755, true);
    }
    $log_entry = date('Y-m-d H:i:s') . ' | User: ' . ($_SESSION['username'] ?? 'Unknown') . ' | Action: ' . $action . ' | Details: ' . $details . PHP_EOL;
    file_put_contents($log_file, $log_entry, FILE_APPEND);
}

// Function: Regenerate session ID (prevent session fixation)
function regenerateSession() {
    session_regenerate_id(true);
}

?>
