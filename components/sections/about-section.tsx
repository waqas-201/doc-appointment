'use client';

import { motion } from 'framer-motion';
import { Stethoscope, Microscope, Heart, Shield, CheckCircle } from 'lucide-react';

export function AboutSection() {
  const specialties = [
    {
      icon: Stethoscope,
      title: 'Medical Dermatology',
      description: 'Comprehensive diagnosis and treatment of skin conditions, rashes, and dermatological disorders.'
    },
    {
      icon: Microscope,
      title: 'Cosmetic Procedures',
      description: 'Advanced cosmetic treatments including chemical peels, botox, and laser therapy.'
    },
    {
      icon: Heart,
      title: 'Skin Cancer Screening',
      description: 'Early detection and prevention of skin cancer through regular screenings and education.'
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Personalized skincare routines and preventive measures for optimal skin health.'
    }
  ];

  const qualifications = [
    'MBBS from Karachi Medical University',
    'MD Dermatology from Aga Khan University',
    'Board Certified Dermatologist',
    'Member of Pakistan Association of Dermatologists',
    'Advanced Training in Cosmetic Dermatology',
    'Published Research in International Journals'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ display: 'block', textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            About Dr. Ayesha Khan
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Dedicated to providing exceptional dermatological care with a patient-centered approach, 
            combining medical expertise with compassionate treatment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Doctor's Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            {...{ className: "space-y-6" }}
          >
            <h3 className="text-2xl font-bold text-slate-900">My Journey in Dermatology</h3>
            <div className="space-y-4 text-slate-600">
              <p>
                With over a decade of experience in dermatology, I am passionate about helping patients 
                achieve healthy, beautiful skin. My journey began with a deep fascination for the 
                complexity of skin health and its impact on overall well-being.
              </p>
              <p>
                I believe in a holistic approach to dermatological care, combining the latest medical 
                advances with personalized treatment plans tailored to each patient&apos;s unique needs. 
                Every consultation is an opportunity to educate, heal, and empower.
              </p>
              <p>
                My practice focuses on building long-term relationships with patients, ensuring they 
                feel comfortable, informed, and confident in their skin health journey.
              </p>
            </div>
          </motion.div>

          {/* Qualifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            {...{ className: "bg-gradient-to-br from-cyan-50 to-slate-50 rounded-2xl p-8" }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Qualifications & Certifications</h3>
            <div className="space-y-3">
              {qualifications.map((qualification, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{qualification}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Specialties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">Areas of Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                {...{ className: "text-center p-6 rounded-xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300" }}
              >
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <specialty.icon className="h-8 w-8 text-cyan-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{specialty.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}