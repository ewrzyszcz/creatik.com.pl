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
            <p className="mb-2"><strong>Data wejścia w życie:</strong> 31.03.2026</p>
            <p className="mb-8"><strong>Ostatnia Aktualizacja:</strong> 31.03.2026</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Co to są pliki cookie?</h2>
            <p className="mb-4">
              Niniejsza Polityka dotycząca plików cookie wyjaśnia, czym są pliki cookie i w jaki sposób z nich korzystamy, rodzaje plików cookie, których używamy, tj. informacje, które zbieramy za pomocą plików cookie oraz sposób, w jaki te informacje są wykorzystywane, a także sposób zarządzania ustawieniami plików cookie. Pliki cookie to małe pliki tekstowe, które służą do przechowywania małych fragmentów informacji. Zapisywane są na Twoim urządzeniu, gdy strona internetowa ładuje się w Twojej przeglądarce. Pliki cookie pomagają nam zapewnić prawidłowe działanie witryny, zwiększyć jej bezpieczeństwo, zapewnić lepszą obsługę użytkowania i zrozumieć co wymaga poprawy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Jak używamy plików cookie?</h2>
            <p className="mb-4">
              Podobnie jak większość usług online, nasza witryna internetowa wykorzystuje pliki cookie własne i stron trzecich w kilku celach. Własne pliki cookie są w większości niezbędne do prawidłowego działania witryny i nie gromadzą żadnych danych osobowych. Pliki cookie stron trzecich używane na naszej stronie internetowej służą głównie do zrozumienia działania witryny, sposobu interakcji z nią, zapewnienia bezpieczeństwa naszych usług, dostarczania reklam odpowiednich dla Ciebie. Pomogą przyspieszyć przyszłe interakcje z naszą witryną.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Rodzaje plików cookie, których używamy</h2>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Niezbędne</h3>
            <p className="mb-4">
              Niezbędne pliki cookie mają kluczowe znaczenie dla podstawowych funkcji witryny i witryna nie będzie działać w zamierzony sposób bez nich. Te pliki cookie nie przechowują żadnych danych umożliwiających identyfikację osoby.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Funkcjonalne</h3>
            <p className="mb-4">
              Funkcjonalne pliki cookie pomagają wykonywać pewne funkcje, takie jak udostępnianie zawartości witryny na platformach mediów społecznościowych, zbieranie informacji zwrotnych i inne funkcje stron trzecich.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Analityczne</h3>
            <p className="mb-4">
              Analityczne pliki cookie służą do zrozumienia, w jaki sposób użytkownicy wchodzą w interakcję z witryną. Te pliki cookie pomagają dostarczać informacje o metrykach liczby odwiedzających, współczynniku odrzuceń, źródle ruchu itp.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Wydajnościowe</h3>
            <p className="mb-4">
              Wydajnościowe pliki cookie służą do zrozumienia i analizy kluczowych wskaźników wydajności witryny, co pomaga zapewnić lepsze wrażenia użytkownika dla odwiedzających.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Reklamowe</h3>
            <p className="mb-8">
              Reklamowe pliki cookie służą do dostarczania użytkownikom spersonalizowanych reklam w oparciu o strony, które odwiedzili wcześniej, oraz do analizowania skuteczności kampanii reklamowej.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Zarządzaj preferencjami plików cookies</h2>
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Ustawienia</h3>
            <p className="mb-4">
              Możesz w każdej chwili zmienić swoje preferencje dotyczące plików cookies, klikając powyższy przycisk. Umożliwi to ponowne odwiedzenie banera dotyczącego zgody na pliki cookie i zmianę preferencji lub natychmiastowe wycofanie zgody. Różne przeglądarki zapewniają różne metody blokowania i usuwania plików cookie używanych przez strony internetowe. Możesz zmienić ustawienia swojej przeglądarki, aby blokować/usuwać pliki cookies. Poniżej znajdują się linki do dokumentów pomocy dotyczących zarządzania i usuwania plików cookie z głównych przeglądarek internetowych.
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Google Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647?hl=pl" target="_blank" rel="noopener noreferrer" className="text-[#f55c00] hover:underline break-all">https://support.google.com/chrome/answer/95647?hl=pl</a></li>
              <li><strong>Firefox:</strong> <a href="https://support.mozilla.org/pl/kb/ciasteczka?esab=a&s=ciasteczka&r=0&as=s" target="_blank" rel="noopener noreferrer" className="text-[#f55c00] hover:underline break-all">https://support.mozilla.org/pl/kb/ciasteczka?esab=a&s=ciasteczka&r=0&as=s</a></li>
              <li><strong>Edge:</strong> <a href="https://support.microsoft.com/pl-pl/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-[#f55c00] hover:underline break-all">https://support.microsoft.com/pl-pl/help/17442/windows-internet-explorer-delete-manage-cookies</a></li>
              <li><strong>Internet Explorer:</strong> <a href="https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer" target="_blank" rel="noopener noreferrer" className="text-[#f55c00] hover:underline break-all">https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer</a></li>
              <li><strong>Opera:</strong> <a href="https://help.opera.com/pl/latest/security-and-privacy/" target="_blank" rel="noopener noreferrer" className="text-[#f55c00] hover:underline break-all">https://help.opera.com/pl/latest/security-and-privacy/</a></li>
              <li><strong>Safari:</strong> <a href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#f55c00] hover:underline break-all">https://support.apple.com/pl-pl/guide/safari/sfri11471/mac</a></li>
            </ul>
            <p className="mb-4">
              Jeśli używasz innej przeglądarki internetowej, sprawdź oficjalne dokumenty pomocy technicznej swojej przeglądarki.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
