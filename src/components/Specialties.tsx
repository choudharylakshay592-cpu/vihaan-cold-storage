import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CROP_SPECIALTIES } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { Thermometer, Droplets, Clock, ChevronRight, Layers } from 'lucide-react';

interface SpecialtiesProps {
  onNavigate: (sectionId: string) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState(CROP_SPECIALTIES[0].id);
  const { isDark } = useTheme();

  const selectedCrop = CROP_SPECIALTIES.find(c => c.id === activeTab) || CROP_SPECIALTIES[0];

  return (
    <motion.section
      id="specialties"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`py-16 lg:py-24 border-b transition-colors duration-300 ${
        isDark ? 'bg-[#080b11] text-slate-300 border-[#d4af37]/15' : 'bg-white text-slate-700 border-sky-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] mb-3 ${
            isDark ? 'text-[#e5c158]' : 'text-emerald-700'
          }`}>
            <Layers className={`w-4 h-4 ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`} />
            <span>Crop Storage Specialties</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-serif tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Specialized Cold Storage <span className={`font-serif italic ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`}>for Every Harvest</span>
          </h2>
          <p className={`mt-4 font-light text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Custom micro-climate parameters tailored specifically for potatoes, high-yield seeds, and fresh vegetables.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CROP_SPECIALTIES.map((crop) => (
            <motion.button
              key={crop.id}
              onClick={() => setActiveTab(crop.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 text-xs uppercase tracking-wider font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === crop.id
                  ? 'bg-[#0c3825] text-white border border-emerald-500/50 shadow-lg'
                  : isDark
                    ? 'bg-[#0e131d]/80 text-slate-300 border border-[#d4af37]/20 hover:text-white hover:border-[#e5c158]/40'
                    : 'bg-sky-50 text-slate-700 border border-sky-200 hover:bg-sky-100 hover:text-slate-900'
              }`}
            >
              <span>{crop.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Active Crop Detail Showcase with Smooth AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className={`border rounded-2xl p-6 sm:p-10 shadow-2xl ${
              isDark ? 'bg-[#0e131d]/80 border-[#d4af37]/20 backdrop-blur-md' : 'bg-sky-50/60 border-sky-200'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Image & Specs */}
              <div className="lg:col-span-5 space-y-6">
                <div className={`relative border rounded-xl h-[280px] sm:h-[340px] overflow-hidden ${
                  isDark ? 'border-[#d4af37]/20 bg-[#080b11]' : 'border-sky-200 bg-white'
                }`}>
                  <img
                    src={selectedCrop.image}
                    alt={selectedCrop.title}
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isDark ? 'from-[#080b11] via-transparent to-transparent' : 'from-slate-900/60 via-transparent to-transparent'
                  }`} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-[#e5c158] text-black font-bold text-[10px] px-2.5 py-1 uppercase tracking-wider rounded">
                      Vihaan Precision Zone
                    </span>
                    <h4 className="text-white font-serif text-lg mt-1">{selectedCrop.title}</h4>
                  </div>
                </div>

                {/* Climate Metric Cards */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`p-3 border rounded-xl ${
                      isDark ? 'bg-[#0a0d14] border-[#d4af37]/15' : 'bg-white border-sky-200 shadow-sm'
                    }`}
                  >
                    <Thermometer className={`w-4 h-4 mx-auto mb-1 ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`} />
                    <p className={`text-[10px] uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Temp</p>
                    <p className={`text-xs sm:text-sm font-serif italic mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{selectedCrop.tempRange}</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`p-3 border rounded-xl ${
                      isDark ? 'bg-[#0a0d14] border-[#d4af37]/15' : 'bg-white border-sky-200 shadow-sm'
                    }`}
                  >
                    <Droplets className={`w-4 h-4 mx-auto mb-1 ${isDark ? 'text-[#e5c158]' : 'text-sky-600'}`} />
                    <p className={`text-[10px] uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Humidity</p>
                    <p className={`text-xs sm:text-sm font-serif italic mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{selectedCrop.humidity}</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`p-3 border rounded-xl ${
                      isDark ? 'bg-[#0a0d14] border-[#d4af37]/15' : 'bg-white border-sky-200 shadow-sm'
                    }`}
                  >
                    <Clock className={`w-4 h-4 mx-auto mb-1 ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`} />
                    <p className={`text-[10px] uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Shelf Life</p>
                    <p className={`text-xs sm:text-sm font-serif italic mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{selectedCrop.shelfLife}</p>
                  </motion.div>
                </div>

              </div>

              {/* Right Crop Description & Features */}
              <div className="lg:col-span-7 space-y-6">
                
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`}>{selectedCrop.subtitle}</span>
                  <h3 className={`text-2xl sm:text-3xl font-serif mt-1 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{selectedCrop.title}</h3>
                  <p className={`mt-3 text-sm sm:text-base leading-relaxed font-light ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {selectedCrop.description}
                  </p>
                </div>

                {/* Supported Varieties */}
                <div>
                  <h4 className={`text-[10px] uppercase tracking-wider font-medium mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Popular Varieties Stored:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCrop.varieties.map((v, i) => (
                      <span key={i} className={`px-3 py-1 border text-xs font-medium rounded-lg ${
                        isDark ? 'bg-[#0a0d14] border-[#d4af37]/20 text-slate-200' : 'bg-white border-sky-200 text-slate-800 shadow-sm'
                      }`}>
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Storage Safeguards */}
                <div>
                  <h4 className={`text-[10px] uppercase tracking-wider font-medium mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Key Storage Safeguards:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedCrop.keyFeatures.map((feat, i) => (
                      <div key={i} className={`flex items-center space-x-2 text-xs ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${isDark ? 'bg-[#e5c158]' : 'bg-emerald-600'}`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <motion.button
                    onClick={() => onNavigate('inquire')}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center px-6 py-3.5 bg-[#0c3825] hover:bg-[#124d35] text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-emerald-500/30 transition-all shadow-md cursor-pointer"
                  >
                    Inquire for {selectedCrop.title} Storage
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </motion.section>
  );
};




