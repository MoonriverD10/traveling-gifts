'use client';
import { useState } from 'react';

export default function CompletionPicsPage() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    completionDate: '',
    caption: '',
    story: ''
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedImagePreview, setSelectedImagePreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Store the actual File object for upload
      setSelectedImage(file);
      
      // Create preview URL for display
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // Create FormData for multipart/form-data upload
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('location', formData.location);
      submitData.append('completionDate', formData.completionDate);
      submitData.append('caption', formData.caption);
      submitData.append('story', formData.story);
      
      if (selectedImage) {
        submitData.append('image', selectedImage);
      }

      // POST to API route
      const response = await fetch('/api/completion-pics', {
        method: 'POST',
        body: submitData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit completion photo');
      }

      const result = await response.json();
      console.log('Submission successful:', result);
      
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          location: '',
          completionDate: '',
          caption: '',
          story: ''
        });
        setSelectedImage(null);
        setSelectedImagePreview(null);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
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
        <h1 className="text-4xl font-bold text-amber-900 mb-4">🏞️ Completion Pics</h1>
        <p className="text-lg text-amber-800 mb-8">
          Share your completed puzzle photos and celebrate your achievement! Show us where you completed it and tell your story.
        </p>

        {/* Success Message */}
        {submitted && (
          <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800 text-lg">
            ✓ Success! Your completion photo has been shared. Thank you for contributing!
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg text-red-800 text-lg">
            ✗ Error: {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-amber-200">
          {/* Your Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-xl font-bold text-amber-900 mb-2">
              📝 Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 border-2 border-amber-300 rounded-lg text-lg focus:outline-none focus:border-amber-500 transition-colors"
              placeholder="Who completed this puzzle?"
              disabled={isSubmitting}
            />
          </div>

          {/* Location */}
          <div className="mb-6">
            <label htmlFor="location" className="block text-xl font-bold text-amber-900 mb-2">
              📍 Where did you complete it?
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-4 border-2 border-amber-300 rounded-lg text-lg focus:outline-none focus:border-amber-500 transition-colors"
              placeholder="City, State or specific location"
              disabled={isSubmitting}
            />
          </div>

          {/* Completion Date */}
          <div className="mb-6">
            <label htmlFor="completionDate" className="block text-xl font-bold text-amber-900 mb-2">
              📅 Completion Date
            </label>
            <input
              type="date"
              id="completionDate"
              name="completionDate"
              value={formData.completionDate}
              onChange={handleChange}
              required
              className="w-full p-4 border-2 border-amber-300 rounded-lg text-lg focus:outline-none focus:border-amber-500 transition-colors"
              disabled={isSubmitting}
            />
          </div>

          {/* Upload Photo */}
          <div className="mb-6">
            <label htmlFor="photo" className="block text-xl font-bold text-amber-900 mb-2">
              📸 Upload Your Completion Photo
            </label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="w-full p-4 border-2 border-amber-300 rounded-lg text-lg focus:outline-none focus:border-amber-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-100 file:text-amber-700 hover:file:bg-amber-200"
              disabled={isSubmitting}
            />
            {selectedImagePreview && (
              <div className="mt-4">
                <img
                  src={selectedImagePreview}
                  alt="Preview"
                  className="max-w-full h-auto rounded-lg shadow-lg max-h-96 object-contain"
                />
              </div>
            )}
          </div>

          {/* Caption */}
          <div className="mb-6">
            <label htmlFor="caption" className="block text-xl font-bold text-amber-900 mb-2">
              💬 Caption (Optional)
            </label>
            <input
              type="text"
              id="caption"
              name="caption"
              value={formData.caption}
              onChange={handleChange}
              className="w-full p-4 border-2 border-amber-300 rounded-lg text-lg focus:outline-none focus:border-amber-500 transition-colors"
              placeholder="Short description of your photo"
              disabled={isSubmitting}
            />
          </div>

          {/* Story */}
          <div className="mb-8">
            <label htmlFor="story" className="block text-xl font-bold text-amber-900 mb-2">
              📖 Your Completion Story (Optional)
            </label>
            <textarea
              id="story"
              name="story"
              value={formData.story}
              onChange={handleChange}
              rows={5}
              className="w-full p-4 border-2 border-amber-300 rounded-lg text-lg focus:outline-none focus:border-amber-500 transition-colors"
              placeholder="Tell us about your puzzle journey! How long did it take? Any challenges?Assing pieces? Was it worth it?"
              disabled={isSubmitting}
            />
            <p className="text-sm text-amber-700 mt-2 italic">
              Optional: Share your experience completing this puzzle!
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg shadow-xl font-bold text-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '⏳ Uploading...' : '✨ Share My Completion Photo'}
          </button>
        </form>
      </div>

      {/* Gallery Section */}
      <div className="mt-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-xl p-8 border-4 border-amber-400">
        <h2 className="text-3xl font-bold text-amber-900 mb-6">🖼️ Completion Gallery</h2>
        <p className="text-amber-700 italic mb-4">Submitted photos will appear here...</p>
        
        {/* Sample entry to show what it looks like */}
        <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-amber-300">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-amber-900">📍 Example Completion</h3>
            <span className="text-sm text-amber-700">Dec 20, 2025</span>
          </div>
          <div className="bg-gray-200 rounded h-64 flex items-center justify-center mb-4">
            <p className="text-gray-500 text-lg">Your photo will appear here!</p>
          </div>
          <p className="text-lg text-gray-800 mb-2">
            <strong>Completed by:</strong> Sample User
          </p>
          <p className="text-lg text-gray-800 mb-2">
            <strong>Location:</strong> Seattle, Washington, USA
          </p>
          <p className="text-gray-700 italic">
            "This is where your completion story will appear! Share the joy of finishing the puzzle."
          </p>
        </div>
      </div>
    </main>
  );
}
