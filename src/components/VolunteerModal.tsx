import React, { useState } from 'react';
import { X, Heart, CheckCircle2, UserCheck, ShieldCheck, RefreshCw } from 'lucide-react';
import { VolunteerApplication } from '../types';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<VolunteerApplication>({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    profession: '',
    availability: 'Weekends',
    interests: [],
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const interestOptions = [
    'Medical & Health Camps (Doctors/Nurses)',
    'Winter Warmth Field Distribution',
    'Education & After-School Tutoring',
    'Food Ration Packaging & Logistics',
    'Social Media, Photography & Design',
    'Campus & Youth Ambassador',
  ];

  const handleInterestToggle = (opt: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(opt);
      return {
        ...prev,
        interests: exists ? prev.interests.filter((i) => i !== opt) : [...prev.interests, opt],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full my-6 max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 z-20 bg-gradient-to-r from-[#124B33] to-[#1B6B4A] text-white px-6 py-4 flex items-center justify-between rounded-t-3xl shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-400/20 text-[#E0A526] flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold leading-tight">
                Join Afiyat Welfare Volunteer Corps
              </h2>
              <p className="text-[11px] text-emerald-200">
                Lend your hands, heart, and skills to serve vulnerable families
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-6 animate-in fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-[#1B6B4A] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-[#1B6B4A]" />
              </div>
              <h3 className="text-2xl font-black text-[#124B33] mb-2">Welcome to the Afiyat Family!</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Our volunteer operations team led by Sawera Ejaz has received your details. We will add you to our official regional WhatsApp volunteer dispatch group for the next humanitarian camp in <strong>{formData.city || 'your area'}</strong>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-[#1B6B4A] hover:bg-[#124B33] text-white text-xs font-bold transition-all"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Haris Khan / Ayesha"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">City / Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="Lahore, Islamabad, Swat, etc."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Profession / Studies</label>
                  <input
                    type="text"
                    placeholder="Physician, Student, Engineer, etc."
                    value={formData.profession}
                    onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Availability</label>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                  >
                    <option value="Weekends">Weekends Only</option>
                    <option value="Full-time">Full-Time Humanitarian</option>
                    <option value="Flexible">Flexible / On-Call for Emergency</option>
                    <option value="Virtual">Virtual / Remote Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold text-xs mb-2">
                  Where would you like to contribute?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {interestOptions.map((opt) => {
                    const checked = formData.interests.includes(opt);
                    return (
                      <label
                        key={opt}
                        className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                          checked
                            ? 'border-[#1B6B4A] bg-emerald-50 text-[#124B33] font-semibold'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => handleInterestToggle(opt)}
                          className="rounded text-[#1B6B4A] focus:ring-[#1B6B4A]"
                        />
                        <span className="truncate">{opt}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold text-xs mb-1">
                  Any previous volunteer experience or special skills? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Share a short note..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.fullName.trim() || !formData.email.trim()}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#1B6B4A] hover:bg-[#124B33] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Submitting Registration...</span>
                    </>
                  ) : (
                    <>
                      <Heart className="w-4 h-4 text-[#E0A526] fill-[#E0A526]" />
                      <span>Submit Volunteer Application</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
