import React, { useState } from 'react';
import { Wrench, Zap, Wind, Compass, Sparkles, Disc, Clock, CheckCircle2, MessageCircle, ChevronRight } from 'lucide-react';
import { SERVICES_CATALOG, ServicePackage } from '../data/workshopData';
import { generateWhatsAppLink } from '../utils/whatsappHelper';

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = activeCategory === 'all' 
    ? SERVICES_CATALOG 
    : SERVICES_CATALOG.filter(s => s.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'maintenance': return <Wrench className="w-4 h-4 text-amber-500" />;
      case 'diagnostics': return <Zap className="w-4 h-4 text-blue-500" />;
      case 'aircond': return <Wind className="w-4 h-4 text-cyan-500" />;
      case '4x4': return <Compass className="w-4 h-4 text-emerald-500" />;
      case 'continental': return <Sparkles className="w-4 h-4 text-purple-500" />;
      case 'brakes': return <Disc className="w-4 h-4 text-rose-500" />;
      default: return <Wrench className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2 uppercase tracking-wider font-semibold">
              <Wrench className="w-4 h-4" />
              <span>Full Service Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              Transparent Workshop Services
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Factory-grade equipment and genuine certified fluids. No surprise additions to your invoice.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800/80 overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'maintenance', label: 'Engine Service' },
              { id: '4x4', label: '4x4 & Pickups' },
              { id: 'aircond', label: 'Aircond' },
              { id: 'diagnostics', label: 'Diagnostics' },
              { id: 'continental', label: 'Continental' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === tab.id
                    ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const serviceWhatsApp = generateWhatsAppLink({
              serviceName: service.name,
              estimatedPrice: service.startingPrice.national || service.startingPrice.japanese || service.startingPrice.fourByFour || service.startingPrice.continental,
            });

            return (
              <div
                key={service.id}
                className="bg-slate-950 border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-xl group"
              >
                <div>
                  {/* Top Bar with Icon & Turnaround */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>~{service.turnaroundMinutes} mins</span>
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                    {service.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 border-t border-slate-900 pt-4 mb-6">
                    {service.highlightSpecs.slice(0, 3).map((spec, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Pricing & CTA */}
                <div className="border-t border-slate-800/80 pt-4 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Starting from</span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-mono text-xl font-bold text-amber-400">
                        RM {service.startingPrice.national || service.startingPrice.japanese || service.startingPrice.fourByFour || service.startingPrice.continental}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">nett</span>
                    </div>
                  </div>

                  <a
                    href={serviceWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-emerald-600 text-slate-200 hover:text-white border border-slate-700 hover:border-emerald-600 font-semibold text-xs transition-all shrink-0"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Diagnostic Second Opinion Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                Dealer Quoted You a Painful Repair Bill?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Snap a photo of your dealership quotation and send it to our Master Technicians on WhatsApp for an honest, transparent breakdown.
              </p>
            </div>
          </div>

          <a
            href={generateWhatsAppLink({
              serviceName: 'Dealership Quotation Second Opinion',
              specificIssue: 'I have an existing dealership quote and would like an honest second opinion.',
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs sm:text-sm whitespace-nowrap transition-all shadow-md shrink-0"
          >
            <span>Get a 2nd Opinion</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
