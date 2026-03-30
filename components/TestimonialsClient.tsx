'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export interface Review {
  quote: string;
  author: string;
  time: string;
  initial: string;
  color: string;
  photoUrl?: string;
  rating?: number;
}

interface TestimonialsClientProps {
  reviews: Review[];
  rating: number;
  totalReviews?: number;
}

export default function TestimonialsClient({ reviews, rating, totalReviews }: TestimonialsClientProps) {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100"
        >
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 24 24" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                Opinie z Google
              </h2>
            </div>
            {rating > 0 && (
              <div className="flex items-center gap-4">
                <span className="text-5xl font-black text-gray-900">{rating.toFixed(1)}</span>
                <div className="flex flex-col items-start">
                  <div className="flex text-[#f55c00] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.round(rating) ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-500">
                    {totalReviews ? `Na podstawie ${totalReviews} opinii` : 'Zobacz co o nas mówią'}
                  </span>
                </div>
              </div>
            )}
          </div>
          
          <div>
            <a 
              href="https://share.google/I6pmiQFIdGNu8yISg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-[#f55c00] hover:bg-[#d94f00] shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-1"
            >
              Zobacz nasze opinie
            </a>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        {reviews.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col relative group"
              >
                <Quote className="absolute top-6 right-6 text-gray-100 group-hover:text-orange-50 transition-colors" size={48} />
                
                <div className="flex gap-1 text-[#f55c00] mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < (testimonial.rating || 5) ? 'fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed flex-grow line-clamp-6 mb-8 relative z-10">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="flex items-center gap-4 mt-auto relative z-10">
                  {testimonial.photoUrl ? (
                    <img src={testimonial.photoUrl} alt={testimonial.author} className="w-12 h-12 rounded-full ring-2 ring-gray-50" referrerPolicy="no-referrer" />
                  ) : (
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ring-2 ring-gray-50 ${testimonial.color}`}>
                      {testimonial.initial}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-xs text-gray-500">{testimonial.time}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
