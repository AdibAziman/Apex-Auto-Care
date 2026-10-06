import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, CheckCircle2, Send, AlertCircle, Calendar, ChevronDown, Check, Wrench } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';
import { generateWhatsAppLink } from '../utils/whatsappHelper';

const SERVICE_OPTIONS = [
  {
    id: 'minor',
    name: 'Scheduled Minor Service (Oil & Filter)',
    desc: 'Motul/Liqui Moly Oil + OEM Filter + 21-Point Safety Scan',
    category: 'Periodic Maintenance',
  },
  {
    id: 'major',
    name: '40,000 / 80,000 km Major Service Overhaul',
    desc: 'Spark plugs, coolant flush, gearbox fluid, brake flush',
    category: 'Major Overhaul',
  },
  {
    id: 'diagnostics',
    name: 'Computerized OBD2 Diagnostic Scan',
    desc: 'Check Engine light, ABS, airbag, transmission code read',
    category: 'ECU Diagnostics',
  },
  {
    id: 'aircond',
    name: 'Air Conditioning Cooling & Gas Recharge',
    desc: 'Vacuum test, evaporator clean, fresh compressor oil & gas',
    category: 'Climate Control',
  },
  {
    id: '4x4',
    name: '4x4 Suspension / Bushing / Differential Flush',
    desc: 'Specialized for Hilux, Ranger, D-Max & Triton',
    category: 'Sarawak 4x4 Hub',
  },
  {
    id: 'brakes',
    name: 'Brake Pad Replacement & Disc Rotor Skimming',
    desc: 'Cure squeal and steering shudder with precision machining',
    category: 'Braking & Safety',
  },
  {
    id: 'second-opinion',
    name: 'Second Opinion on Dealership Quotation',
    desc: 'Bring any dealer invoice for a transparent breakdown',
    category: 'Transparency Review',
  },
];

export const LocationContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    serviceType: SERVICE_OPTIONS[0].name,
    preferredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Today's date string for input min attribute
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];

  // Helper date generators for quick pills
  const getDateOffset = (days: number) => {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  };

  const getNextSaturday = () => {
    const d = new Date();
    const day = d.getDay();
    const diff = (6 - day + 7) % 7 || 7;
    d.setDate(d.getDate() + diff);
    return d.toISOString().split('T')[0];
  };

  const tomorrowStr = getDateOffset(1);
  const in2DaysStr = getDateOffset(2);
  const saturdayStr = getNextSaturday();

  const handleQuickDate = (dateVal: string) => {
    setFormData((prev) => ({ ...prev, preferredDate: dateVal }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.carModel) {
      alert('Please fill in your name, contact number, and car model.');
      return;
    }

    const whatsAppLink = generateWhatsAppLink({
      carMakeModel: formData.carModel,
      serviceName: formData.serviceType,
      preferredDate: formData.preferredDate || 'Earliest available slot',
      specificIssue: `Customer: ${formData.name} (${formData.phone}). Notes: ${formData.notes || 'None provided'}`,
    });

    setSubmitted(true);
    window.open(whatsAppLink, '_blank');
  };

  return (
    <section id="location" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-amber-400 mb-2 uppercase tracking-wider font-semibold">
            <MapPin className="w-4 h-4" />
            <span>Pending Industrial Estate, Kuching</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Visit Our Workshop or Book Online
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Just 2 minutes from Crown Towers and 6 minutes from Tabuan Jaya. Drop by for an inspection or book your appointment slot below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Workshop Details & Map Embed */}
          <div className="md:col-span-6 flex flex-col gap-6">
            
            {/* Info Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl">
              <h3 className="font-heading font-bold text-lg text-white mb-4">
                Apex AutoCraft Kuching
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Physical Address:</span>
                    <span className="text-slate-400">{WORKSHOP_INFO.address}</span>
                    <p className="text-[11px] text-amber-400 mt-1 font-mono">
                      Landmark: {WORKSHOP_INFO.landmarks}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-slate-900 pt-3">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Operating Hours:</span>
                    <span className="text-slate-400">Monday – Saturday: {WORKSHOP_INFO.openingHours.weekdays}</span>
                    <span className="text-slate-400 block">Sunday: {WORKSHOP_INFO.openingHours.sunday}</span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">{WORKSHOP_INFO.openingHours.keyDrop}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-slate-900 pt-3">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Direct Hotlines:</span>
                    <div className="flex flex-wrap gap-4 mt-1 font-mono text-xs">
                      <a href={`tel:${WORKSHOP_INFO.phoneClean}`} className="text-amber-400 hover:underline">
                        Desk: {WORKSHOP_INFO.phone}
                      </a>
                      <a href={`tel:${WORKSHOP_INFO.emergencyPhone}`} className="text-emerald-400 hover:underline">
                        Mobile: {WORKSHOP_INFO.emergencyPhone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-900">
                <a
                  href={WORKSHOP_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-xs font-semibold text-slate-200 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-blue-400" />
                  <span>Google Maps</span>
                </a>

                <a
                  href={WORKSHOP_INFO.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-xs font-semibold text-slate-200 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Waze Directions</span>
                </a>
              </div>
            </div>

            {/* Real Interactive Google Maps Embed with Pinned Location */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 overflow-hidden shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 mb-3 font-mono">
                <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Real Pinned Location: 1.5533° N, 110.3705° E</span>
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live Interactive Map
                </span>
              </div>

              {/* Real Google Maps Embedded iFrame */}
              <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner">
                <iframe
                  title="Apex AutoCraft Kuching Real Location Pin"
                  src="https://maps.google.com/maps?q=1.5533,110.3705+(Apex+AutoCraft+Pending+Kuching)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter contrast-105"
                />

                {/* Floating Map Banner Bar */}
                <div className="absolute top-3 left-3 right-3 sm:right-auto z-10 pointer-events-none">
                  <div className="bg-slate-950/90 backdrop-blur-md border border-slate-800 px-3.5 py-2 rounded-lg shadow-lg flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                    <div>
                      <span className="text-xs font-bold text-white block">Apex AutoCraft Workshop</span>
                      <span className="text-[10px] text-slate-400 font-mono block">Pending Industrial Estate · 2 mins from Crown Towers</span>
                    </div>
                  </div>
                </div>

                {/* Direct External Map Action Link */}
                <div className="absolute bottom-3 right-3 z-10">
                  <a
                    href={WORKSHOP_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-950/90 hover:bg-slate-900 text-amber-400 hover:text-amber-300 border border-slate-700 text-xs font-semibold shadow-md transition-colors"
                  >
                    <span>Open in Google Maps App</span>
                    <Navigation className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 pt-2 border-t border-slate-900">
                <span>Lot 412–414, Sublot 18, Jalan Pending, 93450 Kuching</span>
                <span className="text-slate-500 font-mono">Zoom, pan & drag map freely</span>
              </div>
            </div>

          </div>

          {/* Right Column: Appointment Booking Form */}
          <div className="md:col-span-6 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="border-b border-slate-800 pb-4 mb-6">
              <span className="text-[10px] font-mono uppercase text-amber-400 tracking-wider font-semibold">
                Priority Booking
              </span>
              <h3 className="text-xl font-heading font-bold text-white mt-1">
                Book a Service or Diagnostic Appointment
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill this quick form and our service advisor will confirm your bay reservation via WhatsApp.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-slate-900/60 rounded-xl border border-emerald-500/30">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h4 className="font-heading font-bold text-lg text-white">Booking Details Prepared!</h4>
                <p className="text-xs text-slate-300 mt-2 max-w-md mx-auto">
                  Your WhatsApp has opened with your service details. Please hit send in WhatsApp to finalize your slot with our service advisor Dayang.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-4 py-2 rounded-lg bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client-name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dayang / Ah Seng"
                      className="w-full h-11 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="client-phone" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 016-889 2314"
                      className="w-full h-11 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client-car" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                      Car Make & Model *
                    </label>
                    <input
                      id="client-car"
                      type="text"
                      required
                      value={formData.carModel}
                      onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                      placeholder="e.g. 2019 Toyota Hilux / Proton X50"
                      className="w-full h-11 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="client-date" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                        Preferred Date
                      </label>
                      <span className="text-[10px] text-slate-400 font-mono">Mon–Sat</span>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-amber-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        id="client-date"
                        type="date"
                        min={todayStr}
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full h-11 pl-10 pr-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm font-mono cursor-pointer transition-colors"
                      />
                    </div>

                    {/* Quick Date Selection Shortcuts */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="text-[10px] text-slate-400 font-mono">Quick pick:</span>
                      <button
                        type="button"
                        onClick={() => handleQuickDate(tomorrowStr)}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                          formData.preferredDate === tomorrowStr
                            ? 'bg-amber-500 text-slate-950 border-amber-500 font-semibold'
                            : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white hover:border-slate-600'
                        }`}
                      >
                        Tomorrow
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickDate(in2DaysStr)}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                          formData.preferredDate === in2DaysStr
                            ? 'bg-amber-500 text-slate-950 border-amber-500 font-semibold'
                            : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white hover:border-slate-600'
                        }`}
                      >
                        In 2 Days
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickDate(saturdayStr)}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                          formData.preferredDate === saturdayStr
                            ? 'bg-amber-500 text-slate-950 border-amber-500 font-semibold'
                            : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white hover:border-slate-600'
                        }`}
                      >
                        This Sat
                      </button>
                    </div>
                  </div>
                </div>

                {/* Custom Styled Service Dropdown */}
                <div ref={dropdownRef} className="relative">
                  <label htmlFor="service-select-button" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                    Service Required
                  </label>

                  {/* Dropdown Custom Trigger Button */}
                  <button
                    id="service-select-button"
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full min-h-11 px-3.5 py-2 rounded-lg bg-slate-900 border text-left flex items-center justify-between gap-3 transition-all ${
                      isDropdownOpen
                        ? 'border-amber-500 ring-2 ring-amber-500/20'
                        : 'border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <div className="w-6 h-6 rounded-md bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                        <Wrench className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-white text-xs sm:text-sm font-medium truncate">
                        {formData.serviceType}
                      </span>
                    </div>

                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180 text-amber-400' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Popover Menu */}
                  {isDropdownOpen && (
                    <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-1.5 max-h-72 overflow-y-auto space-y-1 animate-in fade-in zoom-in-95 duration-150">
                      {SERVICE_OPTIONS.map((opt) => {
                        const isSelected = formData.serviceType === opt.name;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, serviceType: opt.name });
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left p-2.5 rounded-lg flex items-start justify-between gap-3 transition-colors ${
                              isSelected
                                ? 'bg-amber-500/10 text-white border border-amber-500/30'
                                : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                            }`}
                          >
                            <div className="pr-2">
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono text-slate-400 uppercase">
                                  {opt.category}
                                </span>
                              </div>
                              <span className="text-xs sm:text-sm font-semibold block text-slate-100 mt-0.5">
                                {opt.name}
                              </span>
                              <span className="text-[11px] text-slate-400 block mt-0.5 line-clamp-1">
                                {opt.desc}
                              </span>
                            </div>

                            {isSelected && (
                              <Check className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="client-notes" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                    Describe Any Specific Sounds or Issues (Optional)
                  </label>
                  <textarea
                    id="client-notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Squeaking noise when braking down hills, or AC blows warm air during traffic jams..."
                    className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Appointment Request via WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-slate-500 mt-2">
                  No payment required online. Pay securely at our workshop via SPay Global, DuitNow, or Card.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
