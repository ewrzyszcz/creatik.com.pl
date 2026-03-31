import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ShieldAlert, FileKey, BrickWall, DatabaseBackup, GraduationCap, BadgeCheck, Landmark } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BezpieczenstwoIT() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/#uslugi" className="inline-flex items-center gap-2 text-[#f55c00] hover:underline mb-8 font-medium">
          <ArrowLeft size={20} /> Wróć do usług
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Bezpieczeństwo IT</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Wdrażanie polityk bezpieczeństwa, ochrona przed ransomware, firewalle oraz zautomatyzowane systemy kopii zapasowych.
            </p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src="/images/pexels-shkrabaanthony-5475793.jpg"  
              alt="Bezpieczeństwo IT" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-8 flex items-center gap-3">
            <ShieldAlert className="text-[#f55c00]" size={32} />
            Chroń swoje najcenniejsze zasoby
          </h2>
          <p className="mb-8 text-xl">
            W dobie rosnącej liczby cyberataków, bezpieczeństwo danych to priorytet. Oferujemy kompleksowe rozwiązania chroniące Twoją firmę przed utratą danych i przestojami.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-16 not-prose">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <FileKey className="text-[#f55c00] mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Audyty i Ochrona</h3>
              <p className="text-gray-600">Audyty bezpieczeństwa infrastruktury IT oraz wdrażanie systemów antywirusowych i anty-ransomware (EDR/XDR).</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <BrickWall className="text-[#f55c00] mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Zabezpieczenia Sieciowe</h3>
              <p className="text-gray-600">Konfiguracja firewalli nowej generacji (NGFW) oraz bezpieczny dostęp zdalny dla pracowników.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <DatabaseBackup className="text-[#f55c00] mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Backup i Ciągłość Działania</h3>
              <p className="text-gray-600">Zautomatyzowane systemy kopii zapasowych (Backup 3-2-1) oraz plany odtwarzania po awarii (Disaster Recovery).</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <GraduationCap className="text-[#f55c00] mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Szkolenia Pracowników</h3>
              <p className="text-gray-600">Szkolenia z zakresu cyberbezpieczeństwa, budujące świadomość zagrożeń wśród Twojego zespołu.</p>
            </div>
          </div>

          {/* Nowa sekcja: Zgodność i Regulacje */}
          <div className="bg-gray-900 text-white p-10 md:p-12 rounded-3xl shadow-xl mt-16 mb-8 not-prose">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Landmark className="text-[#f55c00]" size={36} />
              Zgodność z normami i regulacjami prawnymi
            </h2>
            <p className="text-gray-300 mb-10 text-lg leading-relaxed">
              Pomagamy firmom i instytucjom w dostosowaniu infrastruktury IT oraz procedur do obowiązujących wymogów prawnych i norm bezpieczeństwa. Przeprowadzamy audyty, wdrażamy zabezpieczenia i przygotowujemy niezbędną dokumentację.
            </p>
            
            <ul className="grid md:grid-cols-2 gap-8">
              <li className="flex items-start gap-4">
                <BadgeCheck className="text-[#f55c00] shrink-0 mt-1" size={28} />
                <div>
                  <strong className="text-white block text-xl mb-1">Dyrektywa NIS2</strong>
                  <span className="text-gray-400">Wsparcie w spełnieniu rygorystycznych wymogów cyberbezpieczeństwa dla podmiotów kluczowych i ważnych.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <BadgeCheck className="text-[#f55c00] shrink-0 mt-1" size={28} />
                <div>
                  <strong className="text-white block text-xl mb-1">Norma ISO 27001</strong>
                  <span className="text-gray-400">Wdrażanie Systemu Zarządzania Bezpieczeństwem Informacji (SZBI) przygotowujące do certyfikacji.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <BadgeCheck className="text-[#f55c00] shrink-0 mt-1" size={28} />
                <div>
                  <strong className="text-white block text-xl mb-1">RODO (GDPR)</strong>
                  <span className="text-gray-400">Zabezpieczenie danych osobowych od strony technicznej, szyfrowanie dysków, kontrola dostępu.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <BadgeCheck className="text-[#f55c00] shrink-0 mt-1" size={28} />
                <div>
                  <strong className="text-white block text-xl mb-1">WCAG 2.1 / 2.2</strong>
                  <span className="text-gray-400">Audyty i dostosowanie stron WWW oraz aplikacji do standardów dostępności cyfrowej.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
