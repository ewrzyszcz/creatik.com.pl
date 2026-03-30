'use client';

import React from 'react';

export default function StronyWwwTechLogos() {
  return (
    <div className="py-16 bg-white border-y border-gray-100 mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">Technologie, z których korzystamy</h2>
          <p className="text-gray-500 mt-2">Pracujemy na sprawdzonych i najpopularniejszych rozwiązaniach</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          
          {/* WordPress */}
          <div className="flex items-center justify-center w-48 h-16 hover:scale-105 transition-transform duration-300">
            <svg viewBox="0 0 1000 1000" className="w-full h-full" fill="currentColor">
              <path d="M500,10C229.4,10,10,229.4,10,500s219.4,490,490,490s490-219.4,490-490S770.6,10,500,10z M500,950.5 c-248.4,0-450.5-202.1-450.5-450.5S251.6,49.5,500,49.5S950.5,251.6,950.5,500S748.4,950.5,500,950.5z"/>
              <path d="M722.5,301.2c-29.3,0-50.6,21.3-50.6,50.6c0,29.3,21.3,50.6,50.6,50.6c29.3,0,50.6-21.3,50.6-50.6 C773.1,322.5,751.8,301.2,722.5,301.2z M722.5,382.4c-16.8,0-30.5-13.7-30.5-30.5c0-16.8,13.7-30.5,30.5-30.5 c16.8,0,30.5,13.7,30.5,30.5C753.1,368.7,739.4,382.4,722.5,382.4z"/>
              <path d="M260.6,301.2c-29.3,0-50.6,21.3-50.6,50.6c0,29.3,21.3,50.6,50.6,50.6c29.3,0,50.6-21.3,50.6-50.6 C311.2,322.5,289.9,301.2,260.6,301.2z M260.6,382.4c-16.8,0-30.5-13.7-30.5-30.5c0-16.8,13.7-30.5,30.5-30.5 c16.8,0,30.5,13.7,30.5,30.5C291.1,368.7,277.4,382.4,260.6,382.4z"/>
              <path d="M491.5,301.2c-29.3,0-50.6,21.3-50.6,50.6c0,29.3,21.3,50.6,50.6,50.6c29.3,0,50.6-21.3,50.6-50.6 C542.1,322.5,520.8,301.2,491.5,301.2z M491.5,382.4c-16.8,0-30.5-13.7-30.5-30.5c0-16.8,13.7-30.5,30.5-30.5 c16.8,0,30.5,13.7,30.5,30.5C522.1,368.7,508.4,382.4,491.5,382.4z"/>
              <path d="M500,123.8C292.5,123.8,123.8,292.5,123.8,500S292.5,876.2,500,876.2S876.2,707.5,876.2,500S707.5,123.8,500,123.8z M157.6,500c0-155.1,103.4-286.2,245.8-328.7L254.5,584L162,316.5C159.1,374.8,157.6,436.5,157.6,500z M500,842.4 c-107.5,0-203.4-49.8-266.3-127.8l136.9-395.7l126.1,363.8L500,842.4z M528.9,839.8l121.7-351.2l132.8,384.1 C716.5,813.1,627.5,839.8,528.9,839.8z M842.4,500c0-68.5-20.2-132.3-55.1-186.2l-149.6,432.4C767.1,684.7,842.4,600.5,842.4,500z"/>
            </svg>
          </div>

          {/* WooCommerce */}
          <div className="flex items-center justify-center h-16 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-5xl tracking-tighter">WOO<span className="font-normal">COMMERCE</span></span>
          </div>

          {/* PHP */}
          <div className="flex items-center justify-center h-16 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-6xl border-[4px] border-current rounded-[100%] px-8 pb-3 pt-1 italic leading-none flex items-center">php</span>
          </div>

          {/* Joomla */}
          <div className="flex items-center justify-center h-16 hover:scale-105 transition-transform duration-300 gap-3">
             <svg viewBox="0 0 100 100" className="w-16 h-16" fill="currentColor">
               <path d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M72.8,72.8c-2.4,2.4-5.6,3.6-8.8,3.6 s-6.4-1.2-8.8-3.6L50,67.6l-5.2,5.2c-4.8,4.8-12.8,4.8-17.6,0c-4.8-4.8-4.8-12.8,0-17.6L32.4,50l-5.2-5.2c-4.8-4.8-4.8-12.8,0-17.6 c4.8-4.8,12.8-4.8,17.6,0L50,32.4l5.2-5.2c4.8-4.8,12.8-4.8,17.6,0c4.8,4.8,4.8,12.8,0,17.6L67.6,50l5.2,5.2 C77.6,60,77.6,68,72.8,72.8z"/>
             </svg>
             <span className="font-normal text-5xl tracking-tight">Joomla!</span>
          </div>

          {/* Node.js */}
          <div className="flex items-center justify-center h-16 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-4xl tracking-tight flex items-center gap-2">
              <svg viewBox="0 0 128 128" className="w-12 h-12" fill="currentColor">
                <path d="M64.004,0L10.02,31.157v62.315L64.004,128l53.977-31.157V31.157L64.004,0z M64.004,118.891l-46.09-26.604V39.08 l46.09-26.604l46.09,26.604v53.207L64.004,118.891z"/>
                <path d="M85.405,73.578c-3.153-1.821-7.23-2.812-11.967-2.812c-4.736,0-8.814,0.991-11.967,2.812 c-3.153,1.821-4.736,4.524-4.736,7.915c0,3.391,1.583,6.094,4.736,7.915c3.153,1.821,7.23,2.812,11.967,2.812 c4.736,0,8.814-0.991,11.967-2.812c3.153-1.821,4.736-4.524,4.736-7.915C90.141,78.102,88.558,75.399,85.405,73.578z"/>
                <path d="M64.004,26.604L25.82,48.647v44.086l38.184,22.043l38.184-22.043V48.647L64.004,26.604z M64.004,105.674l-30.29-17.485 V53.207l30.29-17.485l30.29,17.485v34.982L64.004,105.674z"/>
              </svg>
              Node.js
            </span>
          </div>

          {/* Divi */}
          <div className="flex items-center justify-center h-16 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-5xl tracking-widest text-purple-600 grayscale">DIVI</span>
          </div>

          {/* Fortinet */}
          <div className="flex items-center justify-center h-16 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-4xl tracking-tight text-red-600 grayscale">FORTINET</span>
          </div>

          {/* Ubiquiti */}
          <div className="flex items-center justify-center h-16 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-4xl tracking-tight flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 grayscale rounded-sm flex items-center justify-center text-white font-bold text-2xl">U</div>
              Ubiquiti
            </span>
          </div>

          {/* Dell */}
          <div className="flex items-center justify-center h-16 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-5xl tracking-tighter border-2 border-current rounded-full px-4 py-1">DELL</span>
          </div>

        </div>
      </div>
    </div>
  );
}
