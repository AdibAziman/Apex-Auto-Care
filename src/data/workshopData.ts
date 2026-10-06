export interface ServicePackage {
  id: string;
  name: string;
  category: 'maintenance' | 'diagnostics' | 'aircond' | '4x4' | 'continental' | 'brakes';
  shortDesc: string;
  fullDesc: string;
  startingPrice: {
    national: number;
    japanese: number;
    continental: number;
    fourByFour: number;
  };
  turnaroundMinutes: number;
  highlightSpecs: string[];
  recommendedInterval: string;
  popular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  roleLocation: string;
  vehicle: string;
  serviceRendered: string;
  rating: number;
  date: string;
  quote: string;
  savedAmount?: string;
  verifiedPlatform: 'Google Review' | 'Facebook Verified';
}

export interface InspectionPoint {
  id: string;
  zone: 'Engine & Fluids' | 'Undercarriage & 4WD' | 'Brakes & Tires' | 'Climate & Electronics';
  title: string;
  method: string;
  whatWeLookFor: string;
}

export const WORKSHOP_INFO = {
  name: 'Apex AutoCraft Kuching',
  registeredName: 'Apex AutoCraft Sdn. Bhd. (1198244-K)',
  malayName: 'Bengkel Kereta Apex AutoCraft',
  tagline: 'Precision Care. Honest Hands.',
  subTagline: 'Dealer-Grade Diagnostics Without Dealer Markups',
  phone: '+60 82-334 819',
  phoneClean: '6082334819',
  whatsapp: '+60 16-889 2314',
  whatsappClean: '60168892314',
  emergencyPhone: '+60 16-889 2314',
  email: 'service@apexautocraft.my',
  address: 'Lot 412–414, Sublot 18, Jalan Pending, Pending Industrial Estate, 93450 Kuching, Sarawak',
  coordinates: {
    lat: 1.5533,
    lng: 110.3705,
  },
  landmarks: 'Opposite Pending Commercial Centre, 2 mins from Crown Towers & Pending Post Office',
  googleMapsUrl: 'https://maps.google.com/?q=1.5533,110.3705+(Apex+AutoCraft+Kuching)',
  wazeUrl: 'https://waze.com/ul?ll=1.5533,110.3705&navigate=yes',
  openingHours: {
    weekdays: '8:30 AM – 6:00 PM',
    saturday: '8:30 AM – 5:30 PM',
    sunday: 'Closed (Rest & Family Day)',
    keyDrop: 'Early-bird secure key drop box available from 7:30 AM',
  },
  metrics: {
    rating: 4.9,
    reviewCount: 320,
    yearsInOperation: 8,
    carsServiced: '14,800+',
    hydraulicLifts: 5,
    techniciansCount: 11,
    warrantyMonths: 6,
    warrantyKm: 10000,
  },
};

export const SERVICES_CATALOG: ServicePackage[] = [
  {
    id: 'oil-maintenance',
    name: 'Scheduled Engine Lubrication & Minor Service',
    category: 'maintenance',
    shortDesc: 'Premium factory-grade oil service with OEM filter and complimentary 21-point safety inspection.',
    fullDesc: 'We drain and refill with authentic Motul, Liqui Moly, or Shell Helix oils matched to your exact manufacturer viscosity. No cheap bulk drum oils.',
    startingPrice: {
      national: 148,
      japanese: 220,
      continental: 380,
      fourByFour: 260,
    },
    turnaroundMinutes: 50,
    highlightSpecs: [
      'Motul / Liqui Moly certified engine oil',
      'Genuine OEM oil filter & new copper crush washer',
      'Full 21-point digital photo safety check',
      'Fluid top-up (coolant, brake fluid, washer fluid)',
      'Digital battery health cold-cranking amps test',
    ],
    recommendedInterval: 'Every 10,000 km or 6 months',
    popular: true,
  },
  {
    id: 'diagnostics-ecu',
    name: 'Dealer-Level OBD2 Computerized Diagnostics',
    category: 'diagnostics',
    shortDesc: 'Pinpoint Check Engine lights, gearbox shudder, and electrical faults with Autel & OEM scan tools.',
    fullDesc: 'Eliminate trial-and-error parts swapping. Our master technicians analyze live ECU live-data telemetry, fuel trims, oxygen sensors, and transmission solenoids.',
    startingPrice: {
      national: 80,
      japanese: 90,
      continental: 120,
      fourByFour: 90,
    },
    turnaroundMinutes: 40,
    highlightSpecs: [
      'Live ECU freeze-frame sensor data analysis',
      'Engine, ABS, Airbag, and TCU code read & clear',
      'Waived if recommended repairs are performed here',
      'Printed or PDF diagnosis report sent to your WhatsApp',
    ],
    recommendedInterval: 'Whenever dash warning light appears or engine runs rough',
  },
  {
    id: 'aircond-overhaul',
    name: 'Air Conditioning Refresh & Cooling Coil Overhaul',
    category: 'aircond',
    shortDesc: 'Ice-cold air restoration engineered for Kuching’s tropical heat and high humidity.',
    fullDesc: 'Full leak test, compressor pressure evaluation, cabin filter replacement, and precision refrigerant recharge using automated recovery stations.',
    startingPrice: {
      national: 120,
      japanese: 150,
      continental: 280,
      fourByFour: 180,
    },
    turnaroundMinutes: 90,
    highlightSpecs: [
      'Digital manifold pressure & temperature delta test',
      'Evaporator coil antimicrobial foam flush',
      'Precision R134a/R1234yf vacuum & gas recharge',
      'PAG compressor oil replacement',
    ],
    recommendedInterval: 'Every 20,000 km or when cooling feels weak at traffic stops',
    popular: true,
  },
  {
    id: '4x4-suspension',
    name: 'Sarawak 4x4 Heavy-Duty Suspension & Driveline Service',
    category: '4x4',
    shortDesc: 'Specialized Hilux, Ranger, D-Max & Triton care for rural roads, estates, and overlanding.',
    fullDesc: 'Heavy-duty suspension lift kits, leaf spring rebushing, steering rack rebuilds, and differential fluid changes (front, rear LSD, transfer case).',
    startingPrice: {
      national: 0,
      japanese: 240,
      continental: 350,
      fourByFour: 240,
    },
    turnaroundMinutes: 120,
    highlightSpecs: [
      'Heavy-duty polyurethane bushing replacements',
      'Front/Rear differential & transfer case fluid flush',
      'CV joint boots, tie rods, and wheel bearing inspection',
      'Pre-interior road and overland expedition safety check',
    ],
    recommendedInterval: 'Every 20,000 km or after severe off-road/flood driving',
    popular: true,
  },
  {
    id: 'continental-care',
    name: 'Continental & European Specialist Care',
    category: 'continental',
    shortDesc: 'Dealer-spec servicing for BMW, Mercedes-Benz, Audi, and VW at 35–50% lower cost.',
    fullDesc: 'Equipped with dedicated ISTA (BMW), Xentry (Mercedes), and VCDS platforms. We source authentic German OEM parts (Lemförder, Bosch, Brembo, Mahle).',
    startingPrice: {
      national: 0,
      japanese: 0,
      continental: 420,
      fourByFour: 0,
    },
    turnaroundMinutes: 90,
    highlightSpecs: [
      'Specialist software coding & service interval reset',
      'OEM German replacement parts with verified serials',
      'Transmission mechatronic & oil pan filter service',
      'Valve cover gasket and oil cooler leak repairs',
    ],
    recommendedInterval: 'Every 10,000 km or per CBS onboard computer prompt',
  },
  {
    id: 'brakes-alignment',
    name: 'Brake Rotor Skimming, Pads & 3D Wheel Alignment',
    category: 'brakes',
    shortDesc: 'Stop squealing, steering wheel shudder, and uneven tire wear with computerized laser alignment.',
    fullDesc: 'On-car precision brake rotor resurfacing, high-temperature brake fluid flush, and computerized 4-wheel alignment for rock-solid stability.',
    startingPrice: {
      national: 110,
      japanese: 140,
      continental: 260,
      fourByFour: 160,
    },
    turnaroundMinutes: 60,
    highlightSpecs: [
      '3D laser 4-wheel caster, camber & toe alignment',
      'On-car disc rotor skimming (cures brake judder)',
      'Brembo / Akebono low-dust ceramic brake pads',
      'Electronic brake caliper slide pin service',
    ],
    recommendedInterval: 'Every 10,000 km or when steering pulls left/right',
  },
];

export const INSPECTION_CHECKLIST: InspectionPoint[] = [
  {
    id: 'ins-1',
    zone: 'Engine & Fluids',
    title: 'Engine Oil Viscosity & Contamination',
    method: 'Dipstick blotter analysis & magnetic drain plug check',
    whatWeLookFor: 'Fuel dilution, sludge buildup, and metal particulates',
  },
  {
    id: 'ins-2',
    zone: 'Engine & Fluids',
    title: 'Radiator Coolant Boiling Point & PH Level',
    method: 'Digital optical refractometer testing',
    whatWeLookFor: 'Electrolysis corrosion risk and thermal breakdown in Kuching heat',
  },
  {
    id: 'ins-3',
    zone: 'Engine & Fluids',
    title: 'Battery Health & Cold-Cranking Amps (CCA)',
    method: 'Digital conductance conductance load tester',
    whatWeLookFor: 'Internal cell sulfation to prevent sudden morning no-start',
  },
  {
    id: 'ins-4',
    zone: 'Brakes & Tires',
    title: 'Brake Pad Thickness in Millimeters',
    method: 'Precision digital vernier caliper',
    whatWeLookFor: 'Inner vs outer pad uneven wear indicating seized caliper slide pins',
  },
  {
    id: 'ins-5',
    zone: 'Brakes & Tires',
    title: 'Brake Disc Rotor Thickness & Lateral Runout',
    method: 'Micrometer and dial indicator gauge',
    whatWeLookFor: 'Warped rotors that cause steering shudder during downhill braking',
  },
  {
    id: 'ins-6',
    zone: 'Undercarriage & 4WD',
    title: 'Lower Arm Bushings & Ball Joint Play',
    method: 'Pry-bar load test under vehicle weight on hydraulic hoist',
    whatWeLookFor: 'Torn rubber bushings causing knocking sounds over speed humps',
  },
  {
    id: 'ins-7',
    zone: 'Undercarriage & 4WD',
    title: '4WD Drive Shaft CV Boots & Universal Joints',
    method: 'Tactile rotation check & visual grease leak inspection',
    whatWeLookFor: 'Torn boots allowing mud/water ingress from Sarawak dirt roads',
  },
  {
    id: 'ins-8',
    zone: 'Climate & Electronics',
    title: 'Air Conditioning Vent Temperature Delta',
    method: 'Dual-probe digital thermal anemometer',
    whatWeLookFor: 'Target 5°C–8°C vent output during midday ambient temperatures',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Clement Chong',
    roleLocation: 'Civil Contractor · Tabuan Tranquility, Kuching',
    vehicle: '2018 Ford Ranger 2.2 XLT (4WD)',
    serviceRendered: 'Steering Rack & Transmission Fluid Overhaul',
    rating: 5,
    date: '3 weeks ago',
    quote: 'The franchise dealer quoted me almost RM 6,000 claiming my entire steering rack was dead. Apex hooked up their computerized diagnostic, test-drove it, and sent me WhatsApp videos showing it was only a worn inner tie-rod end and clogged ATF fluid. Total bill came to RM 1,180 with genuine Motorcraft fluid. My truck runs smooth as butter now.',
    savedAmount: 'Saved ~RM 4,800',
    verifiedPlatform: 'Google Review',
  },
  {
    id: 'rev-2',
    author: 'Nurul Farhana',
    roleLocation: 'Senior Auditor · Petra Jaya, Kuching',
    vehicle: '2020 Perodua Myvi 1.5 AV',
    serviceRendered: '40,000 km Major Service & Brake Renewal',
    rating: 5,
    date: '1 month ago',
    quote: 'As a woman who doesn’t understand mechanical terms, visiting workshops usually gives me anxiety because of dishonest pricing. At Apex, service advisor Dayang walked me through the quote, sent side-by-side photos of my old brake pads next to brand new ones, and charged exactly what was agreed. Plus, the waiting lounge has better espresso and Wi-Fi than most cafes in town!',
    savedAmount: 'Zero hidden fees',
    verifiedPlatform: 'Google Review',
  },
  {
    id: 'rev-3',
    author: 'Dr. Kenneth Lee',
    roleLocation: 'Medical Specialist · Jalan Song, Kuching',
    vehicle: '2017 BMW 320i Sport (F30)',
    serviceRendered: 'Valve Cover Gasket & Liqui Moly Engine Service',
    rating: 5,
    date: '2 months ago',
    quote: 'Finding an independent garage in Sarawak that truly understands European electronics is rare. Master tech Dominic diagnosed my oil leak using BMW ISTA software, cleaned the engine bay thoroughly, and boxed all replaced parts in my boot. Their bill was 45% lower than the brand 3S center, backed by a written 6-month warranty.',
    savedAmount: 'Saved RM 1,450',
    verifiedPlatform: 'Google Review',
  },
  {
    id: 'rev-4',
    author: 'Brandon K. Tiong',
    roleLocation: 'Logistics Runner · Bintawa Industrial, Kuching',
    vehicle: '2019 Toyota Hilux 2.8 Revo',
    serviceRendered: '4WD Suspension Lift & Differential Fluid',
    rating: 5,
    date: '2 months ago',
    quote: 'I drive daily between Kuching, Serian, and interior estate gravel. Ah Meng dialed in the suspension damping and alignment perfectly. You can feel the steering precision immediately. Best 4x4 mechanics in Pending without question.',
    savedAmount: 'Top-tier 4x4 tuning',
    verifiedPlatform: 'Google Review',
  },
];

export const FAQS = [
  {
    question: 'Will I get a surprise bill if you find extra problems with my car?',
    answer: 'Never. We have an ironclad zero-surprise policy. If our technicians find an additional worn component during our 21-point check, we do not touch it. We take clear photos or a short video, explain the severity, give you an itemized WhatsApp quote, and only proceed once you text back your approval.',
  },
  {
    question: 'How do your service prices compare to authorized 3S / 4S dealership centres?',
    answer: 'On average, our customers save between 30% and 55% compared to authorized dealership invoices. We achieve this by eliminating franchise corporate markups, avoiding mandatory fuel additive upsells, and using certified OEM components.',
  },
  {
    question: 'Do you really return our old replaced parts?',
    answer: 'Yes, 100% of the time. All replaced spark plugs, worn brake pads, gaskets, and filters are packed into clean boxes and placed in your boot or demonstrated to you at the service counter so you can visually verify the wear.',
  },
  {
    question: 'What warranty is included with repairs?',
    answer: 'Every mechanical repair and replacement part installed at Apex AutoCraft comes backed by our written 6-Month or 10,000 km Warranty (whichever comes first). If a part malfunctions within that window, we replace it immediately without hassle.',
  },
  {
    question: 'Can I wait comfortably at the workshop while my car is serviced?',
    answer: 'Yes! Our customer lounge was built for busy professionals and families. It features high-speed optical fiber Wi-Fi, ergonomic laptop work desks, complimentary bean-to-cup espresso coffee, clean restrooms, and viewing glass directly into our clean workshop bays.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept SPay Global (Sarawak Pay), DuitNow QR, major Credit and Debit Cards (Visa/Mastercard), GrabPay, Boost, and cash.',
  },
];
