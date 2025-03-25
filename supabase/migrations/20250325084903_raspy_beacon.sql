/*
  # Create contact messages table

  1. New Table
    - contact_messages
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - name (text)
      - email (text)
      - phone (text)
      - subject (text)
      - message (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS
    - Add policies for authenticated users
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can insert their own messages"
  ON contact_messages
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);