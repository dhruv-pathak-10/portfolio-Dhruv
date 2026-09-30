import Navbar from "@/components/Navbar";
import FooterEditorial from "@/components/FooterEditorial";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/jsonld";
import { ArrowRight, CheckCircle2, ChevronRight, Mic, PhoneCall, Volume2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice AI & Conversational Telephony Engineer — Dhruv Pathak",
  description:
    "Production-grade Voice AI agents and conversational telephony by Dhruv Pathak. Sub-2s streaming latency, calendar booking, and CRM integration for 24/7 conversion.",
  alternates: {
    canonical: "https://itsdhruv.online/voice-ai",
  },
  openGraph: {
    title: "Voice AI & Conversational Telephony Engineer — Dhruv Pathak",
    description: "Inbound and outbound Voice AI telephony agents with sub-2s latency, custom personas, and automated CRM booking.",
    url: "https://itsdhruv.online/voice-ai",
  },
};

export default function VoiceAiPillarPage() {
  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "Home", item: "/" },
    { name: "Voice AI", item: "/voice-ai" },
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
          <span className="text-[#6D0305] font-semibold">Voice AI Telephony</span>
        </nav>

        {/* Editorial Header */}
        <div className="border-b border-[#6D0305]/15 pb-8 mb-16 sm:mb-20">
          <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#450C0A] uppercase mb-6">
            <span>DISCIPLINE / REALTIME SPEECH PIPELINES</span>
            <span>SUB-2S LATENCY</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl text-[#6D0305] uppercase tracking-tight leading-[0.9]">
            VOICE AI &amp;
            <span className="block text-[#B12223]">CONVERSATIONAL TELEPHONY.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#450C0A] font-medium max-w-3xl font-sans">
            Inbound leads go cold when they wait hours for a sales rep to call back.
            I engineer production Voice AI calling agents that answer instantly,
            hold natural human-like conversations, extract qualification criteria,
            and book meetings directly on your team&apos;s calendar.
          </p>
        </div>

        {/* Section 1: The Voice Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5 space-y-4 border-l-2 border-[#B12223] pl-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#B12223] font-semibold block">
              REALTIME SPEECH ENGINEERING
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#6D0305] uppercase tracking-tight">
              Beyond Chatbots: Natural Audio Interaction
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-sans">
              Voice telephony is unforgiving. A delay of 3 seconds feels like a broken connection, and robotic voices destroy credibility.
              My voice architectures integrate ultra-low-latency speech-to-text, fast LLM reasoning,
              and ElevenLabs conversational voice synthesis over WebSockets to maintain natural, sub-2s conversational turnarounds.
            </p>
          </div>

          <div className="lg:col-span-7 border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-12 space-y-6">
            <h3 className="font-display text-2xl text-[#6D0305] uppercase tracking-tight">
              Production Voice AI Capabilities
            </h3>

            <div className="space-y-4 font-sans text-sm text-[#450C0A]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B12223] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#6D0305] block">Instant Inbound Qualification:</strong>
                  Answer international and domestic callers 24/7 within 2 rings, collecting verified contact info and intent.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B12223] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#6D0305] block">Dynamic Calendar Tool Calling:</strong>
                  The agent checks live rep availability and books slots into Google Calendar / Calendly during the call.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B12223] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#6D0305] block">Deterministic CRM Sync:</strong>
                  Call recordings, transcriptions, and structured summaries are automatically written into HubSpot or Salesforce records.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Case Proof Points */}
        <div className="border-t border-[#6D0305]/15 pt-16 mb-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#6D0305]/15 pb-4 mb-10">
            <span className="font-display text-3xl text-[#6D0305] uppercase tracking-tight">
              FEATURED VOICE AI CASE STUDY
            </span>
            <Link href="/work/voice-ai" className="text-xs font-mono text-[#B12223] hover:text-[#6D0305] uppercase font-semibold flex items-center gap-1">
              <span>Read Full Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-12 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#6D0305]/15 pb-4">
              <div>
                <span className="text-[11px] font-mono text-[#B12223] font-bold uppercase tracking-wider block">
                  ADMISSIONS &amp; CONSULTING ADVISORY
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-[#6D0305] uppercase tracking-tight mt-1">
                  15+ Inbound Leads Converted via Voice AI
                </h3>
              </div>
              <div className="text-right">
                <div className="font-display text-3xl sm:text-4xl text-[#B12223]">&lt;2.0s</div>
                <div className="text-[10px] font-mono text-[#78716C] uppercase">Latency Threshold</div>
              </div>
            </div>

            <p className="text-sm text-[#450C0A] leading-relaxed font-sans max-w-3xl">
              An admissions consultancy was losing high-intent prospects across international time zones due to slow rep callback times.
              I engineered an autonomous inbound Voice AI agent that greeted prospects in natural English,
              answered admissions criteria, handled pricing questions with strict guardrails, and scheduled direct 1-on-1 advisor consultations.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {["Retell AI / Vapi", "ElevenLabs", "FastAPI", "WebSockets", "HubSpot CRM", "Google Calendar"].map((t) => (
                <span key={t} className="px-3 py-1 text-xs font-mono bg-[#EADEDA]/60 border border-[#6D0305]/15 text-[#450C0A]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Next Actions */}
        <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-display text-3xl text-[#6D0305] uppercase tracking-tight">
              Want To Deploy Voice AI In Your Operations?
            </h3>
            <p className="text-xs sm:text-sm text-[#450C0A] font-sans">
              Schedule a technical discovery session to review audio streaming, latency targets, and CRM routing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/solution-architecture"
              className="px-5 py-3 border-2 border-[#6D0305] text-[#6D0305] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#6D0305] hover:text-[#FCF7F1] transition-colors"
            >
              Systems Architecture
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 bg-[#B12223] text-[#FCF7F1] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#6D0305] transition-colors"
            >
              Discuss Voice Telephony →
            </Link>
          </div>
        </div>
      </article>

      <FooterEditorial />
    </main>
  );
}
