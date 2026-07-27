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
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from './data/mockData';

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

      {/* Fixed Floating Quick Contact Bar (Mobile & Quick Access) */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col space-y-2.5">
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp with Vishal Choudhary"
        >
          <MessageSquare className="w-6 h-6" />
        </a>

        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className={`p-3.5 rounded-full shadow-2xl hover:scale-110 border transition-all flex items-center justify-center group ${
            isDark 
              ? 'bg-slate-900 hover:bg-slate-800 text-emerald-400 border-slate-700' 
              : 'bg-white hover:bg-emerald-50 text-emerald-700 border-emerald-300 shadow-md'
          }`}
          aria-label="Call Owner"
          title={`Call Owner ${BUSINESS_INFO.owner} (${BUSINESS_INFO.phone})`}
        >
          <Phone className="w-6 h-6 animate-pulse" />
        </a>
      </div>
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

