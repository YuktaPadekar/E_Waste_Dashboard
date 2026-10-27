import React from 'react';
import {
  GraduationCap,
  ShieldCheck,
  Award,
  Users,
  BookOpen,
  FileCheck2,
  Mail,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { STUDENT_PROFILE, ASSIGNMENT_CATALOGUE } from '../data/assignmentsData';

export const AboutMeView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-5xl mx-auto">
      {/* Student Profile Card */}
      <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-emerald-600 via-[#143D2B] to-slate-900 text-white flex items-center justify-center font-extrabold text-2xl sm:text-3xl shadow-xl shadow-emerald-950/20 shrink-0">
            YP
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Authentic Student Profile</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {STUDENT_PROFILE.name}
            </h1>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-medium text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1 font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                Roll No: {STUDENT_PROFILE.rollNumber}
              </span>
              <span>•</span>
              <span>Branch: <strong>{STUDENT_PROFILE.branch}</strong></span>
              <span>•</span>
              <span>Class: <strong>{STUDENT_PROFILE.classGroup}</strong></span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
              <GraduationCap className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{STUDENT_PROFILE.institute}</span>
            </div>
          </div>
        </div>

        {/* Profile Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100 dark:border-emerald-950/60 text-xs">
          <div className="p-3.5 bg-slate-50 dark:bg-[#07110C] rounded-2xl border border-slate-100 dark:border-emerald-950/40">
            <div className="text-[10px] text-slate-400 uppercase font-semibold">Primary Academic Domain</div>
            <div className="font-bold text-slate-900 dark:text-white mt-1">
              E-Waste Management & Sustainability
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-[#07110C] rounded-2xl border border-slate-100 dark:border-emerald-950/40">
            <div className="text-[10px] text-slate-400 uppercase font-semibold">Academic Term</div>
            <div className="font-bold text-slate-900 dark:text-white mt-1 font-mono">
              Academic Year {STUDENT_PROFILE.academicYear}
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-[#07110C] rounded-2xl border border-slate-100 dark:border-emerald-950/40">
            <div className="text-[10px] text-slate-400 uppercase font-semibold">Verified Portfolio Works</div>
            <div className="font-bold text-emerald-700 dark:text-emerald-400 mt-1 font-mono">
              14 Academic Deliverables
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-[#07110C] rounded-2xl border border-slate-100 dark:border-emerald-950/40">
            <div className="text-[10px] text-slate-400 uppercase font-semibold">Institutional Affiliation</div>
            <div className="font-bold text-slate-900 dark:text-white mt-1">
              University of Mumbai (AICTE)
            </div>
          </div>
        </div>
      </div>

      {/* Academic Project Interests */}
      <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-emerald-600" />
          Academic Project Interests & Research Specializations
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          My academic engineering focus centers on bridging Computer Engineering methods (data analytics, IoT sensor architectures, and machine learning) with environmental sustainability and hazardous materials tracking. Key areas of academic exploration include:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 space-y-1.5 text-xs">
            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Sub-National Environmental Informatics
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Analyzing spatial disparities in e-waste generation, collection infrastructure, and formal recycling capacities across non-industrial and mountainous Indian states using SPCB regulatory datasets.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 space-y-1.5 text-xs">
            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              AI & Smart Hardware Reverse Logistics
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Conceptualizing automated reverse-vending kiosks (E-Bin) leveraging computer vision and edge neural networks for point-of-deposit e-waste identification and automated closed-loop routing.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/30 space-y-1.5 text-xs">
            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-600" />
              Operations Research & Multi-Criteria Modeling
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Employing Analytic Hierarchy Process (AHP) and Interpretive Structural Modeling (ISM) to prioritize barrier criteria and decipher root-cause regulatory constraints in Indian e-waste governance.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 space-y-1.5 text-xs">
            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              Institutional Carbon Accounting
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Modeling institutional greenhouse gas inventories across Scope 1 (direct combustion, refrigerants), Scope 2 (purchased electricity), and Scope 3 (water, procurement, travel) with verified offset accounting.
            </p>
          </div>
        </div>
      </div>

      {/* Authorship & Collaboration Declaration */}
      <div className="bg-white dark:bg-[#12241C] border border-slate-200 dark:border-emerald-950 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
          <Users className="w-4 h-4 text-emerald-600" />
          Academic Integrity & Authorship Declaration
        </h3>
        <div className="p-4 bg-slate-50 dark:bg-[#07110C] rounded-2xl border border-slate-200/60 dark:border-emerald-950/40 text-xs text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
          <p>
            This personal academic dashboard belongs solely to <strong>Yukta Padekar (Roll Number: 24102C0038)</strong>. In strict compliance with academic integrity standards:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
            <li>
              <strong>Collaborative Work:</strong> The IEEE Research Paper (<em>"E-waste It Wisely at the Sub-National Level..."</em>) and its corresponding Executive Presentation Deck are joint collaborative works authored by <strong>Tanmay Lalge</strong> and <strong>Yukta Padekar</strong>, Vidyalankar Institute of Technology. Contributor credits are explicitly preserved on all document links and slides.
            </li>
            <li>
              <strong>Individual Deliverables:</strong> All other assignments, including the E-Bin Smart ATM project, the Automated Laser + Molten Salt PCB Extraction poster, the AHP/ISM study, the Electronics Manufacturers regulatory analysis, handwritten class activities, and the Institutional Carbon Footprint calculator (<code>24102C0038.xlsx</code>), represent Yukta Padekar’s individual submissions.
            </li>
            <li>
              <strong>Non-E-Waste Research:</strong> The technical paper review (<em>"Recurrent Neural Networks Meet Context-Free Grammar"</em>) is maintained under a distinct <em>"Other Academic Research"</em> section to prevent disciplinary misclassification.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
