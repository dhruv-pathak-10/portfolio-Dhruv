"use client";

import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

export default function DecisionEngineEditorial() {
  const [q1, setQ1] = useState<boolean | null>(true);
  const [q2, setQ2] = useState<boolean | null>(true);
  const [q3, setQ3] = useState<boolean | null>(true);
  const [q4, setQ4] = useState<boolean | null>(false);

  const getDecision = () => {
    if (q1 === null || q2 === null || q3 === null || q4 === null) {
      return {
        verdict: "ANSWER ALL 4 QUESTIONS",
        explanation: "Select your answers on the left to evaluate process viability.",
        color: "text-[#78716C]",
      };
    }

    if (!q3) {
      return {
        verdict: "INVESTIGATE FIRST",
        explanation:
          "Without accessible context, clean logs, or ground-truth documentation, any AI or automated pipeline will hallucinate or fail. Fix data hygiene and map the workflow first.",
        color: "text-[#B12223]",
      };
    }

    if (q4) {
      if (q1 && q3) {
        return {
          verdict: "AI-ASSIST (HUMAN-IN-THE-LOOP)",
          explanation:
            "The process demands high nuance or high-stakes human empathy, but repetitive research and draft generation consume too much time. Use AI to prepare intelligence; keep humans in final control.",
          color: "text-[#B12223]",
        };
      } else {
        return {
          verdict: "KEEP HUMAN",
          explanation:
            "This process relies primarily on relational empathy, ethical intuition, or bespoke creative negotiation. Automating this will alienate clients or introduce unacceptable risk.",
          color: "text-[#6D0305]",
        };
      }
    }

    if (q1 && q2 && q3) {
      return {
        verdict: "AUTOMATE",
        explanation:
          "Deterministic decisions, high repetition, and clean data make this an ideal candidate for end-to-end automation with n8n/Make pipelines and targeted LLM extraction.",
        color: "text-[#B12223]",
      };
    }

    return {
      verdict: "INVESTIGATE FIRST",
      explanation:
        "The problem presents conflicting operational signals. A structured diagnostic interview is required to audit the exact bottleneck before writing code.",
      color: "text-[#B12223]",
    };
  };

  const decision = getDecision();

  return (
    <section id="ai-question" className="bg-[#F6F1EB] py-24 sm:py-32 border-b border-[#6D0305]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex items-baseline justify-between border-b border-[#6D0305]/15 pb-4 mb-16 sm:mb-20">
          <span className="font-display text-4xl sm:text-6xl text-[#B12223]">
            06
          </span>
          <span className="text-xs font-mono tracking-widest text-[#450C0A] uppercase">
            THE AI QUESTION / DIAGNOSTIC POSTER
          </span>
        </div>

        {/* Poster Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Questions as Editorial Controls */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <h2 className="font-display text-5xl sm:text-7xl text-[#6D0305] uppercase tracking-tight leading-[0.92]">
                SHOULD THIS
                <span className="block text-[#B12223]">ACTUALLY BE AI?</span>
              </h2>
              <p className="mt-4 text-xs font-mono text-[#78716C]">
                An editorial diagnostic for founders and operators.
              </p>
            </div>

            {/* Questions List */}
            <div className="space-y-6 border-t border-[#6D0305]/15 pt-6 text-sm font-mono">
              {/* Question 1 */}
              <div className="flex items-center justify-between pb-4 border-b border-[#6D0305]/10">
                <span className="text-[#450C0A]">01 · Is the process repetitive?</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setQ1(true)}
                    className={`px-3 py-1 text-xs border transition-colors ${
                      q1 === true
                        ? "bg-[#B12223] text-[#FCF7F1] border-[#B12223]"
                        : "border-[#6D0305]/30 text-[#450C0A] hover:border-[#B12223]"
                    }`}
                  >
                    YES
                  </button>
                  <button
                    onClick={() => setQ1(false)}
                    className={`px-3 py-1 text-xs border transition-colors ${
                      q1 === false
                        ? "bg-[#B12223] text-[#FCF7F1] border-[#B12223]"
                        : "border-[#6D0305]/30 text-[#450C0A] hover:border-[#B12223]"
                    }`}
                  >
                    NO
                  </button>
                </div>
              </div>

              {/* Question 2 */}
              <div className="flex items-center justify-between pb-4 border-b border-[#6D0305]/10">
                <span className="text-[#450C0A]">02 · Involves structured decisions?</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setQ2(true)}
                    className={`px-3 py-1 text-xs border transition-colors ${
                      q2 === true
                        ? "bg-[#B12223] text-[#FCF7F1] border-[#B12223]"
                        : "border-[#6D0305]/30 text-[#450C0A] hover:border-[#B12223]"
                    }`}
                  >
                    YES
                  </button>
                  <button
                    onClick={() => setQ2(false)}
                    className={`px-3 py-1 text-xs border transition-colors ${
                      q2 === false
                        ? "bg-[#B12223] text-[#FCF7F1] border-[#B12223]"
                        : "border-[#6D0305]/30 text-[#450C0A] hover:border-[#B12223]"
                    }`}
                  >
                    NO
                  </button>
                </div>
              </div>

              {/* Question 3 */}
              <div className="flex items-center justify-between pb-4 border-b border-[#6D0305]/10">
                <span className="text-[#450C0A]">03 · Does useful data exist?</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setQ3(true)}
                    className={`px-3 py-1 text-xs border transition-colors ${
                      q3 === true
                        ? "bg-[#B12223] text-[#FCF7F1] border-[#B12223]"
                        : "border-[#6D0305]/30 text-[#450C0A] hover:border-[#B12223]"
                    }`}
                  >
                    YES
                  </button>
                  <button
                    onClick={() => setQ3(false)}
                    className={`px-3 py-1 text-xs border transition-colors ${
                      q3 === false
                        ? "bg-[#B12223] text-[#FCF7F1] border-[#B12223]"
                        : "border-[#6D0305]/30 text-[#450C0A] hover:border-[#B12223]"
                    }`}
                  >
                    NO
                  </button>
                </div>
              </div>

              {/* Question 4 */}
              <div className="flex items-center justify-between pb-4 border-b border-[#6D0305]/10">
                <span className="text-[#450C0A]">04 · Requires human judgement?</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setQ4(true)}
                    className={`px-3 py-1 text-xs border transition-colors ${
                      q4 === true
                        ? "bg-[#B12223] text-[#FCF7F1] border-[#B12223]"
                        : "border-[#6D0305]/30 text-[#450C0A] hover:border-[#B12223]"
                    }`}
                  >
                    YES
                  </button>
                  <button
                    onClick={() => setQ4(false)}
                    className={`px-3 py-1 text-xs border transition-colors ${
                      q4 === false
                        ? "bg-[#B12223] text-[#FCF7F1] border-[#B12223]"
                        : "border-[#6D0305]/30 text-[#450C0A] hover:border-[#B12223]"
                    }`}
                  >
                    NO
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Poster Verdict */}
          <div className="lg:col-span-6 bg-[#FCF7F1] border-2 border-[#6D0305] p-8 sm:p-12 space-y-6">
            <span className="text-[11px] font-mono tracking-widest text-[#B12223] uppercase block font-bold">
              RECOMMENDED POSTURE
            </span>

            <div className={`font-display text-4xl sm:text-6xl ${decision.color} uppercase tracking-tight`}>
              {decision.verdict}
            </div>

            <p className="text-sm sm:text-base text-[#1C1917] leading-relaxed font-sans border-t border-[#6D0305]/15 pt-6">
              {decision.explanation}
            </p>

            <div className="pt-4 border-t border-[#6D0305]/15 flex items-center justify-between text-xs font-mono text-[#78716C]">
              <span>Rule: AI should create leverage, not complexity.</span>
              <button
                onClick={() => {
                  setQ1(true);
                  setQ2(true);
                  setQ3(true);
                  setQ4(false);
                }}
                className="text-[#B12223] hover:underline"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
