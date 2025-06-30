import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Dr. Ayesha Khan - Dermatologist | Book Appointment',
  description: 'Professional dermatology care with Dr. Ayesha Khan, MBBS. Book your appointment online for expert skin care treatment.',
  keywords: 'dermatologist, skin care, appointment booking, Dr. Ayesha Khan, medical consultation',
  authors: [{ name: 'Dr. Ayesha Khan' }],

  openGraph: {
    title: 'Dr. Ayesha Khan - Expert Dermatologist',
    description: 'Book your dermatology appointment online with Dr. Ayesha Khan',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={cn(inter.variable, 'scroll-smooth')}>
        <body className={cn(
          inter.className,
          'bg-background font-sans antialiased min-h-screen'
        )}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}