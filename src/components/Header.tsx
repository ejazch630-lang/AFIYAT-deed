import React, { useState } from 'react';
import { Heart, Phone, Mail, Globe, Users, Menu, X, Calculator, UserCheck, FileText, Star } from 'lucide-react';
import { CurrencyCode } from '../types';
import { CURRENCY_RATES } from '../data/mockData';

interface HeaderProps {
  currentCurrency: CurrencyCode;
  onCurrencyChange: (curr: CurrencyCode) => void;
  onOpenDonate: (causeId?: string) => void;
  onOpenZakat: () => void;
  onOpenVolunteer: () => void;
  onOpenPamphlet: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCurrency,
  onCurrencyChange,
  onOpenDonate,
  onOpenZakat,
  onOpenVolunteer,
  onOpenPamphlet,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Winter Relief', href: '#winter-relief', badge: 'Active' },
    { label: 'Programs', href: '#causes' },
    { label: 'Sawera Ejaz (Profile)', href: '#founder-profile' },
    { label: 'Field Impact', href: '#impact' },
    { label: 'Stories', href: '#stories' },
    { label: 'Trust & Direct Delivery', href: '#transparency' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2E8F0] transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-[#124B33] text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-emerald-200">
              <Users className="w-3.5 h-3.5 text-[#E0A526]" />
              <span className="font-semibold text-white">Community Volunteer Initiative</span> • Led by Sawera Ejaz
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-100">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              100% Direct Delivery: 0% Admin Salary Cuts
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* Contact quick links */}
            <a
              href="tel:+923008492041"
              className="hidden lg:flex items-center gap-1 text-emerald-100 hover:text-[#E0A526] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#E0A526]" />
              <span>+92 300 8492041</span>
            </a>
            <a
              href="mailto:ejazch630@gmail.com"
              className="hidden sm:flex items-center gap-1 text-emerald-100 hover:text-[#E0A526] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#E0A526]" />
              <span>ejazch630@gmail.com</span>
            </a>

            {/* Currency Selector */}
            <div className="flex items-center gap-1.5 bg-[#1B6B4A] px-2.5 py-1 rounded-full border border-emerald-700/50">
              <Globe className="w-3 h-3 text-[#E0A526]" />
              <label htmlFor="currency-select" className="sr-only">Currency</label>
              <select
                id="currency-select"
                value={currentCurrency}
                onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
                className="bg-transparent text-white text-xs font-semibold focus:outline-none cursor-pointer"
              >
                {Object.keys(CURRENCY_RATES).map((code) => (
                  <option key={code} value={code} className="bg-[#124B33] text-white">
                    {code} ({CURRENCY_RATES[code].symbol})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-[#1B6B4A] to-[#124B33] rounded-xl flex items-center justify-center shadow-md shadow-emerald-900/20 border border-emerald-600/30 group-hover:scale-105 transition-transform">
              <span className="text-2xl select-none">🌱</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-[#124B33] tracking-tight leading-none flex items-center gap-1">
                Afiyat <span className="text-[#1B6B4A] font-semibold">Welfare</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-bold text-[#E0A526] mt-0.5">
                Led by Sawera Ejaz
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-[14px] font-medium text-[#243028]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-2 hover:text-[#1B6B4A] transition-colors group flex items-center gap-1.5"
              >
                {link.label}
                {link.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase rounded-full bg-rose-100 text-rose-700">
                    {link.badge}
                  </span>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E0A526] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenPamphlet}
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full border border-amber-300 text-amber-900 bg-amber-50 hover:bg-amber-100 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#E0A526]" />
              Pamphlet (پمفلٹ)
            </button>

            <button
              onClick={onOpenZakat}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full border border-emerald-300 text-[#1B6B4A] bg-emerald-50/70 hover:bg-emerald-100/70 transition-colors cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5 text-[#E0A526]" />
              Zakat
            </button>

            <button
              onClick={() => onOpenDonate()}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-slate-900 bg-[#E0A526] hover:bg-[#C58E1A] shadow-md shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Heart className="w-4 h-4 text-red-700 fill-red-600 animate-bounce" />
              <span>Donate (From ₨500)</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenPamphlet}
              className="px-2.5 py-1.5 rounded-full text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300"
            >
              پمفلٹ
            </button>

            <button
              onClick={() => onOpenDonate()}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-slate-900 bg-[#E0A526]"
            >
              <Heart className="w-3.5 h-3.5 text-red-700 fill-red-600" />
              <span>Donate</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#124B33] rounded-lg hover:bg-emerald-50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E2E8F0] bg-white px-4 pt-4 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-base font-medium text-[#243028] border-b border-slate-100"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-rose-100 text-rose-700">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPamphlet();
                }}
                className="w-full py-2.5 px-4 rounded-xl border-2 border-amber-400 text-amber-900 bg-amber-50 font-bold text-sm flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#E0A526]" />
                Official Pamphlet / Flyer (پمفلٹ)
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenZakat();
                }}
                className="w-full py-2.5 px-4 rounded-xl border border-emerald-300 text-[#1B6B4A] bg-emerald-50 font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#E0A526]" />
                Zakat Calculator
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVolunteer();
                }}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-50"
              >
                <UserCheck className="w-4 h-4 text-emerald-700" />
                Join as Volunteer
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#E0A526] text-slate-900 font-bold text-base flex items-center justify-center gap-2 shadow-md shadow-amber-500/20"
              >
                <Heart className="w-4 h-4 text-red-700 fill-red-600" />
                Donate Online (JazzCash, EasyPaisa, Bank, Card)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
