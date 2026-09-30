import Link from "next/link";
import { ArrowUpRight, Download, FileText, CheckCircle2 } from "lucide-react";

export default function ResumeEditorial() {
  return (
    <section id="resume" className="bg-[#F6F1EB] py-24 sm:py-32 border-b border-[#6D0305]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-[#6D0305]/15 pb-4 mb-16 sm:mb-20">
          <span className="font-display text-4xl sm:text-6xl text-[#B12223]">
            10
          </span>
          <span className="text-xs font-mono tracking-widest text-[#450C0A] uppercase">
            DOCUMENTATION / RESUME
          </span>
        </div>

        {/* Editorial Poster Card */}
        <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-14 lg:p-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Bold Headline & Context */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-mono tracking-widest text-[#B12223] uppercase font-semibold">
                CURATED QUALIFICATIONS
              </span>

              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#6D0305] uppercase tracking-tight leading-[0.92]">
                THE STRUCTURED
                <span className="block text-[#B12223]">VERSION.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#450C0A] font-medium leading-relaxed max-w-2xl font-sans">
                Experience, technical depth, selected projects, and measurable commercial outcomes compiled in a clean, one-page format.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#6D0305]/15 text-xs font-mono text-[#450C0A]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B12223] shrink-0" />
                  <span>AI Adoption &amp; RevOps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B12223] shrink-0" />
                  <span>Multi-Agent Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B12223] shrink-0" />
                  <span>Client-Facing Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Column: Actions */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href="/Dhruv_Pathak_AI_Adoption_Specialist_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between px-6 py-4 bg-[#B12223] text-[#FCF7F1] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#6D0305] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4" />
                  <span>VIEW RESUME</span>
                </div>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/Dhruv_Pathak_AI_Adoption_Specialist_Resume.pdf"
                download="Dhruv_Pathak_Resume.pdf"
                className="w-full inline-flex items-center justify-between px-6 py-4 border-2 border-[#6D0305] text-[#6D0305] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#6D0305] hover:text-[#FCF7F1] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD PDF</span>
                </div>
                <span className="text-[10px] text-[#78716C] group-hover:text-[#FCF7F1]/80">
                  720 KB
                </span>
              </a>

              <Link
                href="/resume"
                className="text-center text-xs font-mono tracking-wider text-[#78716C] hover:text-[#6D0305] pt-2 underline underline-offset-4 transition-colors"
              >
                Read Web Version →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
