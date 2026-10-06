import React, { useState } from 'react';
import { Calculator, MessageCircle, Clock, CheckCircle2, AlertCircle, Sparkles, ChevronRight, Car, Shield, Compass, Zap } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/whatsappHelper';
import { WORKSHOP_INFO } from '../data/workshopData';

type VehicleType = 'national' | 'japanese' | 'fourByFour' | 'continental';

interface ServiceOption {
  id: string;
  name: string;
  desc: string;
  prices: Record<VehicleType, number>;
  turnaroundMinutes: number;
  oilBrand: string;
  includedList: string[];
}

const VEHICLE_OPTIONS: { id: VehicleType; name: string; subtitle: string; iconType: 'car' | 'sedan' | 'pickup' | 'euro' }[] = [
  { id: 'national', name: 'National Cars', subtitle: 'Myvi, Bezza, Saga, X50, X70', iconType: 'car' },
  { id: 'japanese', name: 'Japanese / Asian', subtitle: 'Honda City, Vios, Mazda, Nissan', iconType: 'sedan' },
  { id: 'fourByFour', name: '4x4 & Pickups', subtitle: 'Hilux, Ranger, D-Max, Triton', iconType: 'pickup' },
  { id: 'continental', name: 'Continental / Euro', subtitle: 'BMW, Mercedes, VW, Audi, Volvo', iconType: 'euro' },
];

const ESTIMATOR_SERVICES: ServiceOption[] = [
  {
    id: 'oil-change',
    name: 'Scheduled Engine Lubrication & 21-Point Check',
    desc: 'Full synthetic/semi-synthetic oil service with genuine OEM filter and complete vehicle safety scan.',
    prices: {
      national: 148,
      japanese: 220,
      fourByFour: 260,
      continental: 380,
    },
    turnaroundMinutes: 50,
    oilBrand: 'Motul 6100 / Liqui Moly Leichtlauf',
    includedList: [
      'Certified synthetic engine oil to factory spec',
      'Genuine OEM oil filter & new copper washer',
      'Full 21-point digital photo safety inspection',
      'Fluid top-up (coolant, brake fluid, windshield washer)',
      'Digital battery load test & tire pressure balancing',
    ],
  },
  {
    id: 'aircond',
    name: 'Air Conditioning Cooling & Gas Recharge',
    desc: 'Restore ice-cold AC performance for Kuching heat. Includes vacuum test, oil change & fresh gas.',
    prices: {
      national: 120,
      japanese: 150,
      fourByFour: 180,
      continental: 280,
    },
    turnaroundMinutes: 75,
    oilBrand: 'Denso / Sanden PAG Compressor Lubricant',
    includedList: [
      'Automated R134a/R1234yf vacuum & gas recharge',
      'High/low pressure manifold leak diagnosis',
      'Antimicrobial evaporator coil treatment',
      'Cabin air filter inspection & blower cleaning',
    ],
  },
  {
    id: 'diagnostics',
    name: 'Computerized OBD2 Diagnostic & Warning Light Scan',
    desc: 'Identify engine check lights, ABS faults, and transmission shudder with dealer-grade software.',
    prices: {
      national: 80,
      japanese: 90,
      fourByFour: 90,
      continental: 120,
    },
    turnaroundMinutes: 40,
    oilBrand: 'Autel MaxiSys / BMW ISTA / Benz Xentry',
    includedList: [
      'Full electronic control unit (ECU/TCU/ABS) scan',
      'Live-sensor waveform & fuel trim evaluation',
      'Itemized digital fault diagnosis sent to WhatsApp',
      'Fee waived 100% if repair is executed at Apex',
    ],
  },
  {
    id: 'brakes',
    name: 'Brake Rotor Resurfacing & Ceramic Pad Renewal',
    desc: 'Eliminate brake squeal and pedal shudder down Kuching slopes with on-car precision skimming.',
    prices: {
      national: 140,
      japanese: 180,
      fourByFour: 220,
      continental: 320,
    },
    turnaroundMinutes: 60,
    oilBrand: 'Brembo / Akebono High-Temp Ceramic',
    includedList: [
      'On-car disc rotor skimming (restores smooth bite)',
      'Premium low-dust ceramic brake pads',
      'Caliper slide pin lubrication & slide seal check',
      'High-temperature DOT4 brake fluid moisture test',
    ],
  },
  {
    id: '4x4-suspension',
    name: '4x4 Heavy-Duty Suspension & Driveline Refresh',
    desc: 'Specialized for Sarawak interior terrain, oil palm runs, and overland camping preparation.',
    prices: {
      national: 180,
      japanese: 260,
      fourByFour: 240,
      continental: 360,
    },
    turnaroundMinutes: 120,
    oilBrand: 'Castrol Syntrax / Motul 75W-90 Gear Oil',
    includedList: [
      'Front & rear differential gear oil replacement',
      'Transfer case 4WD electronic selector check',
      'Leaf spring bushing & ball joint play examination',
      'Driveshaft universal joint greasing & CV boot inspection',
    ],
  },
];

export const ServiceEstimator: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>('national');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('oil-change');
  const [customModel, setCustomModel] = useState<string>('');

  const currentService = ESTIMATOR_SERVICES.find((s) => s.id === selectedServiceId) || ESTIMATOR_SERVICES[0];
  const calculatedPrice = currentService.prices[selectedVehicle];

  const vehicleLabel = VEHICLE_OPTIONS.find((v) => v.id === selectedVehicle)?.name || 'Vehicle';

  const whatsAppLink = generateWhatsAppLink({
    carMakeModel: customModel.trim() || vehicleLabel,
    serviceName: currentService.name,
    estimatedPrice: calculatedPrice,
    specificIssue: `Online quote calculated for ${vehicleLabel}. Please confirm slot availability.`,
  });

  return (
    <section id="estimator" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-amber-400 mb-3 uppercase tracking-wider font-semibold">
            <Calculator className="w-4 h-4" />
            <span>Interactive Cost Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight">
            Instant Service Price Calculator
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            No guessing or surprise bills. Select your vehicle class and desired service to calculate an upfront estimate backed by genuine parts and fluids.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start bg-slate-950/70 border border-slate-800 rounded-2xl p-5 sm:p-7 lg:p-10 shadow-2xl">
          
          {/* Controls Column (Left) */}
          <div className="md:col-span-7 flex flex-col gap-6">
            
            {/* Step 1: Select Vehicle Class */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Step 1: Select Your Vehicle Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {VEHICLE_OPTIONS.map((veh) => {
                  const isSelected = selectedVehicle === veh.id;
                  const renderIcon = () => {
                    const cls = `w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`;
                    switch (veh.iconType) {
                      case 'car': return <Car className={cls} />;
                      case 'sedan': return <Shield className={cls} />;
                      case 'pickup': return <Compass className={cls} />;
                      case 'euro': return <Sparkles className={cls} />;
                      default: return <Car className={cls} />;
                    }
                  };

                  return (
                    <button
                      key={veh.id}
                      type="button"
                      onClick={() => setSelectedVehicle(veh.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all select-none ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500/80 text-white shadow-md shadow-amber-500/10'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 rounded-md bg-slate-800/80 flex items-center justify-center">
                          {renderIcon()}
                        </div>
                        <span className="font-heading font-semibold text-sm">{veh.name}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate">{veh.subtitle}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Service Package */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Step 2: Choose Service or Issue
              </label>
              <div className="flex flex-col gap-2.5">
                {ESTIMATOR_SERVICES.map((srv) => {
                  const isSelected = selectedServiceId === srv.id;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-slate-800 border-amber-500 text-white shadow-sm'
                          : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-slate-900 hover:border-slate-700'
                      }`}
                    >
                      <div className="pr-4">
                        <div className="font-semibold text-sm flex items-center gap-2">
                          <span className={isSelected ? 'text-amber-400' : 'text-slate-200'}>
                            {srv.name}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{srv.desc}</p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="font-mono font-bold text-sm text-amber-400">
                          RM {srv.prices[selectedVehicle]}
                        </span>
                        <span className="block text-[10px] text-slate-400 font-mono">est.</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Optional Specific Car Model Input */}
            <div>
              <label htmlFor="custom-model-input" className="block text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Your Exact Car Model (Optional)
              </label>
              <input
                id="custom-model-input"
                type="text"
                value={customModel}
                onChange={(e) => setCustomModel(e.target.value)}
                placeholder="e.g. 2021 Proton X50 / Toyota Hilux Revo 2.8"
                className="w-full h-11 px-3.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              />
            </div>

          </div>

          {/* Results & WhatsApp Dispatch Card (Right) */}
          <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between h-full">
            
            <div>
              {/* Quote Breakdown Card Top */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Transparent Estimate
                </span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <Shield className="w-3 h-3" /> 6-Month Warranty
                </span>
              </div>

              {/* Big Price Display */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-slate-400 font-mono">FROM</span>
                  <span className="text-4xl sm:text-5xl font-mono font-extrabold text-amber-400 tracking-tight tabular-nums">
                    RM {calculatedPrice}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">nett</span>
                </div>
                <p className="text-xs text-slate-300 mt-1 font-medium">
                  {currentService.name} for <span className="text-amber-400">{customModel.trim() || vehicleLabel}</span>
                </p>
              </div>

              {/* Turnaround & Fluids spec */}
              <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-950 p-3.5 rounded-lg border border-slate-800/80 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">Estimated Time</span>
                  <div className="flex items-center gap-1.5 font-medium text-slate-200 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>~{currentService.turnaroundMinutes} minutes</span>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">Specified Grade</span>
                  <span className="font-mono text-slate-200 text-[11px] truncate block mt-0.5">
                    {currentService.oilBrand.split('/')[0]}
                  </span>
                </div>
              </div>

              {/* What is Included List */}
              <div className="mb-6">
                <span className="text-xs font-semibold text-slate-200 block mb-2">Package Inclusions:</span>
                <ul className="space-y-2 text-xs text-slate-300">
                  {currentService.includedList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 1-Click WhatsApp Booking Trigger */}
            <div className="pt-4 border-t border-slate-800">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-950/40 active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Quote & Book via WhatsApp</span>
              </a>

              <p className="text-[11px] text-center text-slate-400 mt-2.5">
                Takes 60 seconds · We respond within 15 minutes during workshop hours.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
