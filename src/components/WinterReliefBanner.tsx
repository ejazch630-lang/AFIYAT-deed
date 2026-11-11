import React, { useState } from 'react';
import { Flame, Heart, Sparkles, Check, ArrowRight, MapPin, Users, FileText } from 'lucide-react';
import { CurrencyCode } from '../types';
import { CURRENCY_RATES } from '../data/mockData';

interface WinterReliefBannerProps {
  currentCurrency: CurrencyCode;
  onOpenDonate: (causeId: string, amountPKR: number) => void;
  onOpenPamphlet?: () => void;
}

export const WinterReliefBanner: React.FC<WinterReliefBannerProps> = ({
  currentCurrency,
  onOpenDonate,
  onOpenPamphlet,
}) => {
  const [selectedPackIndex, setSelectedPackIndex] = useState(2); // default to 1500 jacket
  const rate = CURRENCY_RATES[currentCurrency]?.rateAgainstPKR || 1;
  const symbol = CURRENCY_RATES[currentCurrency]?.symbol || '₨';

  const packages = [
    {
      title: 'Warm Beanie, Gloves & Socks',
      amountPKR: 500,
      badge: 'Super Affordable',
      description: 'Thick woolen beanie cap, warm thermal gloves & 2 pairs of insulated winter socks.',
      items: ['Knitted warm wool beanie', 'Fleece thermal gloves', '2 pairs thick winter socks'],
      impactNote: 'Protects ears, hands, and feet of 1 freezing child for just ₨ 500.',
    },
    {
      title: 'Double Warm Quilt / Blanket',
      amountPKR: 1200,
      badge: 'Essential Sleeping Aid',
      description: 'Double-ply weighted winter quilt to shield sleeping children from freezing ground temperatures.',
      items: ['Heavy double-ply warm quilt', 'Insulated ground sheet', 'Waterproof carry wrap'],
      impactNote: 'Keeps an entire family warm inside unheated tin or mud rooms.',
    },
    {
      title: '1 Child Heavy Warm Jacket & Boots',
      amountPKR: 1500,
      badge: 'Most Popular',
      description: 'Heavy fleece padded hooded winter coat and sturdy waterproof snow shoes.',
      items: ['Padded winter hooded coat', 'Waterproof snow shoes', 'Reinforced windproof lining'],
      impactNote: 'Allows a vulnerable child to walk outside, attend school, and stay safe from pneumonia.',
    },
    {
      title: 'Complete Child Winter Kit',
      amountPKR: 2500,
      badge: 'Full Protection',
      description: 'Complete winter bundle: Jacket + Quilt + Beanie + Gloves + Socks + Snow Shoes.',
      items: ['1x Heavy padded jacket', '1x Double winter quilt', '1x Wool beanie & gloves set', '1x Sturdy snow shoes'],
      impactNote: 'Gives 1 child complete head-to-toe survival protection for the entire winter.',
    },
    {
      title: 'Family Winter Pack',
      amountPKR: 5000,
      badge: 'Family Care',
      description: '2 Warm quilts + 2 Heavy jackets + warm accessory packs for the household.',
      items: ['2x Double-ply warm quilts', '2x Child winter jackets', '4x Woolen beanies & gloves', 'Winter grocery packet'],
      impactNote: 'Warms a complete underprivileged household throughout the harsh winter months.',
    },
  ];

  const activePack = packages[selectedPackIndex];

  return (
    <section id="winter-relief" className="py-20 bg-[#FAF7F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#EAF4EE] text-[#1B6B4A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
            <Flame className="w-4 h-4 text-rose-600" />
            <span>Winter Survival Appeal 2026 — Affordable Rates</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#124B33] tracking-tight mb-4">
            No Child Left Shivering in the Cold
          </h2>
          <p className="font-urdu text-lg sm:text-xl text-[#1B6B4A] mb-3">
            سخت سردی میں پسماندہ بچوں اور بزرگوں کو گرم بستر اور کپڑے فراہم کریں
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            We reduced our donation rates so everyone can easily participate. From just <strong>₨ 500</strong> for thermal beanies and gloves to <strong>₨ 1,500</strong> for a heavy jacket, your gift directly protects a child.
          </p>

          {onOpenPamphlet && (
            <button
              type="button"
              onClick={onOpenPamphlet}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-xs font-bold text-slate-800 shadow-sm transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#1B6B4A]" />
              <span>Open &amp; Print Official Winter Pamphlet (پمفلٹ)</span>
            </button>
          )}
        </div>

        {/* Interactive Package Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {packages.map((pack, idx) => {
            const isSelected = selectedPackIndex === idx;
            const priceInCurr = Math.round(pack.amountPKR * rate);

            return (
              <div
                key={pack.title}
                onClick={() => setSelectedPackIndex(idx)}
                className={`relative rounded-2xl p-5 transition-all cursor-pointer border-2 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#1B6B4A] shadow-xl ring-2 ring-[#1B6B4A]/20 transform -translate-y-1'
                    : 'bg-white/80 border-slate-200 hover:border-emerald-300 hover:bg-white shadow-sm'
                }`}
              >
                {pack.badge && (
                  <span
                    className={`absolute -top-3 left-4 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                      isSelected
                        ? 'bg-[#1B6B4A] text-white shadow-sm'
                        : 'bg-amber-100 text-amber-800 border border-amber-300'
                    }`}
                  >
                    {pack.badge}
                  </span>
                )}

                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1 mt-1 leading-snug">{pack.title}</h3>
                  <div className="mb-3">
                    <span className="text-xl sm:text-2xl font-black text-[#1B6B4A]">
                      {symbol} {priceInCurr.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      (PKR {pack.amountPKR.toLocaleString()})
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-600 mb-4 leading-relaxed">
                    {pack.description}
                  </p>

                  <div className="space-y-1.5 mb-5">
                    {pack.items.map((item) => (
                      <div key={item} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                        <Check className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenDonate('winter-relief-2026', pack.amountPKR);
                    }}
                    className={`w-full py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                      isSelected
                        ? 'bg-[#E0A526] hover:bg-[#C58E1A] text-slate-900 shadow-sm'
                        : 'bg-slate-100 hover:bg-[#1B6B4A] hover:text-white text-slate-800'
                    }`}
                  >
                    <Heart className="w-3 h-3 fill-current" />
                    <span>Sponsor Pack</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Package Banner Highlight */}
        <div className="bg-gradient-to-r from-[#124B33] to-[#1B6B4A] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-amber-300 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Selected: {activePack.title}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {activePack.impactNote}
              </h3>
              <p className="text-emerald-100 text-sm max-w-2xl mb-6">
                Sawera Ejaz and our volunteer team personally verify and deliver these kits directly to children and families in Swat, Kalam, Balochistan, and rural Punjab.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-xs text-emerald-100">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E0A526]" />
                  <span>Deployment: Swat, Kalam, Quetta, Ziarat &amp; Punjab Hamlets</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#E0A526]" />
                  <span>Door-to-door distribution with video proof</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="text-center lg:text-right mb-4">
                <span className="text-xs text-emerald-200 block">Donation Amount:</span>
                <span className="text-3xl sm:text-4xl font-black text-[#E0A526]">
                  {symbol} {Math.round(activePack.amountPKR * rate).toLocaleString()}
                </span>
                <span className="text-xs text-emerald-200 block">(PKR {activePack.amountPKR.toLocaleString()})</span>
              </div>

              <button
                onClick={() => onOpenDonate('winter-relief-2026', activePack.amountPKR)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base text-slate-900 bg-[#E0A526] hover:bg-[#C58E1A] shadow-lg shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Heart className="w-5 h-5 text-red-700 fill-red-700" />
                <span>Confirm &amp; Donate Now</span>
                <ArrowRight className="w-4 h-4 text-slate-900" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
