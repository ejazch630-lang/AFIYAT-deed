import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS_DATA } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#EAF4EE] text-[#1B6B4A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-[#E0A526]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#124B33] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="font-urdu text-lg sm:text-xl text-[#1B6B4A] mb-3">
            عطیات اور زکوٰۃ کے بارے میں عام سوالات اور ان کے جوابات
          </p>
          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know about our relief operations, tax compliance, and donation methods.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#1B6B4A] bg-[#FAF7F0] shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 cursor-pointer"
                >
                  <span className={isOpen ? 'text-[#124B33]' : 'text-slate-900'}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#1B6B4A]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/60 pt-3 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct question prompt */}
        <div className="mt-10 text-center text-xs text-slate-600 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200/60">
          Have a specific query or want a custom CSR partnership? Contact Chairperson Sawera Ejaz directly at{' '}
          <a href="mailto:ejazch630@gmail.com" className="text-[#1B6B4A] font-bold underline">
            ejazch630@gmail.com
          </a>{' '}
          or WhatsApp{' '}
          <a href="https://wa.me/923008492041" target="_blank" rel="noreferrer" className="text-[#1B6B4A] font-bold underline">
            +92 300 8492041
          </a>.
        </div>

      </div>
    </section>
  );
};
