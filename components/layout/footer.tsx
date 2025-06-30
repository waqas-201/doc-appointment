'use client';

import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Dr. Ayesha Khan</h3>
            <p className="text-slate-300 leading-relaxed">
              MBBS, MD Dermatology
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing exceptional dermatological care with a patient-centered approach 
              for over 10 years.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  About Dr. Khan
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('booking')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Book Appointment
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('location')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Location & Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">+92 321 1234567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">info@drayesha.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  Suite 201, Medical Complex<br />
                  Main Shahrah-e-Faisal<br />
                  Karachi, Pakistan 75400
                </span>
              </div>
            </div>
          </div>

          {/* Clinic Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Clinic Hours</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Mon - Fri</span>
                <span className="text-slate-300 text-sm">9 AM - 6 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Saturday</span>
                <span className="text-slate-300 text-sm">10 AM - 4 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Sunday</span>
                <span className="text-slate-300 text-sm">Closed</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 p-2 bg-red-900/20 rounded-lg border border-red-800/30">
              <Clock className="h-4 w-4 text-red-400 flex-shrink-0" />
              <span className="text-red-300 text-xs">
                Emergency: +92 300 1234567
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2024 Dr. Ayesha Khan Dermatology. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}