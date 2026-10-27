import React, { useEffect } from 'react';
import { X, MapPin, Users, Scale, CheckCircle2, AlertTriangle, Building2, Radio } from 'lucide-react';
import { DistrictData } from '../data/sikkimData';

interface DistrictModalProps {
  district: DistrictData | null;
  onClose: () => void;
}

export const DistrictModal: React.FC<DistrictModalProps> = ({ district, onClose }) => {
  // Prevent background scroll when modal is active
  useEffect(() => {
    if (!district) return;
    const originalOverflow = window.document.body.style.overflow;
    window.document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [district, onClose]);

  if (!district) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header - Fixed */}
        <div className="shrink-0 px-6 py-4 border-b border-slate-100 dark:border-emerald-950/60 flex items-center justify-between bg-slate-50/50 dark:bg-[#0E1D16]/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase font-bold text-emerald-700 dark:text-emerald-400 tracking-wider">
                Sikkim District Profile
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {district.district} District
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-emerald-950/50 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body - Scrollable */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-6 space-y-5">
          {/* Remarks Banner */}
          <div className="p-3.5 bg-slate-50 dark:bg-emerald-950/30 rounded-xl border border-slate-200/60 dark:border-emerald-900/40 text-xs text-slate-700 dark:text-slate-300">
            <span className="font-semibold text-emerald-800 dark:text-emerald-300">SPCB Assessment Note: </span>
            {district.remarks}
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-50 dark:bg-emerald-950/20 rounded-xl border border-slate-100 dark:border-emerald-900/30">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Population</div>
              <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                {district.population.toLocaleString()}
              </div>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-emerald-950/20 rounded-xl border border-slate-100 dark:border-emerald-900/30">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Generated</div>
              <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                {(district.total / 1000).toFixed(1)} t
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                {district.total.toLocaleString()} kg
              </div>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-emerald-950/20 rounded-xl border border-slate-100 dark:border-emerald-900/30">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Collected</div>
              <div className="text-base font-bold text-emerald-700 dark:text-emerald-400 mt-0.5">
                {(district.collected / 1000).toFixed(1)} t
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                {district.captureRate}% rate
              </div>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-emerald-950/20 rounded-xl border border-slate-100 dark:border-emerald-900/30">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Per Capita</div>
              <div className="text-base font-bold text-amber-700 dark:text-amber-400 mt-0.5">
                {district.perCapitaGrams} g
              </div>
              <div className="text-[10px] text-slate-400 font-mono">per person</div>
            </div>
          </div>

          {/* Category-wise Generation Breakup */}
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300 tracking-wider mb-2.5">
              Category-Wise Generation Breakdown (Schedule I)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-2.5 rounded-lg border border-slate-200/60 dark:border-emerald-900/40 bg-white dark:bg-[#0E1D16]">
                <div className="text-[11px] text-slate-500">Large & Small Eqpt.</div>
                <div className="font-bold text-slate-900 dark:text-white">{district.large.toLocaleString()} kg</div>
              </div>
              <div className="p-2.5 rounded-lg border border-slate-200/60 dark:border-emerald-900/40 bg-white dark:bg-[#0E1D16]">
                <div className="text-[11px] text-slate-500">IT & Telecom</div>
                <div className="font-bold text-slate-900 dark:text-white">{district.it.toLocaleString()} kg</div>
              </div>
              <div className="p-2.5 rounded-lg border border-slate-200/60 dark:border-emerald-900/40 bg-white dark:bg-[#0E1D16]">
                <div className="text-[11px] text-slate-500">Consumer Electronics</div>
                <div className="font-bold text-slate-900 dark:text-white">{district.con.toLocaleString()} kg</div>
              </div>
              <div className="p-2.5 rounded-lg border border-slate-200/60 dark:border-emerald-900/40 bg-white dark:bg-[#0E1D16]">
                <div className="text-[11px] text-slate-500">Batteries</div>
                <div className="font-bold text-slate-900 dark:text-white">{district.bat.toLocaleString()} kg</div>
              </div>
              <div className="p-2.5 rounded-lg border border-slate-200/60 dark:border-emerald-900/40 bg-white dark:bg-[#0E1D16]">
                <div className="text-[11px] text-slate-500">Lighting Equipment</div>
                <div className="font-bold text-slate-900 dark:text-white">{district.light.toLocaleString()} kg</div>
              </div>
              <div className="p-2.5 rounded-lg border border-slate-200/60 dark:border-emerald-900/40 bg-white dark:bg-[#0E1D16]">
                <div className="text-[11px] text-slate-500">Other WEEE</div>
                <div className="font-bold text-slate-900 dark:text-white">{district.other.toLocaleString()} kg</div>
              </div>
            </div>
          </div>

          {/* Infrastructure & Status Badges */}
          <div className="pt-3 border-t border-slate-100 dark:border-emerald-950/60 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                <Building2 className="w-4 h-4 text-emerald-600" />
                Collection Centers: <strong>{district.centers}</strong>
              </span>

              <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                <Scale className="w-4 h-4 text-emerald-600" />
                EPR Target: <strong>{district.eprAchieved} / {district.eprTarget} kg ({district.eprRate}%)</strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium ${
                  district.recyclerPresent
                    ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                    : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
                }`}
              >
                {district.recyclerPresent ? '✓ Authorized Recycler Present' : '⚠ No Recycler Facility'}
              </span>

              <span
                className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium ${
                  district.awarenessConducted
                    ? 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300'
                    : 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'
                }`}
              >
                {district.awarenessConducted ? '✓ Awareness Reached' : '⚠ Awareness Pending'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
