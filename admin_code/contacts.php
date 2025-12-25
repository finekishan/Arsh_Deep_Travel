<?php
/**
 * Contact Messages Management
 * File: admin/contacts.php
 */

require_once '../config/db.php';
require_once '../config/auth.php';

requireAdmin();

// Fetch contacts
$result = $connection->query('SELECT * FROM contacts ORDER BY created_at DESC');
$contacts = $result->fetch_all(MYSQLI_ASSOC);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Messages - Admin Panel</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css">
</head>
<body class="bg-gray-50">
    <nav class="bg-white shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="dashboard.php" class="text-blue-600 hover:text-blue-800">← Dashboard</a>
            <h1 class="text-2xl font-bold">Contact Messages</h1>
            <a href="logout.php" class="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded" style="background: #000000; color: white; padding: 0.5rem 1rem; border-radius: 0.25rem;">Logout</a>
        </div>
    </nav>

    <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-bold mb-6">Contact Form Submissions (<?php echo count($contacts); ?>)</h2>

            <?php if (empty($contacts)): ?>
                <p class="text-gray-600 text-center py-8">No messages yet</p>
            <?php else: ?>
                <div class="space-y-4">
                    <?php foreach ($contacts as $contact): ?>
                        <div class="border rounded-lg p-4 hover:shadow-md transition">
                            <div class="flex justify-between items-start mb-2">
                                <div>
                                    <h3 class="font-bold text-lg"><?php echo htmlspecialchars($contact['name']); ?></h3>
                                    <p class="text-gray-600 text-sm"><?php echo htmlspecialchars($contact['email']); ?></p>
                                </div>
                                <span class="px-2 py-1 rounded text-xs <?php echo $contact['status'] === 'unread' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'; ?>">
                                    <?php echo ucfirst($contact['status']); ?>
                                </span>
                            </div>
                            <p class="text-gray-600"><strong>Subject:</strong> <?php echo htmlspecialchars($contact['subject']); ?></p>
                            <p class="text-gray-700 mt-2"><?php echo htmlspecialchars($contact['message']); ?></p>
                            <p class="text-gray-500 text-xs mt-2"><?php echo date('M d, Y H:i', strtotime($contact['created_at'])); ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
        </div>
    </div>
</body>
</html>
