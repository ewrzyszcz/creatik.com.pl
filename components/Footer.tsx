'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Code } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#f55c00] rounded-lg flex items-center justify-center text-white">
                <Code size={20} strokeWidth={3} />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Crea<span className="text-[#f55c00]">tik</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Dostarczamy niezawodne rozwiązania informatyczne dla biznesu. Zabezpieczamy, optymalizujemy i rozwijamy infrastrukturę IT naszych klientów.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61569855749749" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f55c00] hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Na skróty</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/#o-nas" className="hover:text-[#f55c00] transition-colors">O firmie</Link></li>
              <li><Link href="/#uslugi" className="hover:text-[#f55c00] transition-colors">Nasze usługi</Link></li>
              <li><Link href="/strony-www" className="hover:text-[#f55c00] transition-colors">Strony WWW</Link></li>
              <li><Link href="/#dlaczego-my" className="hover:text-[#f55c00] transition-colors">Dlaczego my</Link></li>
              <li><Link href="/#wspolpraca" className="hover:text-[#f55c00] transition-colors">Proces współpracy</Link></li>
              <li><Link href="/#faq" className="hover:text-[#f55c00] transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-[#f55c00] transition-colors">Blog IT</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Usługi</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/obsluga-it" className="hover:text-[#f55c00] transition-colors">Obsługa IT dla firm</Link></li>
              <li><Link href="/administracja-serwerami" className="hover:text-[#f55c00] transition-colors">Administracja serwerami</Link></li>
              <li><Link href="/sieci-komputerowe" className="hover:text-[#f55c00] transition-colors">Sieci komputerowe</Link></li>
              <li><Link href="/bezpieczenstwo-it" className="hover:text-[#f55c00] transition-colors">Bezpieczeństwo IT</Link></li>
              <li><Link href="/wdrozenia-sprzetu" className="hover:text-[#f55c00] transition-colors">Wdrożenia sprzętu</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Kontakt</h4>
            <ul className="space-y-3 text-sm">
{/*             <li className="flex items-start gap-3">
                <span className="text-gray-500">A:</span>
                <span>ul. Technologiczna 12/4<br />00-123 Warszawa</span>
              </li>
*/}             <li className="flex items-center gap-3">
                <span className="text-gray-500">T:</span>
                <a href="tel:+48123456789" className="hover:text-[#f55c00] transition-colors">+48 605 827 390</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gray-500">E:</span>
                <a href="mailto:creatik@creatik.com.pl" className="hover:text-[#f55c00] transition-colors">creatik@creatik.com.pl</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Creatik. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors">Polityka prywatności</Link>
            <Link href="/polityka-cookies" className="hover:text-white transition-colors">Polityka cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
