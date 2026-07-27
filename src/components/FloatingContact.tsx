import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Mail, Phone, ChevronUp, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

export const FloatingContact: React.FC = () => {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(true);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const emailUrl = `mailto:${BUSINESS_INFO.email}?subject=Cold%20Storage%20Space%20Inquiry%20-%20Vihaan%20Cold%20Storage&body=Hello%20Vishal%20Choudhary,%0A%0AI%20am%20interested%20in%20reserving%20cold%20storage%20space%20at%20Vihaan%20Cold%20Storage.%0A%0APlease%20provide%20rates%20and%20availability.%0A%0AThanks!`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-3 pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="flex flex-col items-end space-y-3 pointer-events-auto"
          >
            {/* WhatsApp Floating Button */}
            <div className="relative flex items-center group">
              <AnimatePresence>
                {activeTooltip === 'whatsapp' && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className={`mr-3 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap shadow-xl border ${
                      isDark 
                        ? 'bg-[#0e131d] border-emerald-500/40 text-emerald-400' 
                        : 'bg-white border-emerald-300 text-emerald-800 shadow-lg'
                    }`}
                  >
                    Chat on WhatsApp
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setActiveTooltip('whatsapp')}
                onMouseLeave={() => setActiveTooltip(null)}
                className="w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-tr from-emerald-600 to-green-500 text-white rounded-full shadow-2xl flex items-center justify-center border-2 border-emerald-400/40 cursor-pointer relative"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
              >
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
                </span>
                <MessageSquare className="w-6 h-6 fill-white/20" />
              </motion.a>
            </div>

            {/* Gmail Floating Button */}
            <div className="relative flex items-center group">
              <AnimatePresence>
                {activeTooltip === 'gmail' && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className={`mr-3 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap shadow-xl border ${
                      isDark 
                        ? 'bg-[#0e131d] border-red-500/40 text-red-400' 
                        : 'bg-white border-red-200 text-red-700 shadow-lg'
                    }`}
                  >
                    Send Email ({BUSINESS_INFO.email})
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.a
                href={emailUrl}
                whileHover={{ scale: 1.12, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setActiveTooltip('gmail')}
                onMouseLeave={() => setActiveTooltip(null)}
                className="w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-tr from-red-600 to-rose-500 text-white rounded-full shadow-2xl flex items-center justify-center border-2 border-red-400/40 cursor-pointer"
                aria-label={`Email ${BUSINESS_INFO.email}`}
                title={`Email us at ${BUSINESS_INFO.email}`}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>

            {/* Call Floating Button */}
            <div className="relative flex items-center group">
              <AnimatePresence>
                {activeTooltip === 'phone' && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className={`mr-3 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap shadow-xl border ${
                      isDark 
                        ? 'bg-[#0e131d] border-[#d4af37]/40 text-[#e5c158]' 
                        : 'bg-white border-sky-200 text-sky-800 shadow-lg'
                    }`}
                  >
                    Call Direct (+91 {BUSINESS_INFO.phone})
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.a
                href={`tel:${BUSINESS_INFO.phone}`}
                whileHover={{ scale: 1.12, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setActiveTooltip('phone')}
                onMouseLeave={() => setActiveTooltip(null)}
                className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full shadow-2xl flex items-center justify-center border-2 cursor-pointer ${
                  isDark 
                    ? 'bg-[#0c3825] text-[#e5c158] border-[#e5c158]/50' 
                    : 'bg-slate-900 text-amber-400 border-slate-700'
                }`}
                aria-label={`Call ${BUSINESS_INFO.phone}`}
                title={`Call ${BUSINESS_INFO.owner}`}
              >
                <Phone className="w-6 h-6 animate-pulse" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Floating Widget Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`pointer-events-auto w-10 h-10 rounded-full shadow-xl flex items-center justify-center border transition-all cursor-pointer ${
          isDark 
            ? 'bg-[#0e131d] border-[#d4af37]/30 text-slate-300 hover:text-white' 
            : 'bg-white border-slate-300 text-slate-600 hover:text-slate-900'
        }`}
        aria-label={isOpen ? "Minimize Contact Options" : "Show Contact Options"}
        title={isOpen ? "Minimize Contact Buttons" : "Show Quick Contact Buttons"}
      >
        {isOpen ? <X className="w-4 h-4" /> : <ChevronUp className="w-5 h-5" />}
      </motion.button>
    </div>
  );
};
