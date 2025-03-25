/*
  # Create consultations table

  1. New Table
    - consultations
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - name (text)
      - email (text) 
      - date (date)
      - time (text)
      - type (text)
      - message (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS
    - Add policies for authenticated users
*/

CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  email text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  type text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can insert their own consultations"
  ON consultations
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own consultations"
  ON consultations
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);