import React from 'react';
import { ArrowRight, Award, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About EcoPack</h1>
          <p className="text-xl max-w-2xl">
            Leading the way in sustainable packaging solutions and environmental consulting
            since 2024.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1536939459926-301728717817?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Sustainable future"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Local Sustainability Leader</h3>
                  <p className="text-white">
                    To be the local's leading innovator in sustainable packaging solutions,
                    setting new standards for environmental responsibility in the industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Zero waste"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Zero Waste Future</h3>
                  <p className="text-white">
                    To create a world where sustainable packaging is the norm,
                    eliminating single-use plastics and promoting a circular economy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Innovation"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Innovative Solutions</h3>
                  <p className="text-white">
                    To develop and deliver innovative, eco-friendly packaging solutions
                    that meet our clients' needs while preserving our planet's resources.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Education"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Industry Education</h3>
                  <p className="text-white">
                    To educate and empower businesses in adopting sustainable practices,
                    driving industry-wide transformation towards environmental responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We prioritize environmental responsibility in everything we do,
                from product design to delivery.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously research and develop new sustainable solutions
                to meet evolving market needs.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Partnership</h3>
              <p className="text-gray-600">
                We work closely with our clients to understand their needs and
                deliver tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                name: 'Mrs.Hsu Latt',
                role: 'CEO',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Mr.Pyae Phyo Kyaw',
                role: 'Founder',
                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Mr.Thu Rein Lin',
                role: 'Head of Innovation',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Mr.Zawe Mann',
                role: 'Sustainability Director',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Mr.Htut Paing',
                role: 'Head of HR',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="text-xl text-gray-600 mb-8">
            Partner with us to create a more sustainable future.
          </p>
          <Link
            to="/contact"
            className="bg-green-600 text-white hover:bg-green-500 px-8 py-3 rounded-md inline-flex items-center"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;