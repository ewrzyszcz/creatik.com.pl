'use client';

import { motion } from 'motion/react';
import { FileSearch, Cog, HeartHandshake, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: <FileSearch size={32} />,
    title: 'Analiza potrzeb',
    description: 'Zaczynamy od audytu obecnej infrastruktury i dokładnego zrozumienia celów biznesowych Twojej firmy.'
  },
  {
    icon: <Cog size={32} />,
    title: 'Wdrożenie',
    description: 'Projektujemy i wdrażamy optymalne rozwiązania sprzętowe i programowe, minimalizując przestoje w pracy.'
  },
  {
    icon: <HeartHandshake size={32} />,
    title: 'Opieka i utrzymanie',
    description: 'Przejmujemy codzienne zarządzanie IT, monitorujemy systemy i zapewniamy wsparcie dla użytkowników.'
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Rozwój infrastruktury',
    description: 'Stale optymalizujemy środowisko IT, doradzamy w inwestycjach i pomagamy skalować technologię wraz z firmą.'
  }
];

export default function Process() {
  return (
    <section id="wspolpraca" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[#f55c00] uppercase tracking-wider mb-2">Jak wygląda współpraca</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Prosty proces, wymierne efekty
          </h3>
          <p className="text-lg text-gray-600">
            Nasz model współpracy został zaprojektowany tak, aby maksymalnie odciążyć Cię od problemów technicznych i pozwolić skupić się na zarabianiu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200 -z-10"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10 }}
              className="relative text-center group cursor-pointer"
            >
              <div className="w-24 h-24 mx-auto bg-white border-4 border-gray-50 rounded-full flex items-center justify-center text-[#f55c00] shadow-lg group-hover:shadow-2xl group-hover:shadow-black/10 group-hover:border-[#f55c00]/10 transition-all duration-300 mb-6 relative z-10 transform group-hover:scale-110">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white shadow-md group-hover:bg-[#f55c00] transition-colors">
                  {index + 1}
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f55c00] transition-colors">{step.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed px-2">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
