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
            <p className="mb-2"><strong>Data wejścia w życie:</strong> 31.03.2026</p>
            <p className="mb-8"><strong>Ostatnia Aktualizacja:</strong> 31.03.2026</p>

            <p className="mb-4">
              Niniejsza Polityka Prywatności opisuje politykę firmy creatik, e-mail: <a href="mailto:creatik@creatik.com.pl" className="text-[#f55c00] hover:underline">creatik@creatik.com.pl</a> w sprawie gromadzenia, wykorzystywania i ujawniania Twoich danych, które zbieramy podczas korzystania z strony internetowej (creatik.com.pl). Uzyskując dostęp do strony lub korzystając z niej, wyrażasz zgodę na gromadzenie, wykorzystywanie i ujawnianie Twoich danych zgodnie z niniejszą Polityką prywatności. Jeśli nie wyrażasz na to zgody, nie korzystaj z niej.
            </p>
            <p className="mb-8">
              Możemy modyfikować niniejszą Politykę prywatności w dowolnym momencie bez uprzedniego powiadomienia i opublikujemy zmienioną Politykę prywatności na stronie. Zmieniona Polityka zacznie obowiązywać po 180 dniach od opublikowania, a dalszy dostęp do Usługi lub korzystanie z niej po tym czasie będzie równoznaczne z akceptacją zmienionej Polityki prywatności. Dlatego zalecamy okresowe przeglądanie tej strony.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JAK WYKORZYSTUJEMY TWOJE DANE</h2>
            <p className="mb-4">
              Informacje, które o Tobie gromadzimy, będziemy wykorzystywać w następujących celach:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Marketing/promocja</li>
              <li>Informacje administracyjne</li>
            </ul>
            <p className="mb-8">
              Jeśli będziemy chcieli wykorzystać Twoje dane w jakimkolwiek innym celu, poprosimy Cię o zgodę i wykorzystamy Twoje dane dopiero po otrzymaniu Twojej zgody, a następnie wyłącznie w celu(ach), na który(-e) wyrazisz zgodę.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">TWOJE PRAWA</h2>
            <p className="mb-4">
              W zależności od obowiązującego prawa możesz mieć prawo dostępu do treści swoich danych osobowych, ich sprostowania lub usunięcia, otrzymania kopii swoich danych osobowych, ograniczenia lub sprzeciwu wobec aktywnego przetwarzania Twoich danych, poproszenia nas o udostępnienie (przeniesienie) Twoich danych osobowych informacji innemu podmiotowi, cofnięcia udzielonej nam zgody na przetwarzanie danych, prawa do wniesienia skargi do organu ustawowego oraz innych praw, jakie mogą mieć zastosowanie na mocy obowiązujących przepisów prawa. Aby skorzystać z tych praw, możesz napisać do nas na adres <a href="mailto:creatik@creatik.com.pl" className="text-[#f55c00] hover:underline">creatik@creatik.com.pl</a>. Odpowiemy na Twoją prośbę zgodnie z obowiązującym prawem.
            </p>
            <p className="mb-8">
              Pamiętaj, że jeśli nie zezwolisz nam na gromadzenie lub przetwarzanie wymaganych danych osobowych lub wycofasz zgodę na ich przetwarzanie w wymaganych celach, możesz nie mieć dostępu do niektórych usług na stronie.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">PLIKI COOKIE</h2>
            <p className="mb-8">
              Aby dowiedzieć się więcej o tym, jak z nich korzystamy, oraz o Twoich wyborach w związku z technologiami śledzenia, zapoznaj się z naszą Polityką dotyczącą plików cookie.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">BEZPIECZEŃSTWO</h2>
            <p className="mb-8">
              Bezpieczeństwo Twoich danych jest dla nas ważne stosujemy środki bezpieczeństwa, aby zapobiec utracie, niewłaściwemu wykorzystaniu lub nieuprawnionej zmianie Twoich danych znajdujących się pod naszą kontrolą. Jednakże, biorąc pod uwagę nieodłączne ryzyko, nie możemy zagwarantować całkowitego bezpieczeństwa, w związku z czym nie możemy zapewnić ani zagwarantować bezpieczeństwa jakichkolwiek informacji, które nam przekazujesz i robisz to na własne ryzyko.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">LINKI STRON TRZECICH I WYKORZYSTANIE TWOICH INFORMACJI</h2>
            <p className="mb-8">
              Nasz Serwis może zawierać łącza do innych stron internetowych, które nie są przez nas obsługiwane. Niniejsza Polityka prywatności nie dotyczy polityki prywatności ani innych praktyk stron trzecich, w tym stron trzecich obsługujących jakąkolwiek witrynę internetową lub usługę, do których można uzyskać dostęp za pośrednictwem linku na stronie. Zdecydowanie zalecamy zapoznanie się z polityką prywatności każdej odwiedzanej witryny. Nie mamy kontroli i nie ponosimy żadnej odpowiedzialności za treść, politykę prywatności lub praktyki jakichkolwiek witryn lub usług stron trzecich.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">INSPEKTOR DS. SKARG / OCHRONY DANYCH</h2>
            <p className="mb-8">
              Jeśli masz jakiekolwiek pytania lub wątpliwości dotyczące przetwarzania Twoich informacji, które są u nas dostępne, możesz wysłać wiadomość e-mail do naszego specjalisty ds. skarg pod adresem e-mail: <a href="mailto:creatik@creatik.com.pl" className="text-[#f55c00] hover:underline">creatik@creatik.com.pl</a>. Rozpatrzymy Twoje wątpliwości zgodnie z obowiązującym prawem.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
