/*
  # Create admin user

  1. Changes
    - Insert admin user with credentials:
      - Email: admin@templatefy.com
      - Password: admin123
      - Full Name: Admin Templatefy

  Note: In production, use proper password hashing and more secure credentials
*/

INSERT INTO users (email, password, full_name)
VALUES ('admin@templatefy.com', 'admin123', 'Admin Templatefy')
ON CONFLICT (email) DO NOTHING;