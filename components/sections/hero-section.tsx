'use client';

import { Button } from '@/components/ui/button';
import { Calendar, Award, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-cyan-50 via-white to-slate-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Expert Dermatology Care with
                <span className="text-cyan-600 block">Dr. Ayesha Khan</span>
              </h1>
              <div className="flex items-center gap-2 text-slate-600">
                <Award className="h-5 w-5 text-cyan-600" />
                <span className="text-lg">MBBS, MD Dermatology</span>
              </div>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              Providing compassionate, evidence-based dermatological care for over 10 years.
              Specializing in medical dermatology, cosmetic procedures, and advanced skin treatments.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-cyan-600" />
                  <span className="text-2xl font-bold text-slate-900">2000+</span>
                </div>
                <p className="text-sm text-slate-600">Happy Patients</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-cyan-600" />
                  <span className="text-2xl font-bold text-slate-900">10</span>
                </div>
                <p className="text-sm text-slate-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-cyan-600" />
                  <span className="text-2xl font-bold text-slate-900">24h</span>
                </div>
                <p className="text-sm text-slate-600">Response Time</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToBooking}
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-cyan-200 text-cyan-700 hover:bg-cyan-50 px-8 py-4 text-lg font-semibold"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mx-auto w-full max-w-md">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-3xl transform rotate-6 opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-600 rounded-3xl transform -rotate-6 opacity-5"></div>

              {/* Doctor image placeholder */}
              <div className="relative bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Dr. Ayesha Khan - Professional Dermatologist"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                {/* Certification badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg border border-cyan-100">
                  <Award className="h-8 w-8 text-cyan-600" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}