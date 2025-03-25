import React from 'react';
import { ArrowRight, Package, ShoppingCart, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Products = () => {
  const { addToCart, cart } = useCart();

  const getItemQuantity = (productId: string) => {
    const item = cart.find(item => item.id === productId);
    return item?.quantity || 0;
  };

  const products = [
    {
      id: 'box-1',
      name: 'Biodegradable Shipping Boxes',
      description: 'Eco-friendly paper boxes made from 100% recycled materials, perfect for shipping and storage. Sturdy construction with natural kraft finish.',
      image: 'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      price: 'MMK 30,000 per ten boxes'
    },
    {
      id: 'mailer-1',
      name: 'Plant-Based Mailers',
      description: 'Fully compostable mailers made from plant starch and organic materials. Water-resistant and durable for secure shipping.',
      image: 'https://videocdn.pollo.ai/web-cdn/pollo/production/cm87jls1201rhhiv4v7rwgrf2/image/1742615539215-7f0fd648-9138-4ab6-b180-f2558fadf3f6.png',
      price: 'MMK 20,000 per ten mailers'
    },
    {
      id: 'food-1',
      name: 'Food and Beverage Packaging',
      description: 'Biodegradable takeaway containers (made from bagasse, PLA, or paperboard)Compostable cups and lids (cornstarch-based or sugarcane)',
      image: 'https://videocdn.pollo.ai/web-cdn/pollo/production/cm8iienz200c7n5ie0nsdt69u/image/1742617004941-652685b4-8b24-472d-a4f3-2b3cd657ea2e.png',
      price: 'MMK 20,000 per ten packages'
    },
    {
      id: 'wrap-1',
      name: 'Plant-Based Protective Wrap',
      description: 'Sustainable bubble wrap alternative made from plant materials. Provides excellent protection while being fully biodegradable.',
      image: 'https://videocdn.pollo.ai/web-cdn/pollo/production/cm87jls1201rhhiv4v7rwgrf2/image/1742831878024-fa2dfcc2-212c-4dd4-a409-c6cb38989d65.png',
      price: 'MMK 20,000 per ten rolls'
    },
    {
      id: 'cosmetic-1',
      name: 'Bamboo Cosmetic Containers',
      description: 'Premium bamboo containers for cosmetics and skincare products. Sustainable, elegant, and perfect for luxury brands.',
      image: 'data:image/jpeg;base64,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',
      price: 'MMK 30,000 per ten containers'
    },
    {
      id: 'food-bag-1',
      name: 'Paper Food Bags with Window',
      description: 'Kraft paper bags with PLA window, perfect for bakery and food items. Grease-resistant and fully compostable.',
      image: 'data:image/jpeg;base64,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',
      price: 'MMK 20,000 per ten bags'
    },
    {
      id: 'tube-1',
      name: 'Eco-Friendly Tubes',
      description: 'Recyclable tubes for cosmetics and personal care products, with biodegradable filling materials.',
      image: 'https://paper-tubes.com/wp-content/uploads/2023/01/paper-tubes-with-different-size.jpg',
      price: 'MMK 20,000 per ten tubes'
    },
    {
      id: 'flexible-1',
      name: 'Compostable Bulk Bags',
      description: 'Sustainable flexible packaging options. Made from corn starch.',
      image: 'data:image/jpeg;base64,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',
      price: 'MMK 5,000 per ten packs'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sustainable Packaging Products</h1>
          <p className="text-xl max-w-2xl">
            Discover our range of eco-friendly packaging solutions designed for both
            performance and sustainability.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[500px]">
                <div 
                  className="h-48 bg-cover bg-center flex-shrink-0"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                  <div className="mt-auto">
                    <p className="text-green-600 font-semibold mb-4">{product.price}</p>
                    <div className="flex gap-2 h-10">
                      <button
                        onClick={() => addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image
                        })}
                        className="flex-1 bg-green-600 text-white rounded hover:bg-green-500 flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="h-5 w-5" />
                        <span>Add to Cart</span>
                        {getItemQuantity(product.id) > 0 && (
                          <span>({getItemQuantity(product.id)})</span>
                        )}
                      </button>
                      <Link
                        to="/ai-consultant"
                        className="w-10 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 flex items-center justify-center"
                        title="Get AI recommendations"
                      >
                        <Bot className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Package className="h-12 w-12 text-green-600 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Custom Solutions</h2>
              <p className="text-gray-600 mb-6">
                Need a custom packaging solution? Our team can design and manufacture
                sustainable packaging tailored to your specific requirements.
              </p>
              <Link
                to="/consultation"
                className="inline-flex items-center text-green-600 hover:text-green-700"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div>
              <ShoppingCart className="h-12 w-12 text-green-600 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Bulk Orders</h2>
              <p className="text-gray-600 mb-6">
                Save more with our bulk ordering options. Contact us for wholesale
                pricing and large volume discounts.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-green-600 hover:text-green-700"
              >
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You Need?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our team for custom solutions and bulk ordering options.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/ai-consultant"
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-md inline-flex items-center"
            >
              Ask AI Assistant
              <Bot className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-green-600 text-white hover:bg-green-500 px-8 py-3 rounded-md inline-flex items-center"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;