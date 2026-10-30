import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Strategy from './components/Strategy';
import WhyTrustUs from './components/WhyTrustUs';
import PersonalBranding from './components/PersonalBranding';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import RedSpotlight from './components/RedSpotlight';

export default function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#EFE6DE] text-[#0A0A0A] font-sans relative selection:bg-[#9A0002] selection:text-[#EFE6DE]">
      <RedSpotlight />

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenContact={scrollToContact} />
        <Services onOpenContact={scrollToContact} />
        <Strategy />
        <WhyTrustUs onOpenContact={scrollToContact} />
        <PersonalBranding onOpenContact={scrollToContact} />
        <Contact />
      </main>

      {/* Persistent Floating WhatsApp Launcher */}
      <WhatsAppButton />

      {/* Editorial Footer */}
      <Footer onOpenContact={scrollToContact} />
    </div>
  );
}
