import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, ShieldCheck } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';
import { generateWhatsAppLink } from '../utils/whatsappHelper';

export const Footer: React.FC = () => {
  const defaultWhatsApp = generateWhatsAppLink({
    serviceName: 'General Inquiry',
  });

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-24 md:pb-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Info & Story (Col 1-4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-heading font-black text-lg">
                A
              </div>
              <span className="font-heading font-bold text-lg text-white tracking-tight">
                Apex AutoCraft
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed mb-4 max-w-sm">
              Kuching's premier independent automotive diagnostic and maintenance centre. Built on radical transparency, photographic inspection before work begins, and a written 6-month warranty.
            </p>

            <div className="text-[11px] font-mono text-slate-500">
              {WORKSHOP_INFO.registeredName} · {WORKSHOP_INFO.malayName}
            </div>
          </div>

          {/* Quick Links (Col 5-7) */}
          <div className="lg:col-span-3">
            <span className="font-heading font-semibold text-xs uppercase tracking-wider text-slate-200 block mb-4">
              Specialized Services
            </span>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Scheduled Oil Service (Motul / Liqui Moly)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Computerized OBD2 Diagnostics & Electrical
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Car Air Conditioning Gas & Overhaul
                </a>
              </li>
              <li>
                <a href="#four-by-four" className="hover:text-amber-400 transition-colors">
                  Sarawak 4x4 Heavy-Duty Suspension Hub
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Continental Vehicle Care (BMW / Mercedes / VW)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  On-Car Brake Disc Rotor Skimming
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact (Col 8-12) */}
          <div className="lg:col-span-5">
            <span className="font-heading font-semibold text-xs uppercase tracking-wider text-slate-200 block mb-4">
              Workshop Location & Hours
            </span>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {WORKSHOP_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono text-slate-300">
                  Desk: {WORKSHOP_INFO.phone} | Emergency: {WORKSHOP_INFO.emergencyPhone}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-mono text-slate-300">
                  {WORKSHOP_INFO.email}
                </span>
              </div>
            </div>

            {/* Local payment badges */}
            <div className="mt-5 pt-5 border-t border-slate-900">
              <span className="text-[10px] uppercase font-mono text-slate-500 block mb-2">
                Accepted Payment Methods
              </span>
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-400">
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-400 font-semibold">
                  SPay Global (Sarawak Pay)
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-rose-400 font-semibold">
                  DuitNow QR
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-blue-400 font-semibold">
                  Visa / Mastercard
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-emerald-400 font-semibold">
                  GrabPay / Boost
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Area Coverage */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {WORKSHOP_INFO.registeredName}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span>Serving Pending</span>
            <span>·</span>
            <span>Tabuan Jaya</span>
            <span>·</span>
            <span>Bintawa</span>
            <span>·</span>
            <span>Kota Samarahan</span>
            <span>·</span>
            <span>Kuching, Sarawak</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
