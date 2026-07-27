import React, { useState } from 'react';
import { Phone, MapPin, MessageSquare, Menu, X, ShieldCheck, ChevronRight, Sprout, Sun, Moon } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();

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
    <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
      isDark 
        ? 'bg-[#070a0f]/85 border-[#d4af37]/20 text-slate-200' 
        : 'bg-white/90 border-sky-200 text-slate-800 shadow-sm'
    }`}>
      {/* Top Info Strip */}
      <div className={`border-b text-[11px] uppercase tracking-widest py-1.5 px-4 sm:px-8 transition-colors ${
        isDark 
          ? 'bg-[#05070a] border-[#d4af37]/10 text-slate-400' 
          : 'bg-sky-50 border-sky-100 text-slate-600'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4 flex-wrap">
            <span className={`flex items-center ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#e5c158] mr-2 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#e5c158] shrink-0" />
              {BUSINESS_INFO.location}
            </span>
            <span className={`hidden md:inline ${isDark ? 'text-slate-700' : 'text-slate-300'}`}>|</span>
            <span className={`hidden md:flex items-center ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-500 shrink-0" />
              Proprietor: <strong className={`ml-1 font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>{BUSINESS_INFO.owner}</strong>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className={`flex items-center font-medium transition-colors ${
                isDark ? 'text-slate-200 hover:text-[#e5c158]' : 'text-slate-800 hover:text-sky-700'
              }`}
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-[#e5c158]" />
              {BUSINESS_INFO.phone}
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center transition-colors ${
                isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-emerald-700'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1 text-emerald-500" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => handleLinkClick('hero')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md transition-all ${
              isDark 
                ? 'bg-gradient-to-br from-[#123e2a] to-[#0c2a1c] border border-[#e5c158]/30 text-[#e5c158] group-hover:border-[#e5c158]' 
                : 'bg-gradient-to-br from-emerald-600 to-teal-800 text-white border border-emerald-500 shadow-sky-100'
            }`}>
              <Sprout className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className={`text-xl font-extrabold tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  VIHAAN
                </span>
                <span className={`text-xl font-extrabold tracking-wider ${isDark ? 'text-[#e5c158]' : 'text-emerald-600'}`}>
                  COLD STORAGE
                </span>
              </div>
              <p className={`text-[9px] uppercase tracking-[0.25em] font-medium ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
                SILAWAR, SHAMLI (U.P.)
              </p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center space-x-1 lg:space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-2 py-1 text-sm font-medium transition-colors relative group ${
                  isDark ? 'text-slate-300 hover:text-[#e5c158]' : 'text-slate-700 hover:text-emerald-700'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all group-hover:w-full ${
                  isDark ? 'bg-[#e5c158]' : 'bg-emerald-600'
                }`} />
              </button>
            ))}
          </nav>

          {/* CTA & Theme Controls */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full border transition-all ${
                isDark 
                  ? 'bg-[#0e131d] border-[#d4af37]/30 text-[#e5c158] hover:bg-[#131d33]' 
                  : 'bg-sky-50 border-sky-200 text-amber-600 hover:bg-sky-100'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400 animate-pulse" /> : <Moon className="w-4 h-4 text-sky-800" />}
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className={`inline-flex items-center px-4 py-2.5 text-xs font-semibold tracking-wider rounded-full transition-all shadow-sm group ${
                isDark
                  ? 'text-[#e5c158] border border-[#e5c158]/50 hover:bg-[#e5c158]/10'
                  : 'text-emerald-800 border border-emerald-600/40 hover:bg-emerald-50'
              }`}
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-[#e5c158] group-hover:rotate-12 transition-transform" />
              Call Now
            </a>

            <button
              onClick={() => handleLinkClick('inquire')}
              className={`inline-flex items-center px-4 py-2.5 text-xs font-semibold tracking-wider text-white rounded-full transition-all shadow-md ${
                isDark
                  ? 'bg-[#0c3825] hover:bg-[#124d35] border border-[#21704c]/60'
                  : 'bg-emerald-700 hover:bg-emerald-800 border border-emerald-600'
              }`}
            >
              Book Space
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border ${
                isDark ? 'border-slate-800 text-amber-400' : 'border-slate-200 text-slate-800'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-800 hover:text-black'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200 ${
          isDark ? 'bg-[#0a0d14] border-[#d4af37]/20' : 'bg-white border-sky-100 shadow-xl'
        }`}>
          <div className={`p-4 border rounded-xl mb-3 ${
            isDark ? 'bg-[#0e131d] border-[#d4af37]/20' : 'bg-sky-50/70 border-sky-200'
          }`}>
            <p className="text-[10px] uppercase tracking-widest text-[#e5c158] font-bold">Proprietor: {BUSINESS_INFO.owner}</p>
            <p className={`text-xs mt-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{BUSINESS_INFO.location}</p>
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
                className={`px-4 py-2.5 border text-xs font-bold uppercase tracking-wider rounded-lg ${
                  isDark ? 'border-[#d4af37]/30 text-[#e5c158] hover:bg-[#d4af37]/10' : 'border-emerald-600 text-emerald-800 hover:bg-emerald-50'
                }`}
              >
                WhatsApp
              </a>
            </div>
          </div>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`block w-full text-left px-4 py-2.5 text-sm font-medium transition-colors rounded-lg ${
                isDark ? 'text-slate-300 hover:text-[#e5c158] hover:bg-slate-900/50' : 'text-slate-800 hover:text-emerald-700 hover:bg-sky-50'
              }`}
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



