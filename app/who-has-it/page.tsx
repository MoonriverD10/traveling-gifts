export default function WhoHasItPage() {
  return (
    <main className="min-h-screen bg-amber-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-900 mb-4">Who Has It?</h1>
        <p className="text-lg text-amber-800">
          Track the current location of the traveling puzzle...
        </p>
        <a href="/" className="inline-block mt-6 px-6 py-3 bg-amber-900 text-amber-50 rounded-lg hover:bg-amber-800">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}