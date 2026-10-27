import React, { useState, useEffect } from 'react';
import { Sidebar, TabType } from './components/Sidebar';
import { Header } from './components/Header';
import { DocumentModal } from './components/DocumentModal';
import { OverviewView } from './views/OverviewView';
import { AssignmentsView } from './views/AssignmentsView';
import { ProjectsView } from './views/ProjectsView';
import { DataAnalyticsView } from './views/DataAnalyticsView';
import { ResearchReportsView } from './views/ResearchReportsView';
import { PresentationsPostersView } from './views/PresentationsPostersView';
import { ResourcesView } from './views/ResourcesView';
import { AboutMeView } from './views/AboutMeView';
import { DocumentItem } from './data/assignmentsData';

export function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('overview');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Sync dark mode class on root HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleSelectDocument = (doc: DocumentItem) => {
    setSelectedDoc(doc);
  };

  const handleCloseModal = () => {
    setSelectedDoc(null);
  };

  const renderActiveView = () => {
    switch (currentTab) {
      case 'overview':
        return (
          <OverviewView
            onSelectDocument={handleSelectDocument}
            onNavigateTab={(tab) => setCurrentTab(tab)}
          />
        );
      case 'assignments':
        return (
          <AssignmentsView
            onSelectDocument={handleSelectDocument}
            externalSearchQuery={searchQuery}
          />
        );
      case 'projects':
        return <ProjectsView onSelectDocument={handleSelectDocument} />;
      case 'analytics':
        return <DataAnalyticsView />;
      case 'research':
        return <ResearchReportsView onSelectDocument={handleSelectDocument} />;
      case 'presentations':
        return <PresentationsPostersView onSelectDocument={handleSelectDocument} />;
      case 'resources':
        return <ResourcesView />;
      case 'about':
        return <AboutMeView />;
      default:
        return (
          <OverviewView
            onSelectDocument={handleSelectDocument}
            onNavigateTab={(tab) => setCurrentTab(tab)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] dark:bg-[#08130E] text-slate-900 dark:text-slate-100 flex flex-col antialiased">
      {/* Sidebar Navigation */}
      <Sidebar
        currentTab={currentTab}
        onSelectTab={(tab) => setCurrentTab(tab)}
        isOpen={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <div className="lg:pl-72 flex-1 flex flex-col min-w-0">
        {/* Header Bar */}
        <Header
          currentTab={currentTab}
          searchQuery={searchQuery}
          onSearchChange={(q) => setSearchQuery(q)}
          darkMode={darkMode}
          onToggleDarkMode={handleToggleDarkMode}
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
          onQuickNavigate={(tab) => setCurrentTab(tab)}
        />

        {/* View Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {renderActiveView()}
        </main>

        {/* Footer */}
        <footer className="px-6 py-4 border-t border-slate-200/80 dark:border-emerald-950/60 bg-white/50 dark:bg-[#0A1610]/50 text-center text-xs text-slate-500">
          <p>
            Yukta Padekar • Roll Number: <strong>24102C0038</strong> • CMPN-C • Vidyalankar Institute of Technology, Mumbai
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Academic Project Domain: E-Waste Management & Environmental Sustainability • Academic Year 2026–2027
          </p>
        </footer>
      </div>

      {/* Global Document Reader & Preview Modal */}
      <DocumentModal document={selectedDoc} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
