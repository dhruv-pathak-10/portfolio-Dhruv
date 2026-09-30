import Navbar from "@/components/Navbar";
import FooterEditorial from "@/components/FooterEditorial";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/jsonld";
import { CASE_STUDIES } from "@/data/portfolioData";
import { ArrowDownRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work & Systems Architecture — Dhruv Pathak",
  description:
    "Production-grade AI solutions, Voice AI calling agents, multi-agent business automations, and institutional ERP architectures deployed by Dhruv Pathak.",
  alternates: {
    canonical: "https://itsdhruv.online/work",
  },
  openGraph: {
    title: "Selected Work & Systems Architecture — Dhruv Pathak",
    description: "Production-grade AI solutions, Voice AI calling agents, multi-agent automations, and ERP architectures.",
    url: "https://itsdhruv.online/work",
  },
};

export default function WorkIndexPage() {
  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "Home", item: "/" },
    { name: "Work", item: "/work" },
  ]);

  return (
    <main className="min-h-screen bg-[#F6F1EB] text-[#1C1917] selection:bg-[#B12223] selection:text-[#FCF7F1]">
      <JsonLd data={breadcrumbs} />
      <Navbar />

      <section className="pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
        {/* Editorial Page Header */}
        <div className="border-b border-[#6D0305]/15 pb-8 mb-16 sm:mb-20">
          <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#450C0A] uppercase mb-6">
            <span>INDEX / ARCHIVES</span>
            <span>VOL. 2024–2026</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl text-[#6D0305] uppercase tracking-tight leading-[0.9]">
            SELECTED SYSTEMS &amp;
            <span className="block text-[#B12223]">ARCHITECTURES.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#450C0A] font-medium max-w-3xl font-sans">
            Every project below represents a real business bottleneck translated into a
            production deployment with defensible commercial ROI and frontline adoption.
          </p>
        </div>

        {/* Case Studies Editorial Stack */}
        <div className="space-y-16">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.id}
              className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-12 lg:p-16 hover:border-[#6D0305] transition-colors"
            >
              {/* Top Meta Line */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#6D0305]/15 pb-4 text-xs font-mono tracking-widest uppercase">
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xl sm:text-3xl text-[#B12223]">
                    {study.number}
                  </span>
                  <span className="text-[#6D0305] font-semibold">{study.clientContext}</span>
                </div>
                <span className="text-[#78716C]">DEPLOYED ARCHITECTURE</span>
              </div>

              {/* Title & Subtitle */}
              <div className="mt-8 mb-10">
                <h2 className="font-display text-3xl sm:text-5xl text-[#6D0305] uppercase tracking-tight">
                  {study.title}
                </h2>
                <p className="mt-2 text-sm sm:text-base font-mono text-[#B12223]">
                  {study.subtitle}
                </p>
              </div>

              {/* 3-Column Editorial Problem / Solution / Impact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-[#6D0305]/15 font-sans">
                {/* 1. Problem */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-[#B12223] block font-semibold">
                    THE BUSINESS PROBLEM
                  </span>
                  <p className="text-xs sm:text-sm text-[#450C0A] leading-relaxed">
                    {study.problem}
                  </p>
                </div>

                {/* 2. Architecture / Solution */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-[#B12223] block font-semibold">
                    THE ARCHITECTURAL FIX
                  </span>
                  <p className="text-xs sm:text-sm text-[#450C0A] leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* 3. Outcome / Business Impact */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-[#B12223] block font-semibold">
                    VERIFIED BUSINESS RESULT
                  </span>
                  <p className="text-xs sm:text-sm text-[#450C0A] leading-relaxed">
                    {study.opportunity}
                  </p>
                </div>
              </div>

              {/* Bottom Metrics Bar & Stack */}
              <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Headline Metric */}
                <div className="flex items-baseline gap-3">
                  <div className="font-display text-3xl sm:text-4xl text-[#B12223]">
                    {study.headlineMetric}
                  </div>
                  <div className="text-xs font-mono tracking-wider text-[#78716C] uppercase">
                    {study.metricLabel}
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono bg-[#EADEDA]/60 border border-[#6D0305]/15 text-[#450C0A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FooterEditorial />
    </main>
  );
}
