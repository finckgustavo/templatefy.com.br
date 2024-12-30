/*
  # Fix user limits table and policies

  1. Changes
    - Add INSERT policy for admins
    - Add INSERT policy for new users
    - Fix UPDATE policy to allow admins to update limits
    - Add missing user_limits records for existing users
*/

-- Drop and recreate policies with proper permissions
DROP POLICY IF EXISTS "Users can view own limits and admins can view all" ON user_limits;
DROP POLICY IF EXISTS "Admins can update any limits" ON user_limits;

-- Create new policies
CREATE POLICY "Users can view own limits and admins can view all"
  ON user_limits FOR SELECT
  USING (
    auth.uid() = user_id 
    OR 
    EXISTS (
      SELECT 1 FROM user_limits 
      WHERE user_id = auth.uid() AND is_admin = true
    )
  );

CREATE POLICY "Admins can update any limits"
  ON user_limits FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM user_limits 
      WHERE user_id = auth.uid() AND is_admin = true
    )
  );

CREATE POLICY "Users can insert own limits"
  ON user_limits FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can insert limits"
  ON user_limits FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_limits 
      WHERE user_id = auth.uid() AND is_admin = true
    )
  );

-- Insert missing records for existing users
INSERT INTO user_limits (user_id, download_limit, is_admin)
SELECT 
  id,
  CASE WHEN email = 'finckgustavo@gmail.com' THEN 999999 ELSE 10 END,
  CASE WHEN email = 'finckgustavo@gmail.com' THEN true ELSE false END
FROM auth.users u
WHERE NOT EXISTS (
  SELECT 1 FROM user_limits WHERE user_id = u.id
);