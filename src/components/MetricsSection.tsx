"use client";

import { useState } from "react";
import { PROOF_METRICS } from "@/data/portfolioData";
import { ShieldCheck, Info, ExternalLink } from "lucide-react";

export default function MetricsSection() {
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  return (
    <section id="proof" className="py-24 md:py-32 relative bg-[#080A0F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest bg-white/[0.04] border border-white/10 text-emerald-400 mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>DEFENSIBLE RESULTS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
              PROOF &gt; PROMISES
            </h2>
            <p className="mt-3 text-base sm:text-lg font-mono text-[#8B93A3]">
              Real deployments. Real clients. Real operational metrics.
            </p>
          </div>

          <div className="text-xs font-mono text-[#8B93A3] max-w-sm">
            <span>Hover any metric card to review specific operational context, source engagement, and measurement baseline.</span>
          </div>
        </div>

        {/* 6 High-Impact Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROOF_METRICS.map((metric) => {
            const isHovered = hoveredMetric === metric.id;

            return (
              <div
                key={metric.id}
                onMouseEnter={() => setHoveredMetric(metric.id)}
                onMouseLeave={() => setHoveredMetric(null)}
                data-cursor="METRIC"
                className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 border cursor-pointer ${
                  isHovered
                    ? "bg-[#0E121B] border-[#4F7CFF] shadow-[0_0_30px_rgba(79,124,255,0.18)] -translate-y-1"
                    : "bg-[#0E121B]/50 border-white/[0.08] hover:border-white/20"
                }`}
              >
                {/* Large Numerical Display */}
                <div className="flex items-baseline justify-between">
                  <div className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white font-mono">
                    <span className="text-emerald-400">{metric.value}</span>
                  </div>
                  <Info className="w-4 h-4 text-[#8B93A3] group-hover:text-white transition-colors" />
                </div>

                {/* Metric Label */}
                <div className="mt-4">
                  <div className="text-sm font-mono font-bold tracking-wider text-white">
                    {metric.label}
                  </div>
                  <div className="text-xs font-mono text-[#8B93A3] mt-1">
                    {metric.sublabel}
                  </div>
                </div>

                {/* Context on Hover / Reveal */}
                <div className="mt-6 pt-4 border-t border-white/[0.08]">
                  <p className="text-xs text-[#8B93A3] leading-relaxed font-sans">
                    {metric.context}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-[#4F7CFF]">
                    <span>Source: {metric.source}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
