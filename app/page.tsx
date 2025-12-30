'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    // Play vintage camera shutter sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log('Audio play failed:', e));
    }
    setShowModal(true);
  };

  return (
    <main className="relative min-h-screen w-full">
      {/* Vintage 35mm camera shutter sound */}
      <audio ref={audioRef}>
        <source src="https://www.soundjay.com/mechanical/sounds/camera-shutter-click-01.mp3" type="audio/mpeg" />
        <source src="https://assets.mixkit.co/active_storage/sfx/2627/2627-preview.mp3" type="audio/mpeg" />
      </audio>

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

      {/* Sacred Secret Message Button with Curved Arrows - Repositioned Higher */}
      <div className="fixed top-[30%] left-[17%] md:top-[32%] md:left-[19%] flex items-center gap-3 animate-bounce z-50">
        {/* Button */}
        <button 
          onClick={handleClick}
          className="bg-amber-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-amber-700 transition-colors cursor-pointer"
          style={{ fontFamily: '"Franklin Gothic Medium", "Franklin Gothic", Arial, sans-serif' }}
        >
          <div className="text-sm md:text-base font-bold whitespace-nowrap">
            A Sacred Secret Message
          </div>
          <div className="text-xs md:text-sm text-center">Click Here</div>
        </button>

        {/* Curved Arrow Container */}
        <div className="relative w-[100px] h-[80px]">
          {/* First curved arrow pointing down-left to camera */}
          <svg className="absolute top-0 left-0 animate-pulse" width="100" height="80" viewBox="0 0 100 80">
            <defs>
              <marker id="arrowhead1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#dc2626" />
              </marker>
            </defs>
            <path d="M 10 5 Q 30 20, 40 45" stroke="#dc2626" strokeWidth="3" fill="none" marker-end="url(#arrowhead1)" />
          </svg>
          
          {/* Second curved arrow pointing down to suitcase */}
          <svg className="absolute top-0 left-[30px] animate-pulse" width="100" height="80" viewBox="0 0 100 80" style={{ animationDelay: '0.2s' }}>
            <defs>
              <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#dc2626" />
              </marker>
            </defs>
            <path d="M 15 5 Q 25 25, 30 50" stroke="#dc2626" strokeWidth="3" fill="none" marker-end="url(#arrowhead2)" />
          </svg>
        </div>
      </div>

      {/* Invisible clickable areas over camera and suitcase */}
      <div 
        className="fixed bottom-[35%] left-[8%] w-[100px] h-[100px] md:w-[120px] md:h-[120px] cursor-pointer z-40"
        onClick={handleClick}
        title="Click to see The Big Picture"
      />
      <div 
        className="fixed bottom-[32%] left-[2%] w-[90px] h-[120px] md:w-[110px] md:h-[140px] cursor-pointer z-40"
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

            {/* Quote in Beautiful Script Font - Fixed line breaks */}
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
