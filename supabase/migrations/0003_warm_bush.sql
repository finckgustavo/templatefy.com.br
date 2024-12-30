/*
  # Add downloads tracking

  1. New Tables
    - `downloads`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references users)
      - `template_id` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `downloads` table
    - Add policies for authenticated users
*/

-- Create downloads table
CREATE TABLE IF NOT EXISTS downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) NOT NULL,
  template_id text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can insert their own downloads" ON downloads
  FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can view own downloads" ON downloads
  FOR SELECT
  USING (user_id = auth.uid());

-- Create index for faster queries
CREATE INDEX downloads_user_id_idx ON downloads(user_id);
CREATE INDEX downloads_template_id_idx ON downloads(template_id);