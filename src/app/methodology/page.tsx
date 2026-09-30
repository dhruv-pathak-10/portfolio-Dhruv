import Navbar from "@/components/Navbar";
import FooterEditorial from "@/components/FooterEditorial";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Adoption Methodology & Client Discovery Framework — Dhruv Pathak",
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
      title: "Build for Frontline Adoption",
      subtitle: "Low Cognitive Friction & In-Workflow Delivery",
      desc: "An AI system ignored by operators has negative ROI. Design interfaces that live where reps already work (WhatsApp, Slack, CRM records) requiring zero net-new behavioral friction.",
      deliverable: "Operator UX Spec & Frictionless Delivery Surface",
    },
    {
      num: "06",
      title: "Measure Real Outcomes",
      subtitle: "Commercial Impact > Model Benchmarks",
      desc: "Replace vanity metrics like token throughput or prompt accuracy with lead response latency, conversion uplift, rep hours returned, and revenue leakage eliminated.",
      deliverable: "KPI Dashboard & Commercial ROI Audit",
    },
    {
      num: "07",
      title: "Iterate & Institutionalize",
      subtitle: "Feedback Loops & System Maintenance",
      desc: "Review failure logs, capture edge cases, refine prompts and deterministic routing logic, and train internal champions to maintain and own the system independently.",
      deliverable: "Operator Playbook & Runbook Documentation",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F6F1EB] text-[#1C1917] selection:bg-[#B12223] selection:text-[#FCF7F1]">
      <Navbar />

      <section className="pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
        {/* Editorial Header */}
        <div className="border-b border-[#6D0305]/15 pb-8 mb-16 sm:mb-20">
          <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#450C0A] uppercase mb-6">
            <span>METHODOLOGY / ADOPTION FRAMEWORK</span>
            <span>SYSTEMATIC CONSULTING</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl text-[#6D0305] uppercase tracking-tight leading-[0.9]">
            HOW I SOLVE
            <span className="block text-[#B12223]">CLIENT PROBLEMS.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#450C0A] font-medium max-w-3xl font-sans">
            A 7-stage consulting framework for turning ambiguous organizational friction
            into production-grade AI systems with verified frontline adoption.
          </p>
        </div>

        {/* 7-Step Editorial Sequence */}
        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-12 hover:border-[#6D0305] transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Step Number & Title */}
                <div className="lg:col-span-4 space-y-2">
                  <span className="font-display text-4xl sm:text-5xl text-[#B12223]">
                    {step.num}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl text-[#6D0305] uppercase tracking-tight">
                    {step.title}
                  </h2>
                  <div className="text-xs font-mono text-[#78716C]">
                    {step.subtitle}
                  </div>
                </div>

                {/* Step Description */}
                <div className="lg:col-span-5 font-sans">
                  <p className="text-xs sm:text-sm text-[#450C0A] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Deliverable Box */}
                <div className="lg:col-span-3 border-l-2 border-[#B12223] pl-4 space-y-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#B12223] font-bold block">
                    DELIVERABLE
                  </span>
                  <p className="text-xs font-mono text-[#6D0305]">
                    {step.deliverable}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FooterEditorial />
    </main>
  );
}
