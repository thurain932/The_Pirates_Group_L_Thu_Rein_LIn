export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  created_at: string;
  user_id: string;
}

export interface Order {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
  total_amount: number;
  status: string;
  created_at: string;
}