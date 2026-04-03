'use client';

import { motion } from 'motion/react';
import { MonitorSmartphone, SearchCheck, Rocket, LayoutTemplate, ShieldCheck, Code, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WebDevelopment() {
  const features = [
    { text: 'Nowoczesny i responsywny design', icon: <MonitorSmartphone className="text-[#f55c00]" size={20} /> },
    { text: 'Optymalizacja pod kątem SEO', icon: <SearchCheck className="text-[#f55c00]" size={20} /> },
    { text: 'Maksymalna wydajność', icon: <Rocket className="text-[#f55c00]" size={20} /> },
    { text: 'Systemy zarządzania (CMS)', icon: <LayoutTemplate className="text-[#f55c00]" size={20} /> },
  ];

  return (
    <section id="strony-www" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#f55c00] opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-600 opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-gray-300 mb-6">
              <Code size={16} className="text-[#f55c00]" />
              Software House
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              Tworzymy strony WWW, które <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f55c00] to-orange-400">pracują na Twój sukces</span>
            </h3>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              W dzisiejszych czasach profesjonalna strona internetowa to wizytówka Twojej firmy i główne narzędzie sprzedaży. Projektujemy nowoczesne, szybkie i responsywne witryny, które przyciągają klientów.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-800/50 border border-gray-700 p-3 rounded-lg">
                  {feature.icon}
                  <span className="text-gray-300 text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <Link
              href="/strony-www"
              className="inline-flex items-center gap-2 text-[#f55c00] font-semibold hover:text-orange-400 transition-colors"
            >
              Porozmawiajmy o Twoim projekcie <ArrowRight size={20} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Code / Browser Mockup */}
            <div className="rounded-xl overflow-hidden border border-gray-700 bg-[#0d1117] shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Browser Header */}
              <div className="h-10 bg-gray-800 border-b border-gray-700 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 px-3 py-1 bg-gray-900 rounded text-xs text-gray-400 font-mono flex-1 text-center">
                  creatik.com.pl/nowy-projekt
                </div>
              </div>
              {/* Code Content */}
              <div className="p-6 font-mono text-sm md:text-base text-gray-300 leading-relaxed overflow-x-auto">
                <p><span className="text-pink-500">const</span> <span className="text-blue-400">website</span> = {'{'}</p>
                <p className="ml-6"><span className="text-green-400">performance</span>: <span className="text-orange-400">100</span>,</p>
                <p className="ml-6"><span className="text-green-400">seo_score</span>: <span className="text-orange-400">100</span>,</p>
                <p className="ml-6"><span className="text-green-400">design</span>: <span className="text-yellow-300">&apos;modern & clean&apos;</span>,</p>
                <p className="ml-6"><span className="text-green-400">responsive</span>: <span className="text-pink-500">true</span>,</p>
                <p className="ml-6"><span className="text-green-400">security</span>: <span className="text-yellow-300">&apos;enterprise-grade&apos;</span></p>
                <p>{'}'};</p>
                <br/>
                <p><span className="text-gray-500">{`// Uruchomienie projektu`}</span></p>
                <p><span className="text-pink-500">await</span> <span className="text-blue-400">deployAndScale</span>(website);</p>
                <br/>
                <p className="text-green-400 animate-pulse">{'>'} System gotowy. Oczekuję na klientów...</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="text-gray-900 font-bold">Certyfikat SSL</div>
                <div className="text-gray-500 text-sm">W cenie projektu</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
