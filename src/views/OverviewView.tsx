import React from 'react';
import {
  FileText,
  Layers,
  BarChart3,
  BookOpen,
  Presentation,
  Database,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Download,
  ExternalLink,
  GraduationCap,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Flame,
  Scale
} from 'lucide-react';
import { ASSIGNMENT_CATALOGUE, STUDENT_PROFILE, DocumentItem } from '../data/assignmentsData';
import { SIKKIM_TOTALS } from '../data/sikkimData';
import { CARBON_FOOTPRINT_DATA } from '../data/carbonData';
import { TabType } from '../components/Sidebar';

interface OverviewViewProps {
  onSelectDocument: (doc: DocumentItem) => void;
  onNavigateTab: (tab: TabType) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({
  onSelectDocument,
  onNavigateTab
}) => {
  // Real stats calculated strictly from authentic uploaded files
  const totalDocuments = ASSIGNMENT_CATALOGUE.length; // 14
  const researchReports = ASSIGNMENT_CATALOGUE.filter((d) => d.category === 'Research Papers' || d.category === 'Other Academic Research').length; // 3
  const presentationsPosters = ASSIGNMENT_CATALOGUE.filter((d) => d.category === 'Presentations & Posters').length; // 4
  const datasetsCount = ASSIGNMENT_CATALOGUE.filter((d) => d.category === 'Excel Datasets').length; // 3
  const assignmentsCount = ASSIGNMENT_CATALOGUE.filter((d) => d.category === 'Assignments' || d.category === 'Regulatory Studies').length; // 4
  const uniqueProjectsCount = 5; // 1) Sikkim Sub-National Assessment, 2) E-Bin Smart ATM, 3) Automated Laser + Molten Salt PCB Recycling, 4) AHP-ISM Multi-Criteria Study, 5) Indian Electronics Manufacturers Regulatory Benchmark

  // Featured items
  const featuredDocs = ASSIGNMENT_CATALOGUE.filter((d) => d.featured);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Student Profile Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#143D2B] via-[#0D281C] to-[#061811] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-emerald-900/40">
        {/* Subtle decorative background shapes */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-60 h-60 rounded-full bg-teal-500/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-500/30 text-emerald-200 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official Academic Submission Portfolio</span>
              <span className="text-emerald-400/60">•</span>
              <span className="font-mono">{STUDENT_PROFILE.academicYear}</span>
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                {STUDENT_PROFILE.name}
              </h1>
              <p className="text-sm sm:text-base text-emerald-200/90 font-medium mt-1">
                Roll Number: <span className="font-mono text-white font-bold">{STUDENT_PROFILE.rollNumber}</span> • Branch: <span className="text-white font-semibold">{STUDENT_PROFILE.branch}</span>
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
              {STUDENT_PROFILE.statement}
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium text-emerald-300">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                {STUDENT_PROFILE.institute}
              </span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-slate-300 font-medium">
                {STUDENT_PROFILE.affiliation}
              </span>
            </div>
          </div>

          {/* Quick Academic Identity Box */}
          <div className="w-full lg:w-auto shrink-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 space-y-3 text-xs">
            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 flex items-center justify-between">
              <span>Domain Verification</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="space-y-1.5 font-mono text-[11px]">
              <div className="flex justify-between gap-4 text-slate-300">
                <span>Class Group:</span>
                <span className="text-white font-semibold">{STUDENT_PROFILE.classGroup}</span>
              </div>
              <div className="flex justify-between gap-4 text-slate-300">
                <span>Major Domain:</span>
                <span className="text-emerald-300 font-semibold">E-Waste & Sustainability</span>
              </div>
              <div className="flex justify-between gap-4 text-slate-300">
                <span>Verified Files:</span>
                <span className="text-white font-bold">14 Authentic Deliverables</span>
              </div>
              <div className="flex justify-between gap-4 text-slate-300">
                <span>Core Projects:</span>
                <span className="text-white font-bold">5 Documented Works</span>
              </div>
            </div>

            <button
              onClick={() => onNavigateTab('about')}
              className="w-full mt-2 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>View Full Academic Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Primary KPI Statistics Grid (Calculated from Actual Uploaded Files) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
        <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-4 shadow-xs hover:border-emerald-500/50 transition-colors">
          <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-2.5">
            <FileText className="w-4 h-4" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
            {totalDocuments}
          </div>
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
            Total Files
          </div>
          <div className="text-[10px] text-slate-400 mt-1">100% verified docs</div>
        </div>

        <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-4 shadow-xs hover:border-emerald-500/50 transition-colors">
          <div className="w-8 h-8 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center mb-2.5">
            <Layers className="w-4 h-4" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
            {uniqueProjectsCount}
          </div>
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
            E-Waste Projects
          </div>
          <div className="text-[10px] text-slate-400 mt-1">Distinct initiatives</div>
        </div>

        <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-4 shadow-xs hover:border-emerald-500/50 transition-colors">
          <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-2.5">
            <BookOpen className="w-4 h-4" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
            {researchReports}
          </div>
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
            Research Reports
          </div>
          <div className="text-[10px] text-slate-400 mt-1">IEEE & SPCB studies</div>
        </div>

        <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-4 shadow-xs hover:border-emerald-500/50 transition-colors">
          <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-400 flex items-center justify-center mb-2.5">
            <Presentation className="w-4 h-4" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
            {presentationsPosters}
          </div>
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
            Decks & Posters
          </div>
          <div className="text-[10px] text-slate-400 mt-1">Technical visual assets</div>
        </div>

        <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-4 shadow-xs hover:border-emerald-500/50 transition-colors">
          <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-2.5">
            <Database className="w-4 h-4" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
            {datasetsCount}
          </div>
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
            Datasets & Audits
          </div>
          <div className="text-[10px] text-slate-400 mt-1">SPCB & Carbon Excel</div>
        </div>

        <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-4 shadow-xs hover:border-emerald-500/50 transition-colors">
          <div className="w-8 h-8 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-400 flex items-center justify-center mb-2.5">
            <Award className="w-4 h-4" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
            {assignmentsCount}
          </div>
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
            Assignments & Notes
          </div>
          <div className="text-[10px] text-slate-400 mt-1">MCDM, toxins & ESG</div>
        </div>
      </div>

      {/* Featured Projects Highlight Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Featured Academic Research & Major Projects
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              In-depth research studies, engineering processes, and analytical frameworks
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('projects')}
            className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 flex items-center gap-1"
          >
            Explore All 5 Projects <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Project 1: Sikkim Sub-National Assessment */}
          <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono">
                  IEEE Paper & Dashboard
                </span>
                <span className="text-[11px] font-mono text-slate-400">FY 2026 Data</span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                Sikkim Sub-National E-Waste Assessment
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                District-level assessment of e-waste generation, collection gaps, and formal recycler capacity across 6 districts of Sikkim based on SPCB empirical data.
              </p>

              {/* Empirical callout metrics */}
              <div className="grid grid-cols-2 gap-2 p-2.5 bg-slate-50 dark:bg-emerald-950/30 rounded-xl text-xs font-mono">
                <div>
                  <div className="text-[10px] text-slate-400">Generated</div>
                  <div className="font-bold text-slate-900 dark:text-white">310.5 tonnes</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Capture Rate</div>
                  <div className="font-bold text-emerald-700 dark:text-emerald-400">5.9% (18.2 t)</div>
                </div>
              </div>

              <div className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                Collaborative Work: Tanmay Lalge & Yukta Padekar
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-emerald-950/60 flex items-center justify-between">
              <button
                onClick={() => {
                  const doc = ASSIGNMENT_CATALOGUE.find((d) => d.id === 'sikkim-ieee-report');
                  if (doc) onSelectDocument(doc);
                }}
                className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                Read IEEE Paper <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigateTab('analytics')}
                className="text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              >
                Open Analytics
              </button>
            </div>
          </div>

          {/* Project 2: E-Bin Smart E-Waste ATM */}
          <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-mono">
                  Smart Hardware / AI
                </span>
                <span className="text-[11px] font-mono text-slate-400">6-Slide Deck</span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                E-Bin: The Smart E-Waste ATM
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                An AI-powered automated reverse-vending collection kiosk engineered to solve micro e-waste disposal friction through edge computer vision and instant mobile reward incentives.
              </p>

              {/* Empirical callout metrics */}
              <div className="grid grid-cols-2 gap-2 p-2.5 bg-slate-50 dark:bg-emerald-950/30 rounded-xl text-xs font-mono">
                <div>
                  <div className="text-[10px] text-slate-400">Sorting Tech</div>
                  <div className="font-bold text-slate-900 dark:text-white">Edge CNN + LiDAR</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Incentive</div>
                  <div className="font-bold text-blue-700 dark:text-blue-400">Instant Mobile QR</div>
                </div>
              </div>

              <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
                Individual Project: Yukta Padekar
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-emerald-950/60 flex items-center justify-between">
              <button
                onClick={() => {
                  const doc = ASSIGNMENT_CATALOGUE.find((d) => d.id === 'ebin-smart-recycling');
                  if (doc) onSelectDocument(doc);
                }}
                className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                Preview Presentation <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigateTab('presentations')}
                className="text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              >
                View Slides
              </button>
            </div>
          </div>

          {/* Project 3: Automated Laser + Molten Salt PCB Recycling */}
          <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 font-mono">
                  Clean Metallurgy
                </span>
                <span className="text-[11px] font-mono text-slate-400">12-Step Poster</span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                Automated Laser + Molten Salt PCB Recycling
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                Advanced clean pyrometallurgical & hydrometallurgical recycling process for waste circuit boards. Uses laser desoldering and high-temp molten salt baths for zero-emission Au/Ag/Cu recovery.
              </p>

              {/* Empirical callout metrics */}
              <div className="grid grid-cols-2 gap-2 p-2.5 bg-slate-50 dark:bg-emerald-950/30 rounded-xl text-xs font-mono">
                <div>
                  <div className="text-[10px] text-slate-400">Reactor Temp</div>
                  <div className="font-bold text-slate-900 dark:text-white">400–800 °C</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Metals</div>
                  <div className="font-bold text-purple-700 dark:text-purple-400">Au, Ag, Cu, Pd, Pt</div>
                </div>
              </div>

              <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
                Academic Assignment 02: Yukta Padekar
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-emerald-950/60 flex items-center justify-between">
              <button
                onClick={() => {
                  const doc = ASSIGNMENT_CATALOGUE.find((d) => d.id === 'pcb-molten-salt-poster');
                  if (doc) onSelectDocument(doc);
                }}
                className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                Inspect Poster <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigateTab('presentations')}
                className="text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              >
                Poster Gallery
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Section: Key Empirical Insights & Quick Document Access */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Empirical Research Takeaways & Data Synthesis */}
        <div className="lg:col-span-2 bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-emerald-950/60 pb-3">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Core Academic Research Findings (Sikkim SPCB & National Scope)
              </h3>
              <p className="text-xs text-slate-500">
                Data-driven findings synthesized from the master tracker and IEEE report
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('analytics')}
              className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
            >
              View Analytics
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100/80 dark:border-emerald-900/40">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-semibold text-xs mb-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                The Sub-National Capture Gap
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Statewide e-waste generation stands at <strong>310.5 tonnes</strong>, but formal collection channels capture only <strong>18.2 tonnes (5.9%)</strong>, leaving over 94% vulnerable to informal dumping or crude scrap processing.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100/80 dark:border-blue-900/40">
              <div className="flex items-center gap-2 text-blue-800 dark:text-blue-300 font-semibold text-xs mb-1.5">
                <Scale className="w-4 h-4 text-blue-600" />
                Recycler Capacity vs Utilization
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Installed formal recycling capacity (<strong>1,100 tonnes/year</strong> across 3 facilities) already exceeds state generation, operating at just <strong>63% utilization</strong> due to upstream reverse-logistics failure.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100/80 dark:border-amber-900/40">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-semibold text-xs mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                EPR Producer Compliance Status
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>83.9%</strong> of EPR targets were met statewide. Of 20 registered brand producers, 12 are fully compliant, 6 partially compliant, and 2 non-compliant (Lenovo & OPPO with penalties initiated).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100/80 dark:border-purple-900/40">
              <div className="flex items-center gap-2 text-purple-800 dark:text-purple-300 font-semibold text-xs mb-1.5">
                <Flame className="w-4 h-4 text-purple-600" />
                Institutional Carbon Footprint Audit
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Comprehensive carbon audit in <code>24102C0038.xlsx</code> indicates <strong>471.65 tCO2e</strong> gross emissions across Scopes 1–3, mitigated by <strong>-242.52 tCO2e</strong> in active sequestration (net: 229.14 tCO2e).
              </p>
            </div>
          </div>
        </div>

        {/* Right Col: Quick Document Access Library */}
        <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-emerald-950/60 pb-3 mb-3">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Quick Document Access
              </h3>
              <button
                onClick={() => onNavigateTab('assignments')}
                className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                View All
              </button>
            </div>

            <div className="space-y-2">
              {ASSIGNMENT_CATALOGUE.slice(0, 5).map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => onSelectDocument(doc)}
                  className="p-2.5 rounded-xl border border-slate-100 dark:border-emerald-950/40 hover:bg-slate-50 dark:hover:bg-emerald-950/30 cursor-pointer transition-colors flex items-center justify-between gap-3 group"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                        {doc.fileType}
                      </span>
                      <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                        {doc.shortTitle}
                      </h4>
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono truncate mt-0.5">
                      {doc.originalFilename}
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-emerald-950/60">
            <a
              href="/datasets/State_EWaste_Tracker_Completed_Fixed.xlsx"
              download="State_EWaste_Tracker_Completed_Fixed.xlsx"
              className="w-full py-2 px-3 rounded-xl bg-slate-100 dark:bg-emerald-950/50 hover:bg-slate-200 dark:hover:bg-emerald-900/40 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Master Dataset (.xlsx)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
