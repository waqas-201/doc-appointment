'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function ReviewsSection() {
  const reviews = [
    {
      name: 'Sarah Ahmed',
      rating: 5,
      comment: 'Dr. Ayesha is incredibly knowledgeable and caring. She took the time to explain my condition and the treatment options. My skin has never looked better!',
      date: '2 weeks ago',
      treatment: 'Acne Treatment'
    },
    {
      name: 'Muhammad Hassan',
      rating: 5,
      comment: 'Professional, thorough, and compassionate. The clinic is modern and clean. Dr. Khan made me feel comfortable throughout the entire consultation.',
      date: '1 month ago',
      treatment: 'Skin Cancer Screening'
    },
    {
      name: 'Fatima Sheikh',
      rating: 5,
      comment: 'Excellent dermatologist! The booking process was seamless, and the results from my treatment exceeded my expectations. Highly recommended.',
      date: '3 weeks ago',
      treatment: 'Chemical Peel'
    },
    {
      name: 'Ali Raza',
      rating: 5,
      comment: 'Dr. Ayesha\'s expertise in dermatology is outstanding. She addressed all my concerns with patience and provided effective treatment solutions.',
      date: '2 months ago',
      treatment: 'Eczema Treatment'
    }
  ];

  const overallRating = 4.9;
  const totalReviews = 247;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          {...{ className: "text-center mb-16" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Patients Say
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="h-6 w-6 fill-yellow-400 text-yellow-400" 
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-slate-900">{overallRating}</span>
            <span className="text-slate-600">({totalReviews} reviews)</span>
          </div>
          <p className="text-xl text-slate-600">
            Trusted by patients for exceptional dermatological care
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Quote className="h-8 w-8 text-cyan-600 opacity-50" />
                    </div>
                    <div className="flex-1">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="h-4 w-4 fill-yellow-400 text-yellow-400" 
                          />
                        ))}
                      </div>
                      
                      {/* Review text */}
                      <p className="text-slate-700 mb-4 leading-relaxed">
                        &quot;{review.comment}&quot;
                      </p>
                      
                      {/* Author info */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-slate-900">{review.name}</p>
                          <p className="text-sm text-slate-500">{review.treatment}</p>
                        </div>
                        <span className="text-sm text-slate-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          {...{ className: "text-center mt-12" }}
        >
          <p className="text-slate-600 mb-4">
            See more reviews on Google
          </p>
          <div className="flex items-center justify-center gap-2 text-cyan-600 hover:text-cyan-700 transition-colors">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%234285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath fill='%2334A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath fill='%23FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath fill='%23EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E" 
              alt="Google" 
              className="h-6 w-6"
            />
            <span className="font-medium">View all Google Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}