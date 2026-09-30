"use client";

import { useState } from "react";
import { ARCHITECTURE_NODES } from "@/data/portfolioData";
import { Layers, Network, Terminal, CheckCircle2, Cpu } from "lucide-react";

export default function ArchitectureMap() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("ai-llm");

  const selectedNode =
    ARCHITECTURE_NODES.find((node) => node.id === selectedNodeId) || ARCHITECTURE_NODES[0];

  return (
    <section id="architecture" className="py-24 md:py-32 relative bg-[#080A0F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest bg-white/[0.04] border border-white/10 text-[#4F7CFF] mb-4">
            <Network className="w-3.5 h-3.5" />
            <span>SYSTEMS ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            THE STACK ISN&apos;T THE POINT.
          </h2>

          <p className="mt-3 text-lg sm:text-xl font-mono text-[#8B93A3]">
            The architecture should serve the business outcome.
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#8B93A3] leading-relaxed">
            Technology is evidence; thinking is the product. Every component in the system exists
            solely to move a business KPI with maximum reliability and minimum operational drag.
          </p>
        </div>

        {/* Center-Outcome Interactive Architecture Map */}
        <div className="rounded-3xl bg-[#0E121B] border border-white/[0.08] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle grid pattern inside card */}
          <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

          {/* Core Central Business Outcome Anchor */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center pb-12 mb-10 border-b border-white/[0.08]">
            <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-400 font-semibold mb-2">
              THE CORE OBJECTIVE
            </span>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-white font-mono text-base sm:text-xl font-black shadow-lg shadow-emerald-500/10">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>BUSINESS OUTCOME &amp; DEFENSIVE ROI</span>
            </div>
            <p className="text-xs sm:text-sm text-[#8B93A3] max-w-lg mt-3 font-sans">
              All technology choices below are modular middle layers engineered to serve this outcome.
            </p>
          </div>

          {/* Connected Architectural Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10 mb-10">
            {ARCHITECTURE_NODES.map((node) => {
              const isSelected = selectedNodeId === node.id;

              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  data-cursor="TRACE"
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#080A0F] border-[#4F7CFF] shadow-[0_0_25px_rgba(79,124,255,0.2)] -translate-y-1"
                      : "bg-[#080A0F]/60 border-white/[0.06] hover:border-white/20 hover:bg-[#080A0F]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono tracking-widest text-[#8B93A3] uppercase">
                      {node.category}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? "bg-[#4F7CFF] animate-pulse" : "bg-white/20"
                      }`}
                    />
                  </div>

                  <h3 className="text-sm font-mono font-bold tracking-wider text-white">
                    {node.name}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {node.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/5 text-[#8B93A3]"
                      >
                        {tool}
                      </span>
                    ))}
                    {node.tools.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-white/40">
                        +{node.tools.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Node Deep Dive Inspector */}
          <div className="relative z-10 p-6 sm:p-8 rounded-2xl bg-[#080A0F] border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-[#4F7CFF]" />
                <div>
                  <h4 className="text-base font-mono font-bold text-white uppercase tracking-wider">
                    {selectedNode.name}
                  </h4>
                  <span className="text-xs text-[#8B93A3]">
                    Category: {selectedNode.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {selectedNode.tools.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#4F7CFF]/10 border border-[#4F7CFF]/20 text-[#4F7CFF]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm text-[#F5F7FA] font-sans leading-relaxed">
              <strong className="text-white font-mono text-xs uppercase tracking-wider block mb-1">
                Implementation Role in the System:
              </strong>
              {selectedNode.role}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
