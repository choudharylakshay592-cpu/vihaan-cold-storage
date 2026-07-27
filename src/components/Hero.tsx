import React from 'react';
import { Phone, ShieldCheck, Thermometer, Box, Shield, Settings, ArrowRight, FileText, Building } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import heroDuskImg from '../assets/images/vihaan_hero_dusk_lighting_1785135637127.jpg';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { isDark } = useTheme();

  return (
    <section id="hero" className={`relative min-h-[90vh] flex flex-col justify-between overflow-hidden py-12 lg:py-20 transition-colors duration-300 ${
      isDark ? 'bg-[#070a0f] text-white' : 'bg-slate-900 text-white'
    }`}>
      
      {/* Background Image with Dusk Lighting & Subtle Motion Scale */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          src={heroDuskImg}
          alt="Vihaan Cold Storage Facility at Dusk in Silawar Shamli"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Dark Vignette & Gradient Overlays for Readability and Depth */}
        <div className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-r from-[#06080d]/95 via-[#06080d]/80 to-[#06080d]/30 md:to-transparent'
            : 'bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/30'
        }`} />
        <div className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-t from-[#070a0f] via-transparent to-[#06080d]/60'
            : 'bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70'
        }`} />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 lg:pt-16">
        <div className="max-w-2xl space-y-6">
          
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0e131d]/90 border border-[#d4af37]/30 text-xs font-bold tracking-[0.18em] text-[#e5c158] uppercase shadow-lg backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#e5c158] animate-pulse" />
            <span>VIHAAN COLD STORAGE • SILAWAR, SHAMLI (U.P.)</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white leading-[1.1] font-normal tracking-tight"
          >
            Preserving Freshness.<br />
            <span className="text-[#e5c158] font-serif italic font-normal">
              Powering Agriculture.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-xl"
          >
            Welcome to <strong className="text-white font-semibold">Vihaan Cold Storage</strong> — Modern Multi-Chamber Cold Preservation & Warehousing Solutions for Farmers, Seed Distributors & Agricultural Traders in <strong className="text-[#e5c158] font-medium">Silawar, District Shamli (U.P.)</strong>.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <motion.button
              onClick={() => onNavigate('inquire')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center px-7 py-3.5 font-medium text-sm text-white bg-[#0c3825] hover:bg-[#124d35] border border-[#21704c]/60 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:border-emerald-400 group cursor-pointer"
            >
              <FileText className="w-4 h-4 mr-2 text-emerald-400" />
              Get a Quote
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => onNavigate('facility')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center px-7 py-3.5 font-medium text-sm text-[#f0e6d2] border border-[#e5c158]/40 hover:bg-[#e5c158]/10 rounded-xl transition-all shadow-lg backdrop-blur-md group cursor-pointer"
            >
              <Building className="w-4 h-4 mr-2 text-[#e5c158]" />
              Explore Facility
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-[#e5c158]" />
            </motion.button>
          </motion.div>

        </div>
      </div>

      {/* 4 Floating Frosted Glass Cards at bottom of Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 lg:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-[#0a0e17]/75 backdrop-blur-xl border border-white/10 hover:border-[#e5c158]/40 rounded-2xl p-5 flex items-center space-x-4 shadow-2xl transition-all duration-300 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-[#0d3322] border border-emerald-500/30 flex items-center justify-center text-[#e5c158] shrink-0 group-hover:scale-105 transition-transform">
              <Thermometer className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">24/7</p>
              <p className="text-xs text-slate-300 font-light">Temperature Control</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-[#0a0e17]/75 backdrop-blur-xl border border-white/10 hover:border-[#e5c158]/40 rounded-2xl p-5 flex items-center space-x-4 shadow-2xl transition-all duration-300 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-[#0d3322] border border-emerald-500/30 flex items-center justify-center text-[#e5c158] shrink-0 group-hover:scale-105 transition-transform">
              <Box className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Large</p>
              <p className="text-xs text-slate-300 font-light">Storage Capacity</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-[#0a0e17]/75 backdrop-blur-xl border border-white/10 hover:border-[#e5c158]/40 rounded-2xl p-5 flex items-center space-x-4 shadow-2xl transition-all duration-300 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-[#0d3322] border border-emerald-500/30 flex items-center justify-center text-[#e5c158] shrink-0 group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Secure</p>
              <p className="text-xs text-slate-300 font-light">Logistics</p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-[#0a0e17]/75 backdrop-blur-xl border border-white/10 hover:border-[#e5c158]/40 rounded-2xl p-5 flex items-center space-x-4 shadow-2xl transition-all duration-300 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-[#0d3322] border border-emerald-500/30 flex items-center justify-center text-[#e5c158] shrink-0 group-hover:scale-105 transition-transform">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Reliable</p>
              <p className="text-xs text-slate-300 font-light">Operations</p>
            </div>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
};




