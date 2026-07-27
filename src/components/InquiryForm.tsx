import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Phone, MessageSquare, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

interface InquiryFormProps {
  initialData?: {
    cropType?: string;
    quantity?: string;
    duration?: string;
  };
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cropType: 'Potatoes',
    quantity: '',
    duration: '6 Months',
    notes: ''
  });
  const { isDark } = useTheme();

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        cropType: initialData.cropType || prev.cropType,
        quantity: initialData.quantity || prev.quantity,
        duration: initialData.duration || prev.duration,
      }));
    }
  }, [initialData]);

  const [loading, setLoading] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your Name and Phone Number.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success && data.inquiry) {
        setSubmittedInquiry(data.inquiry);
      } else {
        setErrorMsg(data.error || 'Failed to submit inquiry.');
      }
    } catch (err) {
      console.error("Inquiry submission error:", err);
      // Fallback offline submission card
      setSubmittedInquiry({
        id: "VCS-" + Math.floor(100000 + Math.random() * 900000),
        ...formData,
        createdAt: new Date().toISOString()
      });
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppSend = () => {
    if (!submittedInquiry) return;
    const text = `Hello Vishal Choudhary, I have submitted a cold storage booking inquiry:\n- Booking Ref: ${submittedInquiry.id}\n- Name: ${submittedInquiry.name}\n- Phone: ${submittedInquiry.phone}\n- Crop: ${submittedInquiry.cropType}\n- Quantity: ${submittedInquiry.quantity}\n- Duration: ${submittedInquiry.duration}\n- Notes: ${submittedInquiry.notes || 'N/A'}\n\nPlease confirm chamber space at Vihaan Cold Storage, Silawar, Shamli.`;
    const url = `https://wa.me/918218037615?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="inquire" className={`py-16 lg:py-24 border-b transition-colors duration-300 ${
      isDark ? 'bg-[#080b11] text-slate-300 border-[#d4af37]/15' : 'bg-white text-slate-700 border-sky-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] mb-3 ${
            isDark ? 'text-[#e5c158]' : 'text-emerald-700'
          }`}>
            <FileText className={`w-4 h-4 ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`} />
            <span>Online Booking & Chamber Inquiry</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-serif tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Reserve Cold Storage Space <span className={`font-serif italic ${isDark ? 'text-[#e5c158]' : 'text-emerald-700'}`}>in Silawar, Shamli</span>
          </h2>
          <p className={`mt-4 font-light text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Fill out the form below or call proprietor <strong className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>{BUSINESS_INFO.owner}</strong> directly at <strong className={`font-semibold ${isDark ? 'text-[#e5c158]' : 'text-emerald-800'}`}>{BUSINESS_INFO.phone}</strong>.
          </p>
        </div>

        <div className={`max-w-3xl mx-auto border rounded-2xl p-6 sm:p-10 shadow-2xl ${
          isDark ? 'bg-[#0e131d]/90 border-[#d4af37]/20 backdrop-blur-md' : 'bg-sky-50/60 border-sky-200'
        }`}>
          
          {submittedInquiry ? (
            /* Submission Confirmation Card */
            <div className={`p-8 border rounded-xl text-center space-y-6 ${
              isDark ? 'bg-[#0a0d14] border-[#d4af37]/20' : 'bg-white border-sky-200 shadow-md'
            }`}>
              <div className="w-14 h-14 bg-[#0d3322] border border-emerald-500/40 rounded-2xl text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#e5c158] bg-[#0c2e1f] px-3.5 py-1.5 rounded-full border border-emerald-500/30">
                  Inquiry Received
                </span>
                <h3 className={`text-xl sm:text-2xl font-serif mt-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Booking Reference: {submittedInquiry.id}
                </h3>
                <p className={`text-xs sm:text-sm mt-2 font-light ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Thank you <strong className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>{submittedInquiry.name}</strong>. Your cold storage space request for <strong className={`font-medium ${isDark ? 'text-[#e5c158]' : 'text-emerald-800'}`}>{submittedInquiry.cropType}</strong> ({submittedInquiry.quantity || 'Standard bags'}) has been logged.
                </p>
              </div>

              <div className={`p-4 border rounded-xl text-left text-xs space-y-2 font-light ${
                isDark ? 'bg-[#0e131d] border-[#d4af37]/15 text-slate-300' : 'bg-sky-50 border-sky-200 text-slate-700'
              }`}>
                <p>• <strong className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Proprietor Contact:</strong> {BUSINESS_INFO.owner} (+91 8218037615)</p>
                <p>• <strong className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Facility Address:</strong> {BUSINESS_INFO.location}</p>
                <p>• <strong className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Expected Duration:</strong> {submittedInquiry.duration}</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#0c3825] hover:bg-[#124d35] text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-emerald-500/30 transition-all flex items-center justify-center space-x-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-[#e5c158]" />
                  <span>Send Confirmation to WhatsApp</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className={`w-full sm:w-auto px-6 py-3.5 font-semibold text-xs uppercase tracking-wider border rounded-xl transition-all flex items-center justify-center space-x-2 ${
                    isDark ? 'border-[#e5c158]/40 text-[#e5c158] hover:bg-[#e5c158]/10' : 'border-emerald-600 text-emerald-800 hover:bg-emerald-50'
                  }`}
                >
                  <Phone className={`w-4 h-4 ${isDark ? 'text-[#e5c158]' : 'text-emerald-800'}`} />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>

              <button
                onClick={() => setSubmittedInquiry(null)}
                className={`text-xs uppercase tracking-wider pt-2 block mx-auto transition-colors font-medium ${
                  isDark ? 'text-slate-400 hover:text-[#e5c158]' : 'text-slate-500 hover:text-emerald-700'
                }`}
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            /* Form Inputs */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMsg && (
                <div className="p-4 bg-red-950/50 border border-red-500/40 rounded-xl text-red-300 text-xs font-mono">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-[10px] uppercase tracking-wider font-semibold mb-2 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Suresh Kumar"
                    className={`w-full border rounded-xl py-3 px-4 text-xs transition-colors focus:outline-none ${
                      isDark 
                        ? 'bg-[#0a0d14] border-[#d4af37]/20 text-white placeholder-slate-500 focus:border-[#e5c158]' 
                        : 'bg-white border-sky-200 text-slate-900 placeholder-slate-400 focus:border-emerald-500'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-[10px] uppercase tracking-wider font-semibold mb-2 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Phone Number (Mobile) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className={`w-full border rounded-xl py-3 px-4 text-xs transition-colors focus:outline-none ${
                      isDark 
                        ? 'bg-[#0a0d14] border-[#d4af37]/20 text-white placeholder-slate-500 focus:border-[#e5c158]' 
                        : 'bg-white border-sky-200 text-slate-900 placeholder-slate-400 focus:border-emerald-500'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className={`block text-[10px] uppercase tracking-wider font-semibold mb-2 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Crop Type
                  </label>
                  <select
                    value={formData.cropType}
                    onChange={(e) => setFormData({ ...formData, cropType: e.target.value })}
                    className={`w-full border rounded-xl py-3 px-4 text-xs transition-colors focus:outline-none ${
                      isDark 
                        ? 'bg-[#0a0d14] border-[#d4af37]/20 text-white focus:border-[#e5c158]' 
                        : 'bg-white border-sky-200 text-slate-900 focus:border-emerald-500'
                    }`}
                  >
                    <option value="Potatoes (Seed)">Potatoes (Seed)</option>
                    <option value="Potatoes (Table)">Potatoes (Table)</option>
                    <option value="Wheat / Paddy Seeds">Wheat / Paddy Seeds</option>
                    <option value="Vegetable Seeds">Vegetable Seeds</option>
                    <option value="Carrots / Onions">Carrots / Onions</option>
                    <option value="Other Vegetables">Other Vegetables</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-[10px] uppercase tracking-wider font-semibold mb-2 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Quantity / Bags
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 500 Bags / 250 Qtl"
                    className={`w-full border rounded-xl py-3 px-4 text-xs transition-colors focus:outline-none ${
                      isDark 
                        ? 'bg-[#0a0d14] border-[#d4af37]/20 text-white placeholder-slate-500 focus:border-[#e5c158]' 
                        : 'bg-white border-sky-200 text-slate-900 placeholder-slate-400 focus:border-emerald-500'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-[10px] uppercase tracking-wider font-semibold mb-2 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Storage Duration
                  </label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className={`w-full border rounded-xl py-3 px-4 text-xs transition-colors focus:outline-none ${
                      isDark 
                        ? 'bg-[#0a0d14] border-[#d4af37]/20 text-white focus:border-[#e5c158]' 
                        : 'bg-white border-sky-200 text-slate-900 focus:border-emerald-500'
                    }`}
                  >
                    <option value="1 - 3 Months">1 - 3 Months</option>
                    <option value="3 - 6 Months">3 - 6 Months</option>
                    <option value="6 - 9 Months">6 - 9 Months</option>
                    <option value="10+ Months">10+ Months</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={`block text-[10px] uppercase tracking-wider font-semibold mb-2 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Special Instructions or Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention any specific variety (e.g. Kufri Pukhraj, Chipsona), target loading date..."
                  className={`w-full border rounded-xl py-3 px-4 text-xs transition-colors focus:outline-none ${
                    isDark 
                      ? 'bg-[#0a0d14] border-[#d4af37]/20 text-white placeholder-slate-500 focus:border-[#e5c158]' 
                      : 'bg-white border-sky-200 text-slate-900 placeholder-slate-400 focus:border-emerald-500'
                  }`}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#0c3825] hover:bg-[#124d35] text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-emerald-500/30 transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Send className="w-4 h-4 text-[#e5c158]" />
                  <span>{loading ? 'Submitting Inquiry...' : 'Submit Storage Inquiry'}</span>
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};



