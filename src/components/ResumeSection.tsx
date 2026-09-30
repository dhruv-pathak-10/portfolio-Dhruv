"use client";

import { FileText, Download, ExternalLink, Check, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ResumeSection() {
  const resumeUrl = "/Dhruv_Pathak_AI_Adoption_Specialist_Resume.pdf";

  return (
    <section id="resume" className="py-24 md:py-32 relative bg-[#080A0F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#0E121B] via-[#121622] to-[#0E121B] border border-white/[0.08] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest bg-white/[0.04] border border-white/10 text-white/90 mb-4">
              <FileText className="w-3.5 h-3.5 text-[#4F7CFF]" />
              <span>CURRICULUM VITAE &amp; EXECUTIVE BRIEF</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              WANT THE FULL PICTURE?
            </h2>

            <p className="mt-4 text-base sm:text-xl font-mono text-[#8B93A3]">
              Two pages of experience, projects, technical depth, and measurable outcomes.
            </p>

            {/* Quick Proof highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pb-8 border-b border-white/[0.08]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F5F7FA]">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Client Metrics</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#F5F7FA]">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Production Voice &amp; Multi-Agent AI</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#F5F7FA]">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>End-to-End SDLC &amp; RevOps</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="VIEW"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#4F7CFF] text-white text-xs font-mono font-semibold tracking-wide hover:bg-[#3d6bf0] shadow-lg shadow-[#4F7CFF]/25 transition-all"
              >
                <span>VIEW RESUME</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={resumeUrl}
                download="Dhruv_Pathak_AI_Adoption_Specialist_Resume.pdf"
                data-cursor="DOWNLOAD"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/[0.05] border border-white/10 text-white text-xs font-mono font-medium hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <span>DOWNLOAD RESUME</span>
                <Download className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/resume"
                data-cursor="BROWSE"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#8B93A3] hover:text-white transition-colors ml-2"
              >
                <span>Read Interactive Web Version →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
