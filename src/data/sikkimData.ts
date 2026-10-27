export interface DistrictData {
  district: string;
  population: number;
  it: number;
  con: number;
  large: number;
  light: number;
  bat: number;
  other: number;
  total: number;
  collected: number;
  captureRate: number;
  centers: number;
  eprTarget: number;
  eprAchieved: number;
  eprRate: number;
  perCapitaGrams: number;
  remarks: string;
  recyclerPresent: boolean;
  awarenessConducted: boolean;
}

export const SIKKIM_DISTRICTS: DistrictData[] = [
  {
    district: 'Gangtok',
    population: 322000,
    it: 32000,
    con: 27500,
    large: 40000,
    light: 5500,
    bat: 10500,
    other: 4500,
    total: 120000,
    collected: 7800,
    captureRate: 6.5,
    centers: 2,
    eprTarget: 6500,
    eprAchieved: 5850,
    eprRate: 90.0,
    perCapitaGrams: 373,
    remarks: 'Highest E-waste generation due to urbanisation, government offices, educational institutes, and commercial hubs.',
    recyclerPresent: true,
    awarenessConducted: true
  },
  {
    district: 'Gyalshing',
    population: 156000,
    it: 13500,
    con: 13500,
    large: 16500,
    light: 2200,
    bat: 4800,
    other: 2000,
    total: 52500,
    collected: 2000,
    captureRate: 3.8,
    centers: 1,
    eprTarget: 1600,
    eprAchieved: 1250,
    eprRate: 78.1,
    perCapitaGrams: 337,
    remarks: 'Moderate collection through 1 authorized center; relies on agricultural and small commercial activities.',
    recyclerPresent: false,
    awarenessConducted: false
  },
  {
    district: 'Mangan',
    population: 50000,
    it: 5500,
    con: 12000,
    large: 7000,
    light: 900,
    bat: 1800,
    other: 800,
    total: 28000,
    collected: 1600,
    captureRate: 5.7,
    centers: 1,
    eprTarget: 1300,
    eprAchieved: 950,
    eprRate: 73.1,
    perCapitaGrams: 560,
    remarks: 'Highest per-capita generation (560g) due to remote terrain, hydro projects, and concentrated institutional tech.',
    recyclerPresent: false,
    awarenessConducted: false
  },
  {
    district: 'Namchi',
    population: 168000,
    it: 15500,
    con: 8000,
    large: 18500,
    light: 2500,
    bat: 5500,
    other: 2500,
    total: 52500,
    collected: 3100,
    captureRate: 5.9,
    centers: 2,
    eprTarget: 2500,
    eprAchieved: 2150,
    eprRate: 86.0,
    perCapitaGrams: 313,
    remarks: 'Active secondary hub with Eastern Recyclers authorized facility and college campus outreach programs.',
    recyclerPresent: true,
    awarenessConducted: true
  },
  {
    district: 'Pakyong',
    population: 85000,
    it: 9000,
    con: 6500,
    large: 10500,
    light: 1500,
    bat: 3000,
    other: 1000,
    total: 31500,
    collected: 2500,
    captureRate: 7.9,
    centers: 1,
    eprTarget: 2000,
    eprAchieved: 1600,
    eprRate: 80.0,
    perCapitaGrams: 371,
    remarks: 'Home to Pakyong Airport electronics and Himalayan E-Waste Solutions recycler; minor water contamination noted at repair cluster.',
    recyclerPresent: true,
    awarenessConducted: false
  },
  {
    district: 'Soreng',
    population: 74000,
    it: 7500,
    con: 5000,
    large: 8800,
    light: 1200,
    bat: 2500,
    other: 1000,
    total: 26000,
    collected: 1200,
    captureRate: 4.6,
    centers: 1,
    eprTarget: 1000,
    eprAchieved: 700,
    eprRate: 70.0,
    perCapitaGrams: 351,
    remarks: 'Newly organized district; participated in community awareness drive (300 villagers reached).',
    recyclerPresent: false,
    awarenessConducted: true
  }
];

export const SIKKIM_TOTALS = {
  totalGeneratedKg: 310500,
  totalGeneratedTonnes: 310.5,
  totalCollectedKg: 18200,
  totalCollectedTonnes: 18.2,
  captureRatePercent: 5.86, // ~5.9%
  totalPopulation: 855000,
  avgPerCapitaGrams: 363.16,
  totalEprTargetKg: 14900,
  totalEprAchievedKg: 12500,
  eprAchievementPercent: 83.89, // ~83.9%
  totalCollectionCenters: 8,
  compliantProducers: 12,
  partiallyCompliantProducers: 6,
  nonCompliantProducers: 2,
  totalProducers: 20,
  installedRecyclingCapacityTonnes: 1100,
  quantityProcessedTonnes: 690,
  avgMaterialRecoveryRatePercent: 79,
  informalWorkersIdentified: 97,
  informalWorkersTrained: 41,
  informalTrainingPercent: 42.3,
  monitoredHotspots: 3,
  awarenessReachTotal: 1580
};

export const SIKKIM_CATEGORIES = [
  { name: 'Large & Small Equipment', tonnes: 101.3, kg: 101300, percentage: 32.6, color: '#C9962A' },
  { name: 'IT & Telecommunication', tonnes: 83.0, kg: 83000, percentage: 26.7, color: '#143D2B' },
  { name: 'Consumer Electrical & Electronics', tonnes: 72.5, kg: 72500, percentage: 23.3, color: '#059669' },
  { name: 'Batteries', tonnes: 28.1, kg: 28100, percentage: 9.1, color: '#7A2E2E' },
  { name: 'Lighting Equipment', tonnes: 13.8, kg: 13800, percentage: 4.4, color: '#D8B96C' },
  { name: 'Other WEEE', tonnes: 11.8, kg: 11800, percentage: 3.8, color: '#B08968' }
];

export const AUTHORIZED_RECYCLERS = [
  {
    name: 'Sikkim Eco Dismantlers',
    authNo: 'SPCB/SKM/EW/2025-001',
    district: 'Gangtok',
    installedCapacity: 500,
    processed: 320,
    utilization: 64,
    recoveryRate: 81,
    validTill: '31-03-2028',
    status: 'Active'
  },
  {
    name: 'Eastern Recyclers',
    authNo: 'SPCB/SKM/EW/2025-003',
    district: 'Namchi',
    installedCapacity: 350,
    processed: 210,
    utilization: 60,
    recoveryRate: 79,
    validTill: '31-03-2029',
    status: 'Active'
  },
  {
    name: 'Himalayan E-Waste Solutions',
    authNo: 'SPCB/SKM/EW/2025-005',
    district: 'Pakyong',
    installedCapacity: 250,
    processed: 160,
    utilization: 64,
    recoveryRate: 77,
    validTill: '31-03-2029',
    status: 'Active'
  }
];

export const INFORMAL_HOTSPOTS = [
  {
    name: 'MG Marg Scrap Cluster',
    district: 'Gangtok',
    status: 'Identified & Monitored',
    estimatedWorkers: 45,
    registeredTrained: 18,
    trainedPercentage: 40,
    formalizationAction: 'Awareness, digital portal registration & safety training',
    envMonitoring: {
      type: 'Air Quality',
      result: 'Within Limit',
      healthCampConducted: true,
      screened: 120
    }
  },
  {
    name: 'Namchi Scrap Market',
    district: 'Namchi',
    status: 'Partially Formalized',
    estimatedWorkers: 32,
    registeredTrained: 15,
    trainedPercentage: 46.9,
    formalizationAction: 'Skill development training complete; authorized collection hub pending',
    envMonitoring: {
      type: 'Soil Quality',
      result: 'Within Limit',
      healthCampConducted: false,
      screened: 0
    }
  },
  {
    name: 'Pakyong Repair Cluster',
    district: 'Pakyong',
    status: 'Under Monitoring',
    estimatedWorkers: 20,
    registeredTrained: 10,
    trainedPercentage: 50,
    formalizationAction: 'Safety inspection & pilot collection point integration',
    envMonitoring: {
      type: 'Water Monitoring',
      result: 'Minor Contamination (Runoff trace)',
      healthCampConducted: true,
      screened: 75
    }
  }
];

export const PRODUCER_COMPLIANCE_LIST = [
  { producer: 'Samsung India Electronics Pvt. Ltd.', regNo: 'EPR/2024/ST/00457', status: 'Compliant', inspection: 'Conducted', penalty: 'None' },
  { producer: 'LG Electronics India Pvt. Ltd.', regNo: 'EPR/2024/ST/00458', status: 'Compliant', inspection: 'Conducted', penalty: 'None' },
  { producer: 'HP India Sales Pvt. Ltd.', regNo: 'EPR/2024/ST/00460', status: 'Compliant', inspection: 'Verified', penalty: 'None' },
  { producer: 'Acer India Pvt. Ltd.', regNo: 'EPR/2024/ST/00462', status: 'Compliant', inspection: 'Conducted', penalty: 'None' },
  { producer: 'Apple India Pvt. Ltd.', regNo: 'EPR/2024/ST/00464', status: 'Compliant', inspection: 'Verified', penalty: 'None' },
  { producer: 'OnePlus India', regNo: 'EPR/2024/ST/00466', status: 'Compliant', inspection: 'Conducted', penalty: 'None' },
  { producer: 'Vivo Mobile India Pvt. Ltd.', regNo: 'EPR/2024/ST/00467', status: 'Compliant', inspection: 'Conducted', penalty: 'None' },
  { producer: 'Panasonic India Pvt. Ltd.', regNo: 'EPR/2024/ST/00470', status: 'Compliant', inspection: 'Verified', penalty: 'None' },
  { producer: 'Sony India Pvt. Ltd.', regNo: 'EPR/2024/ST/00471', status: 'Compliant', inspection: 'Conducted', penalty: 'None' },
  { producer: 'Godrej Appliances', regNo: 'EPR/2024/ST/00473', status: 'Compliant', inspection: 'Conducted', penalty: 'None' },
  { producer: 'Voltas Ltd.', regNo: 'EPR/2024/ST/00474', status: 'Compliant', inspection: 'Verified', penalty: 'None' },
  { producer: 'Philips India Ltd.', regNo: 'EPR/2024/ST/00476', status: 'Compliant', inspection: 'Conducted', penalty: 'None' },
  { producer: 'Dell India Pvt. Ltd.', regNo: 'EPR/2024/ST/00459', status: 'Partially Compliant', inspection: 'Awaiting Audit', penalty: 'None' },
  { producer: 'ASUS India Pvt. Ltd.', regNo: 'EPR/2024/ST/00463', status: 'Partially Compliant', inspection: 'Conducted', penalty: 'Resolved' },
  { producer: 'Xiaomi Technology India Pvt. Ltd.', regNo: 'EPR/2024/ST/00465', status: 'Partially Compliant', inspection: 'Pending Records', penalty: 'None' },
  { producer: 'Realme India', regNo: 'EPR/2024/ST/00469', status: 'Partially Compliant', inspection: 'Pending Documentation', penalty: 'None' },
  { producer: 'Haier Appliances India Pvt. Ltd.', regNo: 'EPR/2024/ST/00472', status: 'Partially Compliant', inspection: 'Conducted', penalty: 'Resolved' },
  { producer: 'Havells India Ltd.', regNo: 'EPR/2024/ST/00475', status: 'Partially Compliant', inspection: 'Pending Audit', penalty: 'None' },
  { producer: 'Lenovo India Pvt. Ltd.', regNo: 'EPR/2024/ST/00461', status: 'Non-Compliant', inspection: 'Failed Target', penalty: 'Show-Cause Issued' },
  { producer: 'OPPO Mobiles India Pvt. Ltd.', regNo: 'EPR/2024/ST/00468', status: 'Non-Compliant', inspection: 'Shortfall In Target', penalty: 'Penalty Initiated' }
];

export const AWARENESS_PROGRAMS = [
  { program: 'Door-to-Door E-Waste Collection Drive', district: 'Gangtok', date: '12-06-2026', type: 'Residential Collection Drive', target: 'Urban Households', reached: 850 },
  { program: 'College E-Waste Campaign & Seminar', district: 'Namchi', date: '28-06-2026', type: 'Educational Workshop', target: 'College Students & Youth', reached: 430 },
  { program: 'Village E-Waste Awareness Camp', district: 'Soreng', date: '15-07-2026', type: 'Community Panchayat Camp', target: 'Rural Community Members', reached: 300 }
];
