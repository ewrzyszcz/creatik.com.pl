import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PolitykaCookies() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-[#f55c00] hover:underline mb-8 font-medium">
          <ArrowLeft size={20} /> Wróć na stronę główną
        </Link>
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Polityka Cookies</h1>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Serwis korzysta z plików cookies (tzw. &quot;ciasteczka&quot;). Są to dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Do czego używamy plików cookies?</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości.</li>
              <li>Utrzymania sesji Użytkownika Serwisu (po zalogowaniu), dzięki której Użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła.</li>
              <li>Określania profilu użytkownika w celu wyświetlania mu dopasowanych materiałów w sieciach reklamowych.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Zarządzanie plikami cookies</h2>
            <p className="mb-4">
              Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
