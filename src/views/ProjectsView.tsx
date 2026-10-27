import React, { useState } from 'react';
import {
  Layers,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Eye,
  Download,
  Users,
  Database,
  Cpu,
  Flame,
  FileText,
  Building,
  Target,
  Sparkles,
  Zap,
  Activity,
  ShieldCheck,
  Scale
} from 'lucide-react';
import { ASSIGNMENT_CATALOGUE, DocumentItem } from '../data/assignmentsData';
import { SIKKIM_DISTRICTS, SIKKIM_TOTALS } from '../data/sikkimData';
import { EBIN_PROJECT } from '../data/ebinData';
import { AHP_ISM_STUDY, AHP_CRITERIA_WEIGHTS } from '../data/ahpIsmData';
import { ELECTRONICS_MANUFACTURERS } from '../data/manufacturersData';

interface ProjectsViewProps {
  onSelectDocument: (doc: DocumentItem) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onSelectDocument }) => {
  const [activeProjectId, setActiveProjectId] = useState<string>('sikkim');

  const projects = [
    {
      id: 'sikkim',
      title: 'Sikkim Sub-National E-Waste Assessment',
      badge: 'IEEE Paper & SPCB Dashboard',
      subtitle: 'District-Level Generation, Collection Gaps & Recycler Infrastructure'
    },
    {
      id: 'ebin',
      title: 'E-Bin: The Smart E-Waste ATM',
      badge: 'AI Vision & Reverse Vending',
      subtitle: 'Automated Micro-E-Waste Collection & Circular Micro-Economy'
    },
    {
      id: 'pcb',
      title: 'Automated Laser + Molten Salt PCB Recycling',
      badge: 'Advanced Metallurgy',
      subtitle: '12-Step Clean Desoldering & High-Purity Metal Recovery'
    },
    {
      id: 'ahp-ism',
      title: 'AHP & ISM Decision Framework',
      badge: 'Operations Research',
      subtitle: 'Multi-Criteria Barrier Weighting & Causal Hierarchy Modeling'
    },
    {
      id: 'manufacturers',
      title: 'Indian Electronics Manufacturers Compliance',
      badge: 'Corporate Regulatory Audit',
      subtitle: 'Analysis of Dixon, Kaynes, Syrma, Foxconn & Tata Electronics'
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Projects Navigation Tabs */}
      <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-2 shadow-xs flex items-center gap-1.5 overflow-x-auto text-xs">
        {projects.map((proj) => (
          <button
            key={proj.id}
            onClick={() => setActiveProjectId(proj.id)}
            className={`px-4 py-2.5 rounded-xl font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeProjectId === proj.id
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-emerald-950/40 hover:text-slate-900'
            }`}
          >
            <span>{proj.title}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                activeProjectId === proj.id
                  ? 'bg-emerald-800 text-emerald-100'
                  : 'bg-slate-100 dark:bg-emerald-950 text-slate-500 dark:text-emerald-400'
              }`}
            >
              {proj.badge.split(' ')[0]}
            </span>
          </button>
        ))}
      </div>

      {/* PROJECT 1: Sikkim Sub-National Assessment */}
      {activeProjectId === 'sikkim' && (
        <div className="space-y-6">
          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-[#143D2B] via-[#0D281C] to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-900/50">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
              <span>Sub-National Assessment</span>
              <span>•</span>
              <span className="font-mono">Sikkim SPCB & IEEE Scope</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-snug">
              E-Waste It Wisely at the Sub-National Level: A District-Level Assessment of Generation, Collection, and Recycling Performance in Sikkim, India
            </h2>
            <div className="mt-4 pt-4 border-t border-emerald-800/60 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium text-emerald-300">
                <Users className="w-4 h-4 text-emerald-400" />
                Authors: <strong>Tanmay Lalge & Yukta Padekar</strong>
              </span>
              <span>•</span>
              <span>Institution: <strong>Vidyalankar Institute of Technology, Mumbai</strong></span>
              <span>•</span>
              <span className="font-mono">Reporting Year: FY 2026</span>
            </div>
          </div>

          {/* Core Sections Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Problem Statement & Objectives */}
            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm uppercase tracking-wider">
                <Target className="w-4 h-4" />
                Problem Statement & Research Objectives
              </div>
              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  While national and global e-waste statistics are frequently reported, sub-national jurisdictions—especially mountainous or non-industrial states like Sikkim—face acute blind spots in localized generation monitoring, collection logistics, and informal sector formalization.
                </p>
                <div className="p-3.5 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-xl border border-emerald-100 dark:border-emerald-900/40 space-y-2">
                  <div className="font-semibold text-slate-900 dark:text-white">Research Objectives:</div>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                    <li>Quantify district-wise generation across all 6 districts under E-Waste Rules 2022 Schedule I.</li>
                    <li>Measure the actual collection capture gap against formal recycler capacity.</li>
                    <li>Audit Extended Producer Responsibility (EPR) compliance among 20 registered brand producers.</li>
                    <li>Formulate a practical four-point policy roadmap to bridge upstream collection bottlenecks.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Methodology & Data Sources */}
            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm uppercase tracking-wider">
                <Database className="w-4 h-4" />
                Methodology & Authentic Data Sources
              </div>
              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  The study draws exclusively on official regulatory data from the <strong>Sikkim State Pollution Control Board (SPCB)</strong> master inventory workbook (FY 2026, data through 24–30 July 2026), synthesized across 8 comprehensive sheets.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 bg-slate-50 dark:bg-emerald-950/20 rounded-xl border border-slate-100 dark:border-emerald-900/40">
                    <div className="text-[10px] text-slate-400">Total Generation</div>
                    <div className="text-base font-bold text-slate-900 dark:text-white">310.5 tonnes</div>
                    <div className="text-[10px] text-slate-400">310,500 kg</div>
                  </div>
                  <div className="p-2.5 bg-slate-50 dark:bg-emerald-950/20 rounded-xl border border-slate-100 dark:border-emerald-900/40">
                    <div className="text-[10px] text-slate-400">Total Collected</div>
                    <div className="text-base font-bold text-emerald-700 dark:text-emerald-400">18.2 tonnes</div>
                    <div className="text-[10px] text-slate-400">5.9% capture rate</div>
                  </div>
                  <div className="p-2.5 bg-slate-50 dark:bg-emerald-950/20 rounded-xl border border-slate-100 dark:border-emerald-900/40">
                    <div className="text-[10px] text-slate-400">EPR Achieved</div>
                    <div className="text-base font-bold text-blue-700 dark:text-blue-400">83.9%</div>
                    <div className="text-[10px] text-slate-400">12.5t / 14.9t target</div>
                  </div>
                  <div className="p-2.5 bg-slate-50 dark:bg-emerald-950/20 rounded-xl border border-slate-100 dark:border-emerald-900/40">
                    <div className="text-[10px] text-slate-400">Recycler Capacity</div>
                    <div className="text-base font-bold text-purple-700 dark:text-purple-400">1,100 t/yr</div>
                    <div className="text-[10px] text-slate-400">63% utilization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* District Summary Table */}
          <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Empirical District-Level Findings (6 Districts)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-emerald-950/60 font-bold text-slate-700 dark:text-slate-300">
                    <th className="py-2.5 px-3">District</th>
                    <th className="py-2.5 px-3">Population</th>
                    <th className="py-2.5 px-3">Generated (kg)</th>
                    <th className="py-2.5 px-3">Collected (kg)</th>
                    <th className="py-2.5 px-3">Capture Rate</th>
                    <th className="py-2.5 px-3">Per Capita (g)</th>
                    <th className="py-2.5 px-3">EPR Met</th>
                    <th className="py-2.5 px-3">Recycler Present</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-emerald-950/40">
                  {SIKKIM_DISTRICTS.map((d) => (
                    <tr key={d.district} className="hover:bg-slate-50/60 dark:hover:bg-emerald-950/20 font-medium">
                      <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">{d.district}</td>
                      <td className="py-2.5 px-3">{d.population.toLocaleString()}</td>
                      <td className="py-2.5 px-3 font-mono">{d.total.toLocaleString()}</td>
                      <td className="py-2.5 px-3 font-mono text-emerald-700 dark:text-emerald-400 font-bold">{d.collected.toLocaleString()}</td>
                      <td className="py-2.5 px-3 font-mono">{d.captureRate}%</td>
                      <td className="py-2.5 px-3 font-mono text-amber-700 dark:text-amber-400">{d.perCapitaGrams} g</td>
                      <td className="py-2.5 px-3 font-mono">{d.eprRate}%</td>
                      <td className="py-2.5 px-3">
                        {d.recyclerPresent ? (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold">
                            Yes
                          </span>
                        ) : (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-semibold">
                            None
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-emerald-50/80 dark:bg-emerald-950/50 font-bold text-slate-900 dark:text-white border-t-2 border-emerald-600">
                    <td className="py-3 px-3">State Total</td>
                    <td className="py-3 px-3">{SIKKIM_TOTALS.totalPopulation.toLocaleString()}</td>
                    <td className="py-3 px-3 font-mono">{SIKKIM_TOTALS.totalGeneratedKg.toLocaleString()} kg</td>
                    <td className="py-3 px-3 font-mono text-emerald-800 dark:text-emerald-300">{SIKKIM_TOTALS.totalCollectedKg.toLocaleString()} kg</td>
                    <td className="py-3 px-3 font-mono">{SIKKIM_TOTALS.captureRatePercent.toFixed(1)}%</td>
                    <td className="py-3 px-3 font-mono">{SIKKIM_TOTALS.avgPerCapitaGrams.toFixed(0)} g</td>
                    <td className="py-3 px-3 font-mono">{SIKKIM_TOTALS.eprAchievementPercent.toFixed(1)}%</td>
                    <td className="py-3 px-3">3 Facilities</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Associated Documents */}
          <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Associated Verified Documents & Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {ASSIGNMENT_CATALOGUE.filter((d) =>
                ['sikkim-ieee-report', 'sikkim-spcb-dashboard', 'sikkim-master-tracker-excel', 'sikkim-presentation-deck'].includes(d.id)
              ).map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => onSelectDocument(doc)}
                  className="p-3.5 rounded-xl border border-slate-200/80 dark:border-emerald-950/60 hover:bg-slate-50 dark:hover:bg-emerald-950/30 cursor-pointer transition-colors space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                      {doc.fileType}
                    </span>
                    <span className="text-[10px] text-slate-400">{doc.fileSizeFormatted}</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 line-clamp-2">
                    {doc.shortTitle}
                  </h4>
                  <div className="text-[10px] text-slate-400 font-mono truncate">{doc.originalFilename}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PROJECT 2: E-Bin Smart Recycling ATM */}
      {activeProjectId === 'ebin' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-900 via-[#0B2545] to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-900/50">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/60 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
              <span>Innovation Presentation</span>
              <span>•</span>
              <span className="font-mono">AI Edge Computing & Circular Economy</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-snug">
              {EBIN_PROJECT.title}
            </h2>
            <p className="text-sm sm:text-base text-blue-200 font-medium mt-1">
              {EBIN_PROJECT.tagline}
            </p>
            <div className="mt-4 pt-4 border-t border-blue-800/60 flex items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium text-blue-300">
                <Users className="w-4 h-4 text-blue-400" />
                Principal Researcher: <strong>Yukta Padekar</strong>
              </span>
              <span>•</span>
              <span>Domain: {EBIN_PROJECT.domain}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                The Behavioral Problem: Micro E-Waste Crisis
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {EBIN_PROJECT.problem.friction}
              </p>
              <div className="p-3 bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 rounded-xl text-xs text-rose-800 dark:text-rose-300">
                <strong>Severe Consequence:</strong> {EBIN_PROJECT.problem.consequence}
              </div>
              <div className="p-3 bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 rounded-xl text-xs text-blue-800 dark:text-blue-300 font-medium">
                <strong>Core Insight:</strong> {EBIN_PROJECT.problem.coreInsight}
              </div>
            </div>

            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                Paradigm Shift: Traditional vs. E-Bin
              </h3>
              <div className="space-y-2 text-xs">
                {EBIN_PROJECT.comparison.map((c, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl border border-slate-100 dark:border-emerald-950/60 bg-slate-50/50 dark:bg-[#07110C] space-y-1">
                    <div className="font-bold text-slate-800 dark:text-slate-200">{c.dimension}</div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="text-rose-700 dark:text-rose-400"><span className="font-semibold">Traditional:</span> {c.traditional}</div>
                      <div className="text-emerald-700 dark:text-emerald-400 font-medium"><span className="font-semibold">E-Bin:</span> {c.ebin}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5-Step Workflow */}
          <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              System Architecture & User Journey (5 Steps)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {EBIN_PROJECT.workflow.map((st) => (
                <div key={st.step} className="p-3.5 rounded-xl bg-slate-50 dark:bg-emerald-950/20 border border-slate-200/60 dark:border-emerald-900/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-6 h-6 rounded-full bg-blue-700 text-white font-mono font-bold text-xs flex items-center justify-center">
                      {st.step}
                    </span>
                    <span className="text-[9px] uppercase font-bold text-slate-400">{st.type.split(' ')[0]}</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug">{st.title}</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">{st.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PROJECT 3: Automated Laser + Molten Salt PCB Recycling */}
      {activeProjectId === 'pcb' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-950 via-[#1F1135] to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-purple-900/50">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-800/60 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
              <span>Technical Poster & Assignment 02</span>
              <span>•</span>
              <span className="font-mono">Clean Pyrometallurgy & Hydrometallurgy</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-snug">
              Automated Laser + Molten Salt Extraction Process for Waste PCB
            </h2>
            <div className="mt-4 pt-4 border-t border-purple-800/60 flex items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium text-purple-300">
                <Users className="w-4 h-4 text-purple-400" />
                Author: <strong>Yukta Padekar (Roll: 24102C0038)</strong>
              </span>
              <span>•</span>
              <span>Academic Assignment 02</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Flame className="w-4 h-4 text-purple-600" />
                The 12-Step Clean Metallurgical Recovery Sequence
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {[
                  { n: 1, t: 'Collection of Waste PCB', d: 'Discarded circuit boards sourced from consumer gadgets, servers, and industrial electronics.' },
                  { n: 2, t: 'Visual Inspection & Sorting', d: 'Automated optical sorting to eliminate extraneous casing and non-PCB components.' },
                  { n: 3, t: 'Surface Cleaning', d: 'Ultrasonic removal of dust, grease, solder flux, and surface contaminants.' },
                  { n: 4, t: 'Automated Laser Scanning', d: 'High-resolution scanning maps precise board topography and components.' },
                  { n: 5, t: 'Precision Laser Desoldering', d: 'Automated selective laser desolders ICs, capacitors, and microchips without damaging the board.' },
                  { n: 6, t: 'Mechanical Shredding & Sieving', d: 'Crushing and air-gravity sieving separates metallic from non-metallic laminate fractions.' },
                  { n: 7, t: 'High-Temp Molten Salt Reactor', d: 'Metal-rich fraction enters molten salt bath operating at 400–800 °C.' },
                  { n: 8, t: 'Selective Dissolution', d: 'Target metals dissolve selectively into molten salt forming liquid metal ion complexes.' },
                  { n: 9, t: 'Separation of Metal Fractions', d: 'Segregates into Base Metals (Cu, Ni, Sn), Precious Metals (Au, Ag, Pd, Pt), and Residues.' },
                  { n: 10, t: 'Electrorefining & Casting', d: 'Purification through controlled electrowinning and casting into high-purity ingots.' },
                  { n: 11, t: 'High-Purity Recovered Metals', d: 'Attains >99.9% metallurgical purity across Copper, Gold, Silver, Palladium, Platinum.' },
                  { n: 12, t: 'Circular Electronics Reuse', d: 'Pure recovered elements are reinjected into modern electronics supply chains.' }
                ].map((s) => (
                  <div key={s.n} className="p-3 rounded-xl bg-slate-50 dark:bg-[#07110C] border border-slate-100 dark:border-emerald-950/60">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-purple-700 text-white font-mono font-bold text-[10px] flex items-center justify-center shrink-0">
                        {s.n}
                      </span>
                      <h4 className="font-bold text-slate-900 dark:text-white leading-tight">{s.t}</h4>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Poster Preview Card */}
            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 font-bold">
                  High-Resolution Poster
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Visual Engineering Poster
                </h4>
                <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-emerald-950">
                  <img
                    src="/previews/24102C0038_assign02_p1.png"
                    alt="PCB Molten Salt Poster"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-emerald-950/60">
                <button
                  onClick={() => {
                    const doc = ASSIGNMENT_CATALOGUE.find((d) => d.id === 'pcb-molten-salt-poster');
                    if (doc) onSelectDocument(doc);
                  }}
                  className="w-full py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Open Full Screen Poster</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PROJECT 4: Multi-Criteria Decision Framework (AHP & ISM) */}
      {activeProjectId === 'ahp-ism' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-teal-950 via-[#0B2E28] to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-teal-900/50">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800/60 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-3">
              <span>Decision Science Research</span>
              <span>•</span>
              <span className="font-mono">AHP & ISM Mathematical Modeling</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-snug">
              E-Waste Management in India: Multi-Criteria Decision Making (AHP & ISM) Study
            </h2>
            <div className="mt-4 pt-4 border-t border-teal-800/60 flex items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium text-teal-300">
                <Users className="w-4 h-4 text-teal-400" />
                Researcher: <strong>Yukta Padekar (Roll: 24102C0038)</strong>
              </span>
              <span>•</span>
              <span>Methodology: Saaty AHP & Warfield Interpretive Structural Modeling</span>
            </div>
          </div>

          {/* Criteria Weights Bar Chart / List */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Scale className="w-4 h-4 text-teal-600" />
                AHP Quantitative Barrier Prioritization Weights
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Using pairwise comparison matrices from domain experts, AHP calculates the relative severity of barriers hindering formal e-waste management in India.
              </p>
              <div className="space-y-3 pt-2">
                {AHP_CRITERIA_WEIGHTS.map((c) => (
                  <div key={c.rank} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold text-slate-800 dark:text-slate-200">
                      <span>#{c.rank} {c.criterion}</span>
                      <span className="font-mono text-emerald-700 dark:text-emerald-400">Weight: {(c.weight * 100).toFixed(1)}%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-emerald-950/60 overflow-hidden">
                      <div
                        className="h-full bg-emerald-600 rounded-full transition-all duration-500"
                        style={{ width: `${c.weight * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-600" />
                ISM Causal Synthesis
              </h3>
              <div className="p-3.5 bg-slate-50 dark:bg-[#07110C] rounded-xl border border-slate-100 dark:border-emerald-950/60 text-xs text-slate-600 dark:text-slate-300 space-y-2">
                <div className="font-bold text-slate-900 dark:text-white">AHP vs. ISM Distinction:</div>
                <p>
                  While AHP identifies <em>"Lack of Knowledge and Skills"</em> as the most urgent operational friction, ISM structural modeling demonstrates that <em>"Inadequate Policy Infrastructure & Digital EPR Auditing"</em> is the master root-cause driver at Level 1 of the hierarchy.
                </p>
              </div>

              <button
                onClick={() => {
                  const doc = ASSIGNMENT_CATALOGUE.find((d) => d.id === 'ahp-ism-decision-study');
                  if (doc) onSelectDocument(doc);
                }}
                className="w-full py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Read Full AHP/ISM Study</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PROJECT 5: Indian Electronics Manufacturers Regulatory Compliance Benchmark */}
      {activeProjectId === 'manufacturers' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-900 via-[#182620] to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
              <span>Corporate Compliance Dossier</span>
              <span>•</span>
              <span className="font-mono">5 Major Electronics Manufacturers in India</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-snug">
              Electronics Manufacturers: Regulations Followed, Non-Compliance Incidents & Business Implications
            </h2>
            <div className="mt-4 pt-4 border-t border-slate-700/60 flex items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium text-emerald-300">
                <Users className="w-4 h-4 text-emerald-400" />
                Analyst: <strong>Yukta Padekar (Roll: 24102C0038)</strong>
              </span>
              <span>•</span>
              <span>Scope: Dixon, Kaynes, Syrma SGS, Foxconn India, Tata Electronics</span>
            </div>
          </div>

          <div className="space-y-4">
            {ELECTRONICS_MANUFACTURERS.map((mfg, idx) => (
              <div
                key={mfg.company}
                className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-emerald-950/60 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {mfg.company}
                    </h3>
                    <div className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                      {mfg.category}
                    </div>
                  </div>
                  <span
                    className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase self-start sm:self-auto ${
                      mfg.riskLevel === 'Low'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : mfg.riskLevel === 'Medium'
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                    }`}
                  >
                    Compliance Risk: {mfg.riskLevel}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-3 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                    <div className="font-bold text-emerald-900 dark:text-emerald-300 mb-2">
                      Regulations Followed:
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                      {mfg.regulationsFollowed.map((rf, rIdx) => (
                        <li key={rIdx}>{rf}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-amber-50/50 dark:bg-amber-950/20 rounded-xl border border-amber-100 dark:border-amber-900/30">
                    <div className="font-bold text-amber-900 dark:text-amber-300 mb-2">
                      Reported Issue / Gaps:
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                      {mfg.regulationsNotFollowed.map((rn, rIdx) => (
                        <li key={rIdx}>{rn}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-slate-50 dark:bg-[#07110C] rounded-xl border border-slate-200/60 dark:border-emerald-950/40">
                    <div className="font-bold text-slate-900 dark:text-white mb-2">
                      Business & ESG Implications:
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                      {mfg.implications.map((imp, rIdx) => (
                        <li key={rIdx}>{imp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
