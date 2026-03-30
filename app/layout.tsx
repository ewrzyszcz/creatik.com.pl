import type {Metadata} from 'next';
import './globals.css'; // Global styles
import FloatingButtons from '@/components/FloatingButtons';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: 'Creatik | Kompleksowa obsługa informatyczna dla firm',
  description: 'Profesjonalna obsługa IT, administracja serwerami, bezpieczeństwo danych i wsparcie techniczne. Twój niezawodny partner technologiczny w biznesie.',
  keywords: 'obsługa IT, administracja serwerami, sieci komputerowe, bezpieczeństwo IT, helpdesk, wsparcie techniczne, outsourcing IT',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <FloatingButtons />
        <CookieBanner />
      </body>
    </html>
  );
}
