import React from 'react';
import { motion } from 'motion/react';
import { FACILITY_SPECS } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { Thermometer, Wind, Droplets, Truck, Zap, Cpu as CpuIcon } from 'lucide-react';

export const FacilitySpecs: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <motion.section
      id="facility"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`py-16 lg:py-24 border-b transition-colors duration-300 ${
        isDark ? 'bg-[#0a0e17] text-white border-[#d4af37]/15' : 'bg-slate-50 text-slate-800 border-sky-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] mb-3 ${
            isDark ? 'text-[#e5c158]' : 'text-emerald-700'
          }`}>
            <CpuIcon className={`w-4 h-4 ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`} />
            <span>Infrastructure & Technology</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-serif tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            State-of-the-Art <span className={`font-serif italic ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`}>Cold Preservation Engine</span>
          </h2>
          <p className={`mt-4 font-light text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            High-efficiency refrigeration, automated climate controllers, and robust 24x7 power infrastructure.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITY_SPECS.map((spec, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group shadow-lg cursor-pointer ${
                isDark 
                  ? 'bg-[#0e131d]/80 border-[#d4af37]/20 hover:border-[#e5c158]/50 backdrop-blur-md' 
                  : 'bg-white border-sky-100 hover:border-emerald-300 hover:shadow-xl'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-colors shadow-inner ${
                    isDark 
                      ? 'border-[#d4af37]/30 bg-[#0d3322] text-[#e5c158] group-hover:border-[#e5c158]' 
                      : 'border-emerald-200 bg-emerald-50 text-emerald-700 group-hover:border-emerald-400'
                  }`}>
                    {index === 0 && <Thermometer className="w-6 h-6" />}
                    {index === 1 && <Wind className="w-6 h-6" />}
                    {index === 2 && <Droplets className="w-6 h-6" />}
                    {index === 3 && <Truck className="w-6 h-6" />}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border rounded-lg ${
                    isDark ? 'bg-[#0a0d14] text-[#e5c158] border-[#d4af37]/20' : 'bg-sky-50 text-sky-900 border-sky-200'
                  }`}>
                    {spec.highlight}
                  </span>
                </div>

                <h3 className={`text-base font-semibold mb-2 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {spec.title}
                </h3>
                <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {spec.description}
                </p>
              </div>

              <div className={`mt-6 pt-4 border-t text-[10px] uppercase tracking-wider flex items-center justify-between font-medium ${
                isDark ? 'border-[#d4af37]/15 text-slate-400' : 'border-sky-100 text-slate-500'
              }`}>
                <span>System Status</span>
                <span className="text-emerald-500 font-bold">Verified 100%</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 24x7 Genset & Safety Banner */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className={`mt-12 border rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl ${
            isDark
              ? 'bg-gradient-to-r from-[#0c2e1f] to-[#081e14] border-emerald-500/30 text-white'
              : 'bg-gradient-to-r from-emerald-800 to-teal-900 border-emerald-700 text-white'
          }`}
        >
          <div className="flex items-center space-x-4">
            <div className="p-3.5 bg-[#071710] border border-emerald-500/30 rounded-xl text-emerald-400 shrink-0">
              <Zap className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-lg font-serif text-white">24/7 Uninterrupted Industrial Power Infrastructure</h4>
              <p className="text-xs text-slate-200 mt-1 font-light">
                Zero temperature fluctuations during grid power failures via heavy duty diesel Gensets with automatic transfer switches.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <div className="px-5 py-3 bg-[#0a0d14]/80 border border-[#d4af37]/20 rounded-xl text-center">
              <p className="text-[10px] uppercase tracking-wider text-slate-300 font-medium">Power Uptime</p>
              <p className="text-lg font-serif italic text-[#e5c158]">99.99%</p>
            </div>
            <div className="px-5 py-3 bg-[#0a0d14]/80 border border-[#d4af37]/20 rounded-xl text-center">
              <p className="text-[10px] uppercase tracking-wider text-slate-300 font-medium">CCTV Safety</p>
              <p className="text-lg font-serif italic text-[#e5c158]">24/7 Active</p>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};




