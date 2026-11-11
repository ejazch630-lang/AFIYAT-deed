import React from 'react';
import { X, Printer, Share2, Heart, Smartphone, Building, Phone, Mail, Sparkles, CheckCircle2 } from 'lucide-react';

interface PamphletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDonate: (causeId?: string, amountPKR?: number) => void;
}

export const PamphletModal: React.FC<PamphletModalProps> = ({ isOpen, onClose, onOpenDonate }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `*❄️ سرمائی امداد مہم 2026 — عافیت ویلفیئر (قیادت: سویرا اعجاز)*\n\n` +
      `سخت سردی میں پسماندہ بچوں اور بزرگوں کو گرم کپڑے اور کمبل فراہم کرنے میں ہمارا ساتھ دیں۔\n\n` +
      `*مناسب اور آسان پیکیجز:*\n` +
      `🧣 ٹوپی، دستانے، جرابیں: ₨ 500\n` +
      `🛏️ گرم کمبل / لحاف: ₨ 1,200\n` +
      `🧥 گرم فلیس جیکٹ اور جوتے: ₨ 1,500\n` +
      `📦 مکمل چائلڈ ونٹر کٹ: ₨ 2,500\n` +
      `👨‍👩‍👧‍👦 فیملی ونٹر پیک: ₨ 5,000\n\n` +
      `*اکاؤنٹ کی تفصیلات:*\n` +
      `📱 JazzCash: 0300-8492041 (سویرا اعجاز) | Till ID: 849204\n` +
      `📱 EasyPaisa: 0300-8492041 (سویرا اعجاز) | Till ID: 918342\n` +
      `🏦 Meezan Bank IBAN: PK42MEZN0002890105829103\n\n` +
      `رابطہ و واٹس ایپ: 0300-8492041\n` +
      `ای میل: ejazch630@gmail.com\n\n` +
      `جزاک اللہ خیر!`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full my-6 max-h-[94vh] overflow-y-auto shadow-2xl border-4 border-[#1B6B4A] relative flex flex-col">
        
        {/* Top Control Bar (Hidden when printed) */}
        <div className="sticky top-0 z-20 bg-slate-900 text-white px-5 py-3 flex items-center justify-between rounded-t-2xl no-print">
          <div className="flex items-center gap-2">
            <span className="text-lg">📄</span>
            <span className="text-xs sm:text-sm font-bold">Afiyat Official Pamphlet (عافیت ویلفیئر پمفلٹ)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-400" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={handleShareWhatsApp}
              className="px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share on WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Pamphlet Canvas */}
        <div id="printable-receipt" className="p-6 sm:p-8 bg-[#FAF7F0] text-slate-800">
          
          {/* Pamphlet Ornamental Header */}
          <div className="border-4 border-double border-[#1B6B4A] rounded-2xl p-5 bg-white text-center shadow-sm relative overflow-hidden mb-6">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1B6B4A] via-[#E0A526] to-[#124B33]" />
            
            <p className="font-urdu text-sm text-[#1B6B4A] font-bold mb-1">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>

            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-2xl">🌱</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#124B33] tracking-tight">
                عافیت ویلفیئر
              </h2>
            </div>
            
            <p className="text-xs font-bold text-[#E0A526] tracking-wider uppercase mb-1">
              Afiyat Welfare • Humanitarian Volunteer Initiative
            </p>
            <p className="text-xs text-slate-600 font-semibold mb-3">
              قیادت و ذاتی نگرانی: <strong>سویرا اعجاز (Sawera Ejaz)</strong>
            </p>

            <div className="py-2 px-4 bg-[#1B6B4A] text-white rounded-xl inline-block shadow">
              <h3 className="text-base sm:text-lg font-black font-urdu">
                ❄️ سرمائی امداد مہم 2026 — سردی سے تحفظ
              </h3>
              <p className="text-[11px] text-emerald-100">
                “کوئی بچہ سردی سے نہ کانپے — آپ کا ایک گرم سویٹر اور کمبل زندگی بچا سکتا ہے”
              </p>
            </div>
          </div>

          {/* Reduced Accessible Packages Grid */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
              آسان اور سستے امدادی پیکیجز (Affordable Winter Bundles)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-900">
              
              <div className="p-3.5 rounded-xl border-2 border-emerald-600 bg-white shadow-sm flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-sm text-[#124B33]">1. ٹوپی، دستانے اور جرابیں</h5>
                  <p className="text-[11px] text-slate-500">Warm Beanie, Gloves &amp; Socks Pack</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-emerald-700">₨ 500</span>
                  <span className="block text-[9px] text-slate-400">فی بچہ</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border-2 border-emerald-600 bg-white shadow-sm flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-sm text-[#124B33]">2. ڈبل گرم لحاف / کمبل</h5>
                  <p className="text-[11px] text-slate-500">Double-ply Insulated Warm Quilt</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-emerald-700">₨ 1,200</span>
                  <span className="block text-[9px] text-slate-400">فی فیملی</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border-2 border-emerald-600 bg-white shadow-sm flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-sm text-[#124B33]">3. بچوں کی گرم فلیس جیکٹ اور جوتے</h5>
                  <p className="text-[11px] text-slate-500">Heavy Hooded Winter Coat &amp; Snow Shoes</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-emerald-700">₨ 1,500</span>
                  <span className="block text-[9px] text-slate-400">فی بچہ</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border-2 border-amber-500 bg-amber-50/50 shadow-sm flex items-center justify-between">
                <div>
                  <div className="inline-block px-2 py-0.5 bg-[#E0A526] text-slate-900 text-[9px] font-bold rounded-full mb-0.5">
                    سب سے مقبول
                  </div>
                  <h5 className="font-bold text-sm text-slate-900">4. مکمل چائلڈ ونٹر کٹ</h5>
                  <p className="text-[11px] text-slate-600">جیکٹ + کمبل + ٹوپی + جوتے + جرابیں</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-amber-900">₨ 2,500</span>
                  <span className="block text-[9px] text-slate-500">مکمل ونٹر پیک</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border-2 border-slate-300 bg-white shadow-sm flex items-center justify-between sm:col-span-2">
                <div>
                  <h5 className="font-bold text-sm text-[#124B33]">5. فیملی ونٹر راشن و کمبل پیکیج</h5>
                  <p className="text-[11px] text-slate-500">2 کمبل + 2 گرم جیکٹس + سردیوں کا خوراک پیک</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-[#1B6B4A]">₨ 5,000</span>
                  <span className="block text-[9px] text-slate-400">مکمل خاندان</span>
                </div>
              </div>

            </div>
          </div>

          {/* Account Details Box in Pamphlet */}
          <div className="p-4 bg-emerald-950 text-white rounded-2xl border-2 border-[#E0A526] mb-6">
            <h4 className="text-center font-bold text-xs uppercase tracking-widest text-[#E0A526] mb-3">
              عطیات اور زکوٰۃ جمع کروانے کے لیے آفیشل اکاؤنٹس
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                <div className="flex items-center gap-1.5 font-bold text-red-400 mb-1">
                  <Smartphone className="w-4 h-4" /> JazzCash
                </div>
                <p>نمبر: <strong>0300-8492041</strong></p>
                <p>عنوان: <strong>Sawera Ejaz</strong></p>
                <p className="text-[11px] text-amber-300">Till ID: <strong>849204</strong></p>
              </div>

              <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                <div className="flex items-center gap-1.5 font-bold text-emerald-400 mb-1">
                  <Smartphone className="w-4 h-4" /> EasyPaisa
                </div>
                <p>نمبر: <strong>0300-8492041</strong></p>
                <p>عنوان: <strong>Sawera Ejaz (Afiyat)</strong></p>
                <p className="text-[11px] text-amber-300">Till ID: <strong>918342</strong></p>
              </div>

              <div className="p-3 bg-white/10 rounded-xl border border-white/10 sm:col-span-2">
                <div className="flex items-center gap-1.5 font-bold text-[#E0A526] mb-1">
                  <Building className="w-4 h-4" /> Meezan Bank Ltd (Islamic)
                </div>
                <p>اکاؤنٹ کا عنوان: <strong>Sawera Ejaz / Afiyat Welfare Trust</strong></p>
                <p className="font-mono text-[11px] text-emerald-300">IBAN: PK42MEZN0002890105829103</p>
                <p className="text-[10px] text-slate-300">مین گلبرگ برانچ، لاہور</p>
              </div>
            </div>
          </div>

          {/* Pamphlet Footer / Contact */}
          <div className="border-t border-slate-300 pt-3 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-2">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#1B6B4A]" /> <strong>0300-8492041</strong>
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#1B6B4A]" /> <strong>ejazch630@gmail.com</strong>
              </span>
            </div>

            <div className="text-right">
              <span className="text-[11px] text-emerald-800 font-bold block">
                100% زکوٰۃ کی براہِ راست تقسیم
              </span>
              <span className="text-[10px] text-slate-400">عوامی فلاحی تحریک • زیرِ نگرانی سویرا اعجاز</span>
            </div>
          </div>

        </div>

        {/* Bottom CTA (hidden in print) */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 rounded-b-2xl flex flex-wrap gap-3 justify-between items-center no-print">
          <span className="text-xs text-slate-600">
            Share this pamphlet with family and friends on WhatsApp groups to multiply the reward.
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenDonate('winter-relief-2026', 1500);
              }}
              className="px-5 py-2 rounded-xl bg-[#1B6B4A] hover:bg-[#124B33] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 text-[#E0A526] fill-[#E0A526]" />
              <span>Donate Online Now</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
