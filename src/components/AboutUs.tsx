import React from 'react';
import { BUSINESS_INFO } from '../data/mockData';
import { ShieldCheck, Award, MapPin, Phone, UserCheck, Snowflake, Building2, CheckCircle, ArrowRight } from 'lucide-react';
import facilityImg from '../assets/images/vihaan_entrance_gate_real_1785134753281.jpg';

interface AboutUsProps {
  onNavigate: (sectionId: string) => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#080b11] text-slate-300 border-b border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e5c158] mb-3">
            <Building2 className="w-4 h-4 text-[#e5c158]" />
            <span>Infrastructure & Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Preserving Quality, <span className="font-serif italic text-[#e5c158]">Empowering Agriculture</span> in Shamli
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Located in <strong className="text-white font-medium">Silawar, District Shamli</strong>, Vihaan Cold Storage delivers modern cold preservation engineered to protect every quintal of your crop.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image & Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative border border-[#d4af37]/20 bg-[#0e131d] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={facilityImg}
                alt="Vihaan Cold Storage Entrance Gate in Silawar Shamli"
                className="w-full h-[380px] sm:h-[460px] object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0a0e17]/90 backdrop-blur-xl border border-[#d4af37]/30 rounded-xl text-white">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#e5c158]">Proprietor</span>
                    <h3 className="text-lg font-medium text-white">{BUSINESS_INFO.owner}</h3>
                    <p className="text-xs text-slate-300 mt-0.5">{BUSINESS_INFO.location}</p>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="px-4 py-2 bg-[#0c3825] hover:bg-[#124d35] text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-emerald-500/30 transition-all flex items-center space-x-1"
                  >
                    <Phone className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                    <span>Call Direct</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Floating Metric Card */}
            <div className="hidden sm:block absolute -top-6 -left-6 bg-[#0a0e17]/90 backdrop-blur-xl text-white p-5 border border-[#d4af37]/30 rounded-2xl max-w-[210px] shadow-2xl">
              <div className="flex items-center space-x-2 text-white font-serif italic text-2xl">
                <Snowflake className="w-5 h-5 text-[#e5c158]" />
                <span className="text-[#e5c158]">24/7</span>
              </div>
              <p className="text-[10px] uppercase tracking-wider text-slate-300 mt-1 font-light leading-snug">Continuous Climate Control & Diesel Backup</p>
            </div>
          </div>

          {/* About Text & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-6 bg-[#0e131d]/80 backdrop-blur-md border border-[#d4af37]/20 rounded-2xl">
              <h3 className="text-lg font-medium text-white mb-3 flex items-center">
                <Award className="w-5 h-5 mr-2 text-[#e5c158]" />
                State-of-the-Art Preservation Standard
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Vihaan Cold Storage is a <strong className="text-white font-medium">state-of-the-art premium facility</strong> designed to preserve freshness and quality. We specialize in storing <strong className="text-white font-medium">vegetables, seeds, and potatoes</strong> with advanced cold storage technology that ensures maximum shelf life and safety.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3 font-light">
                Our seamless infrastructure and professional management make us the trusted choice for farmers, traders, and agribusinesses in Shamli and across Uttar Pradesh.
              </p>
            </div>

            {/* Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#0e131d]/80 border border-[#d4af37]/15 rounded-xl flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white text-xs uppercase tracking-wider">Advanced Preservation</h4>
                  <p className="text-xs text-slate-400 mt-1 font-light">Automated refrigeration coils & digital RH controllers.</p>
                </div>
              </div>

              <div className="p-4 bg-[#0e131d]/80 border border-[#d4af37]/15 rounded-xl flex items-start space-x-3">
                <ShieldCheck className="w-4 h-4 text-[#e5c158] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white text-xs uppercase tracking-wider">Hygienic Chambers</h4>
                  <p className="text-xs text-slate-400 mt-1 font-light">Sanitized rooms, air scrubbers, zero rot protocol.</p>
                </div>
              </div>

              <div className="p-4 bg-[#0e131d]/80 border border-[#d4af37]/15 rounded-xl flex items-start space-x-3">
                <UserCheck className="w-4 h-4 text-[#e5c158] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white text-xs uppercase tracking-wider">Transparent Trust</h4>
                  <p className="text-xs text-slate-400 mt-1 font-light">Direct owner logging & personalized stock care.</p>
                </div>
              </div>

              <div className="p-4 bg-[#0e131d]/80 border border-[#d4af37]/15 rounded-xl flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#e5c158] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white text-xs uppercase tracking-wider">Silawar Approach</h4>
                  <p className="text-xs text-slate-400 mt-1 font-light">Wide approach roads for 10-wheeler trucks and trolleys.</p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('inquire')}
                className="px-6 py-3.5 bg-[#0c3825] hover:bg-[#124d35] text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-emerald-500/30 transition-all flex items-center"
              >
                Book Storage Space
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-6 py-3.5 bg-transparent text-[#e5c158] font-semibold text-xs uppercase tracking-wider border border-[#e5c158]/40 rounded-xl hover:bg-[#e5c158]/10 transition-all"
              >
                Call Proprietor: {BUSINESS_INFO.phone}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


