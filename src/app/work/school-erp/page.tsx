import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import CustomCursor from "@/components/CustomCursor";
import Link from "next/link";
import { CASE_STUDIES } from "@/data/portfolioData";
import { ArrowLeft, CheckCircle2, Cpu, Database, ShieldCheck, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: Full-Lifecycle Institutional ERP Architecture",
  description:
    "End-to-end SDLC ownership: requirements gathering, relational data modeling, role-based portals, and production deployment for 500+ institutional users.",
};

export default function SchoolErpCaseStudyPage() {
  const study = CASE_STUDIES.find((c) => c.slug === "school-erp")!;

  return (
    <main className="min-h-screen bg-[#080A0F] text-[#F5F7FA]">
      <CustomCursor />
      <Navbar />

      <article className="pt-36 pb-20 px-6 md:px-10 max-w-5xl mx-auto">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#8B93A3] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Case Studies</span>
        </Link>

        {/* Header */}
        <div className="space-y-4 mb-12 pb-8 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono font-bold text-white/60">
              CASE STUDY 04 · FULL-LIFECYCLE SDLC
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs font-mono text-emerald-400 font-semibold">
              {study.headlineMetric} {study.metricLabel}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            {study.title}
          </h1>

          <p className="text-lg font-mono text-[#8B93A3]">
            {study.subtitle}
          </p>

          <div className="pt-4 flex flex-wrap gap-2">
            {study.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/10 text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Narrative */}
        <div className="space-y-12 text-sm sm:text-base text-[#8B93A3] leading-relaxed">
          <div className="p-8 rounded-2xl bg-[#0E121B] border border-white/[0.08]">
            <h2 className="text-xl font-mono font-bold text-white mb-3">
              Institutional Context &amp; Paper-Based Inefficiency
            </h2>
            <p className="mb-4">
              A private educational institution in Morbi, Gujarat was running daily attendance,
              grade reporting, parent notifications, and academic scheduling across manual paper
              binders and disconnected spreadsheets. During midterm evaluations, administrative
              staff faced days of manual data reconciliation.
            </p>
            <p>
              This engagement served as end-to-end evidence of full product delivery: translating
              fragmented real-world operations into a resilient software architecture embraced by
              non-technical daily users.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-mono font-bold text-white mb-6">
              Complete Delivery Lifecycle
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {study.flowSteps.map((step, idx) => (
                <div
                  key={step.label}
                  className="p-5 rounded-xl bg-[#0E121B] border border-white/[0.06]"
                >
                  <span className="text-xs font-mono font-bold text-[#4F7CFF] block mb-1">
                    STAGE 0{idx + 1}
                  </span>
                  <h3 className="text-sm font-bold text-white font-mono mb-2">
                    {step.label}
                  </h3>
                  <p className="text-xs text-[#8B93A3] font-sans">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0E121B] border border-white/[0.08]">
            <h2 className="text-xl font-mono font-bold text-white mb-4">
              Architecture &amp; Role-Based Governance
            </h2>
            <ul className="space-y-3">
              {study.architecturePoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                  <Database className="w-4 h-4 text-[#4F7CFF] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-950/20 to-[#0E121B] border border-emerald-500/30">
            <h2 className="text-xl font-mono font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Proven Outcomes</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {study.businessImpact.map((impact, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono text-[#F5F7FA]"
                >
                  {impact}
                </div>
              ))}
            </div>
            <p className="text-xs font-mono text-emerald-300 italic border-t border-emerald-500/20 pt-4">
              &ldquo;{study.quote}&rdquo;
            </p>
          </div>
        </div>
      </article>

      <FinalCTA />
    </main>
  );
}
