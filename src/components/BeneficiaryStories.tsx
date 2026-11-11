import React, { useState } from 'react';
import { Quote, MapPin, Calendar, ArrowRight, Heart } from 'lucide-react';
import { BENEFICIARY_STORIES } from '../data/mockData';
import { BeneficiaryStory } from '../types';

interface BeneficiaryStoriesProps {
  onOpenDonate: (causeId?: string) => void;
}

export const BeneficiaryStories: React.FC<BeneficiaryStoriesProps> = ({ onOpenDonate }) => {
  const [activeStory, setActiveStory] = useState<BeneficiaryStory>(BENEFICIARY_STORIES[0]);

  return (
    <section id="stories" className="py-20 bg-[#FAF7F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#EAF4EE] text-[#1B6B4A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>Lives Transformed by Your Sadaqah</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#124B33] tracking-tight mb-3">
            Stories from the Ground
          </h2>
          <p className="font-urdu text-lg sm:text-xl text-[#1B6B4A] mb-3">
            امید کی کہانیاں — آپ کے تعاون سے روشن ہونے والی زندگیاں
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Behind every number is a human soul whose life was transformed. Read authentic accounts from families across Pakistan who received your warmth, medical aid, and school support.
          </p>
        </div>

        {/* Stories Tabs & Interactive Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Story Selection Thumbnails */}
          <div className="lg:col-span-5 space-y-4">
            {BENEFICIARY_STORIES.map((story) => {
              const isSelected = activeStory.id === story.id;
              return (
                <div
                  key={story.id}
                  onClick={() => setActiveStory(story)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                    isSelected
                      ? 'bg-white border-[#1B6B4A] shadow-md ring-2 ring-[#1B6B4A]/20 transform translate-x-1'
                      : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 shadow-sm"
                  />
                  <div className="truncate">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B6B4A] block">
                      {story.program}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm truncate">{story.name}</h4>
                    <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#E0A526]" />
                      <span>{story.location}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Featured Story Detailed View */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 relative overflow-hidden">
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-slate-100">
                <img
                  src={activeStory.image}
                  alt={activeStory.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#E0A526] text-slate-900 mb-2 inline-block shadow">
                    {activeStory.program}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold leading-tight text-white">
                    {activeStory.name}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-emerald-100 mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#E0A526]" /> {activeStory.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#E0A526]" /> {activeStory.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mb-6 p-4 bg-emerald-50/70 border-l-4 border-[#1B6B4A] rounded-r-2xl">
                <p className="text-slate-800 text-sm italic font-medium leading-relaxed">
                  {activeStory.quote}
                </p>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                {activeStory.fullStory}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-[#1B6B4A]">
                  Verified relief distribution by Afiyat volunteers
                </span>
                <button
                  type="button"
                  onClick={() => onOpenDonate()}
                  className="px-4 py-2 rounded-xl bg-[#1B6B4A] hover:bg-[#124B33] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 text-[#E0A526] fill-[#E0A526]" />
                  <span>Sponsor a Life Today</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
