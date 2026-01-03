'use client';
import { useState } from 'react';

export default function WhoHasItPage() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    city: '',
    state: '',
    country: '',
    dateReceived: '',
    story: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/who-has-it', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit');
      }

      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          location: '',
          city: '',
          state: '',
          country: '',
          dateReceived: '',
          story: ''
        });
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-amber-50 p-8">
      {/* Home Button - Top Left Corner */}
      <a href="/" className="fixed top-6 left-6 z-50 group">
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg shadow-xl font-bold text-base transition-all duration-300 hover:scale-105 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          Home
        </button>
      </a>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-900 mb-4">🌍 Who Has It?</h1>
        <p className="text-lg text-amber-800 mb-8">
          Log your location and share your story with the puzzle! Let others know where the journey has taken you.
        </p>

        {submitted && (
          <div className="bg-green-100 border-2 border-green-500 text-green-800 px-6 py-4 rounded-lg mb-6 text-center font-bold animate-pulse">
            ✅ Thank you! Your entry has been submitted!
          </div>
        )}

          {error && (
            <div className="bg-red-100 border-2 border-red-500 text-red-800 px-6 py-4 rounded-lg mb-6 text-center font-bold animate-pulse">
              ✗ {error}
            </div>
          )}

        <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-amber-600">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">📝 Log Your Puzzle Location</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-lg font-bold text-amber-900 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:border-amber-600 focus:outline-none text-lg placeholder-gray-600"
                placeholder="Enter your name"
              />
            </div>

            {/* Location Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-lg font-bold text-amber-900 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:border-amber-600 focus:outline-none text-lg placeholder-gray-600"
                  placeholder="City"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-lg font-bold text-amber-900 mb-2">
                  State/Province *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:border-amber-600 focus:outline-none text-lg placeholder-gray-600"
                  placeholder="State/Province"
                />
              </div>
            </div>

            <div>
              <label htmlFor="country" className="block text-lg font-bold text-amber-900 mb-2">
                Country *
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:border-amber-600 focus:outline-none text-lg placeholder-gray-600"
                placeholder="Country"
              />
            </div>

            {/* Date Received */}
            <div>
              <label htmlFor="dateReceived" className="block text-lg font-bold text-amber-900 mb-2">
                Date You Received the Puzzle *
              </label>
              <input
                type="date"
                id="dateReceived"
                name="dateReceived"
                value={formData.dateReceived}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:border-amber-600 focus:outline-none text-lg placeholder-gray-600"
              />
            </div>

            {/* Story */}
            <div>
              <label htmlFor="story" className="block text-lg font-bold text-amber-900 mb-2">
                Your Puzzle Story 📖
              </label>
              <textarea
                id="story"
                name="story"
                value={formData.story}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:border-amber-600 focus:outline-none text-lg placeholder-gray-600"
                placeholder="Share your experience with the puzzle... Where did you work on it? Any memorable moments? Did your cat steal any pieces?"
              />
              <p className="text-sm text-amber-700 mt-2 italic">
                Optional: Tell us about your puzzle journey! This will appear on the map and history.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg shadow-xl font-bold text-xl transition-all duration-300 hover:scale-105"
            >
              {isSubmitting ? '⏳ Submitting...' : '🗺️ Submit My Location'}
            </button>
          </form>
        </div>

        {/* Example Entries Section */}
        <div className="mt-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-xl p-8 border-4 border-amber-400">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">🗺️ Recent Puzzle Travelers</h2>
          <p className="text-amber-700 italic mb-4">Submitted entries will appear here...</p>
          
          {/* Sample entry to show what it looks like */}
          <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-amber-300">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-amber-900">📍 Example Entry</h3>
              <span className="text-sm text-amber-700">Dec 15, 2025</span>
            </div>
            <p className="text-lg text-gray-800 mb-2">
              <strong>Name:</strong> Sample User
            </p>
            <p className="text-lg text-gray-800 mb-2">
              <strong>Location:</strong> Portland, Oregon, USA
            </p>
            <p className="text-gray-700 italic">
              "This is where your story will appear! Share your puzzle adventure and be part of the journey."
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
