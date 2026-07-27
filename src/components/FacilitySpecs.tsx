import React from 'react';
import { FACILITY_SPECS } from '../data/mockData';
import { Thermometer, Wind, Droplets, Truck, Zap, Cpu as CpuIcon } from 'lucide-react';

export const FacilitySpecs: React.FC = () => {
  return (
    <section id="facility" className="py-16 lg:py-24 bg-[#0a0e17] text-white border-b border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e5c158] mb-3">
            <CpuIcon className="w-4 h-4 text-[#e5c158]" />
            <span>Infrastructure & Technology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white">
            State-of-the-Art <span className="font-serif italic text-[#e5c158]">Cold Preservation Engine</span>
          </h2>
          <p className="mt-4 text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            High-efficiency refrigeration, automated climate controllers, and robust 24x7 power infrastructure.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITY_SPECS.map((spec, index) => (
            <div
              key={index}
              className="bg-[#0e131d]/80 backdrop-blur-md border border-[#d4af37]/20 rounded-2xl p-6 flex flex-col justify-between hover:border-[#e5c158]/50 transition-all duration-300 hover:-translate-y-1 group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl border border-[#d4af37]/30 bg-[#0d3322] flex items-center justify-center text-[#e5c158] group-hover:border-[#e5c158] transition-colors shadow-inner">
                    {index === 0 && <Thermometer className="w-6 h-6 text-[#e5c158]" />}
                    {index === 1 && <Wind className="w-6 h-6 text-[#e5c158]" />}
                    {index === 2 && <Droplets className="w-6 h-6 text-[#e5c158]" />}
                    {index === 3 && <Truck className="w-6 h-6 text-[#e5c158]" />}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#0a0d14] text-[#e5c158] border border-[#d4af37]/20 rounded-lg">
                    {spec.highlight}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
                  {spec.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {spec.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d4af37]/15 text-[10px] uppercase tracking-wider text-slate-400 flex items-center justify-between font-medium">
                <span>System Status</span>
                <span className="text-emerald-400 font-bold">Verified 100%</span>
              </div>
            </div>
          ))}
        </div>

        {/* 24x7 Genset & Safety Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0c2e1f] to-[#081e14] border border-emerald-500/30 rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center space-x-4">
            <div className="p-3.5 bg-[#071710] border border-emerald-500/30 rounded-xl text-emerald-400 shrink-0">
              <Zap className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-lg font-serif text-white">24/7 Uninterrupted Industrial Power Infrastructure</h4>
              <p className="text-xs text-slate-300 mt-1 font-light">
                Zero temperature fluctuations during grid power failures via heavy duty diesel Gensets with automatic transfer switches.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <div className="px-5 py-3 bg-[#0a0d14]/80 border border-[#d4af37]/20 rounded-xl text-center">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Power Uptime</p>
              <p className="text-lg font-serif italic text-[#e5c158]">99.99%</p>
            </div>
            <div className="px-5 py-3 bg-[#0a0d14]/80 border border-[#d4af37]/20 rounded-xl text-center">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">CCTV Safety</p>
              <p className="text-lg font-serif italic text-[#e5c158]">24/7 Active</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


