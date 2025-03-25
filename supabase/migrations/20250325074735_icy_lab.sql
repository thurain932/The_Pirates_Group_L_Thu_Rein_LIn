/*
  # Create users and chat messages tables

  1. New Tables
    - `users` (for authentication)
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)

    - `chat_messages` (for storing AI chat history)
      - `id` (uuid, primary key)
      - `message` (text, required)
      - `is_user` (boolean, required)
      - `created_at` (timestamp)
      - `user_id` (uuid, foreign key to users)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to:
      - Read their own data
      - Insert their own messages
*/

-- Create users table first
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Create chat_messages table with foreign key to users
CREATE TABLE IF NOT EXISTS chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  message text NOT NULL,
  is_user boolean NOT NULL,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE
);

ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own messages"
  ON chat_messages
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read their own messages"
  ON chat_messages
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);