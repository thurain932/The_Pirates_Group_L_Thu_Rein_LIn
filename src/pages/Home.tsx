import React from 'react';
import { ArrowRight, Package, Recycle, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://www.shutterstock.com/image-photo/disposable-food-packaging-recycling-sign-260nw-2348816081.jpg")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sustainable Packaging Solutions for a Better Tomorrow
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Transform your business with eco-friendly packaging solutions and expert consulting services.
          </p>
          <div className="space-x-4">
            <Link
              to="/consultation"
              className="bg-green-600 hover:bg-green-500 px-8 py-3 rounded-md inline-flex items-center"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products"
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-md inline-flex items-center"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg text-center">
              <Package className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainable Packaging</h3>
              <p className="text-gray-600">
                Eco-friendly packaging solutions that reduce environmental impact while maintaining product integrity.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg text-center">
              <Recycle className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Consulting</h3>
              <p className="text-gray-600">
                Professional guidance on sustainable practices and environmental compliance.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg text-center">
              <TreePine className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Green Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge solutions for businesses committed to environmental stewardship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us in creating a sustainable future with innovative packaging solutions.
          </p>
          <Link
            to="/contact"
            className="bg-green-600 text-white hover:bg-green-500 px-8 py-3 rounded-md inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;