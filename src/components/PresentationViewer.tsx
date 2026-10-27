import React, { useState } from 'react';
import {
  Presentation,
  ChevronLeft,
  ChevronRight,
  Download,
  Users,
  CheckCircle,
  Maximize2,
  Minimize2,
  FileText,
  Sparkles
} from 'lucide-react';

interface SlideData {
  slideNumber: number;
  title: string;
  subtitle?: string;
  takeaways: string[];
  metrics?: { label: string; value: string; desc: string }[];
  imageSrc?: string;
}

export const PresentationViewer: React.FC = () => {
  const [activeDeck, setActiveDeck] = useState<'sikkim' | 'ebin'>('sikkim');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const sikkimSlides: SlideData[] = [
    {
      slideNumber: 1,
      title: 'E-Waste It Wisely at the Sub-National Level',
      subtitle: 'A District-Level Assessment of Generation, Collection & Recycling Performance in Sikkim, India — FY 2026',
      takeaways: [
        'Authors: Tanmay Lalge & Yukta Padekar, Vidyalankar Institute of Technology, Mumbai.',
        'Six districts evaluated: Gangtok, Namchi, Mangan, Gyalshing, Pakyong, and Soreng.',
        'Core empirical revelation: 5.9% formal capture rate against 310.5 tonnes generated.',
        'Spatial concentration: Gangtok generates 39% of statewide e-waste, holding 2 of 3 recycling facilities.'
      ],
      metrics: [
        { label: 'State Generation', value: '310.5 t', desc: 'Across 6 districts' },
        { label: 'Capture Rate', value: '5.9%', desc: '18.2 tonnes formally collected' },
        { label: 'Recycler Capacity', value: '1,100 t/yr', desc: 'Across 3 authorized facilities' }
      ]
    },
    {
      slideNumber: 2,
      title: 'The Capture Gap: Mature Regulation vs. Frail Collection',
      subtitle: 'Formal logistics lag state generation by an order of magnitude',
      takeaways: [
        'The Shortfall: 310.5t generated, only 18.2t collected statewide (roughly 17-to-1 generation-to-collection gap).',
        'Even Gangtok, the best-resourced capital district, captures only 6.8% of its own generation.',
        'The Opening: Installed recycling capacity (1,100 t/yr) already exceeds total generation; recyclers run at only 63% utilization.',
        'Synthesis: The binding constraint is upstream collection logistics, not downstream processing capability or missing regulations.'
      ],
      metrics: [
        { label: 'Generation/Collection Gap', value: '17 : 1', desc: 'Uncaptured e-waste volume' },
        { label: 'EPR Target Met', value: '83.9%', desc: '12 of 20 producers fully compliant' },
        { label: 'Recycler Utilization', value: '63%', desc: 'Downstream capacity is unbottlenecked' }
      ]
    },
    {
      slideNumber: 3,
      title: 'The District Divide: Severe Spatial Inequality',
      subtitle: 'Gangtok concentrates infrastructure while 3 districts have zero facilities',
      takeaways: [
        'Gangtok alone accounts for 39% of statewide generation (120 tonnes).',
        'Gyalshing, Mangan, and Soreng have no authorized recycling facilities within their borders.',
        'Gyalshing and Mangan have received zero public awareness campaigns to date.',
        'Mangan exhibits the highest per-capita generation (560g) due to concentrated institutional infrastructure.'
      ],
      metrics: [
        { label: 'Gangtok Share', value: '39%', desc: '120.0 t generated' },
        { label: 'Unserved Districts', value: '3 of 6', desc: 'Zero recycling facilities' },
        { label: 'Mangan Per Capita', value: '560 g', desc: 'Highest in the state' }
      ]
    },
    {
      slideNumber: 4,
      title: 'Anatomy of the Waste Stream: What Sikkim Discards',
      subtitle: 'Bulky equipment dominates while licensed recyclers run under capacity',
      takeaways: [
        'Large & Small Equipment is the single biggest category at 32.6% (101.3 tonnes).',
        'IT & Telecommunication follows at 26.7% (83.0 tonnes).',
        'Consumer Electrical & Electronics represents 23.3% (72.5 tonnes).',
        'Bulky equipment is least likely to be collected by informal scrap pickers without dedicated municipal bulk collection.'
      ],
      metrics: [
        { label: 'Large & Small Eqpt.', value: '101.3 t', desc: '32.6% of waste stream' },
        { label: 'IT & Telecom', value: '83.0 t', desc: '26.7% of waste stream' },
        { label: 'Consumer Elec.', value: '72.5 t', desc: '23.3% of waste stream' }
      ]
    },
    {
      slideNumber: 5,
      title: 'The Human Toll: Informal Labor & Environmental Monitoring',
      subtitle: 'Informal workers handle the bulk of collection without adequate safety',
      takeaways: [
        '97 informal e-waste workers identified across 3 scrap hotspots (MG Marg, Namchi, Pakyong).',
        'Only 41 workers (42.3%) are registered and trained under formal occupational health guidelines.',
        'Environmental Health: 1 of 3 monitored sites (Pakyong Repair Cluster) showed minor water runoff contamination.',
        'Awareness Reach: 1,580 citizens reached across 3 campaigns, but coverage remains uneven.'
      ],
      metrics: [
        { label: 'Informal Workers', value: '97', desc: 'Across 3 scrap clusters' },
        { label: 'Trained & Registered', value: '42.3%', desc: '56 workers still untrained' },
        { label: 'Health Screenings', value: '195', desc: 'Citizens screened at health camps' }
      ]
    },
    {
      slideNumber: 6,
      title: 'Roadmap to Closing the Gap: Four Strategic Levers',
      subtitle: 'Moving Sikkim from compliance on paper to capture in practice',
      takeaways: [
        'Priority 1: Expand Collection Infrastructure — deploy drop-off bins targeting bulky equipment (33% of stream).',
        'Priority 2: Cover Underserved Districts — introduce mobile collection units for Gyalshing, Mangan, and Soreng.',
        'Priority 3: Formalize Informal Labor — register and equip the remaining 56 informal scrap workers with PPE and fair wages.',
        'Priority 4: Reconcile EPR & Monitoring — publish quarterly dashboards and resolve the 83.9% EPR vs. 5.9% capture discrepancy.'
      ],
      metrics: [
        { label: 'Action 1', value: 'Bulk Bins', desc: 'Capture 101.3t large eqpt.' },
        { label: 'Action 2', value: 'Mobile Hubs', desc: 'Cover 3 unserved districts' },
        { label: 'Action 3', value: '100% PPE', desc: 'Train remaining 56 workers' }
      ]
    }
  ];

  const ebinSlides: SlideData[] = [
    {
      slideNumber: 1,
      title: 'E-Bin: The Smart E-Waste ATM',
      subtitle: 'An AI-Powered Collection System for a Closed-Loop Micro-Economy',
      imageSrc: '/previews/E-Bin_Smart_Recycling_p1.png',
      takeaways: [
        'Author: Yukta Padekar, Vidyalankar Institute of Technology.',
        'Autonomous reverse-vending kiosk for consumer electronics collection.',
        'Combines edge computer vision with instant financial reward incentives.',
        'Designed for high-traffic public nodes: college campuses, malls, and metro stations.'
      ]
    },
    {
      slideNumber: 2,
      title: 'The Micro E-Waste Crisis: Friction & Consequence',
      subtitle: 'Why small electronics end up poisoning regional soil and aquifers',
      imageSrc: '/previews/E-Bin_Smart_Recycling_p2.png',
      takeaways: [
        'Behavioral friction: Lack of nearby disposal points leads citizens to toss cables and phones into municipal waste.',
        'Severe consequence: Heavy metals (Pb, Hg, Cd, As) leach from municipal landfills into groundwater.',
        'Core diagnosis: Current recycling infrastructure is fundamentally misaligned with human daily behavior.'
      ]
    },
    {
      slideNumber: 3,
      title: 'Engineering a Paradigm Shift in E-Waste Disposal',
      subtitle: 'Traditional disposal vs. The E-Bin intelligent paradigm',
      imageSrc: '/previews/E-Bin_Smart_Recycling_p3.png',
      takeaways: [
        'User Effort: Shifted from high travel burden to convenient ATM-style drop-offs.',
        'Sorting: Shifted from hazardous manual sorting to AI-automated computer vision identification.',
        'Incentives: Shifted from zero reward to instant merchant discount coupons and transit points.'
      ]
    },
    {
      slideNumber: 4,
      title: 'System Architecture & User Journey',
      subtitle: 'Five-stage workflow from insertion to mobile reward payout',
      imageSrc: '/previews/E-Bin_Smart_Recycling_p4.png',
      takeaways: [
        'Step 1: User deposits unsorted electronics into illuminated intake port.',
        'Step 2: Multi-angle high-resolution optical cameras scan the device.',
        'Step 3: Lightweight on-device CNN classifies device category and hazard rating.',
        'Step 4: Pneumatic mechanical routing stores item into segregated fire-safe internal bins.',
        'Step 5: User scans dynamic QR code on screen to receive instant app points.'
      ]
    },
    {
      slideNumber: 5,
      title: 'The E-Bin Economic Ecosystem',
      subtitle: 'Self-sustaining circular loop aligning four key stakeholders',
      imageSrc: '/previews/E-Bin_Smart_Recycling_p5.png',
      takeaways: [
        'End Users provide continuous supply driven by instant micro-rewards.',
        'Certified Recyclers pay purchase commissions for clean, pre-sorted scrap fractions.',
        'Brand Partners sponsor coupons to attract retail foot traffic and enhance ESG standing.',
        'B2B Clients (offices & universities) pay subscription fees to fulfill EPR statutory quotas.'
      ]
    },
    {
      slideNumber: 6,
      title: 'A Self-Sustaining Micro-Economy for a Greener Future',
      subtitle: 'Synthesizing Technology, Behavior, and Economics',
      imageSrc: '/previews/E-Bin_Smart_Recycling_p6.png',
      takeaways: [
        'Technology: AI computer vision removes human sorting error and labor risk.',
        'Behavior: Reward-driven psychology turns disposal into a rewarding habit.',
        'Economics: Diversified B2B/B2C revenue streams ensure financial sustainability without subsidies.',
        'Transforming e-waste collection into a closed-loop urban resource recovery standard.'
      ]
    }
  ];

  const currentSlides = activeDeck === 'sikkim' ? sikkimSlides : ebinSlides;
  const currentSlide = currentSlides[currentSlideIndex];

  return (
    <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl shadow-md overflow-hidden">
      {/* Deck Selector Top Bar */}
      <div className="px-5 py-4 border-b border-slate-200 dark:border-emerald-950/60 bg-slate-50/80 dark:bg-[#0B1712] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-[#143D2B] text-white flex items-center justify-center shadow-xs">
            <Presentation className="w-5 h-5 text-emerald-200" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              Interactive Academic Slide Viewer
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Review presentation decks with slide-by-slide insights and takeaways
            </p>
          </div>
        </div>

        {/* Deck Switcher Buttons */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-200/80 dark:bg-emerald-950/60 p-1 rounded-xl text-xs font-medium">
            <button
              onClick={() => {
                setActiveDeck('sikkim');
                setCurrentSlideIndex(0);
              }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeDeck === 'sikkim'
                  ? 'bg-emerald-700 text-white font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              Sikkim Assessment Deck (6 Slides)
            </button>
            <button
              onClick={() => {
                setActiveDeck('ebin');
                setCurrentSlideIndex(0);
              }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeDeck === 'ebin'
                  ? 'bg-emerald-700 text-white font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              E-Bin Smart ATM Deck (6 Slides)
            </button>
          </div>

          <a
            href={activeDeck === 'sikkim' ? '/presentations/Sikkim_Ewaste_Deck.pptx' : '/presentations/E_Bin_Smart_Recycling.pdf'}
            download={activeDeck === 'sikkim' ? 'Sikkim_Ewaste_Deck.pptx' : 'E-Bin Smart Recycling.pdf'}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-emerald-950 text-slate-700 dark:text-slate-200 hover:bg-slate-200 border border-slate-200 dark:border-emerald-900/40 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Download Deck</span>
          </a>
        </div>
      </div>

      {/* Main Slide Presentation Stage */}
      <div className="p-6 sm:p-8 bg-slate-50 dark:bg-[#07110C] flex flex-col items-center">
        {/* Slide Screen Frame */}
        <div className="w-full max-w-4xl bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-900/60 rounded-2xl shadow-xl overflow-hidden min-h-[420px] flex flex-col justify-between">
          {/* Slide Header */}
          <div className="px-6 py-4 bg-gradient-to-r from-emerald-900 via-[#143D2B] to-slate-900 text-white flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-wider uppercase text-emerald-300 font-bold">
                Slide {currentSlide.slideNumber} of {currentSlides.length} • {activeDeck === 'sikkim' ? 'Sikkim SPCB Study' : 'E-Bin Project'}
              </span>
              <h2 className="text-base sm:text-lg font-bold leading-tight mt-0.5">
                {currentSlide.title}
              </h2>
            </div>
            <div className="w-8 h-8 rounded-full bg-emerald-800/80 text-white flex items-center justify-center font-bold text-xs font-mono border border-emerald-600/50">
              {currentSlide.slideNumber}
            </div>
          </div>

          {/* Slide Visual or Content Area */}
          <div className="p-6 flex-1 flex flex-col justify-center">
            {currentSlide.imageSrc ? (
              /* If slide has an image preview (E-Bin) */
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-emerald-950 shadow-md">
                <img
                  src={currentSlide.imageSrc}
                  alt={currentSlide.title}
                  className="w-full h-auto object-contain max-h-[360px]"
                />
              </div>
            ) : (
              /* If text/vector slide (Sikkim deck) */
              <div className="space-y-5">
                {currentSlide.subtitle && (
                  <p className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400 border-l-2 border-emerald-600 pl-3">
                    {currentSlide.subtitle}
                  </p>
                )}

                {/* Key Takeaways */}
                <div className="space-y-2.5">
                  {currentSlide.takeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{takeaway}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics Pill Grid */}
                {currentSlide.metrics && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 dark:border-emerald-950/60">
                    {currentSlide.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 rounded-xl"
                      >
                        <div className="text-[10px] text-slate-500 uppercase font-semibold">{metric.label}</div>
                        <div className="text-lg font-bold text-slate-900 dark:text-white mt-0.5 font-mono">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-emerald-700 dark:text-emerald-400 mt-0.5">{metric.desc}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Slide Footer */}
          <div className="px-6 py-3 bg-slate-50 dark:bg-[#0E1D16] border-t border-slate-100 dark:border-emerald-950/40 flex items-center justify-between text-[11px] text-slate-500">
            <span className="font-mono">
              {activeDeck === 'sikkim' ? 'Tanmay Lalge & Yukta Padekar • VIT Mumbai' : 'Yukta Padekar • Smart Hardware Research'}
            </span>
            <span className="font-mono">Verified Academic Slide</span>
          </div>
        </div>

        {/* Slide Navigation Controls */}
        <div className="mt-5 flex items-center gap-4">
          <button
            onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentSlideIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-[#12241C] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-emerald-900/50 shadow-xs hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous Slide
          </button>

          {/* Slide Dots */}
          <div className="flex items-center gap-1.5">
            {currentSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentSlideIndex === idx
                    ? 'w-7 bg-emerald-600'
                    : 'bg-slate-300 dark:bg-emerald-950 hover:bg-slate-400'
                }`}
                title={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlideIndex((prev) => Math.min(currentSlides.length - 1, prev + 1))}
            disabled={currentSlideIndex === currentSlides.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold"
          >
            Next Slide
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
