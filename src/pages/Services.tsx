import React from 'react';
import { ArrowRight, Leaf, PackageCheck, Recycle, TreePine, Bot, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl">
            Comprehensive sustainable packaging solutions and expert consulting services
            powered by both human expertise and advanced AI technology.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <PackageCheck className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Sustainable Packaging Design</h3>
              <p className="text-gray-600 mb-6">
                Custom eco-friendly packaging solutions designed to minimize environmental impact
                while maintaining product protection and brand identity.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <Leaf className="h-5 w-5 text-green-600 mr-2" />
                  <span>Biodegradable materials</span>
                </li>
                <li className="flex items-center">
                  <Leaf className="h-5 w-5 text-green-600 mr-2" />
                  <span>Recyclable solutions</span>
                </li>
                <li className="flex items-center">
                  <Leaf className="h-5 w-5 text-green-600 mr-2" />
                  <span>Minimal waste design</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Link
                  to="/consultation"
                  className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/ai-consultant"
                  className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                  AI Assistant
                  <Bot className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <Bot className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">AI-Powered Consulting</h3>
              <p className="text-gray-600 mb-6">
                Get instant, 24/7 expert guidance on sustainable packaging solutions using our
                advanced AI consultant. Perfect for initial research and quick answers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-green-600 mr-2" />
                  <span>Real-time recommendations</span>
                </li>
                <li className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-green-600 mr-2" />
                  <span>Material selection guidance</span>
                </li>
                <li className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-green-600 mr-2" />
                  <span>Instant sustainability advice</span>
                </li>
              </ul>
              <Link
                to="/ai-consultant"
                className="inline-flex items-center text-green-600 hover:text-green-700"
              >
                Try AI Consultant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <TreePine className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Supply Chain Optimization</h3>
              <p className="text-gray-600 mb-6">
                Streamline your supply chain with sustainable practices and eco-friendly
                logistics solutions, supported by AI analysis.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <Leaf className="h-5 w-5 text-green-600 mr-2" />
                  <span>Carbon footprint reduction</span>
                </li>
                <li className="flex items-center">
                  <Leaf className="h-5 w-5 text-green-600 mr-2" />
                  <span>Sustainable sourcing</span>
                </li>
                <li className="flex items-center">
                  <Leaf className="h-5 w-5 text-green-600 mr-2" />
                  <span>Logistics optimization</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Link
                  to="/consultation"
                  className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/ai-consultant"
                  className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                  AI Analysis
                  <Bot className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <Recycle className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Environmental Consulting</h3>
              <p className="text-gray-600 mb-6">
                Expert guidance on sustainable practices, regulatory compliance, and
                environmental impact assessment, enhanced by AI insights.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <Leaf className="h-5 w-5 text-green-600 mr-2" />
                  <span>Sustainability audits</span>
                </li>
                <li className="flex items-center">
                  <Leaf className="h-5 w-5 text-green-600 mr-2" />
                  <span>Compliance guidance</span>
                </li>
                <li className="flex items-center">
                  <Leaf className="h-5 w-5 text-green-600 mr-2" />
                  <span>Impact assessment</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Link
                  to="/consultation"
                  className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/ai-consultant"
                  className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                  AI Consultation
                  <Bot className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Integration Highlight */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">AI-Enhanced Consulting</h2>
                <p className="text-gray-600 mb-6">
                  Experience the perfect blend of human expertise and artificial intelligence.
                  Our AI consultant is available 24/7 to provide instant guidance, while our
                  team of experts offers in-depth consultation for complex requirements.
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/ai-consultant"
                    className="bg-green-600 text-white hover:bg-green-500 px-6 py-3 rounded-md inline-flex items-center"
                  >
                    Try AI Consultant
                    <Bot className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/consultation"
                    className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-md inline-flex items-center"
                  >
                    Book Human Expert
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <Bot className="h-48 w-48 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Packaging?</h2>
          <p className="text-xl mb-8">
            Get started with our AI consultant instantly or schedule a consultation with our experts.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/ai-consultant"
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-md inline-flex items-center"
            >
              Chat with AI
              <Bot className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/consultation"
              className="border border-white hover:bg-green-600 px-8 py-3 rounded-md inline-flex items-center"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;