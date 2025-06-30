import { HeroSection } from '@/components/sections/hero-section';
import { ReviewsSection } from '@/components/sections/reviews-section';
import { AboutSection } from '@/components/sections/about-section';
import { LocationSection } from '@/components/sections/location-section';
import { BookingSection } from '@/components/sections/booking-section';
import { Navigation } from '@/components/navigation/navigation';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ReviewsSection />
      {/* <BookingSection /> */}
      <LocationSection />
      <Footer />
    </main>
  );
}