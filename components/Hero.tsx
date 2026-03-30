'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row bg-gray-900 text-white overflow-hidden">
      
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20 pt-32 lg:pt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl w-full"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-gray-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f55c00] animate-pulse"></span>
            Kompleksowa obsługa IT
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Twój niezawodny <br />
            <span className="text-[#f55c00]">Dział IT</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            Zapewniamy stabilność, bezpieczeństwo i rozwój infrastruktury informatycznej. Skup się na swoim biznesie, a technologię zostaw profesjonalistom.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#kontakt"
              className="inline-flex justify-center items-center gap-2 bg-[#f55c00] hover:bg-[#d94f00] text-white px-8 py-4 rounded font-semibold text-lg transition-all shadow-lg shadow-black/20"
            >
              Skontaktuj się
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#uslugi"
              className="inline-flex justify-center items-center gap-2 bg-transparent hover:bg-white/5 border border-gray-700 text-white px-8 py-4 rounded font-semibold text-lg transition-all"
            >
              Poznaj ofertę
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-screen overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <motion.img 
            src="/images/buffik-business-5475661.jpg"
            alt="Technologia" 
            className="w-full h-full object-cover"
            animate={{ 
              scale: [1, 1.15, 1],
              x: [0, -20, 0],
              y: [0, 10, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Gradient overlay to blend with left side on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
        </motion.div>
      </div>

    </section>
  );
}
