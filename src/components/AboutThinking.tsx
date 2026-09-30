"use client";

import { ONBOARDING_ROADMAP, PROFILE } from "@/data/portfolioData";
import { ArrowLeftRight, Compass, Shield, Target, Award, Rocket, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AboutThinking() {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-[#080A0F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest bg-white/[0.04] border border-white/10 text-[#4F7CFF] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>CORE PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            I WORK BETWEEN TWO WORLDS.
          </h2>

          <p className="mt-6 text-lg sm:text-2xl text-[#F5F7FA] font-light leading-relaxed max-w-2xl">
            &ldquo;I understand the business problem well enough to ask better questions,
            and I understand the technology well enough to turn those questions into
            executable solutions.&rdquo;
          </p>
        </div>

        {/* Visual Triad: BUSINESS ↔ AI ↔ ENGINEERING */}
        <div className="mb-16 p-8 rounded-3xl bg-[#0E121B] border border-white/[0.08] shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center">
            {/* World 1 */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[11px] font-mono tracking-widest text-[#8B93A3] uppercase block mb-1">
                PILLAR 01
              </span>
              <h3 className="text-xl font-mono font-bold text-white mb-2">
                BUSINESS &amp; REVOPS
              </h3>
              <p className="text-xs text-[#8B93A3] leading-relaxed">
                Commercial models, unit economics, revenue leaks, customer onboarding, and frontline team friction.
              </p>
            </div>

            {/* Middle Triad Connector */}
            <div className="flex flex-col items-center justify-center p-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4F7CFF] to-[#8B5CF6] flex items-center justify-center text-white mb-3 shadow-lg shadow-[#4F7CFF]/20">
                <ArrowLeftRight className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-[#4F7CFF] tracking-widest uppercase">
                AI ADOPTION LAYER
              </span>
              <span className="text-[11px] font-mono text-[#8B93A3] mt-1">
                Where Leverage Happens
              </span>
            </div>

            {/* World 2 */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[11px] font-mono tracking-widest text-[#8B93A3] uppercase block mb-1">
                PILLAR 02
              </span>
              <h3 className="text-xl font-mono font-bold text-white mb-2">
                TECHNICAL EXECUTION
              </h3>
              <p className="text-xs text-[#8B93A3] leading-relaxed">
                LLM orchestration, agentic graphs, low-latency Voice AI, REST APIs, and production CRM synchronization.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Working Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {PROFILE.principles.map((p, idx) => (
            <div
              key={p.title}
              className="p-6 sm:p-8 rounded-2xl bg-[#0E121B] border border-white/[0.08] hover:border-[#4F7CFF]/40 transition-all duration-300"
            >
              <div className="text-xs font-mono font-bold text-[#4F7CFF] mb-3">
                RULE 0{idx + 1}
              </div>
              <h4 className="text-lg font-bold text-white mb-3">{p.title}</h4>
              <p className="text-xs sm:text-sm text-[#8B93A3] leading-relaxed font-sans">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 30-Day Operational Onboarding Roadmap */}
        <div className="rounded-3xl bg-[#0E121B] border border-white/[0.08] p-6 sm:p-10 lg:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase mb-1">
                <Rocket className="w-4 h-4" />
                <span>SPEED TO PRODUCTIVITY</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                30-Day Client / Organization Operational Roadmap
              </h3>
            </div>
            <span className="text-xs font-mono text-[#8B93A3]">
              From Day 1 to Production Pilot
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ONBOARDING_ROADMAP.map((r, i) => (
              <div
                key={r.period}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-all"
              >
                <span className="text-xs font-mono font-bold text-[#4F7CFF] block mb-2">
                  {r.period}
                </span>
                <h4 className="text-sm font-bold text-white mb-2 font-mono">
                  {r.title}
                </h4>
                <p className="text-xs text-[#8B93A3] leading-relaxed font-sans">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.06] text-center">
            <p className="text-xs sm:text-sm font-mono text-white/80 max-w-2xl mx-auto italic">
              &ldquo;I would not want my first contribution to be another AI feature.
              I would want it to be a clearly defined business problem, a compelling AI opportunity,
              and a practical path from idea to measurable value.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
