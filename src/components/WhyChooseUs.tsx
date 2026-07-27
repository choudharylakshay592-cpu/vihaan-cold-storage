import React from 'react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { Cpu, ShieldCheck, Users, MapPin, Zap, Lock, CheckCircle2, Snowflake } from 'lucide-react';

interface WhyChooseUsProps {
  onNavigate: (sectionId: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavigate }) => {
  const { isDark } = useTheme();

  const getIcon = (name: string) => {
    const colorClass = isDark ? 'text-[#e5c158]' : 'text-emerald-700';
    switch (name) {
      case 'Cpu': return <Cpu className={`w-5 h-5 ${colorClass}`} />;
      case 'ShieldCheck': return <ShieldCheck className={`w-5 h-5 ${colorClass}`} />;
      case 'Users': return <Users className={`w-5 h-5 ${colorClass}`} />;
      case 'MapPin': return <MapPin className={`w-5 h-5 ${colorClass}`} />;
      case 'Zap': return <Zap className={`w-5 h-5 ${colorClass}`} />;
      case 'Lock': return <Lock className={`w-5 h-5 ${colorClass}`} />;
      default: return <CheckCircle2 className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  return (
    <section id="why-us" className={`py-16 lg:py-24 border-b transition-colors duration-300 ${
      isDark ? 'bg-[#0a0e17] text-slate-300 border-[#d4af37]/15' : 'bg-slate-50 text-slate-700 border-sky-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] mb-3 ${
            isDark ? 'text-[#e5c158]' : 'text-emerald-700'
          }`}>
            <Snowflake className={`w-4 h-4 ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`} />
            <span>Key Differentiators</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-serif tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            The Preferred <span className={`font-serif italic ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`}>Cold Storage Partner</span> in Shamli
          </h2>
          <p className={`mt-4 font-light text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Engineered to safeguard your agricultural produce from weight loss, rotting, and market price dips.
          </p>
        </div>

        {/* Checklist Highlight Strip */}
        <div className={`mb-12 border rounded-2xl p-6 shadow-xl ${
          isDark ? 'bg-[#0e131d]/90 border-[#d4af37]/20' : 'bg-white border-sky-200'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Premium cold storage facility',
              'Advanced preservation technology',
              'Safe & hygienic environment',
              'Trusted by farmers and businesses',
              'Convenient location in Silawar, Shamli',
              '24/7 Heavy Duty Generator Backup'
            ].map((check, idx) => (
              <div key={idx} className={`flex items-center space-x-3 p-3.5 border rounded-xl ${
                isDark ? 'bg-[#0a0d14] border-[#d4af37]/15' : 'bg-sky-50/70 border-sky-100'
              }`}>
                <div className={`w-2 h-2 rounded-full shrink-0 ${isDark ? 'bg-[#e5c158]' : 'bg-emerald-600'}`} />
                <span className={`font-semibold text-xs uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>{check}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className={`p-8 border rounded-2xl transition-all duration-300 hover:-translate-y-1 group shadow-lg ${
                isDark 
                  ? 'bg-[#0e131d]/70 border-[#d4af37]/20 hover:border-[#e5c158]/50 backdrop-blur-md' 
                  : 'bg-white border-sky-100 hover:border-emerald-300 hover:shadow-xl'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 transition-colors shadow-inner ${
                isDark 
                  ? 'border-[#d4af37]/30 bg-[#0d3322] group-hover:border-[#e5c158]' 
                  : 'border-emerald-200 bg-emerald-50 group-hover:border-emerald-400'
              }`}>
                {getIcon(item.icon)}
              </div>
              <h3 className={`text-lg font-semibold mb-3 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {item.title}
              </h3>
              <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Contact Callout */}
        <div className={`mt-14 border rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl ${
          isDark
            ? 'bg-gradient-to-r from-[#0c2e1f] to-[#081e14] border-emerald-500/30'
            : 'bg-gradient-to-r from-emerald-800 to-teal-900 border-emerald-700'
        }`}>
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



