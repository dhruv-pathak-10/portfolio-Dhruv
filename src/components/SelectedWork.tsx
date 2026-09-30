"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PhoneCall,
  Bot,
  Calendar,
  Database,
  ArrowRight,
  ExternalLink,
  Volume2,
  CheckCircle,
  Clock,
  Layers,
  Sparkles,
  ArrowUpRight,
  Play,
  Pause,
} from "lucide-react";
import { CASE_STUDIES } from "@/data/portfolioData";

export default function SelectedWork() {
  // Voice AI Simulator State
  const [callState, setCallState] = useState<"incoming" | "active" | "crm" | "booked">("active");
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);

  // Multi-Agent active step
  const [agentActiveStep, setAgentActiveStep] = useState<number>(2);

  const voiceAiCase = CASE_STUDIES.find((c) => c.slug === "voice-ai")!;
  const multiAgentCase = CASE_STUDIES.find((c) => c.slug === "multi-agent")!;
  const partnerCase = CASE_STUDIES.find((c) => c.slug === "partner-acquisition")!;
  const erpCase = CASE_STUDIES.find((c) => c.slug === "school-erp")!;

  return (
    <section id="work" className="py-24 md:py-32 relative bg-[#080A0F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 pb-8 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest bg-white/[0.04] border border-white/10 text-[#4F7CFF] mb-4">
              <span>SECTION 06</span>
              <span className="text-white/20">•</span>
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
              SYSTEMS DELIVERED
            </h2>
            <p className="mt-3 text-base sm:text-lg font-mono text-[#8B93A3]">
              Scroll-driven architectural case studies with interactive technical execution.
            </p>
          </div>

          <Link
            href="/work"
            data-cursor="ALL"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#4F7CFF] hover:text-white transition-colors"
          >
            <span>View All Detailed Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ========================================================
            CASE STUDY 01: PRODUCTION VOICE AI CALLING AGENT
        ======================================================== */}
        <div className="mb-24 rounded-3xl bg-gradient-to-b from-[#0E121B] via-[#0E121B] to-[#080A0F] border border-white/[0.08] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#4F7CFF]">
                  CASE STUDY 01
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs font-mono text-emerald-400">
                  {voiceAiCase.headlineMetric} {voiceAiCase.metricLabel}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                {voiceAiCase.title}
              </h3>

              <p className="text-sm sm:text-base text-[#8B93A3] leading-relaxed">
                Designed and deployed production-grade inbound and outbound Voice AI agents with
                custom conversational logic, CRM integration, and booking workflows.
              </p>

              {/* Workflow Flow Steps */}
              <div className="pt-2">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#8B93A3] block mb-3">
                  SYSTEM FLOW:
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  {["Problem", "Conversation", "AI Reasoning", "CRM Auto-Sync", "Calendar", "Human Handoff"].map(
                    (step, idx, arr) => (
                      <span key={step} className="flex items-center gap-2 text-white/80">
                        <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-white">
                          {step}
                        </span>
                        {idx < arr.length - 1 && (
                          <span className="text-[#4F7CFF]">→</span>
                        )}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-2 flex flex-wrap gap-2">
                {voiceAiCase.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.02] border border-white/[0.08] text-[#8B93A3]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/work/voice-ai"
                  data-cursor="DEEP DIVE"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#4F7CFF] text-white text-xs font-mono font-semibold hover:bg-[#3d6bf0] transition-colors"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Interactive Simulator Column */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#080A0F] border border-white/10 p-6 sm:p-7 relative shadow-2xl">
                {/* Simulator Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-semibold tracking-wider text-white">
                      VOICE AGENT TELEPHONY SIMULATOR
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#8B93A3]">
                    Latency: &lt; 1.8s
                  </span>
                </div>

                {/* Simulated Call Card */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-5">
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="text-white/60">Call ID: #INB-7821-US</span>
                    <span className="text-emerald-400 font-semibold">STATUS: CONNECTED</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-white">
                        Inbound Admissions Inquiry
                      </div>
                      <div className="text-xs text-[#8B93A3] mt-0.5">
                        Caller: Prospective Student (California, US)
                      </div>
                    </div>
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="p-2.5 rounded-full bg-[#4F7CFF]/15 border border-[#4F7CFF]/30 text-[#4F7CFF] hover:bg-[#4F7CFF] hover:text-white transition-all cursor-pointer"
                      title="Toggle simulated audio wave"
                    >
                      {isPlayingAudio ? <Volume2 className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Animated Waveform */}
                  <div className="mt-5 flex items-center justify-center gap-1.5 h-10 px-4 bg-[#0E121B] rounded-lg border border-white/5">
                    {[12, 24, 18, 30, 14, 28, 22, 34, 16, 26, 14, 32, 20, 15, 28, 18].map(
                      (h, i) => (
                        <span
                          key={i}
                          className="w-1 bg-[#4F7CFF] rounded-full transition-all duration-300"
                          style={{
                            height: isPlayingAudio ? `${Math.max(6, (h * ((i % 3) + 1)) % 32)}px` : "6px",
                            opacity: isPlayingAudio ? 0.9 : 0.3,
                          }}
                        />
                      )
                    )}
                  </div>
                </div>

                {/* AI Dialogue State Indicator */}
                <div className="space-y-3 mb-5 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                    <Bot className="w-4 h-4 text-[#4F7CFF] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#4F7CFF] font-semibold">AI Advisor (ElevenLabs):</span>
                      <p className="text-white/80 mt-1 font-sans text-xs">
                        &ldquo;Yes, our 200-Hour Yoga Teacher Training is certified by Yoga Alliance. Are you looking to enroll in the upcoming November cohort?&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* CRM Update Event Log */}
                  <div className="p-3 rounded-lg bg-emerald-500/[0.05] border border-emerald-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Database className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">HubSpot CRM Event: Lead Created (#9421)</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-semibold">SYNCED</span>
                  </div>

                  {/* Booking Event */}
                  <div className="p-3 rounded-lg bg-violet-500/[0.05] border border-violet-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-violet-400" />
                      <span className="text-violet-300">Calendar: Slot Reserved (Thursday, 3:00 PM EST)</span>
                    </div>
                    <span className="text-[10px] text-violet-400 font-semibold">CONFIRMED</span>
                  </div>
                </div>

                {/* State selector bar */}
                <div className="flex items-center justify-between text-[11px] font-mono text-[#8B93A3] pt-3 border-t border-white/5">
                  <span>Simulated Outcome:</span>
                  <span className="text-emerald-400 font-semibold">15+ Inbound Leads Converted</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            CASE STUDY 02: MULTI-AGENT AI BUSINESS AUTOMATION
        ======================================================== */}
        <div className="mb-24 rounded-3xl bg-gradient-to-b from-[#0E121B] via-[#0E121B] to-[#080A0F] border border-white/[0.08] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#4F7CFF]">
                  CASE STUDY 02
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs font-mono text-emerald-400">
                  {multiAgentCase.headlineMetric} {multiAgentCase.metricLabel}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                {multiAgentCase.title}
              </h3>

              <p className="text-sm sm:text-base text-[#8B93A3] leading-relaxed">
                Sales teams spend hours researching target accounts, assessing ICP fit, and
                writing manual outreach. Deployed an autonomous agentic pipeline qualifying 10–15
                leads per week and saving ~10 hours weekly.
              </p>

              {/* Technologies */}
              <div className="pt-2 flex flex-wrap gap-2">
                {multiAgentCase.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.02] border border-white/[0.08] text-[#8B93A3]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/work/multi-agent"
                  data-cursor="DEEP DIVE"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#4F7CFF] text-white text-xs font-mono font-semibold hover:bg-[#3d6bf0] transition-colors"
                >
                  <span>Explore Multi-Agent Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Interactive Architecture Flow Column */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#080A0F] border border-white/10 p-6 sm:p-7 relative shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <span className="text-xs font-mono font-semibold tracking-wider text-white">
                    AUTONOMOUS MULTI-AGENT PIPELINE
                  </span>
                  <span className="text-[10px] font-mono text-[#4F7CFF]">
                    Click step to inspect agent role
                  </span>
                </div>

                {/* 6 Steps Vertical Interactive Stack */}
                <div className="space-y-2.5">
                  {multiAgentCase.flowSteps.map((step, idx) => {
                    const isSelected = agentActiveStep === idx;

                    return (
                      <div
                        key={step.label}
                        onClick={() => setAgentActiveStep(idx)}
                        data-cursor="TRACE"
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#0E121B] border-[#4F7CFF] shadow-[0_0_20px_rgba(79,124,255,0.15)] translate-x-1"
                            : "bg-white/[0.02] border-white/[0.06] hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span
                              className={`text-xs font-mono font-bold ${
                                isSelected ? "text-[#4F7CFF]" : "text-[#8B93A3]"
                              }`}
                            >
                              0{idx + 1}
                            </span>
                            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                              {step.label}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-[#8B93A3]">
                            {idx === 0
                              ? "Apollo.io"
                              : idx === 1
                              ? "Scraper Agent"
                              : idx === 2
                              ? "ICP LLM"
                              : idx === 3
                              ? "Scorer"
                              : idx === 4
                              ? "Outreach Agent"
                              : "HubSpot CRM"}
                          </span>
                        </div>

                        {isSelected && (
                          <p className="mt-2 text-xs text-[#8B93A3] font-sans leading-relaxed pt-2 border-t border-white/5 animate-in fade-in duration-150">
                            {step.description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-emerald-400">
                  <span>Verified ROI:</span>
                  <span>10–15 leads qualified / wk · ~10 hrs saved / wk</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            CASE STUDY 03 & 04: 2-COLUMN GRID (PARTNER ACQUISITION & SCHOOL ERP)
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Case Study 03 */}
          <div className="rounded-3xl bg-[#0E121B] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-[#4F7CFF]/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#4F7CFF]">
                  CASE STUDY 03 · REVOPS & ACQUISITION
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  60% Less Effort
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {partnerCase.title}
              </h4>
              <p className="text-xs font-mono text-[#8B93A3] mb-4">
                {partnerCase.clientContext}
              </p>
              <p className="text-xs sm:text-sm text-[#8B93A3] leading-relaxed mb-6">
                Automated brand discovery, qualification, and multi-channel outreach engine for India&apos;s
                first hyperlocal fashion marketplace, cutting prospecting effort by 60% and 3x-ing qualified leads.
              </p>

              {/* Metrics Pill */}
              <div className="grid grid-cols-2 gap-2 mb-6 text-xs font-mono">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="text-emerald-400 font-bold text-lg">60%</div>
                  <div className="text-[10px] text-[#8B93A3]">Less Manual Prospecting</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="text-emerald-400 font-bold text-lg">3×</div>
                  <div className="text-[10px] text-[#8B93A3]">Qualified Leads / Wk</div>
                </div>
              </div>
            </div>

            <Link
              href="/work/partner-acquisition"
              data-cursor="VIEW"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-white/5 text-xs font-mono text-[#4F7CFF] hover:text-white transition-colors"
            >
              <span>View Acquisition Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Case Study 04 */}
          <div className="rounded-3xl bg-[#0E121B] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-[#4F7CFF]/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-white/60">
                  CASE STUDY 04 · PLATFORM OWNERSHIP
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  500+ Active Users
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {erpCase.title}
              </h4>
              <p className="text-xs font-mono text-[#8B93A3] mb-4">
                {erpCase.clientContext}
              </p>
              <p className="text-xs sm:text-sm text-[#8B93A3] leading-relaxed mb-6">
                Evidence of end-to-end SDLC delivery: requirements gathering, relational schema modeling,
                role-based portals for admin and faculty, and production cloud deployment.
              </p>

              {/* Deliverable Highlights */}
              <div className="space-y-2 mb-6 text-xs font-mono text-[#8B93A3]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
                  <span>Requirements gathering &amp; workflow digitization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
                  <span>Full-lifecycle architectural ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>500+ active institutional users</span>
                </div>
              </div>
            </div>

            <Link
              href="/work/school-erp"
              data-cursor="VIEW"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-white/5 text-xs font-mono text-[#4F7CFF] hover:text-white transition-colors"
            >
              <span>View System Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
