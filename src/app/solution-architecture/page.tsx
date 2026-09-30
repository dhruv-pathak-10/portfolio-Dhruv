import Navbar from "@/components/Navbar";
import FooterEditorial from "@/components/FooterEditorial";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/jsonld";
import { ArrowRight, CheckCircle2, ChevronRight, Layers, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solution Architecture & Systems Design — Dhruv Pathak",
  description:
    "AI solution architecture frameworks by Dhruv Pathak. Deterministic guardrails, stateful LangGraph DAGs, modular microservices, and enterprise integration blueprints.",
  alternates: {
    canonical: "https://itsdhruv.online/solution-architecture",
  },
  openGraph: {
    title: "AI Solution Architecture & Systems Design — Dhruv Pathak",
    description: "Architecting reliable production AI systems: deterministic guardrails, structured schemas, and modular pipelines.",
    url: "https://itsdhruv.online/solution-architecture",
  },
};

export default function SolutionArchitecturePage() {
  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "Home", item: "/" },
    { name: "Solution Architecture", item: "/solution-architecture" },
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
          <span className="text-[#6D0305] font-semibold">Solution Architecture</span>
        </nav>

        {/* Editorial Header */}
        <div className="border-b border-[#6D0305]/15 pb-8 mb-16 sm:mb-20">
          <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#450C0A] uppercase mb-6">
            <span>DISCIPLINE / ARCHITECTURAL BLUEPRINTS</span>
            <span>SYSTEMS INTEGRITY</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl text-[#6D0305] uppercase tracking-tight leading-[0.9]">
            AI SOLUTION
            <span className="block text-[#B12223]">ARCHITECTURE.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#450C0A] font-medium max-w-3xl font-sans">
            Demos thrive on chaotic prompts. Production demands deterministic architecture.
            I design modular, schema-validated AI systems with strict guardrails,
            predictable state machines, and transparent human-in-the-loop escalation paths.
          </p>
        </div>

        {/* Section 1: Architectural Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5 space-y-4 border-l-2 border-[#B12223] pl-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#B12223] font-semibold block">
              ENGINEERING RIGOR
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#6D0305] uppercase tracking-tight">
              Why Prompt Engineering Is Not Architecture
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-sans">
              Relying on a 5,000-token prompt to enforce business rules inevitably produces hallucinations,
              inconsistent formatting, and security vulnerabilities.
              Robust AI architecture decomposes workflows into stateful Directed Acyclic Graphs (DAGs)
              where each node executes a bounded micro-decision with verified schema outputs.
            </p>
          </div>

          <div className="lg:col-span-7 border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-12 space-y-6">
            <h3 className="font-display text-2xl text-[#6D0305] uppercase tracking-tight">
              Architectural Pillars for Production AI
            </h3>

            <div className="space-y-4 font-sans text-sm text-[#450C0A]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B12223] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#6D0305] block">Schema-Validated I/O:</strong>
                  Every tool call and LLM output is strictly validated against Pydantic / JSON schemas before execution.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B12223] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#6D0305] block">Deterministic Fallback States:</strong>
                  When confidence scores drop below calibrated thresholds, calls and tasks safely fall back to pre-defined rules or human reps.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B12223] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#6D0305] block">Direct Native Integration:</strong>
                  Avoid detached third-party dashboards. Systems read from and write directly to your core operational stack (HubSpot, PostgreSQL, Slack).
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Architectural Blueprints */}
        <div className="border-t border-[#6D0305]/15 pt-16 mb-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#6D0305]/15 pb-4 mb-10">
            <span className="font-display text-3xl text-[#6D0305] uppercase tracking-tight">
              REPRESENTATIVE BLUEPRINTS
            </span>
            <Link href="/work" className="text-xs font-mono text-[#B12223] hover:text-[#6D0305] uppercase font-semibold flex items-center gap-1">
              <span>View Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 space-y-4">
              <span className="text-[11px] font-mono text-[#B12223] font-bold uppercase tracking-wider block">
                STATEFUL MULTI-AGENT DAG
              </span>
              <h3 className="font-display text-2xl text-[#6D0305] uppercase tracking-tight">
                LangGraph Research &amp; Scoring Engine
              </h3>
              <p className="text-xs sm:text-sm text-[#450C0A] leading-relaxed font-sans">
                Coordinated asynchronous research, web scraping, and ICP qualification agents.
                Outputs pass through strict Pydantic parsers before triggering automated CRM sequence updates.
              </p>
              <Link href="/work/multi-agent" className="inline-flex items-center gap-1 text-xs font-mono text-[#B12223] font-semibold underline underline-offset-4">
                <span>Inspect Multi-Agent Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 space-y-4">
              <span className="text-[11px] font-mono text-[#B12223] font-bold uppercase tracking-wider block">
                REALTIME SPEECH PIPELINE
              </span>
              <h3 className="font-display text-2xl text-[#6D0305] uppercase tracking-tight">
                Sub-2s Latency Voice Telephony
              </h3>
              <p className="text-xs sm:text-sm text-[#450C0A] leading-relaxed font-sans">
                Engineered WebSocket streaming voice pipelines combining speech-to-text, LLM intent recognition,
                conversational voice synthesis, and dynamic calendar booking with sub-2s conversational turn latency.
              </p>
              <Link href="/work/voice-ai" className="inline-flex items-center gap-1 text-xs font-mono text-[#B12223] font-semibold underline underline-offset-4">
                <span>Inspect Voice Telephony Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section 3: Next Actions */}
        <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-display text-3xl text-[#6D0305] uppercase tracking-tight">
              Need To Architect A Production-Grade AI System?
            </h3>
            <p className="text-xs sm:text-sm text-[#450C0A] font-sans">
              Let&apos;s map out your integration boundaries, data contracts, and reliability guardrails.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/ai-automation"
              className="px-5 py-3 border-2 border-[#6D0305] text-[#6D0305] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#6D0305] hover:text-[#FCF7F1] transition-colors"
            >
              Explore AI Automation
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 bg-[#B12223] text-[#FCF7F1] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#6D0305] transition-colors"
            >
              Consult On Architecture →
            </Link>
          </div>
        </div>
      </article>

      <FooterEditorial />
    </main>
  );
}
