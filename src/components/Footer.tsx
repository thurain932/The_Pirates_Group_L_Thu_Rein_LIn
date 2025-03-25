import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-semibold text-white">EcoPack</span>
            </div>
            <p className="mt-4 text-gray-300">
              Leading the way in sustainable packaging solutions. Together, we can make a
              difference for our planet's future.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#services" className="text-base text-gray-300 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="text-base text-gray-300 hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-base text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Connect With Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2025 EcoPack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;