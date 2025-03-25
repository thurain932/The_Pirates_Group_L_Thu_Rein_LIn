import React from 'react';
import { ArrowRight, Recycle, TreePine, Leaf, PackageCheck, Timer, Award, Factory, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecyclePage = () => {
  const breakdownTimes = [
    { material: 'Kraft Paper Boxes', time: '2-6 months', icon: '📦' },
    { material: 'Bamboo based Containers', time: '1-2 years', icon: '🎋' },
    { material: 'PLA-based Packaging', time: '3-6 months', icon: '♻️' },
    { material: 'Mushroom-Based Packaging', time: '30-45 days', icon: '🍄' }
  ];

  const certifications = [
    {
      icon: '🔄',
      title: 'Recycled Content',
      description: 'Our boxes contain 80% recycled paper & plant-based materials'
    },
    {
      icon: '🌍',
      title: 'Compostable Certification',
      description: 'Meets ASTM D6400 & EN 13432 standards'
    },
    {
      icon: '♻️',
      title: 'Recyclable Materials',
      description: 'All packaging is 100% curbside recyclable'
    },
    {
      icon: '✅',
      title: 'Plastic-Free Options',
      description: 'Available for most products  categories'
    }
  ];

  const initiatives = [
    {
      icon: '🌱',
      title: 'Responsible Sourcing',
      description: 'Sourced from FSC-certified forests & ethical suppliers',
      progress: 90
    },
    {
      icon: '💨',
      title: 'Decarbonization',
      description: 'Manufacturing with reduced CO₂ emissions & offset programs',
      progress: 75
    },
    {
      icon: '🌳',
      title: 'Reforestation',
      description: 'We plant 1 tree for every 1,000 boxes sold',
      progress: 85
    },
    {
      icon: '⚡',
      title: 'Energy-Efficient Production',
      description: 'Factories powered by renewable energy',
      progress: 80
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sustainable Packaging for a Greener Future
          </h1>
          <p className="text-xl max-w-2xl mb-8">
            Biodegradable, compostable, and eco-friendly packaging solutions for businesses that care.
          </p>
          <div className="flex gap-4">
            <Link
              to="/contact"
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-md inline-flex items-center"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products"
              className="border border-white text-white hover:bg-green-600 px-8 py-3 rounded-md inline-flex items-center"
            >
              Browse Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Breakdown Time Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            How Long Does Our Packaging Last?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {breakdownTimes.map((item, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.material}</h3>
                <p className="text-green-600 font-medium">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eco-Certifications Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Committed to Sustainability
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <div className="text-4xl mr-4">{cert.icon}</div>
                <div>
                  <h3 className="font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Beyond Packaging – Our Commitment to the Planet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{initiative.icon}</div>
                  <h3 className="font-semibold">{initiative.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{initiative.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: `${initiative.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{initiative.progress}% Complete</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join the Sustainable Packaging Movement
          </h2>
          <p className="text-xl mb-8">
            Make a difference with eco-friendly packaging solutions.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-md inline-flex items-center"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products"
              className="border border-white text-white hover:bg-green-600 px-8 py-3 rounded-md inline-flex items-center"
            >
              Browse Eco-Packaging
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecyclePage;