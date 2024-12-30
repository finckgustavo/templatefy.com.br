/*
  # Fix Profiles Table Structure

  1. Changes
    - Create temporary table to store existing data
    - Recreate profiles table with correct structure
    - Restore data from temporary table
    - Add proper indexes and policies

  2. Security
    - Enable RLS
    - Add policies for user access
    - Preserve admin privileges
*/

-- First, create a temporary table to store existing data
CREATE TEMP TABLE temp_profiles AS 
SELECT * FROM profiles;

-- Drop existing profiles table
DROP TABLE IF EXISTS profiles CASCADE;

-- Recreate profiles table with correct structure
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text,
  download_limit integer NOT NULL DEFAULT 10,
  is_admin boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
  ON profiles FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = true
  ));

CREATE POLICY "Admins can update all profiles"
  ON profiles FOR UPDATE
  USING (EXISTS (
    SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = true
  ));

-- Restore data from temporary table
INSERT INTO profiles (id, email, full_name, download_limit, is_admin, created_at, updated_at)
SELECT 
  id,
  email,
  full_name,
  COALESCE(download_limit, 10),
  COALESCE(is_admin, false),
  created_at,
  updated_at
FROM temp_profiles;

-- Ensure admin privileges
UPDATE profiles
SET 
  is_admin = true,
  download_limit = 999999
WHERE email = 'finckgustavo@gmail.com';

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    email,
    full_name,
    download_limit,
    is_admin
  )
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', ''),
    CASE WHEN new.email = 'finckgustavo@gmail.com' THEN 999999 ELSE 10 END,
    CASE WHEN new.email = 'finckgustavo@gmail.com' THEN true ELSE false END
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create indexes for better performance
CREATE INDEX profiles_email_idx ON profiles(email);
CREATE INDEX profiles_is_admin_idx ON profiles(is_admin);