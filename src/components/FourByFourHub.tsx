import React from 'react';
import { Compass, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight, Gauge, Wrench, Mountain } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/whatsappHelper';

export const FourByFourHub: React.FC = () => {
  const pickupWhatsApp = generateWhatsAppLink({
    serviceName: '4x4 Suspension / Overland Inspection',
    carMakeModel: 'Toyota Hilux / Ford Ranger / Isuzu D-Max',
    specificIssue: 'Inquiry regarding 4WD suspension tuning, bushing replacement, and driveline maintenance.',
  });

  return (
    <section id="four-by-four" className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Intro */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="md:col-span-6">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3 uppercase tracking-wider font-semibold">
              <Compass className="w-4 h-4" />
              <span>Sarawak 4x4 & Pickup Specialist Hub</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight mb-4">
              Built for Sarawak Interior Roads, Estates & Weekend Overlanding.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Between tropical downpours, oil palm estate gravel, and long hauls across Serian and Sri Aman, pickup trucks in Sarawak take extraordinary punishment. Standard workshops simply swap oil; we engineer durability into your suspension, bushings, and four-wheel-drive gearboxes.
            </p>

            {/* 4x4 Specialization Highlights */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Heavy-Duty Polyurethane Bushing Overhauls</h3>
                  <p className="text-xs text-slate-400">Eliminates clunking noises and wandering steering over rough gravel roads.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">High-Pressure Differential & Transfer Case Flushes</h3>
                  <p className="text-xs text-slate-400">Protects your front differential, rear LSD, and 4WD actuators from water contamination.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Dedicated 4WD Alignment & Lift Geometry</h3>
                  <p className="text-xs text-slate-400">Accurate caster and camber adjustment prevents premature outer-edge tire shredding.</p>
                </div>
              </div>
            </div>

            <a
              href={pickupWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-950/40"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book a 4x4 Suspension Diagnostic on WhatsApp</span>
            </a>
          </div>

          {/* Right Visual Graphic: 4x4 Rig Architecture Card */}
          <div className="md:col-span-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider block">
                    Supported 4x4 Platforms
                  </span>
                  <h4 className="text-base font-heading font-bold text-white mt-0.5">
                    Toyota · Ford · Isuzu · Mitsubishi · Nissan
                  </h4>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono">
                  Pending Bay 01 & 02
                </div>
              </div>

              {/* 4WD Diagnostic Spec Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                  <Mountain className="w-5 h-5 text-amber-400 mb-2" />
                  <span className="text-xs font-semibold text-white block">Pre-Interior Check</span>
                  <span className="text-[11px] text-slate-400 mt-1 block">Full drive shaft, CV boot, and cooling check before long highway & trail journeys.</span>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                  <Gauge className="w-5 h-5 text-emerald-400 mb-2" />
                  <span className="text-xs font-semibold text-white block">Turbo & Intercooler</span>
                  <span className="text-[11px] text-slate-400 mt-1 block">Boost pressure check and diesel EGR soot clean to restore full pulling torque.</span>
                </div>
              </div>

              {/* Vehicle tags banner */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
                <span>Hilux Revo / Rocco</span>
                <span>•</span>
                <span>Ford Ranger T6 / Next-Gen</span>
                <span>•</span>
                <span>Isuzu D-Max 1.9 / 3.0</span>
                <span>•</span>
                <span>Triton Athlete</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
