import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      {/* Full Background with Everything Baked In */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/final-background.png"
          alt="Traveling Gifts - See America First"
          fill
          className="object-cover object-center"
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
                <span className="text-amber-100 text-base md:text-xl font-bold tracking-wide text-center px-2"
                      style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.9)" }}>
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
                <span className="text-amber-100 text-base md:text-xl font-bold tracking-wide text-center px-2"
                      style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.9)" }}>
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
                <span className="text-amber-100 text-base md:text-xl font-bold tracking-wide text-center px-2"
                      style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.9)" }}>
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
                <span className="text-amber-100 text-base md:text-xl font-bold tracking-wide text-center px-2"
                      style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.9)" }}>
                  MAP & HISTORY
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}