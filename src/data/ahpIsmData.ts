export interface DecisionSection {
  title: string;
  subtitle: string;
  questions: {
    q: string;
    a: string;
    keyTakeaway?: string;
  }[];
}

export const AHP_ISM_STUDY: DecisionSection[] = [
  {
    title: '1. Understanding the Problem',
    subtitle: 'Macro E-Waste Dynamics and Hazardous Composition in India',
    questions: [
      {
        q: 'Why has E-Waste become the world’s fastest-growing waste stream?',
        a: 'The explosive growth of electrical and electronic waste is directly tied to the digital revolution, accelerating consumption of electronic goods, and rapid technological turnover. As newer innovations emerge, earlier devices suffer artificial or engineered obsolescence and are discarded. IT equipment and mobile gadgets experience the highest churn rate. The study also highlights cryptocurrency mining and high-frequency hardware upgrades where specialized ASIC chips and graphics cards are retired prematurely to maintain operational competitiveness.',
        keyTakeaway: '62 billion kg generated globally in 2022, with only 22.3% formally recycled.'
      },
      {
        q: 'What is the scale of the E-Waste crisis specifically in India?',
        a: 'India is currently the third-largest generator of e-waste globally, with a compound annual growth rate (CAGR) of approximately 30%. E-waste handling in India has historically been dominated by an informal, unstructured, and crude recycling economy (over 90%), characterized by acid baths, open-pit burning, and mercury amalgamation in densely populated urban scrap clusters.',
        keyTakeaway: 'India produces >3.2 million tonnes annually, growing at 30% CAGR.'
      },
      {
        q: 'Why is E-Waste chemically dangerous to human health and the biosphere?',
        a: 'E-waste contains over a thousand hazardous substances including heavy metals (Lead Pb, Mercury Hg, Cadmium Cd, Hexavalent Chromium Cr(VI), Arsenic As) and brominated flame retardants (BFRs). Lead attacks the central nervous system, brain development, and kidneys; Mercury bioaccumulates as methylmercury in aquatic food chains; Cadmium causes renal failure and bone demineralization; and open burning releases dioxins and furans into ambient air.',
        keyTakeaway: 'Toxic leaching into groundwater, soil bioaccumulation, and persistent atmospheric contaminants.'
      }
    ]
  },
  {
    title: '2. The Solution Approach',
    subtitle: 'Multi-Criteria Decision Making (MCDM) Methodologies: AHP and ISM',
    questions: [
      {
        q: 'What is the purpose of the Analytic Hierarchy Process (AHP) in this study?',
        a: 'AHP is a quantitative Multi-Criteria Decision-Making (MCDM) tool developed by Thomas Saaty. In this e-waste study, AHP is deployed to structure complex management challenges into a multi-level hierarchy (goal, criteria, sub-criteria). Experts perform rigorous pairwise comparison matrices using Saaty’s 1–9 scale to derive normalized relative priority weights and consistency ratios (CR < 0.10) for each barrier.',
        keyTakeaway: 'Quantifies subjective expert judgements into mathematical priority weights.'
      },
      {
        q: 'What is the purpose of Interpretive Structural Modeling (ISM)?',
        a: 'ISM is a qualitative and structural methodology designed to map contextual, inter-dependent relationships among various barriers. It creates a Structural Self-Interaction Matrix (SSIM) that transforms fuzzy direct linkages into a partitioned reachability matrix. This categorizes barriers into hierarchical levels from fundamental root drivers (bottom of hierarchy) to dependent outcome barriers (top).',
        keyTakeaway: 'Reveals directional dependency: which barrier triggers or drives other barriers.'
      },
      {
        q: 'What is the key functional difference between AHP and ISM?',
        a: 'AHP is primarily a prioritizing and weighting instrument (telling decision-makers WHICH barrier is currently perceived as the most severe or important). ISM is a structural cause-and-effect modeling instrument (telling decision-makers HOW barriers influence each other and WHICH root-cause barrier must be solved first to unlock progress across the entire system). Combining both creates a comprehensive strategic roadmap.',
        keyTakeaway: 'AHP = Relative Weight & Urgency; ISM = Directional Causality & Root-Cause Hierarchy.'
      }
    ]
  },
  {
    title: '3. Prioritizing Challenges & Root Drivers',
    subtitle: 'Barrier Hierarchy, MICMAC Analysis, and Implementation Insights',
    questions: [
      {
        q: 'Which challenge received the highest priority weight in the AHP evaluation?',
        a: 'In the AHP evaluation, "Lack of Knowledge and Skills" emerged with the highest priority weight among all operational and technical criteria. Without adequate technical literacy, workforce awareness, and specialized occupational safety training, modern recycling technologies cannot be operated safely or profitably.',
        keyTakeaway: 'Lack of technical training and informal workforce literacy is the bottleneck.'
      },
      {
        q: 'Why is "Lack of Knowledge and Skills" so critical in Indian E-Waste management?',
        a: 'Because the vast majority of e-waste collection and dismantling in India is performed by informal workers (kabadiwalas, local aggregators, manual scrap strippers). These workers lack knowledge regarding chemical hazards, protective equipment, and hydrometallurgical extraction methods. Furthermore, consumers lack awareness regarding official take-back channels, leading to household hoarding or disposal in municipal trash.',
        keyTakeaway: 'Directly accounts for low formal capture rates and dangerous primitive handling.'
      },
      {
        q: 'How does AHP priority compare with ISM structural priority?',
        a: 'While AHP prioritizes "Lack of Knowledge and Skills" due to immediate operational friction, ISM places "Inadequate Regulatory Enforcement & Policy Infrastructure" at the foundational base (Level 1 Root Driver). The ISM structural model proves that until government policy establishes mandatory digital EPR audits and subsidizes formal training hubs, knowledge cannot be systematically disseminated.',
        keyTakeaway: 'ISM identifies Policy Infrastructure as the master lever that enables Knowledge and Skills.'
      }
    ]
  }
];

export const AHP_CRITERIA_WEIGHTS = [
  { criterion: 'Lack of Knowledge & Technical Skills', weight: 0.312, rank: 1, color: '#143D2B' },
  { criterion: 'Weak Reverse Logistics & Collection Grid', weight: 0.245, rank: 2, color: '#059669' },
  { criterion: 'Informal Sector Dominance & Market Leakage', weight: 0.184, rank: 3, color: '#C9962A' },
  { criterion: 'High Capital Cost of Formal Metallurgy', weight: 0.142, rank: 4, color: '#7A2E2E' },
  { criterion: 'Deficiencies in Regulatory Auditing & EPR Verification', weight: 0.117, rank: 5, color: '#0284C7' }
];
