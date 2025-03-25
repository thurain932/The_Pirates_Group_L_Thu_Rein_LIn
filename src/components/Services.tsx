import React from 'react';
import { Package2, Lightbulb, FileCheck, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Package2 className="h-8 w-8 text-green-600" />,
      title: 'Sustainable Packaging',
      description: 'Custom eco-friendly packaging solutions designed to meet your specific needs while minimizing environmental impact.',
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-green-600" />,
      title: 'Consulting Services',
      description: 'Expert guidance on sustainable packaging strategies, material selection, and implementation.',
    },
    {
      icon: <FileCheck className="h-8 w-8 text-green-600" />,
      title: 'Compliance Support',
      description: 'Ensure your packaging meets environmental regulations and sustainability standards.',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: 'Supply Chain Optimization',
      description: 'Streamline your packaging process while maintaining sustainability goals.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive sustainable packaging solutions for your business
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-500 text-center">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;