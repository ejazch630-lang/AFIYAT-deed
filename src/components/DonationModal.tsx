import React, { useState, useEffect } from 'react';
import { X, Heart, ShieldCheck, CheckCircle2, Copy, Check, Printer, Sparkles, CreditCard, Smartphone, Building, RefreshCw, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CurrencyCode, DonationRecord } from '../types';
import { CAUSES_DATA, BANK_DETAILS, CURRENCY_RATES } from '../data/mockData';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCauseId?: string;
  initialAmountPKR?: number;
  currentCurrency: CurrencyCode;
  onCurrencyChange: (curr: CurrencyCode) => void;
  onOpenPamphlet?: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  initialCauseId,
  initialAmountPKR,
  currentCurrency,
  onCurrencyChange,
  onOpenPamphlet,
}) => {
  const rate = CURRENCY_RATES[currentCurrency]?.rateAgainstPKR || 1;
  const symbol = CURRENCY_RATES[currentCurrency]?.symbol || '₨';

  // State
  const [selectedCauseId, setSelectedCauseId] = useState<string>(initialCauseId || 'winter-relief-2026');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [amountPKR, setAmountPKR] = useState<number>(initialAmountPKR || 1500);
  const [customAmountInput, setCustomAmountInput] = useState<string>('');
  const [isZakat, setIsZakat] = useState<boolean>(true);
  const [dedicatedTo, setDedicatedTo] = useState<string>('');

  // Donor Info
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [donorPhone, setDonorPhone] = useState<string>('');

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState<'jazzcash' | 'easypaisa' | 'bank_transfer' | 'credit_card'>('jazzcash');
  const [jazzMobileNumber, setJazzMobileNumber] = useState<string>('');
  const [bankTxRef, setBankTxRef] = useState<string>('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Card details
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardExpiry, setCardExpiry] = useState<string>('');
  const [cardCvc, setCardCvc] = useState<string>('');

  // Submission & Receipt state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [completedRecord, setCompletedRecord] = useState<DonationRecord | null>(null);

  useEffect(() => {
    if (initialCauseId) {
      setSelectedCauseId(initialCauseId);
    }
    if (initialAmountPKR) {
      setAmountPKR(initialAmountPKR);
      setCustomAmountInput('');
    }
  }, [initialCauseId, initialAmountPKR]);

  if (!isOpen) return null;

  const currentCause = CAUSES_DATA.find((c) => c.id === selectedCauseId) || CAUSES_DATA[0];

  // Reduced, highly accessible presets
  const presetsPKR = [500, 1000, 1200, 1500, 2500, 5000];

  const handleSelectPreset = (pkr: number) => {
    setAmountPKR(pkr);
    setCustomAmountInput('');
  };

  const handleCustomAmountChange = (val: string) => {
    setCustomAmountInput(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
      const inPkr = Math.round(num / rate);
      setAmountPKR(inPkr);
    }
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmitDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName.trim() || amountPKR <= 0) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#1B6B4A', '#E0A526', '#2A8A62', '#124B33'],
        });
      } catch (err) {
        // Confetti fallback
      }

      const receiptNumber = `AFIYAT-VOL-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      const txRef = bankTxRef || `TXN-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

      const record: DonationRecord = {
        receiptId: receiptNumber,
        donorName: donorName || 'Valued Donor',
        donorEmail: donorEmail || 'ejazch630@gmail.com',
        donorPhone: donorPhone || '+92 300 0000000',
        causeId: currentCause.id,
        causeName: currentCause.title,
        amount: Math.round(amountPKR * rate),
        currency: currentCurrency,
        amountPKR: amountPKR,
        paymentMethod: paymentMethod,
        date: new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' }),
        isZakat: isZakat,
        notes: dedicatedTo ? `In Honor/Memory of: ${dedicatedTo}` : undefined,
        transactionRef: txRef,
      };

      setCompletedRecord(record);
    }, 800);
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full my-6 max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative flex flex-col">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-gradient-to-r from-[#124B33] to-[#1B6B4A] text-white px-6 py-4 flex items-center justify-between rounded-t-3xl shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-lg">
              🌱
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold leading-tight">
                Afiyat Welfare Donation Gateway
              </h2>
              <p className="text-[11px] text-emerald-200 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#E0A526]" /> 100% Direct Delivery • Led by Sawera Ejaz
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onOpenPamphlet && (
              <button
                type="button"
                onClick={onOpenPamphlet}
                className="px-2.5 py-1 rounded-lg bg-amber-400 text-slate-900 text-[11px] font-bold hover:bg-amber-300 transition-colors cursor-pointer"
              >
                پمفلٹ
              </button>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 flex-1">
          {completedRecord ? (
            /* ================= SUCCESS & PRINTABLE RECEIPT SCREEN ================= */
            <div className="text-center py-2 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-[#1B6B4A] rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                <CheckCircle2 className="w-10 h-10 text-[#1B6B4A]" />
              </div>

              <h3 className="text-2xl font-black text-[#124B33] mb-1">JazakAllah Khair!</h3>
              <p className="font-urdu text-base text-[#1B6B4A] mb-2">
                اللہ تعالیٰ آپ کے صدقہ و زکوٰۃ کو قبول فرمائے اور آپ کے رزق میں برکت دے
              </p>
              <p className="text-xs text-slate-600 max-w-md mx-auto mb-6">
                Your donation of <strong>{completedRecord.currency} {completedRecord.amount.toLocaleString()}</strong> has been recorded. Our volunteer team will deliver the relief kit with personal care.
              </p>

              {/* Printable Receipt Card */}
              <div id="printable-receipt" className="text-left bg-[#FAF7F0] border-2 border-dashed border-[#1B6B4A]/30 rounded-2xl p-6 sm:p-7 mb-6 shadow-sm">
                <div className="flex justify-between items-start pb-4 border-b border-slate-300">
                  <div>
                    <h4 className="font-black text-[#124B33] text-lg sm:text-xl">AFIYAT WELFARE</h4>
                    <p className="text-[11px] text-slate-600">Community Humanitarian Volunteer Initiative</p>
                    <p className="text-[10px] text-slate-500">Supervised by Sawera Ejaz • Contact: 0300-8492041 / ejazch630@gmail.com</p>
                  </div>
                  <div className="text-right">
                    <span className="px-2.5 py-1 rounded bg-[#1B6B4A] text-white text-[10px] font-bold uppercase tracking-wider block mb-1">
                      Donation Voucher
                    </span>
                    <span className="text-[11px] font-mono text-slate-700 font-bold block">
                      {completedRecord.receiptId}
                    </span>
                  </div>
                </div>

                <div className="py-4 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Donor Name</span>
                    <span className="font-bold text-slate-900">{completedRecord.donorName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Date of Donation</span>
                    <span className="font-bold text-slate-900">{completedRecord.date}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Designated Cause</span>
                    <span className="font-bold text-[#1B6B4A]">{completedRecord.causeName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Fund Type</span>
                    <span className="font-bold text-emerald-800">
                      {completedRecord.isZakat ? '100% Zakat Fund (Direct Delivery)' : 'General Sadaqah & Warmth Relief'}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Payment Channel</span>
                    <span className="font-bold text-slate-800 uppercase">{completedRecord.paymentMethod.replace('_', ' ')}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Transaction Ref</span>
                    <span className="font-mono text-slate-800">{completedRecord.transactionRef}</span>
                  </div>
                </div>

                {completedRecord.notes && (
                  <div className="py-2 px-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 mb-3">
                    <strong>Dedication:</strong> {completedRecord.notes}
                  </div>
                )}

                <div className="pt-4 border-t border-slate-300 flex justify-between items-center">
                  <div>
                    <span className="text-xs text-slate-500 block">Total Amount Contributed:</span>
                    <span className="text-2xl font-black text-[#124B33]">
                      {completedRecord.currency} {completedRecord.amount.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-500 ml-2">(PKR {completedRecord.amountPKR.toLocaleString()})</span>
                  </div>

                  <div className="text-right">
                    <div className="font-serif italic text-xs text-slate-800">Sawera Ejaz</div>
                    <span className="text-[10px] text-slate-500 block">Lead Coordinator, Afiyat Welfare</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  type="button"
                  onClick={handlePrintReceipt}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-[#1B6B4A]" />
                  <span>Print / Save Receipt</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setCompletedRecord(null);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#1B6B4A] hover:bg-[#124B33] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Done</span>
                </button>
              </div>
            </div>
          ) : (
            /* ================= DONATION FORM ================= */
            <form onSubmit={handleSubmitDonation} className="space-y-6">
              
              {/* Step 1: Cause Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Select Cause or Program:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {CAUSES_DATA.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedCauseId(c.id)}
                      className={`p-3 rounded-2xl border text-left flex items-center justify-between text-xs transition-all cursor-pointer ${
                        selectedCauseId === c.id
                          ? 'border-[#1B6B4A] bg-emerald-50/70 text-[#124B33] font-bold shadow-sm ring-1 ring-[#1B6B4A]'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div className="truncate pr-2">
                        <span className="block truncate">{c.title}</span>
                        <span className="text-[10px] text-slate-500 font-normal">{c.category}</span>
                      </div>
                      {selectedCauseId === c.id && <Check className="w-4 h-4 text-[#1B6B4A] shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Frequency & Currency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    2. Giving Frequency:
                  </label>
                  <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setFrequency('once')}
                      className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                        frequency === 'once'
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      One-Time
                    </button>
                    <button
                      type="button"
                      onClick={() => setFrequency('monthly')}
                      className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                        frequency === 'monthly'
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Monthly Guardian
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Currency:
                  </label>
                  <select
                    value={currentCurrency}
                    onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
                    className="w-full py-2.5 px-3 rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                  >
                    {Object.keys(CURRENCY_RATES).map((code) => (
                      <option key={code} value={code}>
                        {code} ({CURRENCY_RATES[code].symbol}) - {CURRENCY_RATES[code].name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 3: Amount Selection (Reduced Accessible Rates) */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    3. Select Donation Amount:
                  </label>
                  <span className="text-[11px] text-emerald-700 font-bold">
                    Reduced Accessible Rates (Starting ₨500)
                  </span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-3">
                  {presetsPKR.map((pkrVal) => {
                    const isSelected = amountPKR === pkrVal && !customAmountInput;
                    const valInCurr = Math.round(pkrVal * rate);
                    return (
                      <button
                        key={pkrVal}
                        type="button"
                        onClick={() => handleSelectPreset(pkrVal)}
                        className={`py-2.5 px-2 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#1B6B4A] text-white border-[#1B6B4A] shadow-md shadow-emerald-900/20'
                            : 'border-slate-200 text-slate-700 hover:border-emerald-400 hover:bg-emerald-50/30'
                        }`}
                      >
                        <span className="block">{symbol} {valInCurr.toLocaleString()}</span>
                        <span className="text-[9px] opacity-75 font-normal">₨{pkrVal}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
                    {symbol}
                  </span>
                  <input
                    type="number"
                    min="1"
                    placeholder={`Or enter custom amount in ${currentCurrency}`}
                    value={customAmountInput}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                  />
                </div>
              </div>

              {/* Zakat & Dedication options */}
              <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200/80 space-y-3">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isZakat}
                    onChange={(e) => setIsZakat(e.target.checked)}
                    className="w-4 h-4 rounded text-[#1B6B4A] focus:ring-[#1B6B4A] border-slate-300"
                  />
                  <span className="text-xs text-slate-800 font-semibold">
                    This is my Zakat donation (100% direct relief goods to eligible families)
                  </span>
                </label>

                <div>
                  <input
                    type="text"
                    placeholder="Dedicate this charity in honor / memory of a loved one (Optional)"
                    value={dedicatedTo}
                    onChange={(e) => setDedicatedTo(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Step 4: Donor Details */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  4. Your Details (For Receipt):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp / Mobile Phone"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    className="px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#1B6B4A]"
                  />
                </div>
              </div>

              {/* Step 5: Payment Gateway Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  5. Payment Channel:
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('jazzcash')}
                    className={`p-3 rounded-2xl border text-center text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'jazzcash'
                        ? 'border-red-600 bg-red-50 text-red-700 shadow-sm ring-1 ring-red-500'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Smartphone className="w-5 h-5 mx-auto mb-1 text-red-600" />
                    <span>JazzCash</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('easypaisa')}
                    className={`p-3 rounded-2xl border text-center text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'easypaisa'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-800 shadow-sm ring-1 ring-emerald-500'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Smartphone className="w-5 h-5 mx-auto mb-1 text-emerald-600" />
                    <span>EasyPaisa</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank_transfer')}
                    className={`p-3 rounded-2xl border text-center text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'bank_transfer'
                        ? 'border-[#1B6B4A] bg-emerald-50 text-[#124B33] shadow-sm ring-1 ring-[#1B6B4A]'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Building className="w-5 h-5 mx-auto mb-1 text-[#1B6B4A]" />
                    <span>Bank Transfer</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('credit_card')}
                    className={`p-3 rounded-2xl border text-center text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'credit_card'
                        ? 'border-blue-600 bg-blue-50 text-blue-800 shadow-sm ring-1 ring-blue-500'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                    <span>Card / Visa</span>
                  </button>
                </div>

                {/* Gateway Detail Panels */}
                {paymentMethod === 'jazzcash' && (
                  <div className="p-4 bg-red-50/60 rounded-2xl border border-red-200 text-xs text-slate-800 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-red-900">JazzCash Till ID: #849204</span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard('849204', 'jazz-till')}
                        className="px-2 py-1 bg-white rounded border border-red-300 text-[11px] font-semibold flex items-center gap-1 hover:bg-red-50"
                      >
                        {copiedKey === 'jazz-till' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        Copy Till
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Account Number: <strong>0300-8492041</strong> (Sawera Ejaz)</span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard('03008492041', 'jazz-acct')}
                        className="px-2 py-1 bg-white rounded border border-red-300 text-[11px] font-semibold flex items-center gap-1 hover:bg-red-50"
                      >
                        {copiedKey === 'jazz-acct' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        Copy No.
                      </button>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter your JazzCash Account number or Transaction ID (e.g. 0300... or TID)"
                        value={jazzMobileNumber}
                        onChange={(e) => setJazzMobileNumber(e.target.value)}
                        className="w-full mt-1 px-3 py-2 rounded-xl border border-red-200 bg-white text-xs focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'easypaisa' && (
                  <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200 text-xs text-slate-800 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-emerald-900">EasyPaisa Till ID: #918342</span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard('918342', 'ep-till')}
                        className="px-2 py-1 bg-white rounded border border-emerald-300 text-[11px] font-semibold flex items-center gap-1 hover:bg-emerald-50"
                      >
                        {copiedKey === 'ep-till' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        Copy Till
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Account Number: <strong>0300-8492041</strong> (Sawera Ejaz / Afiyat)</span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard('03008492041', 'ep-acct')}
                        className="px-2 py-1 bg-white rounded border border-emerald-300 text-[11px] font-semibold flex items-center gap-1 hover:bg-emerald-50"
                      >
                        {copiedKey === 'ep-acct' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        Copy No.
                      </button>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter your EasyPaisa Account or Transaction ID"
                        value={jazzMobileNumber}
                        onChange={(e) => setJazzMobileNumber(e.target.value)}
                        className="w-full mt-1 px-3 py-2 rounded-xl border border-emerald-200 bg-white text-xs focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'bank_transfer' && (
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-800 space-y-3">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                      <div className="flex justify-between items-center">
                        <strong className="text-emerald-900">Meezan Bank Ltd (Islamic)</strong>
                        <button
                          type="button"
                          onClick={() => copyToClipboard('PK42MEZN0002890105829103', 'meezan-iban')}
                          className="px-2 py-0.5 bg-emerald-50 border border-emerald-300 rounded text-[10px] font-bold text-emerald-800 hover:bg-emerald-100 flex items-center gap-1"
                        >
                          {copiedKey === 'meezan-iban' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                          Copy IBAN
                        </button>
                      </div>
                      <p className="text-[11px] text-slate-600 font-mono">IBAN: PK42MEZN0002890105829103</p>
                      <p className="text-[11px] text-slate-600">Title: <strong>Sawera Ejaz / Afiyat Welfare Trust</strong> • Main Gulberg Lahore</p>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                      <div className="flex justify-between items-center">
                        <strong className="text-emerald-900">Bank Alfalah Islamic</strong>
                        <button
                          type="button"
                          onClick={() => copyToClipboard('PK19ALFH0551200392817451', 'alfalah-iban')}
                          className="px-2 py-0.5 bg-emerald-50 border border-emerald-300 rounded text-[10px] font-bold text-emerald-800 hover:bg-emerald-100 flex items-center gap-1"
                        >
                          {copiedKey === 'alfalah-iban' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                          Copy IBAN
                        </button>
                      </div>
                      <p className="text-[11px] text-slate-600 font-mono">IBAN: PK19ALFH0551200392817451</p>
                      <p className="text-[11px] text-slate-600">Title: <strong>Sawera Ejaz (Afiyat Welfare)</strong></p>
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Enter your Bank Deposit Slip / Online Transfer Reference No."
                        value={bankTxRef}
                        onChange={(e) => setBankTxRef(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'credit_card' && (
                  <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-200 text-xs text-slate-800 space-y-3">
                    <p className="text-[11px] text-blue-900 font-semibold">
                      Accepting International Visa, MasterCard, UnionPay &amp; American Express.
                    </p>
                    <div>
                      <input
                        type="text"
                        placeholder="Card Number (e.g. 4242 •••• •••• 4242)"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-blue-200 bg-white text-xs focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="MM / YY"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="px-3 py-2 rounded-xl border border-blue-200 bg-white text-xs focus:outline-none"
                      />
                      <input
                        type="password"
                        maxLength={4}
                        placeholder="CVC / CVV"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        className="px-3 py-2 rounded-xl border border-blue-200 bg-white text-xs focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || !donorName.trim()}
                  className="w-full py-4 px-6 rounded-2xl bg-[#E0A526] hover:bg-[#C58E1A] text-slate-900 font-black text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Generating Direct Receipt...</span>
                    </>
                  ) : (
                    <>
                      <Heart className="w-5 h-5 text-red-700 fill-red-700" />
                      <span>
                        Complete Donation ({currentCurrency} {Math.round(amountPKR * rate).toLocaleString()})
                      </span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  🔒 Direct receipt issued. Video &amp; photo confirmation sent on WhatsApp.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
