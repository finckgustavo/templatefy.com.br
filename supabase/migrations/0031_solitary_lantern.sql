/*
  # Add temporary images storage
  
  1. New Tables
    - `temp_images`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `template_id` (text)
      - `filename` (text)
      - `storage_path` (text)
      - `created_at` (timestamptz)
      
  2. Security
    - Enable RLS
    - Add policies for user access
*/

-- Create temp_images table
CREATE TABLE temp_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  template_id text NOT NULL,
  filename text NOT NULL,
  storage_path text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE temp_images ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can insert their own images"
  ON temp_images FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own images"
  ON temp_images FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own images"
  ON temp_images FOR DELETE
  USING (auth.uid() = user_id);

-- Create cleanup function
CREATE OR REPLACE FUNCTION cleanup_old_temp_images() RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  image_record RECORD;
BEGIN
  FOR image_record IN
    SELECT * FROM temp_images
    WHERE created_at < NOW() - INTERVAL '24 hours'
  LOOP
    -- Delete from storage bucket (handled by application)
    DELETE FROM temp_images WHERE id = image_record.id;
  END LOOP;
END;
$$;