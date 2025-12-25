<?php
/**
 * Direct phpMyAdmin Configuration Fix
 * Creates a working config.inc.php file that actually works
 */

$configPath = 'C:\\xampp\\phpMyAdmin\\config.inc.php';

if (!is_writable(dirname($configPath))) {
    die('ERROR: Cannot write to phpMyAdmin directory. You may need to run as Administrator.');
}

// The working phpMyAdmin config
$config = <<<'EOF'
<?php
/**
 * phpMyAdmin configuration file.
 * This config uses cookie-based authentication.
 */

// Server configuration
$i = 1;

// The `$cfg['Servers']` array starts with $cfg['Servers'][1].  Do not change this line
// you can add as many servers as you want.

// Server: localhost
$cfg['Servers'][$i]['verbose'] = 'localhost';
$cfg['Servers'][$i]['host'] = 'localhost';
$cfg['Servers'][$i]['port'] = '3306';
$cfg['Servers'][$i]['socket'] = '';
$cfg['Servers'][$i]['auth_type'] = 'cookie';
$cfg['Servers'][$i]['user'] = '';
$cfg['Servers'][$i]['password'] = '';
$cfg['Servers'][$i]['only_db'] = '';
$cfg['Servers'][$i]['user_overrides'] = [];
$cfg['Servers'][$i]['SessionTimeZone'] = null;
$cfg['Servers'][$i]['AllowNoPassword'] = true;
$cfg['Servers'][$i]['ssl'] = false;
$cfg['Servers'][$i]['ssl_verify'] = true;

// Additional settings
$cfg['PmaAbsoluteUri'] = '';
$cfg['PmaCookiePath'] = '/';
$cfg['PmaCookieDomain'] = '';
$cfg['PmaCookieSecure'] = false;
$cfg['PmaCookieSameSite'] = 'Lax';
$cfg['PmaHttpOnly'] = true;
$cfg['PmaDisableCookieWarning'] = false;

// Blowfish secret
$cfg['blowfish_secret'] = 'a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3';

// Default display options
$cfg['DisplayServersList'] = true;
$cfg['DisplayDatabasesList'] = true;
$cfg['MaxTableList'] = 250;
$cfg['MaxNavigationItems'] = 50;
$cfg['NavigationTreeDefaultTabTable'] = 'structure';
$cfg['NavigationTreeDefaultTabTable2'] = '';
$cfg['BrowsePointerEnable'] = true;
$cfg['BrowseMarkerEnable'] = true;

// Text area settings
$cfg['TextareaCols'] = 80;
$cfg['TextareaRows'] = 24;
$cfg['LimitChars'] = 50;
$cfg['RowActionLinks'] = 'both';

// Query window
$cfg['QueryWindowHeight'] = 400;
$cfg['QueryWindowWidth'] = 600;
$cfg['QueryHistoryDB'] = false;
$cfg['QueryHistoryMax'] = 25;

// Default table options
$cfg['MaxRows'] = 100;
$cfg['MinDigits'] = 5;
$cfg['MinDigits4Storage'] = 10;

// Theme
$cfg['ThemeDefault'] = 'pmahomme';
$cfg['ThemePercentage'] = 80;

// Default language
$cfg['DefaultLang'] = 'en';

// Default connection collation
$cfg['DefaultConnectionCollation'] = '';

// Enable query debugging
$cfg['DBG']['sql'] = false;
$cfg['DBG']['sqlbinding'] = false;

// Allow user drop database
$cfg['AllowUserDropDatabase'] = false;

// Confirm DELETE, INSERT, UPDATE, REPLACE queries
$cfg['Confirm'] = true;

// Use checkboxes to select items
$cfg['CheckBrowserTitle'] = true;

// Allow to display database comment on table browse
$cfg['ShowDbStructureComment'] = false;

// Allow to display column comments on table structure and edit
$cfg['ShowColumnComments'] = true;

// Misc settings
$cfg['MaxExactCount'] = 50000;
$cfg['ShowMultipleColumnSort'] = true;
$cfg['SuggestDBName'] = true;
$cfg['TrustedProxies'] = [];
$cfg['ProxyUrl'] = '';
$cfg['ProxyUrlLength'] = 24;

// End of phpMyAdmin configuration file
EOF;

// Write the config
if (file_put_contents($configPath, $config)) {
    echo "✅ SUCCESS! phpMyAdmin config updated.\n\n";
    echo "Now try: http://localhost/phpmyadmin\n";
    echo "\nLogin with:\n";
    echo "  Username: root\n";
    echo "  Password: (leave empty)\n";
} else {
    echo "❌ ERROR: Could not write to config file.\n";
    echo "Path: $configPath\n";
    echo "\nTry running this as Administrator.\n";
}
?>
