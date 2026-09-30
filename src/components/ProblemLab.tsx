"use client";

import { useState } from "react";
import { PROBLEM_LAB_ITEMS } from "@/data/portfolioData";
import {
  Sparkles,
  Target,
  Wrench,
  UserCheck,
  BarChart3,
  Clock,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

export default function ProblemLab() {
  const [selectedId, setSelectedId] = useState<string>(PROBLEM_LAB_ITEMS[0].id);

  const selectedItem =
    PROBLEM_LAB_ITEMS.find((item) => item.id === selectedId) || PROBLEM_LAB_ITEMS[0];

  return (
    <section id="problem-lab" className="py-24 md:py-32 relative bg-[#080A0F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest bg-white/[0.04] border border-white/10 text-[#4F7CFF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE CONSULTING SANDBOX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            GIVE ME A BUSINESS PROBLEM.
          </h2>

          <p className="mt-3 text-lg sm:text-xl font-mono text-[#8B93A3]">
            Let&apos;s see where AI could create leverage.
          </p>
        </div>

        {/* Disclaimer Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span>
            ILLUSTRATIVE SCENARIOS — Demonstrates how I diagnose and architect workflows for client inquiries.
          </span>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 overflow-x-auto scrollbar-none">
          {PROBLEM_LAB_ITEMS.map((item) => {
            const isSelected = item.id === selectedId;

            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                data-cursor="TEST"
                className={`px-4 py-2.5 rounded-xl text-xs font-mono font-medium tracking-wider transition-all duration-200 border whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? "bg-[#4F7CFF] text-white border-[#4F7CFF] shadow-lg shadow-[#4F7CFF]/20"
                    : "bg-[#0E121B] text-[#8B93A3] border-white/[0.08] hover:border-white/20 hover:text-white"
                }`}
              >
                {item.category}
              </button>
            );
          })}
        </div>

        {/* Diagnostic Panel Display */}
        <div className="rounded-2xl bg-[#0E121B] border border-white/[0.08] p-6 sm:p-10 relative overflow-hidden shadow-2xl shadow-black/40">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#4F7CFF]/10 to-transparent blur-3xl pointer-events-none" />

          {/* Top Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#4F7CFF] uppercase font-semibold">
                DOMAIN SCENARIO / {selectedItem.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {selectedItem.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/10 text-[#8B93A3]">
                Complexity: <span className="text-white font-medium">{selectedItem.complexity}</span>
              </span>
              <span className="px-3 py-1 rounded-md text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                Pilot: <span className="font-semibold">{selectedItem.timeToPilot}</span>
              </span>
            </div>
          </div>

          {/* 4-Quadrant Architecture Map */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1: The Business Problem */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-red-500/20 relative">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-red-400 uppercase mb-3">
                <Target className="w-4 h-4" />
                <span>01 · The Root Business Problem</span>
              </div>
              <p className="text-sm text-[#F5F7FA] font-sans leading-relaxed">
                {selectedItem.problem}
              </p>
            </div>

            {/* Box 2: The AI Leverage Opportunity */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-[#4F7CFF]/30 relative">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#4F7CFF] uppercase mb-3">
                <Sparkles className="w-4 h-4" />
                <span>02 · The AI Opportunity</span>
              </div>
              <p className="text-sm text-[#F5F7FA] font-sans leading-relaxed">
                {selectedItem.aiOpportunity}
              </p>
            </div>

            {/* Box 3: Potential Solution Architecture */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] relative">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-violet-400 uppercase mb-3">
                <Wrench className="w-4 h-4" />
                <span>03 · Architected Solution</span>
              </div>
              <p className="text-sm text-[#F5F7FA] font-sans leading-relaxed">
                {selectedItem.potentialSolution}
              </p>
            </div>

            {/* Box 4: The Crucial Human Role */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] relative">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-3">
                <UserCheck className="w-4 h-4" />
                <span>04 · Where Human Judgement Stays</span>
              </div>
              <p className="text-sm text-[#F5F7FA] font-sans leading-relaxed">
                {selectedItem.humanRole}
              </p>
            </div>
          </div>

          {/* Bottom KPIs Bar */}
          <div className="mt-8 pt-6 border-t border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase mb-4">
              <BarChart3 className="w-4 h-4" />
              <span>Target Benchmark KPIs</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {selectedItem.kpis.map((kpi, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3 rounded-lg bg-emerald-500/[0.04] border border-emerald-500/20 text-xs font-mono text-emerald-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{kpi}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
