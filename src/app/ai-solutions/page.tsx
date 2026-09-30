import Navbar from "@/components/Navbar";
import FooterEditorial from "@/components/FooterEditorial";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/jsonld";
import { ArrowRight, CheckCircle2, ChevronRight, Cpu, Layers } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions Engineer & Technical Delivery — Dhruv Pathak",
  description:
    "Production-grade AI solutions engineering by Dhruv Pathak. Discovery, architecture, multi-agent pipelines, API integrations, and client-facing technical deployment.",
  alternates: {
    canonical: "https://itsdhruv.online/ai-solutions",
  },
  openGraph: {
    title: "AI Solutions Engineer & Technical Delivery — Dhruv Pathak",
    description: "End-to-end AI solutions engineering: discovery, architecture, multi-agent systems, and production APIs.",
    url: "https://itsdhruv.online/ai-solutions",
  },
};

export default function AiSolutionsPage() {
  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "Home", item: "/" },
    { name: "AI Solutions", item: "/ai-solutions" },
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
          <span className="text-[#6D0305] font-semibold">AI Solutions Engineering</span>
        </nav>

        {/* Editorial Header */}
        <div className="border-b border-[#6D0305]/15 pb-8 mb-16 sm:mb-20">
          <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#450C0A] uppercase mb-6">
            <span>CORE DISCIPLINE / SYSTEMS DELIVERY</span>
            <span>END-TO-END OWNERSHIP</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl text-[#6D0305] uppercase tracking-tight leading-[0.9]">
            AI SOLUTIONS
            <span className="block text-[#B12223]">ENGINEERING.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#450C0A] font-medium max-w-3xl font-sans">
            I don&apos;t just build AI. I figure out where it belongs.
            As an AI Solutions Engineer, I guide the complete project lifecycle:
            scoping ambiguous business friction, designing defensible technical architectures,
            and shipping reliable production systems.
          </p>
        </div>

        {/* Section 1: The Dual Discipline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5 space-y-4 border-l-2 border-[#B12223] pl-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#B12223] font-semibold block">
              THE VALUE PROPOSITION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#6D0305] uppercase tracking-tight">
              Bridging Executive Strategy &amp; Hands-On Code
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-sans">
              Traditional software engineers often struggle in direct executive discovery, while non-technical consultants
              recommend architectures they cannot build or debug.
              I operate across both domains — translating business goals into clean schemas, API contracts, and deployable agents.
            </p>
          </div>

          <div className="lg:col-span-7 border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-12 space-y-6">
            <h3 className="font-display text-2xl text-[#6D0305] uppercase tracking-tight">
              Core Technical Competencies
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans text-sm text-[#450C0A]">
              <div className="space-y-1">
                <strong className="text-[#6D0305] block font-mono text-xs uppercase">Multi-Agent Orchestration</strong>
                <p className="text-xs text-[#78716C]">
                  Building stateful agentic workflows with LangGraph and CrewAI using schema-constrained tool-calling and deterministic fallback states.
                </p>
              </div>

              <div className="space-y-1">
                <strong className="text-[#6D0305] block font-mono text-xs uppercase">Voice AI Telephony</strong>
                <p className="text-xs text-[#78716C]">
                  Realtime sub-2s conversational voice calling agents with dynamic calendar booking and bidirectional CRM sync.
                </p>
              </div>

              <div className="space-y-1">
                <strong className="text-[#6D0305] block font-mono text-xs uppercase">RevOps &amp; CRM Automation</strong>
                <p className="text-xs text-[#78716C]">
                  Connecting HubSpot, Apollo.io, Make, and n8n to automate complex lead scoring, data enrichment, and SDR workflows.
                </p>
              </div>

              <div className="space-y-1">
                <strong className="text-[#6D0305] block font-mono text-xs uppercase">Full-Stack Architecture</strong>
                <p className="text-xs text-[#78716C]">
                  Python, FastAPI, Next.js, and relational databases engineered with role-based access control and production uptime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Case Proof Points */}
        <div className="border-t border-[#6D0305]/15 pt-16 mb-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#6D0305]/15 pb-4 mb-10">
            <span className="font-display text-3xl text-[#6D0305] uppercase tracking-tight">
              DEPLOYED SYSTEMS &amp; VERIFIED IMPACT
            </span>
            <Link href="/work" className="text-xs font-mono text-[#B12223] hover:text-[#6D0305] uppercase font-semibold flex items-center gap-1">
              <span>View Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 space-y-4">
              <span className="text-[11px] font-mono text-[#B12223] font-bold uppercase tracking-wider block">
                MULTI-AGENT BUSINESS AUTOMATION
              </span>
              <h3 className="font-display text-2xl text-[#6D0305] uppercase tracking-tight">
                10 Hours Saved Weekly Per Rep
              </h3>
              <p className="text-xs sm:text-sm text-[#450C0A] leading-relaxed font-sans">
                Engineered an autonomous multi-agent platform combining web intelligence, ICP scoring algorithms,
                and personalized sequence generation — eliminating 10 hours of manual research per sales representative.
              </p>
              <Link href="/work/multi-agent" className="inline-flex items-center gap-1 text-xs font-mono text-[#B12223] font-semibold underline underline-offset-4">
                <span>View Architecture Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 space-y-4">
              <span className="text-[11px] font-mono text-[#B12223] font-bold uppercase tracking-wider block">
                FULL-STACK SYSTEM ARCHITECTURE
              </span>
              <h3 className="font-display text-2xl text-[#6D0305] uppercase tracking-tight">
                500+ Active Enterprise Users
              </h3>
              <p className="text-xs sm:text-sm text-[#450C0A] leading-relaxed font-sans">
                Architected and shipped an institutional school ERP platform from requirements gathering through deployment,
                handling grading, attendance, and communications with zero downtime.
              </p>
              <Link href="/work/school-erp" className="inline-flex items-center gap-1 text-xs font-mono text-[#B12223] font-semibold underline underline-offset-4">
                <span>View ERP Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section 3: Next Actions */}
        <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-display text-3xl text-[#6D0305] uppercase tracking-tight">
              Looking For A Technical AI Solutions Engineer?
            </h3>
            <p className="text-xs sm:text-sm text-[#450C0A] font-sans">
              Review my structured CV, technical milestones, and verified commercial deliverables.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/resume"
              className="px-5 py-3 border-2 border-[#6D0305] text-[#6D0305] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#6D0305] hover:text-[#FCF7F1] transition-colors"
            >
              View Resume
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 bg-[#B12223] text-[#FCF7F1] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#6D0305] transition-colors"
            >
              Schedule Conversation →
            </Link>
          </div>
        </div>
      </article>

      <FooterEditorial />
    </main>
  );
}
