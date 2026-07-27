import React, { useState } from 'react';
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
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from './data/mockData';

export default function App() {
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
    <div className="min-h-screen bg-[#080808] font-sans text-zinc-200 selection:bg-white selection:text-black">
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
          className="p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl hover:scale-110 transition-all flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp with Vishal Choudhary"
        >
          <MessageSquare className="w-6 h-6" />
        </a>

        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="p-3.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 rounded-full shadow-xl hover:scale-110 border border-slate-700 transition-all flex items-center justify-center group"
          aria-label="Call Owner"
          title={`Call Owner ${BUSINESS_INFO.owner} (${BUSINESS_INFO.phone})`}
        >
          <Phone className="w-6 h-6 animate-pulse" />
        </a>
      </div>
    </div>
  );
}
