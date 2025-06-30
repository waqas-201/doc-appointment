'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendlyEmbed } from '@/components/booking/calendly-embed';
import { PatientForm } from '@/components/booking/patient-form';
import { SignedIn, SignedOut } from '@clerk/nextjs';

export function BookingSection() {
  const appointmentTypes = [
    {
      icon: User,
      title: 'Initial Consultation',
      duration: '45 mins',
      price: 'Rs. 3,000',
      description: 'Comprehensive skin assessment and treatment planning'
    },
    {
      icon: Clock,
      title: 'Follow-up Visit',
      duration: '30 mins',
      price: 'Rs. 2,000',
      description: 'Review progress and adjust treatment plan'
    },
    {
      icon: Phone,
      title: 'Telemedicine',
      duration: '30 mins',
      price: 'Rs. 2,500',
      description: 'Online consultation from the comfort of your home'
    }
  ];

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Schedule your consultation with Dr. Ayesha Khan. Choose your preferred appointment type
            and select a convenient time slot.
          </p>
        </motion.div>

        {/* Appointment Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '4rem' }}
        >
          {appointmentTypes.map((type, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <type.icon className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl">{type.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-center gap-4 text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {type.duration}
                  </span>
                  <span className="font-semibold text-cyan-600">{type.price}</span>
                </div>
                <p className="text-slate-600">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Booking Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-cyan-600" />
                  Select Date & Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CalendlyEmbed />
              </CardContent>
            </Card>
          </motion.div>

          {/* Patient Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-cyan-600" />
                  Patient Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SignedIn>
                  <PatientForm />
                </SignedIn>
                {/* if user is not signed in  hell get this ui  */}
                <SignedOut>
                  <div className="text-center py-8">
                    <User className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Sign in to book your appointment
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Create an account or sign in to complete your booking and manage your appointments.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <Mail className="h-4 w-4 text-cyan-600" />
                        <span>Secure patient portal access</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <Calendar className="h-4 w-4 text-cyan-600" />
                        <span>Appointment history & reminders</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <Phone className="h-4 w-4 text-cyan-600" />
                        <span>Telemedicine options available</span>
                      </div>
                    </div>
                  </div>
                </SignedOut>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginTop: '4rem', textAlign: 'center' }}
        >
          <Card className="bg-gradient-to-r from-cyan-50 to-slate-50">
            <CardContent className="py-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Need Help with Booking?
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-slate-600">
                  <Phone className="h-5 w-5 text-cyan-600" />
                  <span>Call: +92 321 1234567</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Mail className="h-5 w-5 text-cyan-600" />
                  <span>Email: appointments@drayesha.com</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-4">
                Our staff is available Monday-Friday, 9 AM - 6 PM to assist you
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}