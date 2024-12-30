/*
  # Add limits for existing users

  1. Changes
    - Insert default limits for all existing users
    - Set admin privileges for finckgustavo@gmail.com
*/

-- Insert default limits for all existing users
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

-- Set admin privileges for specific user
UPDATE user_limits
SET 
  is_admin = true,
  download_limit = 999999
WHERE user_id IN (
  SELECT id FROM auth.users WHERE email = 'finckgustavo@gmail.com'
);