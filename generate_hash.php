<?php
// Generate bcrypt hash for Admin@123
$password = 'Admin@123';
$hash = password_hash($password, PASSWORD_DEFAULT);

echo "Password: $password\n";
echo "Generated Hash: $hash\n";
echo "\nUse this hash to update the database:\n";
echo "UPDATE users SET password_hash = '$hash' WHERE username = 'admin';\n";
?>

