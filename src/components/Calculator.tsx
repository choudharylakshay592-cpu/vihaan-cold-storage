import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator as CalcIcon, MessageSquare, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface CalculatorProps {
  onNavigate: (sectionId: string, prefillData?: any) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onNavigate }) => {
  const [cropType, setCropType] = useState('Potatoes');
  const [bagCount, setBagCount] = useState(500);
  const [durationMonths, setDurationMonths] = useState(6);
  const [bagWeightKg, setBagWeightKg] = useState(50); // 50kg standard bag
  const { isDark } = useTheme();

  // Calculated Metrics
  const totalQuintals = (bagCount * bagWeightKg) / 100;
  const totalMetricTons = totalQuintals / 10;
  
  // Approximate space estimate (each bag ~ 1.8 sq ft stacked efficiently in racks)
  const estimatedRackingSpaceSqFt = Math.round(bagCount * 1.8);

  const handleWhatsAppQuote = () => {
    const text = `Hello Vishal Choudhary, I calculated my cold storage requirements on the website:\n- Crop: ${cropType}\n- Bags: ${bagCount} (${bagWeightKg}kg bags)\n- Total Weight: ${totalQuintals} Quintals (${totalMetricTons} MT)\n- Duration: ${durationMonths} Months\n\nPlease let me know chamber availability and pricing at Vihaan Cold Storage, Silawar, Shamli.`;
    const url = `https://wa.me/918218037615?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleBookNow = () => {
    onNavigate('inquire', {
      cropType,
      quantity: `${bagCount} bags (${totalQuintals} Quintals)`,
      duration: `${durationMonths} Months`,
    });
  };

  return (
    <motion.section
      id="calculator"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`py-16 lg:py-24 border-b transition-colors duration-300 ${
        isDark ? 'bg-[#0a0e17] text-slate-300 border-[#d4af37]/15' : 'bg-slate-50 text-slate-700 border-sky-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] mb-3 ${
            isDark ? 'text-[#e5c158]' : 'text-emerald-700'
          }`}>
            <CalcIcon className={`w-4 h-4 ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`} />
            <span>Interactive Storage Estimator</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-serif tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Calculate Storage <span className={`font-serif italic ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`}>Volume & Parameters</span>
          </h2>
          <p className={`mt-4 font-light text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Estimate bag counts, total quintals/tons, and stack spacing for your potato, seed, or vegetable harvest.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto border rounded-2xl p-6 sm:p-10 shadow-2xl ${
          isDark ? 'bg-[#0e131d]/90 border-[#d4af37]/20 backdrop-blur-md' : 'bg-white border-sky-200'
        }`}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Input Controls */}
            <div className="space-y-6">
              
              {/* Crop Select */}
              <div>
                <label className={`block text-[10px] uppercase tracking-wider font-semibold mb-2 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  1. Select Crop / Commodity
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Potatoes', 'Crop Seeds', 'Vegetables'].map((item) => (
                    <button
                      key={item}
                      onClick={() => setCropType(item)}
                      className={`py-3 px-2 text-xs uppercase tracking-wider font-semibold rounded-xl transition-all ${
                        cropType === item
                          ? 'bg-[#0c3825] text-white border border-emerald-500/50 shadow-md'
                          : isDark
                            ? 'bg-[#0a0d14] text-slate-300 border border-[#d4af37]/15 hover:text-white'
                            : 'bg-sky-50 text-slate-700 border border-sky-200 hover:bg-sky-100'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className={`text-[10px] uppercase tracking-wider font-semibold ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    2. Estimated Quantity (Bags)
                  </label>
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 border rounded-lg ${
                    isDark ? 'text-[#e5c158] bg-[#0a0d14] border-[#d4af37]/20' : 'text-emerald-800 bg-sky-50 border-sky-200'
                  }`}>
                    {bagCount} Bags
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="5000"
                  step="50"
                  value={bagCount}
                  onChange={(e) => setBagCount(Number(e.target.value))}
                  className={`w-full accent-[#e5c158] cursor-pointer h-1.5 rounded-lg ${
                    isDark ? 'bg-slate-800' : 'bg-slate-200'
                  }`}
                />
                <div className={`flex justify-between text-[10px] font-mono mt-1 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <span>50 Bags</span>
                  <span>2,500 Bags</span>
                  <span>5,000 Bags</span>
                </div>
              </div>

              {/* Bag Weight Select */}
              <div>
                <label className={`block text-[10px] uppercase tracking-wider font-semibold mb-2 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  3. Standard Bag Weight
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[40, 50, 60].map((wt) => (
                    <button
                      key={wt}
                      onClick={() => setBagWeightKg(wt)}
                      className={`py-2.5 px-3 text-xs uppercase tracking-wider font-semibold rounded-xl transition-all ${
                        bagWeightKg === wt
                          ? 'bg-[#0c3825] text-white border border-emerald-500/50 shadow-md'
                          : isDark
                            ? 'bg-[#0a0d14] text-slate-300 border border-[#d4af37]/15 hover:text-white'
                            : 'bg-sky-50 text-slate-700 border border-sky-200 hover:bg-sky-100'
                      }`}
                    >
                      {wt} Kg / Bag
                    </button>
                  ))}
                </div>
              </div>

              {/* Storage Duration Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className={`text-[10px] uppercase tracking-wider font-semibold ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    4. Intended Storage Duration
                  </label>
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 border rounded-lg ${
                    isDark ? 'text-[#e5c158] bg-[#0a0d14] border-[#d4af37]/20' : 'text-emerald-800 bg-sky-50 border-sky-200'
                  }`}>
                    {durationMonths} Months
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value))}
                  className={`w-full accent-[#e5c158] cursor-pointer h-1.5 rounded-lg ${
                    isDark ? 'bg-slate-800' : 'bg-slate-200'
                  }`}
                />
                <div className={`flex justify-between text-[10px] font-mono mt-1 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <span>1 Month</span>
                  <span>5 Months</span>
                  <span>10 Months</span>
                </div>
              </div>

            </div>

            {/* Results Output Panel */}
            <div className={`p-6 flex flex-col justify-between border rounded-xl ${
              isDark ? 'bg-[#0a0d14] text-white border-[#d4af37]/20' : 'bg-slate-900 text-white border-sky-200'
            }`}>
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#e5c158]">
                  Estimated Summary
                </span>
                <h3 className="text-lg font-serif text-white mt-1 tracking-tight">
                  Vihaan Cold Storage Specification
                </h3>

                <div className="mt-6 space-y-3">
                  
                  <div className={`p-3 border rounded-xl flex justify-between items-center ${
                    isDark ? 'bg-[#0e131d] border-[#d4af37]/15' : 'bg-slate-800 border-slate-700'
                  }`}>
                    <span className="text-xs text-slate-300 font-light">Total Weight (Quintals)</span>
                    <span className="text-base font-serif italic text-[#e5c158] font-semibold">{totalQuintals} Quintals</span>
                  </div>

                  <div className={`p-3 border rounded-xl flex justify-between items-center ${
                    isDark ? 'bg-[#0e131d] border-[#d4af37]/15' : 'bg-slate-800 border-slate-700'
                  }`}>
                    <span className="text-xs text-slate-300 font-light">Total Weight (Metric Tons)</span>
                    <span className="text-base font-serif italic text-white font-semibold">{totalMetricTons.toFixed(1)} MT</span>
                  </div>

                  <div className={`p-3 border rounded-xl flex justify-between items-center ${
                    isDark ? 'bg-[#0e131d] border-[#d4af37]/15' : 'bg-slate-800 border-slate-700'
                  }`}>
                    <span className="text-xs text-slate-300 font-light">Approx Racking Footprint</span>
                    <span className="text-xs font-mono text-slate-300">~{estimatedRackingSpaceSqFt} sq. ft</span>
                  </div>

                  <div className={`p-3 border rounded-xl flex justify-between items-center ${
                    isDark ? 'bg-[#0e131d] border-[#d4af37]/15' : 'bg-slate-800 border-slate-700'
                  }`}>
                    <span className="text-xs text-slate-300 font-light">Recommended Chamber Temp</span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      {cropType === 'Potatoes' ? '2.5°C – 3.8°C' : cropType === 'Crop Seeds' ? '4.0°C – 6.0°C' : '1.0°C – 4.0°C'}
                    </span>
                  </div>

                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3 pt-4 border-t border-[#d4af37]/15">
                <motion.button
                  onClick={handleBookNow}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3.5 bg-[#0c3825] hover:bg-[#124d35] text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-emerald-500/30 transition-all flex items-center justify-center space-x-2 shadow-md cursor-pointer"
                >
                  <span>Book Chamber with This Estimate</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </motion.button>

                <motion.button
                  onClick={handleWhatsAppQuote}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3.5 bg-transparent text-[#e5c158] font-semibold text-xs uppercase tracking-wider border border-[#e5c158]/40 rounded-xl hover:bg-[#e5c158]/10 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#e5c158]" />
                  <span>WhatsApp Quote to Proprietor</span>
                </motion.button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </motion.section>
  );
};




