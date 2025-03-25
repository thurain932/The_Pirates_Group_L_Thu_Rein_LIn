import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Order Successful!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. We'll send you an email with your order details shortly.
          </p>
          <div className="space-y-4">
            <Link
              to="/products"
              className="block w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            >
              Continue Shopping
            </Link>
            <Link
              to="/home"
              className="block w-full border border-green-600 text-green-600 py-2 rounded-md hover:bg-green-50"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;