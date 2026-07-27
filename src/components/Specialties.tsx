import React, { useState } from 'react';
import { CROP_SPECIALTIES } from '../data/mockData';
import { Thermometer, Droplets, Clock, ChevronRight, Layers } from 'lucide-react';

interface SpecialtiesProps {
  onNavigate: (sectionId: string) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState(CROP_SPECIALTIES[0].id);

  const selectedCrop = CROP_SPECIALTIES.find(c => c.id === activeTab) || CROP_SPECIALTIES[0];

  return (
    <section id="specialties" className="py-16 lg:py-24 bg-[#080b11] text-slate-300 border-b border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e5c158] mb-3">
            <Layers className="w-4 h-4 text-[#e5c158]" />
            <span>Crop Storage Specialties</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Specialized Cold Storage <span className="font-serif italic text-[#e5c158]">for Every Harvest</span>
          </h2>
          <p className="mt-4 text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            Custom micro-climate parameters tailored specifically for potatoes, high-yield seeds, and fresh vegetables.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CROP_SPECIALTIES.map((crop) => (
            <button
              key={crop.id}
              onClick={() => setActiveTab(crop.id)}
              className={`px-6 py-3 text-xs uppercase tracking-wider font-semibold rounded-xl transition-all ${
                activeTab === crop.id
                  ? 'bg-[#0c3825] text-white border border-emerald-500/50 shadow-lg'
                  : 'bg-[#0e131d]/80 text-slate-300 border border-[#d4af37]/20 hover:text-white hover:border-[#e5c158]/40'
              }`}
            >
              <span>{crop.title}</span>
            </button>
          ))}
        </div>

        {/* Active Crop Detail Showcase */}
        <div className="bg-[#0e131d]/80 backdrop-blur-md border border-[#d4af37]/20 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Image & Specs */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative border border-[#d4af37]/20 rounded-xl h-[280px] sm:h-[340px] overflow-hidden bg-[#080b11]">
                <img
                  src={selectedCrop.image}
                  alt={selectedCrop.title}
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-[#e5c158] text-black font-bold text-[10px] px-2.5 py-1 uppercase tracking-wider rounded">
                    Vihaan Precision Zone
                  </span>
                  <h4 className="text-white font-serif text-lg mt-1">{selectedCrop.title}</h4>
                </div>
              </div>

              {/* Climate Metric Cards */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-[#0a0d14] border border-[#d4af37]/15 rounded-xl">
                  <Thermometer className="w-4 h-4 mx-auto text-[#e5c158] mb-1" />
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Temp</p>
                  <p className="text-xs sm:text-sm font-serif italic text-white mt-0.5">{selectedCrop.tempRange}</p>
                </div>

                <div className="p-3 bg-[#0a0d14] border border-[#d4af37]/15 rounded-xl">
                  <Droplets className="w-4 h-4 mx-auto text-[#e5c158] mb-1" />
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Humidity</p>
                  <p className="text-xs sm:text-sm font-serif italic text-white mt-0.5">{selectedCrop.humidity}</p>
                </div>

                <div className="p-3 bg-[#0a0d14] border border-[#d4af37]/15 rounded-xl">
                  <Clock className="w-4 h-4 mx-auto text-[#e5c158] mb-1" />
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Shelf Life</p>
                  <p className="text-xs sm:text-sm font-serif italic text-white mt-0.5">{selectedCrop.shelfLife}</p>
                </div>
              </div>

            </div>

            {/* Right Crop Description & Features */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-[10px] font-bold text-[#e5c158] uppercase tracking-widest">{selectedCrop.subtitle}</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white mt-1 tracking-tight">{selectedCrop.title}</h3>
                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {selectedCrop.description}
                </p>
              </div>

              {/* Supported Varieties */}
              <div>
                <h4 className="text-[10px] uppercase tracking-wider text-slate-400 font-medium mb-2">Popular Varieties Stored:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCrop.varieties.map((v, i) => (
                    <span key={i} className="px-3 py-1 bg-[#0a0d14] border border-[#d4af37]/20 text-slate-200 text-xs font-medium rounded-lg">
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Storage Safeguards */}
              <div>
                <h4 className="text-[10px] uppercase tracking-wider text-slate-400 font-medium mb-3">Key Storage Safeguards:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedCrop.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e5c158] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('inquire')}
                  className="inline-flex items-center px-6 py-3.5 bg-[#0c3825] hover:bg-[#124d35] text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-emerald-500/30 transition-all shadow-md"
                >
                  Inquire for {selectedCrop.title} Storage
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};


