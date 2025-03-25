import React from 'react';
import { Award, Users, Globe, Target, Flag, Heart, Shield } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
      description: 'Pioneering sustainable packaging solutions with over 15 years of industry experience.',
    },
    {
      name: 'David Rodriguez',
      role: 'Head of Innovation',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      description: 'Leading our R&D initiatives in biodegradable materials and eco-friendly designs.',
    },
    {
      name: 'Emily Thompson',
      role: 'Sustainability Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
      description: 'Ensuring our products meet the highest environmental standards.',
    },
    {
      name: 'Michael Chang',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      description: 'Optimizing our supply chain for maximum efficiency and minimal environmental impact.',
    },
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: 'Sustainability First',
      description: 'Every decision we make prioritizes environmental responsibility.',
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: 'Quality Assurance',
      description: 'Rigorous testing ensures our products meet the highest standards.',
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Customer Focus',
      description: 'We work closely with clients to understand and meet their unique needs.',
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: 'Global Impact',
      description: 'Contributing to environmental preservation on a global scale.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision & Mission */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-16">
            About EcoPack
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex justify-center mb-4">
                <Target className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To revolutionize the packaging industry by making sustainable solutions the standard,
                not the exception. We envision a world where every package contributes to environmental preservation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex justify-center mb-4">
                <Flag className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide innovative, eco-friendly packaging solutions that help businesses reduce
                their environmental impact while maintaining product integrity and enhancing brand value.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Leadership Team</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-gray-600">Biodegradable Products</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-600">Global Partners</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
              <p className="text-gray-600">Products Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;