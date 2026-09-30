import { ArrowDownRight } from "lucide-react";

export default function EditorialSection() {
  const capabilities = [
    "AI ADOPTION",
    "SOLUTION ARCHITECTURE",
    "AI AGENTS",
    "AUTOMATION",
    "VOICE AI",
    "CRM INTEGRATION",
    "TECHNICAL DELIVERY",
  ];

  return (
    <section id="who-i-am" className="bg-[#FCF7F1] py-24 sm:py-32 border-b border-[#6D0305]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Editorial Section Numbering */}
        <div className="flex items-baseline justify-between border-b border-[#6D0305]/15 pb-4 mb-12 sm:mb-16">
          <span className="font-display text-4xl sm:text-6xl text-[#B12223]">
            02
          </span>
          <span className="text-xs font-mono tracking-widest text-[#450C0A] uppercase">
            WHO I AM / POSITIONING
          </span>
        </div>

        {/* Asymmetrical 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Huge Editorial Headline */}
          <div className="lg:col-span-6">
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.92] text-[#6D0305] uppercase tracking-tight">
              I WORK
              <span className="block text-[#B12223]">BETWEEN</span>
              <span className="block">BUSINESS</span>
              <span className="block text-[#B12223]">AND</span>
              <span className="block">TECHNOLOGY.</span>
            </h2>
          </div>

          {/* Right Column: Statement & Capabilities */}
          <div className="lg:col-span-6 space-y-10 lg:pt-4">
            <p className="text-lg sm:text-2xl text-[#1C1917] font-normal leading-relaxed font-sans">
              AI Solutions Engineer with hands-on experience turning business requirements
              into AI-powered applications, intelligent workflows, automation systems,
              and deployable solutions.
            </p>

            <div className="border-t border-[#6D0305]/15 pt-8">
              <span className="text-xs font-mono tracking-widest uppercase text-[#B12223] font-bold block mb-4">
                CORE CAPABILITIES
              </span>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="px-3.5 py-1.5 text-xs font-mono font-medium tracking-wider text-[#6D0305] border border-[#6D0305]/25 bg-transparent hover:bg-[#6D0305] hover:text-[#FCF7F1] transition-colors"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-[#6D0305]/15 pt-6 text-xs font-mono text-[#78716C] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#B12223] rounded-full" />
              <span>Discover before designing. Prioritise before building. Measure before scaling.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
