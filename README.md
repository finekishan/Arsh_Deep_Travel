# Arsh Deep Travels - Travel Booking Website

A complete travel booking website with admin panel for managing taxi services, tour packages, and customer bookings in Delhi, India.

## 🚗 Features

### Frontend Website
- **Responsive Design** - Mobile-friendly interface
- **Service Booking** - Taxi and tour package booking forms
- **Vehicle Fleet** - Display of available cars (Dzire, Innova, Crysta, etc.)
- **Tour Packages** - Popular destinations (Agra, Jaipur, Manali, Amritsar, etc.)
- **Image Gallery** - Showcase of travel destinations
- **Contact Forms** - Customer inquiry and booking forms
- **Customer Reviews** - Testimonials section

### Admin Panel
- **Secure Login** - CSRF protection and session management
- **Dashboard** - Overview of bookings and contacts
- **Booking Management** - View and manage taxi bookings
- **Contact Management** - Handle customer inquiries
- **Gallery Management** - Upload and manage travel images
- **User Management** - Admin user controls

### Technical Features
- **Database Integration** - MySQL with prepared statements
- **Security** - SQL injection prevention, CSRF tokens
- **Error Handling** - Comprehensive logging system
- **Responsive UI** - Bootstrap and Tailwind CSS
- **Image Upload** - Secure file handling

## 🛠️ Technology Stack

- **Backend**: PHP 7.4+
- **Database**: MySQL/MariaDB
- **Frontend**: HTML5, CSS3, JavaScript
- **Frameworks**: Bootstrap, Tailwind CSS
- **Icons**: Line Awesome, Font Awesome
- **Server**: Apache (XAMPP)

## 📋 Requirements

- PHP 7.4 or higher
- MySQL 5.7+ or MariaDB 10.3+
- Apache Web Server
- XAMPP (recommended for local development)

## 🚀 Installation

### 1. Clone Repository
```bash
# Clone from GitHub
git clone https://github.com/YOUR_USERNAME/arsh-deep-travels.git
cd arsh-deep-travels

# Or download and extract to:
C:\xampp\htdocs\travel\
```

### 2. Database Setup
1. Start XAMPP (Apache + MySQL)
2. Open phpMyAdmin: `http://localhost/phpmyadmin`
3. Create database: `travel_db`
4. Import schema: `website/database/schema.sql`

### 3. Configuration
1. Copy `config/connect.example.php` to `config/connect.php`
2. Update database credentials in `config/connect.php`:
```php
$dbConfig = [
    'host' => 'localhost',
    'user' => 'root',
    'pass' => '',  // Your MySQL password
    'db' => 'travel_db',
    'port' => 3306
];
```

### 4. Access the Website
- **Frontend**: `http://localhost/travel/website/`
- **Admin Panel**: `http://localhost/travel/admin_code/`

## 🔐 Admin Access

**Default Admin Credentials:**
- Username: `admin`
- Password: `Admin@123`

*Change these credentials after first login for security.*

## 📁 Project Structure

```
travel/
├── admin_code/              # Admin panel files
│   ├── index.php           # Admin login
│   ├── dashboard.php       # Admin dashboard
│   ├── bookings.php        # Booking management
│   ├── contacts.php        # Contact management
│   ├── gallery.php         # Gallery management
│   └── ...
├── config/                 # Configuration files
│   ├── Database.php        # Database class
│   ├── connect.php         # Database connection
│   ├── auth.php           # Authentication functions
│   └── db.php             # Legacy database connection
├── website/               # Frontend website
│   ├── index.php          # Homepage
│   ├── about.php          # About page
│   ├── services.php       # Services page
│   ├── contact.php        # Contact page
│   ├── gallery.php        # Gallery page
│   ├── tourpackages.php   # Tour packages
│   ├── mail.php           # Form handler
│   └── assets/            # CSS, JS, Images
├── logs/                  # Application logs
└── README.md             # This file
```

## 🎯 Key Pages

### Frontend
- **Homepage** (`/website/index.php`) - Main landing page with services
- **About** (`/website/about.php`) - Company information
- **Services** (`/website/services.php`) - Available taxi services
- **Tour Packages** (`/website/tourpackages.php`) - Travel packages
- **Gallery** (`/website/gallery.php`) - Photo gallery
- **Contact** (`/website/contact.php`) - Contact form

### Admin Panel
- **Login** (`/admin_code/index.php`) - Admin authentication
- **Dashboard** (`/admin_code/dashboard.php`) - Admin overview
- **Bookings** (`/admin_code/bookings.php`) - Manage bookings
- **Contacts** (`/admin_code/contacts.php`) - Handle inquiries
- **Gallery** (`/admin_code/gallery.php`) - Upload images

## 🗄️ Database Schema

### Tables
- **users** - Admin user accounts
- **bookings** - Taxi booking requests
- **contacts** - Contact form submissions
- **gallery** - Uploaded images

### Key Features
- Prepared statements for security
- Auto-timestamps for records
- Foreign key relationships
- Indexed columns for performance

## 🔧 Configuration Files

### Database Connection (`config/connect.php`)
- Singleton pattern database class
- Connection retry logic
- Error logging
- UTF-8 support

### Authentication (`config/auth.php`)
- Session management
- CSRF token generation
- Admin access control
- Security logging

## 📱 Services Offered

### Taxi Services
- **Local Taxi** - City rides
- **Airport Transfer** - Pick/drop services
- **Outstation** - Inter-city travel
- **Corporate** - Business transportation

### Vehicle Fleet
- Maruti Swift Dzire (4 seater)
- Honda Amaze (4 seater)
- Maruti Ertiga (6 seater)
- Toyota Innova (6 seater)
- Toyota Innova Crysta (7 seater)
- Tempo Traveller (12+ seater)

### Tour Packages
- **Delhi to Agra** - Taj Mahal tour
- **Delhi to Jaipur** - Pink City exploration
- **Delhi to Manali** - Hill station getaway
- **Delhi to Amritsar** - Golden Temple visit
- **Delhi to Haridwar/Rishikesh** - Spiritual journey

## 🛡️ Security Features

- **SQL Injection Prevention** - Prepared statements
- **CSRF Protection** - Token validation
- **Session Security** - Secure session handling
- **Input Sanitization** - XSS prevention
- **File Upload Security** - Safe image handling
- **Error Logging** - Comprehensive logging

## 📞 Contact Information

- **Phone**: +91 8586870492
- **Email**: dstravel14@gmail.com
- **Address**: 3rd Floor, N-92, Narayan Nagar, Laxmi Nagar, New Delhi, Delhi, 110092

## 🚨 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Ensure MySQL is running in XAMPP
   - Check credentials in `config/connect.php`
   - Verify `travel_db` database exists

2. **Admin Login Issues**
   - Use default credentials: admin/Admin@123
   - Check database has users table with admin user

3. **Image Upload Problems**
   - Ensure `assets/img/gallery/` has write permissions
   - Check PHP upload limits in php.ini

4. **Form Submission Errors**
   - Verify database tables exist
   - Check error logs in `logs/` folder

## 📝 Development Notes

- Built with responsive design principles
- Uses modern PHP practices
- Implements security best practices
- Includes comprehensive error handling
- Supports both AJAX and traditional form submissions

## 🔄 Updates & Maintenance

- Regular security updates recommended
- Database backups should be scheduled
- Log files should be rotated periodically
- Admin passwords should be changed regularly

## 📄 License

This project is proprietary software for Arsh Deep Travels.

---

**© 2025 Arsh Deep Travels. All rights reserved.**

For technical support or customization requests, please contact the development team.