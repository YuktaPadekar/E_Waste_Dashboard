import React, { useState } from 'react';
import { Table, Download, Search, FileSpreadsheet, Info, Check } from 'lucide-react';
import { SIKKIM_TRACKER_SHEETS } from '../data/trackerSheetsData';

export const ExcelSheetViewer: React.FC = () => {
  const sheetKeys = Object.keys(SIKKIM_TRACKER_SHEETS);
  const [activeSheet, setActiveSheet] = useState<string>('1_Generation_Inventory');
  const [filterText, setFilterText] = useState<string>('');

  const currentRows = SIKKIM_TRACKER_SHEETS[activeSheet] || [];

  // Sheet friendly names
  const getSheetLabel = (key: string) => {
    switch (key) {
      case '0_Scorecard':
        return 'Scorecard (100 Pts)';
      case 'Instructions':
        return 'Methodology';
      case '1_Generation_Inventory':
        return '1. Generation Inventory';
      case '2_Collection_Log':
        return '2. Collection Log';
      case '3_Recycling_Infrastructure':
        return '3. Recycling Infrastructure';
      case '4_Compliance_Tracker':
        return '4. Producer Compliance (EPR)';
      case '5_Informal_Sector_Hotspots':
        return '5. Informal Hotspots';
      case '6_Env_Health_Monitoring':
        return '6. Env Health Monitoring';
      case '7_Awareness_Programs':
        return '7. Awareness Campaigns';
      default:
        return key;
    }
  };

  const filteredRows = currentRows.filter((row) => {
    if (!filterText.trim()) return true;
    return row.some((cell) => cell.toLowerCase().includes(filterText.toLowerCase()));
  });

  return (
    <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl shadow-md overflow-hidden">
      {/* Top Banner */}
      <div className="px-5 py-4 border-b border-slate-200 dark:border-emerald-950/60 bg-slate-50/80 dark:bg-[#0B1712] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-xs">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                State E-Waste Management Tracker — Interactive Workbook Viewer
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold">
                8 Sheets
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Source file: <code className="font-mono text-emerald-700 dark:text-emerald-400">State_EWaste_Tracker_Completed_Fixed.xlsx</code> (41.8 KB)
            </p>
          </div>
        </div>

        {/* Download original button */}
        <a
          href="/datasets/State_EWaste_Tracker_Completed_Fixed.xlsx"
          download="State_EWaste_Tracker_Completed_Fixed.xlsx"
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Original Excel (.xlsx)
        </a>
      </div>

      {/* Sheet Tabs Bar */}
      <div className="px-4 py-2.5 bg-slate-100/70 dark:bg-[#07110C] border-b border-slate-200/80 dark:border-emerald-950/60 flex items-center gap-1.5 overflow-x-auto text-xs">
        {sheetKeys.map((key) => (
          <button
            key={key}
            onClick={() => {
              setActiveSheet(key);
              setFilterText('');
            }}
            className={`px-3 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all ${
              activeSheet === key
                ? 'bg-emerald-700 text-white shadow-xs font-semibold'
                : 'bg-white dark:bg-[#12241C] text-slate-600 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-emerald-950/50 border border-slate-200/60 dark:border-emerald-900/30'
            }`}
          >
            {getSheetLabel(key)}
          </button>
        ))}
      </div>

      {/* Filter and Table Tools */}
      <div className="p-3.5 border-b border-slate-100 dark:border-emerald-950/40 flex items-center justify-between gap-3 text-xs">
        <div className="relative flex-1 max-w-xs">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Filter current sheet rows..."
            className="w-full pl-8 pr-3 py-1 bg-slate-50 dark:bg-emerald-950/20 border border-slate-200 dark:border-emerald-900/40 rounded-lg text-slate-800 dark:text-slate-200 placeholder-slate-400 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />
        </div>
        <div className="text-[11px] text-slate-500 font-mono">
          Showing {filteredRows.length} rows in {activeSheet}
        </div>
      </div>

      {/* Spreadsheet Table Body */}
      <div className="overflow-x-auto max-h-[500px]">
        <table className="w-full text-left text-xs border-collapse">
          <tbody>
            {filteredRows.map((row, rowIdx) => {
              const isHeader = rowIdx === 2 || (rowIdx === 0 && row.length > 3);
              const isTemplateRow = row.some((c) => c === 'District A' || c.includes('GreenTech') || c.includes('ABC Electronics'));
              const isTotalRow = row.some((c) => c.includes('TOTAL') || c.includes('State total'));

              return (
                <tr
                  key={rowIdx}
                  className={`border-b border-slate-100 dark:border-emerald-950/40 transition-colors ${
                    isHeader
                      ? 'bg-slate-100/90 dark:bg-emerald-950/50 font-bold text-slate-900 dark:text-white sticky top-0 z-10'
                      : isTotalRow
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 font-bold text-emerald-900 dark:text-emerald-200'
                      : isTemplateRow
                      ? 'bg-amber-50/40 dark:bg-amber-950/10 text-slate-500 italic'
                      : 'hover:bg-slate-50/80 dark:hover:bg-emerald-950/20 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <td className="p-2.5 font-mono text-[10px] text-slate-400 bg-slate-50/50 dark:bg-emerald-950/30 border-r border-slate-200/50 select-none w-10 text-center">
                    {rowIdx + 1}
                  </td>
                  {row.map((cell, colIdx) => (
                    <td
                      key={colIdx}
                      className={`p-2.5 whitespace-nowrap border-r border-slate-100/70 dark:border-emerald-950/30 font-medium ${
                        colIdx === 1 ? 'font-semibold text-slate-900 dark:text-white' : ''
                      }`}
                    >
                      {cell}
                      {cell === 'District A' && (
                        <span className="ml-2 text-[9px] px-1 py-0.2 rounded bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 not-italic font-normal">
                          SPCB Template Benchmark
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <div className="p-3 bg-slate-50 dark:bg-[#0E1D16] border-t border-slate-100 dark:border-emerald-950/40 text-[11px] text-slate-500 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-emerald-600" />
          <span>Calculations performed under E-Waste (Management) Rules, 2022 Schedule I. District A serves as the baseline template.</span>
        </div>
        <span className="font-mono text-emerald-700 dark:text-emerald-400 font-semibold">SPCB Verified</span>
      </div>
    </div>
  );
};
