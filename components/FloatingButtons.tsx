'use client';

import { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a 
        href="tel:+48605827390" 
        className="w-14 h-14 bg-[#f55c00] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#d94f00] hover:scale-110 transition-all duration-300"
        title="Zadzwoń do nas"
      >
        <Phone size={24} />
      </a>
      
      <button
        onClick={scrollToTop}
        className={`w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 hover:scale-110 transition-all duration-300 ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        title="Wróć na górę"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}
