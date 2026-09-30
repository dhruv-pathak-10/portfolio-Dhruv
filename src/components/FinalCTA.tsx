"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin, Terminal, Sparkles, Cpu } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { PROFILE } from "@/data/portfolioData";

export default function FinalCTA() {
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  const handleEasterEggHover = () => {
    setEasterEggActive(true);
    setTimeout(() => {
      setShowSecondLine(true);
    }, 1200);
  };

  const handleEasterEggLeave = () => {
    setEasterEggActive(false);
    setShowSecondLine(false);
  };

  return (
    <footer id="contact" className="relative bg-[#080A0F] border-t border-white/[0.08] pt-24 pb-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#4F7CFF]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Main Dramatic CTA */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest bg-white/[0.04] border border-white/10 text-[#4F7CFF] mb-6">
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight">
            <span>HAVE A MESSY BUSINESS PROBLEM?</span>
            <span className="block gradient-text-accent mt-2">
              GOOD. THAT&apos;S WHERE THE INTERESTING WORK STARTS.
            </span>
          </h2>

          <p className="mt-6 text-lg sm:text-2xl font-mono text-[#8B93A3] max-w-2xl mx-auto">
            Bring the problem. We&apos;ll figure out where AI creates leverage.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              data-cursor="TALK"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#4F7CFF] text-white text-sm font-mono font-semibold tracking-wide hover:bg-[#3d6bf0] shadow-xl shadow-[#4F7CFF]/25 hover:shadow-[#4F7CFF]/40 transition-all duration-200"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={PROFILE.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="LINKEDIN"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm font-mono font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Direct Verified Contact Details */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-[#8B93A3]">
            <a
              href={`mailto:${PROFILE.contact.email}`}
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-[#4F7CFF]" />
              <span>{PROFILE.contact.email}</span>
            </a>
            <a
              href={`tel:${PROFILE.contact.phone.replace(/\s+/g, "")}`}
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PROFILE.contact.phone}</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#8B93A3]" />
              <span>Ahmedabad, India (Remote-Ready)</span>
            </span>
          </div>
        </div>

        {/* Footer Bottom Bar with Subtle Easter Egg */}
        <div className="pt-12 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#8B93A3]">
          <div>
            <span className="text-white font-semibold">DHRUV PATHAK</span> · AI Solutions Engineer
            <span className="block text-[11px] text-[#8B93A3]/70 mt-0.5">
              itsdhruv.online · Production AI Adoption &amp; Solution Architecture
            </span>
          </div>

          {/* SUBTLE EASTER EGG NODE */}
          <div
            onMouseEnter={handleEasterEggHover}
            onMouseLeave={handleEasterEggLeave}
            className="cursor-pointer group flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#4F7CFF]/30 transition-all"
            title="Inspect"
          >
            <Cpu className="w-3.5 h-3.5 text-[#4F7CFF] group-hover:rotate-90 transition-transform duration-300" />
            <div className="text-[11px]">
              {easterEggActive ? (
                <span className="text-emerald-400 animate-in fade-in">
                  Still deciding whether this should be AI?
                  {showSecondLine && <strong className="ml-2 text-white">Good.</strong>}
                </span>
              ) : (
                <span className="text-[#8B93A3] group-hover:text-white transition-colors">
                  AI Decision Node
                </span>
              )}
            </div>
          </div>

          <div className="text-[11px] text-[#8B93A3]">
            Built with Next.js, TypeScript &amp; Systems Thinking
          </div>
        </div>
      </div>
    </footer>
  );
}
