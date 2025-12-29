import Link from 'next/link';

export default function PuzzlePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-block p-8 bg-white rounded-2xl shadow-xl">
              <div className="text-6xl">🧩</div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">
            The Puzzle
          </h1>
          <p className="text-2xl md:text-3xl text-amber-700 italic font-light">
            Unplug. Connect. Remember.
          </p>
        </div>
      </section>

      {/* Section 1 - Why Puzzles? */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">Yoga for the Mind</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              Jigsaw puzzles aren't just a pastime—they're a meditation hack for your brain. 
              Research shows puzzling activates both hemispheres simultaneously, shifting your 
              mind from the busy "Beta" state into the restful "Alpha" state normally achieved 
              only through meditation. Every time you click a piece into place, your brain 
              releases dopamine—the neurotransmitter that regulates mood, memory, and concentration.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Key Benefits:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <div>
                    <strong>Stress relief</strong> – Lowers blood pressure and heart rate, 
                    similar to meditation
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <div>
                    <strong>Sharper memory</strong> – Reinforces neural connections and 
                    improves short-term recall
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <div>
                    <strong>Delayed cognitive decline</strong> – Studies suggest regular 
                    puzzling may delay dementia symptoms by up to 2.5 years
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <div>
                    <strong>Focus reset</strong> – A screen-free way to quiet the mental 
                    noise of daily life
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Better Together */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">Teamwork Makes the Dream Work</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              Working a puzzle with a spouse, friend, or family member transforms it into a 
              bonding exercise. Couples who puzzle together practice low-stakes teamwork, 
              divide-and-conquer strategies, and celebrate small wins—skills that translate 
              directly into everyday relationship dynamics. The shared focus creates 
              screen-free conversation, triggers memories, and deepens emotional intimacy.
            </p>
            
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8 italic text-xl text-amber-900">
              "The last piece clicks into place—and so does something between you."
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Memory Anchors */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">Memory Anchors</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              National Park puzzles are more than décor—they're memory anchors. Whether you 
              hiked the rim at Grand Canyon, watched elk graze at Rocky Mountain, or dream of 
              one day standing before Old Faithful, completing a park-themed puzzle lets you 
              relive the wonder or build anticipation for adventures ahead. It's the kind of 
              keepsake that sparks stories every time someone sees it on your shelf.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - Share Your Story */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">Every Puzzle Has a Tale</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              When you finish your puzzle and upload a photo, you'll be invited to share the 
              story behind it. Maybe it's the memory of standing at that overlook with someone 
              you love. Maybe it's the plan—a promise to yourself that you'll finally make the 
              trip next summer. Or maybe it's the journey of the puzzle itself: the rainy 
              Sunday afternoon, the cup of coffee, the piece the cat batted under the couch 
              that you didn't find until Tuesday.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Story Prompts:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>"Tell us about the park—have you been, or is it on your bucket list?"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>"Who worked on this puzzle with you?"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>"Any funny moments along the way?"</span>
                </li>
              </ul>
            </div>
            
            <p className="mt-6">
              These stories become part of the <strong>Traveling Gifts community</strong>—a 
              living gallery of adventures taken, adventures planned, and the small human 
              moments in between.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <Link 
            href="#" 
            className="inline-block px-8 py-4 bg-amber-600 text-white text-xl font-semibold rounded-lg hover:bg-amber-700 transition-colors shadow-lg"
          >
            Explore Our Puzzle Collection
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link 
              href="#" 
              className="px-6 py-3 bg-white text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-colors shadow-md border-2 border-amber-200"
            >
              See This Month's Featured Puzzle
            </Link>
            
            <Link 
              href="/completion-pics" 
              className="px-6 py-3 bg-white text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-colors shadow-md border-2 border-amber-200"
            >
              See How Others Share Their Story
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 px-4 text-center">
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-amber-900 text-white font-semibold rounded-lg hover:bg-amber-800 transition-colors"
        >
          ← Back to Home
        </Link>
      </section>
    </main>
  );
}