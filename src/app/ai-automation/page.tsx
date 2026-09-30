import Navbar from "@/components/Navbar";
import FooterEditorial from "@/components/FooterEditorial";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/jsonld";
import { ArrowRight, CheckCircle2, ChevronRight, Cpu, Layers, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agents & Workflow Automation Specialist — Dhruv Pathak",
  description:
    "Intelligent multi-agent systems and RevOps automation by Dhruv Pathak. Eliminating manual prospecting, accelerating lead velocity, and syncing CRM data automatically.",
  alternates: {
    canonical: "https://itsdhruv.online/ai-automation",
  },
  openGraph: {
    title: "AI Agents & Workflow Automation Specialist — Dhruv Pathak",
    description: "Multi-agent systems, automated lead scoring, and RevOps pipelines saving 10+ hours per rep weekly.",
    url: "https://itsdhruv.online/ai-automation",
  },
};

export default function AiAutomationPage() {
  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "Home", item: "/" },
    { name: "AI Automation", item: "/ai-automation" },
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
          <span className="text-[#6D0305] font-semibold">AI Automation &amp; Agents</span>
        </nav>

        {/* Editorial Header */}
        <div className="border-b border-[#6D0305]/15 pb-8 mb-16 sm:mb-20">
          <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#450C0A] uppercase mb-6">
            <span>AUTOMATION / MULTI-AGENT SYSTEMS</span>
            <span>MEASURABLE REVOPS LIFT</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl text-[#6D0305] uppercase tracking-tight leading-[0.9]">
            AI AGENTS &amp;
            <span className="block text-[#B12223]">WORKFLOW AUTOMATION.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#450C0A] font-medium max-w-3xl font-sans">
            Manual data entry, repetitive prospecting, and fragmented follow-ups burn hundreds of rep hours monthly.
            I build autonomous multi-agent pipelines and RevOps integrations that research accounts,
            score opportunities, and sync records with precision.
          </p>
        </div>

        {/* Section 1: The Automation Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5 space-y-4 border-l-2 border-[#B12223] pl-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#B12223] font-semibold block">
              REVOPS EXCELLENCE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#6D0305] uppercase tracking-tight">
              Automating High-Frequency Micro-Decisions
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-sans">
              Instead of forcing sales reps and operators to jump between LinkedIn, company websites, spreadsheets,
              and CRM records, my automation workflows orchestrate autonomous agents that gather intelligence,
              rank ICP relevance, and queue verified leads directly into your rep&apos;s daily pipeline.
            </p>
          </div>

          <div className="lg:col-span-7 border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-12 space-y-6">
            <h3 className="font-display text-2xl text-[#6D0305] uppercase tracking-tight">
              Where AI Automation Delivers Leverage
            </h3>

            <div className="space-y-4 font-sans text-sm text-[#450C0A]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B12223] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#6D0305] block">Autonomous Account Research:</strong>
                  Multi-agent scrapers that extract company signals, tech stack data, and recent announcements to draft hyper-relevant messaging.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B12223] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#6D0305] block">HubSpot &amp; CRM Synchronization:</strong>
                  Bi-directional webhooks with n8n and Make that log interaction notes, update deal stages, and trigger automated alerts.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B12223] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#6D0305] block">Deterministic ICP Lead Scoring:</strong>
                  Hybrid evaluation combining hard qualification criteria with LLM contextual reasoning to eliminate low-probability pipeline clutter.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Case Proof Points */}
        <div className="border-t border-[#6D0305]/15 pt-16 mb-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#6D0305]/15 pb-4 mb-10">
            <span className="font-display text-3xl text-[#6D0305] uppercase tracking-tight">
              AUTOMATION IMPACT DELIVERED
            </span>
            <Link href="/work" className="text-xs font-mono text-[#B12223] hover:text-[#6D0305] uppercase font-semibold flex items-center gap-1">
              <span>View Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 space-y-4">
              <span className="text-[11px] font-mono text-[#B12223] font-bold uppercase tracking-wider block">
                PARTNER ACQUISITION ENGINE
              </span>
              <h3 className="font-display text-2xl text-[#6D0305] uppercase tracking-tight">
                Clozzet India — 3× Lead Velocity
              </h3>
              <p className="text-xs sm:text-sm text-[#450C0A] leading-relaxed font-sans">
                Engineered automated brand discovery pipelines combining Apollo.io scraping, LLM qualification,
                and HubSpot automation, slashing manual prospecting time by 60% across the commercial team.
              </p>
              <Link href="/work/partner-acquisition" className="inline-flex items-center gap-1 text-xs font-mono text-[#B12223] font-semibold underline underline-offset-4">
                <span>View Partner Pipeline Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 space-y-4">
              <span className="text-[11px] font-mono text-[#B12223] font-bold uppercase tracking-wider block">
                MULTI-AGENT RESEARCH PLATFORM
              </span>
              <h3 className="font-display text-2xl text-[#6D0305] uppercase tracking-tight">
                10-15 Qualified Accounts / Rep / Week
              </h3>
              <p className="text-xs sm:text-sm text-[#450C0A] leading-relaxed font-sans">
                Deployed an asynchronous LangGraph multi-agent cluster that continuously researches companies,
                scores them against strict ICP rules, and prepares customized outreach drafts.
              </p>
              <Link href="/work/multi-agent" className="inline-flex items-center gap-1 text-xs font-mono text-[#B12223] font-semibold underline underline-offset-4">
                <span>View Multi-Agent Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section 3: Next Actions */}
        <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-display text-3xl text-[#6D0305] uppercase tracking-tight">
              Tired Of Manual Prospecting And Broken CRM Data?
            </h3>
            <p className="text-xs sm:text-sm text-[#450C0A] font-sans">
              Schedule a discovery session to map your highest-friction workflows and design an automated solution.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/ai-solutions"
              className="px-5 py-3 border-2 border-[#6D0305] text-[#6D0305] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#6D0305] hover:text-[#FCF7F1] transition-colors"
            >
              Solutions Engineering
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 bg-[#B12223] text-[#FCF7F1] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#6D0305] transition-colors"
            >
              Discuss Your Pipeline →
            </Link>
          </div>
        </div>
      </article>

      <FooterEditorial />
    </main>
  );
}
