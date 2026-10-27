export interface EBinStep {
  step: number;
  title: string;
  type: 'Hardware Interface' | 'Machine Journey' | 'User Reward';
  description: string;
  iconName: string;
}

export const EBIN_PROJECT = {
  title: 'E-Bin: The Smart E-Waste ATM',
  tagline: 'An AI-Powered Collection System for a Closed-Loop Micro-Economy',
  authors: ['Yukta Padekar (Lead Researcher & System Architect)'],
  domain: 'Computer Vision, Smart Hardware, Internet of Things (IoT) & Circular Micro-Economics',
  overview: 'E-Bin is an automated reverse-vending kiosk engineered to eliminate the behavioral friction preventing households and students from recycling small electronics ("micro e-waste"). Using embedded high-resolution computer vision and edge neural networks, the kiosk identifies inserted items, executes mechanical sorting into segregated compartments, and credits immediate financial incentives to the consumer mobile app.',
  problem: {
    title: 'The Micro E-Waste Crisis: Friction & Consequence',
    friction: 'Lack of convenient, nearby recycling facilities leads consumers to discard small electronics (earphones, cables, broken smartphones, batteries, PCB modules) directly into municipal trash bins.',
    consequence: 'Improper disposal causes toxic heavy metals (Pb, Hg, Cd, As) to leach into soil and aquifers, poisoning regional groundwater reserves.',
    coreInsight: 'The current recycling infrastructure is fundamentally misaligned with human behavior for small-scale e-waste. Collection must be as ubiquitous, frictionless, and rewarding as an ATM withdrawal.'
  },
  comparison: [
    { dimension: 'User Effort', traditional: 'High (requires travel to distant industrial recycling facilities)', ebin: 'Low (accessible ATM-style drop-off in campuses, malls, and metro stations)' },
    { dimension: 'Sorting Mechanism', traditional: 'Manual and downstream (hazardous exposure for informal workers)', ebin: 'AI-powered automated classification and internal segregated mechanical gating at insertion' },
    { dimension: 'Incentive Model', traditional: 'None (or nominal scrap value with delayed settlement)', ebin: 'Instant digital micro-rewards, merchant discounts, and campus dining points via mobile QR' },
    { dimension: 'Environmental Outcome', traditional: 'Toxic landfill contamination & illegal acid stripping', ebin: 'Closed-loop material recovery and documented circular trace to verified recyclers' }
  ],
  workflow: [
    {
      step: 1,
      title: 'Insertion of Unsorted Micro E-Waste',
      type: 'Hardware Interface',
      description: 'The user places discarded small electronics into the illuminated universal intake port on the E-Bin kiosk.',
      iconName: 'PackageOpen'
    },
    {
      step: 2,
      title: 'AI Multi-Angle Optical Scanning',
      type: 'Machine Journey',
      description: 'High-speed industrial optical sensors and LiDAR capture multi-angle images under standardized illumination.',
      iconName: 'Camera'
    },
    {
      step: 3,
      title: 'Edge Neural Network Classification',
      type: 'Machine Journey',
      description: 'On-device lightweight Convolutional Neural Network (CNN) identifies device type, material class, battery hazard status, and estimated weight.',
      iconName: 'Cpu'
    },
    {
      step: 4,
      title: 'Automated Mechanical Sorting',
      type: 'Machine Journey',
      description: 'Servo-driven pneumatic diverters route the item into dedicated internal fire-safe containment bins (Li-ion, Copper Cables, PCBs, Peripheral Plastics).',
      iconName: 'GitFork'
    },
    {
      step: 5,
      title: 'Instant Micro-Reward Payout',
      type: 'User Reward',
      description: 'The touch interface presents a dynamic QR code. User scans with mobile app to receive instant points, merchant coupons, or transit credits.',
      iconName: 'Gift'
    }
  ] as EBinStep[],
  ecosystem: [
    { stakeholder: 'End Users', role: 'Continuous supply of micro e-waste stimulated by instant tangible incentives and gamified sustainability badges.' },
    { stakeholder: 'B2B Clients (Colleges & Tech Parks)', role: 'Host kiosks on campus to meet statutory EPR goals, achieve green campus certifications, and collect live sustainability analytics.' },
    { stakeholder: 'Brand & Retail Partners', role: 'Sponsor dynamic discount coupons on the app, gaining foot traffic, ESG goodwill, and targeted millennial demographics.' },
    { stakeholder: 'Certified Recyclers', role: 'Pay purchase commissions to collect pre-sorted, clean, uncontaminated metal fractions without dangerous manual separation costs.' }
  ]
};
