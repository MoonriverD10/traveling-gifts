export default function MapHistoryPage() {
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
        <h1 className="text-4xl font-bold text-amber-900 mb-4">Map & History</h1>
        <p className="text-lg text-amber-800">
          Interactive map showing the puzzle's journey...
        </p>
        <a href="/" className="inline-block mt-6 px-6 py-3 bg-amber-900 text-amber-50 rounded-lg hover:bg-amber-800">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
