/*
  # Add orders table

  1. New Tables
    - orders
      - id (uuid, primary key)
      - user_id (uuid, foreign key to users)
      - product_id (uuid, foreign key to products)
      - quantity (integer)
      - total_amount (numeric)
      - status (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS
    - Add policies for authenticated users
*/

-- Create orders table if it doesn't exist
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  quantity integer NOT NULL CHECK (quantity > 0),
  total_amount numeric NOT NULL CHECK (total_amount >= 0),
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS if not already enabled
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Users can insert their own orders" ON orders;
  DROP POLICY IF EXISTS "Users can view their own orders" ON orders;
END $$;

-- Create policies
CREATE POLICY "Users can insert their own orders"
  ON orders
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);