import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WebDevelopment from '@/components/WebDevelopment';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import TechStack from '@/components/TechStack';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#f55c00] selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WebDevelopment />
      <WhyUs />
      <Process />
      <TechStack />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
