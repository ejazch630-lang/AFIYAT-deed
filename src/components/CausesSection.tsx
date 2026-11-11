import React, { useState } from 'react';
import { Flame, Stethoscope, GraduationCap, Utensils, Droplets, Heart, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { CauseItem, CurrencyCode } from '../types';
import { CAUSES_DATA, CURRENCY_RATES } from '../data/mockData';

interface CausesSectionProps {
  currentCurrency: CurrencyCode;
  onOpenDonate: (causeId: string, amountPKR?: number) => void;
}

export const CausesSection: React.FC<CausesSectionProps> = ({ currentCurrency, onOpenDonate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCauseDetails, setSelectedCauseDetails] = useState<CauseItem | null>(null);

  const rate = CURRENCY_RATES[currentCurrency]?.rateAgainstPKR || 1;
  const symbol = CURRENCY_RATES[currentCurrency]?.symbol || '₨';

  const categories = ['All', 'Winter Relief', 'Healthcare', 'Education', 'Food Security', 'Clean Water'];

  const filteredCauses = activeCategory === 'All'
    ? CAUSES_DATA
    : CAUSES_DATA.filter((c) => c.category === activeCategory);

  const getIcon = (category: string) => {
    switch (category) {
      case 'Winter Relief':
        return <Flame className="w-5 h-5 text-amber-500" />;
      case 'Healthcare':
        return <Stethoscope className="w-5 h-5 text-emerald-500" />;
      case 'Education':
        return <GraduationCap className="w-5 h-5 text-blue-500" />;
      case 'Food Security':
        return <Utensils className="w-5 h-5 text-orange-500" />;
      case 'Clean Water':
        return <Droplets className="w-5 h-5 text-cyan-500" />;
      default:
        return <Heart className="w-5 h-5 text-rose-500" />;
    }
  };

  return (
    <section id="causes" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#EAF4EE] text-[#1B6B4A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Active Humanitarian Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#124B33] tracking-tight mb-3">
            Where Your Kindness Creates Real Change
          </h2>
          <p className="font-urdu text-lg sm:text-xl text-[#1B6B4A] mb-3">
            تعلیم، صحت، خوراک اور صاف پانی کے منصوبے — صدقہ اور زکوٰۃ کے مستحقین کے لیے
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every program run by Afiyat Welfare is meticulously monitored, documented, and 100% Zakat eligible. Explore our active causes and sponsor an individual, a family, or an entire community.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1B6B4A] text-white shadow-md shadow-emerald-900/15'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCauses.map((cause) => {
            const percentRaised = Math.min(100, Math.round((cause.raisedAmountPKR / cause.targetAmountPKR) * 100));
            const raisedInCurr = Math.round(cause.raisedAmountPKR * rate);
            const targetInCurr = Math.round(cause.targetAmountPKR * rate);

            return (
              <div
                key={cause.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
              >
                {/* Image & Badges */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100">
                  <img
                    src={cause.image}
                    alt={cause.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-slate-900 shadow-sm flex items-center gap-1.5">
                      {getIcon(cause.category)}
                      {cause.category}
                    </span>
                    {cause.isUrgent && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-600 text-white shadow-sm flex items-center gap-1 animate-pulse">
                        <Flame className="w-3 h-3" /> Urgent
                      </span>
                    )}
                  </div>

                  {cause.isZakatEligible && (
                    <div className="absolute bottom-3 left-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-600/90 text-white backdrop-blur-sm flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-[#E0A526]" /> 100% Zakat Eligible
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 right-4 text-right">
                    <span className="text-[11px] font-semibold text-white/90 block">Beneficiaries</span>
                    <span className="text-sm font-bold text-white">{cause.beneficiariesCount.toLocaleString()}+</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg sm:text-xl mb-1 group-hover:text-[#1B6B4A] transition-colors leading-snug">
                      {cause.title}
                    </h3>
                    <p className="font-urdu text-xs text-[#1B6B4A] mb-2 leading-relaxed">
                      {cause.urduTitle}
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 mb-4">
                      {cause.tagline}
                    </p>

                    {/* Funding Progress Bar */}
                    <div className="mb-5 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                        <span className="text-emerald-800">
                          {symbol} {raisedInCurr.toLocaleString()} raised
                        </span>
                        <span className="text-slate-500 font-bold">{percentRaised}%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-[#1B6B4A] h-full rounded-full transition-all duration-700"
                          style={{ width: `${percentRaised}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                        <span>Goal: {symbol} {targetInCurr.toLocaleString()}</span>
                        <span>PKR {cause.targetAmountPKR.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Suggested Giving Packs Chips */}
                    <div className="space-y-1.5 mb-5">
                      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Suggested Options:</p>
                      <div className="flex flex-col gap-1.5">
                        {cause.suggestedPacks.slice(0, 2).map((pack) => {
                          const packPrice = Math.round(pack.amountPKR * rate);
                          return (
                            <button
                              key={pack.name}
                              onClick={() => onOpenDonate(cause.id, pack.amountPKR)}
                              className="w-full text-left p-2 rounded-xl border border-slate-200/80 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all flex items-center justify-between text-xs cursor-pointer group/btn"
                            >
                              <span className="font-medium text-slate-800 truncate pr-2 group-hover/btn:text-emerald-800">
                                {pack.name}
                              </span>
                              <span className="font-bold text-emerald-700 shrink-0">
                                {symbol} {packPrice.toLocaleString()}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedCauseDetails(cause)}
                      className="px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-all cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onOpenDonate(cause.id)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-[#1B6B4A] hover:bg-[#124B33] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                    >
                      <Heart className="w-3.5 h-3.5 text-[#E0A526] fill-[#E0A526]" />
                      <span>Donate to This Cause</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Cause Details Modal */}
      {selectedCauseDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setSelectedCauseDetails(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-lg font-bold"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-[#1B6B4A] mb-2 uppercase">
              {getIcon(selectedCauseDetails.category)}
              <span>{selectedCauseDetails.category}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-1">
              {selectedCauseDetails.title}
            </h3>
            <p className="font-urdu text-sm text-[#1B6B4A] mb-4">
              {selectedCauseDetails.urduTitle}
            </p>

            <img
              src={selectedCauseDetails.image}
              alt={selectedCauseDetails.title}
              className="w-full h-56 object-cover rounded-2xl mb-4 shadow-sm"
            />

            <p className="text-slate-700 text-sm leading-relaxed mb-6">
              {selectedCauseDetails.description}
            </p>

            <div className="bg-[#FAF7F0] p-4 rounded-2xl border border-amber-200/60 mb-6">
              <h4 className="font-bold text-xs text-[#124B33] uppercase tracking-wider mb-2">
                Verified On-Ground Achievements:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {selectedCauseDetails.impactMetrics.map((metric, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h4 className="font-bold text-xs text-slate-500 uppercase tracking-wider mb-3">
              Direct Sponsorship Packs:
            </h4>
            <div className="space-y-2 mb-6">
              {selectedCauseDetails.suggestedPacks.map((pack) => {
                const packInCurr = Math.round(pack.amountPKR * rate);
                return (
                  <div
                    key={pack.name}
                    className="p-3 rounded-xl border border-slate-200 flex items-center justify-between gap-4 hover:border-emerald-500 bg-white"
                  >
                    <div>
                      <h5 className="font-bold text-xs text-slate-900">{pack.name}</h5>
                      <p className="text-[11px] text-slate-500">{pack.description}</p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedCauseDetails(null);
                        onOpenDonate(selectedCauseDetails.id, pack.amountPKR);
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-[#E0A526] hover:bg-[#C58E1A] text-slate-900 font-bold text-xs shrink-0 cursor-pointer"
                    >
                      {symbol} {packInCurr.toLocaleString()}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedCauseDetails(null)}
                className="flex-1 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedCauseDetails(null);
                  onOpenDonate(selectedCauseDetails.id);
                }}
                className="flex-1 py-3 rounded-xl bg-[#1B6B4A] hover:bg-[#124B33] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Heart className="w-4 h-4 text-[#E0A526] fill-[#E0A526]" />
                <span>Donate to This Program</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
