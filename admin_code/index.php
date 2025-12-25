<?php
/**
 * Admin Login Page
 * File: admin_code/index.php
 * Security: CSRF token, prepared statements, rate limiting ready
 */

require_once '../config/db.php';
require_once '../config/auth.php';

// If already logged in, redirect to dashboard
if (isLoggedIn()) {
    header('Location: dashboard.php');
    exit();
}

$error = '';
$success = '';

// Handle login form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verify CSRF token
    if (!isset($_POST['csrf_token']) || !verifyCSRFToken($_POST['csrf_token'])) {
        $error = 'Invalid security token. Please try again.';
    } else {
        $raw_username = trim($_POST['username'] ?? '');
        $username = sanitizeInput($raw_username); // For display/logging only
        $password = $_POST['password'] ?? '';

        // DEBUG: Log input values
        error_log("DEBUG: Login attempt - Raw username: '$raw_username', Password length: " . strlen($password));

        // Validate input
        if (empty($username) || empty($password)) {
            $error = 'Username and password are required.';
        } else {
            // DEBUG: Check database connection
            if (!$connection) {
                error_log("DEBUG: Database connection is null!");
                $error = 'Database connection error.';
            }

            // Query user from database using prepared statement
            $stmt = $connection->prepare('SELECT id, username, email, password_hash, role FROM users WHERE username = ? OR email = ?');
            $stmt->bind_param('ss', $raw_username, $raw_username);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows === 1) {
                $user = $result->fetch_assoc();

                // DEBUG: Log user found
                error_log("DEBUG: User found - ID: {$user['id']}, Username: {$user['username']}");

                // Verify password (using bcrypt)
                if (password_verify($password, $user['password_hash'])) {
                    // Check if user is admin
                    if ($user['role'] !== 'admin') {
                        $error = 'You do not have permission to access admin panel.';
                        logAdminAction('LOGIN_FAILED', 'User is not admin: ' . $username);
                    } else {
                        // Set session variables
                        regenerateSession();
                        $_SESSION['user_id'] = $user['id'];
                        $_SESSION['username'] = $user['username'];
                        $_SESSION['email'] = $user['email'];
                        $_SESSION['role'] = $user['role'];

                        logAdminAction('LOGIN_SUCCESS', 'Admin login: ' . $username);
                        
                        // Redirect to dashboard or return URL
                        $redirect = $_GET['redirect'] ?? 'dashboard.php';
                        header('Location: ' . $redirect);
                        exit();
                    }
                } else {
                    $error = 'Invalid username or password.';
                    error_log("DEBUG: Password verification failed for user: $raw_username");
                    logAdminAction('LOGIN_FAILED', 'Wrong password for: ' . $username);
                }
            } else {
                $error = 'Invalid username or password.';
                error_log("DEBUG: No user found with username/email: $raw_username");
                logAdminAction('LOGIN_FAILED', 'User not found: ' . $username);
            }
            $stmt->close();
        }
    }
}

$csrf_token = generateCSRFToken();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login - Arsh Deep Travels</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif !important;
            overflow-x: hidden;
        }
    </style>
</head>
<body style="overflow-x: hidden;">
    <div class="w-full max-w-md">
        <!-- Login Card -->
        <div class="bg-white rounded-lg shadow-2xl p-8" style="font-family: 'Poppins', sans-serif;">
            <!-- Logo -->
            <div class="text-center mb-8">
                <img src="../website/assets/img/logo-1.png" alt="Arsh Deep Travels Logo" style="height: 120px; margin-bottom: -25px;" class="mx-auto">
                <p class="text-gray-600 mt-2">Admin Panel</p>
            </div>

            <!-- Error Message -->
            <?php if ($error): ?>
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                    <?php echo htmlspecialchars($error); ?>
                </div>
            <?php endif; ?>

            <!-- Success Message -->
            <?php if ($success): ?>
                <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    <?php echo htmlspecialchars($success); ?>
                </div>
            <?php endif; ?>

            <!-- Login Form -->
            <form method="POST" class="space-y-6">
                <!-- CSRF Token -->
                <input type="hidden" name="csrf_token" value="<?php echo htmlspecialchars($csrf_token); ?>">

                <!-- Username Field -->
                <div>
                    <label class="block text-gray-700 font-semibold mb-2">Username or Email</label>
                    <input 
                        type="text" 
                        name="username" 
                        required 
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        placeholder="Enter your username or email"
                    >
                </div>

                <!-- Password Field -->
                <div>
                    <label class="block text-gray-700 font-semibold mb-2">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        required 
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        placeholder="Enter your password"
                    >
                </div>

                <!-- Submit Button -->
                <button
                    type="submit"
                    class="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                    style="background: #000000; color: white; border-radius: 0.5rem;"
                >
                    Login
                </button>
            </form>

            <!-- Footer -->
            <div class="mt-6 text-center text-gray-600 text-sm">
                <p>Demo Credentials:</p>
                <p>Username: <strong>admin</strong></p>
                <p>Password: <strong>Admin@123</strong></p>
            </div>
        </div>

        <!-- Footer Text -->
        <div class="text-center mt-8 text-white">
            <div class="flex items-center justify-center mb-4">
                <img src="../website/assets/img/logo-1.png" alt="Arsh Deep Travels Logo" style="height: 40px; margin-bottom: -8px;" class="mr-3">
            </div>
            <p class="text-gray-400 mb-4">&copy; 2025 Arsh Deep Travels. All rights reserved.</p>
            <div class="flex justify-center space-x-6">
                <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
                    <i class="lab la-facebook-f text-xl"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
                    <i class="lab la-twitter text-xl"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-pink-400 transition-colors">
                    <i class="lab la-instagram text-xl"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-red-400 transition-colors">
                    <i class="lab la-youtube text-xl"></i>
                </a>
            </div>
        </div>
    </div>
</body>
</html>
