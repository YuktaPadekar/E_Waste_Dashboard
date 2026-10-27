import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  FileText,
  CheckCircle2,
  Users,
  Calendar,
  Layers,
  FileCode,
  Tag,
  Maximize2,
  ScrollText,
  FileSpreadsheet,
  Columns
} from 'lucide-react';
import { DocumentItem, STUDENT_PROFILE } from '../data/assignmentsData';

interface DocumentModalProps {
  document: DocumentItem | null;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ document, onClose }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [activeTab, setActiveTab] = useState<'preview' | 'details' | 'native'>('preview');
  const [viewMode, setViewMode] = useState<'continuous' | 'single'>('continuous');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Lock background body scroll when modal is active
  useEffect(() => {
    if (!document) return;

    const originalOverflow = window.document.body.style.overflow;
    const originalPaddingRight = window.document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - window.document.documentElement.clientWidth;

    window.document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      window.document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && viewMode === 'single') {
        setCurrentPage((prev) => Math.min(prev + 1, (document.previewPages.length || 1) - 1));
      } else if (e.key === 'ArrowLeft' && viewMode === 'single') {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.document.body.style.overflow = originalOverflow;
      window.document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [document, onClose, viewMode]);

  // Reset page and zoom when document changes
  useEffect(() => {
    if (document) {
      setCurrentPage(0);
      setZoomLevel(100);
      setActiveTab('preview');
      setViewMode('continuous');
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  }, [document?.id]);

  if (!document) return null;

  const totalPages = document.previewPages.length || document.totalPages || 1;
  const isPdf = document.fileType === 'PDF';
  const isHtml = document.fileType === 'HTML';
  const isExcel = document.fileType === 'XLSX';

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      const next = currentPage + 1;
      setCurrentPage(next);
      if (viewMode === 'continuous') {
        scrollToPage(next);
      }
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      const prev = currentPage - 1;
      setCurrentPage(prev);
      if (viewMode === 'continuous') {
        scrollToPage(prev);
      }
    }
  };

  const scrollToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    const targetEl = window.document.getElementById(`doc-page-${pageIndex}`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleZoomIn = () => {
    if (zoomLevel < 200) setZoomLevel((prev) => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    if (zoomLevel > 50) setZoomLevel((prev) => Math.max(prev - 25, 50));
  };

  const handleResetZoom = () => setZoomLevel(100);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-6xl h-[94vh] max-h-[94vh] bg-white dark:bg-[#0E1D16] border border-slate-200 dark:border-emerald-950 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Top Bar - Fixed */}
        <div className="shrink-0 px-4 sm:px-6 py-3.5 border-b border-slate-200 dark:border-emerald-950/60 bg-slate-50/90 dark:bg-[#0B1712] flex items-center justify-between gap-3 z-20">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-xs font-bold uppercase px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono shrink-0">
              {document.fileType}
            </span>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                {document.title}
              </h3>
              <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">
                {document.originalFilename} • {document.fileSizeFormatted} • {totalPages} {totalPages === 1 ? 'Page' : 'Pages'}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={document.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl bg-slate-100 dark:bg-emerald-950/60 text-slate-700 dark:text-slate-200 hover:bg-slate-200 border border-slate-200 dark:border-emerald-900/40 transition-colors"
              title="Open native file in browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open Native</span>
            </a>

            <a
              href={document.filePath}
              download={document.downloadFilename}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs transition-colors"
              title={`Download verified file: ${document.downloadFilename}`}
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-emerald-950/50 transition-colors"
              aria-label="Close document viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Secondary Navigation / Controls Bar - Fixed */}
        <div className="shrink-0 px-4 sm:px-6 py-2 border-b border-slate-100 dark:border-emerald-950/40 bg-white dark:bg-[#0E1D16] flex flex-wrap items-center justify-between gap-2 text-xs z-10">
          {/* Tab Switcher */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-emerald-950/40 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1 rounded-lg font-medium transition-all ${
                activeTab === 'preview'
                  ? 'bg-white dark:bg-emerald-800 text-emerald-800 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              Document Preview
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={`px-3 py-1 rounded-lg font-medium transition-all ${
                activeTab === 'details'
                  ? 'bg-white dark:bg-emerald-800 text-emerald-800 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              Academic Analysis & Scope
            </button>
            {isPdf && (
              <button
                onClick={() => setActiveTab('native')}
                className={`px-3 py-1 rounded-lg font-medium transition-all ${
                  activeTab === 'native'
                    ? 'bg-white dark:bg-emerald-800 text-emerald-800 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                Embedded PDF
              </button>
            )}
            {isHtml && (
              <button
                onClick={() => setActiveTab('native')}
                className={`px-3 py-1 rounded-lg font-medium transition-all ${
                  activeTab === 'native'
                    ? 'bg-white dark:bg-emerald-800 text-emerald-800 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                Live HTML Viewer
              </button>
            )}
          </div>

          {/* Page & Zoom Controls (Only for Preview Tab) */}
          {activeTab === 'preview' && document.previewPages.length > 0 && (
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {/* Continuous vs Single Page Mode Toggle */}
              {totalPages > 1 && (
                <div className="flex items-center gap-1 bg-slate-100 dark:bg-emerald-950/40 p-1 rounded-xl">
                  <button
                    onClick={() => setViewMode('continuous')}
                    title="Continuous vertical scroll (all pages)"
                    className={`px-2 py-0.5 rounded-lg text-[11px] font-medium flex items-center gap-1 transition-all ${
                      viewMode === 'continuous'
                        ? 'bg-white dark:bg-emerald-800 text-emerald-800 dark:text-white shadow-xs font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    <ScrollText className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Continuous</span>
                  </button>
                  <button
                    onClick={() => setViewMode('single')}
                    title="Single page view"
                    className={`px-2 py-0.5 rounded-lg text-[11px] font-medium flex items-center gap-1 transition-all ${
                      viewMode === 'single'
                        ? 'bg-white dark:bg-emerald-800 text-emerald-800 dark:text-white shadow-xs font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    <Columns className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Single Page</span>
                  </button>
                </div>
              )}

              {/* Page Switcher in Single Mode */}
              {totalPages > 1 && viewMode === 'single' && (
                <div className="flex items-center gap-1 bg-slate-100 dark:bg-emerald-950/40 px-2 py-1 rounded-xl">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 0}
                    className="p-1 rounded hover:bg-white dark:hover:bg-emerald-900/60 disabled:opacity-30 disabled:hover:bg-transparent"
                    title="Previous Page"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono text-slate-700 dark:text-slate-300 text-[11px] px-1">
                    {currentPage + 1} / {totalPages}
                  </span>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages - 1}
                    className="p-1 rounded hover:bg-white dark:hover:bg-emerald-900/60 disabled:opacity-30 disabled:hover:bg-transparent"
                    title="Next Page"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Quick Jump Dropdown / Pill in Continuous Mode */}
              {totalPages > 1 && viewMode === 'continuous' && (
                <div className="hidden sm:flex items-center gap-1.5 bg-slate-100 dark:bg-emerald-950/40 px-2.5 py-1 rounded-xl text-[11px] text-slate-600 dark:text-slate-300">
                  <span className="font-mono">{totalPages} Pages Available</span>
                  <div className="flex items-center gap-1 pl-1 border-l border-slate-300 dark:border-emerald-800">
                    {document.previewPages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => scrollToPage(idx)}
                        className={`w-5 h-5 rounded text-[10px] font-mono transition-colors ${
                          currentPage === idx
                            ? 'bg-emerald-700 text-white font-bold'
                            : 'hover:bg-white dark:hover:bg-emerald-900/60 text-slate-600 dark:text-slate-400'
                        }`}
                        title={`Jump to Page ${idx + 1}`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Zoom Controls */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-emerald-950/40 px-2 py-1 rounded-xl">
                <button
                  onClick={handleZoomOut}
                  title="Zoom Out"
                  className="p-1 rounded hover:bg-white dark:hover:bg-emerald-900/60 text-slate-600 dark:text-slate-300"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono text-[11px] text-slate-600 dark:text-slate-300 px-1 min-w-[2.8rem] text-center">
                  {zoomLevel}%
                </span>
                <button
                  onClick={handleZoomIn}
                  title="Zoom In"
                  className="p-1 rounded hover:bg-white dark:hover:bg-emerald-900/60 text-slate-600 dark:text-slate-300"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleResetZoom}
                  title="Reset to 100%"
                  className="p-1 rounded hover:bg-white dark:hover:bg-emerald-900/60 text-slate-400 hover:text-slate-700"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Main Content Area - Scrollable with NO flex clipping */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto overscroll-contain bg-slate-100/70 dark:bg-[#07110C] p-3 sm:p-6 focus:outline-none"
        >
          {/* TAB 1: Visual Page Preview */}
          {activeTab === 'preview' && (
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-6 pb-28">
              {document.previewPages.length > 0 ? (
                viewMode === 'continuous' ? (
                  /* Continuous Scroll Mode: All pages rendered sequentially */
                  document.previewPages.map((pageSrc, idx) => (
                    <div
                      key={idx}
                      id={`doc-page-${idx}`}
                      className="w-full flex flex-col items-center"
                    >
                      {/* Page Header Indicator */}
                      <div className="w-full flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono py-1 px-1 mb-1">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          Page {idx + 1} of {totalPages}
                        </span>
                        <span className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-900/40">
                          Verified Document Page
                        </span>
                      </div>

                      {/* Page Render Container */}
                      <div
                        className="transition-all origin-top shadow-xl border border-slate-300 dark:border-emerald-950 rounded-xl overflow-hidden bg-white max-w-full"
                        style={{
                          width: `${Math.max(40, Math.min(200, zoomLevel))}%`,
                          maxWidth: zoomLevel <= 100 ? '100%' : 'none'
                        }}
                      >
                        <img
                          src={pageSrc}
                          alt={`${document.title} - Page ${idx + 1}`}
                          className="w-full h-auto object-contain select-none block"
                          loading={idx === 0 ? 'eager' : 'lazy'}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  /* Single Page Mode */
                  <div className="w-full flex flex-col items-center">
                    <div className="w-full flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono py-1 px-1 mb-1">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        Page {currentPage + 1} of {totalPages}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-900/40">
                        Verified Document Page
                      </span>
                    </div>

                    <div
                      className="transition-all origin-top shadow-xl border border-slate-300 dark:border-emerald-950 rounded-xl overflow-hidden bg-white max-w-full"
                      style={{
                        width: `${Math.max(40, Math.min(200, zoomLevel))}%`,
                        maxWidth: zoomLevel <= 100 ? '100%' : 'none'
                      }}
                    >
                      <img
                        src={document.previewPages[currentPage] || document.previewPages[0]}
                        alt={`${document.title} - Page ${currentPage + 1}`}
                        className="w-full h-auto object-contain select-none block"
                        loading="eager"
                      />
                    </div>

                    {/* Thumbnail Strip in Single Mode */}
                    {document.previewPages.length > 1 && (
                      <div className="mt-6 flex items-center gap-2 p-2 bg-white/90 dark:bg-[#0E1D16]/90 backdrop-blur-xs border border-slate-200 dark:border-emerald-950 rounded-xl overflow-x-auto max-w-full">
                        {document.previewPages.map((pageSrc, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentPage(idx)}
                            className={`relative shrink-0 w-12 h-16 rounded-md overflow-hidden border-2 transition-all ${
                              currentPage === idx
                                ? 'border-emerald-600 ring-2 ring-emerald-500/30 scale-105'
                                : 'border-slate-200 dark:border-emerald-900/40 opacity-70 hover:opacity-100'
                            }`}
                          >
                            <img src={pageSrc} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                            <span className="absolute bottom-0 right-0 bg-black/75 text-white text-[9px] px-1 font-mono">
                              {idx + 1}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )
              ) : isExcel ? (
                /* Dedicated Excel Preview Card with direct access to interactive sheets */
                <div className="max-w-xl mx-auto my-8 p-8 bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-900/40 rounded-2xl text-center shadow-lg">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <FileSpreadsheet className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {document.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    This file is in <strong>Microsoft Excel (.xlsx)</strong> format ({document.originalFilename}). You can download the verified original workbook or explore its live interactive tables inside the <strong>Resources & Datasets</strong> tab.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a
                      href={document.filePath}
                      download={document.downloadFilename}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-xs"
                    >
                      <Download className="w-4 h-4" />
                      Download {document.originalFilename}
                    </a>
                  </div>
                </div>
              ) : (
                /* Fallback for files without preview images */
                <div className="max-w-xl mx-auto my-8 p-8 bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-900/40 rounded-2xl text-center shadow-lg">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <FileCode className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {document.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    Format: {document.fileType} ({document.originalFilename}). You can download the verified original file or explore the findings tab.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a
                      href={document.filePath}
                      download={document.downloadFilename}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-xs"
                    >
                      <Download className="w-4 h-4" />
                      Download File
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Academic Analysis & Findings */}
          {activeTab === 'details' && (
            <div className="w-full max-w-4xl mx-auto bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 shadow-md space-y-6 pb-28">
              <div>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                  Academic Overview & Scope
                </span>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {document.title}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {document.description}
                </p>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 p-4 bg-slate-50 dark:bg-emerald-950/20 rounded-xl border border-slate-200/60 dark:border-emerald-900/30 text-xs">
                <div>
                  <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Authorship
                  </div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    {document.authors.join(', ')}
                  </div>
                  {document.collaborative && (
                    <div className="text-[10px] text-amber-700 dark:text-amber-400 mt-0.5 font-medium">
                      {document.collaborationDetails}
                    </div>
                  )}
                </div>

                <div>
                  <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Academic Domain
                  </div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    {document.projectDomain}
                  </div>
                </div>

                <div>
                  <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Academic Term
                  </div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    {document.submissionDate || `Academic Year ${STUDENT_PROFILE.academicYear}`}
                  </div>
                </div>
              </div>

              {/* Key Findings List */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Key Research Findings & Empirical Results
                </h4>
                <div className="space-y-2.5">
                  {document.keyFindings.map((finding, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100/80 dark:border-emerald-900/30 flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-700 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                        {finding}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-slate-100 dark:border-emerald-950/40 flex items-center gap-2 flex-wrap">
                <Tag className="w-3.5 h-3.5 text-slate-400" />
                {document.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-emerald-950/50 text-slate-600 dark:text-emerald-300 border border-slate-200 dark:border-emerald-900/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Native Embedded PDF / HTML Viewer */}
          {activeTab === 'native' && (
            <div className="w-full max-w-5xl mx-auto h-[80vh] min-h-[600px] bg-white rounded-xl shadow-lg border border-slate-200 dark:border-emerald-950 overflow-hidden mb-12">
              {isPdf ? (
                <object
                  data={document.filePath}
                  type="application/pdf"
                  className="w-full h-full min-h-[600px]"
                >
                  <iframe
                    src={document.filePath}
                    title={document.title}
                    className="w-full h-full min-h-[600px] border-0"
                  />
                </object>
              ) : isHtml ? (
                <iframe
                  src={document.filePath}
                  title={document.title}
                  className="w-full h-full min-h-[600px] border-0"
                />
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
