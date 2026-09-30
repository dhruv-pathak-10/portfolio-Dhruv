import Navbar from "@/components/Navbar";
import FooterEditorial from "@/components/FooterEditorial";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/jsonld";
import { ArrowDownRight, ArrowRight, CheckCircle2, ChevronRight, Layers, ShieldCheck, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Adoption Specialist & Consulting — Dhruv Pathak",
  description:
    "AI adoption strategies and operational systems designed by Dhruv Pathak. Bridging business friction and frontline execution to guarantee high-ROI software adoption.",
  alternates: {
    canonical: "https://itsdhruv.online/ai-adoption",
  },
  openGraph: {
    title: "AI Adoption Specialist & Consulting — Dhruv Pathak",
    description: "Turning ambiguous operational friction into daily frontline leverage. Discover proven AI adoption frameworks.",
    url: "https://itsdhruv.online/ai-adoption",
  },
};

export default function AiAdoptionPage() {
  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "Home", item: "/" },
    { name: "AI Adoption", item: "/ai-adoption" },
  ]);

  return (
    <main className="min-h-screen bg-[#F6F1EB] text-[#1C1917] selection:bg-[#B12223] selection:text-[#FCF7F1]">
      <JsonLd data={breadcrumbs} />
      <Navbar />

      <article className="pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
        {/* Breadcrumb Trail */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#78716C] mb-8 uppercase tracking-widest">
          <Link href="/" className="hover:text-[#B12223] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-[#6D0305]/40" />
          <span className="text-[#6D0305] font-semibold">AI Adoption</span>
        </nav>

        {/* Editorial Header */}
        <div className="border-b border-[#6D0305]/15 pb-8 mb-16 sm:mb-20">
          <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#450C0A] uppercase mb-6">
            <span>PILLAR / CONSULTING DISCIPLINE</span>
            <span>AHMEDABAD, INDIA · REMOTE READY</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl text-[#6D0305] uppercase tracking-tight leading-[0.9]">
            AI ADOPTION &amp;
            <span className="block text-[#B12223]">SYSTEMS CONSULTING.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#450C0A] font-medium max-w-3xl font-sans">
            Most AI projects fail not because the underlying LLM is weak, but because
            frontline teams abandon tools that interrupt their daily rhythm.
            I design systems that fit existing habits and deliver verifiable commercial ROI.
          </p>
        </div>

        {/* Section 1: The Core Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5 space-y-4 border-l-2 border-[#B12223] pl-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#B12223] font-semibold block">
              OPERATING PREMISE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#6D0305] uppercase tracking-tight">
              Adoption Is An Operational Problem, Not A Technical One
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-sans">
              Purchasing enterprise AI licenses or spinning up chatbots rarely shifts bottom-line unit economics.
              Real adoption requires root friction diagnostics, deterministic guardrails, and embedding intelligence
              directly into native communication channels like WhatsApp, Slack, and HubSpot.
            </p>
          </div>

          <div className="lg:col-span-7 border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-12 space-y-6">
            <h3 className="font-display text-2xl text-[#6D0305] uppercase tracking-tight">
              What I Deliver As An AI Adoption Specialist
            </h3>

            <div className="space-y-4 font-sans text-sm text-[#450C0A]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B12223] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#6D0305] block">Root Bottleneck Diagnostics:</strong>
                  Audit sales, admissions, and support pipelines to identify exactly where manual toil leaks revenue.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B12223] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#6D0305] block">Minimal Viable Automations:</strong>
                  Deploy the smallest valuable build first, validating workflow adoption before scaling complexity.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B12223] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#6D0305] block">Deterministic Handoffs:</strong>
                  Build schema-validated routing so human operators retain full supervisory control over critical customer touchpoints.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Case Proof Points */}
        <div className="border-t border-[#6D0305]/15 pt-16 mb-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#6D0305]/15 pb-4 mb-10">
            <span className="font-display text-3xl text-[#6D0305] uppercase tracking-tight">
              DOCUMENTED ADOPTION CASE STUDIES
            </span>
            <Link href="/work" className="text-xs font-mono text-[#B12223] hover:text-[#6D0305] uppercase font-semibold flex items-center gap-1">
              <span>View All Systems</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 space-y-4">
              <span className="text-[11px] font-mono text-[#B12223] font-bold uppercase tracking-wider block">
                REVOPS &amp; PARTNER ACQUISITION
              </span>
              <h3 className="font-display text-2xl text-[#6D0305] uppercase tracking-tight">
                60% Less Manual Prospecting
              </h3>
              <p className="text-xs sm:text-sm text-[#450C0A] leading-relaxed font-sans">
                Engineered automated brand discovery, Apollo.io enrichment, and multi-step qualification workflows at Clozzet India,
                tripling weekly qualified deal flow while cutting rep research fatigue.
              </p>
              <Link href="/work/partner-acquisition" className="inline-flex items-center gap-1 text-xs font-mono text-[#B12223] font-semibold underline underline-offset-4">
                <span>Read Clozzet Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 space-y-4">
              <span className="text-[11px] font-mono text-[#B12223] font-bold uppercase tracking-wider block">
                VOICE TELEPHONY AUTOMATION
              </span>
              <h3 className="font-display text-2xl text-[#6D0305] uppercase tracking-tight">
                15+ Inbound Leads Converted 24/7
              </h3>
              <p className="text-xs sm:text-sm text-[#450C0A] leading-relaxed font-sans">
                Deployed natural, sub-2s conversational voice calling agents for international admissions prospects,
                integrating calendar booking and direct CRM record creation with zero rep intervention.
              </p>
              <Link href="/work/voice-ai" className="inline-flex items-center gap-1 text-xs font-mono text-[#B12223] font-semibold underline underline-offset-4">
                <span>Read Voice AI Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section 3: Next Actions */}
        <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-display text-3xl text-[#6D0305] uppercase tracking-tight">
              Ready To Uncover Where AI Belongs In Your Workflow?
            </h3>
            <p className="text-xs sm:text-sm text-[#450C0A] font-sans">
              Explore my 7-stage discovery methodology or schedule a direct technical consultation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/methodology"
              className="px-5 py-3 border-2 border-[#6D0305] text-[#6D0305] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#6D0305] hover:text-[#FCF7F1] transition-colors"
            >
              See Methodology
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 bg-[#B12223] text-[#FCF7F1] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#6D0305] transition-colors"
            >
              Start Discovery Call →
            </Link>
          </div>
        </div>
      </article>

      <FooterEditorial />
    </main>
  );
}
