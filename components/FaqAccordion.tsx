'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`bg-white rounded-xl shadow-sm border transition-colors duration-300 overflow-hidden ${
            openIndex === index ? 'border-[#f55c00]' : 'border-gray-100 hover:border-gray-200'
          }`}
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            aria-expanded={openIndex === index}
          >
            <h3 className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-[#f55c00]' : 'text-gray-900'}`}>
              {item.question}
            </h3>
            <ChevronDown 
              className={`text-gray-400 transition-transform duration-300 shrink-0 ml-4 ${
                openIndex === index ? 'rotate-180 text-[#f55c00]' : ''
              }`} 
              size={20} 
            />
          </button>
          
          <div 
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-gray-600 leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
