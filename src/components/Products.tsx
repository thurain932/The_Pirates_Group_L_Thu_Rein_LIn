import React from 'react';

const Products = () => {
  const products = [
    {
      name: 'Compostable Bags',
      image: 'https://images.unsplash.com/photo-1610419626022-657951e4aa9e?auto=format&fit=crop&w=800&q=80',
      description: 'Fully biodegradable bags made from plant-based materials.',
    },
    {
      name: 'Plant-Based Plastics',
      image: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=800&q=80',
      description: 'Sustainable alternatives to traditional plastic packaging.',
    },
    {
      name: 'Eco-Friendly Boxes',
      image: 'https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=800&q=80',
      description: 'Recyclable and biodegradable packaging boxes.',
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Innovative biodegradable packaging solutions
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-2 text-gray-500">{product.description}</p>
                <div className="mt-4">
                  <button className="inline-flex items-center px-4 py-2 border border-green-600 text-sm font-medium rounded-md text-green-600 hover:bg-green-50">
                    Request Sample
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;