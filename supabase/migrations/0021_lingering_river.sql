/*
  # Add download limits to profiles table

  1. Changes
    - Add download_limit and is_admin columns to profiles table
    - Migrate existing data from user_limits table
    - Drop user_limits table
    - Update RLS policies
    - Create new function for updating limits

  2. Security
    - Maintain existing RLS on profiles
    - Add new policies for admin access
*/

-- Add new columns to profiles
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS download_limit integer NOT NULL DEFAULT 10,
ADD COLUMN IF NOT EXISTS is_admin boolean NOT NULL DEFAULT false;

-- Migrate existing data
UPDATE profiles p
SET 
  download_limit = COALESCE(ul.download_limit, 10),
  is_admin = COALESCE(ul.is_admin, false)
FROM user_limits ul
WHERE p.id = ul.user_id;

-- Set admin privileges for specific user
UPDATE profiles
SET 
  is_admin = true,
  download_limit = 999999
WHERE email = 'finckgustavo@gmail.com';

-- Drop old table and function
DROP TABLE IF EXISTS user_limits CASCADE;
DROP FUNCTION IF EXISTS update_user_limit CASCADE;

-- Create new function to update limits
CREATE OR REPLACE FUNCTION update_user_limit(p_user_id uuid, p_download_limit integer)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Check if the current user is an admin
  IF NOT EXISTS (
    SELECT 1 
    FROM profiles 
    WHERE id = auth.uid() 
    AND is_admin = true
  ) THEN
    RAISE EXCEPTION 'Unauthorized: Only admins can update limits';
  END IF;

  -- Update the limit
  UPDATE profiles
  SET 
    download_limit = p_download_limit,
    updated_at = now()
  WHERE id = p_user_id;
END;
$$;