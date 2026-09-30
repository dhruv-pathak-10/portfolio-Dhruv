"use client";

import { useState } from "react";
import { THINKING_STAGES } from "@/data/portfolioData";
import { ChevronDown, Sparkles, Check, HelpCircle, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ThinkingFramework() {
  const [expandedStage, setExpandedStage] = useState<string>("01");

  return (
    <section id="thinking" className="py-24 md:py-32 relative bg-[#080A0F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest bg-white/[0.04] border border-white/10 text-[#4F7CFF] mb-4">
              <span>SECTION 03</span>
              <span className="text-white/20">•</span>
              <span>METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
              HOW I THINK
            </h2>
            <p className="mt-3 text-lg sm:text-xl font-mono text-[#8B93A3]">
              AI adoption starts with diagnosis, not technology.
            </p>
          </div>

          <Link
            href="/methodology"
            data-cursor="READ"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#4F7CFF] hover:text-white transition-colors"
          >
            <span>View Full 7-Step Adoption Lifecycle</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5 Interactive Accordion / Expander Stages */}
        <div className="space-y-4">
          {THINKING_STAGES.map((stage) => {
            const isExpanded = expandedStage === stage.stage;

            return (
              <div
                key={stage.stage}
                onClick={() => setExpandedStage(isExpanded ? "" : stage.stage)}
                data-cursor="EXPAND"
                className={`rounded-2xl transition-all duration-300 border cursor-pointer overflow-hidden ${
                  isExpanded
                    ? "bg-[#0E121B] border-[#4F7CFF] shadow-[0_0_30px_rgba(79,124,255,0.15)]"
                    : "bg-[#0E121B]/40 border-white/[0.08] hover:border-white/20 hover:bg-[#0E121B]/70"
                }`}
              >
                {/* Header row */}
                <div className="p-6 md:p-8 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 md:gap-8">
                    <span
                      className={`text-xl md:text-3xl font-mono font-bold transition-colors ${
                        isExpanded ? "text-[#4F7CFF]" : "text-[#8B93A3]"
                      }`}
                    >
                      {stage.stage}
                    </span>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold tracking-tight text-white flex items-center gap-3">
                        {stage.title}
                        {isExpanded && (
                          <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-mono tracking-widest bg-[#4F7CFF]/15 text-[#4F7CFF] border border-[#4F7CFF]/30">
                            ACTIVE
                          </span>
                        )}
                      </h3>
                      <p className="text-xs md:text-sm text-[#8B93A3] mt-0.5 font-sans">
                        {stage.headline}
                      </p>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#8B93A3] group-hover:text-white transition-colors shrink-0">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? "rotate-180 text-[#4F7CFF]" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-8 md:px-8 pt-0 border-t border-white/[0.06] mt-2 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                      {/* Summary */}
                      <div className="md:col-span-1">
                        <span className="text-[11px] font-mono tracking-widest text-[#4F7CFF] uppercase font-semibold">
                          Executive Perspective
                        </span>
                        <p className="mt-2 text-sm text-[#F5F7FA]/90 leading-relaxed font-sans">
                          {stage.summary}
                        </p>
                      </div>

                      {/* Diagnostic Questions */}
                      <div className="md:col-span-1">
                        <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#8B93A3] uppercase font-semibold">
                          <HelpCircle className="w-3.5 h-3.5 text-[#4F7CFF]" />
                          <span>Diagnostic Questions I Ask</span>
                        </div>
                        <ul className="mt-2 space-y-2">
                          {stage.keyQuestions.map((q, idx) => (
                            <li key={idx} className="text-xs text-[#8B93A3] flex items-start gap-2">
                              <span className="text-[#4F7CFF] font-mono font-bold">•</span>
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tangible Deliverable */}
                      <div className="md:col-span-1 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                          <FileText className="w-3.5 h-3.5" />
                          <span>Operational Deliverable</span>
                        </div>
                        <p className="mt-2 text-xs font-mono text-[#F5F7FA]">
                          {stage.deliverables}
                        </p>
                        <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-[#8B93A3]">
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>Grounded in frontline adoption</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
