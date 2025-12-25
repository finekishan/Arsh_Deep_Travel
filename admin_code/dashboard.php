<?php
/**
 * Admin Dashboard
 * File: admin/dashboard.php
 * Shows admin menu with links to gallery management, bookings, etc.
 */

require_once '../config/db.php';
require_once '../config/auth.php';

// Require admin login
requireAdmin();

// Get stats
$stats = [];

// Count gallery images
$result = $connection->query('SELECT COUNT(*) as count FROM gallery');
$stats['gallery'] = $result->fetch_assoc()['count'];

// Count pending bookings
$result = $connection->query("SELECT COUNT(*) as count FROM bookings WHERE status = 'pending'");
$stats['bookings'] = $result->fetch_assoc()['count'];

// Count unread contacts
$result = $connection->query("SELECT COUNT(*) as count FROM contacts WHERE status = 'unread'");
$stats['contacts'] = $result->fetch_assoc()['count'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Arsh Deep Travels</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css">
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <img src="../website/assets/img/logo-1.png" alt="Arsh Deep Travels Logo" style="height: 50px; margin-bottom: -10px;" class="mr-4">
                    <span class="text-gray-600">Admin Panel</span>
                </div>
                <div class="flex items-center gap-4">
                    <span class="text-gray-700">Welcome, <strong><?php echo htmlspecialchars($_SESSION['username']); ?></strong></span>
                    <a href="logout.php" class="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg" style="background: #000000; color: white; padding: 0.5rem 1rem; border-radius: 0.5rem;">
                        <i class="las la-sign-out-alt"></i> Logout
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Dashboard Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Header -->
        <div class="mb-8">
            <h2 class="text-3xl font-bold text-gray-800">Dashboard</h2>
            <p class="text-gray-600 mt-2">Manage your admin panel from here</p>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <!-- Gallery Card -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div class="flex items-center">
                    <div class="bg-blue-100 rounded-full p-3">
                        <i class="las la-images text-blue-600 text-2xl"></i>
                    </div>
                    <div class="ml-4">
                        <p class="text-gray-600 text-sm">Gallery Images</p>
                        <p class="text-3xl font-bold text-gray-800"><?php echo $stats['gallery']; ?></p>
                    </div>
                </div>
            </div>

            <!-- Bookings Card -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div class="flex items-center">
                    <div class="bg-green-100 rounded-full p-3">
                        <i class="las la-calendar text-green-600 text-2xl"></i>
                    </div>
                    <div class="ml-4">
                        <p class="text-gray-600 text-sm">Pending Bookings</p>
                        <p class="text-3xl font-bold text-gray-800"><?php echo $stats['bookings']; ?></p>
                    </div>
                </div>
            </div>

            <!-- Contacts Card -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div class="flex items-center">
                    <div class="bg-orange-100 rounded-full p-3">
                        <i class="las la-envelope text-orange-600 text-2xl"></i>
                    </div>
                    <div class="ml-4">
                        <p class="text-gray-600 text-sm">Unread Messages</p>
                        <p class="text-3xl font-bold text-gray-800"><?php echo $stats['contacts']; ?></p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Menu Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Gallery Management -->
            <a href="gallery.php" class="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition transform hover:scale-105">
                <div class="text-center">
                    <i class="las la-images text-4xl text-blue-500 mb-4"></i>
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">Gallery Management</h3>
                    <p class="text-gray-600">Upload and manage gallery images</p>
                </div>
            </a>

            <!-- Bookings -->
            <a href="bookings.php" class="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition transform hover:scale-105">
                <div class="text-center">
                    <i class="las la-calendar text-4xl text-green-500 mb-4"></i>
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">Bookings</h3>
                    <p class="text-gray-600">View and manage taxi bookings</p>
                </div>
            </a>

            <!-- Contact Messages -->
            <a href="contacts.php" class="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition transform hover:scale-105">
                <div class="text-center">
                    <i class="las la-envelope text-4xl text-orange-500 mb-4"></i>
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">Contact Messages</h3>
                    <p class="text-gray-600">View contact form submissions</p>
                </div>
            </a>

            <!-- Settings -->
            <a href="settings.php" class="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition transform hover:scale-105">
                <div class="text-center">
                    <i class="las la-cog text-4xl text-purple-500 mb-4"></i>
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">Settings</h3>
                    <p class="text-gray-600">Manage admin account settings</p>
                </div>
            </a>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white mt-16 py-8">
        <div class="max-w-7xl mx-auto text-center">
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
    </footer>
</body>
</html>
