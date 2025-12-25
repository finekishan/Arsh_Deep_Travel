# ✅ Admin Panel Setup Verification Checklist

## 📋 Pre-Setup Requirements

- [ ] PHP 7.4 or higher installed (check: `php -v`)
- [ ] MySQL/MariaDB running (check: phpMyAdmin access)
- [ ] XAMPP Apache server running
- [ ] Web root: `C:\xampp\htdocs\travel\`

---

## 🔧 Step 1: Create Database

```sql
-- Run in phpMyAdmin Query window or MySQL CLI:
CREATE DATABASE travel_db;
USE travel_db;
```

- [ ] Database `travel_db` created
- [ ] Active database confirmed in phpMyAdmin

---

## 📊 Step 2: Import Database Schema

**Option A: Using phpMyAdmin**
1. Open phpMyAdmin: `http://localhost/phpmyadmin`
2. Select `travel_db` database
3. Click "Import" tab
4. Upload `database/schema.sql`
5. Click "Go"

**Option B: Using MySQL CLI**
```bash
cd C:\xampp\htdocs\travel
mysql -u root travel_db < database\schema.sql
```

- [ ] `database/schema.sql` imported successfully
- [ ] All 4 tables created:
  - [ ] `users` table
  - [ ] `gallery` table
  - [ ] `bookings` table
  - [ ] `contacts` table
- [ ] Default admin user created (admin@admin.com)

**Verify in phpMyAdmin:**
- [ ] Right-click `travel_db` → "Check all" → "Export" to verify tables

---

## ⚙️ Step 3: Verify Configuration

### Check `config/db.php`
```php
define('DB_HOST', 'localhost');      // ← Correct?
define('DB_USER', 'root');           // ← Correct?
define('DB_PASS', '');               // ← If you have XAMPP password, add here
define('DB_NAME', 'travel_db');      // ← Correct?
```

- [ ] `DB_HOST` is `localhost`
- [ ] `DB_USER` is `root` (or your MySQL user)
- [ ] `DB_PASS` is empty for XAMPP (or your password)
- [ ] `DB_NAME` is `travel_db`

### Check `config/auth.php`
- [ ] File exists
- [ ] Contains auth functions (isLoggedIn, requireAdmin, etc.)

---

## 📁 Step 4: Verify File Structure

Check that all these files exist:

### Config Files
- [ ] `config/db.php`
- [ ] `config/auth.php`

### Database Files
- [ ] `database/schema.sql`

### Admin Panel Files
- [ ] `admin/index.php` (login page)
- [ ] `admin/dashboard.php` (dashboard)
- [ ] `admin/gallery.php` (gallery management)
- [ ] `admin/upload_image.php` (upload handler)
- [ ] `admin/delete_image.php` (delete handler)
- [ ] `admin/bookings.php` (bookings viewer)
- [ ] `admin/contacts.php` (contacts viewer)
- [ ] `admin/settings.php` (settings)
- [ ] `admin/logout.php` (logout)

### Public Files
- [ ] `gallery.php` (public gallery page)

### Documentation
- [ ] `ADMIN_PANEL_GUIDE.md`
- [ ] `ADMIN_PANEL_SUMMARY.md`
- [ ] `ADMIN_PANEL_SETUP_CHECKLIST.md` (this file)

---

## 🗂️ Step 5: Create Required Directories

These directories will be created automatically, but verify:

```bash
# Should exist or be created automatically:
mkdir -p assets/img/gallery
mkdir -p logs
```

- [ ] `assets/img/gallery/` directory exists (for uploaded images)
- [ ] `logs/` directory exists (for audit logs)

**Set permissions (if on Linux/Mac):**
```bash
chmod 755 assets/img/gallery/
chmod 755 logs/
```

---

## 🚀 Step 6: Test Admin Panel Access

### Test 1: Can you access login page?
1. Open browser: `http://localhost/travel/admin/`
2. Should see login form

- [ ] Login page loads without errors
- [ ] Form has "Username or Email" and "Password" fields
- [ ] CSRF token is present (check page source)

### Test 2: Test login with default credentials
1. Enter Username: `admin`
2. Enter Password: `Admin@123`
3. Click "Login"

- [ ] Login successful
- [ ] Redirected to dashboard.php
- [ ] Can see stats cards (Gallery, Bookings, Contacts)

### Test 3: Test failed login
1. Enter wrong username/password
2. Click "Login"

- [ ] Error message displayed
- [ ] Session NOT created
- [ ] Stays on login page

### Test 4: Access protected route directly
1. Open: `http://localhost/travel/admin/gallery.php` (without logging in)

- [ ] Redirected to login page
- [ ] Cannot access without authentication

---

## 🖼️ Step 7: Test Gallery Upload

### Test Upload Process
1. Login with admin/Admin@123
2. Click "Gallery Management" from dashboard
3. Fill in form:
   - Image Name: "Test Image"
   - Description: "This is a test"
   - Select any image file (JPG, PNG, WebP, GIF, max 5MB)
4. Click "Upload Image"

- [ ] Upload succeeds
- [ ] Image appears in gallery list
- [ ] Image file saved to `assets/img/gallery/`
- [ ] Record added to `gallery` table in DB

**Verify in Database:**
```sql
SELECT * FROM gallery;
```
- [ ] New image record visible in `gallery` table

### Test File Validation
1. Try uploading a non-image file (.txt, .pdf, .exe)

- [ ] Upload fails with error message
- [ ] File NOT saved
- [ ] Database NOT updated

### Test File Size Limit
1. Try uploading image larger than 5MB

- [ ] Upload fails with "exceeds 5MB limit"
- [ ] File NOT saved

---

## 🎨 Step 8: Test Public Gallery

### Test Public Display
1. Visit: `http://localhost/travel/gallery.php`
2. Should see all uploaded images in grid

- [ ] Page loads without errors
- [ ] All uploaded images visible
- [ ] Images show: name, description, date
- [ ] Responsive grid layout works
- [ ] Header and footer present

---

## 🗑️ Step 9: Test Image Deletion

### Test Delete Process
1. Login to admin panel
2. Go to Gallery Management
3. Click "Delete" on any image
4. Confirm deletion

- [ ] Image removed from gallery list
- [ ] Image file deleted from `assets/img/gallery/`
- [ ] Record deleted from `gallery` table in DB

**Verify in Database:**
```sql
SELECT * FROM gallery;
```
- [ ] Image record no longer present

---

## 👤 Step 10: Test Admin Settings

### Change Password
1. Login as admin
2. Click "Settings" from dashboard
3. Enter current password: `Admin@123`
4. Enter new password: `YourNewPassword@123`
5. Click "Update Password"

- [ ] Password change successful
- [ ] Message shown
- [ ] Logout and try login with new password

### Login with New Password
1. Logout
2. Try login with new credentials

- [ ] Login works with new password
- [ ] Old password no longer works

---

## 🚪 Step 11: Test Logout

### Logout Process
1. Click "Logout" button
2. Should redirect to login page

- [ ] Session destroyed
- [ ] Cannot access admin pages after logout
- [ ] "Redirect to login" works if visiting protected URL

---

## 📝 Step 12: Verify Audit Logging

### Check Logs
1. Open file: `logs/admin_actions.log`
2. Should contain entries like:
   - Login attempt
   - Password changes
   - Gallery uploads/deletes
   - Logouts

- [ ] `logs/admin_actions.log` file exists
- [ ] Contains timestamped entries
- [ ] Entries have format: `YYYY-MM-DD HH:MM:SS | User: ... | Action: ...`

---

## 🔒 Step 13: Security Verification

### Test SQL Injection Prevention
1. In login form, try username: `admin' OR '1'='1`
2. Should fail gracefully

- [ ] Login rejected (not bypassed)
- [ ] No database error shown
- [ ] Prepared statements prevent injection

### Test XSS Prevention
1. In image name, try: `<script>alert('xss')</script>`
2. Upload image

- [ ] No popup alert appears
- [ ] Script not executed
- [ ] Text displayed as-is with HTML entities

### Test CSRF Token
1. Right-click login page → "View Page Source"
2. Search for `csrf_token`

- [ ] CSRF token field present in form
- [ ] Token value is random hash (128 characters)

### Test Password Hashing
1. Check `users` table in phpMyAdmin
2. Look at `password_hash` column

- [ ] Password NOT plaintext
- [ ] Password starts with `$2y$` (bcrypt hash)
- [ ] All passwords are hashed

---

## 📱 Step 14: Responsive Design Check

### Test Mobile Display
1. Open gallery page: `http://localhost/travel/gallery.php`
2. Press F12 (DevTools) → Toggle Device Toolbar
3. Test different screen sizes:
   - Mobile (320px)
   - Tablet (768px)
   - Desktop (1024px+)

- [ ] Layout responsive at 320px (mobile)
- [ ] Layout responsive at 768px (tablet)
- [ ] Layout responsive at 1024px (desktop)
- [ ] Images scale properly
- [ ] No horizontal scrolling

---

## 🐛 Step 15: Error Handling

### Test Database Disconnect
1. Stop MySQL service
2. Try to login

- [ ] Friendly error message shown (not raw database error)
- [ ] Error logged but not exposed to user

### Test Missing Image File
1. Delete an image file from `assets/img/gallery/`
2. Visit public gallery page

- [ ] Gallery still loads
- [ ] Shows placeholder or error gracefully

### Test Session Timeout
1. Login to admin
2. Close browser completely
3. Open new browser window to `/admin/`

- [ ] Redirected to login
- [ ] Session truly ended

---

## 📊 Final Verification Checklist

- [ ] All files created successfully
- [ ] Database schema imported
- [ ] Default admin user created
- [ ] Login page accessible
- [ ] Authentication working
- [ ] Gallery upload working
- [ ] Public gallery displaying images
- [ ] Image deletion working
- [ ] Logout destroying session
- [ ] Audit logs recording actions
- [ ] Security validation working
- [ ] Responsive design functioning
- [ ] Error handling graceful
- [ ] No PHP/database errors shown

---

## ✅ Setup Complete!

If all checkboxes are checked, your admin panel is:
- ✅ Installed
- ✅ Configured
- ✅ Secure
- ✅ Tested
- ✅ Ready for use

---

## 📋 Troubleshooting Checklist

If something doesn't work, check:

### Login Issues
- [ ] Database connection is working (test in phpMyAdmin)
- [ ] `admin` user exists in `users` table
- [ ] Password for admin is correct: `Admin@123`
- [ ] `config/db.php` has correct credentials
- [ ] `config/auth.php` file exists

### Upload Issues
- [ ] `assets/img/gallery/` directory exists
- [ ] Directory has write permissions (755)
- [ ] File is less than 5MB
- [ ] File type is JPG, PNG, WebP, or GIF
- [ ] No disk space issues

### Gallery Display Issues
- [ ] Images are actually in database (check `gallery` table)
- [ ] Image paths in database are correct
- [ ] Files exist at `assets/img/gallery/<filename>`
- [ ] File permissions allow reading

### Session Issues
- [ ] Browser cookies enabled
- [ ] Session directory writable (`php -i | grep session.save_path`)
- [ ] PHP session timeout not too short
- [ ] HTTPS issues (if using HTTPS, ensure secure cookies)

---

## 📞 Need Help?

1. Check `ADMIN_PANEL_GUIDE.md` for detailed docs
2. Review `logs/admin_actions.log` for errors
3. Check XAMPP `apache/logs/error.log`
4. Use phpMyAdmin to verify database tables
5. Check browser DevTools (F12) for JavaScript errors

---

**Ready to launch your admin panel! 🚀**

Created: 2025-12-01  
Status: ✅ Production Ready
