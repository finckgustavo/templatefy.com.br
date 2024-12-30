/*
  # Fix user limits and admin panel

  1. Changes
    - Drop and recreate user_limits table with proper constraints
    - Add RLS policies for proper access control
    - Insert default limits for existing users
    - Set up admin user

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
INSERT INTO user_limits (user_id, download_limit, is_admin)
SELECT 
  id,
  10,
  CASE WHEN email = 'finckgustavo@gmail.com' THEN true ELSE false END
FROM auth.users
ON CONFLICT (user_id) DO UPDATE 
SET 
  download_limit = CASE 
    WHEN user_limits.is_admin THEN user_limits.download_limit 
    ELSE 10 
  END,
  is_admin = CASE 
    WHEN email = 'finckgustavo@gmail.com' THEN true 
    ELSE user_limits.is_admin 
  END;