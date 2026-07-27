import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { Image as ImageIcon, ZoomIn, X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const { isDark } = useTheme();

  return (
    <section id="gallery" className={`py-16 lg:py-24 border-b transition-colors duration-300 ${
      isDark ? 'bg-[#080b11] text-slate-300 border-[#d4af37]/15' : 'bg-slate-50 text-slate-700 border-sky-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] mb-3 ${
            isDark ? 'text-[#e5c158]' : 'text-emerald-700'
          }`}>
            <ImageIcon className={`w-4 h-4 ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`} />
            <span>Facility Gallery</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-serif tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Explore Vihaan <span className={`font-serif italic ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`}>Facility Architecture</span>
          </h2>
          <p className={`mt-4 font-light text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            High-capacity climate chambers, pristine hygiene standards, and spacious truck loading bays in Silawar, Shamli.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg(img.src)}
              className={`group relative rounded-2xl cursor-pointer h-[280px] sm:h-[360px] overflow-hidden shadow-xl border ${
                isDark ? 'bg-[#0e131d] border-[#d4af37]/20' : 'bg-white border-sky-200'
              }`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${
                    isDark ? 'text-[#e5c158] bg-[#0a0d14]/90 border-[#d4af37]/30' : 'text-emerald-800 bg-white/95 border-sky-200'
                  }`}>
                    {img.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif text-white mt-2 tracking-tight">
                    {img.title}
                  </h3>
                </div>

                <div className={`p-3 rounded-xl transition-colors border ${
                  isDark ? 'bg-[#0a0d14]/90 border-[#d4af37]/30 text-[#e5c158] group-hover:border-[#e5c158]' : 'bg-white/95 border-sky-200 text-emerald-800 group-hover:border-emerald-400'
                }`}>
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImg && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className={`relative max-w-5xl w-full border rounded-2xl p-2 overflow-hidden shadow-2xl ${
              isDark ? 'bg-[#0a0d14] border-[#d4af37]/30' : 'bg-slate-900 border-sky-300'
            }`}>
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 p-3 bg-slate-900/90 border border-[#e5c158] text-[#e5c158] rounded-xl transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImg}
                alt="Enlarged Facility View"
                className="w-full max-h-[80vh] object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};



