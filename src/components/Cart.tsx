import React from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    return sum + price * (item.quantity || 1);
  }, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center">
              <ShoppingCart className="h-6 w-6 text-green-600 mr-2" />
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
            </div>
            <button onClick={onClose}>
              <X className="h-6 w-6 text-gray-500 hover:text-gray-700" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.price}</p>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity || 1}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t p-4">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">MMK {total.toFixed(2)}</span>
            </div>
            <div className="space-y-2">
              <Link
                to="/checkout"
                className="block w-full bg-green-600 text-white text-center py-2 rounded-md hover:bg-green-700"
                onClick={onClose}
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={clearCart}
                className="block w-full border border-red-500 text-red-500 text-center py-2 rounded-md hover:bg-red-50"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;