'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Settings, Check, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 0);
    }
  }, []);

  const saveConsent = (type: 'all' | 'none' | 'custom') => {
    let finalPreferences = { ...preferences };
    
    if (type === 'all') {
      finalPreferences = { necessary: true, analytics: true, marketing: true };
    } else if (type === 'none') {
      finalPreferences = { necessary: true, analytics: false, marketing: false };
    }

    localStorage.setItem('cookieConsent', JSON.stringify(finalPreferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[60] w-[calc(100%-3rem)] sm:w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
      {!showSettings ? (
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Twoja prywatność</h3>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Używamy plików cookies, aby zapewnić Ci najlepsze doświadczenia na naszej stronie. 
            Więcej informacji znajdziesz w naszej{' '}
            <Link href="/polityka-cookies" className="text-[#f55c00] hover:underline font-medium">
              Polityce Cookies
            </Link>{' '}
            oraz{' '}
            <Link href="/polityka-prywatnosci" className="text-[#f55c00] hover:underline font-medium">
              Polityce Prywatności
            </Link>.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => saveConsent('all')}
              className="w-full bg-[#f55c00] hover:bg-[#d94f00] text-white px-4 py-2.5 rounded-lg font-medium transition-colors text-sm"
            >
              Akceptuj wszystkie
            </button>
            <div className="flex gap-3">
              <button
                onClick={() => saveConsent('none')}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2.5 rounded-lg font-medium transition-colors text-sm"
              >
                Odrzuć
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 px-4 py-2.5 rounded-lg font-medium transition-colors text-sm flex items-center justify-center gap-2"
              >
                <Settings size={16} />
                Dostosuj
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Ustawienia cookies</h3>
            <button onClick={() => setShowSettings(false)} className="text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 text-sm">Niezbędne</p>
                <p className="text-xs text-gray-500">Wymagane do działania strony</p>
              </div>
              <div className="w-10 h-5 bg-[#f55c00] rounded-full relative opacity-50 cursor-not-allowed">
                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 text-sm">Analityczne</p>
                <p className="text-xs text-gray-500">Pomagają nam ulepszać stronę</p>
              </div>
              <button 
                onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                className={`w-10 h-5 rounded-full relative transition-colors ${preferences.analytics ? 'bg-[#f55c00]' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${preferences.analytics ? 'right-1' : 'left-1'}`}></div>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 text-sm">Marketingowe</p>
                <p className="text-xs text-gray-500">Dopasowanie reklam do Ciebie</p>
              </div>
              <button 
                onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                className={`w-10 h-5 rounded-full relative transition-colors ${preferences.marketing ? 'bg-[#f55c00]' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${preferences.marketing ? 'right-1' : 'left-1'}`}></div>
              </button>
            </div>
          </div>

          <button
            onClick={() => saveConsent('custom')}
            className="w-full bg-[#f55c00] hover:bg-[#d94f00] text-white px-4 py-2.5 rounded-lg font-medium transition-colors text-sm"
          >
            Zapisz ustawienia
          </button>
        </div>
      )}
    </div>
  );
}
