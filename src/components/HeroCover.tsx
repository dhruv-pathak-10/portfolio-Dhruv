"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";

export default function HeroCover() {
  return (
    <section className="relative bg-[#F6F1EB] pt-8 pb-20 md:pt-12 md:pb-28 overflow-hidden border-b border-[#6D0305]/15">
      {/* Top Editorial Metadata Banner */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-8 md:mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono tracking-widest text-[#450C0A] uppercase border-b border-[#6D0305]/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#B12223]" />
            <span className="font-semibold text-[#6D0305]">DHRUV PATHAK</span>
            <span>/</span>
            <span>AHMEDABAD, INDIA</span>
          </div>

          <div className="flex items-center gap-4">
            <span>AI SOLUTIONS ENGINEER</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">AI ADOPTION &amp; CONSULTING</span>
          </div>
        </div>
      </div>

      {/* Main Magazine Cover Composition */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
        {/* Background Large Headline Behind/Around Portrait */}
        <div className="relative z-0 select-none">
          <div className="font-display text-[64px] sm:text-[100px] md:text-[130px] lg:text-[160px] leading-[0.88] text-[#B12223] tracking-tighter uppercase">
            <span>I DON&apos;T</span>
            <span className="block text-[#6D0305]">JUST BUILD AI.</span>
          </div>
        </div>

        {/* Central Editorial Subject & Overlapping Typography */}
        <div className="relative z-10 -mt-8 sm:-mt-16 md:-mt-24 lg:-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left Column: Supporting statement & Metadata */}
          <div className="lg:col-span-4 order-2 lg:order-1 space-y-6 pt-6 lg:pt-0">
            <div className="border-l-2 border-[#B12223] pl-4">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#B12223] block mb-1 font-semibold">
                CORE THESIS
              </span>
              <p className="text-sm sm:text-base text-[#450C0A] font-medium leading-snug">
                &ldquo;I don&apos;t just build AI. I figure out where it belongs.&rdquo;
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-sans max-w-sm">
              AI Solutions Engineer working across AI adoption, solution architecture,
              automation and business workflows — turning messy operational problems into
              practical, deployable systems.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B12223] text-[#FCF7F1] text-xs font-mono font-semibold tracking-wider hover:bg-[#6D0305] transition-colors"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDownRight className="w-4 h-4" />
              </Link>

              <Link
                href="/resume"
                className="text-xs font-mono tracking-wider text-[#6D0305] hover:text-[#B12223] underline underline-offset-4 transition-colors"
              >
                VIEW RESUME
              </Link>
            </div>
          </div>

          {/* Center / Right Column: The Visual Portrait Anchor */}
          <div className="lg:col-span-8 order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] sm:max-w-[540px] md:max-w-[600px] aspect-[4/5] overflow-hidden border border-[#6D0305]/20 shadow-xl shadow-[#6D0305]/5">
              {/* Decorative Red Tint & Cream Matting */}
              <Image
                src="/dhruv-portrait.jpg"
                alt="Dhruv Pathak — AI Solutions Engineer"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 550px"
                className="object-cover object-top filter contrast-[1.03]"
              />

              {/* Editorial bottom title strip overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#6D0305]/90 via-[#6D0305]/40 to-transparent p-6 pt-16 text-[#FCF7F1]">
                <div className="font-display text-2xl sm:text-3xl tracking-tight uppercase">
                  DHRUV PATHAK
                </div>
                <div className="text-[11px] font-mono tracking-widest uppercase text-[#EADEDA]">
                  AI ADOPTION · SOLUTION ARCHITECTURE · REVOPS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Headline Row: Asymmetrical Typography */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#6D0305]/15 flex flex-col md:flex-row md:items-baseline justify-between gap-6">
          <div className="font-display text-3xl sm:text-5xl md:text-6xl text-[#6D0305] tracking-tight uppercase">
            I FIGURE OUT WHERE IT BELONGS.
          </div>

          <div className="text-xs font-mono text-[#78716C] max-w-xs shrink-0">
            <span>&ldquo;I bridge business problems and technical execution.&rdquo;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
