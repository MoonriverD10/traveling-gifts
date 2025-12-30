'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    // Play camera shutter sound
    if (audioRef.current) {
      audioRef.current.play();
    }
    setShowModal(true);
  };

  return (
    <main className="relative min-h-screen w-full">
      {/* Camera shutter sound */}
      <audio ref={audioRef} src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjGH0fPTgjMGHm7A7+OZUBAQW7Hj8bFdGQc8kNP0xn8pBSh+zPLaizsIGGS67OihUhELTqXh8bllHAU2jdXzyn0rBSd/ze/aizsIGGS67OihUhELTqXh8bllHAU2jdXzyn0rBSd/ze/aizsIGGS67OihUhELTqXh8bllHAU2jdXzyn0rBSd/ze/aizsIGGS67OihUhELTqXh8bllHAU2jdXzyn0rBSd/ze/aizsIGGS67OihUhELTqXh8bllHAU2jdXzyn0rBSd/ze/aizsIGGS67OihUhELTqXh8bllHAU2jdXzyn0rBSd/" preload="auto" />

      {/* Full Background with Everything Baked In */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/final-background.png"
          alt="Traveling Gifts - See America First"
          fill
          className="object-contain object-center"
          priority
          quality={100}
        />
      </div>

      {/* Content Overlay - Just the 4 Action Buttons */}
      <div className="flex flex-col items-center justify-end min-h-screen pb-32 px-4">
        
        {/* Action Buttons - Positioned in Parchment Area */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl w-full">
          <Link href="/puzzle" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <Image
                src="/images/button-panel.png"
                alt=""
                width={300}
                height={150}
                className="w-full h-24 md:h-28 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-amber-950/40 group-hover:bg-amber-950/50 transition-colors">
                <span className="text-amber-100 text-base md:text-xl font-bold tracking-wide text-center px-2" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                  THE PUZZLE
                </span>
              </div>
            </div>
          </Link>

          <Link href="/who-has-it" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <Image
                src="/images/button-panel.png"
                alt=""
                width={300}
                height={150}
                className="w-full h-24 md:h-28 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-amber-950/40 group-hover:bg-amber-950/50 transition-colors">
                <span className="text-amber-100 text-base md:text-xl font-bold tracking-wide text-center px-2" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                  WHO HAS IT?
                </span>
              </div>
            </div>
          </Link>

          <Link href="/completion-pics" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <Image
                src="/images/button-panel.png"
                alt=""
                width={300}
                height={150}
                className="w-full h-24 md:h-28 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-amber-950/40 group-hover:bg-amber-950/50 transition-colors">
                <span className="text-amber-100 text-base md:text-xl font-bold tracking-wide text-center px-2" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                  COMPLETION PICS
                </span>
              </div>
            </div>
          </Link>

          <Link href="/map-history" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <Image
                src="/images/button-panel.png"
                alt=""
                width={300}
                height={150}
                className="w-full h-24 md:h-28 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-amber-950/40 group-hover:bg-amber-950/50 transition-colors">
                <span className="text-amber-100 text-base md:text-xl font-bold tracking-wide text-center px-2" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                  MAP & HISTORY
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Horizontal Arrow Pointing LEFT to Camera with New Text */}
      <div className="fixed bottom-[48%] left-[20%] md:left-[22%] flex items-center gap-3 animate-bounce z-50 cursor-pointer" onClick={handleClick}>
        {/* Text Label in Franklin Gothic */}
        <div className="bg-amber-600 text-white px-4 py-2 rounded-lg shadow-lg" style={{ fontFamily: '"Franklin Gothic Medium", "Franklin Gothic", Arial, sans-serif' }}>
          <div className="text-sm md:text-base font-bold whitespace-nowrap">
            A Sacred Secret Message
          </div>
          <div className="text-xs md:text-sm text-center">Click Here</div>
        </div>
        
        {/* Left-pointing arrow */}
        <svg width="50" height="50" viewBox="0 0 60 60" className="animate-pulse">
          <path d="M50 30 L30 10 L30 20 L10 20 L10 40 L30 40 L30 50 Z" fill="#f59e0b" stroke="#92400e" strokeWidth="2" />
        </svg>
      </div>

      {/* Invisible clickable area over the camera */}
      <div 
        className="fixed bottom-[35%] left-[8%] w-[100px] h-[100px] md:w-[120px] md:h-[120px] cursor-pointer z-40"
        onClick={handleClick}
        title="Click to see The Big Picture"
      />

      {/* Modal with Quote */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <div 
            className="relative bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl shadow-2xl max-w-3xl w-full p-8 md:p-12 border-4 border-amber-600"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-amber-900 hover:text-amber-700 text-3xl font-bold"
            >
              ×
            </button>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 text-center mb-8">
              The Big Picture
            </h2>

            {/* Quote in Beautiful Script Font */}
            <div className="text-center space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-800" style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}>
                “It is our hope that this puzzle should travel far beyond our hands, passing from home to home and heart to heart, carrying with it a small but steady joy.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-800" style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}>
                May each person who receives it add a piece and then give it onward, until at last the pieces are nearly gone.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-800" style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}>
                And when the final traveler opens the box to find only one piece remaining, perhaps they will discover what we all were meant to learn—that the truest joy was never in completing the puzzle, but in giving it away.”
              </p>
              <p className="text-lg md:text-xl font-semibold text-amber-900 mt-8">
                - Nick & Sharon Pavlovits
              </p>
            </div>

            {/* Decorative border */}
            <div className="absolute inset-0 rounded-2xl border-8 border-amber-300/30 pointer-events-none" />
          </div>
        </div>
      )}

      {/* Google Fonts for Dancing Script */}
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap" rel="stylesheet" />
    </main>
  );
}
