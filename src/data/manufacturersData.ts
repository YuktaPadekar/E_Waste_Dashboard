export interface ManufacturerRecord {
  company: string;
  category: string;
  regulationsFollowed: string[];
  regulationsNotFollowed: string[];
  implications: string[];
  riskLevel: 'Low' | 'Medium' | 'High';
}

export const ELECTRONICS_MANUFACTURERS: ManufacturerRecord[] = [
  {
    company: 'Dixon Technologies (India) Ltd.',
    category: 'Consumer Electronics & Mobile EMS',
    regulationsFollowed: [
      'Companies Act, 2013 and applicable CSR mandates',
      'Environmental and pollution-control guidelines (SPCB air/water consents)',
      'Occupational health, labour laws and workplace-safety standards',
      'Anti-child-labour and prohibition of forced-labour requirements',
      'Anti-discrimination and anti-bribery internal corporate policies',
      'SEBI Listing Obligations and Disclosure Requirements (LODR)'
    ],
    regulationsNotFollowed: [
      'No major confirmed statutory regulatory violation identified in the reviewed period.',
      'A reported governance gap is the lack of independent external evaluation/assurance regarding operational efficacy of certain internal policies.',
      'Classified as an assurance and oversight gap rather than a statutory default.'
    ],
    implications: [
      'Lower institutional investor confidence in independently verified policy effectiveness.',
      'Potential ESG rating downgrades and stakeholder scrutiny.',
      'Risk of undetected compliance vulnerabilities if third-party monitoring remains unaddressed.',
      'Long-term risk to premier global OEM vendor contracts if rigorous ESG audits are required.'
    ],
    riskLevel: 'Low'
  },
  {
    company: 'Kaynes Technology India Ltd.',
    category: 'High-Precision Electronic Systems & IoT',
    regulationsFollowed: [
      'Companies Act, 2013 corporate governance requirements',
      'Environmental protection and toxic discharge limits under CPCB/SPCB',
      'Factory Act compliance regarding industrial hygiene and plant safety',
      'SEBI regulations applicable to publicly traded electronics manufacturers',
      'Anti-corruption and fair business practices documentation'
    ],
    regulationsNotFollowed: [
      'Limited documentation on extended producer responsibility (EPR) reverse-logistics audits.',
      'Scope 3 emissions accounting across decentralized tier-2 semiconductor supplier tiers remains unverified.',
      'Periodic gap in public disclosure regarding formal e-waste take-back volumes.'
    ],
    implications: [
      'Need for enhanced formal documentation on end-of-life device traceability.',
      'Growing pressure from European export clients regarding RoHS and WEEE compliance verification.',
      'Moderate ESG reporting exposure in forthcoming Business Responsibility and Sustainability Reports (BRSR).'
    ],
    riskLevel: 'Medium'
  },
  {
    company: 'Syrma SGS Technology Ltd.',
    category: 'Engineering & Electronic Manufacturing Services (EMS)',
    regulationsFollowed: [
      'National Voluntary Guidelines on Socio-Economic Responsibilities',
      'Statutory compliance on industrial effluents and hazardous waste storage',
      'Standard labour protocols and minimum wage compliances across production lines',
      'Quality management certifications (ISO 9001, ISO 14001 environmental management)'
    ],
    regulationsNotFollowed: [
      'Slow integration with the centralized national digital EPR portal for certain sub-assemblies.',
      'Informal recycling channel leakage risks in localized plant peripheries.',
      'Lack of granular public reporting on hazardous chemical recovery ratios.'
    ],
    implications: [
      'Potential show-cause notices from state pollution control boards regarding storage limits.',
      'Audit friction during supply chain certification for automotive and medical electronics clients.',
      'Operational need to invest in dedicated reverse supply chain infrastructure.'
    ],
    riskLevel: 'Medium'
  },
  {
    company: 'Foxconn India (Hon Hai Technology Group)',
    category: 'Smartphone & Global Tech Hardware Assembly',
    regulationsFollowed: [
      'High-tier factory automation safety guidelines and clean-room environmental protocols',
      'Mandatory corporate tax and export-import regulations under SEZ frameworks',
      'Large-scale workforce industrial safety protocols and biometric attendance logging',
      'RoHS guidelines for hazardous substance restriction in mobile components'
    ],
    regulationsNotFollowed: [
      'Historical labour and dormitory living standard investigations reported in Tamil Nadu facilities.',
      'Food safety and hygiene compliance lapses at vendor-operated worker accommodations.',
      'Tight production quotas leading to overtime compliance scrutiny under the Factories Act.'
    ],
    implications: [
      'High reputational exposure with global brand principals (e.g. Apple) triggering independent supplier audits.',
      'State government regulatory intervention and temporary facility shutdown risks.',
      'Substantial compliance costs required to overhaul vendor housing and human capital management systems.',
      'Unionization and workforce stability challenges during peak production cycles.'
    ],
    riskLevel: 'High'
  },
  {
    company: 'Tata Electronics Pvt. Ltd.',
    category: 'Precision Components & Semiconductor Assembly',
    regulationsFollowed: [
      'Stringent Tata Code of Conduct (TCoC) ethical and environmental guidelines',
      'Zero liquid discharge (ZLD) systems implemented across manufacturing hubs',
      'Comprehensive women workforce empowerment and residential campus security protocols',
      'Direct compliance with Ministry of Electronics and Information Technology (MeitY) standards'
    ],
    regulationsNotFollowed: [
      'Recent high-profile industrial fire incident at Hosur plant highlighting chemical risk safety challenges.',
      'Temporary emergency response and hazardous chemical containment protocols called into question.',
      'Delayed production timelines affecting global smartphone casing supply chains.'
    ],
    implications: [
      'Intense scrutiny by the Directorate of Industrial Safety and Health (DISH).',
      'Substantial financial repair and asset replacement costs following fire incidents.',
      'Customer order diversion to secondary international manufacturing facilities.',
      'Urgent mandate to revamp chemical safety engineering and automated fire suppression redundancies.'
    ],
    riskLevel: 'High'
  }
];
