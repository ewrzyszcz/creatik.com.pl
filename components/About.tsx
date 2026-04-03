'use client';

import { motion } from 'motion/react';
import { Award, Shield, Zap, Headphones, Clock, Server } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const features = [
    { text: 'Wieloletnie doświadczenie w branży', icon: <Award className="text-[#f55c00] shrink-0" size={24} /> },
    { text: 'Gwarancja niezawodności systemów', icon: <Server className="text-[#f55c00] shrink-0" size={24} /> },
    { text: 'Najwyższe standardy bezpieczeństwa', icon: <Shield className="text-[#f55c00] shrink-0" size={24} /> },
    { text: 'Kompleksowa obsługa od A do Z', icon: <Zap className="text-[#f55c00] shrink-0" size={24} /> },
    { text: 'Bezpośredni kontakt telefoniczy', icon: <Headphones className="text-[#f55c00] shrink-0" size={24} /> },
    { text: 'Szybki czas reakcji na zgłoszenia', icon: <Clock className="text-[#f55c00] shrink-0" size={24} /> },
  ];

  return (
    <section id="o-nas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-[#f55c00] uppercase tracking-wider mb-2">O naszej firmie</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Twój partner w cyfrowej transformacji i bezpieczeństwie
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Jesteśmy profesjonalną firmą informatyczną, która od lat wspiera przedsiębiorstwa w budowaniu i utrzymaniu niezawodnej infrastruktury IT. Rozumiemy, że technologia to fundament nowoczesnego biznesu.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Naszym celem jest zapewnienie Ci spokoju ducha. Przejmujemy pełną odpowiedzialność za Twoje środowisko informatyczne, od pojedynczych stacji roboczych po zaawansowane konfiguracje serwerowe i sieciowe.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-[#f55c00]/30 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 cursor-pointer group"
                >
                  <div className="bg-white p-2 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                    {feature.icon}
                  </div>
                  <span className="text-gray-800 font-medium text-sm group-hover:text-[#f55c00] transition-colors">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div 
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <Image 
                src="/images/22a57a1a-f72e-4bb0-9e36-b74f1812799f.jpg" 
                alt="Infrastruktura IT" 
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
              <motion.div 
                className="absolute bottom-6 left-6 right-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 transform transition-transform hover:-translate-y-2">
                  <div className="text-3xl font-extrabold text-[#f55c00] mb-1">99.9%</div>
                  <div className="text-gray-800 font-semibold">Gwarantowanego czasu dostępności (SLA)</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#f55c00]/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
