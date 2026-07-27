import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/mockData';
import { Image as ImageIcon, ZoomIn, X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-[#080b11] text-slate-300 border-b border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e5c158] mb-3">
            <ImageIcon className="w-4 h-4 text-[#e5c158]" />
            <span>Facility Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Explore Vihaan <span className="font-serif italic text-[#e5c158]">Facility Architecture</span>
          </h2>
          <p className="mt-4 text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            High-capacity climate chambers, pristine hygiene standards, and spacious truck loading bays in Silawar, Shamli.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg(img.src)}
              className="group relative bg-[#0e131d] border border-[#d4af37]/20 rounded-2xl cursor-pointer h-[280px] sm:h-[360px] overflow-hidden shadow-xl"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#e5c158] bg-[#0a0d14]/90 border border-[#d4af37]/30 rounded-lg px-2.5 py-1">
                    {img.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif text-white mt-2 tracking-tight">
                    {img.title}
                  </h3>
                </div>

                <div className="p-3 bg-[#0a0d14]/90 border border-[#d4af37]/30 rounded-xl text-[#e5c158] group-hover:border-[#e5c158] transition-colors">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImg && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full bg-[#0a0d14] border border-[#d4af37]/30 rounded-2xl p-2 overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 p-3 bg-[#0e131d] border border-[#d4af37]/40 hover:border-[#e5c158] text-[#e5c158] rounded-xl transition-colors z-10"
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


