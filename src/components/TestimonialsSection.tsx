import React from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { REVIEWS } from '../data/workshopData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-amber-400 mb-2 uppercase tracking-wider font-semibold">
            <Star className="w-4 h-4 fill-amber-400" />
            <span>Real Local Social Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Trusted by 320+ Kuching Drivers
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Verified experiences from everyday car owners, contractors, and executives across Pending, Tabuan, and Greater Kuching.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg"
            >
              <div>
                {/* Review Header: Stars & Verification */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" /> {rev.verifiedPlatform}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Review Author & Vehicle Metadata */}
              <div className="border-t border-slate-800/80 pt-4 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-heading font-bold text-sm text-white">{rev.author}</h3>
                  <p className="text-xs text-slate-400">{rev.roleLocation}</p>
                  <p className="text-[11px] font-mono text-amber-400 mt-1">
                    Vehicle: {rev.vehicle}
                  </p>
                </div>

                {rev.savedAmount && (
                  <div className="text-right shrink-0">
                    <span className="inline-block text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-200">
                      {rev.savedAmount}
                    </span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Google Reviews Live Proof Bar */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-full bg-slate-950 border border-slate-800 text-xs text-slate-300">
            <span className="font-semibold text-white">4.9 Stars on Google Maps</span>
            <span className="text-slate-600">·</span>
            <span>Based on 320+ independent local customer ratings</span>
            <span className="text-slate-600">·</span>
            <a
              href="https://maps.google.com/?q=Apex+AutoCraft+Kuching"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4"
            >
              Read all reviews on Google →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
