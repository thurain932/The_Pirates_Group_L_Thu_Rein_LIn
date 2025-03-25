/*
  # Fix users table RLS policies

  1. Changes
    - Add INSERT policy for users table to allow authenticated users to create their own records
    - Add UPDATE policy for users to manage their own data
  
  2. Security
    - Maintains existing RLS
    - Adds controlled access for user record creation
*/

-- Add insert policy for users
CREATE POLICY "Users can insert own data"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Add update policy for users
CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);