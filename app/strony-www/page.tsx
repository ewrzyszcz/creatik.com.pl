import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, MonitorSmartphone, Code, SearchCheck, Rocket, LayoutTemplate, ShieldCheck, CheckCircle2, HelpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata = {
  title: 'Tworzenie Stron WWW i Aplikacji Webowych | Creatik',
  description: 'Projektujemy i wdrażamy nowoczesne, szybkie i bezpieczne strony internetowe, sklepy e-commerce oraz dedykowane aplikacje webowe.',
};

export default function StronyWWW() {
  const faqItems = [
    {
      question: 'Ile kosztuje stworzenie strony internetowej?',
      answer: 'Koszt stworzenia strony zależy od wielu czynników: stopnia skomplikowania projektu, ilości podstron, integracji z zewnętrznymi systemami czy wybranego systemu CMS. Proste wizytówki (Landing Pages) zaczynają się od niższych kwot, natomiast rozbudowane sklepy czy dedykowane aplikacje webowe wymagają większego budżetu. Zawsze przygotowujemy indywidualną wycenę po bezpłatnej konsultacji.'
    },
    {
      question: 'Jak długo trwa realizacja projektu?',
      answer: 'Standardowa strona firmowa (wizytówka) powstaje zazwyczaj w 2-4 tygodnie. Bardziej zaawansowane projekty, takie jak sklepy internetowe czy aplikacje dedykowane, mogą zająć od 1 do 3 miesięcy. Czas realizacji zależy również od tego, jak szybko dostarczysz nam niezbędne materiały (teksty, zdjęcia).'
    },
    {
      question: 'Czy strona będzie dostosowana do urządzeń mobilnych?',
      answer: 'Tak, absolutnie. Wszystkie tworzone przez nas strony i aplikacje są w 100% responsywne (RWD). Oznacza to, że będą wyglądać i działać idealnie na smartfonach, tabletach oraz komputerach stacjonarnych.'
    },
    {
      question: 'Czy będę mógł samodzielnie edytować treści na stronie?',
      answer: 'Oczywiście. Wdrażamy intuicyjne systemy zarządzania treścią (CMS), takie jak WordPress, które pozwalają na łatwą edycję tekstów, dodawanie zdjęć czy publikowanie artykułów na blogu bez znajomości programowania. Zapewniamy również szkolenie z obsługi panelu.'
    },
    {
      question: 'Czym różni się strona internetowa od aplikacji webowej?',
      answer: 'Strona internetowa ma zazwyczaj charakter informacyjny (np. blog, wizytówka firmy). Aplikacja webowa to zaawansowany system dostępny przez przeglądarkę, który pozwala użytkownikom na interakcję i wykonywanie określonych zadań (np. system CRM, portal rezerwacyjny, platforma e-learningowa). Tworzymy oba rodzaje rozwiązań.'
    },
    {
      question: 'Czy zapewniacie hosting i domenę?',
      answer: 'Tak, oferujemy kompleksową obsługę. Możemy pomóc w wyborze i rejestracji odpowiedniej domeny oraz zapewnić bezpieczny i szybki hosting na naszych serwerach, zoptymalizowany pod kątem Twojej nowej strony.'
    },
    {
      question: 'Czy dbacie o pozycjonowanie (SEO) nowej strony?',
      answer: 'Tak, każda tworzona przez nas strona jest optymalizowana pod kątem wyszukiwarek (techniczne SEO). Dbamy o szybkość ładowania, poprawną strukturę nagłówków, meta tagi oraz optymalizację obrazów, co daje solidne fundamenty do dalszego pozycjonowania.'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#f55c00] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-600 opacity-10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/#strony-www" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Wróć do strony głównej
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-gray-300 mb-6">
              <Code size={16} className="text-[#f55c00]" />
              Software House
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Profesjonalne Strony WWW i <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f55c00] to-orange-400">Aplikacje Webowe</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Projektujemy nowoczesne, szybkie i bezpieczne rozwiązania internetowe. Od prostych wizytówek po zaawansowane systemy dedykowane dla Twojego biznesu.
            </p>
            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-2 bg-[#f55c00] hover:bg-[#d94f00] text-white px-8 py-4 rounded-md font-bold transition-colors text-lg"
            >
              Wyceń swój projekt
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Co tworzymy */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Co możemy dla Ciebie stworzyć?</h2>
            <p className="text-gray-600">Dopasowujemy technologię do Twoich potrzeb biznesowych, zapewniając najwyższą jakość i wydajność.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                <LayoutTemplate className="text-[#f55c00]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strony Firmowe</h3>
              <p className="text-gray-600 mb-6">
                Nowoczesne, responsywne strony oparte na systemie WordPress. Idealne do zaprezentowania oferty, budowania wizerunku i pozyskiwania kontaktów.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-green-500" /> Indywidualny projekt graficzny</li>
                <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-green-500" /> Łatwa edycja treści (CMS)</li>
                <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-green-500" /> Optymalizacja SEO</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <MonitorSmartphone className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Aplikacje Webowe</h3>
              <p className="text-gray-600 mb-6">
                Zaawansowane systemy dedykowane, portale, systemy CRM/ERP, panele klienta. Tworzone w nowoczesnych technologiach (React, Next.js, Node.js).
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-green-500" /> Skalowalna architektura</li>
                <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-green-500" /> Integracje z API</li>
                <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-green-500" /> Wysokie bezpieczeństwo</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sklepy Internetowe (E-commerce)</h3>
              <p className="text-gray-600 mb-6">
                Wydajne i bezpieczne platformy sprzedażowe (WooCommerce, PrestaShop), zintegrowane z płatnościami i systemami kurierskimi.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-green-500" /> Integracje z bramkami płatności</li>
                <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-green-500" /> Zarządzanie magazynem</li>
                <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-green-500" /> Optymalizacja konwersji (UX)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <HelpCircle className="text-[#f55c00]" size={32} />
              Często zadawane pytania (FAQ)
            </h2>
            <p className="text-gray-600">Wszystko, co musisz wiedzieć przed rozpoczęciem współpracy.</p>
          </div>

          <FaqAccordion items={faqItems} />
        </div>

      </div>
      <Footer />
    </main>
  );
}
