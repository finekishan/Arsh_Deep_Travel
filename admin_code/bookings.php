<?php
/**
 * Bookings Management
 * File: admin/bookings.php
 */

require_once '../config/db.php';
require_once '../config/auth.php';

requireAdmin();

// Fetch bookings
$result = $connection->query('SELECT * FROM bookings ORDER BY created_at DESC');
$bookings = $result->fetch_all(MYSQLI_ASSOC);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bookings - Admin Panel</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css">
</head>
<body class="bg-gray-50">
    <nav class="bg-white shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="dashboard.php" class="text-blue-600 hover:text-blue-800">← Dashboard</a>
            <h1 class="text-2xl font-bold">Bookings</h1>
            <a href="logout.php" class="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded" style="background: #000000; color: white; padding: 0.5rem 1rem; border-radius: 0.25rem;">Logout</a>
        </div>
    </nav>

    <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-bold mb-6">Taxi Bookings (<?php echo count($bookings); ?>)</h2>

            <?php if (empty($bookings)): ?>
                <p class="text-gray-600 text-center py-8">No bookings yet</p>
            <?php else: ?>
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-sm">
                        <thead class="bg-gray-100">
                            <tr>
                                <th class="px-4 py-2">ID</th>
                                <th class="px-4 py-2">Name</th>
                                <th class="px-4 py-2">Phone</th>
                                <th class="px-4 py-2">Message</th>
                                <th class="px-4 py-2">Status</th>
                                <th class="px-4 py-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($bookings as $booking): ?>
                                <tr class="border-b hover:bg-gray-50">
                                    <td class="px-4 py-2"><?php echo $booking['id']; ?></td>
                                    <td class="px-4 py-2"><?php echo htmlspecialchars($booking['name']); ?></td>
                                    <td class="px-4 py-2"><?php echo htmlspecialchars($booking['phone']); ?></td>
                                    <td class="px-4 py-2"><?php echo htmlspecialchars(substr($booking['message'], 0, 50)) . '...'; ?></td>
                                    <td class="px-4 py-2">
                                        <span class="px-2 py-1 rounded text-sm <?php echo $booking['status'] === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'; ?>">
                                            <?php echo ucfirst($booking['status']); ?>
                                        </span>
                                    </td>
                                    <td class="px-4 py-2"><?php echo date('M d, Y', strtotime($booking['created_at'])); ?></td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            <?php endif; ?>
        </div>
    </div>
</body>
</html>
