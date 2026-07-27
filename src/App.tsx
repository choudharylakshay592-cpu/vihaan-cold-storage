import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Specialties } from './components/Specialties';
import { FacilitySpecs } from './components/FacilitySpecs';
import { Calculator } from './components/Calculator';
import { AiAdvisor } from './components/AiAdvisor';
import { Gallery } from './components/Gallery';
import { InquiryForm } from './components/InquiryForm';
import { ContactAndLocation } from './components/ContactAndLocation';
import { Footer } from './components/Footer';
import { SnowEffect } from './components/SnowEffect';
import { FloatingContact } from './components/FloatingContact';

function AppContent() {
  const { isDark } = useTheme();
  const [inquiryPrefill, setInquiryPrefill] = useState<{
    cropType?: string;
    quantity?: string;
    duration?: string;
  } | undefined>(undefined);

  const scrollToSection = (sectionId: string, prefillData?: any) => {
    if (prefillData) {
      setInquiryPrefill(prefillData);
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 relative overflow-x-hidden ${
      isDark 
        ? 'bg-[#070a0f] text-slate-200 selection:bg-[#e5c158] selection:text-black' 
        : 'bg-[#f4f8fc] text-slate-800 selection:bg-sky-200 selection:text-sky-900'
    }`}>
      {/* Ambient Falling Snow Animation Overlay */}
      <SnowEffect />

      {/* Navigation Header */}
      <Header onNavigate={scrollToSection} />

      {/* Main Sections */}
      <main>
        <Hero onNavigate={scrollToSection} />
        <AboutUs onNavigate={scrollToSection} />
        <WhyChooseUs onNavigate={scrollToSection} />
        <Specialties onNavigate={scrollToSection} />
        <FacilitySpecs />
        <Calculator onNavigate={scrollToSection} />
        <AiAdvisor />
        <Gallery />
        <InquiryForm initialData={inquiryPrefill} />
        <ContactAndLocation />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating Quick Contact Widget (WhatsApp, Gmail & Direct Phone) */}
      <FloatingContact />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

