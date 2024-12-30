/*
  # Create template_defaults table

  1. New Tables
    - `template_defaults`
      - `template_id` (text, primary key)
      - `default_values` (jsonb)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS
    - Add policies for admin access
*/

-- Create template_defaults table
CREATE TABLE template_defaults (
  template_id text PRIMARY KEY,
  default_values jsonb NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE template_defaults ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Admins can read template defaults"
  ON template_defaults FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = auth.uid() AND is_admin = true
  ));

CREATE POLICY "Admins can update template defaults"
  ON template_defaults FOR UPDATE
  USING (EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = auth.uid() AND is_admin = true
  ));

CREATE POLICY "Admins can insert template defaults"
  ON template_defaults FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = auth.uid() AND is_admin = true
  ));

-- Create trigger for updated_at
CREATE TRIGGER update_template_defaults_updated_at
  BEFORE UPDATE ON template_defaults
  FOR EACH ROW
  EXECUTE FUNCTION handle_updated_at();