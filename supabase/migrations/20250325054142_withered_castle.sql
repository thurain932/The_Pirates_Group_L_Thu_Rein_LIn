/*
  # Create products and orders tables

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (numeric)
      - `image_url` (text)
      - `created_at` (timestamp)
      - `user_id` (uuid, foreign key)
    - `orders`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key)
      - `product_id` (uuid, foreign key)
      - `quantity` (integer)
      - `total_amount` (numeric)
      - `status` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric NOT NULL CHECK (price >= 0),
  image_url text,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  quantity integer NOT NULL CHECK (quantity > 0),
  total_amount numeric NOT NULL CHECK (total_amount >= 0),
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create policies for products
CREATE POLICY "Users can view all products"
  ON products
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create their own products"
  ON products
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own products"
  ON products
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create policies for orders
CREATE POLICY "Users can view their own orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create orders"
  ON orders
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own orders"
  ON orders
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);