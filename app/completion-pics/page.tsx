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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, we'll just show a success message
    // Later we can connect to a backend/database
    console.log('Form submitted:', { ...formData, image: selectedImage });
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
        <h1 className="text-4xl font-bold text-amber-900 mb-4">🏞️ Completion Pics</h1>
        <p className="text-lg text-amber-800 mb-8">
          Share your completed puzzle photos and celebrate your achievement! Show us where you completed it and tell your story.
        </p>

        {submitted && (
          <div className="bg-green-100 border-2 border-green-500 text-green-800 px-6 py-4 rounded-lg mb-6 text-center font-bold animate-pulse">
            ✅ Thank you! Your completion photo has been submitted!
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-amber-600">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">📸 Upload Your Completion Photo</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload */}
            <div>
              <label htmlFor="image" className="block text-lg font-bold text-amber-900 mb-2">
                Upload Photo *
              </label>
              <div className="border-4 border-dashed border-amber-300 rounded-lg p-8 text-center hover:border-amber-600 transition-colors">
                {selectedImage ? (
                  <div className="space-y-4">
                    <img 
                      src={selectedImage} 
                      alt="Preview" 
                      className="max-w-full max-h-96 mx-auto rounded-lg shadow-lg"
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedImage(null)}
                      className="text-red-600 hover:text-red-800 font-bold"
                    >
                      ❌ Remove Image
                    </button>
                  </div>
                ) : (
                  <div>
                    <svg className="mx-auto h-16 w-16 text-amber-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      onChange={handleImageChange}
                      required
                      className="hidden"
                    />
                    <label 
                      htmlFor="image"
                      className="cursor-pointer inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                    >
                      📷 Choose Image
                    </label>
                    <p className="text-sm text-amber-700 mt-4">
                      Upload a photo of your completed puzzle (JPG, PNG, or GIF)
                    </p>
                  </div>
                )}
              </div>
            </div>

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
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:border-amber-600 focus:outline-none text-lg"
                placeholder="Enter your name"
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-lg font-bold text-amber-900 mb-2">
                Where Did You Complete It? *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:border-amber-600 focus:outline-none text-lg"
                placeholder="City, State, Country"
              />
            </div>

            {/* Completion Date */}
            <div>
              <label htmlFor="completionDate" className="block text-lg font-bold text-amber-900 mb-2">
                Completion Date *
              </label>
              <input
                type="date"
                id="completionDate"
                name="completionDate"
                value={formData.completionDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:border-amber-600 focus:outline-none text-lg"
              />
            </div>

            {/* Caption */}
            <div>
              <label htmlFor="caption" className="block text-lg font-bold text-amber-900 mb-2">
                Photo Caption
              </label>
              <input
                type="text"
                id="caption"
                name="caption"
                value={formData.caption}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:border-amber-600 focus:outline-none text-lg"
                placeholder="A short caption for your photo (optional)"
              />
            </div>

            {/* Story */}
            <div>
              <label htmlFor="story" className="block text-lg font-bold text-amber-900 mb-2">
                Your Completion Story 🎉
              </label>
              <textarea
                id="story"
                name="story"
                value={formData.story}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:border-amber-600 focus:outline-none text-lg"
                placeholder="Tell us about your puzzle journey... How long did it take? Any challenges? Missing pieces? Was it worth it?"
              />
              <p className="text-sm text-amber-700 mt-2 italic">
                Optional: Share your experience completing this puzzle!
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg shadow-xl font-bold text-xl transition-all duration-300 hover:scale-105"
            >
              ✨ Share My Completion Photo
            </button>
          </form>
        </div>

        {/* Gallery Section */}
        <div className="mt-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-xl p-8 border-4 border-amber-400">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">🖼️ Completion Gallery</h2>
          <p className="text-amber-700 italic mb-4">Submitted photos will appear here...</p>
          
          {/* Sample entry to show what it looks like */}
          <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-amber-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-amber-900">🎆 Example Completion</h3>
              <span className="text-sm text-amber-700">Dec 20, 2025</span>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4">
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
      </div>
    </main>
  );
}
