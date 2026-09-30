"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F6F1EB] border-b border-[#6D0305]/15 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        {/* Left Name */}
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-[#6D0305] hover:text-[#B12223] transition-colors"
        >
          DHRUV PATHAK
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-widest text-[#450C0A]">
          <Link href="/work" className="hover:text-[#B12223] transition-colors">
            WORK
          </Link>
          <Link href="/ai-adoption" className="hover:text-[#B12223] transition-colors">
            EXPERTISE
          </Link>
          <Link href="/methodology" className="hover:text-[#B12223] transition-colors">
            METHODOLOGY
          </Link>
          <Link href="/about" className="hover:text-[#B12223] transition-colors">
            ABOUT
          </Link>
          <Link href="/resume" className="hover:text-[#B12223] transition-colors">
            RESUME
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider text-[#6D0305] hover:text-[#B12223] transition-colors border-b border-[#6D0305]/40 hover:border-[#B12223] pb-0.5"
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#6D0305]"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#F6F1EB] border-b border-[#6D0305]/20 px-6 py-6 space-y-4 text-xs font-mono tracking-widest">
          <Link
            href="/work"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-[#450C0A] hover:text-[#B12223] border-b border-[#6D0305]/10"
          >
            WORK
          </Link>
          <Link
            href="/ai-adoption"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-[#450C0A] hover:text-[#B12223] border-b border-[#6D0305]/10"
          >
            EXPERTISE
          </Link>
          <Link
            href="/methodology"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-[#450C0A] hover:text-[#B12223] border-b border-[#6D0305]/10"
          >
            METHODOLOGY
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-[#450C0A] hover:text-[#B12223] border-b border-[#6D0305]/10"
          >
            ABOUT
          </Link>
          <Link
            href="/resume"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-[#450C0A] hover:text-[#B12223] border-b border-[#6D0305]/10"
          >
            RESUME
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center gap-1.5 pt-2 text-[#B12223] font-bold"
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </header>
  );
}
