/*
  # Fix admin panel functionality

  1. Changes
    - Update RLS policies to allow proper admin access
    - Add missing indexes for better performance
    - Fix user limits table structure

  2. Security
    - Enable RLS
    - Add proper policies for admin access
*/

-- Drop and recreate user_limits table
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

-- Create policies with proper admin access
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

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_user_limits_admin ON user_limits(is_admin);
CREATE INDEX IF NOT EXISTS idx_user_limits_user_id ON user_limits(user_id);

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_user_limits_updated_at
  BEFORE UPDATE ON user_limits
  FOR EACH ROW
  EXECUTE FUNCTION handle_updated_at();

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION handle_new_user_limits()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.user_limits (
    user_id, 
    download_limit,
    is_admin
  )
  VALUES (
    new.id,
    10,
    CASE 
      WHEN new.email = 'finckgustavo@gmail.com' THEN true 
      ELSE false 
    END
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
DROP TRIGGER IF EXISTS on_auth_user_created_limits ON auth.users;
CREATE TRIGGER on_auth_user_created_limits
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user_limits();

-- Insert/update admin user
INSERT INTO user_limits (user_id, download_limit, is_admin)
SELECT 
  id,
  999999,
  true
FROM auth.users
WHERE email = 'finckgustavo@gmail.com'
ON CONFLICT (user_id) 
DO UPDATE SET 
  download_limit = 999999,
  is_admin = true;