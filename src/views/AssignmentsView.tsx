import React, { useState } from 'react';
import {
  Search,
  Filter,
  Eye,
  Download,
  ExternalLink,
  FileText,
  Calendar,
  Users,
  Tag,
  CheckCircle,
  FileCode,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import {
  ASSIGNMENT_CATALOGUE,
  DocumentCategory,
  DocumentItem
} from '../data/assignmentsData';

interface AssignmentsViewProps {
  onSelectDocument: (doc: DocumentItem) => void;
  externalSearchQuery: string;
}

export const AssignmentsView: React.FC<AssignmentsViewProps> = ({
  onSelectDocument,
  externalSearchQuery
}) => {
  const [selectedCategory, setSelectedCategory] = useState<DocumentCategory>('All');
  const [selectedFileType, setSelectedFileType] = useState<string>('All');
  const [localSearch, setLocalSearch] = useState<string>(externalSearchQuery);

  const categories: DocumentCategory[] = [
    'All',
    'Assignments',
    'Research Papers',
    'Presentations & Posters',
    'Excel Datasets',
    'Regulatory Studies',
    'Other Academic Research'
  ];

  const fileTypes = ['All', 'PDF', 'XLSX', 'DOCX', 'PPTX', 'HTML'];

  // Combined search term
  const effectiveSearch = (localSearch || externalSearchQuery).trim().toLowerCase();

  // Filtered documents
  const filteredDocs = ASSIGNMENT_CATALOGUE.filter((doc) => {
    // Category filter
    if (selectedCategory !== 'All' && doc.category !== selectedCategory) {
      return false;
    }
    // File Type filter
    if (selectedFileType !== 'All' && doc.fileType !== selectedFileType) {
      return false;
    }
    // Search query
    if (effectiveSearch) {
      const matchTitle = doc.title.toLowerCase().includes(effectiveSearch);
      const matchDesc = doc.description.toLowerCase().includes(effectiveSearch);
      const matchFile = doc.originalFilename.toLowerCase().includes(effectiveSearch);
      const matchDomain = doc.projectDomain.toLowerCase().includes(effectiveSearch);
      const matchAuthors = doc.authors.some((a) => a.toLowerCase().includes(effectiveSearch));
      const matchTags = doc.tags.some((t) => t.toLowerCase().includes(effectiveSearch));

      return matchTitle || matchDesc || matchFile || matchDomain || matchAuthors || matchTags;
    }

    return true;
  });

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedFileType('All');
    setLocalSearch('');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner and Search Bar */}
      <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Academic Deliverables & Assignment Catalogue
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Verified submissions, analytical models, raw data workbooks, and presentations
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/50">
              Showing {filteredDocs.length} of {ASSIGNMENT_CATALOGUE.length} Files
            </span>
          </div>
        </div>

        {/* Search Input Box */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            placeholder="Search by assignment title, original filename, subject, keywords, or contributors..."
            className="w-full pl-10 pr-10 py-2.5 text-xs bg-slate-50 dark:bg-[#07110C] border border-slate-200 dark:border-emerald-900/40 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/40 focus:border-emerald-600"
          />
          {localSearch && (
            <button
              onClick={() => setLocalSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills Bar */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-100 dark:border-emerald-950/40">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-emerald-600" />
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-700 text-white shadow-xs font-semibold'
                  : 'bg-slate-100 dark:bg-emerald-950/40 text-slate-600 dark:text-slate-300 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Secondary File Type Filter */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1">
            Format:
          </span>
          {fileTypes.map((ft) => (
            <button
              key={ft}
              onClick={() => setSelectedFileType(ft)}
              className={`px-2.5 py-0.5 rounded-lg text-[11px] font-mono transition-all ${
                selectedFileType === ft
                  ? 'bg-slate-800 dark:bg-emerald-800 text-white font-bold'
                  : 'bg-slate-100 dark:bg-emerald-950/30 text-slate-500 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {ft}
            </button>
          ))}

          {(selectedCategory !== 'All' || selectedFileType !== 'All' || localSearch) && (
            <button
              onClick={handleResetFilters}
              className="ml-auto text-[11px] text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 font-medium"
            >
              <RotateCcw className="w-3 h-3" />
              Reset All Filters
            </button>
          )}
        </div>
      </div>

      {/* Grid of Deliverable Cards */}
      {filteredDocs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-emerald-500/40 transition-all group"
            >
              <div className="space-y-3">
                {/* Badges Bar */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono">
                    {doc.fileType}
                  </span>

                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    {doc.fileSizeFormatted}
                  </span>
                </div>

                {/* Title */}
                <h3
                  onClick={() => onSelectDocument(doc)}
                  className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors cursor-pointer leading-snug line-clamp-2"
                >
                  {doc.title}
                </h3>

                {/* Subject & Domain */}
                <div className="text-[11px] font-medium text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-100/60 dark:border-emerald-900/30">
                  {doc.projectDomain}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {doc.description}
                </p>

                {/* Original Filename */}
                <div className="p-2 bg-slate-50 dark:bg-[#07110C] rounded-lg border border-slate-100 dark:border-emerald-950/60">
                  <div className="text-[10px] text-slate-400 font-mono uppercase">Original File:</div>
                  <div className="text-xs font-mono text-slate-700 dark:text-slate-300 truncate font-semibold">
                    {doc.originalFilename}
                  </div>
                </div>

                {/* Authorship & Contributor Credit */}
                <div className="flex items-start gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <Users className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {doc.authors.join(', ')}
                    </span>
                    {doc.collaborative && (
                      <span className="ml-1.5 text-[10px] font-semibold px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                        Collaborative Work
                      </span>
                    )}
                  </div>
                </div>

                {/* Submission Period (Only when reliably available) */}
                {doc.submissionDate && (
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{doc.submissionDate}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons: Preview, Open, Download */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-emerald-950/60 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectDocument(doc)}
                  className="flex-1 py-1.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>

                <a
                  href={doc.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-emerald-950/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 border border-slate-200 dark:border-emerald-900/40 transition-colors"
                  title="Open file in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={doc.filePath}
                  download={doc.downloadFilename}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-emerald-950/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 border border-slate-200 dark:border-emerald-900/40 transition-colors"
                  title={`Download ${doc.downloadFilename}`}
                >
                  <Download className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-12 text-center bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl shadow-xs space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            No Academic Deliverables Matched Your Search
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            No documents found matching "{effectiveSearch}". Try adjusting your keyword or reset filters to view all 14 files.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-xs"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};
