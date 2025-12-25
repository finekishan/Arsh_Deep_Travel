-- Travel Booking Database Schema
-- Created: 2025-12-01

-- ============================================
-- Users Table (Admin Login)
-- ============================================
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('admin', 'user') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_username (username),
  INDEX idx_email (email)
);

-- ============================================
-- Gallery Table (Admin uploaded images)
-- ============================================
CREATE TABLE IF NOT EXISTS gallery (
  id INT AUTO_INCREMENT PRIMARY KEY,
  image_name VARCHAR(255) NOT NULL,
  image_path VARCHAR(500) NOT NULL UNIQUE,
  description TEXT,
  uploaded_by INT NOT NULL,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_uploaded_at (uploaded_at),
  INDEX idx_uploaded_by (uploaded_by)
);

-- ============================================
-- Bookings Table (Taxi bookings)
-- ============================================
CREATE TABLE IF NOT EXISTS bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_status (status),
  INDEX idx_created_at (created_at)
);

-- ============================================
-- Contacts Table (Contact form submissions)
-- ============================================
CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(15),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  status ENUM('unread', 'read', 'replied') DEFAULT 'unread',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_status (status),
  INDEX idx_created_at (created_at),
  INDEX idx_email (email)
);

-- ============================================
-- Insert Default Admin User
-- ============================================
-- Username: admin
-- Password: Admin@123 (hashed with password_hash())
-- This should be changed on first login
INSERT INTO users (username, email, password_hash, role) VALUES
('admin', 'admin@arshdeeptravels.com', '$2y$10$pIUxgpptpDCx8Vwdd8fd0eOK5MJ3B8/OPYvBPf2SPuqIxcMe4DNsC', 'admin')
ON DUPLICATE KEY UPDATE id=id;
