import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';
import { generateWhatsAppLink } from '../utils/whatsappHelper';

export const MobileStickyDock: React.FC = () => {
  const quickWhatsApp = generateWhatsAppLink({
    serviceName: 'Quick Workshop Service Inquiry',
  });

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="grid grid-cols-12 gap-2">
        
        {/* Left: Quick Call Phone Button (40% width) */}
        <a
          href={`tel:${WORKSHOP_INFO.phoneClean}`}
          className="col-span-4 flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 active:bg-slate-800 text-xs font-semibold select-none transition-colors"
          aria-label="Call Workshop Desk"
        >
          <Phone className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="truncate">Call Desk</span>
        </a>

        {/* Right: Primary WhatsApp Direct Lead Generator (60% width) */}
        <a
          href={quickWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-8 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 text-white font-semibold text-xs active:bg-emerald-500 shadow-lg shadow-emerald-950/50 select-none transition-colors"
          aria-label="Chat on WhatsApp with Service Advisor"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span className="truncate">WhatsApp Estimate</span>
        </a>

      </div>
    </div>
  );
};
