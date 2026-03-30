'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    question: "Czy obsługujecie małe firmy (do 10 komputerów)?",
    answer: "Tak, obsługujemy firmy każdej wielkości. Dla małych przedsiębiorstw przygotowaliśmy specjalne, elastyczne pakiety opieki informatycznej, które nie obciążają budżetu, a gwarantują bezpieczeństwo i wsparcie."
  },
  {
    question: "Jak szybko reagujecie na awarie?",
    answer: "Nasz standardowy czas reakcji (SLA) dla krytycznych awarii wynosi do 15 minut. W przypadku mniejszych problemów, zgłoszenia są obsługiwane zazwyczaj w ciągu 1-2 godzin. Większość problemów rozwiązujemy zdalnie od ręki."
  },
  {
    question: "Czy oferujecie wsparcie po godzinach pracy?",
    answer: "Tak, w ramach rozszerzonych pakietów SLA oferujemy wsparcie 24/7/365, w tym w weekendy i święta. Jest to szczególnie ważne dla firm produkcyjnych i e-commerce."
  },
  {
    question: "Czy pomagacie w zakupie sprzętu i oprogramowania?",
    answer: "Oczywiście. Doradzamy w wyborze, negocjujemy ceny u dystrybutorów, kupujemy, konfigurujemy i wdrażamy sprzęt (komputery, serwery, drukarki) oraz oprogramowanie (licencje Microsoft, antywirusy, systemy ERP)."
  },
  {
    question: "Jak dbacie o bezpieczeństwo danych?",
    answer: "Wdrażamy wielowarstwowe zabezpieczenia: firewalle sprzętowe, zaawansowane systemy antywirusowe/EDR, szyfrowanie dysków, polityki haseł oraz zautomatyzowane, szyfrowane kopie zapasowe (lokalne i w chmurze)."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-[#f55c00] mb-6">
            <MessageCircleQuestion size={32} />
          </div>
          <h2 className="text-sm font-bold text-[#f55c00] uppercase tracking-wider mb-2">FAQ</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Często zadawane pytania
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl overflow-hidden transition-colors ${
                openIndex === index ? 'border-[#f55c00] bg-orange-50/30' : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`text-gray-500 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-[#f55c00]' : ''
                  }`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
