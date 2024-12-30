/*
  # Add admin role and download limits

  1. New Tables
    - `user_limits`
      - `user_id` (uuid, references auth.users)
      - `download_limit` (integer)
      - `is_admin` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `user_limits` table
    - Add policies for authenticated users to read their own limits
    - Add policies for admins to manage all limits
*/

-- Create user_limits table
CREATE TABLE IF NOT EXISTS user_limits (
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
CREATE TRIGGER on_auth_user_created_limits
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user_limits();

-- Add me as admin
INSERT INTO user_limits (user_id, download_limit, is_admin)
SELECT id, 999999, true
FROM auth.users
WHERE email = 'finckgustavo@gmail.com'
ON CONFLICT (user_id) 
DO UPDATE SET is_admin = true, download_limit = 999999;