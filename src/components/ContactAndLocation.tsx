import React from 'react';
import { BUSINESS_INFO, FAQS } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { Phone, MapPin, Clock, MessageSquare, ShieldCheck, Navigation, HelpCircle, ChevronDown } from 'lucide-react';

export const ContactAndLocation: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);
  const { isDark } = useTheme();

  return (
    <section id="contact" className={`py-16 lg:py-24 border-b transition-colors duration-300 ${
      isDark ? 'bg-[#0a0e17] text-slate-300 border-[#d4af37]/15' : 'bg-slate-50 text-slate-700 border-sky-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] mb-3 ${
            isDark ? 'text-[#e5c158]' : 'text-emerald-700'
          }`}>
            <MapPin className={`w-4 h-4 ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`} />
            <span>Contact & Location</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-serif tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Visit Vihaan Cold Storage <span className={`font-serif italic ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`}>in Silawar, Shamli</span>
          </h2>
          <p className={`mt-4 font-light text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Directly accessible for heavy transport, trucks, and tractor trolleys.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Contact & Owner Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Owner Details Card */}
            <div className={`p-8 border rounded-2xl shadow-2xl relative ${
              isDark ? 'bg-[#0e131d]/90 border-[#d4af37]/20 text-white backdrop-blur-md' : 'bg-white border-sky-200 text-slate-800'
            }`}>

              <span className={`text-[10px] uppercase tracking-wider font-bold ${isDark ? 'text-[#e5c158]' : 'text-emerald-800'}`}>
                Owner & Management
              </span>
              <h3 className={`text-2xl font-serif mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {BUSINESS_INFO.owner}
              </h3>
              <p className={`text-xs mt-0.5 font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Vihaan Cold Storage, Silawar, Shamli</p>

              <div className="mt-6 space-y-4">
                
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className={`p-4 border rounded-xl flex items-center justify-between transition-all group shadow-inner ${
                    isDark ? 'bg-[#0a0d14] hover:bg-[#0c101a] border-[#d4af37]/15' : 'bg-sky-50/60 hover:bg-sky-100/60 border-sky-200'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-[#0d3322] text-[#e5c158] rounded-lg border border-emerald-500/30">
                      <Phone className="w-4 h-4 text-[#e5c158]" />
                    </div>
                    <div>
                      <p className={`text-[10px] uppercase tracking-wider font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Phone Number</p>
                      <p className={`text-sm font-bold transition-colors ${
                        isDark ? 'text-white group-hover:text-[#e5c158]' : 'text-slate-900 group-hover:text-emerald-700'
                      }`}>
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
                  className={`p-4 border rounded-xl flex items-center justify-between transition-all group shadow-inner ${
                    isDark ? 'bg-[#0a0d14] hover:bg-[#0c101a] border-[#d4af37]/15' : 'bg-sky-50/60 hover:bg-sky-100/60 border-sky-200'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-[#0d3322] text-[#e5c158] rounded-lg border border-emerald-500/30">
                      <MessageSquare className="w-4 h-4 text-[#e5c158]" />
                    </div>
                    <div>
                      <p className={`text-[10px] uppercase tracking-wider font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>WhatsApp Business</p>
                      <p className={`text-sm font-bold transition-colors ${
                        isDark ? 'text-white group-hover:text-[#e5c158]' : 'text-slate-900 group-hover:text-emerald-700'
                      }`}>
                        Chat with Vishal Choudhary
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#0c3825] px-3 py-1.5 rounded-lg border border-emerald-500/30">
                    Open Chat
                  </span>
                </a>

                <div className={`p-4 border rounded-xl flex items-start space-x-3 ${
                  isDark ? 'bg-[#0a0d14] border-[#d4af37]/15' : 'bg-sky-50/60 border-sky-200'
                }`}>
                  <MapPin className={`w-4 h-4 mt-1 shrink-0 ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`} />
                  <div>
                    <p className={`text-[10px] uppercase tracking-wider font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Facility Location</p>
                    <p className={`text-xs font-light mt-0.5 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      Silawar, District Shamli, Uttar Pradesh - 247776
                    </p>
                  </div>
                </div>

                <div className={`p-4 border rounded-xl flex items-start space-x-3 ${
                  isDark ? 'bg-[#0a0d14] border-[#d4af37]/15' : 'bg-sky-50/60 border-sky-200'
                }`}>
                  <Clock className={`w-4 h-4 mt-1 shrink-0 ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`} />
                  <div>
                    <p className={`text-[10px] uppercase tracking-wider font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Operational Hours</p>
                    <p className={`text-xs font-light mt-0.5 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      24 Hours Operational (7 Days a Week)
                    </p>
                  </div>
                </div>

              </div>

              <div className={`mt-6 pt-4 border-t flex items-center text-[10px] uppercase tracking-wider ${
                isDark ? 'border-[#d4af37]/15 text-slate-400' : 'border-sky-200 text-slate-500'
              }`}>
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-600 shrink-0" />
                <span>Verified Facility Listing • Silawar, Shamli</span>
              </div>
            </div>

            {/* Transport & Dock Info */}
            <div className={`p-6 border rounded-2xl space-y-2 ${
              isDark ? 'bg-[#0e131d]/90 border-[#d4af37]/20 text-slate-300' : 'bg-white border-sky-200 text-slate-700 shadow-sm'
            }`}>
              <h4 className={`font-bold text-xs uppercase tracking-wider flex items-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <Navigation className={`w-4 h-4 mr-2 ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`} />
                Transport & Truck Access
              </h4>
              <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Vihaan Cold Storage features wide paved approaches and hydraulic unloading ramps. Broad driveways allow easy maneuvering for 10-wheeler trucks, container trailers, and tractor trolleys.
              </p>
            </div>

          </div>

          {/* Right Map Embed & FAQ Section */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Location Map Preview Card */}
            <div className={`p-6 border rounded-2xl shadow-xl ${
              isDark ? 'bg-[#0e131d]/90 border-[#d4af37]/20' : 'bg-white border-sky-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>Map & Route View</h3>
                  <p className={`text-xs font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Silawar Road, District Shamli, U.P.</p>
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

              <div className={`border rounded-xl overflow-hidden h-[280px] ${isDark ? 'border-[#d4af37]/20' : 'border-sky-200'}`}>
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
            <div className={`p-6 sm:p-8 border rounded-2xl shadow-xl ${
              isDark ? 'bg-[#0e131d]/90 border-[#d4af37]/20' : 'bg-white border-sky-200'
            }`}>
              <div className={`flex items-center space-x-2 text-[10px] uppercase tracking-wider mb-2 font-bold ${
                isDark ? 'text-[#e5c158]' : 'text-emerald-700'
              }`}>
                <HelpCircle className={`w-4 h-4 ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`} />
                <span>Frequently Asked Questions</span>
              </div>
              <h3 className={`text-xl font-serif mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Common Questions from Farmers & Traders</h3>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <div
                    key={idx}
                    className={`border rounded-xl overflow-hidden ${
                      isDark ? 'border-[#d4af37]/15 bg-[#0a0d14]' : 'border-sky-200 bg-sky-50/50'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className={`w-full text-left p-4 font-serif text-xs sm:text-sm flex items-center justify-between transition-colors ${
                        isDark 
                          ? 'bg-[#0a0d14] hover:bg-[#0e131d] text-white' 
                          : 'bg-white hover:bg-sky-50 text-slate-900'
                      }`}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'} ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === idx && (
                      <div className={`p-4 text-xs leading-relaxed border-t font-light ${
                        isDark 
                          ? 'bg-[#080b11] text-slate-300 border-[#d4af37]/15' 
                          : 'bg-slate-50 text-slate-700 border-sky-100'
                      }`}>
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



