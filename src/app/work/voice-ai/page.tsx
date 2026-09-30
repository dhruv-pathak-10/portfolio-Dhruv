import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import CustomCursor from "@/components/CustomCursor";
import Link from "next/link";
import { CASE_STUDIES } from "@/data/portfolioData";
import { ArrowLeft, CheckCircle2, Cpu, PhoneCall, Volume2, Calendar, Database, Sparkles, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: Production Voice AI Calling Agent",
  description:
    "Production-grade inbound and outbound Voice AI agents with custom personas, ElevenLabs conversational voice synthesis, HubSpot CRM integration, and calendar booking.",
};

export default function VoiceAiCaseStudyPage() {
  const study = CASE_STUDIES.find((c) => c.slug === "voice-ai")!;

  return (
    <main className="min-h-screen bg-[#080A0F] text-[#F5F7FA]">
      <CustomCursor />
      <Navbar />

      <article className="pt-36 pb-20 px-6 md:px-10 max-w-5xl mx-auto">
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#8B93A3] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Case Studies</span>
        </Link>

        {/* Header */}
        <div className="space-y-4 mb-12 pb-8 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#4F7CFF]">
              CASE STUDY 01 · VOICE AI TELEPHONY
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs font-mono text-emerald-400 font-semibold">
              {study.headlineMetric} {study.metricLabel}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            {study.title}
          </h1>

          <p className="text-lg font-mono text-[#8B93A3]">
            {study.subtitle}
          </p>

          <div className="pt-4 flex flex-wrap gap-2">
            {study.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/10 text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Narrative Grid */}
        <div className="space-y-12 text-sm sm:text-base text-[#8B93A3] leading-relaxed">
          {/* Executive Summary */}
          <div className="p-8 rounded-2xl bg-[#0E121B] border border-white/[0.08]">
            <h2 className="text-xl font-mono font-bold text-white mb-3">
              Executive Context &amp; Client Need
            </h2>
            <p className="mb-4">
              A yoga school and wellness retreat client in Rishikesh, India was experiencing
              significant lead drop-off from international prospective students (primarily in US
              and UK time zones). High-intent inquiries were submitting web forms and calling
              after Indian business hours, resulting in missed calls and delayed email responses.
            </p>
            <p>
              By the time an admissions counselor replied 12 to 24 hours later, prospects had
              frequently engaged with competing programs or lost the immediate decision momentum.
            </p>
          </div>

          {/* The Operational Flow */}
          <div>
            <h2 className="text-xl font-mono font-bold text-white mb-6">
              The 6-Stage Telephony Architecture
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {study.flowSteps.map((step, idx) => (
                <div
                  key={step.label}
                  className="p-5 rounded-xl bg-[#0E121B] border border-white/[0.06]"
                >
                  <span className="text-xs font-mono font-bold text-[#4F7CFF] block mb-1">
                    STEP 0{idx + 1}
                  </span>
                  <h3 className="text-sm font-bold text-white font-mono mb-2">
                    {step.label}
                  </h3>
                  <p className="text-xs text-[#8B93A3] font-sans">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Implementation Breakdown */}
          <div className="p-8 rounded-2xl bg-[#0E121B] border border-white/[0.08]">
            <h2 className="text-xl font-mono font-bold text-white mb-4">
              Technical Implementation Details
            </h2>
            <ul className="space-y-3">
              {study.architecturePoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                  <Cpu className="w-4 h-4 text-[#4F7CFF] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Measurable Business ROI */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-950/20 to-[#0E121B] border border-emerald-500/30">
            <h2 className="text-xl font-mono font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Measurable Proof Points &amp; Outcomes</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {study.businessImpact.map((impact, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono text-[#F5F7FA]"
                >
                  {impact}
                </div>
              ))}
            </div>
            <p className="text-xs font-mono text-emerald-300 italic border-t border-emerald-500/20 pt-4">
              &ldquo;{study.quote}&rdquo;
            </p>
          </div>
        </div>
      </article>

      <FinalCTA />
    </main>
  );
}
