import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ServerCog, Layers, DatabaseZap, HeartPulse, Gauge } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AdministracjaSerwerami() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/#uslugi" className="inline-flex items-center gap-2 text-[#f55c00] hover:underline mb-8 font-medium">
          <ArrowLeft size={20} /> Wróć do usług
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Administracja serwerami</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Konfiguracja, zarządzanie i utrzymanie serwerów Windows, Linux i BSD. Zapewniamy ich ciągłą i bezawaryjną pracę.
            </p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src="/images/pexels-brett-sayles-5050305.jpg" 
              alt="Administracja serwerami" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-8 flex items-center gap-3">
            <ServerCog className="text-[#f55c00]" size={32} />
            Niezawodność Twojej infrastruktury
          </h2>
          <p className="mb-8 text-xl">
            Serwery to serce każdej nowoczesnej firmy. Ich awaria oznacza przestoje, straty finansowe i wizerunkowe. Nasza usługa administracji serwerami gwarantuje, że Twoje systemy będą działać stabilnie i bezpiecznie.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-16 not-prose">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <ServerCog className="text-[#f55c00] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Windows, Linux i BSD</h3>
                <p className="text-gray-600">Kompleksowa administracja systemami serwerowymi oraz Active Directory.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <Layers className="text-[#f55c00] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Wirtualizacja</h3>
                <p className="text-gray-600">Zarządzanie środowiskami VMware, Hyper-V oraz Proxmox.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <DatabaseZap className="text-[#f55c00] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bazy danych</h3>
                <p className="text-gray-600">Utrzymanie i optymalizacja SQL Server, MySQL, PostgreSQL.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <Gauge className="text-[#f55c00] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Optymalizacja</h3>
                <p className="text-gray-600">Tuning wydajnościowy i zarządzanie zasobami sprzętowymi.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <HeartPulse className="text-[#f55c00]" size={32} />
            Proaktywne podejście
          </h2>
          <p className="mb-8 text-xl">
            Nie czekamy na awarię. Monitorujemy kluczowe parametry serwerów 24/7, co pozwala nam wykrywać i rozwiązywać potencjalne problemy, zanim wpłyną one na pracę Twojego zespołu.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
