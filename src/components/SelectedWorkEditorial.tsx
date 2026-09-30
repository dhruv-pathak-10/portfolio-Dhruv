import Link from "next/link";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { CASE_STUDIES } from "@/data/portfolioData";

export default function SelectedWorkEditorial() {
  return (
    <section id="work" className="bg-[#FCF7F1] py-24 sm:py-32 border-b border-[#6D0305]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex items-baseline justify-between border-b border-[#6D0305]/15 pb-4 mb-16 sm:mb-20">
          <span className="font-display text-4xl sm:text-6xl text-[#B12223]">
            05
          </span>
          <span className="text-xs font-mono tracking-widest text-[#450C0A] uppercase">
            SELECTED WORK / ARCHITECTURAL CASE STUDIES
          </span>
        </div>

        <div className="max-w-4xl mb-20 sm:mb-24">
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-[#6D0305] uppercase tracking-tight">
            SELECTED WORK.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#78716C] font-mono leading-relaxed">
            Four production implementations demonstrating client discovery, architecture, and defensible ROI.
          </p>
        </div>

        {/* Full-Width Editorial Case Studies */}
        <div className="space-y-24 sm:space-y-32">
          {/* ========================================================
              CASE STUDY 01: PRODUCTION VOICE AI
          ======================================================== */}
          <div className="border-t-2 border-[#6D0305] pt-8 sm:pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-3">
                <span className="font-display text-6xl sm:text-8xl text-[#B12223] block leading-none">
                  01
                </span>
                <span className="text-xs font-mono tracking-widest uppercase text-[#450C0A] font-bold block mt-3">
                  PRODUCTION VOICE AI
                </span>
                <div className="mt-4 text-xs font-mono text-[#B12223] font-semibold">
                  15+ INBOUND LEADS CONVERTED
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <h3 className="font-display text-3xl sm:text-5xl text-[#6D0305] uppercase leading-tight">
                  PRODUCTION VOICE AI CALLING AGENT
                </h3>

                <p className="text-sm sm:text-base text-[#1C1917] leading-relaxed font-sans">
                  Designed and deployed production-grade inbound and outbound Voice AI agents with
                  custom conversational logic, CRM integration and booking workflows for a live admissions advisory client.
                </p>

                <div className="border-l-2 border-[#B12223] pl-4 text-xs text-[#78716C] font-sans">
                  Solved after-hours international lead leakage. Sub-2s response latency with live HubSpot CRM lead creation and Google Calendar appointment reservations.
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["ElevenLabs", "LangChain", "REST APIs", "HubSpot CRM", "Google Calendar"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono text-[#6D0305] border border-[#6D0305]/20 bg-transparent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-3 lg:border-l lg:border-[#6D0305]/15 lg:pl-8 space-y-4">
                <span className="text-[11px] font-mono tracking-widest text-[#B12223] uppercase block font-semibold">
                  SYSTEM PIPELINE:
                </span>
                <div className="space-y-2 text-xs font-mono text-[#450C0A]">
                  <div>01 Telephony Ingestion</div>
                  <div>02 ElevenLabs Voice Stream</div>
                  <div>03 LangChain Logic Engine</div>
                  <div>04 CRM Auto-Sync (#HubSpot)</div>
                  <div>05 Calendar Confirmation</div>
                  <div>06 Human Advisor Handoff</div>
                </div>

                <Link
                  href="/work/voice-ai"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#B12223] hover:text-[#6D0305] underline underline-offset-4 pt-4"
                >
                  <span>READ ARCHITECTURE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* ========================================================
              CASE STUDY 02: MULTI-AGENT AI AUTOMATION
          ======================================================== */}
          <div className="border-t-2 border-[#6D0305] pt-8 sm:pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-3">
                <span className="font-display text-6xl sm:text-8xl text-[#B12223] block leading-none">
                  02
                </span>
                <span className="text-xs font-mono tracking-widest uppercase text-[#450C0A] font-bold block mt-3">
                  MULTI-AGENT AUTOMATION
                </span>
                <div className="mt-4 text-xs font-mono text-[#B12223] font-semibold">
                  10–15 LEADS/WK · ~10 HRS SAVED/WK
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <h3 className="font-display text-3xl sm:text-5xl text-[#6D0305] uppercase leading-tight">
                  MULTI-AGENT AI BUSINESS AUTOMATION
                </h3>

                <p className="text-sm sm:text-base text-[#1C1917] leading-relaxed font-sans">
                  Sales teams spend hours researching target accounts, assessing ICP fit, and writing
                  outreach. Deployed an autonomous agentic pipeline qualifying prospects and generating bespoke outbound sequences.
                </p>

                {/* Minimal Architecture Diagram */}
                <div className="p-4 bg-[#F6F1EB] border border-[#6D0305]/15 text-xs font-mono space-y-2">
                  <div className="text-[10px] text-[#B12223] uppercase tracking-widest font-bold">
                    MINIMAL ARCHITECTURE FLOW:
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-[#450C0A]">
                    <span>ACCOUNT</span>
                    <span className="text-[#B12223]">→</span>
                    <span>RESEARCH</span>
                    <span className="text-[#B12223]">→</span>
                    <span>QUALIFICATION</span>
                    <span className="text-[#B12223]">→</span>
                    <span>OUTREACH</span>
                    <span className="text-[#B12223]">→</span>
                    <span>CRM</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["LangChain", "LangGraph", "LLM Orchestration", "n8n", "Apollo.io", "HubSpot", "Python"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono text-[#6D0305] border border-[#6D0305]/20 bg-transparent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-3 lg:border-l lg:border-[#6D0305]/15 lg:pl-8 space-y-4">
                <span className="text-[11px] font-mono tracking-widest text-[#B12223] uppercase block font-semibold">
                  VERIFIED IMPACT:
                </span>
                <ul className="space-y-2 text-xs text-[#78716C] font-sans">
                  <li>• 10–15 target accounts autonomously qualified per week</li>
                  <li>• ~10 hours saved per sales rep every week</li>
                  <li>• Deterministic ICP scoring threshold preventing low-value clutter</li>
                </ul>

                <Link
                  href="/work/multi-agent"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#B12223] hover:text-[#6D0305] underline underline-offset-4 pt-4"
                >
                  <span>READ ARCHITECTURE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* ========================================================
              CASE STUDY 03: AI-POWERED PARTNER ACQUISITION
          ======================================================== */}
          <div className="border-t-2 border-[#6D0305] pt-8 sm:pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-3">
                <span className="font-display text-6xl sm:text-8xl text-[#B12223] block leading-none">
                  03
                </span>
                <span className="text-xs font-mono tracking-widest uppercase text-[#450C0A] font-bold block mt-3">
                  REVOPS &amp; ACQUISITION
                </span>
                <div className="mt-4 text-xs font-mono text-[#B12223] font-semibold">
                  60% LESS EFFORT · 3× LEADS/WK
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <h3 className="font-display text-3xl sm:text-5xl text-[#6D0305] uppercase leading-tight">
                  AI-POWERED PARTNER ACQUISITION
                </h3>

                <p className="text-sm sm:text-base text-[#1C1917] leading-relaxed font-sans">
                  Engineered automated acquisition workflows combining AI agents, CRM pipeline logic, and multi-channel
                  outreach for India&apos;s first hyperlocal fashion marketplace (Clozzet India).
                </p>

                <div className="p-4 bg-[#F6F1EB] border border-[#6D0305]/15 text-xs font-mono">
                  <span className="text-[#6D0305] font-bold">CORE FORMULA: </span>
                  <span className="text-[#B12223]">AI AGENTS + CRM + AUTOMATION</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["n8n", "Make", "HubSpot CRM", "Apollo.io", "WhatsApp Business API"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono text-[#6D0305] border border-[#6D0305]/20 bg-transparent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-3 lg:border-l lg:border-[#6D0305]/15 lg:pl-8 space-y-4">
                <span className="text-[11px] font-mono tracking-widest text-[#B12223] uppercase block font-semibold">
                  OPERATIONAL RESULT:
                </span>
                <ul className="space-y-2 text-xs text-[#78716C] font-sans">
                  <li>• 60% reduction in manual prospecting effort</li>
                  <li>• 3× qualified brand leads generated per week</li>
                  <li>• Scaled partner onboarding without adding sales headcount</li>
                </ul>

                <Link
                  href="/work/partner-acquisition"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#B12223] hover:text-[#6D0305] underline underline-offset-4 pt-4"
                >
                  <span>READ ARCHITECTURE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* ========================================================
              CASE STUDY 04: SCHOOL ERP
          ======================================================== */}
          <div className="border-t-2 border-[#6D0305] pt-8 sm:pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-3">
                <span className="font-display text-6xl sm:text-8xl text-[#78716C] block leading-none">
                  04
                </span>
                <span className="text-xs font-mono tracking-widest uppercase text-[#450C0A] font-bold block mt-3">
                  PLATFORM OWNERSHIP
                </span>
                <div className="mt-4 text-xs font-mono text-[#6D0305] font-semibold">
                  500+ ACTIVE ERP USERS
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <h3 className="font-display text-3xl sm:text-5xl text-[#6D0305] uppercase leading-tight">
                  ENTERPRISE SCHOOL ERP ARCHITECTURE
                </h3>

                <p className="text-sm sm:text-base text-[#1C1917] leading-relaxed font-sans">
                  Demonstrated full-lifecycle SDLC platform ownership: stakeholder discovery, relational schema modeling,
                  role-based portals for faculty and admin, and production cloud deployment.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Requirements Gathering", "Relational Database", "Role-Based Access Control", "Full-Stack SDLC", "Cloud Hosting"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono text-[#6D0305] border border-[#6D0305]/20 bg-transparent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-3 lg:border-l lg:border-[#6D0305]/15 lg:pl-8 space-y-4">
                <span className="text-[11px] font-mono tracking-widest text-[#450C0A] uppercase block font-semibold">
                  DELIVERY HIGHLIGHTS:
                </span>
                <ul className="space-y-2 text-xs text-[#78716C] font-sans">
                  <li>• 500+ active institutional users</li>
                  <li>• 100% paperless daily attendance and gradebook records</li>
                  <li>• Full lifecycle delivery from paper discovery to deployment</li>
                </ul>

                <Link
                  href="/work/school-erp"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#6D0305] hover:text-[#B12223] underline underline-offset-4 pt-4"
                >
                  <span>READ ARCHITECTURE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
