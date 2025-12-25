<?php
require_once '../config/db.php';

$message = '';
$message_type = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize input
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $subject = trim($_POST['subject'] ?? '');
    $user_message = trim($_POST['message'] ?? '');

    // Validate input
    if (empty($name) || empty($email) || empty($user_message)) {
        $message = 'Please fill in all required fields.';
        $message_type = 'error';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $message = 'Please enter a valid email address.';
        $message_type = 'error';
    } else {
        // Insert into database
        $stmt = $connection->prepare("INSERT INTO contacts (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $name, $email, $phone, $subject, $user_message);

        if ($stmt->execute()) {
            $message = 'Thank you for your message! We will get back to you soon.';
            $message_type = 'success';
        } else {
            $message = 'Sorry, there was an error sending your message. Please try again.';
            $message_type = 'error';
        }

        $stmt->close();
    }
}
?>
<!DOCTYPE html>
<html lang="en" style="overflow-x:hidden;">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Contact Us - Car Rental In Delhi, India</title>
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/logo-1.png">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/site.css">
    <link rel="stylesheet" href="css2">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
    @media (min-width: 992px) { #explore { display: none; } }
    body { font-family: 'Poppins', sans-serif !important; overflow-x:hidden; }
    </style>
</head>
<body style="overflow-x: hidden;">
<header class="main-header">
    <div class="top-header">
        <div class="container-fluid">
            <div class="top-header-wrap">
                <div class="top-left"><p><b>Reliable Taxi Service & Transport Solutions! Best Taxi Services in Delhi.</b></p></div>
                <div class="top-right"><span><i class="fa fa-globe"></i><a href='https://www.arshdeeptravels.com/'>Our Network</a></span></div>
            </div>
        </div>
    </div>
    <div class="mid-header">
        <div class="container-fluid">
            <div class="mid-header-wrap">
                <div class="site-logo"><a href="index.html"><img src="assets/img/logo-1.png" alt="Logo" style="height: 120px; margin-bottom: -25px;"></a></div>
                <ul class="header-info">
                    <li><div class="header-info-icon"><i class="las la-phone-volume"></i></div><div class="header-info-text"><span><b>Call us now</b></span><br><a href="tel:8586870492">+91 8586870492</a></div></li>
                    <li><div class="header-info-icon"><i class="las la-envelope-open"></i></div><div class="header-info-text"><span><b>Email now</b></span><br><a href="mailto:dstravel14@gmail.com">dstravel14@gmail.com</a></div></li>
                    <li><div class="header-info-icon"><i class="las la-map-marked-alt"></i></div><div class="header-info-text"><span><b>Location</b></span><br><span>3rd Floor, N-92, Narayan Nagar, Laxmi Nagar, New Delhi, Delhi, 110092</span></div></li>
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
                        <li class="active"><a href="contact.php">Contact Us</a></li>
                        <li><a href="gallery.php">Gallery</a></li>
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

<section class="contact-info-section padding">
    <div class="container">
        <div class="section-heading text-center mb-40">
            <h4><span></span>Get In Touch</h4>
            <h2>Contact Us</h2>
            <p>We're here to help. Reach out to us for any queries or bookings.</p>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6 padding-15">
                <div class="contact-info-card">
                    <div class="contact-icon"><i class="las la-phone-volume" style="font-size: 40px; color: #ff6b35;"></i></div>
                    <div class="contact-content">
                        <h3>Call Us</h3>
                        <p><a href="tel:8586870492" style="color: #333;">+91 8586870492</a></p>
                        <p style="color: #666;">Available 24/7</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 padding-15">
                <div class="contact-info-card">
                    <div class="contact-icon"><i class="las la-envelope" style="font-size: 40px; color: #ff6b35;"></i></div>
                    <div class="contact-content">
                        <h3>Email Us</h3>
                        <p><a href="mailto:dstravel14@gmail.com" style="color: #333;">dstravel14@gmail.com</a></p>
                        <p style="color: #666;">We'll respond within 24 hours</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 padding-15">
                <div class="contact-info-card">
                    <div class="contact-icon"><i class="las la-map-marked-alt" style="font-size: 40px; color: #ff6b35;"></i></div>
                    <div class="contact-content">
                        <h3>Visit Us</h3>
                        <p>3rd Floor, N-92, Narayan Nagar<br>Laxmi Nagar, New Delhi, 110092</p>
                        <p style="color: #666;">Open: 24 Hours</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="contact-form-section bg-grey padding">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <div class="contact-form-wrapper">
                    <h3 style="text-align: center; margin-bottom: 30px;">Send Us a Message</h3>

                    <?php if ($message): ?>
                        <div class="alert <?php echo $message_type === 'success' ? 'alert-success' : 'alert-danger'; ?>" style="padding: 15px; margin-bottom: 20px; border-radius: 5px; <?php echo $message_type === 'success' ? 'background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb;' : 'background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'; ?>">
                            <?php echo htmlspecialchars($message); ?>
                        </div>
                    <?php endif; ?>

                    <form method="POST" style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group" style="margin-bottom: 20px;">
                                    <label style="display: block; margin-bottom: 8px; font-weight: 600;">Name</label>
                                    <input type="text" name="name" class="form-control" placeholder="Your Full Name" required style="padding: 10px 15px; border: 1px solid #ddd; border-radius: 5px; width: 100%;">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group" style="margin-bottom: 20px;">
                                    <label style="display: block; margin-bottom: 8px; font-weight: 600;">Email</label>
                                    <input type="email" name="email" class="form-control" placeholder="your@email.com" required style="padding: 10px 15px; border: 1px solid #ddd; border-radius: 5px; width: 100%;">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group" style="margin-bottom: 20px;">
                                    <label style="display: block; margin-bottom: 8px; font-weight: 600;">Phone</label>
                                    <input type="tel" name="phone" class="form-control" placeholder="+91 98765 43210" required style="padding: 10px 15px; border: 1px solid #ddd; border-radius: 5px; width: 100%;">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group" style="margin-bottom: 20px;">
                                    <label style="display: block; margin-bottom: 8px; font-weight: 600;">Subject</label>
                                    <input type="text" name="subject" class="form-control" placeholder="Your Subject" required style="padding: 10px 15px; border: 1px solid #ddd; border-radius: 5px; width: 100%;">
                                </div>
                            </div>
                        </div>
                        <div class="form-group" style="margin-bottom: 20px;">
                            <label style="display: block; margin-bottom: 8px; font-weight: 600;">Message</label>
                            <textarea name="message" class="form-control" placeholder="Your Message" rows="5" required style="padding: 10px 15px; border: 1px solid #ddd; border-radius: 5px; width: 100%;"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" style="background-color: #ff6b35; color: white; padding: 12px 30px; border: none; border-radius: 5px; cursor: pointer; font-weight: 600; width: 100%;">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="map-section padding">
    <div class="container">
        <h3 style="text-align: center; margin-bottom: 30px;">Find Our Location</h3>
        <div class="map-wrapper" style="border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.884411511707!2d77.2717655!3d28.6332262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfde18f1fc7b3%3A0x8245e152a6cd54f9!2sArshdeep%20Car%20Rental!5e0!3m2!1sen!2sin!4v1746528925060" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
</section>

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

<script src="assets/js/vendor/jquary-3.6.0.min.js"></script>
<script src="assets/js/vendor/bootstrap.min.js"></script>
<script>document.getElementById('currentYear').textContent = new Date().getFullYear();</script>
</body>
</html>