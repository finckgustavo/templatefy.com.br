/*
  # Fix Downloads Table Migration

  1. Changes
    - Recreate downloads table with proper references to auth.users
    - Add RLS policies with safety checks
    - Add performance indexes
    
  2. Security
    - Enable RLS
    - Add policies for users to:
      - Insert their own downloads
      - View their own downloads
    
  3. Performance
    - Add indexes on user_id and template_id
*/

-- Create downloads table if not exists
CREATE TABLE IF NOT EXISTS downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  template_id text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;

-- Create policies with safety checks
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'downloads' 
    AND policyname = 'Users can insert their own downloads'
  ) THEN
    CREATE POLICY "Users can insert their own downloads"
      ON downloads FOR INSERT
      WITH CHECK (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'downloads' 
    AND policyname = 'Users can view own downloads'
  ) THEN
    CREATE POLICY "Users can view own downloads"
      ON downloads FOR SELECT
      USING (auth.uid() = user_id);
  END IF;
END $$;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS downloads_user_id_idx ON downloads(user_id);
CREATE INDEX IF NOT EXISTS downloads_template_id_idx ON downloads(template_id);