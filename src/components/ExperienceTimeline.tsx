"use client";

import { EXPERIENCE_ITEMS, EDUCATION } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap, Award } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 md:py-32 relative bg-[#080A0F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest bg-white/[0.04] border border-white/10 text-[#4F7CFF] mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>OPERATIONAL TRACK RECORD</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            WHERE I&apos;VE OPERATED
          </h2>

          <p className="mt-3 text-lg sm:text-xl font-mono text-[#8B93A3]">
            From early-stage hypergrowth RevOps to enterprise platform architectures.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-6 md:pl-12 space-y-16">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-[#080A0F] border-2 border-[#4F7CFF] group-hover:scale-125 group-hover:bg-[#4F7CFF] transition-all duration-200" />

              <div className="rounded-2xl bg-[#0E121B] border border-white/[0.08] p-6 sm:p-8 hover:border-[#4F7CFF]/40 transition-all duration-300">
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06] mb-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#4F7CFF] tracking-wider">
                      {item.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {item.role}
                    </h3>
                    <div className="text-sm font-mono text-[#8B93A3] mt-0.5 flex flex-wrap items-center gap-3">
                      <span className="text-white font-medium">{item.company}</span>
                      <span className="text-white/20">•</span>
                      <span className="flex items-center gap-1 text-xs">
                        <MapPin className="w-3 h-3 text-[#4F7CFF]" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Metrics Badges */}
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    {item.metrics.map((m) => (
                      <span
                        key={m}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-[#8B93A3] font-sans mb-6 leading-relaxed">
                  {item.summary}
                </p>

                {/* Highlights List */}
                <ul className="space-y-3 mb-6">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#F5F7FA]">
                      <span className="text-[#4F7CFF] font-mono mt-0.5">•</span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.02] border border-white/5 text-[#8B93A3]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Education & Leadership Node */}
          <div className="relative group">
            <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-[#080A0F] border-2 border-violet-500 group-hover:scale-125 group-hover:bg-violet-500 transition-all duration-200" />

            <div className="rounded-2xl bg-[#0E121B] border border-white/[0.08] p-6 sm:p-8 hover:border-violet-500/40 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06] mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-violet-400 tracking-wider">
                    {EDUCATION.expectedYear}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {EDUCATION.degree}
                  </h3>
                  <div className="text-sm font-mono text-[#8B93A3] mt-0.5">
                    {EDUCATION.institution} · Focus: {EDUCATION.focus}
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-violet-500/10 border border-violet-500/20 text-violet-300">
                  Engineering Foundation
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-6 text-xs sm:text-sm text-[#F5F7FA] flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-mono text-xs uppercase mb-1">
                    Leadership / Hackathon:
                  </strong>
                  {EDUCATION.leadership}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#8B93A3] uppercase block mb-3">
                  PROFESSIONAL CERTIFICATIONS:
                </span>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION.certifications.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/10 text-white/90"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
