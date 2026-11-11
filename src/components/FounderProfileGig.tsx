import React from 'react';
import { Heart, Sparkles, CheckCircle2, MessageCircle, Mail, Phone, MapPin, Award, Shield, Users, Flame, Star, Calendar } from 'lucide-react';

interface FounderProfileGigProps {
  onOpenDonate: (causeId?: string, amountPKR?: number) => void;
  onOpenPamphlet: () => void;
}

export const FounderProfileGig: React.FC<FounderProfileGigProps> = ({ onOpenDonate, onOpenPamphlet }) => {
  return (
    <section id="founder-profile" className="py-20 bg-gradient-to-b from-white to-[#FAF7F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#EAF4EE] text-[#1B6B4A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
            <Star className="w-4 h-4 text-[#E0A526] fill-[#E0A526]" />
            <span>Humanitarian Leadership &amp; Profile Gig</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#124B33] tracking-tight mb-3">
            Meet Sawera Ejaz &amp; Her Team
          </h2>
          <p className="font-urdu text-lg sm:text-xl text-[#1B6B4A] mb-3">
            سویرا اعجاز — خلوص، دیانت اور ذاتی نگرانی کے ساتھ عوامی خدمت
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Afiyat Welfare is a grassroots volunteer initiative driven not by corporate bureaucracy, but by personal empathy, hands-on field presence, and 100% direct public trust.
          </p>
        </div>

        {/* The Main Profile Gig Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Top Banner / Cover */}
          <div className="relative h-44 sm:h-56 bg-gradient-to-r from-[#124B33] via-[#1B6B4A] to-[#16563B] p-6 sm:p-8 flex flex-col justify-between text-white">
            <div className="flex justify-between items-start">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-[#E0A526] border border-white/20 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Community Verified Humanitarian
              </span>
              <button
                type="button"
                onClick={onOpenPamphlet}
                className="px-4 py-1.5 rounded-full bg-[#E0A526] hover:bg-[#C58E1A] text-slate-900 text-xs font-bold shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Official Pamphlet (پمفلٹ)</span>
              </button>
            </div>
            
            <div>
              <p className="font-urdu text-base sm:text-lg text-emerald-200">
                “انسانیت کی خدمت ہی میری زندگی کا اصل مقصد ہے”
              </p>
            </div>
          </div>

          {/* Profile Header Details */}
          <div className="px-6 sm:px-10 pb-10">
            <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between -mt-16 sm:-mt-20 gap-6 mb-8 pb-8 border-b border-slate-100">
              
              {/* Avatar + Main Details */}
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 text-center sm:text-left">
                <div className="relative">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-emerald-900 ring-4 ring-[#E0A526]/50">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                      alt="Sawera Ejaz - Founder Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-emerald-600 text-white p-2 rounded-xl shadow border-2 border-white">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                      Sawera Ejaz
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-[#1B6B4A]">
                      Active Field Lead
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#E0A526] mb-1">
                    Founder &amp; Social Welfare Activist, Afiyat Welfare
                  </p>
                  <p className="text-xs text-slate-500 flex items-center justify-center sm:justify-start gap-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" /> Lahore &amp; Across Pakistan
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-400" /> 120+ Active Volunteers
                    </span>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://wa.me/923008492041?text=Salam%20Sawera%20Ejaz%20sahiba,%20I%20would%20like%20to%20support%20Afiyat%20Welfare."
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Sawera</span>
                </a>

                <button
                  type="button"
                  onClick={() => onOpenDonate('winter-relief-2026', 1500)}
                  className="px-5 py-2.5 rounded-xl bg-[#E0A526] hover:bg-[#C58E1A] text-slate-900 text-xs font-bold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <Heart className="w-4 h-4 text-red-700 fill-red-700" />
                  <span>Donate Warmth (₨ 1,500)</span>
                </button>
              </div>

            </div>

            {/* Profile Grid: Bio + Core Services (Gigs) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Personal Story & Pledge */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                    About the Founder &amp; Initiative
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    Sawera Ejaz started <strong>Afiyat Welfare</strong> as an independent, community-backed humanitarian initiative with a single guiding promise: <em>every single rupee donated must directly reach the freezing child or sick patient with zero leakage.</em>
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    By keeping the organization completely volunteer-driven and non-bureaucratic, Sawera personally travels to distribution sites in Swat, Kalam, Tharparkar, and remote Punjab hamlets to oversee the packing and doorstep handover of relief supplies.
                  </p>
                </div>

                {/* 3 Core Principles */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#FAF7F0] border border-amber-200/60">
                    <div className="font-bold text-xs text-[#124B33] mb-1">1. دیانت داری (Honesty)</div>
                    <p className="text-[11px] text-slate-600">
                      100% donation integrity with direct video and photo receipts for donors.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF7F0] border border-amber-200/60">
                    <div className="font-bold text-xs text-[#124B33] mb-1">2. عوامی رسائی (Affordability)</div>
                    <p className="text-[11px] text-slate-600">
                      Lowered donation rates so anyone can donate from ₨ 500 upwards.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF7F0] border border-amber-200/60">
                    <div className="font-bold text-xs text-[#124B33] mb-1">3. ذاتی نگرانی (On-Ground)</div>
                    <p className="text-[11px] text-slate-600">
                      Sawera and volunteers personally distribute kits in snow and desert terrain.
                    </p>
                  </div>
                </div>

                {/* Direct Verification Contact */}
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-slate-700 space-y-1.5">
                  <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-[#1B6B4A]" />
                    Direct Founder Contact &amp; Accounts:
                  </div>
                  <p>• Mobile &amp; WhatsApp: <strong>+92 300 8492041</strong></p>
                  <p>• Official Email: <strong>ejazch630@gmail.com</strong></p>
                  <p>• JazzCash &amp; EasyPaisa: <strong>0300-8492041 (Sawera Ejaz)</strong></p>
                </div>
              </div>

              {/* Right Column: Active Volunteer Gigs / Programs Managed */}
              <div className="lg:col-span-5 space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Active Humanitarian Gigs Managed
                </h4>

                <div className="p-4 rounded-2xl border border-slate-200 hover:border-emerald-500 bg-white shadow-sm transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 text-xs">Winter Survival Pack Drives</span>
                    <span className="text-[11px] font-bold text-emerald-700">From ₨ 500</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mb-2">
                    Door-to-door distribution of warm jackets, quilts, and shoes in Swat &amp; mountain valleys.
                  </p>
                  <button
                    type="button"
                    onClick={() => onOpenDonate('winter-relief-2026', 1500)}
                    className="text-[11px] font-bold text-[#1B6B4A] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Sponsor 1 Jacket (₨ 1,500) &rarr;</span>
                  </button>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 hover:border-emerald-500 bg-white shadow-sm transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 text-xs">Free Medical &amp; Eye Camps</span>
                    <span className="text-[11px] font-bold text-emerald-700">From ₨ 500</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mb-2">
                    Free prescription medicines, child nutrition, and vision care in drought areas.
                  </p>
                  <button
                    type="button"
                    onClick={() => onOpenDonate('free-healthcare-camps', 500)}
                    className="text-[11px] font-bold text-[#1B6B4A] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Sponsor Patient Medicines (₨ 500) &rarr;</span>
                  </button>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 hover:border-emerald-500 bg-white shadow-sm transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 text-xs">Child School Sponsorship</span>
                    <span className="text-[11px] font-bold text-emerald-700">₨ 1,200 / Month</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mb-2">
                    School bags, books, uniforms, and fee support for out-of-school girls and boys.
                  </p>
                  <button
                    type="button"
                    onClick={() => onOpenDonate('child-education-sponsorship', 1200)}
                    className="text-[11px] font-bold text-[#1B6B4A] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Sponsor a Student (₨ 1,200) &rarr;</span>
                  </button>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 hover:border-emerald-500 bg-white shadow-sm transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 text-xs">Widow Grocery &amp; Ration Baskets</span>
                    <span className="text-[11px] font-bold text-emerald-700">From ₨ 1,200</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mb-2">
                    Flour (Atta), cooking oil, lentils, and sugar grocery baskets for needy families.
                  </p>
                  <button
                    type="button"
                    onClick={() => onOpenDonate('ration-food-security', 1800)}
                    className="text-[11px] font-bold text-[#1B6B4A] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Send Ration Pack (₨ 1,800) &rarr;</span>
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
