import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PolitykaPrywatnosci() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-[#f55c00] hover:underline mb-8 font-medium">
          <ArrowLeft size={20} /> Wróć na stronę główną
        </Link>
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Polityka Prywatności</h1>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem przez nich z usług poprzez Serwis.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Administrator Danych Osobowych</h2>
            <p className="mb-4">
              Administratorem danych osobowych zawartych w serwisie jest Creatik z siedzibą w Warszawie.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Cel zbierania danych</h2>
            <p className="mb-4">
              Dane osobowe przetwarzane są na podstawie zgody wyrażanej przez Użytkownika oraz w przypadkach, w których przepisy prawa upoważniają Administratora do przetwarzania danych osobowych na podstawie przepisów prawa lub w celu realizacji zawartej pomiędzy stronami umowy.
            </p>
            <p className="mb-4">
              Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniach w następujący sposób:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Poprzez dobrowolnie wprowadzone w formularzach informacje.</li>
              <li>Poprzez gromadzenie plików &quot;cookies&quot;.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Prawa użytkownika</h2>
            <p className="mb-4">
              Użytkownik ma prawo dostępu do treści swoich danych oraz ich poprawiania, usunięcia lub ograniczenia przetwarzania, a także prawo sprzeciwu, zażądania zaprzestania przetwarzania i przenoszenia danych, jak również prawo do cofnięcia zgody w dowolnym momencie.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
