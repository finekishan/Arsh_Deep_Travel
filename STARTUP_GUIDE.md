# 🚀 Getting Started - Complete Startup Guide

## ⚡ Quick Start (3 Steps)

### Step 1: Start XAMPP Services
```
1. Open: C:\xampp\xampp-control.exe
2. Click [Start] next to Apache
3. Click [Start] next to MySQL
4. Wait for both to say "Running" (green)
```

**Status Check:**
- Apache: ✓ Running
- MySQL: ✓ Running

### Step 2: Create Database
Open in browser:
```
http://localhost:8080/travel/fix_mysql.php
```

This will:
- ✓ Create `travel_db` database
- ✓ Create 4 tables (users, gallery, bookings, contacts)
- ✓ Create default admin user
- ✓ Fix MySQL authentication issues

### Step 3: Access Admin Panel
Open in browser:
```
http://localhost:8080/travel/admin
```

**Login with:**
- Username: `admin`
- Password: `Admin@123`

---

## 🔍 Verify Everything Works

**Check System Status:**
```
http://localhost:8080/travel/status.php
```

This shows:
- ✓ PHP version & extensions
- ✓ MySQL connection status
- ✓ Database & tables
- ✓ File permissions
- ✓ Required folders

---

## 📋 Common Errors & Solutions

### Error 1: "Connection Refused"
```
localhost:8080 refused to connect
ERR_CONNECTION_REFUSED
```

**Solution:**
```
1. Open XAMPP Control Panel (C:\xampp\xampp-control.exe)
2. Click [Start] next to Apache
3. Click [Start] next to MySQL
4. Wait for both to turn green
5. Refresh browser
```

### Error 2: "Access denied for user 'root'"
```
Fatal error: mysqli::real_connect(): Access denied for user 'root'@'localhost'
```

**Solution:**
```
1. Visit: http://localhost:8080/travel/fix_mysql.php
2. This automatically fixes MySQL authentication
3. Refresh the admin page
```

### Error 3: "Database not found"
```
Unknown database 'travel_db'
```

**Solution:**
```
1. Visit: http://localhost:8080/travel/fix_mysql.php
2. This creates travel_db and all tables
3. Refresh the admin page
```

### Error 4: "Cannot connect: invalid settings (phpMyAdmin)"
```
Access denied for user 'pma'@'localhost'
```

**Solution:**
```
1. Visit: http://localhost:8080/travel/setup_phpmyadmin.php
2. This fixes phpMyAdmin configuration
3. Then access: http://localhost:8080/phpmyadmin
```

---

## 🎯 First Time Setup Checklist

- [ ] Start Apache from XAMPP Control Panel
- [ ] Start MySQL from XAMPP Control Panel
- [ ] Visit `http://localhost:8080/travel/status.php` (check all green)
- [ ] Visit `http://localhost:8080/travel/fix_mysql.php` (create database)
- [ ] Visit `http://localhost:8080/travel/admin` (login)
- [ ] Upload a test image in Gallery
- [ ] View bookings & contacts pages
- [ ] Try password change in Settings

---

## 📁 Admin Panel Structure

| Feature | URL | Purpose |
|---------|-----|---------|
| Login | `http://localhost:8080/travel/admin/index.php` | Admin authentication |
| Dashboard | `http://localhost:8080/travel/admin/dashboard.php` | View stats & overview |
| Gallery | `http://localhost:8080/travel/admin/gallery.php` | Upload & manage images |
| Bookings | `http://localhost:8080/travel/admin/bookings.php` | View taxi bookings |
| Contacts | `http://localhost:8080/travel/admin/contacts.php` | View contact messages |
| Settings | `http://localhost:8080/travel/admin/settings.php` | Admin profile & password |

---

## 🔐 Database Default Credentials

**Admin User:**
- Username: `admin`
- Password: `Admin@123`

**MySQL Root:**
- User: `root`
- Password: (empty)

**MySQL Port:** 3306

---

## 🛠️ Troubleshooting: Manual Fix Commands

If automated scripts don't work, use these PowerShell commands:

### Create Database
```powershell
cd C:\xampp\htdocs\travel
& 'C:\xampp\mysql\bin\mysql.exe' -u root travel_db < database\schema.sql
```

### Check MySQL Status
```powershell
netstat -ano | findstr :3306
```

### Restart MySQL
```powershell
# Stop
taskkill /IM mysqld.exe /F

# Start (use XAMPP Control Panel instead - easier)
```

### Reset Admin Password
If you forgot the admin password, run:
```powershell
cd C:\xampp\htdocs\travel
& 'C:\xampp\mysql\bin\mysql.exe' -u root travel_db < database\schema.sql
```
This resets everything to defaults.

---

## 📞 Getting Help

1. **Check logs:** `C:\xampp\htdocs\travel\logs\admin_actions.log`
2. **Check database:** `http://localhost:8080/phpmyadmin`
3. **View status:** `http://localhost:8080/travel/status.php`
4. **Read docs:** `ADMIN_PANEL_SETUP_CHECKLIST.md`

---

## ✅ You're All Set!

Once you see the admin login page, you're good to go! 🎉

Log in and start managing:
- 🖼️ Gallery images
- 🚕 Taxi bookings
- 📧 Contact messages
- ⚙️ Admin settings

