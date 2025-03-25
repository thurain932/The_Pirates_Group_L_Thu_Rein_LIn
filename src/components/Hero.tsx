import React from 'react';
import { Leaf, Package2, RecycleIcon } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Sustainable Packaging</span>
          <span className="block text-green-600">for a Better Future</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Transform your business with eco-friendly packaging solutions. Join us in creating a sustainable future while enhancing your brand's value.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <a
            href="#services"
            className="rounded-md bg-green-600 px-8 py-3 text-base font-medium text-white shadow hover:bg-green-700 md:py-4 md:px-10"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="rounded-md bg-gray-100 px-8 py-3 text-base font-medium text-gray-800 shadow hover:bg-gray-200 md:py-4 md:px-10"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-green-100 p-3">
              <Leaf className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Eco-Friendly</h3>
            <p className="mt-2 text-base text-gray-500">100% biodegradable solutions</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-green-100 p-3">
              <Package2 className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Custom Solutions</h3>
            <p className="mt-2 text-base text-gray-500">Tailored to your needs</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-green-100 p-3">
              <RecycleIcon className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Sustainable</h3>
            <p className="mt-2 text-base text-gray-500">Reduce environmental impact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;