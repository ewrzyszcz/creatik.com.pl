'use client';

import { motion } from 'motion/react';
import { 
  Cloud, 
  Database, 
  Server, 
  Shield, 
  Terminal, 
  Cpu, 
  Monitor, 
  Wifi, 
  HardDrive, 
  Network, 
  Lock, 
  Bot 
} from 'lucide-react';

const technologies = [
  { icon: <Cloud size={36} />, name: 'Cloud Computing' },
  { icon: <Server size={36} />, name: 'Windows Server' },
  { icon: <Terminal size={36} />, name: 'Linux & Unix' },
  { icon: <Shield size={36} />, name: 'Cybersecurity' },
  { icon: <Network size={36} />, name: 'UniFi / Fortinet' },
  { icon: <Database size={36} />, name: 'SQL Databases' },
  { icon: <Cpu size={36} />, name: 'Virtualization' },
  { icon: <Monitor size={36} />, name: 'Hardware & PC' },
  { icon: <Wifi size={36} />, name: 'Enterprise Wi-Fi' },
  { icon: <HardDrive size={36} />, name: 'NAS / SAN Storage' },
  { icon: <Lock size={36} />, name: 'VPN / IPsec' },
  { icon: <Bot size={36} />, name: 'AI' },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[#f55c00] uppercase tracking-wider mb-2">Technologie i kompetencje</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Środowiska, w których pracujemy
          </h3>
          <p className="text-lg text-gray-600">
            Opieramy realizacje na sprawdzonych i niezawodnych technologiach, zapewniając stabilność oraz bezpieczeństwo wdrażanych rozwiązań.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-[#f55c00]/50 transition-all group cursor-default"
            >
              <div className="w-16 h-16 mx-auto bg-gray-50 rounded-xl flex items-center justify-center text-gray-600 group-hover:bg-[#f55c00] group-hover:text-white transition-colors mb-4">
                {tech.icon}
              </div>
              <h4 className="font-semibold text-gray-800 text-sm group-hover:text-[#f55c00] transition-colors">
                {tech.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
