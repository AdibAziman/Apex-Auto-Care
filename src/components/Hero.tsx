import React from 'react';
import { MessageCircle, ShieldCheck, CheckCircle2, ChevronRight, Activity, Wrench, Sparkles, Clock, ArrowUpRight, Star } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';
import { generateWhatsAppLink } from '../utils/whatsappHelper';

interface HeroProps {
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator }) => {
  const heroWhatsApp = generateWhatsAppLink({
    serviceName: 'Diagnostic Inspection / Routine Service Inquiry',
  });

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Subtle Technical Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #f59e0b 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Atmospheric Ambient Lighting Gradient (No circular blobs) */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.04] via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-14 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start w-full">
            
            {/* Unboxed Metadata & Verification Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-4 sm:mb-6">
              <span className="text-amber-400 font-semibold flex items-center gap-1.5 whitespace-nowrap">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                4.9/5 Rating
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="whitespace-nowrap">320+ Verified Reviews</span>
              <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>
              <span className="text-slate-300 whitespace-nowrap">Pending, Kuching</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-extrabold text-white tracking-tight leading-[1.15] mb-4 sm:mb-6">
              Dealer-Grade Car Care in Kuching.
              <span className="block text-amber-400 mt-1">Zero Surprise Bills. Honest Mechanics.</span>
            </h1>

            {/* Body Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mb-6 sm:mb-8">
              From daily Peroduas conquering the Samarahan jam to heavy-duty Hilux pickups back from the interior and out-of-warranty BMWs, we bring dealer-level computerized diagnostics and certified servicing to Pending. We take photos of every worn component and send them to your WhatsApp before turning a single bolt.
            </p>

            {/* Action Buttons (flex-wrap ensures no button ever overflows or gets covered) */}
            <div className="w-full flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-10">
              <a
                href={heroWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-lg bg-emerald-600 text-white font-semibold text-xs sm:text-sm lg:text-base hover:bg-emerald-500 shadow-lg shadow-emerald-950/40 active:scale-[0.98] transition-all whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>WhatsApp Us for a Free Quote</span>
              </a>

              <button
                onClick={onOpenEstimator}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 font-semibold text-xs sm:text-sm lg:text-base hover:bg-slate-800 hover:border-slate-600 active:scale-[0.98] transition-all whitespace-nowrap shrink-0"
              >
                <span>Calculate Service Price</span>
                <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
              </button>
            </div>

            {/* Proof Badges List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full border-t border-slate-800/80 pt-4 sm:pt-6">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp photo approval</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Written 6-month warranty</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Old parts returned in boot</span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Workshop Facility & Assurance Card */}
          <div className="lg:col-span-5 w-full max-w-2xl mx-auto lg:max-w-none mt-8 lg:mt-0">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-5 sm:p-6 lg:p-7 shadow-2xl overflow-hidden">
              
              {/* Card Header: Real Facility Overview */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 sm:pb-4 mb-4 sm:mb-5 gap-2">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-amber-400 font-semibold uppercase tracking-wider block">
                    Pending Workshop Facility
                  </span>
                  <h2 className="text-sm sm:text-base font-heading font-bold text-white mt-0.5 leading-snug">
                    3 Covered Shoplots · 5 Hydraulic Hoists
                  </h2>
                </div>
                <div className="text-right shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Open Today
                  </span>
                </div>
              </div>

              {/* Service Bays Snapshot */}
              <div className="space-y-3 mb-5 sm:mb-6">
                <div className="bg-slate-950/80 p-3 sm:p-3.5 rounded-xl border border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      B1-3
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-semibold text-slate-100 block">Periodic Maintenance & Brakes</span>
                      <span className="text-[11px] text-slate-400 block">Motul & Liqui Moly synthetic lubricants</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 shrink-0 whitespace-nowrap bg-slate-900 px-2 py-0.5 rounded border border-slate-800">45–60 mins</span>
                </div>

                <div className="bg-slate-950/80 p-3 sm:p-3.5 rounded-xl border border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      B4
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-semibold text-slate-100 block">Sarawak 4x4 & Pickup Specialist</span>
                      <span className="text-[11px] text-slate-400 block">Hilux, Ranger, D-Max suspension & driveline</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 shrink-0 whitespace-nowrap bg-slate-900 px-2 py-0.5 rounded border border-slate-800">Heavy-Duty</span>
                </div>

                <div className="bg-slate-950/80 p-3 sm:p-3.5 rounded-xl border border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      B5
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-semibold text-slate-100 block">Continental & German OBD2 Lab</span>
                      <span className="text-[11px] text-slate-400 block">BMW ISTA, Mercedes Xentry & VAG</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 shrink-0 whitespace-nowrap bg-slate-900 px-2 py-0.5 rounded border border-slate-800">OEM Parts</span>
                </div>
              </div>

              {/* Verified Trust Standards Box */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900 border border-slate-800 mb-4 sm:mb-5">
                <span className="text-xs font-semibold text-slate-200 block mb-2">Our Strict Customer Guarantee:</span>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>WhatsApp photo approval</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Old parts packed in boot</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>6-Month written warranty</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>SPay Global / DuitNow</span>
                  </div>
                </div>
              </div>

              {/* Service Advisor Direct Contact Banner */}
              <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-slate-800 text-xs gap-2">
                <div className="min-w-0">
                  <span className="text-slate-400 text-[10px] sm:text-[11px] block">Front-Desk Service Advisor:</span>
                  <span className="font-semibold text-white truncate block">Dayang · English / BM / Mandarin</span>
                </div>
                <a
                  href={`tel:${WORKSHOP_INFO.phoneClean}`}
                  className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-colors flex items-center gap-1 shrink-0 whitespace-nowrap"
                >
                  <span>{WORKSHOP_INFO.phone}</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
