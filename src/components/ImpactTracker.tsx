import React, { useState } from 'react';
import { MapPin, Users, Tent, Activity, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { REGIONS_DATA } from '../data/mockData';
import { RegionImpact } from '../types';

interface ImpactTrackerProps {
  onOpenDonate: (causeId?: string) => void;
}

export const ImpactTracker: React.FC<ImpactTrackerProps> = ({ onOpenDonate }) => {
  const [activeRegion, setActiveRegion] = useState<RegionImpact>(REGIONS_DATA[0]);

  return (
    <section id="impact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#EAF4EE] text-[#1B6B4A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>Nationwide Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#124B33] tracking-tight mb-3">
            Reaching the Most Remote Corners of Pakistan
          </h2>
          <p className="font-urdu text-lg sm:text-xl text-[#1B6B4A] mb-3">
            خیبر پختونخوا، سندھ، پنجاب اور بلوچستان کے دور دراز علاقوں میں خدمات
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From the frozen mountain valleys of Swat to the parched sand dunes of Tharparkar and rural Balochistan, Afiyat Welfare operates mobile relief vans and local field teams to deliver aid where it is needed most.
          </p>
        </div>

        {/* Region Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {REGIONS_DATA.map((region) => {
            const isSelected = activeRegion.id === region.id;
            return (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#1B6B4A] text-white shadow-md shadow-emerald-900/15'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-[#E0A526]' : 'text-slate-500'}`} />
                <span>{region.name}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Region Card */}
        <div className="bg-[#FAF7F0] border border-emerald-900/10 rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                  {activeRegion.province}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  {activeRegion.activeStatus}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#124B33] mb-3">
                {activeRegion.name}
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                {activeRegion.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                    <Tent className="w-4 h-4 text-[#1B6B4A]" />
                    <span>Relief Camps</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#124B33]">
                    {activeRegion.campsCount}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                    <Users className="w-4 h-4 text-[#1B6B4A]" />
                    <span>Beneficiaries</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#124B33]">
                    {activeRegion.beneficiaries}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                    <Activity className="w-4 h-4 text-[#1B6B4A]" />
                    <span>Field Hub</span>
                  </div>
                  <div className="text-xs font-bold text-emerald-800 line-clamp-1">
                    Direct Verification
                  </div>
                </div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200/80 text-xs text-emerald-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1B6B4A] shrink-0" />
                <span>
                  <strong>Primary Focus:</strong> {activeRegion.primaryAid}
                </span>
              </div>
            </div>

            {/* Right: Map Graphic / Regional Action */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#124B33] to-[#1B6B4A] rounded-2xl p-6 text-white text-center shadow-md">
              <span className="text-3xl mb-2 block">🇵🇰</span>
              <h4 className="text-lg font-bold mb-1">Support Relief in {activeRegion.name}</h4>
              <p className="text-xs text-emerald-100 mb-6">
                Direct dispatch your Zakat or Sadaqah pack to the local team stationed in this region.
              </p>

              <button
                type="button"
                onClick={() => onOpenDonate()}
                className="w-full py-3 px-5 rounded-xl bg-[#E0A526] hover:bg-[#C58E1A] text-slate-900 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Heart className="w-4 h-4 text-red-700 fill-red-700" />
                <span>Send Aid to {activeRegion.province}</span>
                <ArrowRight className="w-4 h-4 text-slate-900" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
