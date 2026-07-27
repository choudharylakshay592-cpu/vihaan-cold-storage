import React from 'react';
import { BUSINESS_INFO, FAQS } from '../data/mockData';
import { Phone, MapPin, Clock, MessageSquare, ShieldCheck, Navigation, HelpCircle, ChevronDown } from 'lucide-react';

export const ContactAndLocation: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#0a0e17] text-slate-300 border-b border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e5c158] mb-3">
            <MapPin className="w-4 h-4 text-[#e5c158]" />
            <span>Contact & Location</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Visit Vihaan Cold Storage <span className="font-serif italic text-[#e5c158]">in Silawar, Shamli</span>
          </h2>
          <p className="mt-4 text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            Directly accessible for heavy transport, trucks, and tractor trolleys.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Contact & Owner Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Owner Details Card */}
            <div className="bg-[#0e131d]/90 backdrop-blur-md text-white p-8 border border-[#d4af37]/20 rounded-2xl shadow-2xl relative">

              <span className="text-[10px] uppercase tracking-wider font-bold text-[#e5c158]">
                Owner & Management
              </span>
              <h3 className="text-2xl font-serif text-white mt-1">
                {BUSINESS_INFO.owner}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 font-light">Vihaan Cold Storage, Silawar, Shamli</p>

              <div className="mt-6 space-y-4">
                
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="p-4 bg-[#0a0d14] hover:bg-[#0c101a] border border-[#d4af37]/15 rounded-xl flex items-center justify-between transition-all group shadow-inner"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-[#0d3322] text-[#e5c158] rounded-lg border border-emerald-500/30">
                      <Phone className="w-4 h-4 text-[#e5c158]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Phone Number</p>
                      <p className="text-sm font-bold text-white group-hover:text-[#e5c158] transition-colors">
                        {BUSINESS_INFO.phone}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#0c3825] px-3 py-1.5 rounded-lg border border-emerald-500/30">
                    Call Direct
                  </span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#0a0d14] hover:bg-[#0c101a] border border-[#d4af37]/15 rounded-xl flex items-center justify-between transition-all group shadow-inner"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-[#0d3322] text-[#e5c158] rounded-lg border border-emerald-500/30">
                      <MessageSquare className="w-4 h-4 text-[#e5c158]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">WhatsApp Business</p>
                      <p className="text-sm font-bold text-white group-hover:text-[#e5c158] transition-colors">
                        Chat with Vishal Choudhary
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#0c3825] px-3 py-1.5 rounded-lg border border-emerald-500/30">
                    Open Chat
                  </span>
                </a>

                <div className="p-4 bg-[#0a0d14] border border-[#d4af37]/15 rounded-xl flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#e5c158] mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Facility Location</p>
                    <p className="text-xs font-light text-slate-200 mt-0.5">
                      Silawar, District Shamli, Uttar Pradesh - 247776
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#0a0d14] border border-[#d4af37]/15 rounded-xl flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-[#e5c158] mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Operational Hours</p>
                    <p className="text-xs font-light text-slate-200 mt-0.5">
                      24 Hours Operational (7 Days a Week)
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-[#d4af37]/15 flex items-center text-[10px] uppercase tracking-wider text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-400 shrink-0" />
                <span>Verified Facility Listing • Silawar, Shamli</span>
              </div>
            </div>

            {/* Transport & Dock Info */}
            <div className="bg-[#0e131d]/90 p-6 border border-[#d4af37]/20 rounded-2xl space-y-2">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider flex items-center">
                <Navigation className="w-4 h-4 mr-2 text-[#e5c158]" />
                Transport & Truck Access
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Vihaan Cold Storage features wide paved approaches and hydraulic unloading ramps. Broad driveways allow easy maneuvering for 10-wheeler trucks, container trailers, and tractor trolleys.
              </p>
            </div>

          </div>

          {/* Right Map Embed & FAQ Section */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Location Map Preview Card */}
            <div className="bg-[#0e131d]/90 p-6 border border-[#d4af37]/20 rounded-2xl shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Map & Route View</h3>
                  <p className="text-xs text-slate-400 font-light">Silawar Road, District Shamli, U.P.</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Silawar,+Shamli,+Uttar+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-[#e5c158] hover:bg-[#d4af37] text-black text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all shadow"
                >
                  Open Maps
                </a>
              </div>

              <div className="border border-[#d4af37]/20 rounded-xl overflow-hidden h-[280px]">
                <iframe
                  title="Vihaan Cold Storage Location Map"
                  src={BUSINESS_INFO.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className="bg-[#0e131d]/90 p-6 sm:p-8 border border-[#d4af37]/20 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-2 text-[#e5c158] text-[10px] uppercase tracking-wider mb-2 font-bold">
                <HelpCircle className="w-4 h-4 text-[#e5c158]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h3 className="text-xl font-serif text-white mb-6">Common Questions from Farmers & Traders</h3>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-[#d4af37]/15 rounded-xl overflow-hidden bg-[#0a0d14]"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full text-left p-4 bg-[#0a0d14] hover:bg-[#0e131d] font-serif text-white text-xs sm:text-sm flex items-center justify-between transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-[#e5c158] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="p-4 bg-[#080b11] text-xs text-slate-300 leading-relaxed border-t border-[#d4af37]/15 font-light">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


