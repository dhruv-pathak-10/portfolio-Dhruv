import { ArrowUpRight, Mail, Phone, MapPin, Globe } from "lucide-react";
import Link from "next/link";

export default function FooterEditorial() {
  return (
    <footer id="contact" className="bg-[#6D0305] text-[#FCF7F1] pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Magazine Back Cover Header */}
        <div className="flex items-center justify-between border-b border-[#FCF7F1]/20 pb-4 mb-16 sm:mb-20 text-[11px] font-mono tracking-widest uppercase text-[#EADEDA]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B12223]" />
            <span>COLOPHON / BACK COVER</span>
          </div>
          <span>VOL. 2025–2026</span>
        </div>

        {/* Giant Editorial Heading */}
        <div className="space-y-4 mb-16 sm:mb-24">
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.88] text-[#FCF7F1]">
            HAVE A BUSINESS PROBLEM?
            <span className="block text-[#EADEDA]">
              LET&apos;S FIGURE OUT WHERE AI FITS.
            </span>
          </h2>
          <p className="text-base sm:text-xl text-[#EADEDA]/80 font-sans max-w-2xl pt-4">
            Available for AI Solutions Engineer, AI Adoption Specialist, and technical client-facing roles. Open to US, UK, and global remote opportunities.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-[#FCF7F1]/20">
          {/* Direct Email */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#EADEDA]/60 block">
              01 / DIRECT INQUIRIES
            </span>
            <a
              href="mailto:work.dhruvpathak@gmail.com"
              className="group flex items-center gap-2 text-sm sm:text-base font-mono text-[#FCF7F1] hover:text-[#EADEDA] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#B12223]" />
              <span>work.dhruvpathak@gmail.com</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* LinkedIn */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#EADEDA]/60 block">
              02 / PROFESSIONAL NETWORK
            </span>
            <a
              href="https://linkedin.com/in/dhruvvpathakk"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm sm:text-base font-mono text-[#FCF7F1] hover:text-[#EADEDA] transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-[#B12223]" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>linkedin.com/in/dhruvvpathakk</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#EADEDA]/60 block">
              03 / DIRECT LINE
            </span>
            <a
              href="tel:+916354666048"
              className="flex items-center gap-2 text-sm sm:text-base font-mono text-[#FCF7F1] hover:text-[#EADEDA] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B12223]" />
              <span>+91 63546 66048</span>
            </a>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#EADEDA]/60 block">
              04 / TIMEZONE &amp; BASE
            </span>
            <div className="flex items-center gap-2 text-sm sm:text-base font-mono text-[#FCF7F1]">
              <MapPin className="w-4 h-4 text-[#B12223]" />
              <span>Ahmedabad, India · IST (UTC+5:30)</span>
            </div>
          </div>
        </div>

        {/* Topical Architecture / SEO Internal Link Graph */}
        <div className="py-8 border-b border-[#FCF7F1]/20">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#EADEDA]/60 block mb-4">
            TOPICAL CAPABILITIES &amp; CONSULTING SPECIALIZATIONS
          </span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-mono">
            <Link href="/ai-adoption" className="text-[#FCF7F1] hover:text-[#EADEDA] underline underline-offset-4 transition-colors">
              AI Adoption &amp; Consulting
            </Link>
            <Link href="/ai-solutions" className="text-[#FCF7F1] hover:text-[#EADEDA] underline underline-offset-4 transition-colors">
              AI Solutions Engineering
            </Link>
            <Link href="/solution-architecture" className="text-[#FCF7F1] hover:text-[#EADEDA] underline underline-offset-4 transition-colors">
              Solution Architecture
            </Link>
            <Link href="/ai-automation" className="text-[#FCF7F1] hover:text-[#EADEDA] underline underline-offset-4 transition-colors">
              AI Agents &amp; Automation
            </Link>
            <Link href="/voice-ai" className="text-[#FCF7F1] hover:text-[#EADEDA] underline underline-offset-4 transition-colors">
              Voice AI Telephony
            </Link>
          </div>
        </div>

        {/* Quick Navigation & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs font-mono text-[#EADEDA]/60">
          <div className="flex flex-wrap items-center gap-6 text-[#FCF7F1]">
            <Link href="/work" className="hover:text-[#EADEDA] transition-colors">
              WORK
            </Link>
            <Link href="/methodology" className="hover:text-[#EADEDA] transition-colors">
              METHODOLOGY
            </Link>
            <Link href="/about" className="hover:text-[#EADEDA] transition-colors">
              ABOUT
            </Link>
            <Link href="/resume" className="hover:text-[#EADEDA] transition-colors">
              RESUME
            </Link>
            <Link href="/contact" className="hover:text-[#EADEDA] transition-colors">
              CONTACT
            </Link>
          </div>

          <div className="text-[11px] tracking-widest uppercase">
            © {new Date().getFullYear()} DHRUV PATHAK · itsdhruv.online · ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}
