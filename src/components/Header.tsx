import React, { useState } from 'react';
import { Phone, MapPin, MessageSquare, Menu, X, ShieldCheck, ChevronRight, Sprout } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'specialties' },
    { name: 'Facility', id: 'facility' },
    { name: 'Calculator', id: 'calculator' },
    { name: 'AI Advisor', id: 'ai-advisor' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#070a0f]/80 backdrop-blur-xl border-b border-[#d4af37]/20 text-slate-200">
      {/* Top Info Strip */}
      <div className="bg-[#05070a] border-b border-[#d4af37]/10 text-[11px] uppercase tracking-widest text-slate-400 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4 flex-wrap">
            <span className="flex items-center text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e5c158] mr-2 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#e5c158] shrink-0" />
              {BUSINESS_INFO.location}
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:flex items-center text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-400 shrink-0" />
              Proprietor: <strong className="ml-1 text-white font-medium">{BUSINESS_INFO.owner}</strong>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center text-slate-200 hover:text-[#e5c158] transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-[#e5c158]" />
              {BUSINESS_INFO.phone}
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-slate-400 hover:text-white transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Matching Reference Image */}
          <div 
            onClick={() => handleLinkClick('hero')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#123e2a] to-[#0c2a1c] border border-[#e5c158]/30 flex items-center justify-center text-[#e5c158] shadow-md group-hover:border-[#e5c158] transition-all">
              <Sprout className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl font-extrabold tracking-wider text-white">
                  VIHAAN
                </span>
                <span className="text-xl font-extrabold tracking-wider text-[#e5c158]">
                  AGRO
                </span>
              </div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-slate-400 font-medium">
                COLD STORAGE & WAREHOUSE
              </p>
            </div>
          </div>

          {/* Nav links matching reference layout */}
          <nav className="hidden lg:flex items-center space-x-1 lg:space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="px-2 py-1 text-sm font-medium text-slate-300 hover:text-[#e5c158] transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#e5c158] transition-all group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA "Call Now" Pill matching reference image */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center px-5 py-2.5 text-xs font-semibold tracking-wider text-[#e5c158] border border-[#e5c158]/50 hover:bg-[#e5c158]/10 rounded-full transition-all shadow-md group"
            >
              <Phone className="w-3.5 h-3.5 mr-2 text-[#e5c158] group-hover:rotate-12 transition-transform" />
              Call Now
            </a>

            <button
              onClick={() => handleLinkClick('inquire')}
              className="inline-flex items-center px-5 py-2.5 text-xs font-semibold tracking-wider text-white bg-[#0c3825] hover:bg-[#124d35] border border-[#21704c]/60 rounded-full transition-all shadow-md"
            >
              Book Space
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0d14] border-b border-[#d4af37]/20 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="p-4 bg-[#0e131d] border border-[#d4af37]/20 rounded-xl mb-3">
            <p className="text-[10px] uppercase tracking-widest text-[#e5c158]">Proprietor: {BUSINESS_INFO.owner}</p>
            <p className="text-xs text-slate-300 mt-1">{BUSINESS_INFO.location}</p>
            <div className="flex items-center space-x-2 mt-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex-1 text-center py-2.5 bg-[#0c3825] text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-emerald-500/30"
              >
                Call {BUSINESS_INFO.phone}
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 border border-[#d4af37]/30 text-[#e5c158] text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#d4af37]/10"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="block w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:text-[#e5c158] hover:bg-slate-900/50 transition-colors rounded-lg"
            >
              {link.name}
            </button>
          ))}

          <div className="pt-2">
            <button
              onClick={() => handleLinkClick('inquire')}
              className="w-full py-3 text-center font-bold text-xs uppercase tracking-widest text-white bg-[#0c3825] border border-emerald-500/30 rounded-xl hover:bg-[#124d35]"
            >
              Inquire / Book Storage Space
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


