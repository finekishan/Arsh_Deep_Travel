<?php
/**
 * Admin Settings
 * File: admin/settings.php
 */

require_once '../config/db.php';
require_once '../config/auth.php';

requireAdmin();

$message = '';

// Handle password change
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'change_password') {
    $current_password = $_POST['current_password'] ?? '';
    $new_password = $_POST['new_password'] ?? '';
    $confirm_password = $_POST['confirm_password'] ?? '';

    // Validate inputs
    if (empty($current_password) || empty($new_password) || empty($confirm_password)) {
        $message = 'All fields are required';
    } elseif ($new_password !== $confirm_password) {
        $message = 'New passwords do not match';
    } elseif (strlen($new_password) < 8) {
        $message = 'Password must be at least 8 characters';
    } else {
        // Fetch current password hash
        $stmt = $connection->prepare('SELECT password_hash FROM users WHERE id = ?');
        $stmt->bind_param('i', $_SESSION['user_id']);
        $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();

        // Verify current password
        if (password_verify($current_password, $user['password_hash'])) {
            // Update password
            $new_hash = password_hash($new_password, PASSWORD_BCRYPT);
            $stmt = $connection->prepare('UPDATE users SET password_hash = ? WHERE id = ?');
            $stmt->bind_param('si', $new_hash, $_SESSION['user_id']);

            if ($stmt->execute()) {
                $message = 'Password changed successfully';
                logAdminAction('PASSWORD_CHANGE', 'Admin changed password');
            }
        } else {
            $message = 'Current password is incorrect';
        }
        $stmt->close();
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Settings - Admin Panel</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css">
</head>
<body class="bg-gray-50">
    <nav class="bg-white shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="dashboard.php" class="text-blue-600 hover:text-blue-800">← Dashboard</a>
            <h1 class="text-2xl font-bold">Settings</h1>
            <a href="logout.php" class="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded" style="background: #000000; color: white; padding: 0.5rem 1rem; border-radius: 0.25rem;">Logout</a>
        </div>
    </nav>

    <div class="max-w-4xl mx-auto px-4 py-8">
        <div class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-bold mb-6">Account Settings</h2>

            <?php if ($message): ?>
                <div class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-6">
                    <?php echo htmlspecialchars($message); ?>
                </div>
            <?php endif; ?>

            <!-- Profile Info -->
            <div class="mb-8">
                <h3 class="text-lg font-bold mb-4">Profile Information</h3>
                <div class="space-y-2">
                    <p><strong>Username:</strong> <?php echo htmlspecialchars($_SESSION['username']); ?></p>
                    <p><strong>Email:</strong> <?php echo htmlspecialchars($_SESSION['email']); ?></p>
                    <p><strong>Role:</strong> <?php echo ucfirst($_SESSION['role']); ?></p>
                </div>
            </div>

            <!-- Change Password -->
            <div class="border-t pt-8">
                <h3 class="text-lg font-bold mb-4">Change Password</h3>
                <form method="POST" class="space-y-4 max-w-md">
                    <input type="hidden" name="action" value="change_password">

                    <div>
                        <label class="block font-semibold mb-2">Current Password</label>
                        <input 
                            type="password" 
                            name="current_password" 
                            required 
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                    </div>

                    <div>
                        <label class="block font-semibold mb-2">New Password</label>
                        <input 
                            type="password" 
                            name="new_password" 
                            required 
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="At least 8 characters"
                        >
                    </div>

                    <div>
                        <label class="block font-semibold mb-2">Confirm New Password</label>
                        <input 
                            type="password" 
                            name="confirm_password" 
                            required 
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                    </div>

                    <button
                        type="submit"
                        class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg"
                        style="background: #000000; color: white; border-radius: 0.5rem;"
                    >
                        Update Password
                    </button>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
