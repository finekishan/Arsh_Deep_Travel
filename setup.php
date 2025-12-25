#!/usr/bin/env php
<?php
/**
 * Quick Setup Script
 * Run: php setup.php (from project root)
 * Creates necessary directories and shows setup steps
 */

echo "\n╔════════════════════════════════════════════════════════╗\n";
echo "║   Arsh Deep Travels - Admin Panel Setup Script         ║\n";
echo "╚════════════════════════════════════════════════════════╝\n\n";

// Step 1: Create necessary directories
$directories = [
    'assets/img/gallery',
    'logs',
    'config',
    'database'
];

echo "📁 Creating directories...\n";
foreach ($directories as $dir) {
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
        echo "   ✓ Created: $dir\n";
    } else {
        echo "   ✓ Already exists: $dir\n";
    }
}

// Step 2: Check PHP version
echo "\n🔧 Checking PHP version...\n";
$php_version = phpversion();
echo "   PHP Version: $php_version\n";
if (version_compare($php_version, '7.4', '>=')) {
    echo "   ✓ PHP version is compatible\n";
} else {
    echo "   ⚠ PHP 7.4+ is recommended\n";
}

// Step 3: Check extensions
echo "\n📦 Checking required PHP extensions...\n";
$extensions = ['mysqli', 'pdo', 'session', 'json'];
foreach ($extensions as $ext) {
    if (extension_loaded($ext)) {
        echo "   ✓ $ext loaded\n";
    } else {
        echo "   ⚠ $ext NOT loaded\n";
    }
}

// Step 4: Configuration check
echo "\n⚙️  Checking configuration files...\n";
$config_files = [
    'config/db.php' => 'Database Configuration',
    'config/auth.php' => 'Authentication',
    'database/schema.sql' => 'Database Schema',
    'admin/index.php' => 'Admin Login',
];

foreach ($config_files as $file => $name) {
    if (file_exists($file)) {
        echo "   ✓ $name ($file)\n";
    } else {
        echo "   ✗ MISSING: $name ($file)\n";
    }
}

// Step 5: Display setup instructions
echo "\n" . str_repeat("═", 56) . "\n";
echo "📋 SETUP INSTRUCTIONS\n";
echo str_repeat("═", 56) . "\n\n";

echo "1️⃣  CREATE DATABASE\n";
echo "   Run in phpMyAdmin or MySQL:\n";
echo "   └─ CREATE DATABASE travel_db;\n\n";

echo "2️⃣  IMPORT DATABASE SCHEMA\n";
echo "   Method A: phpMyAdmin\n";
echo "   └─ Import 'database/schema.sql'\n\n";
echo "   Method B: MySQL CLI\n";
echo "   └─ mysql -u root travel_db < database/schema.sql\n\n";

echo "3️⃣  CONFIGURE DATABASE (if needed)\n";
echo "   Edit 'config/db.php':\n";
echo "   └─ DB_HOST: localhost\n";
echo "   └─ DB_USER: root (or your MySQL user)\n";
echo "   └─ DB_PASS: (password, if any)\n";
echo "   └─ DB_NAME: travel_db\n\n";

echo "4️⃣  ACCESS ADMIN PANEL\n";
echo "   URL: http://localhost/travel/admin/\n\n";

echo "5️⃣  LOGIN WITH DEFAULT CREDENTIALS\n";
echo "   └─ Username: admin\n";
echo "   └─ Password: Admin@123\n\n";

echo "6️⃣  CHANGE PASSWORD\n";
echo "   └─ Go to Settings → Change Password\n\n";

echo "7️⃣  UPLOAD GALLERY IMAGES\n";
echo "   └─ Go to Gallery Management → Upload New Image\n\n";

echo "8️⃣  VIEW PUBLIC GALLERY\n";
echo "   URL: http://localhost/travel/gallery.php\n\n";

echo str_repeat("═", 56) . "\n";
echo "✨ FEATURES\n";
echo str_repeat("═", 56) . "\n\n";

$features = [
    'Admin Authentication with bcrypt' => 'Secure login',
    'Gallery Management' => 'Upload, view, delete images',
    'Image Metadata' => 'Name, description, date',
    'Booking Management' => 'View taxi bookings',
    'Contact Messages' => 'View form submissions',
    'Admin Settings' => 'Change password',
    'Audit Logging' => 'Track admin actions',
    'SQL Injection Protection' => 'Prepared statements',
    'XSS Prevention' => 'Input sanitization',
    'CSRF Protection' => 'Token validation',
    'Session Security' => 'HTTPOnly, SameSite cookies',
    'File Upload Security' => 'Type & size validation',
];

foreach ($features as $feature => $desc) {
    echo "   ✓ $feature - $desc\n";
}

echo "\n" . str_repeat("═", 56) . "\n";
echo "📂 FILES CREATED\n";
echo str_repeat("═", 56) . "\n\n";

$files = [
    'config/db.php' => 'Database connection',
    'config/auth.php' => 'Authentication functions',
    'database/schema.sql' => 'Database tables',
    'admin/index.php' => 'Login page',
    'admin/dashboard.php' => 'Admin dashboard',
    'admin/gallery.php' => 'Gallery management',
    'admin/upload_image.php' => 'Image upload handler',
    'admin/delete_image.php' => 'Image delete handler',
    'admin/bookings.php' => 'Bookings viewer',
    'admin/contacts.php' => 'Contact messages',
    'admin/settings.php' => 'Admin settings',
    'admin/logout.php' => 'Logout handler',
    'gallery.php' => 'Public gallery page',
];

foreach ($files as $file => $desc) {
    if (file_exists($file)) {
        echo "   ✓ $file\n      └─ $desc\n";
    }
}

echo "\n" . str_repeat("═", 56) . "\n";
echo "🚀 YOU'RE ALL SET!\n";
echo str_repeat("═", 56) . "\n\n";

echo "Next steps:\n";
echo "1. Create database and import schema\n";
echo "2. Update config/db.php if needed\n";
echo "3. Access http://localhost/travel/admin/\n";
echo "4. Login with admin / Admin@123\n";
echo "5. Change your password in Settings\n";
echo "6. Start uploading gallery images!\n\n";

echo "📚 For detailed documentation, see: ADMIN_PANEL_GUIDE.md\n\n";

?>
