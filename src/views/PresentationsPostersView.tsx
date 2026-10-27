import React, { useState } from 'react';
import {
  Presentation,
  Image as ImageIcon,
  Eye,
  Download,
  ExternalLink,
  Users,
  ZoomIn,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { ASSIGNMENT_CATALOGUE, DocumentItem } from '../data/assignmentsData';
import { PresentationViewer } from '../components/PresentationViewer';

interface PresentationsPostersViewProps {
  onSelectDocument: (doc: DocumentItem) => void;
}

export const PresentationsPostersView: React.FC<PresentationsPostersViewProps> = ({
  onSelectDocument
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'decks' | 'posters'>('decks');

  const posters = ASSIGNMENT_CATALOGUE.filter((d) =>
    ['pcb-molten-salt-poster', 'sikkim-ewaste-to-wealth-poster'].includes(d.id)
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Banner and Navigation Switcher */}
      <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-2">
            <Presentation className="w-3.5 h-3.5" />
            <span>Visual Exhibition & Technical Media</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Presentations, Pitch Decks & Technical Posters
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Slide decks and high-resolution engineering infographics with instant preview and zoom
          </p>
        </div>

        {/* Sub-tab pills */}
        <div className="flex items-center bg-slate-100 dark:bg-emerald-950/40 p-1 rounded-xl text-xs font-medium self-start sm:self-auto">
          <button
            onClick={() => setActiveSubTab('decks')}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              activeSubTab === 'decks'
                ? 'bg-emerald-700 text-white font-semibold shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>Interactive Slide Decks</span>
          </button>
          <button
            onClick={() => setActiveSubTab('posters')}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              activeSubTab === 'posters'
                ? 'bg-emerald-700 text-white font-semibold shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Technical Posters Gallery (2)</span>
          </button>
        </div>
      </div>

      {/* SUB-TAB 1: Interactive Slide Decks Viewer */}
      {activeSubTab === 'decks' && (
        <div className="space-y-6">
          <PresentationViewer />
        </div>
      )}

      {/* SUB-TAB 2: Technical Posters Gallery */}
      {activeSubTab === 'posters' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {posters.map((poster) => (
              <div
                key={poster.id}
                className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                      Technical Poster • {poster.fileType}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{poster.fileSizeFormatted}</span>
                  </div>

                  <h3
                    onClick={() => onSelectDocument(poster)}
                    className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 cursor-pointer transition-colors leading-snug"
                  >
                    {poster.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {poster.description}
                  </p>

                  {/* Thumbnail Preview Image */}
                  <div
                    onClick={() => onSelectDocument(poster)}
                    className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-emerald-950 cursor-pointer shadow-xs group-hover:border-emerald-500/60 transition-colors"
                  >
                    <img
                      src={poster.previewPages[0]}
                      alt={poster.title}
                      className="w-full h-80 object-cover object-top hover:scale-101 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-xs backdrop-blur-2xs">
                      <ZoomIn className="w-4 h-4" />
                      <span>Click to Open Full Resolution</span>
                    </div>
                  </div>

                  <div className="p-2.5 bg-slate-50 dark:bg-[#07110C] rounded-xl border border-slate-100 dark:border-emerald-950/60 text-xs">
                    <div className="text-[10px] text-slate-400 font-mono uppercase">Original Deliverable:</div>
                    <div className="font-mono text-slate-800 dark:text-slate-200 font-semibold truncate">
                      {poster.originalFilename}
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Author: <strong>{poster.authors.join(', ')}</strong></span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-emerald-950/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectDocument(poster)}
                    className="flex-1 py-2 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Full Poster</span>
                  </button>

                  <a
                    href={poster.filePath}
                    download={poster.downloadFilename}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-emerald-950/60 text-slate-700 dark:text-slate-200 hover:bg-slate-200 border border-slate-200 dark:border-emerald-900/40 transition-colors"
                    title={`Download ${poster.downloadFilename}`}
                  >
                    <Download className="w-3.5 h-3.5" />
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
