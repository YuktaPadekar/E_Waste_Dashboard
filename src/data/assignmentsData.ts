export type DocumentCategory =
  | 'All'
  | 'Assignments'
  | 'Research Papers'
  | 'Presentations & Posters'
  | 'Excel Datasets'
  | 'Regulatory Studies'
  | 'Other Academic Research';

export interface DocumentItem {
  id: string;
  title: string;
  shortTitle: string;
  category: DocumentCategory;
  fileType: 'PDF' | 'DOCX' | 'XLSX' | 'PPTX' | 'HTML';
  originalFilename: string;
  filePath: string;
  downloadFilename: string;
  fileSizeFormatted: string;
  submissionDate?: string;
  authors: string[];
  collaborative: boolean;
  collaborationDetails?: string;
  projectDomain: string;
  description: string;
  keyFindings: string[];
  previewPages: string[];
  totalPages: number;
  featured?: boolean;
  tags: string[];
}

export const STUDENT_PROFILE = {
  name: 'Yukta Padekar',
  rollNumber: '24102C0038',
  branch: 'CMPN-C (Computer Engineering)',
  classGroup: 'TE CMPN-C (Third Year Computer Engineering)',
  institute: 'Vidyalankar Institute of Technology, Mumbai',
  affiliation: 'Affiliated with University of Mumbai, Approved by AICTE',
  projectDomain: 'E-Waste Management and Environmental Sustainability',
  academicYear: '2026–2027',
  email: 'yukta.padekar@vit.edu.in',
  statement:
    'Academic portfolio and digital documentation portal showcasing research in sub-national e-waste tracking, circular micro-economies, hazardous metallurgy modeling, and institutional carbon accounting.'
};

export const ASSIGNMENT_CATALOGUE: DocumentItem[] = [
  {
    id: 'sikkim-ieee-report',
    title: 'E-waste It Wisely at the Sub-National Level: A District-Level Assessment of Generation, Collection, and Recycling Performance in Sikkim, India',
    shortTitle: 'Sikkim District-Level IEEE Research Paper',
    category: 'Research Papers',
    fileType: 'PDF',
    originalFilename: 'Sikkim_Ewaste_Report_IEEE.pdf',
    filePath: '/documents/Sikkim_Ewaste_Report_IEEE.pdf',
    downloadFilename: 'Sikkim_Ewaste_Report_IEEE.pdf',
    fileSizeFormatted: '479.7 KB',
    submissionDate: 'August 2026',
    authors: ['Tanmay Lalge', 'Yukta Padekar'],
    collaborative: true,
    collaborationDetails: 'Joint academic research paper authored by Tanmay Lalge and Yukta Padekar, Department of Computer Engineering, Vidyalankar Institute of Technology.',
    projectDomain: 'Sub-National Environmental Informatics & Waste Governance',
    description:
      'Comprehensive 6-page academic paper structured in standard IEEE conference format. Evaluates district-level e-waste generation, collection capture gaps, Extended Producer Responsibility (EPR) targets, and formal recycler utilization across Sikkim’s 6 districts based on SPCB data.',
    keyFindings: [
      '310.5 tonnes generated statewide in FY 2026; only 18.2 tonnes formally collected (5.9% capture rate).',
      'EPR target achievement reached 83.9% (12,500 / 14,900 kg), with 12 of 20 producers fully compliant.',
      'Installed formal recycling capacity (1,100 t/yr) exceeds statewide generation, but runs at 63% utilization due to upstream collection gaps.',
      'Severe spatial disparity: Gangtok generates 39% of state waste; Gyalshing, Mangan, and Soreng lack any authorized recycling facility.'
    ],
    previewPages: [
      '/previews/Sikkim_Ewaste_Report_IEEE_p1.png',
      '/previews/Sikkim_Ewaste_Report_IEEE_p2.png',
      '/previews/Sikkim_Ewaste_Report_IEEE_p3.png',
      '/previews/Sikkim_Ewaste_Report_IEEE_p4.png',
      '/previews/Sikkim_Ewaste_Report_IEEE_p5.png',
      '/previews/Sikkim_Ewaste_Report_IEEE_p6.png'
    ],
    totalPages: 6,
    featured: true,
    tags: ['IEEE', 'Research Paper', 'Sikkim SPCB', 'EPR Targets', 'Sub-National Study']
  },
  {
    id: 'sikkim-spcb-dashboard',
    title: 'Sikkim State Pollution Control Board: Official E-Waste Management Dashboard (FY 2026)',
    shortTitle: 'Sikkim SPCB Visual Dashboard (2-Page)',
    category: 'Research Papers',
    fileType: 'PDF',
    originalFilename: 'sikkim_ewaste_dashboard (2).pdf',
    filePath: '/documents/sikkim_ewaste_dashboard.pdf',
    downloadFilename: 'sikkim_ewaste_dashboard (2).pdf',
    fileSizeFormatted: '302.7 KB',
    submissionDate: 'July 2026',
    authors: ['Yukta Padekar (Data Modeling & Visualization)'],
    collaborative: false,
    projectDomain: 'Environmental Regulatory Reporting & Analytics',
    description:
      'Official 2-page publication-grade visual dashboard prepared for the Sikkim State Pollution Control Board under the E-Waste (Management) Rules, 2022 Schedule I. Visualizes district generation inventories, log-scale capture gaps, recycler capacity, producer compliance audits, informal sector formalization, and water/soil health screening.',
    keyFindings: [
      'Gangtok dominates state generation (120,000 kg), followed by Namchi (52,500 kg) and Gyalshing (52,500 kg).',
      'Large & Small Equipment constitutes 32.6% (101.3 t) of total waste, followed by IT & Telecom (26.7%, 83.0 t).',
      'Producer compliance audited: 12 Compliant (60%), 6 Partially Compliant (30%), 2 Non-Compliant (Lenovo & OPPO).',
      'Informal sector: 97 workers identified across 3 scrap hotspots; 41 (42.3%) registered and trained in occupational safety.'
    ],
    previewPages: [
      '/previews/sikkim_ewaste_dashboard_(2)_p1.png',
      '/previews/sikkim_ewaste_dashboard_(2)_p2.png'
    ],
    totalPages: 2,
    featured: true,
    tags: ['SPCB Dashboard', 'Data Visualization', 'EPR Compliance', 'Recycler Capacity']
  },
  {
    id: 'ebin-smart-recycling',
    title: 'E-Bin: The Smart E-Waste ATM — An AI-Powered Collection System for a Closed-Loop Micro-Economy',
    shortTitle: 'E-Bin Smart Recycling ATM Presentation Deck',
    category: 'Presentations & Posters',
    fileType: 'PDF',
    originalFilename: 'E-Bin Smart Recycling.pdf',
    filePath: '/presentations/E_Bin_Smart_Recycling.pdf',
    downloadFilename: 'E-Bin Smart Recycling.pdf',
    fileSizeFormatted: '5.81 MB',
    submissionDate: 'September 2026',
    authors: ['Yukta Padekar (Project Lead)'],
    collaborative: false,
    projectDomain: 'Smart Hardware, Edge AI & Circular Economics',
    description:
      'A 6-slide innovation deck detailing an AI-enabled automated reverse-vending kiosk for small electronics (micro e-waste). Solves the consumer behavioral friction of discarding small cables, phones, and batteries into municipal bins through edge computer vision identification and instant mobile financial incentives.',
    keyFindings: [
      'Eliminates friction: accessible ATM drop-off points in campuses, retail malls, and metro stations.',
      'Automated optical recognition and lightweight CNN edge classification at point of deposit.',
      'Multi-compartment internal pneumatic diverter routing for lithium-ion batteries, PCBs, and copper wiring.',
      'Sustainable micro-economy: monetizes pre-sorted high-purity fractions with certified industrial recyclers.'
    ],
    previewPages: [
      '/previews/E-Bin_Smart_Recycling_p1.png',
      '/previews/E-Bin_Smart_Recycling_p2.png',
      '/previews/E-Bin_Smart_Recycling_p3.png',
      '/previews/E-Bin_Smart_Recycling_p4.png',
      '/previews/E-Bin_Smart_Recycling_p5.png',
      '/previews/E-Bin_Smart_Recycling_p6.png'
    ],
    totalPages: 6,
    featured: true,
    tags: ['E-Bin', 'AI Vision', 'Micro E-Waste', 'Reverse Vending', 'Circular Economy']
  },
  {
    id: 'sikkim-presentation-deck',
    title: 'E-Waste It Wisely at the Sub-National Level: Executive Presentation Deck',
    shortTitle: 'Sikkim E-Waste Assessment Slide Deck',
    category: 'Presentations & Posters',
    fileType: 'PPTX',
    originalFilename: 'Sikkim_Ewaste_Deck.pptx',
    filePath: '/presentations/Sikkim_Ewaste_Deck.pptx',
    downloadFilename: 'Sikkim_Ewaste_Deck.pptx',
    fileSizeFormatted: '394.2 KB',
    submissionDate: 'August 2026',
    authors: ['Tanmay Lalge', 'Yukta Padekar'],
    collaborative: true,
    collaborationDetails: 'Collaborative academic presentation deck created jointly by Tanmay Lalge and Yukta Padekar, Vidyalankar Institute of Technology.',
    projectDomain: 'Environmental Policy Presentation & Data Synthesis',
    description:
      '6-slide executive presentation summarizing the empirical findings of the Sikkim e-waste assessment. Covers the capture gap, the district divide, waste composition anatomy, informal workforce metrics, and a four-point strategic roadmap for state policymakers.',
    keyFindings: [
      'Upstream collection is the primary bottleneck: recyclers operate at only 63% capacity due to feed shortfall.',
      'Sikkim’s 5.9% capture rate trails the 17.4% global average, necessitating shared mobile collection units in northern districts.',
      'Roadmap: 1) Expand collection infrastructure, 2) Cover remote districts, 3) Formalize informal labor, 4) Reconcile quarterly data.'
    ],
    previewPages: [
      '/previews/Sikkim_Ewaste_Report_IEEE_p1.png'
    ],
    totalPages: 6,
    featured: false,
    tags: ['Slide Deck', 'PPTX', 'Executive Summary', 'Policy Roadmap']
  },
  {
    id: 'pcb-molten-salt-poster',
    title: 'Automated Laser + Molten Salt Extraction Process for Waste PCB: Technical Poster',
    shortTitle: 'Automated Laser & Molten Salt PCB Recycling Poster',
    category: 'Presentations & Posters',
    fileType: 'PDF',
    originalFilename: '24102C0038.assign02.pdf',
    filePath: '/posters/Automated_Laser_Molten_Salt_PCB_Extraction.pdf',
    downloadFilename: '24102C0038.assign02.pdf',
    fileSizeFormatted: '187.8 KB',
    submissionDate: 'Academic Assignment 02',
    authors: ['Yukta Padekar (Roll: 24102C0038)'],
    collaborative: false,
    projectDomain: 'Advanced Metallurgical Engineering & Clean Pyrometallurgy',
    description:
      'Comprehensive 12-step engineering process poster illustrating a clean, non-polluting hybrid process for waste printed circuit board (PCB) recycling. Details automated laser scanning, component desoldering, high-temperature molten salt dissolution (400–800°C), and electrowinning/chemical precipitation of Cu, Au, Ag, Pd, Pt, and Sn.',
    keyFindings: [
      '12-step sequence: Laser scanning -> precision component desoldering -> molten salt reactor -> selective dissolution -> metal purification.',
      'Selective recovery: Base metals (Cu, Ni, Sn), Precious metals (Au, Ag, Pd, Pt), Other metals (Pb, Zn).',
      'High recovery efficiency with zero hazardous acid vapors or open-flame dioxin emissions.'
    ],
    previewPages: [
      '/previews/24102C0038_assign02_p1.png'
    ],
    totalPages: 1,
    featured: true,
    tags: ['Technical Poster', 'Molten Salt', 'Laser Desoldering', 'Gold Recovery', 'PCBs']
  },
  {
    id: 'sikkim-ewaste-to-wealth-poster',
    title: 'E-Waste to Wealth: District-Wise Recoverable Metals & Recommended Extraction Methods in Sikkim',
    shortTitle: 'Sikkim E-Waste to Wealth Poster',
    category: 'Presentations & Posters',
    fileType: 'PDF',
    originalFilename: '24102C0038..pdf',
    filePath: '/posters/Sikkim_E_Waste_To_Wealth_Poster.pdf',
    downloadFilename: '24102C0038..pdf',
    fileSizeFormatted: '261.2 KB',
    submissionDate: 'Academic Term Submission',
    authors: ['Yukta Padekar (Roll: 24102C0038)'],
    collaborative: false,
    projectDomain: 'Spatial Resource Extraction & Circular Metallurgy',
    description:
      'Detailed state infographic mapping district-level e-waste profiles across Gangtok, Namchi, Mangan, Gyalshing, Pakyong, and Soreng to specific recoverable metals (Cu, Au, Ag, Pd, Sn, Li, Ta, Nb, Ga, In, Nd, Dy, Pr) and recommended clean metallurgical extraction techniques (hydrometallurgy, molten salt electrolysis, hydrogen decrepitation).',
    keyFindings: [
      'Gangtok & Pakyong identified as primary sources for high-value precious metals (Au, Ag, Pd, Ta, Nb) from IT equipment and airport electronics.',
      'All districts contribute Neodymium (Nd), Dysprosium (Dy), and Praseodymium (Pr) rare earths from hard drives and EV motors.',
      'Recommends hydrogen decrepitation and acid leaching for rare-earth recovery and molten salt electrolysis for telecom fractions.'
    ],
    previewPages: [
      '/previews/24102C0038__p1.png'
    ],
    totalPages: 1,
    featured: false,
    tags: ['Infographic Poster', 'Recoverable Metals', 'Rare Earths', 'Sikkim Geography']
  },
  {
    id: 'sikkim-master-tracker-excel',
    title: 'State E-Waste Management Tracker Workbook: Master Multi-Sheet SPCB Dataset',
    shortTitle: 'Sikkim SPCB Master Tracker (8 Sheets)',
    category: 'Excel Datasets',
    fileType: 'XLSX',
    originalFilename: 'State_EWaste_Tracker_Completed_Fixed.xlsx',
    filePath: '/datasets/State_EWaste_Tracker_Completed_Fixed.xlsx',
    downloadFilename: 'State_EWaste_Tracker_Completed_Fixed.xlsx',
    fileSizeFormatted: '41.8 KB',
    submissionDate: 'July 2026',
    authors: ['Yukta Padekar (Data Integration & Validation)'],
    collaborative: false,
    projectDomain: 'Database Engineering & Multi-Sheet State Assessment',
    description:
      'The foundational master spreadsheet containing all empirical data for Sikkim’s e-waste system. Structured across 8 interconnected sheets: 0_Scorecard, Instructions, 1_Generation_Inventory, 2_Collection_Log, 3_Recycling_Infrastructure, 4_Compliance_Tracker (20 producers), 5_Informal_Sector_Hotspots, 6_Env_Health_Monitoring, and 7_Awareness_Programs.',
    keyFindings: [
      'District-by-district breakdown of 6 e-waste categories according to E-Waste Rules 2022 Schedule I.',
      'Granular tracking of 20 brand producers, inspection schedules, and non-compliance penalties.',
      'Contains verified registry numbers for authorized dismantlers, capacity benchmarks, and environmental health logs.'
    ],
    previewPages: [
      '/previews/sikkim_ewaste_dashboard_(2)_p1.png'
    ],
    totalPages: 8,
    featured: true,
    tags: ['Master Excel', 'SPCB Dataset', 'EPR Database', 'District Inventory']
  },
  {
    id: 'carbon-footprint-excel',
    title: 'Institutional Carbon Footprint & Greenhouse Gas Inventory Calculator: 24102C0038.xlsx',
    shortTitle: 'Yukta Carbon Footprint Audit (11 Sheets)',
    category: 'Excel Datasets',
    fileType: 'XLSX',
    originalFilename: '24102C0038.xlsx',
    filePath: '/datasets/24102C0038_Carbon_Footprint_Tracker.xlsx',
    downloadFilename: '24102C0038.xlsx',
    fileSizeFormatted: '60.6 KB',
    submissionDate: 'Academic Term Submission',
    authors: ['Yukta Padekar (Roll: 24102C0038)'],
    collaborative: false,
    projectDomain: 'Carbon Accounting, Scope 1-3 GHG Emissions & Sustainability',
    description:
      'Rigorous multi-scope organizational carbon footprint audit model created by Yukta Padekar. Features 11 worksheets covering Fossil Fuel, Fugitive Refrigerants, Electricity, Water, Waste, Travel, Carbon Offsetting, Secondary Data, Emission Factor Tables, Summary, and live Footprint aggregation.',
    keyFindings: [
      'Gross Institutional Emissions: 471.65 metric tons CO2e.',
      'Active Carbon Sequestration / Offset: -242.52 metric tons CO2e.',
      'Net Institutional Footprint: 229.14 metric tons CO2e.',
      'Top emissions driver: Secondary supply chain procurement (217.02 tCO2e, 46%) followed by electricity (125.36 tCO2e, 26.6%).'
    ],
    previewPages: [
      '/previews/Technical_Paper_Review_Yukta_Padekar_p1.png'
    ],
    totalPages: 11,
    featured: false,
    tags: ['Carbon Footprint', 'Scope 1-2-3', 'GHG Protocol', 'Net Zero Audit']
  },
  {
    id: 'ahp-ism-decision-study',
    title: 'E-Waste Management in India: Multi-Criteria Decision Making (AHP & ISM) Study',
    shortTitle: 'AHP & ISM Decision Framework Study',
    category: 'Regulatory Studies',
    fileType: 'DOCX',
    originalFilename: 'E_Waste_AHP_ISM_Answers (1).docx',
    filePath: '/documents/E_Waste_AHP_ISM_Answers.docx',
    downloadFilename: 'E_Waste_AHP_ISM_Answers (1).docx',
    fileSizeFormatted: '49.1 KB',
    submissionDate: 'September 2026',
    authors: ['Yukta Padekar (Roll: 24102C0038)'],
    collaborative: false,
    projectDomain: 'Operations Research, Decision Science & Systems Engineering',
    description:
      'In-depth academic paper analyzing the application of Analytic Hierarchy Process (AHP) and Interpretive Structural Modeling (ISM) to overcome barriers in Indian e-waste management. Synthesizes macroeconomic metrics (62B kg global waste, 30% Indian CAGR) with mathematical barrier weighting and causal hierarchy modeling.',
    keyFindings: [
      'AHP pairwise priority: "Lack of Knowledge and Skills" identified as highest immediate operational barrier (weight: 0.312).',
      'ISM structural modeling: Identifies "Inadequate Policy Infrastructure & Regulatory Enforcement" as the foundational Level-1 driving root cause.',
      'Contrasts quantitative pairwise ranking (AHP) with directional contextual causality (ISM) to propose holistic policy interventions.'
    ],
    previewPages: [
      '/previews/Sikkim_Ewaste_Report_IEEE_p2.png'
    ],
    totalPages: 5,
    featured: false,
    tags: ['AHP', 'ISM', 'Operations Research', 'Barrier Analysis', 'Decision Science']
  },
  {
    id: 'electronics-manufacturers-table',
    title: 'Electronics Manufacturers in India: Regulatory Compliances, Non-Compliance Incidents & Business Implications',
    shortTitle: 'Indian Electronics Manufacturers Compliance Dossier',
    category: 'Regulatory Studies',
    fileType: 'DOCX',
    originalFilename: 'Electronics_Manufacturers_4_Column_Table(1).docx',
    filePath: '/documents/Electronics_Manufacturers_4_Column_Table.docx',
    downloadFilename: 'Electronics_Manufacturers_4_Column_Table.docx',
    fileSizeFormatted: '47.5 KB',
    submissionDate: 'Academic Term Submission',
    authors: ['Yukta Padekar (Roll: 24102C0038)'],
    collaborative: false,
    projectDomain: 'Corporate Environmental Governance & Supply Chain ESG',
    description:
      'Detailed four-column regulatory audit examining 5 major electronics manufacturing leaders operating in India: Dixon Technologies, Kaynes Technology, Syrma SGS Technology, Foxconn India, and Tata Electronics. Evaluates environmental statutory adherence, reported compliance gaps, and financial/reputational implications.',
    keyFindings: [
      'Dixon Technologies: High governance standard under Companies Act 2013 and SEBI; needs third-party assurance of policy working.',
      'Foxconn India: Labour accommodation standards and overtime compliance scrutiny pose high reputational risk with global brand partners.',
      'Tata Electronics: Precision manufacturing and code of conduct; recent Hosur fire incident requires overhaul of hazardous chemical safety.'
    ],
    previewPages: [
      '/previews/Sikkim_Ewaste_Report_IEEE_p3.png'
    ],
    totalPages: 4,
    featured: false,
    tags: ['Corporate Compliance', 'Dixon', 'Foxconn', 'Tata Electronics', 'ESG Risks']
  },
  {
    id: 'india-vs-world-handwritten',
    title: 'India Compared with 5 Countries & National E-Waste Initiatives: Class Activity Notes',
    shortTitle: 'India vs. World & National Initiatives Class Activity',
    category: 'Assignments',
    fileType: 'PDF',
    originalFilename: 'E waste India Vs World Data Task_Class Activity.pdf',
    filePath: '/documents/E_waste_India_Vs_World_Data_Task_Class_Activity.pdf',
    downloadFilename: 'E waste India Vs World Data Task_Class Activity.pdf',
    fileSizeFormatted: '2.31 MB',
    submissionDate: 'Classroom Activity Submission',
    authors: ['Yukta Padekar (Roll: 24102C0038, CMPN-C)'],
    collaborative: false,
    projectDomain: 'Comparative International Waste Policy',
    description:
      'Handwritten 2-page academic class assignment submitted by Yukta Padekar. Evaluates India’s e-waste growth from 1.97M tonnes (2015) to 3.23M tonnes (2019) against China, the United States, Germany, the United Kingdom, and Japan. Details national statutory milestones including E-Waste Rules 2011, 2016, and the 2022 digital EPR portal framework.',
    keyFindings: [
      'India records the highest generation growth rate among studied countries, but formal collection remains heavily shadowed by informal processing.',
      'Germany and UK formally collect >50% of e-waste under strict European WEEE directives.',
      'Chronicles India’s legislative evolution: 2011 Rules -> 2016 EPR amendment -> 2022 Central Pollution Control Board digital portal.'
    ],
    previewPages: [
      '/previews/E_waste_India_Vs_World_Data_Task_Class_Activity_p1.png',
      '/previews/E_waste_India_Vs_World_Data_Task_Class_Activity_p2.png'
    ],
    totalPages: 2,
    featured: false,
    tags: ['Handwritten Notes', 'Comparative Policy', 'India vs World', 'EPR History']
  },
  {
    id: 'toxic-chemicals-handwritten',
    title: 'Toxic Chemicals in E-Waste: Profile of 5 Heavy Metals (Pb, Cr, As, Cd, Hg)',
    shortTitle: '5 Toxic Heavy Metals & Chemicals Study',
    category: 'Assignments',
    fileType: 'PDF',
    originalFilename: 'Toxic Chemicals_Any 5 1.pdf',
    filePath: '/documents/Toxic_Chemicals_Any_5.pdf',
    downloadFilename: 'Toxic Chemicals_Any 5 1.pdf',
    fileSizeFormatted: '1.86 MB',
    submissionDate: 'Academic Term Submission',
    authors: ['Yukta Padekar (Roll: 24102C0038, CMPN-C TE)'],
    collaborative: false,
    projectDomain: 'Toxicology, Chemical Hazards & Environmental Health',
    description:
      'Handwritten 2-page academic assignment detailing five toxic chemical agents present in e-waste: Lead (Pb), Chromium (Cr), Arsenic (As), Cadmium (Cd), and Mercury (Hg). Outlines industrial electronics sources, biological half-lives, organ accumulation, and environmental mobility in landfill leachate.',
    keyFindings: [
      'Lead (Pb): Found in CRT glass, solder, and batteries; accumulates in bones, kidneys, and brain, causing severe neurotoxicity.',
      'Chromium (Cr): Hexavalent Cr(VI) is highly mobile and carcinogenic in aquatic environments compared to trivalent Cr(III).',
      'Cadmium (Cd) & Mercury (Hg): Exhibit extreme biological half-lives in human kidneys and methylation bioaccumulation in aquatic food chains.'
    ],
    previewPages: [
      '/previews/Toxic_Chemicals_Any_5_1_p1.png',
      '/previews/Toxic_Chemicals_Any_5_1_p2.png'
    ],
    totalPages: 2,
    featured: false,
    tags: ['Handwritten Notes', 'Heavy Metals', 'Lead & Mercury', 'Toxicology', 'Leachate']
  },
  {
    id: 'rnn-cfg-paper-review',
    title: 'Technical Paper Review: Recurrent Neural Networks Meet Context-Free Grammar — Two Birds with One Stone',
    shortTitle: 'RNN Meets Context-Free Grammar Paper Review',
    category: 'Other Academic Research',
    fileType: 'PDF',
    originalFilename: 'Technical_Paper_Review_Yukta_Padekar.pdf',
    filePath: '/documents/Technical_Paper_Review_Yukta_Padekar.pdf',
    downloadFilename: 'Technical_Paper_Review_Yukta_Padekar.pdf',
    fileSizeFormatted: '31.5 KB',
    submissionDate: '13 October 2026',
    authors: ['Yukta Padekar (Roll: 24102C0038, CMPN-C)'],
    collaborative: false,
    projectDomain: 'Computer Engineering, Deep Learning & Formal Language Theory',
    description:
      'Rigorous 2-page technical paper review submitted by Yukta Padekar analyzing the paper by Hui Guan, Umang Chaudhary, Yuanchao Xu, Lin Ning, Lijun Zhang, and Xipeng Shen. Evaluates how combining Recurrent Neural Networks (RNNs) with Context-Free Grammars (CFGs) enables simultaneous data compression and sequence modeling on 16 real-world traces (function calls, memory traces, system logs).',
    keyFindings: [
      'Placed under "Other Academic Research" as required: focuses on deep learning and compiler/system trace compression rather than e-waste.',
      'Demonstrates superior trace compression ratios and faster sequence prediction by exploiting structural hierarchies in program traces.',
      'Examines formal grammar production rules and hidden state transitions for large-scale computer systems.'
    ],
    previewPages: [
      '/previews/Technical_Paper_Review_Yukta_Padekar_p1.png',
      '/previews/Technical_Paper_Review_Yukta_Padekar_p2.png'
    ],
    totalPages: 2,
    featured: false,
    tags: ['Other Academic Research', 'Computer Engineering', 'RNN', 'Context-Free Grammar', 'Deep Learning']
  },
  {
    id: 'sikkim-html-dashboard-prototype',
    title: 'Interactive Sub-National E-Waste Generation Prototype (Standalone HTML Dashboard)',
    shortTitle: 'Sikkim Generation Prototype Web Dashboard',
    category: 'Excel Datasets',
    fileType: 'HTML',
    originalFilename: 'sikkim_ewaste_dashboard.html',
    filePath: '/documents/sikkim_ewaste_dashboard.html',
    downloadFilename: 'sikkim_ewaste_dashboard.html',
    fileSizeFormatted: '18.1 KB',
    submissionDate: 'July 2026',
    authors: ['Yukta Padekar (Web Modeling & Implementation)'],
    collaborative: false,
    projectDomain: 'Web Analytics & Dynamic Data Visualization',
    description:
      'Standalone interactive web prototype built with Chart.js and bespoke CSS. Contains live interactive district generation charts, category doughnuts, stacked e-waste mix breakdowns, and per-capita calculations across Sikkim’s 6 districts.',
    keyFindings: [
      'Interactive Chart.js implementation demonstrating live sorting, category breakdowns, and dynamic KPI computations.',
      'Standalone portable web dashboard asset capable of running in any offline browser environment.'
    ],
    previewPages: [
      '/previews/sikkim_ewaste_dashboard_(2)_p1.png'
    ],
    totalPages: 1,
    featured: false,
    tags: ['Web Prototype', 'Chart.js', 'Interactive Dashboard', 'HTML5']
  }
];
