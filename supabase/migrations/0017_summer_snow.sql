/*
  # Fix user limits and admin setup

  1. Changes
    - Drop and recreate user_limits table with proper structure
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
  INSERT INTO public.user_limits (user_id, download_limit, is_admin)
  VALUES (new.id, 10, false);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
DROP TRIGGER IF EXISTS on_auth_user_created_limits ON auth.users;
CREATE TRIGGER on_auth_user_created_limits
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user_limits();

-- Insert default limits for all existing users
INSERT INTO user_limits (user_id, download_limit, is_admin)
SELECT 
  id,
  CASE WHEN email = 'finckgustavo@gmail.com' THEN 999999 ELSE 10 END,
  CASE WHEN email = 'finckgustavo@gmail.com' THEN true ELSE false END
FROM auth.users
ON CONFLICT (user_id) DO UPDATE 
SET 
  download_limit = EXCLUDED.download_limit,
  is_admin = EXCLUDED.is_admin;