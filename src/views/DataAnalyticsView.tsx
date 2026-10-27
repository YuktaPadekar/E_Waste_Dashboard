import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  BarChart3,
  Scale,
  Building2,
  Users,
  AlertTriangle,
  CheckCircle2,
  Flame,
  Download,
  Info,
  Layers,
  Leaf,
  Activity
} from 'lucide-react';
import {
  SIKKIM_DISTRICTS,
  SIKKIM_TOTALS,
  SIKKIM_CATEGORIES,
  AUTHORIZED_RECYCLERS,
  INFORMAL_HOTSPOTS,
  PRODUCER_COMPLIANCE_LIST,
  DistrictData
} from '../data/sikkimData';
import { CARBON_FOOTPRINT_DATA } from '../data/carbonData';
import { DistrictModal } from '../components/DistrictModal';

export const DataAnalyticsView: React.FC = () => {
  const [activeAnalyticsTab, setActiveAnalyticsTab] = useState<'sikkim' | 'carbon'>('sikkim');
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictData | null>(null);

  // Recharts data transformation for Generation vs Collection
  const genVsColData = SIKKIM_DISTRICTS.map((d) => ({
    name: d.district,
    Generated: d.total / 1000, // tonnes
    Collected: d.collected / 1000, // tonnes
    captureRate: d.captureRate
  }));

  // EPR Target vs Achieved
  const eprData = SIKKIM_DISTRICTS.map((d) => ({
    name: d.district,
    Target: d.eprTarget,
    Achieved: d.eprAchieved,
    rate: d.eprRate
  }));

  // Recycler capacity vs processed
  const recyclerData = AUTHORIZED_RECYCLERS.map((r) => ({
    name: r.name.replace('Sikkim ', '').replace('Himalayan ', ''),
    Capacity: r.installedCapacity,
    Processed: r.processed,
    utilization: r.utilization,
    recovery: r.recoveryRate
  }));

  // Producer compliance count
  const complianceData = [
    { name: 'Compliant (12)', value: 12, color: '#059669', desc: 'All requirements met; routine monitoring only' },
    { name: 'Partially Compliant (6)', value: 6, color: '#D97706', desc: 'Dell, ASUS, Xiaomi, Realme, Haier, Havells' },
    { name: 'Non-Compliant (2)', value: 2, color: '#DC2626', desc: 'Lenovo & OPPO — penalty action initiated' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Analytics Sub-Tab Switcher */}
      <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-2 shadow-xs flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveAnalyticsTab('sikkim')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeAnalyticsTab === 'sikkim'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-emerald-950/40'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Sikkim State E-Waste Analytics (SPCB FY 2026)</span>
          </button>

          <button
            onClick={() => setActiveAnalyticsTab('carbon')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeAnalyticsTab === 'carbon'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-emerald-950/40'
            }`}
          >
            <Leaf className="w-4 h-4" />
            <span>Institutional Carbon Footprint Audit (24102C0038.xlsx)</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-slate-400 pr-2">
          <span>Reporting Standard: E-Waste Rules 2022</span>
        </div>
      </div>

      {/* SUB-TAB 1: SIKKIM SPCB MASTER ANALYTICS */}
      {activeAnalyticsTab === 'sikkim' && (
        <div className="space-y-6">
          {/* Header KPI Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-4 shadow-xs">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Total Generated</div>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono mt-0.5">
                {SIKKIM_TOTALS.totalGeneratedTonnes} t
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                310,500 kg across 6 districts
              </div>
            </div>

            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-4 shadow-xs">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Total Formally Collected</div>
              <div className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-400 font-mono mt-0.5">
                {SIKKIM_TOTALS.totalCollectedTonnes} t
              </div>
              <div className="text-[10px] text-rose-600 dark:text-rose-400 font-semibold mt-0.5">
                5.9% capture rate statewide
              </div>
            </div>

            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-4 shadow-xs">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">EPR Achievement</div>
              <div className="text-2xl font-extrabold text-blue-700 dark:text-blue-400 font-mono mt-0.5">
                {SIKKIM_TOTALS.eprAchievementPercent.toFixed(1)}%
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                12,500 / 14,900 kg target
              </div>
            </div>

            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-4 shadow-xs">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Recycler Capacity</div>
              <div className="text-2xl font-extrabold text-purple-700 dark:text-purple-400 font-mono mt-0.5">
                {SIKKIM_TOTALS.installedRecyclingCapacityTonnes} t/yr
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                690 t processed (63% util.)
              </div>
            </div>

            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-4 shadow-xs col-span-2 sm:col-span-1">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Brand Compliance</div>
              <div className="text-2xl font-extrabold text-amber-700 dark:text-amber-400 font-mono mt-0.5">
                12 / 20
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                60% compliant • 2 penalized
              </div>
            </div>
          </div>

          {/* Key Gap Alert Box */}
          <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-2xl text-xs text-amber-900 dark:text-amber-200 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Key Empirical Diagnosis: </span>
              Of the 310.5 tonnes of e-waste generated across Sikkim in FY 2026, only 18.2 tonnes (5.9%) is captured through formal authorized channels. Large & Small Equipment (101.3 t, 32.6%) is the single largest category and is largely uncaptured by current drop-off infrastructure. Recyclers have abundant installed capacity (1,100 t/yr), proving that upstream reverse logistics—not recycling technology—is the primary constraint.
            </div>
          </div>

          {/* Charts Row 1: District Generation vs Collection & Generation Mix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chart 1: District Generation vs Collection */}
            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    District-Wise Generation vs. Collection (Tonnes)
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Collection lags generation by an order of magnitude in every district
                  </p>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                  Log Scale Divergence
                </span>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={genVsColData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip
                      formatter={(val: any) => [`${Number(val).toFixed(1)} Tonnes`, '']}
                      contentStyle={{ borderRadius: '0.75rem', fontSize: '11px' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                    <Bar dataKey="Generated" fill="#143D2B" radius={[4, 4, 0, 0]} name="Generated (t)" />
                    <Bar dataKey="Collected" fill="#059669" radius={[4, 4, 0, 0]} name="Formally Collected (t)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="text-[11px] text-slate-500 italic text-center">
                Click on any district below to drill down into its demographic and equipment breakup.
              </div>
            </div>

            {/* Chart 2: Category Mix Donut */}
            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    E-Waste Generation Mix by Category (Schedule I)
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Category proportions against 310,500 kg total state generation
                  </p>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Total: 310.5 t</span>
              </div>

              <div className="h-64 w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={SIKKIM_CATEGORIES}
                      dataKey="kg"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={85}
                      innerRadius={50}
                      paddingAngle={2}
                    >
                      {SIKKIM_CATEGORIES.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(val: any, name: any) => [
                        `${(Number(val) / 1000).toFixed(1)} t (${((Number(val) / 310500) * 100).toFixed(1)}%)`,
                        name
                      ]}
                      contentStyle={{ borderRadius: '0.75rem', fontSize: '11px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Legend Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                {SIKKIM_CATEGORIES.map((c) => (
                  <div key={c.name} className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: c.color }} />
                    <span className="text-slate-600 dark:text-slate-400 truncate">{c.name}:</span>
                    <span className="font-bold text-slate-900 dark:text-white font-mono">{c.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Charts Row 2: EPR Targets & Recycler Infrastructure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chart 3: EPR Target vs Achieved */}
            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    EPR Collection Target vs. Achieved by District (kg)
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Achievement trails target in all districts; Namchi & Gangtok lead absolute collection
                  </p>
                </div>
                <span className="text-[10px] font-mono text-blue-700 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded">
                  State: 83.9%
                </span>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={eprData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip
                      formatter={(val: any) => [`${Number(val).toLocaleString()} kg`, '']}
                      contentStyle={{ borderRadius: '0.75rem', fontSize: '11px' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                    <Bar dataKey="Target" fill="#94A3B8" radius={[4, 4, 0, 0]} name="EPR Target (kg)" />
                    <Bar dataKey="Achieved" fill="#2563EB" radius={[4, 4, 0, 0]} name="EPR Achieved (kg)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 4: Recycler Capacity vs Quantity Processed */}
            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Authorized Recycler Capacity vs. Quantity Processed (Tonnes)
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Utilisation: Sikkim Eco 64% • Eastern Recyclers 60% • Himalayan E-Waste 64%
                  </p>
                </div>
                <span className="text-[10px] font-mono text-purple-700 dark:text-purple-400 font-semibold bg-purple-50 dark:bg-purple-950 px-2 py-0.5 rounded">
                  Avg Recovery: 79%
                </span>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={recyclerData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip
                      formatter={(val: any) => [`${Number(val).toLocaleString()} Tonnes`, '']}
                      contentStyle={{ borderRadius: '0.75rem', fontSize: '11px' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                    <Bar dataKey="Capacity" fill="#475569" radius={[4, 4, 0, 0]} name="Installed Capacity (t/yr)" />
                    <Bar dataKey="Processed" fill="#9333EA" radius={[4, 4, 0, 0]} name="Processed This Year (t)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Interactive District Cards Selector */}
          <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Select a District for Deep-Dive Modal Inspection
              </h3>
              <span className="text-[11px] text-slate-500">Click any card to inspect full district profile</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {SIKKIM_DISTRICTS.map((d) => (
                <button
                  key={d.district}
                  onClick={() => setSelectedDistrict(d)}
                  className="p-3 rounded-xl border border-slate-200 dark:border-emerald-950/60 hover:border-emerald-600 bg-slate-50 dark:bg-[#07110C] text-left transition-all hover:scale-102"
                >
                  <div className="font-bold text-slate-900 dark:text-white text-xs">{d.district}</div>
                  <div className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 mt-1">
                    {(d.total / 1000).toFixed(1)} t generated
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {d.captureRate}% collected
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Producer Compliance & Informal Sector Table Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Producer Compliance Status Card */}
            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Producer Compliance Status (20 Registered Entities)
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    60% fully compliant under CPCB digital EPR portal
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                {complianceData.map((item) => (
                  <div key={item.name} className="p-3 rounded-xl bg-slate-50 dark:bg-[#07110C] border border-slate-100 dark:border-emerald-950/60 space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="flex items-center gap-1.5" style={{ color: item.color }}>
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                        {item.name}
                      </span>
                      <span className="font-mono text-slate-900 dark:text-white">
                        {((item.value / 20) * 100).toFixed(0)}%
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Informal Sector & Environmental Monitoring */}
            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs space-y-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Informal Sector Hotspots & Environmental Monitoring
                </h3>
                <p className="text-[11px] text-slate-500">
                  97 informal workers identified; 41 (42.3%) registered & trained
                </p>
              </div>

              <div className="space-y-2.5">
                {INFORMAL_HOTSPOTS.map((h) => (
                  <div key={h.name} className="p-3 rounded-xl bg-slate-50 dark:bg-[#07110C] border border-slate-100 dark:border-emerald-950/60 space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 dark:text-white">{h.name} ({h.district})</span>
                      <span className="font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                        {h.registeredTrained} / {h.estimatedWorkers} trained ({h.trainedPercentage.toFixed(0)}%)
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Monitoring: <strong>{h.envMonitoring.type}</strong> — Result: <em>{h.envMonitoring.result}</em>
                      {h.envMonitoring.healthCampConducted && (
                        <span> • Health Camp: {h.envMonitoring.screened} screened</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: INSTITUTIONAL CARBON FOOTPRINT ANALYTICS (24102C0038.xlsx) */}
      {activeAnalyticsTab === 'carbon' && (
        <div className="space-y-6">
          {/* Header KPI Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs">
              <div className="text-xs text-slate-400 uppercase font-semibold">Gross Emissions (Scopes 1, 2, 3)</div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono mt-1">
                {CARBON_FOOTPRINT_DATA.grossEmissions} <span className="text-sm font-normal text-slate-500">tCO2e</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">Total calculated greenhouse footprint</div>
            </div>

            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs">
              <div className="text-xs text-slate-400 uppercase font-semibold">Carbon Offset & Sequestration</div>
              <div className="text-3xl font-extrabold text-emerald-700 dark:text-emerald-400 font-mono mt-1">
                {CARBON_FOOTPRINT_DATA.carbonOffset} <span className="text-sm font-normal text-slate-500">tCO2e</span>
              </div>
              <div className="text-xs text-emerald-700 dark:text-emerald-400 mt-1">Documented carbon sequestration offset</div>
            </div>

            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs">
              <div className="text-xs text-slate-400 uppercase font-semibold">Net Carbon Footprint</div>
              <div className="text-3xl font-extrabold text-blue-700 dark:text-blue-400 font-mono mt-1">
                {CARBON_FOOTPRINT_DATA.netFootprint} <span className="text-sm font-normal text-slate-500">tCO2e</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">Net emissions balance after offsets</div>
            </div>
          </div>

          {/* Breakdown Table & Visual Bar */}
          <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-emerald-950/60 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Institutional Carbon Footprint Scope Breakdown ({CARBON_FOOTPRINT_DATA.workbookFilename})
                </h3>
                <p className="text-xs text-slate-500">
                  Student Audit by {CARBON_FOOTPRINT_DATA.studentName} ({CARBON_FOOTPRINT_DATA.rollNumber})
                </p>
              </div>

              <a
                href="/datasets/24102C0038_Carbon_Footprint_Tracker.xlsx"
                download="24102C0038.xlsx"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-emerald-950 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-200 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download 24102C0038.xlsx
              </a>
            </div>

            {/* Category Cards */}
            <div className="space-y-3">
              {CARBON_FOOTPRINT_DATA.categories.map((c) => (
                <div
                  key={c.category}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#07110C] border border-slate-100 dark:border-emerald-950/60 space-y-1.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-slate-200 dark:bg-emerald-900 text-slate-800 dark:text-slate-200">
                        {c.scope}
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white">{c.category}</span>
                    </div>
                    <div className="font-mono text-slate-700 dark:text-slate-300 font-bold">
                      {c.tCO2e} tCO2e ({c.percentage}%)
                    </div>
                  </div>

                  <div className="w-full h-2 rounded-full bg-slate-200/80 dark:bg-emerald-950/60 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${c.percentage}%`, backgroundColor: c.color }}
                    />
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{c.description}</p>
                </div>
              ))}
            </div>

            {/* Benchmark Comparisons */}
            <div className="pt-4 border-t border-slate-100 dark:border-emerald-950/60 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-emerald-950/20 rounded-xl">
                <div className="text-slate-400 text-[10px] uppercase font-semibold">Country Benchmark (India)</div>
                <div className="text-lg font-bold text-slate-900 dark:text-white mt-0.5 font-mono">1.90 tCO2e / cap</div>
                <div className="text-[10px] text-slate-500">Per-capita national average</div>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-emerald-950/20 rounded-xl">
                <div className="text-slate-400 text-[10px] uppercase font-semibold">World Benchmark</div>
                <div className="text-lg font-bold text-slate-900 dark:text-white mt-0.5 font-mono">4.86 tCO2e / cap</div>
                <div className="text-[10px] text-slate-500">Global Carbon Project</div>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-emerald-950/20 rounded-xl">
                <div className="text-slate-400 text-[10px] uppercase font-semibold">Climate Target</div>
                <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400 mt-0.5 font-mono">0.00 Net Zero</div>
                <div className="text-[10px] text-slate-500">Paris Agreement goal</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* District Drill-down Modal */}
      <DistrictModal district={selectedDistrict} onClose={() => setSelectedDistrict(null)} />
    </div>
  );
};
