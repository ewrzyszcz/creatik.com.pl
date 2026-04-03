import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Building2, PiggyBank, BrainCircuit, TimerReset, LifeBuoy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ObslugaIT() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/#uslugi" className="inline-flex items-center gap-2 text-[#f55c00] hover:underline mb-8 font-medium">
          <ArrowLeft size={20} /> Wróć do usług
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Obsługa IT dla firm</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Kompleksowy outsourcing IT. Przejmujemy obowiązki działu informatycznego, optymalizując koszty i zwiększając wydajność.
            </p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src="/images/pexels-seven11nash-380769.jpg" 
              alt="Obsługa IT dla firm" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-8 flex items-center gap-3">
            <Building2 className="text-[#f55c00]" size={32} />
            Dlaczego warto wybrać outsourcing IT?
          </h2>
          <p className="mb-8 text-xl">
            Powierzenie obsługi IT zewnętrznemu partnerowi to efektywne wsparcie i dostęp do różnorodnych kompetencji technologicznych bez konieczności rozbudowy wewnętrznych zasobów.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-16 not-prose">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <PiggyBank className="text-[#f55c00] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Redukcja kosztów</h3>
                <p className="text-gray-600">Przewidywalne, stałe koszty miesięczne bez ukrytych opłat.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <BrainCircuit className="text-[#f55c00] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Wiedza ekspercka</h3>
                <p className="text-gray-600">Korzystamy z najnowszych rozwiązań technologicznych, gwarantując wysoki poziom wiedzy i doświadczenia.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <TimerReset className="text-[#f55c00] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Szybka reakcja (SLA)</h3>
                <p className="text-gray-600">Gwarantowany czas podjęcia interwencji w przypadku awarii.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <LifeBuoy className="text-[#f55c00] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Wsparcie użytkowników</h3>
                <p className="text-gray-600">Bieżąca pomoc techniczna (Helpdesk) dla Twoich pracowników.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Zakres naszych usług</h2>
          <p className="mb-8 text-xl">
            Dostosowujemy zakres wsparcia do indywidualnych potrzeb Twojej firmy. Od podstawowej opieki nad stacjami roboczymi po zaawansowane zarządzanie infrastrukturą serwerową.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
