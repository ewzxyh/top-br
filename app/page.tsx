"use client";

import Image from "next/image";
import { SiWhatsapp } from "react-icons/si";
import RetroGrid from "@/components/ui/retro-grid";

export default function Home() {
  const handleWhatsAppClick = () => {
    window.open("https://chat.whatsapp.com/LSbzV5synMH3Wmum0yTNle", "_blank", "noopener,noreferrer");
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleWhatsAppClick();
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-3 sm:p-6 lg:p-8 flex flex-col items-center justify-center overflow-hidden">
      <RetroGrid 
        className="z-0" 
        angle={55}
        cellSize={45}
        opacity={0.3}
        lightLineColor="#94a3b8"
        darkLineColor="#475569"
      />
      
      {/* Floating Banner Section */}
      <div className="relative z-10 w-full max-w-5xl aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
        <Image
          src="/hog-rider.jpg"
          alt="Hog Rider from Clash of Clans"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-3 sm:p-4 md:p-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-1 sm:mb-2 text-center drop-shadow-lg">
            TOP BR
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center max-w-2xl drop-shadow-lg mb-4 sm:mb-6">
            Clã brasileiro de Clash of Clans
          </p>
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            onKeyDown={handleKeyDown}
            className="mt-4 sm:mt-6 md:mt-8 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full 
              px-4 sm:px-6 md:px-8 
              py-2 sm:py-3 md:py-4 
              shadow-lg transition-all hover:scale-105 
              focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 
              flex items-center gap-2 sm:gap-3 
              text-sm sm:text-base md:text-lg 
              font-medium"
            aria-label="Join our WhatsApp group"
            tabIndex={0}
          >
            <SiWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true" />
            Entrar no grupo
          </button>
          <p className="text-xs sm:text-sm text-center max-w-2xl drop-shadow-lg mt-2 sm:mt-3 px-2">
            Informe seu nickname no clã ao entrar no grupo
          </p>
        </div>
      </div>
    </div>
  );
}
