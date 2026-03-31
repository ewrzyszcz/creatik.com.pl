'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Database, Terminal, Smartphone, ArrowRight } from 'lucide-react';

export default function Hero() {
  // Wartości śledzące pozycję myszki
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Płynne (sprężyste) przejścia dla ruchu myszki
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transformacje dla poszczególnych elementów (każdy reaguje z inną siłą/kierunkiem)
  // Baza (Platforma)
  const baseX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const baseY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  // Serwer (Database)
  const dbX = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
  const dbY = useTransform(smoothY, [-0.5, 0.5], [-30, 30]);

  // Kod (Terminal) - porusza się w przeciwnym kierunku
  const termX = useTransform(smoothX, [-0.5, 0.5], [40, -40]);
  const termY = useTransform(smoothY, [-0.5, 0.5], [40, -40]);

  // Telefon (Smartphone)
  const phoneX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const phoneY = useTransform(smoothY, [-0.5, 0.5], [20, -20]);

  // Obsługa ruchu myszki na całej sekcji
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Obliczamy pozycję od -0.5 do 0.5 względem środka sekcji
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Resetowanie pozycji po opuszczeniu sekcji
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen bg-[#0a0f1a] overflow-hidden flex items-center pt-20"
    >
      {/* Glowing Orbs from Option 1 */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#f55c00] rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[128px] opacity-40 pointer-events-none" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center pointer-events-none">
        {/* Left Column - Text (Original Texts) */}
        <div className="pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#f55c00] animate-pulse"></span>
            Kompleksowa obsługa IT
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Twój niezawodny <br/>
            <span className="text-[#f55c01]">Dział IT</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed"
          >
            Zapewniamy stabilność, bezpieczeństwo i rozwój infrastruktury informatycznej. Skup się na swoim biznesie, a technologię zostaw profesjonalistom.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="/#kontakt"
              className="inline-flex justify-center items-center gap-2 bg-[#f55c00] hover:bg-[#d94f00] text-white px-8 py-4 rounded font-semibold text-lg transition-all shadow-lg shadow-black/20"
            >
              Skontaktuj się <ArrowRight size={20} />
            </Link>
            <Link 
              href="/#uslugi"
              className="inline-flex justify-center items-center gap-2 bg-transparent hover:bg-white/5 border border-gray-700 text-white px-8 py-4 rounded font-semibold text-lg transition-all"
            >
              Poznaj ofertę
            </Link>
          </motion.div>
        </div>

        {/* Right Column - Isometric CSS Art from Option 2 */}
        <div className="relative h-[500px] hidden lg:flex items-center justify-center perspective-[1000px] pointer-events-auto">
          <motion.div 
            initial={{ rotateX: 60, rotateZ: -45, y: 50, opacity: 0 }}
            animate={{ rotateX: 60, rotateZ: -45, y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-64 h-64"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Base Platform */}
            <motion.div 
              style={{ x: baseX, y: baseY }}
              className="absolute inset-0 bg-gray-800/80 backdrop-blur-sm border-2 border-gray-700 rounded-xl shadow-[20px_20px_0px_rgba(0,0,0,0.5)]"
            ></motion.div>
            
            {/* Server Block */}
            <motion.div 
              style={{ x: dbX, y: dbY }}
              animate={{ z: [20, 40, 20] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 left-4 w-24 h-32 bg-blue-600 border-2 border-blue-400/50 rounded-lg flex items-center justify-center shadow-2xl"
            >
              <Database className="text-white" size={32} />
            </motion.div>

            {/* Code Block */}
            <motion.div 
              style={{ x: termX, y: termY }}
              animate={{ z: [40, 60, 40] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-4 right-4 w-24 h-24 bg-[#f55c00] border-2 border-orange-400/50 rounded-lg flex items-center justify-center shadow-2xl"
            >
              <Terminal className="text-white" size={32} />
            </motion.div>

            {/* Mobile Block */}
            <motion.div 
              style={{ x: phoneX, y: phoneY }}
              animate={{ z: [10, 30, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-4 right-4 w-20 h-28 bg-gray-900 border-2 border-gray-700 rounded-lg flex items-center justify-center shadow-2xl"
            >
              <Smartphone className="text-white" size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
