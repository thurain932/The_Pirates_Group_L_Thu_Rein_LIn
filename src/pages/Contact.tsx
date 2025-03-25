import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('Please sign in to send a message');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const { error: supabaseError } = await supabase
        .from('contact_messages')
        .insert([
          {
            ...formData,
            user_id: user.id
          }
        ]);

      if (supabaseError) throw supabaseError;

      setSuccess('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/home');
      }, 2000);

    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl">
            Get in touch with our team of sustainable packaging experts. We're here to help you
            find the perfect eco-friendly solution for your business.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Phone className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+95 9123456789</p>
              <p className="text-gray-600">Mon-Fri: 9:00 AM - 5:00 PM</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Mail className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@ecopack.com</p>
              <p className="text-gray-600">support@ecopack.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <MapPin className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-600">123 Green Street</p>
              <p className="text-gray-600">Yangon, Myanmar</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              {error && (
                <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  {error}
                </div>
              )}
              {success && (
                <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  {success}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-500 flex items-center justify-center gap-2 disabled:bg-green-400"
                >
                  <Send className="h-5 w-5" />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Quick Links */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Quick Support</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                    <div>
                      <h3 className="font-semibold">Live Chat</h3>
                      <p className="text-gray-600">Available Mon-Fri, 9 AM - 5 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-green-600" />
                    <div>
                      <h3 className="font-semibold">Email Support</h3>
                      <p className="text-gray-600">24/7 response within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Monday - Friday</h3>
                    <p className="text-gray-600">9:00 AM - 5:00 PM</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Saturday</h3>
                    <p className="text-gray-600">9:00 AM - 1:00 PM</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Sunday</h3>
                    <p className="text-gray-600">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;