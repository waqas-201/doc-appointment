'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Calendar, User, Home, MapPin, Stethoscope } from 'lucide-react';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-slate-900 hover:text-cyan-600 transition-colors"
            >
              Dr. Ayesha Khan
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-slate-600 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Home className="h-4 w-4" />
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-600 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors flex items-center gap-2"
              >
                <User className="h-4 w-4" />
                About
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-slate-600 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors flex items-center gap-2"
              >
                <MapPin className="h-4 w-4" />
                Location
              </button>
              <SignedIn>
                <Link
                  href="/patient/dashboard"
                  className="text-slate-600 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors flex items-center gap-2"
                >
                  <User className="h-4 w-4" />
                  My Appointments
                </Link>
                <Link
                  href="/doctor/dashboard"
                  className="text-slate-600 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors flex items-center gap-2"
                >
                  <Stethoscope className="h-4 w-4" />
                  Doctor Portal
                </Link>
              </SignedIn>
            </div>
          </div>

          {/* Desktop Auth & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedIn>
              <Link href="/patient/book-appointment">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </Button>
              </Link>
            </SignedIn>
            <SignedOut>
              <Button
                onClick={() => scrollToSection('booking')}
                className="bg-cyan-600 hover:bg-cyan-700 text-white"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>
            </SignedOut>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('hero')}
                className="flex items-center gap-2 text-slate-600 hover:text-cyan-600  px-3 py-2 text-base font-medium w-full text-left"
              >
                <Home className="h-4 w-4" />
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center gap-2 text-slate-600 hover:text-cyan-600  px-3 py-2 text-base font-medium w-full text-left"
              >
                <User className="h-4 w-4" />
                About
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="flex items-center gap-2 text-slate-600 hover:text-cyan-600  px-3 py-2 text-base font-medium w-full text-left"
              >
                <MapPin className="h-4 w-4" />
                Location
              </button>
              <SignedIn>
                <Link
                  href="/patient/dashboard"
                  className="flex items-center gap-2 text-slate-600 hover:text-cyan-600  px-3 py-2 text-base font-medium w-full text-left"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="h-4 w-4" />
                  My Appointments
                </Link>
                <Link
                  href="/doctor/dashboard"
                  className="flex items-center gap-2 text-slate-600 hover:text-cyan-600  px-3 py-2 text-base font-medium w-full text-left"
                  onClick={() => setIsOpen(false)}
                >
                  <Stethoscope className="h-4 w-4" />
                  Doctor Portal
                </Link>
              </SignedIn>
              <div className="flex flex-col space-y-2 px-3 py-2">
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button variant="outline" size="sm" className="w-full">
                      Sign In
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <div className="flex justify-center">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
                <SignedIn>
                  <Link href="/patient/book-appointment">
                    <Button
                      className="bg-cyan-600 hover:bg-cyan-700 text-white w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Button>
                  </Link>
                </SignedIn>
                <SignedOut>
                  <Button
                    onClick={() => scrollToSection('booking')}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white w-full"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                </SignedOut>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}