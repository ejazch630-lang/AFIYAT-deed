import React from 'react';
import { Quote, Heart, Award, CheckCircle2, Mail, Phone, Users, FileText } from 'lucide-react';

interface FounderMessageProps {
  onOpenPamphlet?: () => void;
}

export const FounderMessage: React.FC<FounderMessageProps> = ({ onOpenPamphlet }) => {
  return (
    <section id="founder" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="bg-gradient-to-br from-[#124B33] via-[#1B6B4A] to-[#16563B] rounded-3xl text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left: Founder Profile Card */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <div className="relative inline-block mx-auto lg:mx-0 mb-6">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-[#E0A526] shadow-2xl bg-emerald-950 mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                    alt="Sawera Ejaz - Founder of Afiyat Welfare"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-2 bg-[#E0A526] text-slate-900 p-2.5 rounded-2xl shadow-lg border-2 border-white">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Sawera Ejaz
              </h3>
              <p className="text-[#E0A526] font-semibold text-sm mb-1">
                Founder &amp; Grassroots Social Activist
              </p>
              <p className="font-urdu text-sm text-emerald-200 mb-6">
                بانی و سماجی خدمت گار — عافیت ویلفیئر
              </p>

              {/* Founder Credentials & Direct Contact */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-xs text-emerald-100 space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#E0A526] shrink-0" />
                  <span>Grassroots Volunteer Humanitarian Movement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#E0A526] shrink-0" />
                  <a href="mailto:ejazch630@gmail.com" className="hover:text-white underline">
                    ejazch630@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#E0A526] shrink-0" />
                  <span>Direct Mobile: +92 300 8492041</span>
                </div>
              </div>

              {onOpenPamphlet && (
                <button
                  type="button"
                  onClick={onOpenPamphlet}
                  className="mt-4 w-full py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download / Share Pamphlet (پمفلٹ)</span>
                </button>
              )}
            </div>

            {/* Right: Message & 100% Direct Delivery Guarantee */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#E0A526] uppercase tracking-wider mb-4 border border-white/20">
                <Quote className="w-3.5 h-3.5" />
                <span>Personal Word from Sawera Ejaz</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-6">
                “Every life deserves warmth in winter, dignity in sickness, and a book in their hands.”
              </h2>

              <div className="space-y-4 text-emerald-50 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  Afiyat Welfare was born out of a simple, urgent conviction: when severe snowstorms hit Kalam and Swat, vulnerable children and elderly widows cannot wait for slow bureaucracies. They need a warm jacket, heavy quilt, and hot nourishment immediately.
                </p>
                <p>
                  We have kept our initiative strictly grassroots, volunteer-led, and independent. We have also <strong>reduced our suggested donation rates</strong> so that anyone—a student with ₨ 500 or a family sponsoring a ₨ 1,500 jacket—can become a lifeline for someone in need.
                </p>
              </div>

              {/* Founder's Personal Direct Delivery Pledge Box */}
              <div className="mt-8 bg-black/25 backdrop-blur-md rounded-2xl p-5 border border-white/15">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#E0A526]/20 text-[#E0A526] rounded-xl shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#E0A526]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">
                      Our 100% Direct Relief Pledge:
                    </h4>
                    <p className="text-xs text-emerald-100 leading-relaxed">
                      “I personally verify the purchases, oversee the packing of each winter bundle, and travel with our volunteer team into the snow and mud homes. Every single rupee donated goes directly into tangible relief items. You will receive photo and video proof of the distribution.”
                    </p>
                    <div className="mt-2 text-right">
                      <span className="font-serif italic text-xs text-[#E0A526]">— Sawera Ejaz</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
