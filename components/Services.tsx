'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Headset, 
  ServerCog, 
  Router, 
  MonitorCog, 
  ReceiptText, 
  HeartPulse,
  LockKeyhole, 
  Cpu, 
  Radar 
} from 'lucide-react';

const services = [
  {
    icon: <Headset size={32} />,
    title: 'Obsługa IT dla firm',
    description: 'Kompleksowy outsourcing IT. Przejmujemy obowiązki działu informatycznego, optymalizując koszty i zwiększając wydajność.',
    link: '/obsluga-it'
  },
  {
    icon: <ServerCog size={32} />,
    title: 'Administracja serwerami',
    description: 'Konfiguracja, zarządzanie i utrzymanie serwerów Windows i Linux. Zapewniamy ich ciągłą i bezawaryjną pracę.',
    link: '/administracja-serwerami'
  },
  {
    icon: <Router size={32} />,
    title: 'Sieci komputerowe',
    description: 'Projektowanie, budowa i konfiguracja bezpiecznych sieci LAN/WAN oraz wydajnych systemów Wi-Fi dla biur i magazynów.',
    link: '/sieci-komputerowe'
  },
  {
    icon: <MonitorCog size={32} />,
    title: 'Opieka nad stacjami',
    description: 'Bieżące wsparcie użytkowników (Helpdesk), instalacja oprogramowania, usuwanie awarii i konserwacja sprzętu komputerowego.',
    link: null
  },
  {
    icon: <ReceiptText size={32} />,
    title: 'Programy księgowe',
    description: 'Wdrażanie, aktualizacje i wsparcie techniczne dla popularnych systemów ERP i programów księgowo-kadrowych.',
    link: null
  },
  {
    icon: <HeartPulse size={32} />,
    title: 'Kliniki medyczne',
    description: 'Dedykowane wsparcie IT dla placówek ochrony zdrowia, obsługa systemów medycznych (HIS) i bezpieczeństwo danych pacjentów.',
    link: null
  },
  {
    icon: <LockKeyhole size={32} />,
    title: 'Bezpieczeństwo IT',
    description: 'Wdrażanie polityk bezpieczeństwa, ochrona przed ransomware, firewalle oraz zautomatyzowane systemy kopii zapasowych.',
    link: '/bezpieczenstwo-it'
  },
  {
    icon: <Cpu size={32} />,
    title: 'Wdrożenia sprzętu',
    description: 'Doradztwo w doborze sprzętu, zakupy, konfiguracja i wdrażanie nowych komputerów, serwerów i urządzeń peryferyjnych.',
    link: '/wdrozenia-sprzetu'
  },
  {
    icon: <Radar size={32} />,
    title: 'Monitoring infrastruktury',
    description: 'Proaktywne monitorowanie systemów 24/7. Wykrywamy i rozwiązujemy potencjalne problemy zanim wpłyną na Twoją pracę.',
    link: null
  }
];

export default function Services() {
  return (
    <section id="uslugi" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[#f55c00] uppercase tracking-wider mb-2">Nasze usługi</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Kompleksowe rozwiązania informatyczne
          </h3>
          <p className="text-lg text-gray-600">
            Dostarczamy pełen wachlarz usług IT, dostosowanych do indywidualnych potrzeb Twojego biznesu. Od prostego wsparcia po zaawansowaną infrastrukturę.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-[#f55c00]/15 hover:border-[#f55c00]/60 transition-all duration-300 group cursor-pointer h-full"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center text-gray-700 group-hover:bg-[#f55c00] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#f55c00]/40 transition-all duration-300 mb-6 transform group-hover:rotate-6 group-hover:scale-110">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f55c00] transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );

            return service.link ? (
              <Link href={service.link} key={index} className="block h-full">
                {CardContent}
              </Link>
            ) : (
              <div key={index} className="block h-full">
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
