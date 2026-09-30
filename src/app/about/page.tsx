import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import CustomCursor from "@/components/CustomCursor";
import Link from "next/link";
import { PROFILE, ONBOARDING_ROADMAP, EDUCATION } from "@/data/portfolioData";
import { Compass, Rocket, ShieldCheck, Terminal, GraduationCap, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dhruv Pathak — Operating Philosophy & Background",
  description:
    "AI Solutions Engineer working between business problems and technical execution. Read Dhruv's operating principles, value pillars, and 30-day onboarding roadmap.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-[#F5F7FA]">
      <CustomCursor />
      <Navbar />

      <section className="pt-36 pb-20 px-6 md:px-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest bg-white/[0.04] border border-white/10 text-[#4F7CFF] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>EXECUTIVE BACKGROUND &amp; PHILOSOPHY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            I WORK BETWEEN TWO WORLDS.
          </h1>

          <p className="mt-4 text-lg text-[#8B93A3] font-mono leading-relaxed">
            &ldquo;I understand the business problem well enough to ask better questions,
            and I understand the technology well enough to turn those questions into
            executable solutions.&rdquo;
          </p>
        </div>

        {/* Narrative Section */}
        <div className="space-y-12 text-sm sm:text-base text-[#8B93A3] leading-relaxed mb-20">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0E121B] border border-white/[0.08] shadow-2xl">
            <h2 className="text-xl font-mono font-bold text-white mb-4">
              The Problem with Standard AI Implementation
            </h2>
            <p className="mb-4">
              Most software teams make one of two fundamental mistakes when approaching AI.
              They either build technically elaborate systems that solve irrelevant bottlenecks,
              or they purchase off-the-shelf SaaS tools that frontline staff abandon within 30 days
              because the software doesn&apos;t fit the daily workflow.
            </p>
            <p>
              I position myself at the intersection of both disciplines: uncovering the operational
              friction with executives and operators, designing modular architectures with deterministic
              guardrails, and ensuring frontline team members experience immediate leverage.
            </p>
          </div>

          {/* Three Core Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0E121B] border border-white/[0.08]">
              <span className="text-xs font-mono font-bold text-[#4F7CFF] block mb-2">
                PILLAR 01
              </span>
              <h3 className="text-lg font-bold text-white mb-2 font-mono">
                Client Thinking
              </h3>
              <p className="text-xs text-[#8B93A3] leading-relaxed font-sans">
                I can start with an ambiguous, messy business problem instead of waiting
                for a clean technical specification. I listen to operational friction and identify
                where true leverage sits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0E121B] border border-white/[0.08]">
              <span className="text-xs font-mono font-bold text-[#4F7CFF] block mb-2">
                PILLAR 02
              </span>
              <h3 className="text-lg font-bold text-white mb-2 font-mono">
                Technical Depth
              </h3>
              <p className="text-xs text-[#8B93A3] leading-relaxed font-sans">
                I understand LLM orchestration, voice AI, agents, APIs, and deterministic tools
                deeply enough to turn a commercial opportunity into a realistic, cost-effective
                technical roadmap.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0E121B] border border-white/[0.08]">
              <span className="text-xs font-mono font-bold text-[#4F7CFF] block mb-2">
                PILLAR 03
              </span>
              <h3 className="text-lg font-bold text-white mb-2 font-mono">
                Execution &amp; Adoption
              </h3>
              <p className="text-xs text-[#8B93A3] leading-relaxed font-sans">
                I am comfortable moving across the entire cycle: scoping requirements, building
                architectures, configuring integrations, testing edge cases, and driving team
                adoption.
              </p>
            </div>
          </div>

          {/* 30-Day Onboarding Plan */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0E121B] border border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase mb-2">
              <Rocket className="w-4 h-4" />
              <span>SPEED TO PRODUCTIVITY</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-6">
              30-Day Operational Onboarding Roadmap
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ONBOARDING_ROADMAP.map((r) => (
                <div
                  key={r.period}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
                >
                  <span className="text-xs font-mono font-bold text-[#4F7CFF] block mb-1">
                    {r.period}
                  </span>
                  <h4 className="text-sm font-bold text-white font-mono mb-2">
                    {r.title}
                  </h4>
                  <p className="text-xs text-[#8B93A3] font-sans leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Rigor */}
          <div className="p-8 rounded-2xl bg-[#0E121B] border border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-violet-400 uppercase mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>FOUNDATION</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              {EDUCATION.degree}
            </h2>
            <p className="text-xs font-mono text-[#8B93A3] mb-4">
              {EDUCATION.institution} · {EDUCATION.expectedYear} · Focus: {EDUCATION.focus}
            </p>
            <p className="text-xs text-[#8B93A3] font-sans">
              Led a 6-member team in the Smart India Hackathon solving automated plagiarism detection.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
