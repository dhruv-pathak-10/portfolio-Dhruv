"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, ArrowRight, Zap, RefreshCw, XCircle } from "lucide-react";

export default function BeforeAfterComparison() {
  const [activeTab, setActiveTab] = useState<"after" | "before" | "sideBySide">("sideBySide");

  const beforeSteps = [
    {
      title: "Manual Qualification",
      desc: "Reps spend hours checking LinkedIn & company sites one by one.",
      impact: "High latency (12–24h)",
    },
    {
      title: "Slow Response Time",
      desc: "Inbound leads wait hours for a reply; intent drops by 50%+.",
      impact: "Competitor engagement",
    },
    {
      title: "Forgotten Follow-ups",
      desc: "Reps juggle spreadsheets; 2nd and 3rd follow-up touches fall through.",
      impact: "40% pipeline leak",
    },
    {
      title: "CRM Inconsistency & Gaps",
      desc: "Field entries are partial, subjective, or skipped entirely under pressure.",
      impact: "Zero forecast visibility",
    },
    {
      title: "Lost Commercial Opportunities",
      desc: "High-ticket leads go cold while reps grind through administrative admin.",
      impact: "Depressed revenue ROI",
    },
  ];

  const afterSteps = [
    {
      title: "AI Instant Qualification",
      desc: "Sub-2-second automated scoring against deterministic ICP criteria.",
      impact: "Instant lead triage",
    },
    {
      title: "Context Enrichment",
      desc: "Domain, tech-stack, and recent hiring signals pulled autonomously.",
      impact: "Full rep briefing card",
    },
    {
      title: "Personalised Response",
      desc: "Dynamic context-aware reply drafted via verified business rules.",
      impact: "High open & reply rates",
    },
    {
      title: "CRM Auto-Synchronisation",
      desc: "Bi-directional sync into HubSpot with conversation tags and score.",
      impact: "100% clean pipeline",
    },
    {
      title: "Persistent Follow-up Loop",
      desc: "Event-driven sequences trigger until meaningful client response.",
      impact: "Zero dropped leads",
    },
    {
      title: "Warm Human Handoff",
      desc: "Reps step in exclusively for high-empathy closing calls.",
      impact: "3× qualified deal velocity",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative bg-[#080A0F] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#4F7CFF]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest bg-white/[0.04] border border-white/10 text-[#8B93A3] mb-4">
            <span>OPERATIONAL DIAGNOSIS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            MOST AI PROJECTS DON&apos;T FAIL BECAUSE AI ISN&apos;T GOOD ENOUGH.
          </h2>

          <p className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-[#4F7CFF] font-mono">
            THEY FAIL BECAUSE THE WRONG PROBLEM GETS AUTOMATED.
          </p>

          <p className="mt-6 text-[#8B93A3] text-base sm:text-lg max-w-2xl mx-auto">
            Installing an LLM over a broken manual workflow only produces automated
            chaos faster. Here is how real systems thinking transforms fragile operations
            into intelligent leverage.
          </p>

          {/* View Mode Controls */}
          <div className="mt-8 inline-flex p-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono">
            <button
              onClick={() => setActiveTab("sideBySide")}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === "sideBySide"
                  ? "bg-[#4F7CFF] text-white font-semibold shadow-sm"
                  : "text-[#8B93A3] hover:text-white"
              }`}
            >
              Side-by-Side Comparison
            </button>
            <button
              onClick={() => setActiveTab("before")}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === "before"
                  ? "bg-red-500/20 text-red-300 border border-red-500/30 font-semibold"
                  : "text-[#8B93A3] hover:text-white"
              }`}
            >
              The Broken Status Quo
            </button>
            <button
              onClick={() => setActiveTab("after")}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === "after"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold"
                  : "text-[#8B93A3] hover:text-white"
              }`}
            >
              The Architected System
            </button>
          </div>
        </div>

        {/* Dynamic Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* BEFORE CARD */}
          {(activeTab === "sideBySide" || activeTab === "before") && (
            <div className="rounded-2xl bg-gradient-to-b from-red-950/15 to-[#0E121B] border border-red-500/20 p-6 sm:p-8 relative">
              <div className="flex items-center justify-between pb-6 border-b border-red-500/20 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-mono font-bold tracking-widest text-red-400 uppercase">
                      BEFORE: STATUS QUO BOTTLENECK
                    </h3>
                    <p className="text-xs text-[#8B93A3]">High Friction · Manual Leaks · Rep Burnout</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400">
                  Fragile
                </span>
              </div>

              <div className="space-y-4">
                {beforeSteps.map((step, idx) => (
                  <div
                    key={step.title}
                    className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-red-500/30 transition-all"
                  >
                    <div className="text-xs font-mono font-bold text-red-400/80 pt-0.5">
                      0{idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-white/90">
                          {step.title}
                        </h4>
                        <span className="text-[10px] font-mono text-red-400">
                          {step.impact}
                        </span>
                      </div>
                      <p className="text-xs text-[#8B93A3] mt-1 font-sans">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-red-500/15 text-xs font-mono text-red-400/90 flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Result: Reps spend ~60% of their day on low-leverage research and manual data entry.</span>
              </div>
            </div>
          )}

          {/* AFTER CARD */}
          {(activeTab === "sideBySide" || activeTab === "after") && (
            <div className="rounded-2xl bg-gradient-to-b from-[#4F7CFF]/10 via-[#0E121B] to-[#0E121B] border border-[#4F7CFF]/30 p-6 sm:p-8 relative shadow-xl shadow-[#4F7CFF]/5">
              <div className="flex items-center justify-between pb-6 border-b border-[#4F7CFF]/20 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#4F7CFF]/20 border border-[#4F7CFF]/40 flex items-center justify-center text-[#4F7CFF]">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-mono font-bold tracking-widest text-[#4F7CFF] uppercase">
                      AFTER: ARCHITECTED AI LEVERAGE
                    </h3>
                    <p className="text-xs text-[#8B93A3]">Sub-2min Triage · Clean CRM · Humans Close</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  Defensible ROI
                </span>
              </div>

              <div className="space-y-4">
                {afterSteps.map((step, idx) => (
                  <div
                    key={step.title}
                    className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#4F7CFF]/50 transition-all"
                  >
                    <div className="text-xs font-mono font-bold text-[#4F7CFF] pt-0.5">
                      0{idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-white">
                          {step.title}
                        </h4>
                        <span className="text-[10px] font-mono text-emerald-400">
                          {step.impact}
                        </span>
                      </div>
                      <p className="text-xs text-[#8B93A3] mt-1 font-sans">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#4F7CFF]/20 text-xs font-mono text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Result: Reps focus 100% of their energy on relationship building and high-ticket negotiations.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
