/*
  # Add initial products

  1. Changes
    - Insert 8 eco-friendly packaging products with descriptions, prices, and image URLs
    
  2. Products Added
    - Biodegradable Mailers
    - Compostable Food Containers
    - Recycled Cardboard Boxes
    - Plant-Based Bubble Wrap
    - Eco-Friendly Tape
    - Biodegradable Packing Peanuts
    - Reusable Shipping Bags
    - Paper Void Fill
*/

INSERT INTO products (name, description, price, image_url, user_id)
VALUES 
  (
    'Biodegradable Mailers',
    'Made from plant-based materials, these mailers decompose completely within 180 days. Perfect for e-commerce businesses committed to sustainability.',
    12.99,
    'https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=800&q=80',
    auth.uid()
  ),
  (
    'Compostable Food Containers',
    'Food-safe containers made from renewable resources. Ideal for restaurants and food delivery services. Breaks down in commercial composting facilities.',
    24.99,
    'https://images.unsplash.com/photo-1610419626022-657951e4aa9e?auto=format&fit=crop&w=800&q=80',
    auth.uid()
  ),
  (
    'Recycled Cardboard Boxes',
    'Sturdy shipping boxes made from 100% post-consumer recycled materials. Available in multiple sizes for versatile packaging needs.',
    18.50,
    'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=800&q=80',
    auth.uid()
  ),
  (
    'Plant-Based Bubble Wrap',
    'An eco-friendly alternative to traditional bubble wrap, made from corn starch. Provides excellent protection while being fully biodegradable.',
    15.99,
    'https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&w=800&q=80',
    auth.uid()
  ),
  (
    'Eco-Friendly Tape',
    'Paper-based packaging tape with natural rubber adhesive. Strong holding power while remaining completely recyclable and biodegradable.',
    8.99,
    'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80',
    auth.uid()
  ),
  (
    'Biodegradable Packing Peanuts',
    'Made from natural starch, these packing peanuts dissolve in water and are completely biodegradable. Perfect for void fill and product protection.',
    19.99,
    'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&w=800&q=80',
    auth.uid()
  ),
  (
    'Reusable Shipping Bags',
    'Durable, waterproof shipping bags made from recycled materials. Can be reused multiple times, reducing packaging waste significantly.',
    29.99,
    'https://images.unsplash.com/photo-1597484661719-aa07180018c9?auto=format&fit=crop&w=800&q=80',
    auth.uid()
  ),
  (
    'Paper Void Fill',
    E'Recycled paper void fill solution that\'s both eco-friendly and effective. Perfect for filling empty spaces in packages and protecting products.',
    14.99,
    'https://images.unsplash.com/photo-1597484662341-d6f128f4c86b?auto=format&fit=crop&w=800&q=80',
    auth.uid()
  );