/*
  # Fix user limits and admin setup

  1. Changes
    - Recreate user_limits table with proper structure
    - Set up correct RLS policies
    - Insert default limits for existing users
    - Configure admin user properly

  2. Security
    - Enable RLS on user_limits table
    - Add policies for viewing and updating limits
*/

-- Drop existing table and recreate
DROP TABLE IF EXISTS user_limits CASCADE;

CREATE TABLE user_limits (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  download_limit integer NOT NULL DEFAULT 10,
  is_admin boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE user_limits ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own limits"
  ON user_limits FOR SELECT
  USING (auth.uid() = user_id OR EXISTS (
    SELECT 1 FROM user_limits WHERE user_id = auth.uid() AND is_admin = true
  ));

CREATE POLICY "Admins can update any limits"
  ON user_limits FOR UPDATE
  USING (EXISTS (
    SELECT 1 FROM user_limits WHERE user_id = auth.uid() AND is_admin = true
  ));

-- Insert default limits for all existing users
WITH admin_user AS (
  SELECT id, email
  FROM auth.users 
  WHERE email = 'finckgustavo@gmail.com'
)
INSERT INTO user_limits (user_id, download_limit, is_admin)
SELECT 
  u.id,
  CASE WHEN au.id IS NOT NULL THEN 999999 ELSE 10 END,
  CASE WHEN au.id IS NOT NULL THEN true ELSE false END
FROM auth.users u
LEFT JOIN admin_user au ON u.id = au.id
ON CONFLICT (user_id) DO UPDATE 
SET 
  download_limit = EXCLUDED.download_limit,
  is_admin = EXCLUDED.is_admin;