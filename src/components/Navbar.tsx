"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Terminal, Cpu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: pathname === "/" ? "#work" : "/work" },
    { label: "Thinking", href: pathname === "/" ? "#thinking" : "/methodology" },
    { label: "Methodology", href: "/methodology" },
    { label: "About", href: pathname === "/" ? "#about" : "/about" },
    { label: "Resume", href: "/resume" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#080A0F]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-left focus:outline-hidden"
            data-cursor="HOME"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F7CFF] to-[#8B5CF6] flex items-center justify-center text-white shadow-md shadow-[#4F7CFF]/20 group-hover:scale-105 transition-transform duration-200">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-bold tracking-tight text-white text-base flex items-center gap-2">
                DHRUV PATHAK
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-white/5 border border-white/10 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
                  AI SOLUTIONS
                </span>
              </div>
              <div className="text-[11px] font-mono text-[#8B93A3] tracking-widest hidden md:block">
                itsdhruv.online
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 rounded-full bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href.startsWith("#") && pathname === "/");

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  data-cursor="VIEW"
                  className={`relative px-4 py-1.5 text-xs font-mono tracking-wider transition-colors duration-200 rounded-full ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-[#8B93A3] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              data-cursor="TALK"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4F7CFF]/15 border border-[#4F7CFF]/30 text-xs font-mono font-medium text-white hover:bg-[#4F7CFF] hover:border-[#4F7CFF] transition-all duration-300 shadow-xs shadow-[#4F7CFF]/10 hover:shadow-[#4F7CFF]/30"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#080A0F]/95 backdrop-blur-xl md:hidden flex flex-col pt-28 px-8 pb-10 border-b border-white/10 animate-in fade-in duration-200">
          <div className="flex flex-col gap-6 text-lg font-mono">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white hover:translate-x-2 transition-all flex items-center justify-between py-2 border-b border-white/5"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-white/40" />
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-[#4F7CFF] text-white font-mono text-sm font-semibold tracking-wide shadow-lg shadow-[#4F7CFF]/25"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#8B93A3] font-mono space-y-1">
              <div>Ahmedabad, India (Remote-Ready)</div>
              <div>work.dhruvpathak@gmail.com</div>
              <div>+91 63546 66048</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
