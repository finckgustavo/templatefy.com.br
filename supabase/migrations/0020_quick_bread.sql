/*
  # Add function to safely update user limits

  1. New Features
    - Add RPC function for updating user limits
    - Add proper permission checks
    - Add error handling
*/

-- Create function to safely update user limits
CREATE OR REPLACE FUNCTION update_user_limit(p_user_id uuid, p_download_limit integer)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Check if the current user is an admin
  IF NOT EXISTS (
    SELECT 1 
    FROM user_limits 
    WHERE user_id = auth.uid() 
    AND is_admin = true
  ) THEN
    RAISE EXCEPTION 'Unauthorized: Only admins can update limits';
  END IF;

  -- Update the limit
  UPDATE user_limits
  SET 
    download_limit = p_download_limit,
    updated_at = now()
  WHERE user_id = p_user_id;

  -- Check if the update was successful
  IF NOT FOUND THEN
    -- If no record exists, try to insert one
    INSERT INTO user_limits (user_id, download_limit)
    VALUES (p_user_id, p_download_limit);
  END IF;
END;
$$;