"use client";

import { useState } from "react";
import { HelpCircle, CheckCircle, RefreshCcw, Sparkles, ArrowRight, ShieldCheck, Cpu, UserCheck, AlertTriangle } from "lucide-react";

export default function DecisionEngine() {
  const [q1, setQ1] = useState<boolean | null>(true); // Repetitive?
  const [q2, setQ2] = useState<boolean | null>(true); // Structured rules?
  const [q3, setQ3] = useState<boolean | null>(true); // Clean context/data available?
  const [q4, setQ4] = useState<boolean | null>(false); // High-stakes human empathy/judgement?

  // Diagnostic outcome calculation
  const getOutcome = () => {
    if (q1 === null || q2 === null || q3 === null || q4 === null) {
      return {
        title: "COMPLETE THE 4 QUESTIONS",
        type: "pending",
        badge: "INCOMPLETE",
        badgeClass: "bg-white/10 text-white/60",
        desc: "Answer each question to see how an AI adoption strategist evaluates this operational problem.",
        action: "Select your answers above",
      };
    }

    if (!q3) {
      return {
        title: "INVESTIGATE FIRST (DATA AUDIT)",
        type: "investigate",
        badge: "AUDIT REQUIRED",
        badgeClass: "bg-amber-500/15 border-amber-500/30 text-amber-300",
        desc: "Without accessible, structured context or verified ground-truth documentation, any AI or automated model will hallucinate or fail. Fix data hygiene and map the workflow first before writing code.",
        action: "Conduct a 7-day data & workflow mapping audit.",
      };
    }

    if (q4) {
      if (q1 && q3) {
        return {
          title: "AI-ASSIST (HUMAN-IN-THE-LOOP)",
          type: "assist",
          badge: "RECOMMENDED: AI-ASSIST",
          badgeClass: "bg-[#4F7CFF]/15 border-[#4F7CFF]/30 text-[#4F7CFF]",
          desc: "The task involves high nuance or high-stakes empathy, but repetitive research and draft generation consume too much time. Use AI to enrich context, summarize signals, and prepare drafts, while human experts make the final decision.",
          action: "Architect an AI copilot with strict human sign-off triggers.",
        };
      } else {
        return {
          title: "KEEP HUMAN (NO AI NEEDED)",
          type: "human",
          badge: "HUMAN FIRST",
          badgeClass: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
          desc: "This process relies primarily on relational empathy, ethical intuition, or bespoke creative negotiation. Automating this will alienate customers or introduce unacceptable liability.",
          action: "Empower your team with better standard operating procedures.",
        };
      }
    }

    if (q1 && q2 && q3) {
      return {
        title: "AUTOMATE (DETERMINISTIC & AI ENGINE)",
        type: "automate",
        badge: "HIGH LEVERAGE AUTOMATION",
        badgeClass: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
        desc: "Prime target for end-to-end automation. Structured decisions, high repetition, and clean data mean you can eliminate manual drag with n8n/Make pipelines and targeted LLM extraction.",
        action: "Design an automated webhook and orchestration pipeline.",
      };
    }

    return {
      title: "INVESTIGATE FIRST",
      type: "investigate",
      badge: "AUDIT REQUIRED",
      badgeClass: "bg-amber-500/15 border-amber-500/30 text-amber-300",
      desc: "The problem contains mixed signals. A structured diagnostic interview is recommended to uncover the exact bottleneck before investing capital in AI tools.",
      action: "Book a discovery call to map workflow viability.",
    };
  };

  const outcome = getOutcome();

  const reset = () => {
    setQ1(true);
    setQ2(true);
    setQ3(true);
    setQ4(false);
  };

  return (
    <section id="decision-engine" className="py-24 md:py-32 relative bg-[#080A0F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest bg-white/[0.04] border border-white/10 text-[#4F7CFF] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>DIAGNOSTIC ENGINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            SHOULD THIS ACTUALLY BE AI?
          </h2>

          <p className="mt-3 text-lg sm:text-xl font-mono text-[#8B93A3]">
            Find the bottleneck before choosing the technology.
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#8B93A3] leading-relaxed">
            The most valuable question an AI consultant can ask a founder is often:
            &ldquo;Can we solve this deterministically without an LLM?&rdquo; Run this 4-step diagnostic.
          </p>
        </div>

        {/* Diagnostic Wizard Box */}
        <div className="rounded-3xl bg-[#0E121B] border border-white/[0.08] p-6 sm:p-10 relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 4 Questions Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Question 1 */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-mono text-[#8B93A3] mb-1">QUESTION 01</div>
                <div className="text-sm sm:text-base font-semibold text-white mb-3">
                  Is the operational process highly repetitive &amp; recurring?
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setQ1(true)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                      q1 === true
                        ? "bg-[#4F7CFF] text-white shadow-sm"
                        : "bg-white/5 text-[#8B93A3] hover:text-white"
                    }`}
                  >
                    YES — Daily / High Volume
                  </button>
                  <button
                    onClick={() => setQ1(false)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                      q1 === false
                        ? "bg-[#4F7CFF] text-white shadow-sm"
                        : "bg-white/5 text-[#8B93A3] hover:text-white"
                    }`}
                  >
                    NO — Infrequent / Bespoke
                  </button>
                </div>
              </div>

              {/* Question 2 */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-mono text-[#8B93A3] mb-1">QUESTION 02</div>
                <div className="text-sm sm:text-base font-semibold text-white mb-3">
                  Does it involve structured business rules &amp; deterministic logic?
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setQ2(true)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                      q2 === true
                        ? "bg-[#4F7CFF] text-white shadow-sm"
                        : "bg-white/5 text-[#8B93A3] hover:text-white"
                    }`}
                  >
                    YES — Clear if/then logic exists
                  </button>
                  <button
                    onClick={() => setQ2(false)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                      q2 === false
                        ? "bg-[#4F7CFF] text-white shadow-sm"
                        : "bg-white/5 text-[#8B93A3] hover:text-white"
                    }`}
                  >
                    NO — Intuitive / Ambiguous
                  </button>
                </div>
              </div>

              {/* Question 3 */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-mono text-[#8B93A3] mb-1">QUESTION 03</div>
                <div className="text-sm sm:text-base font-semibold text-white mb-3">
                  Is verified context, clean data, or documentation accessible?
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setQ3(true)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                      q3 === true
                        ? "bg-[#4F7CFF] text-white shadow-sm"
                        : "bg-white/5 text-[#8B93A3] hover:text-white"
                    }`}
                  >
                    YES — Ground truth is available
                  </button>
                  <button
                    onClick={() => setQ3(false)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                      q3 === false
                        ? "bg-[#4F7CFF] text-white shadow-sm"
                        : "bg-white/5 text-[#8B93A3] hover:text-white"
                    }`}
                  >
                    NO — Data fragmented or absent
                  </button>
                </div>
              </div>

              {/* Question 4 */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-mono text-[#8B93A3] mb-1">QUESTION 04</div>
                <div className="text-sm sm:text-base font-semibold text-white mb-3">
                  Does the final outcome require human empathy or high-stakes judgement?
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setQ4(true)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                      q4 === true
                        ? "bg-[#4F7CFF] text-white shadow-sm"
                        : "bg-white/5 text-[#8B93A3] hover:text-white"
                    }`}
                  >
                    YES — Empathy / Nuance critical
                  </button>
                  <button
                    onClick={() => setQ4(false)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                      q4 === false
                        ? "bg-[#4F7CFF] text-white shadow-sm"
                        : "bg-white/5 text-[#8B93A3] hover:text-white"
                    }`}
                  >
                    NO — Routine execution
                  </button>
                </div>
              </div>

              <button
                onClick={reset}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#8B93A3] hover:text-white transition-colors cursor-pointer"
              >
                <RefreshCcw className="w-3.5 h-3.5" />
                <span>Reset Diagnostic</span>
              </button>
            </div>

            {/* Right Output Recommendation Column */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#080A0F] border border-white/10 p-6 sm:p-8 relative">
                <span className="text-[10px] font-mono tracking-widest text-[#8B93A3] uppercase block mb-3">
                  DIAGNOSTIC EVALUATION
                </span>

                <span
                  className={`inline-block px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider border mb-4 ${outcome.badgeClass}`}
                >
                  {outcome.badge}
                </span>

                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-4">
                  {outcome.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8B93A3] leading-relaxed font-sans mb-6">
                  {outcome.desc}
                </p>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#4F7CFF] font-semibold mb-1">
                    Recommended Next Action:
                  </div>
                  <div className="text-xs font-mono text-white">
                    {outcome.action}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-[#8B93A3] border-t border-white/5 pt-4">
                  &ldquo;AI should create leverage, not complexity.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
