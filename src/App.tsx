import React, { useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceEstimator } from './components/ServiceEstimator';
import { ServicesSection } from './components/ServicesSection';
import { FourByFourHub } from './components/FourByFourHub';
import { InspectionWalkthrough } from './components/InspectionWalkthrough';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { MobileStickyDock } from './components/MobileStickyDock';

export default function App() {
  const estimatorRef = useRef<HTMLDivElement>(null);

  const scrollToEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950 font-sans relative">
      {/* Top Header */}
      <Header onOpenEstimator={scrollToEstimator} />

      {/* Main Page Landmark */}
      <main id="main-content" className="flex-1 w-full overflow-x-hidden pb-20 md:pb-0">
        {/* 1. Hero Section */}
        <Hero onOpenEstimator={scrollToEstimator} />

        {/* 2. Interactive Service & Price Calculator */}
        <ServiceEstimator />

        {/* 3. Core Services & Pricing Catalog */}
        <ServicesSection />

        {/* 4. Sarawak 4x4 & Pickup Truck Hub */}
        <FourByFourHub />

        {/* 5. 21-Point Digital Inspection Walkthrough */}
        <InspectionWalkthrough />

        {/* 6. About Us & Facility Showcase */}
        <AboutSection />

        {/* 7. Verified Customer Reviews & Social Proof */}
        <TestimonialsSection />

        {/* 8. Frequently Asked Questions */}
        <FAQSection />

        {/* 9. Location, Directions & Appointment Booking */}
        <LocationContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Thumb Action Dock (strictly under 15% viewport height) */}
      <MobileStickyDock />
    </div>
  );
}
