import React from 'react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/mockData';
import { Cpu, ShieldCheck, Users, MapPin, Zap, Lock, CheckCircle2, Snowflake } from 'lucide-react';

interface WhyChooseUsProps {
  onNavigate: (sectionId: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavigate }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#e5c158]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#e5c158]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#e5c158]" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-[#e5c158]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#e5c158]" />;
      case 'Lock': return <Lock className="w-5 h-5 text-[#e5c158]" />;
      default: return <CheckCircle2 className="w-5 h-5 text-[#e5c158]" />;
    }
  };

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-[#0a0e17] text-slate-300 border-b border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e5c158] mb-3">
            <Snowflake className="w-4 h-4 text-[#e5c158]" />
            <span>Key Differentiators</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            The Preferred <span className="font-serif italic text-[#e5c158]">Cold Storage Partner</span> in Shamli
          </h2>
          <p className="mt-4 text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            Engineered to safeguard your agricultural produce from weight loss, rotting, and market price dips.
          </p>
        </div>

        {/* Checklist Highlight Strip */}
        <div className="mb-12 bg-[#0e131d]/90 border border-[#d4af37]/20 rounded-2xl p-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Premium cold storage facility',
              'Advanced preservation technology',
              'Safe & hygienic environment',
              'Trusted by farmers and businesses',
              'Convenient location in Silawar, Shamli',
              '24/7 Heavy Duty Generator Backup'
            ].map((check, idx) => (
              <div key={idx} className="flex items-center space-x-3 p-3.5 bg-[#0a0d14] border border-[#d4af37]/15 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-[#e5c158] shrink-0" />
                <span className="font-semibold text-white text-xs uppercase tracking-wider">{check}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-[#0e131d]/70 backdrop-blur-md p-8 border border-[#d4af37]/20 rounded-2xl hover:border-[#e5c158]/50 transition-all duration-300 hover:-translate-y-1 group shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl border border-[#d4af37]/30 bg-[#0d3322] flex items-center justify-center mb-6 group-hover:border-[#e5c158] transition-colors shadow-inner">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Contact Callout */}
        <div className="mt-14 bg-gradient-to-r from-[#0c2e1f] to-[#081e14] border border-emerald-500/30 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#e5c158] font-bold">Chamber Space Booking</span>
            <h3 className="text-xl sm:text-2xl font-serif text-white mt-1">Reserve Your Storage Space Today</h3>
            <p className="text-slate-200 text-xs mt-1 font-light">
              Speak directly with proprietor <strong className="text-white font-medium">{BUSINESS_INFO.owner}</strong> for chamber allocation & competitive tariffs.
            </p>
          </div>
          <div className="flex items-center space-x-3 shrink-0 flex-wrap gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-6 py-3.5 bg-[#e5c158] hover:bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
            >
              Call {BUSINESS_INFO.phone}
            </a>
            <button
              onClick={() => onNavigate('inquire')}
              className="px-6 py-3.5 bg-[#071710] text-white font-semibold text-xs uppercase tracking-wider border border-emerald-500/40 rounded-xl hover:bg-[#0c2e1f] transition-all"
            >
              Inquire Online
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};


