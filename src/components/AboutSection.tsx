import React from 'react';
import { Award, Users, CheckCircle2, Coffee, Wifi, Shield, Wrench, Sparkles } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Narrative */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-3 uppercase tracking-wider font-semibold">
              <Award className="w-4 h-4" />
              <span>Founded in Pending · 2016</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight mb-6">
              Founded on One Principle: Total Mechanical Honesty for Kuching Drivers.
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                For decades, Kuching drivers faced a frustrating dilemma: pay inflated dealership rates with 3-week booking delays, or trust backyard workshops that guess symptoms and surprise you with unexpected bills upon pickup.
              </p>
              <p>
                In 2016, two senior mechanics—<strong>Ah Meng</strong> (formerly Master Technician at an authorized Japanese 4S centre) and <strong>Dominic</strong> (a diagnostic electrical specialist)—opened Apex AutoCraft across 3 adjacent shoplots in Pending Industrial Estate.
              </p>
              <p>
                Their mission was uncompromising: bring dealership-calibre computerized scanning tools and certified fluids (Motul, Liqui Moly) to everyday drivers, paired with a modern digital photo inspection workflow where <em>no repair is executed without written WhatsApp client consent.</em>
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800">
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-amber-400 block">
                  8+ Years
                </span>
                <span className="text-xs text-slate-400 mt-0.5 block">Serving Sarawak</span>
              </div>
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white block">
                  14,800+
                </span>
                <span className="text-xs text-slate-400 mt-0.5 block">Vehicles Serviced</span>
              </div>
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-400 block">
                  5 Lifts
                </span>
                <span className="text-xs text-slate-400 mt-0.5 block">Hydraulic Hoist Bays</span>
              </div>
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white block">
                  11 Staff
                </span>
                <span className="text-xs text-slate-400 mt-0.5 block">Certified Crew</span>
              </div>
            </div>

          </div>

          {/* Right Column: Customer Lounge & Facility Showcase */}
          <div className="md:col-span-5">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <span className="text-[10px] uppercase font-mono text-amber-400 tracking-wider block">
                    The Apex Experience
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white mt-0.5">
                    Not Your Typical Greasy Garage
                  </h3>
                </div>
                <Coffee className="w-5 h-5 text-amber-400" />
              </div>

              {/* Lounge Features Grid */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Air-Conditioned Lounge & Espresso Bar</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Complimentary freshly ground bean-to-cup coffee and cold bottled water.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                    <Wifi className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">High-Speed Fiber Wi-Fi & Workstation</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Work productively on your laptop with power sockets while you wait.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Full-Glass Bay Observation Window</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Watch our certified mechanics service your vehicle in real time.</p>
                  </div>
                </div>
              </div>

              {/* Early Bird Key Drop Box note */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
                <span className="text-slate-200 font-semibold block mb-0.5">Early-Bird Commuter Drop-Off</span>
                Need to beat the morning Samarahan traffic? Use our secure key drop box anytime from 7:30 AM before workshop opens.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
