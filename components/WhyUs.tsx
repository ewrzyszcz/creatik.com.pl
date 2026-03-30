'use client';

import { motion } from 'motion/react';
import { Zap, Blocks, ShieldCheck, Award, Handshake, LifeBuoy } from 'lucide-react';

const reasons = [
  {
    icon: <Zap size={28} />,
    title: 'Szybka reakcja',
    description: 'Wiemy, że w biznesie czas to pieniądz. Gwarantujemy błyskawiczną reakcję na zgłoszenia awarii i problemy techniczne.'
  },
  {
    icon: <Blocks size={28} />,
    title: 'Kompleksowa obsługa',
    description: 'Jeden partner do wszystkich spraw IT. Od zakupu myszki po konfigurację zaawansowanych klastrów serwerowych.'
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Bezpieczeństwo',
    description: 'Stosujemy rygorystyczne procedury bezpieczeństwa i zaawansowane systemy ochrony danych przed cyberzagrożeniami.'
  },
  {
    icon: <Award size={28} />,
    title: 'Wieloletnie doświadczenie',
    description: 'Nasz zespół składa się z certyfikowanych inżynierów z wieloletnim stażem w obsłudze firm z różnych branż.'
  },
  {
    icon: <Handshake size={28} />,
    title: 'Indywidualne podejście',
    description: 'Nie stosujemy szablonów. Każde wdrożenie i plan opieki dopasowujemy do specyfiki i budżetu Twojej firmy.'
  },
  {
    icon: <LifeBuoy size={28} />,
    title: 'Stałe wsparcie techniczne',
    description: 'Zapewniamy ciągły dostęp do pomocy technicznej (Helpdesk) dla wszystkich pracowników Twojej firmy.'
  }
];

export default function WhyUs() {
  return (
    <section id="dlaczego-my" className="py-24 bg-white text-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#f55c00] opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-600 opacity-5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[#f55c00] uppercase tracking-wider mb-2">Dlaczego my</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Co nas wyróżnia na tle konkurencji?
          </h3>
          <p className="text-lg text-gray-600">
            Wybierając nas, zyskujesz nie tylko wykonawcę usług, ale zaufanego doradcę technologicznego, któremu zależy na rozwoju Twojego biznesu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:border-[#f55c00]/30 transition-all"
            >
              <div className="w-12 h-12 bg-white shadow-sm rounded-lg flex items-center justify-center text-[#f55c00] mb-6">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
