import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import CustomCursor from "@/components/CustomCursor";
import { PROFILE, EXPERIENCE_ITEMS, EDUCATION, PROOF_METRICS } from "@/data/portfolioData";
import { Download, ExternalLink, FileText, CheckCircle2, ShieldCheck, Mail, Phone, MapPin, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume & Curriculum Vitae — Dhruv Pathak",
  description:
    "Curriculum Vitae and Executive Brief for Dhruv Pathak — AI Solutions Engineer, AI Adoption Specialist, and Solution Architect.",
};

export default function ResumePage() {
  const resumePdfPath = "/Dhruv_Pathak_AI_Adoption_Specialist_Resume.pdf";

  return (
    <main className="min-h-screen bg-[#080A0F] text-[#F5F7FA]">
      <CustomCursor />
      <Navbar />

      <section className="pt-36 pb-20 px-6 md:px-10 max-w-5xl mx-auto">
        {/* Header & Download Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-white/[0.08] mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest bg-white/[0.04] border border-white/10 text-[#4F7CFF] mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>EXECUTIVE RESUME</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              CURRICULUM VITAE
            </h1>
            <p className="mt-1 text-sm font-mono text-[#8B93A3]">
              AI Solutions Engineer · AI Adoption &amp; Solution Architecture
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#4F7CFF] text-white text-xs font-mono font-semibold hover:bg-[#3d6bf0] shadow-md shadow-[#4F7CFF]/25 transition-all"
            >
              <span>OPEN PDF</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={resumePdfPath}
              download="Dhruv_Pathak_AI_Adoption_Specialist_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.05] border border-white/10 text-white text-xs font-mono font-medium hover:bg-white/10 transition-all"
            >
              <span>DOWNLOAD PDF</span>
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Structured Web Representation of Resume */}
        <div className="rounded-3xl bg-[#0E121B] border border-white/[0.08] p-8 sm:p-12 shadow-2xl space-y-12">
          {/* Header Info */}
          <div className="pb-8 border-b border-white/[0.08]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-white">
                  DHRUV PATHAK
                </h2>
                <div className="text-xs font-mono text-[#4F7CFF] mt-1 font-semibold">
                  AI Solutions Engineer · AI Adoption Specialist · Solution Architect
                </div>
              </div>

              <div className="space-y-1 text-xs font-mono text-[#8B93A3]">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#4F7CFF]" />
                  <span>work.dhruvpathak@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>+91 63546 66048</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#8B93A3]" />
                  <span>itsdhruv.online · Ahmedabad, India</span>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs sm:text-sm text-[#8B93A3] leading-relaxed font-sans">
              AI solutions engineer with hands-on experience designing and deploying production
              Voice AI agents (inbound/outbound), multi-agent architectures, and agentic automation
              workflows. Manages the complete client engagement lifecycle: discovery, requirements
              gathering, architecture documentation, build, delivery, and frontline handoff.
            </p>
          </div>

          {/* Key Competencies Matrix */}
          <div>
            <h3 className="text-xs font-mono tracking-widest text-[#4F7CFF] uppercase font-bold mb-4">
              CORE COMPETENCIES &amp; CAPABILITIES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-white font-bold mb-1">AI Agents &amp; Voice</div>
                <div className="text-[#8B93A3]">
                  ElevenLabs Voice AI, LangChain, LangGraph, CrewAI, RAG, Prompt Engineering
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-white font-bold mb-1">Automation &amp; RevOps</div>
                <div className="text-[#8B93A3]">
                  n8n, Make, HubSpot CRM, Apollo.io, WhatsApp Business API, Outbound Pipelines
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-white font-bold mb-1">Client Delivery &amp; Architecture</div>
                <div className="text-[#8B93A3]">
                  End-to-End SDLC, Requirements Gathering, US/UK Stakeholder Comms, RBAC Systems
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-xs font-mono tracking-widest text-[#4F7CFF] uppercase font-bold mb-6">
              OPERATIONAL EXPERIENCE
            </h3>
            <div className="space-y-8">
              {EXPERIENCE_ITEMS.map((item) => (
                <div key={item.id} className="pb-6 border-b border-white/[0.05] last:border-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-base font-bold text-white">
                      {item.role}
                    </h4>
                    <span className="text-xs font-mono text-[#8B93A3]">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-[#4F7CFF] mb-3">
                    {item.company} · {item.location}
                  </div>
                  <ul className="space-y-2 text-xs text-[#8B93A3] font-sans">
                    {item.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#4F7CFF] font-mono mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="pt-6 border-t border-white/[0.08]">
            <h3 className="text-xs font-mono tracking-widest text-[#4F7CFF] uppercase font-bold mb-4">
              EDUCATION &amp; CERTIFICATIONS
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-bold text-white">
                  {EDUCATION.degree}
                </div>
                <div className="text-xs font-mono text-[#8B93A3]">
                  {EDUCATION.institution} | {EDUCATION.expectedYear}
                </div>
                <div className="text-xs text-[#8B93A3] mt-1 font-sans">
                  Focus: {EDUCATION.focus} · Team Lead in Smart India Hackathon
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs font-mono text-white/60 block mb-2">
                  Specialized Certifications:
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {EDUCATION.certifications.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-white/80"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              DOCUMENT PREVIEW
            </span>
            <span className="text-xs font-mono text-[#8B93A3]">
              PDF Source Document
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#0E121B] h-[800px] w-full">
            <iframe
              src={`${resumePdfPath}#toolbar=0`}
              className="w-full h-full border-none"
              title="Dhruv Pathak Resume PDF"
            />
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
