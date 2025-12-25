<?php
/**
 * Public Gallery Page
 * File: gallery.php
 * Displays gallery images uploaded via admin panel
 */

require_once '../config/db.php';

// Fetch all gallery images
$query = 'SELECT g.id, g.image_name, g.image_path, g.description, g.uploaded_at 
          FROM gallery g 
          ORDER BY g.uploaded_at DESC';
$result = $connection->query($query);
$images = $result->fetch_all(MYSQLI_ASSOC);

?>

<!DOCTYPE html>
<html lang="en" style="overflow-x:hidden;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery - Arsh Deep Travels</title>
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/logo-1.png">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/site.css">
    <link rel="stylesheet" href="css2">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Poppins', sans-serif !important; overflow-x: hidden; }
        .gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
        .gallery-item { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.3s, box-shadow 0.3s; }
        .gallery-item:hover { transform: translateY(-5px); box-shadow: 0 5px 20px rgba(0,0,0,0.15); }
        .gallery-img { width: 100%; height: 250px; object-fit: cover; }
        .gallery-info { padding: 15px; }
        .gallery-name { font-weight: 600; font-size: 1.1rem; color: #333; margin-bottom: 8px; }
        .gallery-desc { color: #666; font-size: 0.9rem; line-height: 1.4; }
        .gallery-date { color: #999; font-size: 0.8rem; margin-top: 8px; }
    </style>
</head>
<body style="overflow-x: hidden;">

<!-- Header -->
<header class="main-header">
    <div class="top-header">
        <div class="container-fluid">
            <div class="top-header-wrap">
                <div class="top-left">
                    <p><b>Reliable Taxi Service & Transport Solutions! Best Taxi Services in Delhi.</b></p>
                </div>
                <div class="top-right">
                    <span><i class="fa fa-globe"></i><a href='https://www.arshdeeptravels.com/'>Our Network</a></span>
                </div>
            </div>
        </div>
    </div>
    <div class="mid-header">
        <div class="container-fluid">
            <div class="mid-header-wrap">
                <div class="site-logo">
                    <a href="index.php"><img src="assets/img/logo-1.png" alt="Logo" style="height: 120px; margin-bottom: -25px;"></a>
                </div>
                <ul class="header-info">
                    <li>
                        <div class="header-info-icon"><i class="las la-phone-volume"></i></div>
                        <div class="header-info-text">
                            <span><b>Call us now</b></span><br><a href="tel:8586870492">+91 8586870492</a>
                        </div>
                    </li>
                    <li>
                        <div class="header-info-icon"><i class="las la-envelope-open"></i></div>
                        <div class="header-info-text">
                            <span><b>Email now</b></span><br><a href="mailto:dstravel14@gmail.com">dstravel14@gmail.com</a>
                        </div>
                    </li>
                    <li>
                        <div class="header-info-icon"><i class="las la-map-marked-alt"></i></div>
                        <div class="header-info-text">
                            <span><b>Location</b></span><br><span>3rd Floor, N-92, Narayan Nagar, Laxmi Nagar, New Delhi, Delhi, 110092</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="nav-menu-wrapper">
        <div class="container">
            <div class="nav-menu-inner">
                <div class="site-logo"><a href="index.php"><img src="assets/img/logo-1.png" alt="Logo" style="height: 80px;"></a></div>
                <div class="header-menu-wrap">
                    <ul class="nav-menu">
                        <li><a href="index.php">Home</a></li>
                        <li><a href="about.php">About Us</a></li>
                        <li><a href="tourpackages.php">Tour Packages</a></li>
                        <li><a href="services.php">Services</a></li>
                        <li><a href="contact.php">Contact Us</a></li>
                        <li class="active"><a href="gallery.php">Gallery</a></li>
                    </ul>
                </div>
                <div class="menu-right-item">
                    <div class="sidebox-icon dl-sidebox-icon"><i class="las la-bars"></i></div>
                    <a href="index.php#bookyourtaxiride" class="menu-btn">Book a Taxi</a>
                </div>
                <div class="mobile-menu-icon"><div class="burger-menu"><div class="line-menu line-half first-line"></div><div class="line-menu"></div><div class="line-menu line-half last-line"></div></div></div>
            </div>
        </div>
    </div>
</header>

<!-- Gallery Section -->
<section class="gallery-section padding" style="padding: 60px 20px;">
    <div class="container">
        <!-- Page Header -->
        <div class="section-heading text-center mb-40 wow fade-in-bottom" data-wow-delay="200ms">
            <span style="color:#f90;"><b>Our Moments</b></span>
            <h2 style="font-size: 40px; color: #333;">Gallery</h2>
            <p style="color: #666;">Explore our journey and customer experiences</p>
        </div>

        <!-- Gallery Grid -->
        <?php if (empty($images)): ?>
            <div class="text-center py-12">
                <p style="font-size: 18px; color: #666;">No images in gallery yet. Check back soon!</p>
            </div>
        <?php else: ?>
            <div class="gallery-grid">
                <?php foreach ($images as $image): ?>
                    <div class="gallery-item">
                        <img src="<?php echo htmlspecialchars($image['image_path']); ?>" 
                             alt="<?php echo htmlspecialchars($image['image_name']); ?>" 
                             class="gallery-img">
                        <div class="gallery-info">
                            <div class="gallery-name"><?php echo htmlspecialchars($image['image_name']); ?></div>
                            <div class="gallery-desc"><?php echo htmlspecialchars($image['description'] ?? ''); ?></div>
                            <div class="gallery-date">
                                <i class="las la-calendar"></i> <?php echo date('M d, Y', strtotime($image['uploaded_at'])); ?>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>
</section>

<!-- Footer -->
<footer class="footer-section">
    <div class="footer-top-wrap bg-grey">
        <div class="container">
            <div class="footer-top">
                <div class="row align-items-end">
                    <div class="col-lg-8">
                        <div class="brand">
                            <a class="footer-logo" href="index.php"><img src="assets/img/logo-1.png" alt="logo" style="height: 100px;background-color:white;"></a>
                            <p>We provide chardham taxi service, outstation taxi service and local tour taxi service at affordable prices.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="footer-call"><i class="las la-phone-volume"></i><p><span>Call For Taxi Booking</span><a href="tel:8586870492">+91 8586870492</a></p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-mid-wrap">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 sm-padding">
                    <div class="footer-item">
                        <div class="widget-title"><h3>About Us</h3></div>
                        <ul class="footer-contact"><li>Travel with us in Confidence, Safety and at an Affordable price.</li></ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 sm-padding">
                    <div class="footer-item footer-list">
                        <div class="widget-title"><h3>Useful Links</h3></div>
                        <ul class="footer-links">
                            <li><a href="index.php">Home</a></li>
                            <li><a href="about.php">About Us</a></li>
                            <li><a href="services.php">Services</a></li>
                            <li><a href="tourpackages.php">Tour Packages</a></li>
                            <li><a href="contact.php">Contact Us</a></li>
                            <li><a href="gallery.php">Gallery</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 sm-padding">
                    <div class="footer-item">
                        <div class="widget-title"><h3>Head Office</h3></div>
                        <ul class="footer-contact">
                            <li><span>Location:</span>3rd Floor, N-92, Narayan Nagar, Laxmi Nagar, New Delhi, 110092</li>
                            <li><span>Phone:</span>+91 8586870492</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 sm-padding">
                    <div class="footer-item">
                        <div class="widget-title"><h3>Our Location</h3></div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.884411511707!2d77.2717655!3d28.6332262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfde18f1fc7b3%3A0x8245e152a6cd54f9!2sArshdeep%20Car%20Rental!5e0!3m2!1sen!2sin!4v1746528925060" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright-wrap">
        <div class="container">
            <p>© <span id="currentYear"></span> Arsh Deep Travels All Rights Reserved.</p>
        </div>
    </div>
</footer>

<script>document.getElementById('currentYear').textContent = new Date().getFullYear();</script>
</body>
</html>
