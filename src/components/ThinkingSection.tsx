import { THINKING_STAGES } from "@/data/portfolioData";

export default function ThinkingSection() {
  return (
    <section id="thinking" className="bg-[#F6F1EB] py-24 sm:py-32 border-b border-[#6D0305]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex items-baseline justify-between border-b border-[#6D0305]/15 pb-4 mb-12 sm:mb-16">
          <span className="font-display text-4xl sm:text-6xl text-[#B12223]">
            03
          </span>
          <span className="text-xs font-mono tracking-widest text-[#450C0A] uppercase">
            METHODOLOGY / HOW I THINK
          </span>
        </div>

        <div className="max-w-4xl mb-16 sm:mb-20">
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-[#6D0305] uppercase tracking-tight">
            HOW I THINK.
          </h2>
          <p className="mt-4 text-lg sm:text-xl font-mono text-[#B12223] font-medium">
            The technology is rarely the first question.
          </p>
          <p className="mt-3 text-sm sm:text-base text-[#78716C] font-sans max-w-2xl leading-relaxed">
            AI adoption starts with diagnosis, not technology. Installing an LLM over a broken manual
            workflow produces automated chaos. We identify the bottleneck first.
          </p>
        </div>

        {/* Thin Red Line Connector */}
        <div className="w-full h-px bg-[#B12223]/30 mb-8 hidden lg:block" />

        {/* 5-Stage Horizontal Editorial Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {THINKING_STAGES.map((s) => (
            <div key={s.stage} className="space-y-4 pt-4 border-t lg:border-t-0 border-[#6D0305]/15">
              <span className="font-display text-3xl sm:text-4xl text-[#B12223] block">
                {s.stage}
              </span>

              <h3 className="font-display text-xl sm:text-2xl text-[#6D0305] uppercase tracking-tight">
                {s.title}
              </h3>

              <p className="text-xs font-mono text-[#450C0A] font-semibold">
                {s.headline}
              </p>

              <p className="text-xs text-[#78716C] leading-relaxed font-sans">
                {s.summary}
              </p>

              <div className="pt-2 text-[11px] font-mono text-[#B12223] border-t border-[#6D0305]/10">
                Deliverable: {s.deliverables.split(",")[0]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
