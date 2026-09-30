"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, Activity, Terminal } from "lucide-react";
import { WORKFLOW_STAGES } from "@/data/portfolioData";

export default function Hero() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const capabilityChips = [
    "AI ADOPTION",
    "SOLUTION ARCHITECTURE",
    "AI AGENTS",
    "AUTOMATION",
    "VOICE AI",
  ];

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern flex flex-col justify-between">
      {/* Background ambient radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#4F7CFF]/15 via-[#8B5CF6]/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-[#4F7CFF]/5 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full">
        {/* Top Eyebrow / Positioning */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-white/[0.04] border border-white/10 text-[#F5F7FA]">
            <span className="w-2 h-2 rounded-full bg-[#4F7CFF] animate-ping" />
            <span className="text-[#8B93A3]">ROLE /</span>
            <span className="font-semibold text-white">AI SOLUTIONS ENGINEER</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-[#8B93A3]">
            <span className="text-white/20">•</span>
            <span>AI ADOPTION</span>
            <span className="text-white/20">•</span>
            <span>SOLUTION ARCHITECTURE</span>
          </div>
        </div>

        {/* Hero Editorial Headlines */}
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-black tracking-tight leading-[1.02] text-white">
            <span className="block text-white">I DON&apos;T JUST BUILD AI.</span>
            <span className="block gradient-text-accent mt-1">
              I FIGURE OUT WHERE IT BELONGS.
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-[#8B93A3] font-normal leading-relaxed max-w-3xl">
            AI Solutions Engineer working across AI adoption, solution architecture,
            automation, and business workflows — turning messy operational problems
            into practical, deployable systems.
          </p>

          {/* Secondary positioning banner */}
          <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm font-mono text-[#4F7CFF]">
            <Terminal className="w-4 h-4 shrink-0" />
            <span>&ldquo;I bridge business problems and technical execution.&rdquo;</span>
          </div>

          {/* Capability Chips */}
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-2.5">
            {capabilityChips.map((chip) => (
              <span
                key={chip}
                className="px-3.5 py-1.5 rounded-md text-xs font-mono tracking-wider font-medium bg-white/[0.03] border border-white/[0.08] text-[#F5F7FA] hover:border-[#4F7CFF]/50 hover:bg-[#4F7CFF]/5 transition-all duration-200"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#thinking"
              data-cursor="EXPLORE"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#4F7CFF] text-white text-sm font-mono font-semibold tracking-wide hover:bg-[#3d6bf0] shadow-lg shadow-[#4F7CFF]/20 transition-all duration-200"
            >
              <span>Explore My Thinking</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#work"
              data-cursor="WORK"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/[0.05] border border-white/10 text-white text-sm font-mono font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              <span>View My Work</span>
            </Link>
          </div>
        </div>

        {/* HERO SIGNATURE ANIMATION: Interactive Systems Workflow */}
        <div className="mt-16 md:mt-24 pt-10 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#4F7CFF] animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-[#8B93A3]">
                SYSTEMS WORKFLOW MODEL
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#8B93A3]">
              Hover any node to trace operational thinking
            </span>
          </div>

          {/* Interactive Horizontal Workflow Bar (Desktop & Tablet) */}
          <div className="relative">
            {/* SVG Connector Line with traveling glowing particle */}
            <div className="hidden lg:block relative w-full h-12 mb-4">
              <svg
                className="w-full h-full"
                viewBox="0 0 1000 48"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 50 24 L 950 24"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 50 24 L 950 24"
                  stroke="url(#gradient-line)"
                  strokeWidth="2"
                  strokeDasharray="160 400"
                  className="animate-subtle-pulse"
                />
                <circle cx="50" cy="24" r="5" fill="#4F7CFF">
                  <animate
                    attributeName="cx"
                    from="50"
                    to="950"
                    dur="7s"
                    repeatCount="indefinite"
                  />
                </circle>
                <defs>
                  <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4F7CFF" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Grid of Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative z-10">
              {WORKFLOW_STAGES.map((node, index) => {
                const isActive = activeNode === index;
                const isOutcome = index === WORKFLOW_STAGES.length - 1;

                return (
                  <div
                    key={node.number}
                    onMouseEnter={() => setActiveNode(index)}
                    onMouseLeave={() => setActiveNode(null)}
                    data-cursor="TRACE"
                    className={`relative group rounded-xl p-4 transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#0E121B] border-[#4F7CFF] shadow-[0_0_25px_rgba(79,124,255,0.2)] -translate-y-1"
                        : "bg-[#0E121B]/60 border-white/[0.08] hover:border-white/20"
                    } border`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono tracking-widest text-[#8B93A3]">
                        STAGE {node.number}
                      </span>
                      {isOutcome ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#4F7CFF] group-hover:translate-x-0.5 transition-all" />
                      )}
                    </div>

                    <div className="text-xs font-mono font-bold tracking-wider text-white">
                      {node.name}
                    </div>

                    <div className="text-[11px] text-[#8B93A3] mt-1 font-sans line-clamp-2">
                      {node.subtitle}
                    </div>

                    {/* Contextual expanded hint on hover */}
                    {isActive && (
                      <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-[#F5F7FA] font-sans leading-relaxed animate-in fade-in duration-200">
                        {node.expandedNote}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
