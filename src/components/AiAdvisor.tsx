import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Bot, Send, RefreshCw, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const AiAdvisor: React.FC = () => {
  const [selectedCrop, setSelectedCrop] = useState('Seed Potatoes');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<string | null>(null);
  const { isDark } = useTheme();

  const sampleQuestions = [
    "What is the ideal temperature to store Kufri Pukhraj seed potatoes?",
    "How does Vihaan Cold Storage prevent weight loss and rotting in carrots?",
    "What is the recommended relative humidity (RH) for hybrid wheat seeds?",
    "How to prevent sweetening/sugar conversion in table potatoes during long storage?"
  ];

  const handleAskAi = async (customQ?: string) => {
    const queryToAsk = customQ || question || `What are the best cold storage conditions and preservation practices for ${selectedCrop}?`;
    setLoading(true);
    setAdvice(null);

    try {
      const res = await fetch('/api/ai/advise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ crop: selectedCrop, question: queryToAsk })
      });
      const data = await res.json();
      setAdvice(data.advice || 'Cold storage guidance available.');
    } catch (err) {
      console.error("AI Advisor error:", err);
      setAdvice(`For optimal preservation of ${selectedCrop}, Vihaan Cold Storage in Silawar, Shamli maintains automated multi-chamber temperature control, high relative humidity (85%-95% RH), and 24x7 power backup. Contact Vishal Choudhary at 8218037615.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="ai-advisor"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`py-16 lg:py-24 border-b transition-colors duration-300 ${
        isDark ? 'bg-[#080b11] text-slate-300 border-[#d4af37]/15' : 'bg-white text-slate-700 border-sky-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] mb-3 ${
            isDark ? 'text-[#e5c158]' : 'text-emerald-700'
          }`}>
            <Sparkles className={`w-4 h-4 ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`} />
            <span>AI Agricultural Intelligence</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-serif tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Ask Vihaan AI: <span className={`font-serif italic ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`}>Crop Preservation Advisor</span>
          </h2>
          <p className={`mt-4 font-light text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Powered by Gemini AI, get instant science-backed storage parameter recommendations for your potatoes, seeds, and vegetables.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto p-6 sm:p-10 border rounded-2xl shadow-2xl ${
          isDark ? 'bg-[#0e131d]/90 border-[#d4af37]/20 text-white backdrop-blur-md' : 'bg-sky-50/60 border-sky-200 text-slate-800'
        }`}>
          
          {/* Top Controls */}
          <div className="space-y-6">
            
            {/* Crop Selector */}
            <div>
              <label className={`block text-[10px] uppercase tracking-wider font-semibold mb-2 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Select Crop / Commodity
              </label>
              <div className="flex flex-wrap gap-2">
                {['Seed Potatoes', 'Table Potatoes (Chipsona/LR)', 'Wheat/Paddy Seeds', 'Carrots & Root Veggies', 'Onions & Garlic', 'Green Peas'].map((crop) => (
                  <button
                    key={crop}
                    onClick={() => setSelectedCrop(crop)}
                    className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
                      selectedCrop === crop
                        ? 'bg-[#0c3825] text-white border border-emerald-500/50 shadow-md'
                        : isDark
                          ? 'bg-[#0a0d14] text-slate-300 border border-[#d4af37]/15 hover:text-white'
                          : 'bg-white text-slate-700 border border-sky-200 hover:bg-sky-100'
                    }`}
                  >
                    {crop}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Sample Questions */}
            <div>
              <label className={`block text-[10px] uppercase tracking-wider font-semibold mb-2 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Or click a frequent farmer question:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sampleQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setQuestion(q);
                      handleAskAi(q);
                    }}
                    className={`text-left p-3.5 border rounded-xl text-xs transition-colors line-clamp-2 font-light ${
                      isDark
                        ? 'bg-[#0a0d14] border-[#d4af37]/15 hover:border-[#e5c158]/40 text-slate-300'
                        : 'bg-white border-sky-200 hover:border-emerald-300 text-slate-700 shadow-sm'
                    }`}
                  >
                    "{q}"
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div className="relative">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder={`Ask any question about storing ${selectedCrop}...`}
                className={`w-full border rounded-xl py-4 pl-4 pr-32 text-xs transition-colors focus:outline-none ${
                  isDark
                    ? 'bg-[#0a0d14] border-[#d4af37]/20 text-white placeholder-slate-500 focus:border-[#e5c158]'
                    : 'bg-white border-sky-200 text-slate-900 placeholder-slate-400 focus:border-emerald-500'
                }`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleAskAi();
                }}
              />
              <button
                onClick={() => handleAskAi()}
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 px-5 bg-[#0c3825] hover:bg-[#124d35] text-white font-semibold text-xs uppercase tracking-wider rounded-lg border border-emerald-500/30 transition-all flex items-center space-x-1.5 disabled:opacity-50 shadow-md"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#e5c158]" />
                    <span>Analyzing</span>
                  </>
                ) : (
                  <>
                    <span>Ask AI</span>
                    <Send className="w-3.5 h-3.5 text-[#e5c158]" />
                  </>
                )}
              </button>
            </div>

          </div>

          {/* AI Response Display */}
          <AnimatePresence mode="wait">
            {(advice || loading) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mt-8 pt-6 border-t ${isDark ? 'border-[#d4af37]/15' : 'border-sky-200'}`}
              >
                <div className={`flex items-center space-x-2 text-xs font-bold uppercase tracking-wider mb-3 ${
                  isDark ? 'text-[#e5c158]' : 'text-emerald-800'
                }`}>
                  <Bot className={`w-4 h-4 ${isDark ? 'text-[#e5c158]' : 'text-emerald-800'}`} />
                  <span>Vihaan AI Storage Recommendation:</span>
                </div>

                {loading ? (
                  <div className={`p-6 border rounded-xl text-xs flex items-center space-x-3 ${
                    isDark ? 'bg-[#0a0d14] border-[#d4af37]/15 text-slate-300' : 'bg-white border-sky-200 text-slate-600'
                  }`}>
                    <RefreshCw className={`w-4 h-4 animate-spin ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`} />
                    <span>Consulting agronomy models for {selectedCrop}...</span>
                  </div>
                ) : (
                  <div className={`p-6 border rounded-xl text-xs sm:text-sm leading-relaxed whitespace-pre-line font-light ${
                    isDark ? 'bg-[#0a0d14] border-[#d4af37]/15 text-slate-200' : 'bg-white border-sky-200 text-slate-800 shadow-sm'
                  }`}>
                    {advice}
                  </div>
                )}

                <p className={`text-[10px] uppercase tracking-wider mt-3 flex items-center ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  Recommendations aligned with Vihaan Cold Storage micro-climate technology in Silawar, Shamli.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </motion.section>
  );
};




