"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroCover() {
  return (
    <section className="relative bg-[#F6F1EB] min-h-[calc(100svh-64px)] lg:h-[calc(100svh-64px)] flex flex-col justify-between overflow-hidden border-b border-[#6D0305]/15">
      {/* =========================================================================
          LAYER 1 & 3: Background & Subtle Architectural Graphic Anchor
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Subtle architectural vertical line anchoring the composition */}
        <div className="hidden lg:block absolute left-[55%] top-0 bottom-0 w-[1px] bg-[#6D0305]/10" />
        {/* Physical editorial rectangular color block behind subject */}
        <div className="hidden lg:block absolute left-[42%] right-[10%] top-16 bottom-0 bg-[#EADEDA]/25 -z-10" />
      </div>

      {/* =========================================================================
          TOP: Editorial Metadata Strip (Begins safely below Navbar, never clipped)
          ========================================================================= */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 pt-4 sm:pt-6 z-20 shrink-0">
        <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono tracking-widest text-[#450C0A] uppercase border-b border-[#6D0305]/15 pb-3">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#B12223]" />
            <span className="font-semibold text-[#6D0305]">DHRUV PATHAK</span>
            <span className="text-[#6D0305]/40">/</span>
            <span>AHMEDABAD, INDIA</span>
          </div>

          <div className="flex items-center gap-4 text-[#78716C]">
            <span className="text-[#6D0305] font-medium">AI SOLUTIONS ENGINEER</span>
            <span className="hidden sm:inline text-[#6D0305]/40">·</span>
            <span className="hidden sm:inline">AI ADOPTION &amp; CONSULTING</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN STAGE: Overlapping Typography (Layer 2) + Cutout Subject (Layer 4) + Meta (Layer 5)
          ========================================================================= */}
      <div className="relative flex-1 w-full max-w-7xl mx-auto px-6 sm:px-10 flex flex-col justify-between py-4 sm:py-6">
        {/* LAYER 2: Giant Editorial Headline (Clean top clearance, zero clipping) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 select-none pointer-events-none max-w-4xl"
        >
          <h1 className="font-display uppercase tracking-tighter leading-[0.86] text-[clamp(44px,7.4vw,116px)]">
            <span className="block text-[#B12223]">I DON&apos;T</span>
            <span className="block text-[#6D0305]">JUST BUILD AI.</span>
          </h1>
        </motion.div>

        {/* LAYER 4: Dhruv Cutout Portrait (100% Transparent Background, Clean Silhouette) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none z-20 flex items-end justify-center
                     my-4 lg:my-0
                     lg:absolute lg:left-[55%] lg:-translate-x-1/2 lg:bottom-0"
        >
          <div className="relative h-[46vh] sm:h-[56vh] md:h-[64vh] lg:h-[76vh] xl:h-[82vh] max-h-[760px] aspect-[1/1]">
            <Image
              src="/images/dhruv-cutout.png"
              alt="Dhruv Pathak — AI Solutions Engineer"
              fill
              priority
              sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 760px"
              className="object-contain object-bottom filter contrast-[1.02]"
            />
          </div>
        </motion.div>

        {/* LAYER 5: Lower-Left Region: Core Thesis & Editorial CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative z-30 max-w-[340px] sm:max-w-[400px] space-y-4 pt-2 lg:pt-0"
        >
          <div className="border-l-2 border-[#B12223] pl-3.5 space-y-1">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#B12223] font-semibold block">
              CORE THESIS
            </span>
            <p className="text-sm sm:text-base text-[#450C0A] font-medium leading-snug">
              &ldquo;I don&apos;t just build AI. I figure out where it belongs.&rdquo;
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-sans">
            AI Solutions Engineer working across AI adoption, solution architecture,
            automation and business workflows — turning messy operational problems into
            practical, deployable systems.
          </p>

          <div className="pt-1 flex flex-wrap items-center gap-3">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#6D0305] text-[#FCF7F1] text-xs font-mono font-semibold tracking-wider hover:bg-[#B12223] transition-colors rounded-[2px]"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowDownRight className="w-4 h-4" />
            </Link>

            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#F6F1EB] border-2 border-[#6D0305] text-[#6D0305] text-xs font-mono font-semibold tracking-wider hover:bg-[#6D0305] hover:text-[#FCF7F1] transition-colors rounded-[2px]"
            >
              <span>VIEW RESUME</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* =========================================================================
          BOTTOM STRIP: Asymmetrical Secondary Headline
          ========================================================================= */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 pb-4 pt-3 border-t border-[#6D0305]/15 z-20 shrink-0">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div className="font-display text-2xl sm:text-4xl md:text-5xl text-[#6D0305] tracking-tight uppercase leading-none">
            I FIGURE OUT WHERE IT BELONGS.
          </div>
          <div className="text-[11px] font-mono tracking-widest text-[#78716C] uppercase">
            &ldquo;BRIDGING BUSINESS PROBLEMS &amp; TECHNICAL EXECUTION&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
}
