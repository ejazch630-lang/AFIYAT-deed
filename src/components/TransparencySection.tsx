import React from 'react';
import { ShieldCheck, CheckCircle2, Video, Heart, Building, Lock, Users } from 'lucide-react';
import { BANK_DETAILS } from '../data/mockData';

export const TransparencySection: React.FC = () => {
  return (
    <section id="transparency" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#EAF4EE] text-[#1B6B4A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-[#E0A526]" />
            <span>Sacred Trust &amp; Direct Integrity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#124B33] tracking-tight mb-3">
            100% Direct Delivery &amp; Volunteer Transparency
          </h2>
          <p className="font-urdu text-lg sm:text-xl text-[#1B6B4A] mb-3">
            شفافیت اور امانت داری — زکوٰۃ اور عطیات کا ایک ایک پائی کا حساب
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Afiyat Welfare operates on direct public trust and personal accountability. We maintain clear banking trails, provide photo and video documentation of distributions, and guarantee that zero administrative salaries are taken from donor funds.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          
          <div className="bg-[#FAF7F0] p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#1B6B4A] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">100% Zakat Direct Delivery</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Under strict Islamic guidelines, 100% of your Zakat funds are converted into tangible relief items (jackets, blankets, medicines, flour) and handed directly into the ownership of verified needy families. Zero percent goes to administrative fees.
            </p>
            <div className="text-xs font-semibold text-[#1B6B4A] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Direct Mustahiq Handover</span>
            </div>
          </div>

          <div className="bg-[#FAF7F0] p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#E0A526] flex items-center justify-center mb-4">
              <Video className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Video &amp; Photo Proof</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Every distribution is documented on video and photo by our volunteer coordinators. Donors can request direct WhatsApp footage of their sponsored winter packs, school supplies, or water pumps.
            </p>
            <div className="text-xs font-semibold text-[#1B6B4A] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Distribution Updates</span>
            </div>
          </div>

          <div className="bg-[#FAF7F0] p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Volunteer-Powered</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Sawera Ejaz and our 120+ passionate field volunteers contribute their personal time, vehicles, and fuel to ensure your donations reach high mountain valleys without expensive overheads.
            </p>
            <div className="text-xs font-semibold text-[#1B6B4A] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% Volunteer Driven</span>
            </div>
          </div>

        </div>

        {/* Bank Wire Details Reference Box */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#E0A526] block mb-1">
                Official Donation Bank Accounts
              </span>
              <h3 className="text-xl sm:text-2xl font-black">
                Afiyat Welfare Trust (Sawera Ejaz)
              </h3>
              <p className="text-xs text-slate-400">
                Direct Islamic Banking Channels • Dedicated Humanitarian Fund
              </p>
            </div>

            <div className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-xl text-xs text-emerald-400 font-mono">
              <Lock className="w-4 h-4" />
              <span>Direct Bank Verified</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {BANK_DETAILS.banks.map((b) => (
              <div key={b.bankName} className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/80">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-sm text-[#E0A526]">{b.bankName}</h4>
                  <span className="text-[10px] text-slate-400 font-mono">SWIFT: {b.swiftCode}</span>
                </div>
                <div className="space-y-1 text-xs">
                  <p className="text-slate-300">Account Title: <strong className="text-white">{b.accountTitle}</strong></p>
                  <p className="text-slate-300">Account No: <strong className="text-white">{b.accountNumber}</strong></p>
                  <p className="text-slate-300 font-mono text-[11px] break-all">IBAN: <strong className="text-emerald-400">{b.iban}</strong></p>
                  <p className="text-slate-400 text-[11px]">{b.branch}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs text-slate-400">
            You can also donate directly via JazzCash or EasyPaisa to <strong>0300-8492041</strong> (Sawera Ejaz).
          </div>
        </div>

      </div>
    </section>
  );
};
