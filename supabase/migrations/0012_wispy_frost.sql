/*
  # Fix user limits data

  1. Changes
    - Ensure all users have limits
    - Set admin privileges for admin user
*/

-- Insert default limits for any users that don't have them
INSERT INTO user_limits (user_id, download_limit, is_admin)
SELECT 
  id,
  10,
  false
FROM auth.users
WHERE NOT EXISTS (
  SELECT 1 FROM user_limits WHERE user_id = auth.users.id
)
ON CONFLICT (user_id) DO NOTHING;

-- Ensure admin user has correct privileges
UPDATE user_limits
SET 
  is_admin = true,
  download_limit = 999999
WHERE user_id IN (
  SELECT id FROM auth.users WHERE email = 'finckgustavo@gmail.com'
);