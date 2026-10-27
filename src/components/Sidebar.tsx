import React from 'react';
import {
  LayoutDashboard,
  FileText,
  Layers,
  BarChart3,
  BookOpen,
  Presentation,
  Database,
  UserCheck,
  Leaf,
  ChevronRight,
  GraduationCap,
  ExternalLink
} from 'lucide-react';
import { STUDENT_PROFILE } from '../data/assignmentsData';

export type TabType =
  | 'overview'
  | 'assignments'
  | 'projects'
  | 'analytics'
  | 'research'
  | 'presentations'
  | 'resources'
  | 'about';

interface SidebarProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  isOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  onSelectTab,
  isOpen,
  onCloseMobile
}) => {
  const navItems: { id: TabType; label: string; icon: React.FC<{ className?: string }>; badge?: string }[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'assignments', label: 'My Assignments', icon: FileText, badge: '14' },
    { id: 'projects', label: 'E-Waste Projects', icon: Layers, badge: '5' },
    { id: 'analytics', label: 'Data Analytics', icon: BarChart3, badge: 'SPCB' },
    { id: 'research', label: 'Research & Reports', icon: BookOpen, badge: 'IEEE' },
    { id: 'presentations', label: 'Presentations & Posters', icon: Presentation },
    { id: 'resources', label: 'Resources & Datasets', icon: Database },
    { id: 'about', label: 'About Me', icon: UserCheck }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-white dark:bg-[#0E1D16] border-r border-slate-200 dark:border-emerald-950/60 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand / Logo Header */}
        <div className="p-5 border-b border-slate-100 dark:border-emerald-950/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-[#143D2B] flex items-center justify-center text-white shadow-md shadow-emerald-900/20">
              <Leaf className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider text-emerald-700 dark:text-emerald-400 uppercase">
                Academic Dashboard
              </div>
              <h1 className="text-base font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                E-Waste & Sustainability
              </h1>
            </div>
          </div>
        </div>

        {/* Student Quick Profile Card in Sidebar */}
        <div className="px-4 py-3 mx-3 my-3 bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 rounded-xl">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
              YP
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                {STUDENT_PROFILE.name}
              </div>
              <div className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
                {STUDENT_PROFILE.rollNumber} • {STUDENT_PROFILE.branch.split(' ')[0]}
              </div>
            </div>
          </div>
          <div className="mt-2 text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="truncate">Vidyalankar Inst. of Tech.</span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  onCloseMobile();
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all group ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-900/20 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-emerald-950/40 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {item.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-medium ${
                        isActive
                          ? 'bg-emerald-800 text-emerald-100'
                          : 'bg-slate-200/80 dark:bg-emerald-900/40 text-slate-600 dark:text-emerald-300'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                  {isActive && <ChevronRight className="w-3.5 h-3.5 text-emerald-200" />}
                </div>
              </button>
            );
          })}
        </nav>

        {/* Academic Institutional Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-emerald-950/40 bg-slate-50/50 dark:bg-[#0A1610]">
          <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
            Vidyalankar Institute of Technology
          </div>
          <div className="text-[10px] text-slate-400 mt-0.5">
            Dept. of Computer Engineering • Mumbai
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-200/60 dark:border-emerald-900/30 flex items-center justify-between text-[10px] text-emerald-600 dark:text-emerald-400">
            <span>Faculty Review Portal</span>
            <span className="flex items-center gap-1 font-mono">
              v1.0 <ExternalLink className="w-2.5 h-2.5" />
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};
