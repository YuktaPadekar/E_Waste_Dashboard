import React from 'react';
import {
  Menu,
  Search,
  Sun,
  Moon,
  ShieldCheck,
  DownloadCloud,
  FileCheck2
} from 'lucide-react';
import { STUDENT_PROFILE } from '../data/assignmentsData';
import { TabType } from './Sidebar';

interface HeaderProps {
  currentTab: TabType;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenMobileMenu: () => void;
  onQuickNavigate: (tab: TabType) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  searchQuery,
  onSearchChange,
  darkMode,
  onToggleDarkMode,
  onOpenMobileMenu,
  onQuickNavigate
}) => {
  const getSectionTitle = (tab: TabType) => {
    switch (tab) {
      case 'overview':
        return { title: 'Academic Overview & Summary', subtitle: 'Academic Portfolio & E-Waste Research Metrics' };
      case 'assignments':
        return { title: 'My Assignments & Submissions', subtitle: 'Searchable catalogue of verified academic deliverables' };
      case 'projects':
        return { title: 'E-Waste Major Projects', subtitle: 'Deep dives into engineering methodologies and empirical studies' };
      case 'analytics':
        return { title: 'Interactive Data Analytics', subtitle: 'Sikkim SPCB District E-Waste & Institutional Carbon Audits' };
      case 'research':
        return { title: 'Research Papers & Technical Reports', subtitle: 'IEEE-format publications, models, and academic reviews' };
      case 'presentations':
        return { title: 'Presentations & Technical Posters', subtitle: 'Visual innovation decks and high-resolution engineering infographics' };
      case 'resources':
        return { title: 'Master Datasets & Resources', subtitle: 'Live multi-sheet Excel workbooks and statutory regulatory frameworks' };
      case 'about':
        return { title: 'Student Academic Profile', subtitle: 'Verified coursework, credentials, and institutional affiliation' };
    }
  };

  const section = getSectionTitle(currentTab);

  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-[#0E1D16]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-emerald-950/60 px-4 lg:px-8 py-3.5 flex items-center justify-between gap-4">
      {/* Left: Mobile hamburger & Section Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="p-2 -ml-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-emerald-950/50 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-none">
              {section.title}
            </h1>
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/50">
              <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              Verified Submission
            </span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden md:block mt-0.5">
            {section.subtitle}
          </p>
        </div>
      </div>

      {/* Middle: Universal Search Bar */}
      <div className="flex-1 max-w-md hidden sm:block">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              onSearchChange(e.target.value);
              if (currentTab !== 'assignments' && e.target.value.trim().length > 0) {
                onQuickNavigate('assignments');
              }
            }}
            placeholder="Search assignments, reports, datasets, topics..."
            className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-100 dark:bg-emerald-950/40 border border-slate-200 dark:border-emerald-900/40 rounded-xl text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/40 focus:border-emerald-600 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] bg-slate-200 dark:bg-emerald-900/60 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-md hover:bg-slate-300"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Right: Student Badge, Dark Mode, Faculty Quick Links */}
      <div className="flex items-center gap-2.5">
        {/* Student Identity Pill */}
        <div className="hidden lg:flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full bg-slate-100 dark:bg-emerald-950/40 border border-slate-200 dark:border-emerald-900/40 text-xs">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {STUDENT_PROFILE.name}
          </span>
          <span className="text-slate-400 dark:text-emerald-500/60 font-mono text-[11px]">|</span>
          <span className="font-mono text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
            {STUDENT_PROFILE.rollNumber}
          </span>
          <span className="text-slate-400 dark:text-emerald-500/60 font-mono text-[11px]">|</span>
          <span className="font-mono text-[10px] uppercase font-bold text-slate-500 dark:text-emerald-300/80 bg-white dark:bg-emerald-900/40 px-2 py-0.5 rounded-full border border-slate-200 dark:border-emerald-800/50">
            AY {STUDENT_PROFILE.academicYear}
          </span>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={onToggleDarkMode}
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className="p-2 rounded-xl text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-emerald-950/50 border border-slate-200 dark:border-emerald-900/40 transition-colors"
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
        </button>

        {/* Quick Assignment Link */}
        <button
          onClick={() => onQuickNavigate('assignments')}
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs shadow-emerald-900/20 transition-all cursor-pointer"
        >
          <FileCheck2 className="w-3.5 h-3.5" />
          <span>All Files (14)</span>
        </button>
      </div>
    </header>
  );
};
