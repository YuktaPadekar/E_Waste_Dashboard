export interface TrackerSheetData {
  [sheetName: string]: string[][];
}

export const SIKKIM_TRACKER_SHEETS: TrackerSheetData = {
  "0_Scorecard": [
    [
      "State E-Waste Management Scorecard",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "Live score out of 100, calculated from the 7 data sheets. Set benchmarks in the yellow 'Target/Benchmark' cells.",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "STATE SCORE",
      "",
      "46.1",
      "",
      "NEEDS IMPROVEMENT",
      "",
      "",
      ""
    ],
    [
      "",
      "#",
      "Category",
      "Weight",
      "Benchmark / Target",
      "Achieved Value",
      "Achievement %",
      "Score Earned",
      ""
    ],
    [
      "",
      "1",
      "Generation & Inventory",
      "15",
      "5",
      "0",
      "0",
      "0",
      ""
    ],
    [
      "",
      "2",
      "Collection Performance",
      "20",
      "1",
      "0.2388124547429399",
      "0.2388124547429399",
      "4.8",
      ""
    ],
    [
      "",
      "3",
      "Formal Recycling & Treatment",
      "20",
      "1",
      "8.834178131788558",
      "1",
      "20",
      ""
    ],
    [
      "",
      "4",
      "Regulatory Compliance",
      "15",
      "1",
      "0.6190476190476191",
      "0.6190476190476191",
      "9.3",
      ""
    ],
    [
      "",
      "5",
      "Informal Sector Integration",
      "10",
      "1",
      "0",
      "0",
      "0",
      ""
    ],
    [
      "",
      "6",
      "Environmental & Health Safeguards",
      "10",
      "1",
      "1",
      "1",
      "10",
      ""
    ],
    [
      "",
      "7",
      "Awareness & Outreach",
      "10",
      "20",
      "4",
      "0.2",
      "2",
      ""
    ],
    [
      "",
      "",
      "TOTAL SCORE",
      "100",
      "",
      "",
      "",
      "46.1",
      ""
    ],
    [
      "",
      "Score Bands:",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "85-100",
      "Excellent",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "65-84",
      "Good",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "45-64",
      "Needs Improvement",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "0-44",
      "Critical",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  "Instructions": [
    [
      "State E-Waste Management Tracker - Scoring Methodology",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "A 100-point scorecard for monitoring state-level e-waste generation, collection, formal treatment, compliance, and health/environmental safeguards, in line with the E-Waste (Management) Rules, 2022 (CPCB, India).",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "#",
      "Category",
      "Weight",
      "Indicators (data source sheet)",
      "",
      "",
      ""
    ],
    [
      "",
      "1",
      "Generation & Inventory",
      "15",
      "District reporting completeness; category-wise breakup; annual inventory update  ->  '1_Generation_Inventory'",
      "",
      "",
      ""
    ],
    [
      "",
      "2",
      "Collection Performance",
      "20",
      "Collection rate (%); collection centers per million population; EPR collection-target achievement  ->  '2_Collection_Log'",
      "",
      "",
      ""
    ],
    [
      "",
      "3",
      "Formal Recycling & Treatment",
      "20",
      "% processed by authorized recyclers; installed capacity vs generation; material recovery rate  ->  '3_Recycling_Infrastructure'",
      "",
      "",
      ""
    ],
    [
      "",
      "4",
      "Regulatory Compliance",
      "15",
      "% producers/EPR entities compliant; inspections conducted vs planned; penalties resolved  ->  '4_Compliance_Tracker'",
      "",
      "",
      ""
    ],
    [
      "",
      "5",
      "Informal Sector Integration",
      "10",
      "% hotspots formalized/remediated; % informal workers registered/trained  ->  '5_Informal_Sector_Hotspots'",
      "",
      "",
      ""
    ],
    [
      "",
      "6",
      "Environmental & Health Safeguards",
      "10",
      "% hotspots environmentally monitored; health screening camps conducted  ->  '6_Env_Health_Monitoring'",
      "",
      "",
      ""
    ],
    [
      "",
      "7",
      "Awareness & Outreach",
      "10",
      "Awareness campaigns vs target; collection drives vs target  ->  '7_Awareness_Programs'",
      "",
      "",
      ""
    ],
    [
      "",
      "",
      "TOTAL",
      "100",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "How to use this workbook",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "- Enter data in the 7 numbered sheets (yellow cells = your input). Each sheet has one grey example row - replace/delete it.",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "- Set your benchmarks/targets on the '0_Scorecard' sheet (yellow cells) - e.g. collection centers per million population, EPR targets, inspection/campaign targets.",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "- The '0_Scorecard' sheet pulls live figures from all 7 sheets and computes the state's score out of 100 automatically. Do not overwrite formula cells.",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "- Score bands (customisable on Scorecard): 85-100 Excellent | 65-84 Good | 45-64 Needs Improvement | Below 45 Critical.",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "- Re-run this tracker every quarter/year to monitor trend - copy the Scorecard total into a tracking log for year-on-year comparison.",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  "1_Generation_Inventory": [
    [
      "Generation Inventory",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "One row per district. Category-wise breakup based on E-Waste (Management) Rules, 2022, Schedule I (simplified).",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "District",
      "Population",
      "IT & Telecom (kg)",
      "Consumer Electrical & Electronics (kg)",
      "Large & Small Equipment (kg)",
      "Lighting Equipment (kg)",
      "Batteries (kg)",
      "Other (kg)",
      "Total Generated (kg)",
      "Date Last Updated"
    ],
    [
      "",
      "District A",
      "2500000",
      "180000",
      "90000",
      "60000",
      "15000",
      "25000",
      "10000",
      "380000",
      "30-06-2026"
    ],
    [
      "",
      "Gangtok",
      "322000",
      "32000",
      "27500",
      "40000",
      "5500",
      "10500",
      "4500",
      "120000",
      "2026-07-24 00:00:00"
    ],
    [
      "",
      "Gyalshing",
      "156000",
      "13500",
      "13500",
      "16500",
      "2200",
      "4800",
      "2000",
      "52500",
      "2026-07-24 00:00:00"
    ],
    [
      "",
      "Mangan",
      "50000",
      "5500",
      "12000",
      "7000",
      "900",
      "1800",
      "800",
      "28000",
      "2026-07-24 00:00:00"
    ],
    [
      "",
      "Namchi",
      "168000",
      "15500",
      "8000",
      "18500",
      "2500",
      "5500",
      "2500",
      "52500",
      "2026-07-24 00:00:00"
    ],
    [
      "",
      "Pakyong",
      "85000",
      "9000",
      "6500",
      "10500",
      "1500",
      "3000",
      "1000",
      "31500",
      "2026-07-24 00:00:00"
    ],
    [
      "",
      "Soreng",
      "74000",
      "7500",
      "5000",
      "8800",
      "1200",
      "2500",
      "1000",
      "26000",
      "2026-07-24 00:00:00"
    ],
    [
      "",
      "STATE TOTAL",
      "3355000",
      "263000",
      "162500",
      "161300",
      "28800",
      "53100",
      "21800",
      "690500",
      ""
    ]
  ],
  "2_Collection_Log": [
    [
      "Collection Log",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "One row per district. 'Generated' auto-pulls from Sheet 1 by district name - keep district names identical across sheets.",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "District",
      "Generated (kg) [from Sheet 1]",
      "Collected (kg)",
      "Registered Collection Centers",
      "EPR Collection Target (kg)",
      "EPR Collection Achieved (kg)",
      "Remarks"
    ],
    [
      "",
      "District A",
      "380000",
      "165000",
      "12",
      "150000",
      "138000",
      "Formal collection through 12 authorized centers"
    ],
    [
      "",
      "Gangtok",
      "120000",
      "7800",
      "2",
      "6500",
      "5850",
      "Highest Ewaste generation due to urbanization, goverment offices, educational institutions and commercial establishments "
    ],
    [
      "",
      "Gyalshing",
      "52500",
      "2000",
      "1",
      "1600",
      "1250",
      "Moderate collection through authorized center"
    ],
    [
      "",
      "Mangan",
      "28000",
      "1600",
      "1",
      "1300",
      "950",
      "Steady EPR collections"
    ],
    [
      "",
      "Namchi",
      "52500",
      "3100",
      "2",
      "2500",
      "2150",
      "Rural awareness improving"
    ],
    [
      "",
      "Pakyong",
      "31500",
      "2500",
      "1",
      "2000",
      "1600",
      "Collection from institutions"
    ],
    [
      "",
      "Soreng",
      "26000",
      "1200",
      "1",
      "1000",
      "700",
      "Limited but increasing participation"
    ],
    [
      "",
      "STATE TOTAL",
      "690500",
      "183200",
      "20",
      "164900",
      "150500",
      ""
    ]
  ],
  "3_Recycling_Infrastructure": [
    [
      "Recycling Infrastructure",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "One row per CPCB/SPCB-authorized recycler or dismantler operating in the state.",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "Recycler / Dismantler Name",
      "CPCB/SPCB Authorization No.",
      "District",
      "Installed Capacity (tonnes/yr)",
      "Quantity Processed This Year (tonnes)",
      "Material Recovery Rate (%)",
      "Authorization Valid Till"
    ],
    [
      "",
      "GreenTech E-Waste Recyclers Pvt. Ltd.",
      "CPCB/EWM/2019/ST-1234",
      "District A",
      "5000",
      "3200",
      "0.82",
      "31-03-2027"
    ],
    [
      "",
      "Sikkim Eco Dismantlers",
      "SPCB/SKM/EW/2025-001",
      "Gangtok",
      "500",
      "320",
      "0.81",
      "31-03-2028"
    ],
    [
      "",
      "Eastern Recyclers",
      "SPCB/SKM/EW/2025-003",
      "Namchi",
      "350",
      "210",
      "0.79",
      "31-03-2029"
    ],
    [
      "",
      "Himalayan E-Waste Solutions",
      "SPCB/SKM/EW/2025-005",
      "Pakyong",
      "250",
      "160",
      "0.77",
      "31-03-2029"
    ],
    [
      "",
      "STATE TOTAL",
      "",
      "0",
      "6100",
      "972.5",
      "",
      ""
    ]
  ],
  "4_Compliance_Tracker": [
    [
      "Compliance Tracker",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "One row per registered producer / EPR entity operating in the state.",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "Producer / EPR Entity",
      "EPR Registration No.",
      "Compliance Status",
      "Inspection Planned (Y/N)",
      "Inspection Conducted (Y/N)",
      "Penalty / Show-Cause Issued (Y/N)",
      "Penalty Resolved (Y/N)",
      "Remarks"
    ],
    [
      "",
      "ABC Electronics Ltd.",
      "EPR/2024/ST/00456",
      "Compliant",
      "Yes",
      "Yes",
      "No",
      "N/A",
      "Annual EPR target met (105%)"
    ],
    [
      "",
      "Samsung India Electronics Pvt. Ltd.",
      "EPR/2024/ST/00457",
      "Compliant",
      "Yes",
      "Yes",
      "No",
      "N/A",
      "Records verified"
    ],
    [
      "",
      "LG Electronics India Pvt. Ltd.",
      "EPR/2024/ST/00458",
      "Compliant",
      "Yes",
      "Yes",
      "No",
      "N/A",
      "EPR target achieved"
    ],
    [
      "",
      "Dell India Pvt. Ltd.",
      "EPR/2024/ST/00459",
      "Partially Compliant",
      "Yes",
      "No",
      "No",
      "N/A",
      "Inspection pending"
    ],
    [
      "",
      "HP India Sales Pvt. Ltd.",
      "EPR/2024/ST/00460",
      "Compliant",
      "No",
      "No",
      "No",
      "N/A",
      "Due for next cycle"
    ],
    [
      "",
      "Lenovo India Pvt. Ltd.",
      "EPR/2024/ST/00461",
      "Non-Compliant",
      "Yes",
      "Yes",
      "Yes",
      "No",
      "Shortfall in collection target"
    ],
    [
      "",
      "Acer India Pvt. Ltd.",
      "EPR/2024/ST/00462",
      "Compliant",
      "Yes",
      "Yes",
      "No",
      "N/A",
      "Documentation complete"
    ],
    [
      "",
      "ASUS India Pvt. Ltd.",
      "EPR/2024/ST/00463",
      "Partially Compliant",
      "Yes",
      "Yes",
      "Yes",
      "Yes",
      "Show-cause resolved"
    ],
    [
      "",
      "Apple India Pvt. Ltd.",
      "EPR/2024/ST/00464",
      "Compliant",
      "No",
      "No",
      "No",
      "N/A",
      "No issues reported"
    ],
    [
      "",
      "Xiaomi Technology India Pvt. Ltd.",
      "EPR/2024/ST/00465",
      "Partially Compliant",
      "Yes",
      "No",
      "No",
      "N/A",
      "Awaiting inspection"
    ],
    [
      "",
      "OnePlus India",
      "EPR/2024/ST/00466",
      "Compliant",
      "Yes",
      "Yes",
      "No",
      "N/A",
      "Collection target met"
    ],
    [
      "",
      "Vivo Mobile India Pvt. Ltd.",
      "EPR/2024/ST/00467",
      "Compliant",
      "Yes",
      "Yes",
      "No",
      "N/A",
      "Compliant"
    ],
    [
      "",
      "OPPO Mobiles India Pvt. Ltd.",
      "EPR/2024/ST/00468",
      "Non-Compliant",
      "Yes",
      "Yes",
      "Yes",
      "No",
      "Action initiated"
    ],
    [
      "",
      "Realme India",
      "EPR/2024/ST/00469",
      "Partially Compliant",
      "Yes",
      "No",
      "No",
      "N/A",
      "Data under review"
    ],
    [
      "",
      "Panasonic India Pvt. Ltd.",
      "EPR/2024/ST/00470",
      "Compliant",
      "No",
      "No",
      "No",
      "N/A",
      "Routine monitoring"
    ],
    [
      "",
      "Sony India Pvt. Ltd.",
      "EPR/2024/ST/00471",
      "Compliant",
      "Yes",
      "Yes",
      "No",
      "N/A",
      "Inspection satisfactory"
    ],
    [
      "",
      "Haier Appliances India Pvt. Ltd.",
      "EPR/2024/ST/00472",
      "Partially Compliant",
      "Yes",
      "Yes",
      "Yes",
      "Yes",
      "Penalty resolved"
    ],
    [
      "",
      "Godrej Appliances",
      "EPR/2024/ST/00473",
      "Compliant",
      "Yes",
      "Yes",
      "No",
      "N/A",
      "Compliant"
    ],
    [
      "",
      "Voltas Ltd.",
      "EPR/2024/ST/00474",
      "Compliant",
      "No",
      "No",
      "No",
      "N/A",
      "No inspection scheduled"
    ],
    [
      "",
      "Havells India Ltd.",
      "EPR/2024/ST/00475",
      "Partially Compliant",
      "Yes",
      "No",
      "No",
      "N/A",
      "Awaiting compliance documents"
    ],
    [
      "",
      "Philips India Ltd.",
      "EPR/2024/ST/00476",
      "Compliant",
      "Yes",
      "Yes",
      "No",
      "N/A",
      "All requirements fulfilled"
    ],
    [
      "",
      "Compliant",
      "13",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "Total Registered",
      "21",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "Inspections Planned",
      "17",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "Inspections Conducted",
      "13",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "Penalties Issued",
      "4",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "Penalties Resolved",
      "2",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  "5_Informal_Sector_Hotspots": [
    [
      "Informal Sector Hotspots",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "One row per known informal e-waste recycling hotspot/cluster in the state.",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "Hotspot / Informal Cluster Name",
      "District",
      "Status",
      "Estimated Informal Workers",
      "Workers Registered / Trained",
      "Formalization Action Taken",
      "Remarks"
    ],
    [
      "",
      "Old Market Scrap Yard",
      "District B",
      "Partially Formalized",
      "85",
      "30",
      "Registered as authorized collection point; 30 workers trained under skill program",
      "Remediation ongoing"
    ],
    [
      "",
      "MG Marg Scrap Cluster",
      "Gangtok",
      "Identified",
      "45",
      "18",
      "Awareness & registration",
      "Under monitoring"
    ],
    [
      "",
      "Namchi Scrap Market",
      "Namchi",
      "Partially Formalized",
      "32",
      "15",
      "Training completed",
      "Periodic inspections"
    ],
    [
      "",
      "Pakyong Repair Cluster",
      "Pakyong",
      "Identified",
      "20",
      "8",
      "Collection linkage",
      "Needs formal registration"
    ],
    [
      "",
      "Total Hotspots",
      "4",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "Formalized/Remediated",
      "0",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "Estimated Workers (Total)",
      "182",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "Workers Registered/Trained (Total)",
      "71",
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  "6_Env_Health_Monitoring": [
    [
      "Env Health Monitoring",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "One row per environmental monitoring visit or health camp conducted at a hotspot.",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "Site / Hotspot Monitored",
      "District",
      "Monitoring Type",
      "Date",
      "Result",
      "Health Camp Conducted (Y/N)",
      "Beneficiaries Screened",
      "Remarks"
    ],
    [
      "",
      "Old Market Scrap Yard",
      "District B",
      "Soil + Water",
      "10-05-2026",
      "Exceeds Limit (Pb, Cd)",
      "Yes",
      "210",
      "Follow-up remediation plan submitted to SPCB"
    ],
    [
      "",
      "MG Marg Scrap Cluster",
      "Gangtok",
      "Air Quality",
      "15-06-2026",
      "Within Limit",
      "Yes",
      "120",
      "Routine monitoring"
    ],
    [
      "",
      "Namchi Scrap Market",
      "Namchi",
      "Soil",
      "20-06-2026",
      "Within Limit",
      "No",
      "0",
      "No issues observed"
    ],
    [
      "",
      "Pakyong Repair Cluster",
      "Pakyong",
      "Water",
      "05-07-2026",
      "Minor contamination",
      "Yes",
      "75",
      "Awareness provided"
    ],
    [
      "",
      "Distinct Sites Monitored",
      "4",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "Health Camps Conducted",
      "0",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "Total Beneficiaries Screened",
      "0",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  "7_Awareness_Programs": [
    [
      "Awareness Programs",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "One row per awareness campaign, take-back scheme promotion, or collection drive conducted.",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "Program Name",
      "District",
      "Date",
      "Type",
      "Target Audience",
      "Participants Reached"
    ],
    [
      "",
      "E-Waste Awareness Drive - Schools",
      "District A",
      "18-04-2026",
      "School Collection Drive",
      "Students, Grades 6-10",
      "1200"
    ],
    [
      "",
      "Door-to-Door Collection Drive",
      "Gangtok",
      "12-06-2026",
      "Collection Drive",
      "Households",
      "850"
    ],
    [
      "",
      "College E-Waste Campaign",
      "Namchi",
      "28-06-2026",
      "Seminar",
      "College Students",
      "430"
    ],
    [
      "",
      "Village Awareness Camp",
      "Soreng",
      "10-07-2026",
      "Community Outreach",
      "Residents",
      "300"
    ],
    [
      "",
      "Total Programs Conducted",
      "4",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "Collection Drives (School+RWA)",
      "0",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "Total Participants Reached",
      "0",
      "",
      "",
      "",
      ""
    ]
  ]
};
