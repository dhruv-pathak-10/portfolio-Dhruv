import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import CustomCursor from "@/components/CustomCursor";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Layers, ShieldCheck, Target, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Adoption Methodology & Client Discovery Framework",
  description:
    "The 7-step systematic consulting framework for translating ambiguous client friction into executable, high-ROI AI solutions with guaranteed frontline adoption.",
};

export default function MethodologyPage() {
  const steps = [
    {
      num: "01",
      title: "Understand the Business",
      subtitle: "Commercial & Operational Context",
      desc: "Analyze the client's revenue model, gross margins, customer journey, existing software stack, team structure, and operational constraints before uttering a single technical term.",
      deliverable: "Commercial Context Map & Constraint Inventory",
    },
    {
      num: "02",
      title: "Find the True Bottleneck",
      subtitle: "Root-Cause Friction Audit",
      desc: "Audit the daily reality of frontline teams. Is the issue a lack of speed, messy data hygiene, or missing follow-ups? Quantify the monthly cost in pipeline leakage and rep hours.",
      deliverable: "Root Friction Diagnostic & Value Leakage Matrix",
    },
    {
      num: "03",
      title: "Reframe the Enquiry",
      subtitle: "Distinguishing Novelty from Leverage",
      desc: "Move past 'Which AI tool should we buy?' to 'Which micro-decisions in this workflow can be assisted deterministically, and where must human empathy remain in control?'",
      deliverable: "AI Opportunity Prioritization Scorecard",
    },
    {
      num: "04",
      title: "Architect the Smallest Valuable Build",
      subtitle: "Modular Architecture & Guardrails",
      desc: "Design a modular architecture with deterministic safety rails, structured schema validation, and fallback procedures. Connect directly into existing CRMs to avoid dashboard fatigue.",
      deliverable: "Production Architecture Blueprint & API Contracts",
    },
    {
      num: "05",
      title: "Frontline Enablement & Adoption",
      subtitle: "Eliminating User Friction",
      desc: "An AI system ignored by operators yields zero ROI. We build frictionless handoffs, clear notification alerts, and lead interactive enablement sessions for non-technical teams.",
      deliverable: "Standard Operating Procedure (SOP) & Team Enablement Kit",
    },
    {
      num: "06",
      title: "Measure Against Benchmark KPIs",
      subtitle: "Defensible ROI Validation",
      desc: "Evaluate the pilot against defensible commercial metrics: hours saved, response latency reduction, qualification rate lift, and user adoption frequency.",
      deliverable: "Adoption Audit Report & Verified ROI Dashboard",
    },
    {
      num: "07",
      title: "Scale & Continuous Optimization",
      subtitle: "Feedback Loops & Model Tuning",
      desc: "Establish structured feedback loops to catch edge-case divergences, refine system prompts, update vector indexes, and expand system scope predictably.",
      deliverable: "Long-term System Governance & Tuning Playbook",
    },
  ];

  return (
    <main className="min-h-screen bg-[#080A0F] text-[#F5F7FA]">
      <CustomCursor />
      <Navbar />

      <section className="pt-36 pb-20 px-6 md:px-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest bg-white/[0.04] border border-white/10 text-[#4F7CFF] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>CONSULTING METHODOLOGY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            THE 7-STEP AI ADOPTION LIFECYCLE
          </h1>

          <p className="mt-4 text-lg text-[#8B93A3] font-mono leading-relaxed">
            &ldquo;AI should enter a workflow at the point where it creates leverage — not simply where it looks technically impressive.&rdquo;
          </p>
        </div>

        {/* Core Thesis Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0E121B] border border-white/[0.08] mb-16 shadow-2xl">
          <h2 className="text-xl font-mono font-bold text-white mb-4">
            Why Traditional AI Implementations Stall
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#8B93A3] leading-relaxed">
            <p>
              Companies rarely struggle because artificial intelligence models do not exist.
              They struggle because the root high-impact problem has not been identified, the
              underlying operational workflow has not been mapped, and frontline teams are handed
              fragile software without a frictionless adoption path.
            </p>
            <p>
              My approach starts with the business reality, audits daily friction, and engineers
              backward into technical execution. A technically flawless model that addresses an
              irrelevant bottleneck produces zero business value.
            </p>
          </div>
        </div>

        {/* 7 Steps Accordion/Cards */}
        <div className="space-y-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="p-6 sm:p-8 rounded-2xl bg-[#0E121B] border border-white/[0.08] hover:border-[#4F7CFF]/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06] mb-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-mono font-bold text-[#4F7CFF]">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {s.title}
                    </h3>
                    <span className="text-xs font-mono text-[#8B93A3]">
                      {s.subtitle}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-mono text-emerald-400">
                  Deliverable: {s.deliverable}
                </div>
              </div>

              <p className="text-sm text-[#8B93A3] leading-relaxed font-sans">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
