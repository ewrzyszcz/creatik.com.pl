import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Router, Cable, WifiHigh, Network, Stethoscope, LockKeyhole } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SieciKomputerowe() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/#uslugi" className="inline-flex items-center gap-2 text-[#f55c00] hover:underline mb-8 font-medium">
          <ArrowLeft size={20} /> Wróć do usług
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
           <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Sieci komputerowe</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Projektowanie, budowa i konfiguracja bezpiecznych sieci LAN/WAN oraz wydajnych systemów Wi-Fi dla biur i magazynów.
            </p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src="/images/pexels-cookiecutter-1148820.jpg" 
              alt="Sieci komputerowe" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-8 flex items-center gap-3">
            <Router className="text-[#f55c00]" size={32} />
            Szybka i stabilna sieć dla Twojego biznesu
          </h2>
          <p className="mb-8 text-xl">
            Wydajna sieć to podstawa sprawnej komunikacji i pracy zespołowej. Projektujemy i wdrażamy rozwiązania sieciowe, które rosną wraz z Twoją firmą.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-16 not-prose">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <Cable className="text-[#f55c00] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">LAN / WAN</h3>
                <p className="text-gray-600">Projektowanie i wdrażanie infrastruktury przewodowej dla biur i hal.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <WifiHigh className="text-[#f55c00] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sieci Wi-Fi</h3>
                <p className="text-gray-600">Budowa bezpiecznych i wydajnych sieci bezprzewodowych (kontrolery, AP).</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <Network className="text-[#f55c00] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Konfiguracja</h3>
                <p className="text-gray-600">Zarządzanie routerami, switchami (VLAN) i zaporami sieciowymi.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <Stethoscope className="text-[#f55c00] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Audyty</h3>
                <p className="text-gray-600">Analiza i optymalizacja istniejących sieci pod kątem wydajności.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <LockKeyhole className="text-[#f55c00]" size={32} />
            Bezpieczeństwo na pierwszym miejscu
          </h2>
          <p className="mb-8 text-xl">
            Zapewniamy odpowiednią segmentację sieci, konfigurację zapór sieciowych oraz bezpieczny dostęp zdalny dla pracowników (VPN), chroniąc Twoje dane przed nieautoryzowanym dostępem.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
