import React from 'react';
import { BUSINESS_INFO } from '../data/mockData';
import { Snowflake, Phone, MapPin, MessageSquare, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#05070c] text-slate-400 text-xs border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-[#0e131d] border border-[#d4af37]/30 rounded-xl flex items-center justify-center text-[#e5c158] shadow-md">
                <Snowflake className="w-4 h-4 stroke-[1.5]" />
              </div>
              <div>
                <span className="text-sm font-serif tracking-widest text-white uppercase block">VIHAAN COLD STORAGE</span>
                <p className="text-[10px] text-[#e5c158] uppercase tracking-wider font-medium">Silawar, District Shamli (U.P.)</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-light">
              State-of-the-art cold preservation facility specializing in vegetables, seeds, and potatoes with advanced technology ensuring maximum shelf life and safety.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-[10px] uppercase tracking-wider text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Managed by Proprietor: <strong className="text-white font-medium">{BUSINESS_INFO.owner}</strong></span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#e5c158]">Quick Navigation</h4>
            <ul className="space-y-2 font-light">
              {[
                { name: 'About Vihaan Cold Storage', id: 'about' },
                { name: 'Why Choose Us', id: 'why-us' },
                { name: 'Potatoes, Seeds & Vegetables', id: 'specialties' },
                { name: 'Facility Infrastructure & Tech', id: 'facility' },
                { name: 'Storage Space Estimator', id: 'calculator' },
                { name: 'AI Crop Storage Advisor', id: 'ai-advisor' },
                { name: 'Facility Photo Gallery', id: 'gallery' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-[#e5c158] transition-colors text-xs text-slate-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#e5c158]">Contact & Location</h4>
            
            <div className="p-4 bg-[#0e131d] border border-[#d4af37]/20 rounded-xl space-y-2 text-xs">
              <p className="text-white font-medium">Owner: {BUSINESS_INFO.owner}</p>
              <p className="text-slate-300 font-light">
                <MapPin className="w-3.5 h-3.5 inline mr-1 text-[#e5c158]" />
                {BUSINESS_INFO.fullAddress}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-3.5 py-1.5 bg-[#0c3825] hover:bg-[#124d35] text-white font-semibold text-[10px] uppercase tracking-wider rounded-lg border border-emerald-500/30 transition-all flex items-center shadow"
                >
                  <Phone className="w-3 h-3 mr-1 text-[#e5c158]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-[#0a0d14] text-[#e5c158] border border-[#d4af37]/30 rounded-lg font-semibold text-[10px] uppercase tracking-wider hover:bg-[#d4af37]/10 transition-all flex items-center"
                >
                  <MessageSquare className="w-3 h-3 mr-1 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-[#d4af37]/15 flex flex-col sm:flex-row items-center justify-between text-[10px] uppercase tracking-wider text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Vihaan Cold Storage, Silawar, District Shamli. All rights reserved.</p>
          <p className="flex items-center">
            Owner: <strong className="text-[#e5c158] ml-1">{BUSINESS_INFO.owner}</strong> (+91 {BUSINESS_INFO.phone})
          </p>
        </div>
      </div>
    </footer>
  );
};


