import React, { useState } from 'react';
import { X, Calculator, ShieldCheck, HelpCircle, ArrowRight, CheckCircle2, Heart } from 'lucide-react';
import { CurrencyCode } from '../types';
import { CURRENCY_RATES } from '../data/mockData';

interface ZakatCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCurrency: CurrencyCode;
  onDonateZakatAmount: (amountPKR: number) => void;
}

export const ZakatCalculatorModal: React.FC<ZakatCalculatorModalProps> = ({
  isOpen,
  onClose,
  currentCurrency,
  onDonateZakatAmount,
}) => {
  const rate = CURRENCY_RATES[currentCurrency]?.rateAgainstPKR || 1;
  const symbol = CURRENCY_RATES[currentCurrency]?.symbol || '₨';

  // Asset inputs in PKR
  const [cashInHand, setCashInHand] = useState<number>(0);
  const [goldValue, setGoldValue] = useState<number>(0);
  const [silverValue, setSilverValue] = useState<number>(0);
  const [businessStock, setBusinessStock] = useState<number>(0);
  const [sharesInvestments, setSharesInvestments] = useState<number>(0);
  const [moneyOwedToYou, setMoneyOwedToYou] = useState<number>(0);

  // Liabilities
  const [debtsDue, setDebtsDue] = useState<number>(0);
  const [immediateBills, setImmediateBills] = useState<number>(0);

  // Nisab threshold reference (approx PKR 185,000 based on ~52.5 tolas / 612g Silver)
  const silverNisabPKR = 185000;

  if (!isOpen) return null;

  const totalAssetsPKR =
    cashInHand + goldValue + silverValue + businessStock + sharesInvestments + moneyOwedToYou;

  const totalLiabilitiesPKR = debtsDue + immediateBills;

  const netZakatableWealthPKR = Math.max(0, totalAssetsPKR - totalLiabilitiesPKR);

  const isEligibleForZakat = netZakatableWealthPKR >= silverNisabPKR;

  // 2.5% of net zakatable wealth
  const zakatPayablePKR = isEligibleForZakat ? Math.round(netZakatableWealthPKR * 0.025) : 0;

  const zakatInCurrency = Math.round(zakatPayablePKR * rate);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full my-6 max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 z-20 bg-gradient-to-r from-[#124B33] to-[#1B6B4A] text-white px-6 py-4 flex items-center justify-between rounded-t-3xl shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-[#E0A526] flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold leading-tight">
                Afiyat Shariah Zakat Calculator
              </h2>
              <p className="text-[11px] text-emerald-200">
                Accurate 2.5% calculation on net eligible wealth above Nisab
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Nisab Info Card */}
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 text-xs text-slate-800">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-emerald-950 font-bold block mb-1">
                  Current Silver Nisab Threshold: PKR {silverNisabPKR.toLocaleString()} (~{symbol}{' '}
                  {Math.round(silverNisabPKR * rate).toLocaleString()})
                </strong>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  According to most Islamic scholars, if your total net savings held for one full lunar year equal or exceed the silver Nisab (~52.5 tolas / 612.36g), Zakat is obligatory at the rate of <strong>2.5%</strong>. Afiyat operates under a strict 100% Zakat policy where 0% is used for administrative costs.
                </p>
              </div>
            </div>
          </div>

          {/* Asset Inputs */}
          <div>
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
              1. Your Zakatable Assets (Values in PKR):
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-slate-600 mb-1 font-medium">
                  Cash in Bank &amp; at Hand
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={cashInHand || ''}
                  onChange={(e) => setCashInHand(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1 font-medium">
                  Gold Value (Jewelry, Coins, Bars)
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={goldValue || ''}
                  onChange={(e) => setGoldValue(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1 font-medium">
                  Silver Value (Jewelry &amp; Utensils)
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={silverValue || ''}
                  onChange={(e) => setSilverValue(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1 font-medium">
                  Business Inventory / Goods for Resale
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={businessStock || ''}
                  onChange={(e) => setBusinessStock(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1 font-medium">
                  Shares, Mutual Funds &amp; Investments
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={sharesInvestments || ''}
                  onChange={(e) => setSharesInvestments(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1 font-medium">
                  Debts Owed to You (Reliable repayment)
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={moneyOwedToYou || ''}
                  onChange={(e) => setMoneyOwedToYou(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                />
              </div>
            </div>
          </div>

          {/* Liabilities Inputs */}
          <div>
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
              2. Immediate Liabilities to Deduct:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-slate-600 mb-1 font-medium">
                  Debts &amp; Loans Due Immediately
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={debtsDue || ''}
                  onChange={(e) => setDebtsDue(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1 font-medium">
                  Pending Utility Bills &amp; Rent Due
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={immediateBills || ''}
                  onChange={(e) => setImmediateBills(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                />
              </div>
            </div>
          </div>

          {/* Calculation Summary Box */}
          <div className="bg-[#FAF7F0] border border-amber-200/80 rounded-2xl p-5 text-center">
            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-amber-200/60 text-xs">
              <div>
                <span className="text-slate-500 block">Total Assets:</span>
                <span className="font-bold text-slate-900">PKR {totalAssetsPKR.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Net Wealth:</span>
                <span className="font-bold text-slate-900">PKR {netZakatableWealthPKR.toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-4">
              <span className="text-xs font-semibold text-slate-600 block uppercase tracking-wider">
                Total Zakat Due (2.5%):
              </span>
              <div className="text-3xl sm:text-4xl font-black text-[#124B33] mt-1 mb-1">
                {symbol} {zakatInCurrency.toLocaleString()}
              </div>
              <span className="text-xs text-slate-500 block mb-4">
                (Equivalent to PKR {zakatPayablePKR.toLocaleString()})
              </span>

              {isEligibleForZakat ? (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onDonateZakatAmount(zakatPayablePKR);
                  }}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#E0A526] hover:bg-[#C58E1A] text-slate-900 font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-amber-500/25 transition-all cursor-pointer"
                >
                  <Heart className="w-4 h-4 text-red-700 fill-red-700" />
                  <span>Donate My Calculated Zakat Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <p className="text-xs text-amber-800 bg-amber-50 py-2 px-3 rounded-lg border border-amber-200 inline-block">
                  Your net wealth is below the Nisab threshold. Zakat is not obligatory on you, but voluntary Sadaqah is always rewarded!
                </p>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
