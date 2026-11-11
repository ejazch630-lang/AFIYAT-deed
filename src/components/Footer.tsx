import React, { useState } from 'react';
import { Heart, Mail, Phone, MapPin, Send, MessageCircle, ArrowUp, FileText, Users } from 'lucide-react';

interface FooterProps {
  onOpenDonate: () => void;
  onOpenZakat: () => void;
  onOpenVolunteer: () => void;
  onOpenPamphlet?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDonate,
  onOpenZakat,
  onOpenVolunteer,
  onOpenPamphlet,
}) => {
  const [emailSub, setEmailSub] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmailSub('');
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#124B33] text-white pt-16 pb-12 relative overflow-hidden border-t-4 border-[#E0A526]">
      
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-emerald-700/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-800/80">
          
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl shadow-inner border border-white/20">
                🌱
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">Afiyat Welfare</span>
                <span className="block text-[10px] tracking-widest uppercase font-bold text-[#E0A526]">
                  Volunteer Humanitarian Movement
                </span>
              </div>
            </div>

            <p className="font-urdu text-sm text-[#E0A526] mb-3 leading-relaxed">
              عافیت ویلفیئر — خدمتِ خلق، امید اور زندگی (قیادت: سویرا اعجاز)
            </p>

            <p className="text-xs text-emerald-100/90 leading-relaxed mb-5">
              Afiyat Welfare is a community volunteer initiative led by <strong>Sawera Ejaz</strong>, dedicated to transforming lives through Affordable Winter Warmth relief, Free Healthcare, and Child Education across Pakistan.
            </p>

            <div className="bg-emerald-950/60 p-3.5 rounded-2xl border border-emerald-800/50 text-[11px] text-emerald-200 space-y-1">
              <p>• 100% Volunteer Driven &amp; On-Ground Personal Supervision</p>
              <p>• Zero Administrative Salary Cuts on Zakat / Donations</p>
              <p>• Direct JazzCash &amp; EasyPaisa: <strong>0300-8492041</strong></p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-sm text-[#E0A526] uppercase tracking-wider mb-4">
              Programs
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/80">
              <li>
                <a href="#winter-relief" className="hover:text-white transition-colors">Winter Warmth Drive</a>
              </li>
              <li>
                <a href="#causes" className="hover:text-white transition-colors">Free Mobile Medicine</a>
              </li>
              <li>
                <a href="#causes" className="hover:text-white transition-colors">Child School Sponsoring</a>
              </li>
              <li>
                <a href="#causes" className="hover:text-white transition-colors">Widow Ration Baskets</a>
              </li>
              <li>
                <a href="#causes" className="hover:text-white transition-colors">Clean Water Hand Pumps</a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenZakat}
                  className="text-[#E0A526] font-bold hover:underline"
                >
                  Zakat Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Organization & Leadership */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-sm text-[#E0A526] uppercase tracking-wider mb-4">
              Sawera Ejaz &amp; Team
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/80">
              <li>
                <a href="#founder-profile" className="hover:text-white transition-colors flex items-center gap-1 font-semibold text-amber-300">
                  <span>Founder Profile Gig</span>
                </a>
              </li>
              {onOpenPamphlet && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenPamphlet}
                    className="hover:text-white transition-colors flex items-center gap-1 font-bold text-[#E0A526]"
                  >
                    <FileText className="w-3 h-3" />
                    <span>Download Pamphlet (پمفلٹ)</span>
                  </button>
                </li>
              )}
              <li>
                <a href="#stories" className="hover:text-white transition-colors">Beneficiary Stories</a>
              </li>
              <li>
                <a href="#impact" className="hover:text-white transition-colors">Field Impact Hubs</a>
              </li>
              <li>
                <a href="#transparency" className="hover:text-white transition-colors">Direct Delivery Policy</a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenVolunteer}
                  className="hover:text-white transition-colors"
                >
                  Join as Volunteer
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-sm text-[#E0A526] uppercase tracking-wider mb-4">
              Direct Contact
            </h4>

            <div className="space-y-2.5 text-xs text-emerald-100 mb-5">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E0A526] shrink-0 mt-0.5" />
                <span>Base: Main Gulberg III, Lahore, Punjab, Pakistan</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E0A526] shrink-0" />
                <a href="mailto:ejazch630@gmail.com" className="hover:text-white underline">
                  ejazch630@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E0A526] shrink-0" />
                <a href="tel:+923008492041" className="hover:text-white">
                  +92 300 8492041
                </a>
              </p>
            </div>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="space-y-2">
              <label className="text-[11px] text-emerald-200 block font-medium">
                Subscribe for video updates of on-ground distributions:
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={emailSub}
                  onChange={(e) => setEmailSub(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-emerald-950/80 border border-emerald-800 text-xs text-white placeholder:text-emerald-400 focus:outline-none focus:ring-1 focus:ring-[#E0A526]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#E0A526] hover:bg-[#C58E1A] text-slate-900 font-bold text-xs shrink-0 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[10px] text-[#E0A526] animate-in fade-in">
                  ✓ Subscribed! Thank you for standing with Afiyat Welfare.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200">
          <p>
            © {new Date().getFullYear()} Afiyat Welfare. A grassroots volunteer movement led by Sawera Ejaz.
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenDonate}
              className="text-[#E0A526] font-bold hover:underline"
            >
              Donate Online
            </button>
            <span>•</span>
            {onOpenPamphlet && (
              <>
                <button
                  type="button"
                  onClick={onOpenPamphlet}
                  className="text-amber-300 font-bold hover:underline"
                >
                  Pamphlet (پمفلٹ)
                </button>
                <span>•</span>
              </>
            )}
            <button
              type="button"
              onClick={onOpenZakat}
              className="text-white hover:underline"
            >
              Zakat Calculator
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://wa.me/923008492041?text=Salam%20Afiyat%20Welfare%20team,%20I%20would%20like%20to%20support%20the%20Winter%20Relief%20Drive%20or%20pay%20Zakat."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all border-2 border-white cursor-pointer group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2 text-slate-900 group-hover:text-white">
          WhatsApp Us
        </span>
      </a>
    </footer>
  );
};
