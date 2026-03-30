import { blogPosts } from '@/lib/blog';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Blog IT | Creatik',
  description: 'Najnowsze artykuły, poradniki i aktualności ze świata IT, WordPressa, administracji serwerami i bezpieczeństwa.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <Navbar />
      <div className="container mx-auto px-4 max-w-7xl pb-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog <span className="text-[#f55c00]">IT</span>
          </h1>
          <p className="text-lg text-gray-600">
            Praktyczne poradniki, nowości ze świata technologii i wskazówki, które pomogą Ci lepiej zarządzać infrastrukturą IT i stronami internetowymi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.slug} 
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full border border-gray-100"
            >
              <Link href={`/blog/${post.slug}`} className="block relative h-56 w-full overflow-hidden group">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </Link>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('pl-PL', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                
                <Link href={`/blog/${post.slug}`} className="group">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f55c00] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#f55c00] font-medium hover:text-[#d94f00] transition-colors mt-auto"
                >
                  Czytaj dalej
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
