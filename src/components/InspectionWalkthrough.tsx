import React, { useState } from 'react';
import { ShieldCheck, Camera, Smartphone, CheckCircle, FileText, ArrowRight, Wrench } from 'lucide-react';
import { INSPECTION_CHECKLIST } from '../data/workshopData';

export const InspectionWalkthrough: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<string>('all');

  const zones = ['all', 'Engine & Fluids', 'Brakes & Tires', 'Undercarriage & 4WD', 'Climate & Electronics'];

  const filteredPoints = selectedZone === 'all'
    ? INSPECTION_CHECKLIST
    : INSPECTION_CHECKLIST.filter((p) => p.zone === selectedZone);

  return (
    <section id="process" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-amber-400 mb-2 uppercase tracking-wider font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>The Zero-Surprise Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            How Every Car Is Treated at Apex
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            We removed the mystery from car repairs. Here is our exact 4-step workflow that ensures you are in total control of your money and vehicle.
          </p>
        </div>

        {/* 4 Steps Visual Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 relative">
            <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest block mb-3">
              01. Check-In & Shield
            </span>
            <h3 className="font-heading font-bold text-base text-white mb-2">
              Protective Interior Dressing
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Before anyone touches your car, we install protective disposable seat covers, steering wheel cling film, and paper floor mats. Your interior stays spotless.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 relative">
            <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest block mb-3">
              02. Digital Inspection
            </span>
            <h3 className="font-heading font-bold text-base text-white mb-2">
              21-Point Photographic Scan
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our technicians inspect fluid health, brake pad thickness (in mm), suspension play, and battery cold-cranking amps, capturing close-up photos of all wear.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 relative">
            <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest block mb-3">
              03. WhatsApp Approval
            </span>
            <h3 className="font-heading font-bold text-base text-white mb-2">
              You Green-Light Every Cent
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              You receive an itemized WhatsApp quote with photos and urgency ratings. We only proceed with repairs you explicitly choose and approve.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 relative">
            <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest block mb-3">
              04. Handover & Warranty
            </span>
            <h3 className="font-heading font-bold text-base text-white mb-2">
              Old Parts Boxed in Boot
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Collect your keys along with your written 6-month / 10,000 km warranty certificate. All replaced old parts are neatly boxed in your boot for verification.
            </p>
          </div>

        </div>

        {/* 21-Point Inspection Checklist Preview */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
            <div>
              <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                <Camera className="w-5 h-5 text-amber-400" />
                <span>Sample Points from Our 21-Point Digital Inspection</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Every customer receives this checklist with real photos directly on WhatsApp.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {zones.map((zone) => (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    selectedZone === zone
                      ? 'bg-amber-500 text-slate-950 font-semibold'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {zone === 'all' ? 'All Points' : zone}
                </button>
              ))}
            </div>
          </div>

          {/* Inspection Items Table/Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPoints.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-amber-400 mb-1">
                    <span>{item.zone}</span>
                    <span className="text-slate-400">Tool: {item.method.split('&')[0]}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">{item.title}</h4>
                  <p className="text-xs text-slate-400">
                    <span className="text-slate-300 font-medium">Why we check: </span>
                    {item.whatWeLookFor}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
