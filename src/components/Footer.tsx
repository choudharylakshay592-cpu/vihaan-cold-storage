import React from 'react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { Snowflake, Phone, MapPin, MessageSquare, Mail, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { isDark } = useTheme();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`text-xs border-t transition-colors duration-300 ${
        isDark ? 'bg-[#05070c] text-slate-400 border-[#d4af37]/20' : 'bg-slate-900 text-slate-300 border-sky-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
                className={`w-9 h-9 border rounded-xl flex items-center justify-center shadow-md ${
                  isDark ? 'bg-[#0e131d] border-[#d4af37]/30 text-[#e5c158]' : 'bg-slate-800 border-sky-400 text-emerald-400'
                }`}
              >
                <Snowflake className="w-4 h-4 stroke-[1.5]" />
              </motion.div>
              <div>
                <span className="text-sm font-serif tracking-widest text-white uppercase block">VIHAAN COLD STORAGE</span>
                <p className={`text-[10px] uppercase tracking-wider font-medium ${isDark ? 'text-[#e5c158]' : 'text-emerald-400'}`}>Silawar, District Shamli (U.P.)</p>
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
            <h4 className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-[#e5c158]' : 'text-emerald-400'}`}>Quick Navigation</h4>
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
                    className="hover:text-[#e5c158] transition-colors text-xs text-slate-300 cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-[#e5c158]' : 'text-emerald-400'}`}>Contact & Location</h4>
            
            <div className={`p-4 border rounded-xl space-y-2 text-xs ${
              isDark ? 'bg-[#0e131d] border-[#d4af37]/20' : 'bg-slate-800/80 border-slate-700'
            }`}>
              <p className="text-white font-medium">Owner: {BUSINESS_INFO.owner}</p>
              <p className="text-slate-300 font-light">
                <MapPin className={`w-3.5 h-3.5 inline mr-1 ${isDark ? 'text-[#e5c158]' : 'text-emerald-400'}`} />
                {BUSINESS_INFO.fullAddress}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <motion.a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-3.5 py-1.5 bg-[#0c3825] hover:bg-[#124d35] text-white font-semibold text-[10px] uppercase tracking-wider rounded-lg border border-emerald-500/30 transition-all flex items-center shadow"
                >
                  <Phone className="w-3 h-3 mr-1 text-[#e5c158]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </motion.a>
                <motion.a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`px-3.5 py-1.5 rounded-lg font-semibold text-[10px] uppercase tracking-wider transition-all flex items-center border ${
                    isDark ? 'bg-[#0a0d14] text-[#e5c158] border-[#d4af37]/30 hover:bg-[#d4af37]/10' : 'bg-slate-700 text-white border-slate-600 hover:bg-slate-600'
                  }`}
                >
                  <MessageSquare className="w-3 h-3 mr-1 text-emerald-400" />
                  <span>WhatsApp</span>
                </motion.a>
                <motion.a
                  href={`mailto:${BUSINESS_INFO.email}?subject=Inquiry%20-%20Vihaan%20Cold%20Storage`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`px-3.5 py-1.5 rounded-lg font-semibold text-[10px] uppercase tracking-wider transition-all flex items-center border ${
                    isDark ? 'bg-[#0a0d14] text-red-400 border-red-500/30 hover:bg-red-500/10' : 'bg-red-800 text-white border-red-700 hover:bg-red-700'
                  }`}
                >
                  <Mail className="w-3 h-3 mr-1 text-red-400" />
                  <span>Email Us</span>
                </motion.a>
              </div>
            </div>

          </div>

        </div>

        <div className={`mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between text-[10px] uppercase tracking-wider gap-4 ${
          isDark ? 'border-[#d4af37]/15 text-slate-400' : 'border-slate-800 text-slate-400'
        }`}>
          <p>© {new Date().getFullYear()} Vihaan Cold Storage, Silawar, District Shamli. All rights reserved.</p>
          <p className="flex items-center">
            Owner: <strong className={`ml-1 ${isDark ? 'text-[#e5c158]' : 'text-emerald-400'}`}>{BUSINESS_INFO.owner}</strong> (+91 {BUSINESS_INFO.phone})
          </p>
        </div>

      </div>
    </motion.footer>
  );
};

;


