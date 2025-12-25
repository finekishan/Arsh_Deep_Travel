<?php
/**
 * Gallery Management
 * File: admin/gallery.php
 * Upload, view, and delete gallery images
 */

require_once '../config/db.php';
require_once '../config/auth.php';

// Require admin login
requireAdmin();

$message = '';
$error = '';

// Fetch all gallery images
$query = 'SELECT g.id, g.image_name, g.image_path, g.description, g.uploaded_at, u.username 
          FROM gallery g 
          JOIN users u ON g.uploaded_by = u.id 
          ORDER BY g.uploaded_at DESC';
$result = $connection->query($query);
$images = $result->fetch_all(MYSQLI_ASSOC);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery Management - Admin Panel</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 25%, #fce4ec 50%, #fff3e0 75%, #e8f5e8 100%);
            background-attachment: fixed;
            min-height: 100vh;
        }

        .nav-gradient {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.98) 100%);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
        }

        .welcome-text {
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .gallery-card {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04);
            border-radius: 20px;
        }

        .upload-card {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04);
            border-radius: 20px;
        }

        .upload-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border-radius: 16px;
        }

        .upload-btn:hover {
            background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(102, 126, 234, 0.3);
        }

        .delete-btn {
            background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border-radius: 16px;
        }

        .delete-btn:hover {
            background: linear-gradient(135deg, #ff5252 0%, #d84343 100%);
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(255, 107, 107, 0.3);
        }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="nav-gradient shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <div class="flex items-center gap-6">
                    <a href="dashboard.php" class="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                        <i class="las la-arrow-left"></i> Dashboard
                    </a>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                            <i class="las la-images text-white"></i>
                        </div>
                        <h1 class="text-2xl font-bold welcome-text">Gallery Management</h1>
                    </div>
                </div>
                <a href="logout.php" class="bg-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2" style="background: #000000; color: white; border-radius: 9999px;">
                    <i class="las la-sign-out-alt"></i>
                    Logout
                </a>
            </div>
        </div>
    </nav>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Upload Section -->
        <div class="upload-card rounded-2xl p-8 mb-8">
            <div class="flex items-center gap-4 mb-8">
                <div class="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                    <i class="las la-cloud-upload text-white text-xl"></i>
                </div>
                <div>
                    <h2 class="text-3xl font-bold text-gray-800">Upload New Image</h2>
                    <p class="text-gray-600 mt-1">Add beautiful images to your gallery</p>
                </div>
            </div>

            <!-- Messages -->
            <?php if ($message): ?>
                <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    <?php echo htmlspecialchars($message); ?>
                </div>
            <?php endif; ?>
            <?php if ($error): ?>
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                    <?php echo htmlspecialchars($error); ?>
                </div>
            <?php endif; ?>

            <!-- Upload Form -->
            <form id="uploadForm" class="space-y-6">
                <!-- Image Name -->
                <div>
                    <label class="block text-gray-700 font-semibold mb-2">Image Name</label>
                    <input 
                        type="text" 
                        id="imageName" 
                        required 
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="e.g., Manali Trip"
                    >
                </div>

                <!-- Image Description -->
                <div>
                    <label class="block text-gray-700 font-semibold mb-2">Description (Optional)</label>
                    <textarea 
                        id="imageDesc" 
                        rows="3"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Enter image description..."
                    ></textarea>
                </div>

                <!-- File Upload -->
                <div>
                    <label class="block text-gray-700 font-semibold mb-2">Upload Image</label>
                    <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition">
                        <input 
                            type="file" 
                            id="imageFile" 
                            required 
                            accept="image/*"
                            class="hidden"
                        >
                        <label for="imageFile" class="cursor-pointer">
                            <i class="las la-cloud-upload-alt text-4xl text-gray-400"></i>
                            <p class="text-gray-600 mt-2">Click to upload or drag and drop</p>
                            <p class="text-gray-500 text-sm">PNG, JPG, WebP up to 5MB</p>
                        </label>
                    </div>
                    <div id="fileName" class="mt-2 text-sm text-gray-600"></div>
                </div>

                <!-- Submit Button -->
                <button
                    type="submit"
                    id="submitBtn"
                    class="upload-btn w-full text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
                >
                    <i class="las la-upload"></i>
                    Upload Image
                </button>
            </form>
        </div>

        <!-- Gallery List -->
        <div class="gallery-card rounded-2xl p-8">
            <div class="flex items-center gap-4 mb-8">
                <div class="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
                    <i class="las la-images text-white text-xl"></i>
                </div>
                <div>
                    <h2 class="text-3xl font-bold text-gray-800">Gallery Images</h2>
                    <p class="text-gray-600 mt-1"><?php echo count($images); ?> images uploaded</p>
                </div>
            </div>

            <?php if (empty($images)): ?>
                <p class="text-gray-600 text-center py-8">No images in gallery yet. Upload one to get started!</p>
            <?php else: ?>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <?php foreach ($images as $img): ?>
                        <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                            <!-- Image Preview -->
                            <div class="h-40 bg-gray-200 overflow-hidden">
                                <img
                                    src="<?php echo htmlspecialchars('../website/' . $img['image_path']); ?>"
                                    alt="<?php echo htmlspecialchars($img['image_name']); ?>"
                                    class="w-full h-full object-cover hover:scale-110 transition"
                                >
                            </div>
                            <!-- Image Info -->
                            <div class="p-4">
                                <h3 class="font-bold text-gray-800"><?php echo htmlspecialchars($img['image_name']); ?></h3>
                                <p class="text-gray-600 text-sm"><?php echo htmlspecialchars($img['description'] ?? 'No description'); ?></p>
                                <p class="text-gray-500 text-xs mt-2">
                                    <i class="las la-user"></i> <?php echo htmlspecialchars($img['username']); ?>
                                </p>
                                <p class="text-gray-500 text-xs">
                                    <i class="las la-calendar"></i> <?php echo date('M d, Y', strtotime($img['uploaded_at'])); ?>
                                </p>
                                <!-- Delete Button -->
                                <button
                                    onclick="deleteImage(<?php echo $img['id']; ?>)"
                                    class="delete-btn mt-4 w-full text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                >
                                    <i class="las la-trash"></i>
                                    Delete
                                </button>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
        </div>
    </div>

    <script>
        // File upload handling
        const fileInput = document.getElementById('imageFile');
        const fileName = document.getElementById('fileName');

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                fileName.textContent = `Selected: ${file.name}`;
            }
        });

        // Form submission
        document.getElementById('uploadForm').addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData();
            formData.append('image_name', document.getElementById('imageName').value);
            formData.append('description', document.getElementById('imageDesc').value);
            formData.append('image_file', fileInput.files[0]);

            const submitBtn = document.getElementById('submitBtn');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Uploading...';

            try {
                const response = await fetch('upload_image.php', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                if (result.success) {
                    alert('Image uploaded successfully!');
                    location.reload();
                } else {
                    alert('Error: ' + result.message);
                }
            } catch (error) {
                alert('Upload failed: ' + error.message);
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Upload Image';
            }
        });

        // Delete image function
        function deleteImage(imageId) {
            if (confirm('Are you sure you want to delete this image?')) {
                fetch('delete_image.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: 'image_id=' + imageId
                })
                .then(response => response.json())
                .then(result => {
                    if (result.success) {
                        alert('Image deleted successfully!');
                        location.reload();
                    } else {
                        alert('Error: ' + result.message);
                    }
                });
            }
        }
    </script>

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
