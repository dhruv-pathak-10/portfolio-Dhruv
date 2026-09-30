import Navbar from "@/components/Navbar";
import FooterEditorial from "@/components/FooterEditorial";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd, getPersonJsonLd } from "@/lib/jsonld";
import { ONBOARDING_ROADMAP, EDUCATION } from "@/data/portfolioData";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dhruv Pathak — Operating Philosophy & Background",
  description:
    "AI Solutions Engineer working between business problems and technical execution. Read Dhruv's operating principles, value pillars, and 30-day onboarding roadmap.",
  alternates: {
    canonical: "https://itsdhruv.online/about",
  },
  openGraph: {
    title: "About Dhruv Pathak — Operating Philosophy & Background",
    description: "Operating principles, technical philosophy, and commercial impact delivered by Dhruv Pathak.",
    url: "https://itsdhruv.online/about",
  },
};

export default function AboutPage() {
  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "Home", item: "/" },
    { name: "About", item: "/about" },
  ]);
  const personJsonLd = getPersonJsonLd();

  return (
    <main className="min-h-screen bg-[#F6F1EB] text-[#1C1917] selection:bg-[#B12223] selection:text-[#FCF7F1]">
      <JsonLd data={breadcrumbs} />
      <JsonLd data={personJsonLd} />
      <Navbar />

      <section className="pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
        {/* Editorial Header */}
        <div className="border-b border-[#6D0305]/15 pb-8 mb-16 sm:mb-20">
          <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#450C0A] uppercase mb-6">
            <span>ABOUT / OPERATING THESIS</span>
            <span>AHMEDABAD, INDIA</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl text-[#6D0305] uppercase tracking-tight leading-[0.9]">
            I WORK BETWEEN
            <span className="block text-[#B12223]">TWO WORLDS.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#450C0A] font-medium max-w-3xl font-sans">
            &ldquo;I understand the business problem well enough to ask better questions,
            and I understand the technology well enough to turn those questions into
            executable solutions.&rdquo;
          </p>
        </div>

        {/* 2-Column Editorial Grid with Dhruv's Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="border-2 border-[#6D0305] p-3 bg-[#FCF7F1]">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/images/dhruv-cutout.png"
                  alt="Dhruv Pathak"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-contain object-bottom contrast-[1.02]"
                />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#78716C]">
              <span>DHRUV PATHAK</span>
              <span>AI SOLUTIONS ENGINEER</span>
            </div>
          </div>

          {/* Right Column: In-Depth Philosophy */}
          <div className="lg:col-span-7 space-y-8 font-sans">
            <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-10 space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl text-[#6D0305] uppercase tracking-tight">
                The Problem with Standard AI Implementation
              </h2>
              <p className="text-sm text-[#450C0A] leading-relaxed">
                Most software teams make one of two fundamental mistakes when approaching AI.
                They either build technically elaborate systems that solve irrelevant bottlenecks,
                or they purchase off-the-shelf SaaS tools that frontline staff abandon within 30 days
                because the software doesn&apos;t fit the daily workflow.
              </p>
              <p className="text-sm text-[#450C0A] leading-relaxed">
                I position myself at the intersection of both disciplines: uncovering the operational
                friction with executives and operators, designing modular architectures with deterministic
                guardrails, and ensuring frontline team members experience immediate leverage.
              </p>
            </div>

            {/* Three Core Value Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 border border-[#6D0305]/20 bg-[#FCF7F1] space-y-2">
                <span className="font-display text-2xl text-[#B12223]">01</span>
                <h3 className="font-display text-lg text-[#6D0305] uppercase tracking-tight">
                  Business-First Discovery
                </h3>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  Never recommend or build AI without first quantifying the friction, unit economics, and operator workflow.
                </p>
              </div>

              <div className="p-6 border border-[#6D0305]/20 bg-[#FCF7F1] space-y-2">
                <span className="font-display text-2xl text-[#B12223]">02</span>
                <h3 className="font-display text-lg text-[#6D0305] uppercase tracking-tight">
                  Deterministic Guardrails
                </h3>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  Hallucinations and unconstrained prompts belong in demos. Production systems require structured schemas and fallback states.
                </p>
              </div>

              <div className="p-6 border border-[#6D0305]/20 bg-[#FCF7F1] space-y-2">
                <span className="font-display text-2xl text-[#B12223]">03</span>
                <h3 className="font-display text-lg text-[#6D0305] uppercase tracking-tight">
                  Frontline Adoption
                </h3>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  A model only delivers value when real humans trust it enough to make it part of their daily habit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 30-Day Onboarding Roadmap */}
        <div className="border-t border-[#6D0305]/15 pt-16">
          <div className="border-b border-[#6D0305]/15 pb-4 mb-12 flex items-baseline justify-between">
            <span className="font-display text-3xl sm:text-4xl text-[#6D0305] uppercase tracking-tight">
              30-DAY VALUE ACCELERATION
            </span>
            <span className="text-xs font-mono tracking-widest text-[#B12223] uppercase font-semibold">
              HOW I DELIVER VALUE FROM DAY 1
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ONBOARDING_ROADMAP.map((phase) => (
              <div
                key={phase.period}
                className="border border-[#6D0305]/20 bg-[#FCF7F1] p-6 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-[#6D0305]/15 pb-3">
                  <span className="font-display text-xl text-[#B12223]">
                    {phase.period}
                  </span>
                </div>
                <h4 className="font-display text-base text-[#6D0305] uppercase tracking-tight">
                  {phase.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#450C0A] leading-relaxed font-sans">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterEditorial />
    </main>
  );
}
