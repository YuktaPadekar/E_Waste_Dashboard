import React, { useState } from 'react';
import {
  BookOpen,
  FileText,
  Eye,
  Download,
  ExternalLink,
  Users,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  Cpu,
  ShieldCheck,
  FileCode
} from 'lucide-react';
import { ASSIGNMENT_CATALOGUE, DocumentItem } from '../data/assignmentsData';

interface ResearchReportsViewProps {
  onSelectDocument: (doc: DocumentItem) => void;
}

export const ResearchReportsView: React.FC<ResearchReportsViewProps> = ({
  onSelectDocument
}) => {
  const [activeSection, setActiveSection] = useState<'all' | 'ewaste' | 'other'>('all');

  const ewasteResearch = ASSIGNMENT_CATALOGUE.filter((d) =>
    ['sikkim-ieee-report', 'sikkim-spcb-dashboard', 'ahp-ism-decision-study', 'electronics-manufacturers-table', 'india-vs-world-handwritten', 'toxic-chemicals-handwritten'].includes(d.id)
  );

  const otherResearch = ASSIGNMENT_CATALOGUE.filter((d) => d.category === 'Other Academic Research');

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Research Library & Documentation</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Research Papers, Technical Reports & Literature Reviews
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Access formal publications, empirical state dashboards, and independent computer engineering reviews
          </p>
        </div>

        {/* Section Filter */}
        <div className="flex items-center bg-slate-100 dark:bg-emerald-950/40 p-1 rounded-xl text-xs font-medium self-start sm:self-auto">
          <button
            onClick={() => setActiveSection('all')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeSection === 'all'
                ? 'bg-emerald-700 text-white font-semibold shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            All Research ({ewasteResearch.length + otherResearch.length})
          </button>
          <button
            onClick={() => setActiveSection('ewaste')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeSection === 'ewaste'
                ? 'bg-emerald-700 text-white font-semibold shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            E-Waste Domain ({ewasteResearch.length})
          </button>
          <button
            onClick={() => setActiveSection('other')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeSection === 'other'
                ? 'bg-emerald-700 text-white font-semibold shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Other Research ({otherResearch.length})
          </button>
        </div>
      </div>

      {/* SECTION 1: Core E-Waste Research Papers & IEEE Reports */}
      {(activeSection === 'all' || activeSection === 'ewaste') && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-emerald-950/60 pb-2">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-600" />
                E-Waste Research Papers & IEEE Sub-National Reports
              </h3>
              <p className="text-xs text-slate-500">
                Peer-format academic literature and empirical state pollution control assessments
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ewasteResearch.map((doc) => (
              <div
                key={doc.id}
                className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-emerald-500/40 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 uppercase">
                      {doc.fileType} • {doc.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {doc.fileSizeFormatted}
                    </span>
                  </div>

                  <h4
                    onClick={() => onSelectDocument(doc)}
                    className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 cursor-pointer transition-colors leading-snug"
                  >
                    {doc.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {doc.description}
                  </p>

                  <div className="p-2.5 bg-slate-50 dark:bg-[#07110C] rounded-xl border border-slate-100 dark:border-emerald-950/60 text-xs">
                    <div className="text-[10px] text-slate-400 font-mono">Original Document:</div>
                    <div className="font-mono text-slate-800 dark:text-slate-200 font-semibold truncate">
                      {doc.originalFilename}
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5 text-xs text-slate-500">
                    <Users className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {doc.authors.join(', ')}
                      </span>
                      {doc.collaborative && (
                        <div className="text-[10px] text-amber-700 dark:text-amber-400 font-medium">
                          {doc.collaborationDetails}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-emerald-950/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectDocument(doc)}
                    className="flex-1 py-1.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Open Reader</span>
                  </button>

                  <a
                    href={doc.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-100 dark:bg-emerald-950/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 border border-slate-200 dark:border-emerald-900/40"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={doc.filePath}
                    download={doc.downloadFilename}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-emerald-950/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 border border-slate-200 dark:border-emerald-900/40"
                    title="Download original"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: OTHER ACADEMIC RESEARCH (Strictly Separated) */}
      {(activeSection === 'all' || activeSection === 'other') && (
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-emerald-950/60 pb-2">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-[11px] font-bold uppercase font-mono mb-1">
                <Cpu className="w-3 h-3" />
                <span>Separate Academic Research Track</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Other Academic Research (Computer Engineering / Deep Learning)
              </h3>
              <p className="text-xs text-slate-500">
                Non-e-waste peer review strictly separated from environmental projects
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {otherResearch.map((doc) => (
              <div
                key={doc.id}
                className="bg-white dark:bg-[#12241C] border border-blue-200 dark:border-blue-900/40 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-md transition-shadow group"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-mono">
                      PDF • Technical Paper Review
                    </span>
                    <span className="text-xs font-mono text-slate-400">Date: 13 October 2026</span>
                  </div>

                  <h4
                    onClick={() => onSelectDocument(doc)}
                    className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {doc.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {doc.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500 font-medium">
                    <span>Student Reviewer: <strong className="text-slate-800 dark:text-slate-200">Yukta Padekar (24102C0038)</strong></span>
                    <span>•</span>
                    <span>Department: <strong>CMPN-C (Computer Engineering)</strong></span>
                    <span>•</span>
                    <span className="font-mono text-slate-400">File: {doc.originalFilename}</span>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap pt-1">
                    {doc.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-blue-950/40 text-slate-600 dark:text-blue-300 font-medium border border-slate-200 dark:border-blue-900/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 w-full md:w-auto">
                  <button
                    onClick={() => onSelectDocument(doc)}
                    className="py-2 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Read Paper Review</span>
                  </button>

                  <a
                    href={doc.filePath}
                    download={doc.downloadFilename}
                    className="py-2 px-4 rounded-xl bg-slate-100 dark:bg-blue-950/60 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-200 flex items-center justify-center gap-1.5 border border-slate-200 dark:border-blue-900/40 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
