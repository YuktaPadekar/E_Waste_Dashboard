import React from 'react';
import {
  Database,
  FileSpreadsheet,
  Download,
  BookOpen,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Scale
} from 'lucide-react';
import { ExcelSheetViewer } from '../components/ExcelSheetViewer';

export const ResourcesView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-2">
            <Database className="w-3.5 h-3.5" />
            <span>Master Data Repository & Statutory References</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Primary Datasets, Spreadsheets & Regulatory Documents
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Browse live interactive sheets or download verified original workbooks and legal frameworks
          </p>
        </div>

        {/* Quick Download Buttons */}
        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          <a
            href="/datasets/State_EWaste_Tracker_Completed_Fixed.xlsx"
            download="State_EWaste_Tracker_Completed_Fixed.xlsx"
            className="px-3 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Tracker Excel (.xlsx)</span>
          </a>

          <a
            href="/datasets/24102C0038_Carbon_Footprint_Tracker.xlsx"
            download="24102C0038.xlsx"
            className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-emerald-950 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-200 border border-slate-200 dark:border-emerald-900/40 flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Carbon Excel (.xlsx)</span>
          </a>
        </div>
      </div>

      {/* SECTION 1: Master Interactive Sheet Viewer */}
      <div className="space-y-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            Live State E-Waste Tracker Workbook (8 Integrated Sheets)
          </h3>
          <p className="text-xs text-slate-500">
            Interactive view of the empirical Sikkim SPCB dataset without needing Microsoft Excel
          </p>
        </div>

        <ExcelSheetViewer />
      </div>

      {/* SECTION 2: Statutory and Legal Frameworks */}
      <div className="space-y-4 pt-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Scale className="w-4 h-4 text-emerald-600" />
            Statutory Legal Frameworks & Regulatory Guidelines
          </h3>
          <p className="text-xs text-slate-500">
            Key environmental statutes and categorization schedules governing the academic research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              E-Waste (Management) Rules, 2022
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Notified by the Ministry of Environment, Forest and Climate Change (MoEFCC). Replaced the 2016 rules, mandating online registration on the Central Pollution Control Board (CPCB) portal, digital trading of EPR certificates, and strict annual recycling quotas for manufacturers.
            </p>
            <div className="pt-2 text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
              Authority: MoEFCC / CPCB
            </div>
          </div>

          <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Schedule I EEE Classification
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Standardized classification covering 106 categories of Electrical and Electronic Equipment (EEE), grouped into: 1) IT & Telecommunication, 2) Consumer Electronics, 3) Large & Small Equipment, 4) Lighting, 5) Batteries, and 6) Components.
            </p>
            <div className="pt-2 text-[11px] font-mono text-blue-700 dark:text-blue-400">
              Standard: CPCB Schedule I
            </div>
          </div>

          <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-400 flex items-center justify-center">
              <Scale className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Extended Producer Responsibility (EPR)
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Places statutory accountability on electronic goods producers to finance and organize the reverse logistics and environmentally sound dismantling/recycling of end-of-life products through authorized recyclers.
            </p>
            <div className="pt-2 text-[11px] font-mono text-purple-700 dark:text-purple-400">
              System: Digital EPR Portal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
