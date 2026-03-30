import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Computer, Projector, Printer, Server, Cpu, Power } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function WdrozeniaSprzetu() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/#uslugi" className="inline-flex items-center gap-2 text-[#f55c00] hover:underline mb-8 font-medium">
          <ArrowLeft size={20} /> Wróć do usług
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Wdrożenia sprzętu</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Doradztwo w doborze sprzętu, zakupy, konfiguracja i wdrażanie nowych komputerów, serwerów i urządzeń peryferyjnych.
            </p>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src="/images/pexels-cookiecutter-19353800.jpg" 
              alt="Wdrożenia sprzętu" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-8 flex items-center gap-3">
            <Cpu className="text-[#f55c00]" size={32} />
            Sprzęt dopasowany do Twoich potrzeb
          </h2>
          <p className="mb-8 text-xl">
            Wybór odpowiedniego sprzętu IT to inwestycja na lata. Pomagamy naszym klientom w doborze optymalnych rozwiązań, które zapewnią wydajną pracę i nie obciążą niepotrzebnie budżetu.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-16 not-prose">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <Computer className="text-[#f55c00] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Stacje robocze</h3>
                <p className="text-gray-600">Dobór, zakup i konfiguracja laptopów oraz komputerów stacjonarnych.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <Server className="text-[#f55c00] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Serwery i macierze</h3>
                <p className="text-gray-600">Wdrażanie infrastruktury serwerowej i systemów przechowywania danych.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <Printer className="text-[#f55c00] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Urządzenia peryferyjne</h3>
                <p className="text-gray-600">Instalacja drukarek, skanerów, urządzeń wielofunkcyjnych i monitorów.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <Projector className="text-[#f55c00] shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sale konferencyjne</h3>
                <p className="text-gray-600">Wyposażenie sal w systemy audio-wideo i sprzęt do wideokonferencji.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <Power className="text-[#f55c00]" size={32} />
            Gotowe do pracy od pierwszego dnia
          </h2>
          <p className="mb-8 text-xl">
            Dostarczamy sprzęt w pełni skonfigurowany i gotowy do pracy. Twój pracownik otrzymuje komputer, na którym od razu może rozpocząć wykonywanie swoich obowiązków, bez tracenia czasu na instalacje i ustawienia.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
