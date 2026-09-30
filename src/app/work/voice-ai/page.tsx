import Navbar from "@/components/Navbar";
import FooterEditorial from "@/components/FooterEditorial";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd, getProjectJsonLd } from "@/lib/jsonld";
import { CASE_STUDIES } from "@/data/portfolioData";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: Production Voice AI Calling Agent — Dhruv Pathak",
  description:
    "Production-grade inbound and outbound Voice AI agents with custom personas, ElevenLabs conversational voice synthesis, HubSpot CRM integration, and calendar booking.",
  alternates: {
    canonical: "https://itsdhruv.online/work/voice-ai",
  },
  openGraph: {
    title: "Case Study: Production Voice AI Calling Agent — Dhruv Pathak",
    description: "Production-grade Voice AI agents with sub-2s conversational turn latency, dynamic tool-calling, and automated booking.",
    url: "https://itsdhruv.online/work/voice-ai",
  },
};

export default function VoiceAiCaseStudyPage() {
  const study = CASE_STUDIES.find((c) => c.slug === "voice-ai")!;
  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "Home", item: "/" },
    { name: "Work", item: "/work" },
    { name: "Voice AI Calling Agent", item: "/work/voice-ai" },
  ]);
  const projectJsonLd = getProjectJsonLd({
    name: study.title,
    description: study.problem,
    url: "/work/voice-ai",
    technologies: study.technologies,
    applicationCategory: "TelephonyApplication",
  });

  return (
    <main className="min-h-screen bg-[#F6F1EB] text-[#1C1917] selection:bg-[#B12223] selection:text-[#FCF7F1]">
      <JsonLd data={breadcrumbs} />
      <JsonLd data={projectJsonLd} />
      <Navbar />

      <article className="pt-32 pb-24 px-6 md:px-10 max-w-5xl mx-auto">
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#B12223] hover:text-[#6D0305] transition-colors mb-8 font-semibold tracking-wider uppercase"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>← BACK TO ARCHIVES</span>
        </Link>

        {/* Editorial Header */}
        <div className="space-y-4 mb-14 pb-8 border-b border-[#6D0305]/15">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-widest uppercase">
            <span className="text-[#B12223] font-bold">
              {study.number} · {study.clientContext}
            </span>
            <span className="font-display text-xl text-[#B12223]">
              {study.headlineMetric} {study.metricLabel}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#6D0305] uppercase tracking-tight leading-[0.92]">
            {study.title}
          </h1>

          <p className="text-base sm:text-lg font-mono text-[#B12223]">
            {study.subtitle}
          </p>

          <div className="pt-4 flex flex-wrap gap-2">
            {study.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-mono bg-[#EADEDA]/60 border border-[#6D0305]/15 text-[#450C0A]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 3 Editorial Sections */}
        <div className="space-y-12">
          {/* Problem */}
          <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-12 space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#B12223] font-semibold block">
              01 / THE CORE BOTTLENECK
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-[#6D0305] uppercase tracking-tight">
              Inbound Lead Friction &amp; Time-to-Call
            </h2>
            <p className="text-sm sm:text-base text-[#450C0A] leading-relaxed font-sans">
              {study.problem}
            </p>
          </div>

          {/* Architecture */}
          <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-12 space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#B12223] font-semibold block">
              02 / THE ARCHITECTURAL FIX
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-[#6D0305] uppercase tracking-tight">
              Modular Realtime Speech Pipeline
            </h2>
            <p className="text-sm sm:text-base text-[#450C0A] leading-relaxed font-sans mb-6">
              {study.solution}
            </p>

            <div className="space-y-3 pt-4 border-t border-[#6D0305]/15">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#78716C] block">
                KEY ARCHITECTURAL ELEMENTS:
              </span>
              {study.architecturePoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#450C0A] font-sans">
                  <span className="text-[#B12223] font-bold shrink-0">—</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Impact */}
          <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-12 space-y-6">
            <span className="text-xs font-mono tracking-widest uppercase text-[#B12223] font-semibold block">
              03 / VERIFIED BUSINESS OUTCOMES
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-[#6D0305] uppercase tracking-tight">
              Defensible Operational Returns
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {study.businessImpact.map((impact, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-[#EADEDA]/30 border border-[#6D0305]/10">
                  <CheckCircle2 className="w-4 h-4 text-[#B12223] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#450C0A] font-sans">{impact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      <FooterEditorial />
    </main>
  );
}
