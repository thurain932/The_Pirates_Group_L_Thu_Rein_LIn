import React, { useState } from 'react';
import { Calendar, Clock, Video } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    type: 'video',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('Please sign in to book a consultation');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const { error: supabaseError } = await supabase
        .from('consultations')
        .insert([
          {
            ...formData,
            user_id: user.id
          }
        ]);

      if (supabaseError) throw supabaseError;

      setSuccess('Consultation booked successfully!');
      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        type: 'video',
        message: '',
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/home');
      }, 2000);

    } catch (err) {
      setError('Failed to book consultation. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a Consultation</h1>
          <p className="text-lg text-gray-600">
            Schedule a one-on-one consultation with our packaging experts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Why Choose Our Consultation?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Calendar className="h-6 w-6 text-green-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Flexible Scheduling</h3>
                  <p className="text-gray-600">Choose a time that works best for you</p>
                </div>
              </div>
              <div className="flex items-start">
                <Video className="h-6 w-6 text-green-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Video or Phone Call</h3>
                  <p className="text-gray-600">Connect in the way that suits you best</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-green-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">45-Minute Session</h3>
                  <p className="text-gray-600">In-depth discussion of your packaging needs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Book Your Session</h2>
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
                  Full Name
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
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Preferred Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Consultation Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                  <option value="video">Video Call</option>
                  <option value="phone">Phone Call</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors disabled:bg-green-400"
              >
                {loading ? 'Scheduling...' : 'Schedule Consultation'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;