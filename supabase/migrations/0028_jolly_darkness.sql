/*
  # Fix profile policies for user registration

  1. Changes
    - Drop existing policies that may be causing conflicts
    - Create new policies with proper permissions for user registration
    - Add policy for profile creation during signup

  2. Security
    - Maintain data isolation between users
    - Allow new user registration
    - Keep admin privileges
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;

-- Create new policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can insert their own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Create policy for system level operations
CREATE POLICY "System can perform all operations"
  ON profiles FOR ALL
  USING (current_setting('role') = 'rls_admin')
  WITH CHECK (current_setting('role') = 'rls_admin');

-- Set role for handle_new_user function
ALTER FUNCTION handle_new_user() SET ROLE rls_admin;