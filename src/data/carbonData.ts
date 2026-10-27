export interface CarbonCategory {
  category: string;
  scope: string;
  tCO2e: number;
  percentage: number;
  color: string;
  description: string;
}

export const CARBON_FOOTPRINT_DATA = {
  studentName: 'Yukta Padekar',
  rollNumber: '24102C0038',
  workbookFilename: '24102C0038.xlsx',
  grossEmissions: 471.65, // tCO2e
  carbonOffset: 242.52, // tCO2e sequestered
  netFootprint: 229.14, // tCO2e
  countryBenchmark: 1.90, // metric tons CO2e / cap / yr (India)
  worldBenchmark: 4.86, // metric tons CO2e / cap / yr (Global)
  reductionTarget: 0.00, // Net Zero target
  categories: [
    {
      category: 'Secondary Data (Supply Chain & Embodied)',
      scope: 'Scope 3',
      tCO2e: 217.02,
      percentage: 46.0,
      color: '#059669',
      description: 'Upstream emissions from hardware manufacturing, logistics, IT procurement, and server lifecycle.'
    },
    {
      category: 'Purchased Electricity',
      scope: 'Scope 2',
      tCO2e: 125.36,
      percentage: 26.6,
      color: '#143D2B',
      description: 'Grid electricity consumption across campus computing labs, lighting, servers, and air handling units.'
    },
    {
      category: 'Fugitive Emissions (Refrigerants)',
      scope: 'Scope 1',
      tCO2e: 70.89,
      percentage: 15.0,
      color: '#C9962A',
      description: 'Refrigerant leakages and losses from domestic, commercial, and laboratory HVAC/chiller systems.'
    },
    {
      category: 'Fossil Fuel (Direct Combustion)',
      scope: 'Scope 1',
      tCO2e: 31.33,
      percentage: 6.6,
      color: '#7A2E2E',
      description: 'Direct combustion of petrol, diesel, and LPG in institutional vehicles and emergency power backup generators.'
    },
    {
      category: 'Water Supply & Treatment',
      scope: 'Scope 3',
      tCO2e: 13.31,
      percentage: 2.8,
      color: '#0284C7',
      description: 'Energy-intensive municipal water distribution, pumping, filtration, and wastewater treatment.'
    },
    {
      category: 'Solid Waste & Disposal',
      scope: 'Scope 3',
      tCO2e: 7.83,
      percentage: 1.7,
      color: '#D97706',
      description: 'End-of-life disposal, municipal solid waste sorting, and landfill methane decomposition.'
    },
    {
      category: 'Institutional Travel & Commute',
      scope: 'Scope 3',
      tCO2e: 5.92,
      percentage: 1.3,
      color: '#9333EA',
      description: 'Daily student, faculty, and administrative commute via public and private transport modalities.'
    }
  ] as CarbonCategory[]
};
