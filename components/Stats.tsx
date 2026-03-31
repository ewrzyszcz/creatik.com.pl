'use client';

import { motion } from 'motion/react';
import { Calendar, Building2, CheckSquare, Clock } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Lat doświadczenia', icon: <Calendar size={40} className="mx-auto mb-4 opacity-90" /> },
  { value: '10+', label: 'Obsługiwanych firm', icon: <Building2 size={40} className="mx-auto mb-4 opacity-90" /> },
  { value: '100+', label: 'Zakończonych wdrożeń', icon: <CheckSquare size={40} className="mx-auto mb-4 opacity-90" /> },
  { value: '< 15m', label: 'Średni czas reakcji', icon: <Clock size={40} className="mx-auto mb-4 opacity-90" /> },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[#f55c00] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`text-center ${index === 0 ? '' : 'pl-4 md:pl-0'}`}
            >
              {stat.icon}
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-white/80 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
