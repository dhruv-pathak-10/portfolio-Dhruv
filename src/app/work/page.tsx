import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import CustomCursor from "@/components/CustomCursor";
import Link from "next/link";
import { CASE_STUDIES } from "@/data/portfolioData";
import { ArrowRight, CheckCircle2, Cpu, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work & Systems Architecture",
  description:
    "Production-grade AI solutions, Voice AI calling agents, multi-agent business automations, and institutional ERP architectures deployed by Dhruv Pathak.",
};

export default function WorkIndexPage() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-[#F5F7FA]">
      <CustomCursor />
      <Navbar />

      <section className="pt-36 pb-20 px-6 md:px-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest bg-white/[0.04] border border-white/10 text-[#4F7CFF] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>PORTFOLIO / CASE STUDIES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            SELECTED SYSTEMS &amp; ARCHITECTURES
          </h1>

          <p className="mt-4 text-lg text-[#8B93A3] font-mono leading-relaxed">
            Every project below represents a real business bottleneck translated into a
            production deployment with defensible metrics.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-12">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="rounded-3xl bg-[#0E121B] border border-white/[0.08] p-6 sm:p-10 lg:p-12 hover:border-[#4F7CFF]/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#4F7CFF]">
                      CASE {study.number}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      {study.headlineMetric} {study.metricLabel}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {study.title}
                  </h2>

                  <p className="text-xs font-mono text-[#8B93A3]">
                    Client Context: {study.clientContext}
                  </p>

                  <p className="text-sm sm:text-base text-[#8B93A3] leading-relaxed">
                    {study.solution}
                  </p>

                  {/* Flow preview */}
                  <div className="pt-2">
                    <span className="text-[11px] font-mono tracking-widest uppercase text-[#8B93A3] block mb-2">
                      WORKFLOW TRANSFORMATION:
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                      {study.flowSteps.map((step, idx) => (
                        <span key={step.label} className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-white/90">
                            {step.label}
                          </span>
                          {idx < study.flowSteps.length - 1 && (
                            <span className="text-[#4F7CFF] text-[10px]">→</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.02] border border-white/[0.06] text-[#8B93A3]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 lg:border-l lg:border-white/[0.08] lg:pl-8">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-400 font-semibold block mb-3">
                      VERIFIED OUTCOMES:
                    </span>
                    <ul className="space-y-2 text-xs text-[#8B93A3]">
                      {study.businessImpact.slice(0, 3).map((impact, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/work/${study.slug}`}
                    data-cursor="DEEP DIVE"
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-[#4F7CFF]/15 border border-[#4F7CFF]/30 text-white text-xs font-mono font-medium hover:bg-[#4F7CFF] hover:border-[#4F7CFF] transition-all"
                  >
                    <span>Read Architecture Deep Dive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
