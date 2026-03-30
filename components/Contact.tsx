'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', company: '', phone: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Wystąpił błąd podczas wysyłania wiadomości.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Wystąpił błąd sieci. Spróbuj ponownie później.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-900 -skew-x-12 translate-x-32 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-[#f55c00] uppercase tracking-wider mb-2">Kontakt</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Porozmawiajmy o IT w Twojej firmie
            </h3>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
              Skontaktuj się z nami, aby omówić potrzeby Twojego biznesu. Przygotujemy darmowy audyt i wycenę usług dopasowaną do Twoich wymagań.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#f55c00] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Zadzwoń do nas</h4>
                  <p className="text-gray-600 mb-1">+48 605 827 390</p>
                  <p className="text-sm text-gray-500">Pon - Pt, 8:00 - 17:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#f55c00] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Napisz e-mail</h4>
                  <p className="text-gray-600 mb-1">creatik@creatik.com.pl</p>
                  <p className="text-sm text-gray-500">Odpowiadamy w ciągu 2 godzin</p>
                </div>
              </div>

 {/*             <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#f55c00] shrink-0">
                  <MapPin size={24} />
                </div>
            <div>
                  <h4 className="font-bold text-gray-900 mb-1">Odwiedź nasze biuro</h4>
                  <p className="text-gray-600 mb-1">ul. Technologiczna 12/4</p>
                  <p className="text-gray-600">00-123 Warszawa</p>
                </div>
          </div>
 */}            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl shadow-black/20 border border-gray-100 lg:ml-8"
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Wyślij wiadomość</h4>
            
            {submitStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                  <Send size={32} />
                </div>
                <h5 className="text-lg font-bold mb-2">Wiadomość wysłana!</h5>
                <p>Dziękujemy za kontakt. Nasz specjalista odpowie najszybciej jak to możliwe.</p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-6 text-[#f55c00] font-semibold hover:underline"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                    {errorMessage}
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f55c00] focus:border-[#f55c00] outline-none transition-colors"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Firma</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f55c00] focus:border-[#f55c00] outline-none transition-colors"
                      placeholder="Nazwa firmy"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Adres e-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f55c00] focus:border-[#f55c00] outline-none transition-colors"
                      placeholder="jan@firma.pl"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f55c00] focus:border-[#f55c00] outline-none transition-colors"
                      placeholder="+48 000 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Wiadomość *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f55c00] focus:border-[#f55c00] outline-none transition-colors resize-none"
                    placeholder="W czym możemy pomóc?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#f55c00] hover:bg-[#d94f00] text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      Wyślij wiadomość
                      <Send size={20} />
                    </>
                  )}
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Wysyłając formularz, wyrażasz zgodę na przetwarzanie danych osobowych w celu obsługi zapytania.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
