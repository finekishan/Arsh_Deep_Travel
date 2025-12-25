# phpMyAdmin Connection Fix

## Issue
```
Cannot connect: invalid settings
Access denied for user 'pma'@'localhost'
```

## Quick Automated Fix

**Step 1:** Open in browser:
```
http://localhost/travel/setup_phpmyadmin.php
```

**Step 2:** Go to phpMyAdmin:
```
http://localhost/phpmyadmin
```

**Step 3:** Login as:
- Username: `root`
- Password: (leave empty)

---

## Manual Fix (If Automated Doesn't Work)

**File to edit:** `C:\xampp\phpMyAdmin\config.inc.php`

### Find this section:
```php
$cfg['Servers'][$i]['auth_type'] = 'config';
$cfg['Servers'][$i]['user'] = 'pma';
$cfg['Servers'][$i]['password'] = 'pmapass';
```

### Replace with:
```php
$cfg['Servers'][$i]['auth_type'] = 'cookie';
$cfg['Servers'][$i]['user'] = '';
$cfg['Servers'][$i]['password'] = '';
$cfg['Servers'][$i]['AllowNoPassword'] = true;
```

### Save and refresh phpMyAdmin

---

## If MySQL Still Won't Connect

**Ensure MySQL is running:**
1. Open XAMPP Control Panel
2. Click **Start** next to MySQL
3. Wait for it to say "Running"
4. Try phpMyAdmin again

**Check MySQL connection from travel app:**
```
http://localhost/travel/test_connection.php
```

---

## Port Issue

If MySQL is on port **3307** instead of 3306:

Edit `C:\xampp\phpMyAdmin\config.inc.php` and change:
```php
$cfg['Servers'][$i]['port'] = '3306';
```
To:
```php
$cfg['Servers'][$i]['port'] = '3307';
```

Then refresh phpMyAdmin.

