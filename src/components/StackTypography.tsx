export default function StackTypography() {
  const stackItems = [
    { name: "LANGCHAIN", size: "text-4xl sm:text-6xl md:text-7xl", color: "text-[#B12223]" },
    { name: "LANGGRAPH", size: "text-3xl sm:text-5xl md:text-6xl", color: "text-[#6D0305]" },
    { name: "VOICE AI", size: "text-5xl sm:text-7xl md:text-8xl", color: "text-[#B12223]" },
    { name: "ELEVENLABS", size: "text-2xl sm:text-4xl md:text-5xl", color: "text-[#450C0A]" },
    { name: "n8n", size: "text-5xl sm:text-7xl md:text-8xl", color: "text-[#6D0305]" },
    { name: "MAKE", size: "text-3xl sm:text-5xl md:text-6xl", color: "text-[#78716C]" },
    { name: "HUBSPOT CRM", size: "text-4xl sm:text-6xl md:text-7xl", color: "text-[#B12223]" },
    { name: "APOLLO.IO", size: "text-2xl sm:text-4xl md:text-5xl", color: "text-[#450C0A]" },
    { name: "PYTHON", size: "text-5xl sm:text-7xl md:text-8xl", color: "text-[#6D0305]" },
    { name: "FASTAPI", size: "text-2xl sm:text-4xl md:text-5xl", color: "text-[#78716C]" },
    { name: "NEXT.JS", size: "text-4xl sm:text-6xl md:text-7xl", color: "text-[#B12223]" },
    { name: "CREWAI", size: "text-3xl sm:text-5xl md:text-6xl", color: "text-[#450C0A]" },
    { name: "RAG PIPELINES", size: "text-4xl sm:text-6xl md:text-7xl", color: "text-[#6D0305]" },
    { name: "MCP", size: "text-3xl sm:text-5xl md:text-6xl", color: "text-[#B12223]" },
    { name: "AWS", size: "text-2xl sm:text-4xl md:text-5xl", color: "text-[#78716C]" },
    { name: "DOCKER", size: "text-3xl sm:text-5xl md:text-6xl", color: "text-[#450C0A]" },
  ];

  return (
    <section id="stack" className="bg-[#F6F1EB] py-24 sm:py-32 border-b border-[#6D0305]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex items-baseline justify-between border-b border-[#6D0305]/15 pb-4 mb-16 sm:mb-20">
          <span className="font-display text-4xl sm:text-6xl text-[#B12223]">
            08
          </span>
          <span className="text-xs font-mono tracking-widest text-[#450C0A] uppercase">
            TECHNICAL REPERTOIRE / THE STACK
          </span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-[#6D0305] uppercase tracking-tight">
            THE STACK.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#78716C] font-mono leading-relaxed">
            Technology is evidence, not identity. A curated visual composition of the tools,
            orchestrations, and frameworks I use to engineer solutions.
          </p>
        </div>

        {/* Typographic Composition */}
        <div className="flex flex-wrap items-baseline gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-6 font-display uppercase tracking-tight select-none">
          {stackItems.map((item, idx) => (
            <span
              key={idx}
              className={`${item.size} ${item.color} hover:text-[#B12223] transition-colors inline-block`}
            >
              {item.name}
              {idx < stackItems.length - 1 && (
                <span className="text-[#6D0305]/20 ml-6 sm:ml-10 text-xl font-mono select-none">
                  /
                </span>
              )}
            </span>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#6D0305]/15 text-xs font-mono text-[#78716C] flex items-center gap-2">
          <span>&ldquo;The stack is the middle layer. The outcome is the product.&rdquo;</span>
        </div>
      </div>
    </section>
  );
}
