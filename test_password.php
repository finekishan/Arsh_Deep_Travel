<?php
// Test password verification
$hash = '$2y$10$XeFeXF5nEeAhWDFgQPqoK.gP.gZJIhJ6Yf.aXGJHn7tS8zZKK8N3K';
$password = 'Admin@123';

echo "Testing password verification:\n";
echo "Password: $password\n";
echo "Hash: $hash\n";
echo "Verification result: " . (password_verify($password, $hash) ? 'TRUE' : 'FALSE') . "\n";

// Also test if the hash needs to be regenerated
$newHash = password_hash($password, PASSWORD_DEFAULT);
echo "\nNew hash for '$password': $newHash\n";
echo "New hash verification: " . (password_verify($password, $newHash) ? 'TRUE' : 'FALSE') . "\n";
?>
