'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function FeaturedPuzzlePage() {
  const [showMemoryAnchors, setShowMemoryAnchors] = useState(false);
  const [showStories, setShowStories] = useState(false);

  return (
    <main 
      className="min-h-screen relative"
      style={{
        fontFamily: '"Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", Arial, sans-serif'
      }}
    >
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/Glacier.png"
          alt="Glacier National Park"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        
        {/* Section 1 - Teamwork Makes the Dream Work - MOVED TO TOP */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
            <h2 className="text-4xl font-bold text-amber-900 mb-6 flex items-center gap-3">
              <span className="text-5xl">🤝</span>
              Teamwork Makes the Dream Work
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Working a puzzle with a spouse, friend, or family member transforms it into a 
                bonding exercise. The shared focus creates screen-free conversation, triggers 
                memories, and deepens emotional intimacy.
              </p>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-600 p-6 my-8 italic text-xl text-amber-900 rounded-lg shadow-md">
                "When the last piece clicks into place, something clicks between you both—unless the last piece has gone missing. Then all Hell breaks out!"
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - Memory Anchors - Clickable/Collapsible */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
            <button 
              onClick={() => setShowMemoryAnchors(!showMemoryAnchors)}
              className="w-full text-left flex items-center justify-between group hover:opacity-80 transition-opacity"
            >
              <h2 className="text-4xl font-bold text-amber-900 flex items-center gap-3">
                <span className="text-5xl">🏔️</span>
                Memory Anchors
              </h2>
              <span className="text-3xl text-amber-600 group-hover:scale-110 transition-transform">
                {showMemoryAnchors ? '▲' : '▼'}
              </span>
            </button>
            
            {showMemoryAnchors && (
              <div className="prose prose-lg text-gray-700 mt-6 animate-fadeIn">
                <p>
                  National Park puzzles are more than décor—they're memory anchors. Whether you 
                  hiked the rim at Grand Canyon, watched elk graze at Rocky Mountain, or dream of 
                  one day standing before Old Faithful, completing a park-themed puzzle lets you 
                  relive the wonder or build anticipation for adventures ahead.
                </p>
              </div>
            )}
            
            {!showMemoryAnchors && (
              <p className="text-amber-600 mt-2 text-sm italic">Click to discover why puzzles become keepsakes...</p>
            )}
          </div>
        </section>

        {/* Section 3 - Every Puzzle Has a Tale - Clickable with Hook */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
            <button 
              onClick={() => setShowStories(!showStories)}
              className="w-full text-left flex items-center justify-between group hover:opacity-80 transition-opacity"
            >
              <h2 className="text-4xl font-bold text-amber-900 flex items-center gap-3">
                <span className="text-5xl">📖</span>
                Every Puzzle Has a Tale
              </h2>
              <span className="text-3xl text-amber-600 group-hover:scale-110 transition-transform">
                {showStories ? '▲' : '▼'}
              </span>
            </button>
            
            {showStories && (
              <div className="prose prose-lg text-gray-700 mt-6 space-y-4 animate-fadeIn">
                <p>
                  When you finish your puzzle and upload a photo, you'll be invited to share the 
                  story behind it. Maybe it's the memory of standing at that overlook with someone 
                  you love. Maybe it's the plan—a promise to yourself that you'll finally make the 
                  trip next summer. Or maybe it's the journey of the puzzle itself: the rainy 
                  Sunday afternoon, the cup of coffee, the piece the cat batted under the couch 
                  that you didn't find until Tuesday.
                </p>
                
                <div className="bg-amber-50 p-6 rounded-lg shadow-md border-l-4 border-amber-600">
                  <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center gap-2">
                    <span>✍️</span> Story Prompts:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>"Tell us about the park—have you been, or is it on your bucket list?"</li>
                    <li>"Who worked on this puzzle with you?"</li>
                    <li>"Any funny moments along the way?"</li>
                  </ul>
                </div>
                
                <p className="mt-6">
                  These stories become part of the <strong>Traveling Gifts community</strong>—a 
                  living gallery of adventures taken, adventures planned, and the small human 
                  moments in between.
                </p>
              </div>
            )}
            
            {!showStories && (
              <p className="text-amber-600 mt-2 text-sm italic">
                👉 Click to see how your puzzle story becomes part of something bigger...
              </p>
            )}
          </div>
        </section>

        {/* Section 4 - Yoga for the Mind - MOVED TO BOTTOM */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
            <h2 className="text-4xl font-bold text-amber-900 mb-6 flex items-center gap-3">
              <span className="text-5xl">🧘‍♀️</span>
              Yoga for the Mind
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                Jigsaw puzzles are a meditation hack for your brain. Every time you click a piece 
                into place, your brain releases dopamine—the neurotransmitter that regulates mood, 
                memory, and concentration.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Link 
              href="#" 
              className="inline-block px-8 py-4 bg-amber-600 text-white text-xl font-bold rounded-lg hover:bg-amber-700 transition-colors shadow-2xl hover:scale-105 transform"
            >
              Explore Our Puzzle Collection
            </Link>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link 
                href="#" 
                className="px-6 py-3 bg-white/95 backdrop-blur-sm text-amber-700 font-semibold rounded-lg hover:bg-white transition-colors shadow-xl border-2 border-amber-200 hover:border-amber-400"
              >
                See This Month's Featured Puzzle
              </Link>
              
              <Link 
                href="/completion-pics" 
                className="px-6 py-3 bg-white/95 backdrop-blur-sm text-amber-700 font-semibold rounded-lg hover:bg-white transition-colors shadow-xl border-2 border-amber-200 hover:border-amber-400"
              >
                See How Others Share Their Story
              </Link>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-8 px-4 text-center pb-16">
          <Link 
            href="/" 
            className="inline-block px-6 py-3 bg-amber-900/90 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-amber-800 transition-colors shadow-xl"
          >
            ← Back to Home
          </Link>
        </section>

      </div>
    </main>
  );
}
