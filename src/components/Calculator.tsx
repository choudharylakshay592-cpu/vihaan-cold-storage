import React, { useState } from 'react';
import { Calculator as CalcIcon, MessageSquare, ArrowRight } from 'lucide-react';

interface CalculatorProps {
  onNavigate: (sectionId: string, prefillData?: any) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onNavigate }) => {
  const [cropType, setCropType] = useState('Potatoes');
  const [bagCount, setBagCount] = useState(500);
  const [durationMonths, setDurationMonths] = useState(6);
  const [bagWeightKg, setBagWeightKg] = useState(50); // 50kg standard bag

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
    <section id="calculator" className="py-16 lg:py-24 bg-[#0a0e17] text-slate-300 border-b border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e5c158] mb-3">
            <CalcIcon className="w-4 h-4 text-[#e5c158]" />
            <span>Interactive Storage Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Calculate Storage <span className="font-serif italic text-[#e5c158]">Volume & Parameters</span>
          </h2>
          <p className="mt-4 text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            Estimate bag counts, total quintals/tons, and stack spacing for your potato, seed, or vegetable harvest.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#0e131d]/90 backdrop-blur-md border border-[#d4af37]/20 rounded-2xl p-6 sm:p-10 shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Input Controls */}
            <div className="space-y-6">
              
              {/* Crop Select */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-2">
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
                          : 'bg-[#0a0d14] text-slate-300 border border-[#d4af37]/15 hover:text-white'
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
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                    2. Estimated Quantity (Bags)
                  </label>
                  <span className="text-xs font-mono font-bold text-[#e5c158] bg-[#0a0d14] px-2.5 py-1 border border-[#d4af37]/20 rounded-lg">
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
                  className="w-full accent-[#e5c158] cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>50 Bags</span>
                  <span>2,500 Bags</span>
                  <span>5,000 Bags</span>
                </div>
              </div>

              {/* Bag Weight Select */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-2">
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
                          : 'bg-[#0a0d14] text-slate-300 border border-[#d4af37]/15 hover:text-white'
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
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                    4. Intended Storage Duration
                  </label>
                  <span className="text-xs font-mono font-bold text-[#e5c158] bg-[#0a0d14] px-2.5 py-1 border border-[#d4af37]/20 rounded-lg">
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
                  className="w-full accent-[#e5c158] cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>1 Month</span>
                  <span>5 Months</span>
                  <span>10 Months</span>
                </div>
              </div>

            </div>

            {/* Results Output Panel */}
            <div className="bg-[#0a0d14] text-white p-6 flex flex-col justify-between border border-[#d4af37]/20 rounded-xl">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#e5c158]">
                  Estimated Summary
                </span>
                <h3 className="text-lg font-serif text-white mt-1 tracking-tight">
                  Vihaan Cold Storage Specification
                </h3>

                <div className="mt-6 space-y-3">
                  
                  <div className="p-3 bg-[#0e131d] border border-[#d4af37]/15 rounded-xl flex justify-between items-center">
                    <span className="text-xs text-slate-300 font-light">Total Weight (Quintals)</span>
                    <span className="text-base font-serif italic text-[#e5c158] font-semibold">{totalQuintals} Quintals</span>
                  </div>

                  <div className="p-3 bg-[#0e131d] border border-[#d4af37]/15 rounded-xl flex justify-between items-center">
                    <span className="text-xs text-slate-300 font-light">Total Weight (Metric Tons)</span>
                    <span className="text-base font-serif italic text-white font-semibold">{totalMetricTons.toFixed(1)} MT</span>
                  </div>

                  <div className="p-3 bg-[#0e131d] border border-[#d4af37]/15 rounded-xl flex justify-between items-center">
                    <span className="text-xs text-slate-300 font-light">Approx Racking Footprint</span>
                    <span className="text-xs font-mono text-slate-300">~{estimatedRackingSpaceSqFt} sq. ft</span>
                  </div>

                  <div className="p-3 bg-[#0e131d] border border-[#d4af37]/15 rounded-xl flex justify-between items-center">
                    <span className="text-xs text-slate-300 font-light">Recommended Chamber Temp</span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      {cropType === 'Potatoes' ? '2.5°C – 3.8°C' : cropType === 'Crop Seeds' ? '4.0°C – 6.0°C' : '1.0°C – 4.0°C'}
                    </span>
                  </div>

                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3 pt-4 border-t border-[#d4af37]/15">
                <button
                  onClick={handleBookNow}
                  className="w-full py-3.5 bg-[#0c3825] hover:bg-[#124d35] text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-emerald-500/30 transition-all flex items-center justify-center space-x-2 shadow-md"
                >
                  <span>Book Chamber with This Estimate</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </button>

                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full py-3.5 bg-transparent text-[#e5c158] font-semibold text-xs uppercase tracking-wider border border-[#e5c158]/40 rounded-xl hover:bg-[#e5c158]/10 transition-all flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#e5c158]" />
                  <span>WhatsApp Quote to Proprietor</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


