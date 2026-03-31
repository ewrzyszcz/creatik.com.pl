import { blogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Nie znaleziono artykułu',
    };
  }

  return {
    title: `${post.title} | Creatik Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />
      <article className="container mx-auto px-4 max-w-4xl pb-16">
        <Link 
          href="/blog"
          className="inline-flex items-center text-gray-500 hover:text-[#f55c00] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Wróć do listy artykułów
        </Link>

        <header className="mb-12 text-center">
          <div className="flex items-center justify-center text-sm text-gray-500 mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('pl-PL', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {post.title}
          </h1>
        </header>

        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="prose prose-lg prose-orange prose-a:text-[#f55c00] prose-a:no-underline hover:prose-a:underline max-w-none mx-auto text-gray-700">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
      <Footer />
    </main>
  );
}
