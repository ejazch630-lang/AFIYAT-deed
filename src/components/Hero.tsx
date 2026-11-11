import React from 'react';
import { Heart, Flame, ArrowRight, CheckCircle2, Calculator, Sparkles, FileText, Star } from 'lucide-react';
import { CurrencyCode } from '../types';
import { CURRENCY_RATES } from '../data/mockData';

interface HeroProps {
  currentCurrency: CurrencyCode;
  onOpenDonate: (causeId?: string, defaultAmount?: number) => void;
  onOpenZakat: () => void;
  onOpenPamphlet: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentCurrency, onOpenDonate, onOpenZakat, onOpenPamphlet }) => {
  const rate = CURRENCY_RATES[currentCurrency]?.rateAgainstPKR || 1;
  const symbol = CURRENCY_RATES[currentCurrency]?.symbol || '₨';
  
  // Format 1500 PKR to current currency (jacket)
  const jacketAmountInCurrency = Math.round(1500 * rate);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#124B33] via-[#1B6B4A] to-[#16563B] text-white pt-12 pb-20 lg:pt-16 lg:pb-24">
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
      
      {/* Islamic geometric pattern subtle overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, #124B33 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Community Volunteer Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-emerald-100 mb-6 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-[#E0A526] animate-ping" />
              <span>Winter Relief Drive 2026</span>
              <span className="text-[#E0A526]">•</span>
              <span className="text-white">Under Personal Leadership of Sawera Ejaz</span>
            </div>

            {/* Urdu Title Calligraphy */}
            <p className="font-urdu text-xl sm:text-2xl lg:text-3xl text-[#E0A526] mb-3 leading-relaxed tracking-normal font-bold">
              عافیت ویلفیئر — پسماندہ بچوں اور بزرگوں کے لیے امید، صحت اور تحفظ
            </p>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.18] mb-6">
              Protect Children From Freezing Winter. <br className="hidden sm:inline" />
              <span className="text-[#E0A526] underline decoration-amber-400/40 underline-offset-8">
                Warmth Starts at Just ₨ 500
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-emerald-50/90 max-w-2xl font-normal leading-relaxed mb-8 mx-auto lg:mx-0">
              Afiyat Welfare is a grassroots volunteer initiative spearheaded by Sawera Ejaz. We deliver warm jackets, quilts, and winter essentials directly to the doorsteps of freezing families in Swat, Kalam, Balochistan, and rural Punjab.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={() => onOpenDonate('winter-relief-2026', 1500)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-base text-slate-900 bg-[#E0A526] hover:bg-[#C58E1A] shadow-lg shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Flame className="w-5 h-5 text-red-700" />
                <span>Donate Warm Jacket ({symbol} {jacketAmountInCurrency.toLocaleString()})</span>
              </button>

              <button
                onClick={onOpenPamphlet}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-slate-900 bg-white hover:bg-slate-100 shadow transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#1B6B4A]" />
                <span>Official Pamphlet (پمفلٹ دیکھیں)</span>
              </button>

              <button
                onClick={onOpenZakat}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-semibold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-[#E0A526]" />
                <span>Calculate Zakat</span>
              </button>
            </div>

            {/* Trust checkmarks */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs text-emerald-100 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E0A526]" />
                100% Direct Delivery (Zero Admin Cuts)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E0A526]" />
                Affordable Rates (₨500, ₨1200, ₨1500)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E0A526]" />
                JazzCash &amp; EasyPaisa: 0300-8492041
              </span>
            </div>
          </div>

          {/* Right Column: Hero Interactive Relief Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-white text-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/40">
              
              {/* Badge & Urgency Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-amber-50 rounded-xl text-amber-600">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Winter Warmth Appeal</h3>
                    <p className="text-[11px] text-slate-500">Supervised directly by Sawera Ejaz</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-bold text-amber-800 bg-amber-100 rounded-full border border-amber-200">
                  Accessible Giving
                </span>
              </div>

              {/* Inside the Winter Kit Preview */}
              <div className="my-4 bg-[#FAF7F0] rounded-2xl p-4 border border-amber-200/60">
                <p className="text-xs font-bold text-[#124B33] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E0A526]" />
                  Affordable Winter Giving Options:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-white rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Cap, Gloves &amp; Socks</span>
                    <strong className="text-emerald-800 font-bold">₨ 500</strong>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Warm Quilt / Blanket</span>
                    <strong className="text-emerald-800 font-bold">₨ 1,200</strong>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Heavy Child Jacket</span>
                    <strong className="text-emerald-800 font-bold">₨ 1,500</strong>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-amber-300 bg-amber-50/50">
                    <span className="text-[10px] text-amber-800 block">Complete Child Kit</span>
                    <strong className="text-amber-900 font-bold">₨ 2,500</strong>
                  </div>
                </div>
              </div>

              {/* Direct Quick Donating Buttons */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <button
                  onClick={() => onOpenDonate('winter-relief-2026', 500)}
                  className="p-2.5 rounded-xl border border-emerald-600/40 hover:border-emerald-600 bg-emerald-50/50 hover:bg-emerald-100/60 transition-all text-center group cursor-pointer"
                >
                  <span className="block text-[11px] font-medium text-slate-600">Beanie &amp; Socks</span>
                  <span className="text-xs font-bold text-emerald-800">
                    {symbol} {Math.round(500 * rate).toLocaleString()}
                  </span>
                </button>

                <button
                  onClick={() => onOpenDonate('winter-relief-2026', 1200)}
                  className="p-2.5 rounded-xl border border-emerald-600/40 hover:border-emerald-600 bg-emerald-50/50 hover:bg-emerald-100/60 transition-all text-center group cursor-pointer"
                >
                  <span className="block text-[11px] font-medium text-slate-600">1 Quilt</span>
                  <span className="text-xs font-bold text-emerald-800">
                    {symbol} {Math.round(1200 * rate).toLocaleString()}
                  </span>
                </button>

                <button
                  onClick={() => onOpenDonate('winter-relief-2026', 2500)}
                  className="p-2.5 rounded-xl border border-amber-400 bg-amber-50 hover:bg-amber-100/80 transition-all text-center group cursor-pointer"
                >
                  <span className="block text-[11px] font-medium text-amber-800">Full Child Kit</span>
                  <span className="text-xs font-bold text-amber-900">
                    {symbol} {Math.round(2500 * rate).toLocaleString()}
                  </span>
                </button>
              </div>

              {/* Big Donate Button inside Card */}
              <button
                onClick={() => onOpenDonate('winter-relief-2026')}
                className="w-full py-3.5 px-4 rounded-xl bg-[#1B6B4A] hover:bg-[#124B33] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Heart className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span>Donate Online (JazzCash / EasyPaisa / Bank)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Stats Counter Bottom Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-16">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#E0A526] mb-1">
              14,800+
            </div>
            <div className="text-xs sm:text-sm text-emerald-100 font-medium">
              Warm Winter Kits Handed Over
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#E0A526] mb-1">
              32,500+
            </div>
            <div className="text-xs sm:text-sm text-emerald-100 font-medium">
              Patients Given Free Medicine
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#E0A526] mb-1">
              4,200+
            </div>
            <div className="text-xs sm:text-sm text-emerald-100 font-medium">
              Children Sponsored in School
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#E0A526] mb-1">
              100%
            </div>
            <div className="text-xs sm:text-sm text-emerald-100 font-medium">
              Direct Volunteer Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
