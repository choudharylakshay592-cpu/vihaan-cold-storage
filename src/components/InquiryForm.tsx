import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Phone, MessageSquare, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

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
    <section id="inquire" className="py-16 lg:py-24 bg-[#080b11] text-slate-300 border-b border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e5c158] mb-3">
            <FileText className="w-4 h-4 text-[#e5c158]" />
            <span>Online Booking & Chamber Inquiry</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Reserve Cold Storage Space <span className="font-serif italic text-[#e5c158]">in Silawar, Shamli</span>
          </h2>
          <p className="mt-4 text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            Fill out the form below or call proprietor <strong className="text-white font-medium">{BUSINESS_INFO.owner}</strong> directly at <strong className="text-[#e5c158] font-semibold">{BUSINESS_INFO.phone}</strong>.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#0e131d]/90 backdrop-blur-md border border-[#d4af37]/20 rounded-2xl p-6 sm:p-10 shadow-2xl">
          
          {submittedInquiry ? (
            /* Submission Confirmation Card */
            <div className="bg-[#0a0d14] p-8 border border-[#d4af37]/20 rounded-xl text-center space-y-6">
              <div className="w-14 h-14 bg-[#0d3322] border border-emerald-500/40 rounded-2xl text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#e5c158] bg-[#0c2e1f] px-3.5 py-1.5 rounded-full border border-emerald-500/30">
                  Inquiry Received
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-white mt-4">
                  Booking Reference: {submittedInquiry.id}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 font-light">
                  Thank you <strong className="text-white font-medium">{submittedInquiry.name}</strong>. Your cold storage space request for <strong className="text-[#e5c158] font-medium">{submittedInquiry.cropType}</strong> ({submittedInquiry.quantity || 'Standard bags'}) has been logged.
                </p>
              </div>

              <div className="p-4 bg-[#0e131d] border border-[#d4af37]/15 rounded-xl text-left text-xs text-slate-300 space-y-2 font-light">
                <p>• <strong className="text-white font-medium">Proprietor Contact:</strong> {BUSINESS_INFO.owner} (+91 8218037615)</p>
                <p>• <strong className="text-white font-medium">Facility Address:</strong> {BUSINESS_INFO.location}</p>
                <p>• <strong className="text-white font-medium">Expected Duration:</strong> {submittedInquiry.duration}</p>
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
                  className="w-full sm:w-auto px-6 py-3.5 bg-transparent text-[#e5c158] font-semibold text-xs uppercase tracking-wider border border-[#e5c158]/40 rounded-xl hover:bg-[#e5c158]/10 transition-all flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-[#e5c158]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>

              <button
                onClick={() => setSubmittedInquiry(null)}
                className="text-xs uppercase tracking-wider text-slate-400 hover:text-[#e5c158] pt-2 block mx-auto transition-colors font-medium"
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
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Suresh Kumar"
                    className="w-full bg-[#0a0d14] border border-[#d4af37]/20 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#e5c158] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-2">
                    Phone Number (Mobile) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full bg-[#0a0d14] border border-[#d4af37]/20 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#e5c158] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-2">
                    Crop Type
                  </label>
                  <select
                    value={formData.cropType}
                    onChange={(e) => setFormData({ ...formData, cropType: e.target.value })}
                    className="w-full bg-[#0a0d14] border border-[#d4af37]/20 rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-[#e5c158] transition-colors"
                  >
                    <option value="Potatoes (Seed)" className="bg-[#0e131d] text-white">Potatoes (Seed)</option>
                    <option value="Potatoes (Table)" className="bg-[#0e131d] text-white">Potatoes (Table)</option>
                    <option value="Wheat / Paddy Seeds" className="bg-[#0e131d] text-white">Wheat / Paddy Seeds</option>
                    <option value="Vegetable Seeds" className="bg-[#0e131d] text-white">Vegetable Seeds</option>
                    <option value="Carrots / Onions" className="bg-[#0e131d] text-white">Carrots / Onions</option>
                    <option value="Other Vegetables" className="bg-[#0e131d] text-white">Other Vegetables</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-2">
                    Quantity / Bags
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 500 Bags / 250 Qtl"
                    className="w-full bg-[#0a0d14] border border-[#d4af37]/20 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#e5c158] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-2">
                    Storage Duration
                  </label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full bg-[#0a0d14] border border-[#d4af37]/20 rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-[#e5c158] transition-colors"
                  >
                    <option value="1 - 3 Months" className="bg-[#0e131d] text-white">1 - 3 Months</option>
                    <option value="3 - 6 Months" className="bg-[#0e131d] text-white">3 - 6 Months</option>
                    <option value="6 - 9 Months" className="bg-[#0e131d] text-white">6 - 9 Months</option>
                    <option value="10+ Months" className="bg-[#0e131d] text-white">10+ Months</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-2">
                  Special Instructions or Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention any specific variety (e.g. Kufri Pukhraj, Chipsona), target loading date..."
                  className="w-full bg-[#0a0d14] border border-[#d4af37]/20 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#e5c158] transition-colors"
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


