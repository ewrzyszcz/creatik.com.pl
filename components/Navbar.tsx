'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isSubpage = pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Check initial scroll position on mount and route change
    handleScroll();
    
    // Sometimes Next.js hash navigation happens slightly after mount
    const timeoutId = setTimeout(handleScroll, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  const navLinks = [
    { name: 'O nas', href: '/#o-nas' },
    { 
      name: 'Usługi', 
      href: '/#uslugi',
      subItems: [
        { name: 'Obsługa IT dla firm', href: '/obsluga-it' },
        { name: 'Administracja serwerami', href: '/administracja-serwerami' },
        { name: 'Sieci komputerowe', href: '/sieci-komputerowe' },
        { name: 'Bezpieczeństwo IT', href: '/bezpieczenstwo-it' },
        { name: 'Wdrożenia sprzętu', href: '/wdrozenia-sprzetu' },
      ]
    },
    { name: 'Strony WWW', href: '/strony-www' },
    { name: 'Dlaczego my', href: '/#dlaczego-my' },
    { name: 'Współpraca', href: '/#wspolpraca' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Blog', href: '/blog' },
  ];

  const isWhiteBg = isScrolled || isSubpage;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isWhiteBg ? 'bg-white' : 'bg-transparent'
      } ${isScrolled ? 'shadow-md py-4' : 'py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src={isWhiteBg ? '/logo/logo_creatik2026_blackw.png' : '/logo/logo_creatik2026_whitew.png'} 
                alt="Creatik Logo" 
                width={150} 
                height={40} 
                className="h-10 w-auto"
                style={{ width: 'auto', height: 'auto' }}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#f55c00] ${
                    isWhiteBg ? 'text-gray-600' : 'text-gray-200'
                  }`}
                >
                  {link.name}
                  {link.subItems && <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />}
                </Link>
                
                {link.subItems && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-64 flex flex-col">
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#f55c00] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/#kontakt"
              className="bg-[#f55c00] hover:bg-[#d94f00] text-white px-6 py-2.5 rounded-md font-medium transition-colors"
            >
              Skontaktuj się
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isWhiteBg ? 'text-gray-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => !link.subItems && setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-4 text-base font-medium text-gray-800 hover:text-[#f55c00] hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </Link>
                {link.subItems && (
                  <div className="pl-6 pb-2 space-y-1 border-l-2 border-gray-100 ml-4">
                    {link.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-3 text-sm font-medium text-gray-600 hover:text-[#f55c00] hover:bg-gray-50 rounded-md"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/#kontakt"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center mt-4 bg-[#f55c00] hover:bg-[#d94f00] text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Skontaktuj się
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
