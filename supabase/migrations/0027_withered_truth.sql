/*
  # Fix user registration handler

  1. Changes
    - Update handle_new_user function to properly handle new user registration
    - Add error handling and validation
    - Ensure proper profile creation with default values

  2. Security
    - Maintain RLS policies
    - Keep security definer attribute
*/

-- Drop and recreate the handle_new_user function with better error handling
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  default_limit INTEGER := 10;
  is_admin_user BOOLEAN := false;
BEGIN
  -- Check if email is admin email
  IF new.email = 'finckgustavo@gmail.com' THEN
    default_limit := 999999;
    is_admin_user := true;
  END IF;

  -- Insert new profile with proper error handling
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
      default_limit,
      is_admin_user
    );
  EXCEPTION WHEN unique_violation THEN
    -- If profile already exists, update it
    UPDATE public.profiles
    SET
      email = new.email,
      full_name = COALESCE(new.raw_user_meta_data->>'full_name', full_name),
      updated_at = now()
    WHERE id = new.id;
  END;

  RETURN new;
END;
$$;