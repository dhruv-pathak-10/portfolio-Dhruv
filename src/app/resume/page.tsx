import Navbar from "@/components/Navbar";
import FooterEditorial from "@/components/FooterEditorial";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd, getPersonJsonLd } from "@/lib/jsonld";
import { EXPERIENCE_ITEMS, EDUCATION, PROOF_METRICS } from "@/data/portfolioData";
import { Download, ExternalLink, FileText, CheckCircle2, Mail, Phone, MapPin, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume & Curriculum Vitae — Dhruv Pathak",
  description:
    "Curriculum Vitae and Executive Brief for Dhruv Pathak — AI Solutions Engineer, AI Adoption Specialist, and Solution Architect.",
  alternates: {
    canonical: "https://itsdhruv.online/resume",
  },
  openGraph: {
    title: "Resume & Curriculum Vitae — Dhruv Pathak",
    description: "Executive resume and curriculum vitae for Dhruv Pathak — AI Solutions Engineer & Solution Architect.",
    url: "https://itsdhruv.online/resume",
  },
};

export default function ResumePage() {
  const resumePdfPath = "/Dhruv_Pathak_AI_Adoption_Specialist_Resume.pdf";
  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "Home", item: "/" },
    { name: "Resume", item: "/resume" },
  ]);
  const personJsonLd = getPersonJsonLd();

  return (
    <main className="min-h-screen bg-[#F6F1EB] text-[#1C1917] selection:bg-[#B12223] selection:text-[#FCF7F1]">
      <JsonLd data={breadcrumbs} />
      <JsonLd data={personJsonLd} />
      <Navbar />

      <section className="pt-32 pb-24 px-6 md:px-10 max-w-5xl mx-auto">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#6D0305]/15 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#B12223] uppercase font-semibold block mb-2">
              DOCUMENTATION / RESUME
            </span>
            <h1 className="font-display text-5xl sm:text-7xl text-[#6D0305] uppercase tracking-tight">
              CURRICULUM VITAE
            </h1>
            <p className="mt-2 text-xs sm:text-sm font-mono text-[#78716C]">
              AI Solutions Engineer · AI Adoption &amp; Solution Architecture
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#B12223] text-[#FCF7F1] text-xs font-mono font-semibold uppercase tracking-wider hover:bg-[#6D0305] transition-colors"
            >
              <span>VIEW PDF</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={resumePdfPath}
              download="Dhruv_Pathak_AI_Adoption_Specialist_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 border-2 border-[#6D0305] text-[#6D0305] text-xs font-mono font-semibold uppercase tracking-wider hover:bg-[#6D0305] hover:text-[#FCF7F1] transition-colors"
            >
              <span>DOWNLOAD</span>
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Structured Web CV Card */}
        <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-14 space-y-12 shadow-sm">
          {/* Header Info */}
          <div className="pb-8 border-b border-[#6D0305]/15">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div>
                <h2 className="font-display text-4xl sm:text-5xl text-[#6D0305] uppercase tracking-tight">
                  DHRUV PATHAK
                </h2>
                <div className="text-xs font-mono text-[#B12223] mt-1 font-semibold tracking-wider uppercase">
                  AI Solutions Engineer · AI Adoption Specialist · Solution Architect
                </div>
              </div>

              <div className="space-y-1 text-xs font-mono text-[#450C0A]">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#B12223]" />
                  <span>work.dhruvpathak@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#B12223]" />
                  <span>+91 63546 66048</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#B12223]" />
                  <span>itsdhruv.online · Ahmedabad, India</span>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-[#450C0A] leading-relaxed font-sans">
              AI solutions engineer with hands-on experience designing and deploying production
              Voice AI agents (inbound/outbound), multi-agent architectures, and agentic automation
              workflows. Manages the complete client engagement lifecycle: discovery, requirements
              gathering, architecture documentation, build, delivery, and frontline handoff.
            </p>
          </div>

          {/* Key Competencies Matrix */}
          <div>
            <h3 className="text-xs font-mono tracking-widest text-[#B12223] uppercase font-bold mb-4">
              CORE COMPETENCIES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono text-[#450C0A]">
              <div className="flex items-center gap-2 p-2.5 bg-[#EADEDA]/40 border border-[#6D0305]/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B12223] shrink-0" />
                <span>Voice AI Engineering</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-[#EADEDA]/40 border border-[#6D0305]/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B12223] shrink-0" />
                <span>Multi-Agent Automations</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-[#EADEDA]/40 border border-[#6D0305]/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B12223] shrink-0" />
                <span>Solution Architecture</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-[#EADEDA]/40 border border-[#6D0305]/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B12223] shrink-0" />
                <span>Client Discovery &amp; Scoping</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-[#EADEDA]/40 border border-[#6D0305]/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B12223] shrink-0" />
                <span>RevOps &amp; CRM Integration</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-[#EADEDA]/40 border border-[#6D0305]/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B12223] shrink-0" />
                <span>Deterministic Guardrails</span>
              </div>
            </div>
          </div>

          {/* Experience Chronology */}
          <div>
            <h3 className="text-xs font-mono tracking-widest text-[#B12223] uppercase font-bold mb-6">
              EXPERIENCE
            </h3>
            <div className="space-y-8">
              {EXPERIENCE_ITEMS.map((item, idx) => (
                <div key={idx} className="border-l-2 border-[#B12223] pl-6 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-display text-xl sm:text-2xl text-[#6D0305] uppercase tracking-tight">
                      {item.role}
                    </h4>
                    <span className="text-xs font-mono text-[#78716C]">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-[#B12223] font-semibold">
                    {item.company} · {item.location}
                  </div>
                  <p className="text-xs sm:text-sm text-[#450C0A] leading-relaxed pt-1 font-sans">
                    {item.summary}
                  </p>
                  <ul className="space-y-1.5 pt-2">
                    {item.highlights.map((highlight, aIdx) => (
                      <li key={aIdx} className="text-xs font-sans text-[#78716C] flex items-start gap-2">
                        <span className="text-[#B12223] font-bold">—</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="border-t border-[#6D0305]/15 pt-8">
            <h3 className="text-xs font-mono tracking-widest text-[#B12223] uppercase font-bold mb-3">
              EDUCATION &amp; RECOGNITION
            </h3>
            <div className="text-sm font-sans text-[#450C0A]">
              <span className="font-bold text-[#6D0305]">{EDUCATION.degree}</span> — {EDUCATION.institution} ({EDUCATION.expectedYear})
            </div>
            <div className="text-xs font-mono text-[#78716C] mt-1">
              Focus: {EDUCATION.focus} · Smart India Hackathon Team Lead
            </div>
          </div>
        </div>
      </section>

      <FooterEditorial />
    </main>
  );
}
