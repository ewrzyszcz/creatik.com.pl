'use client';

import React from 'react';

const technologies = [
  { name: 'DELL', style: 'font-light tracking-[0.3em] text-4xl' },
  { name: 'php', style: 'font-bold text-4xl border-[3px] border-current rounded-[100%] px-6 pb-2 pt-1 italic leading-none flex items-center' },
  { name: 'node.js', style: 'font-semibold text-4xl tracking-tight' },
  { name: 'WordPress', style: 'font-serif text-4xl' },
  { name: 'Divi', style: 'font-bold text-3xl tracking-widest uppercase' },
  { name: 'FORTINET', style: 'font-black text-3xl tracking-[0.2em] text-red-600 grayscale hover:grayscale-0' },
  { name: 'UniFi', style: 'font-bold text-4xl' },
];

export default function TechLogos() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider">
          Technologie i rozwiązania, z którymi pracujemy
        </p>
      </div>
      
      <div className="marquee-container relative flex w-full overflow-hidden">
        <div className="marquee-content flex min-w-full shrink-0 items-center justify-around gap-16 px-8">
          {technologies.map((tech, index) => (
            <div 
              key={`tech-1-${index}`} 
              className={`text-gray-400 hover:text-[#f55c00] transition-colors duration-300 flex items-center justify-center whitespace-nowrap ${tech.style}`}
            >
              {tech.name}
            </div>
          ))}
        </div>
        <div className="marquee-content flex min-w-full shrink-0 items-center justify-around gap-16 px-8" aria-hidden="true">
          {technologies.map((tech, index) => (
            <div 
              key={`tech-2-${index}`} 
              className={`text-gray-400 hover:text-[#f55c00] transition-colors duration-300 flex items-center justify-center whitespace-nowrap ${tech.style}`}
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
