export default function MetricsEditorial() {
  const metrics = [
    {
      value: "60%",
      label: "LESS MANUAL PROSPECTING",
      detail: "Across partnership acquisition pipeline at Clozzet India",
      highlight: true,
    },
    {
      value: "3×",
      label: "QUALIFIED LEADS / WEEK",
      detail: "Sustained pipeline acceleration via automated outreach & scoring",
      highlight: true,
    },
    {
      value: "15+",
      label: "INBOUND LEADS CONVERTED",
      detail: "Via deployed production Voice AI calling agent",
      highlight: false,
    },
    {
      value: "10 HRS",
      label: "MANUAL SALES WORK SAVED / WK",
      detail: "Per rep on research, ICP evaluation, and sequence drafting",
      highlight: false,
    },
    {
      value: "500+",
      label: "ACTIVE ERP USERS",
      detail: "Full lifecycle institutional platform delivery across faculty & admin",
      highlight: false,
    },
    {
      value: "91%",
      label: "ML PREDICTION ACCURACY",
      detail: "Early intervention risk classification model using Python & Scikit-learn",
      highlight: false,
    },
  ];

  return (
    <section id="proof" className="bg-[#EADEDA] py-24 sm:py-32 border-b border-[#6D0305]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex items-baseline justify-between border-b border-[#6D0305]/15 pb-4 mb-16 sm:mb-20">
          <span className="font-display text-4xl sm:text-6xl text-[#B12223]">
            04
          </span>
          <span className="text-xs font-mono tracking-widest text-[#450C0A] uppercase">
            DEFENSIBLE OUTCOMES / PROOF
          </span>
        </div>

        <div className="max-w-3xl mb-16 sm:mb-24">
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-[#6D0305] uppercase tracking-tight">
            PROOF &gt; PROMISES.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#450C0A] font-mono leading-relaxed">
            Real deployments. Measured operational impact. No fabricated statistics.
          </p>
        </div>

        {/* Editorial Annual Report Typography Numbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 lg:gap-y-20">
          {metrics.map((m, idx) => (
            <div key={m.label} className="border-t border-[#6D0305]/20 pt-6 space-y-3">
              <span className="text-xs font-mono tracking-widest text-[#B12223] block">
                EVIDENCE 0{idx + 1}
              </span>

              {/* Huge typography number */}
              <div
                className={`font-display tracking-tighter ${
                  m.highlight
                    ? "text-7xl sm:text-8xl lg:text-9xl text-[#B12223]"
                    : "text-6xl sm:text-7xl lg:text-8xl text-[#6D0305]"
                }`}
              >
                {m.value}
              </div>

              <div className="text-sm font-mono font-bold tracking-wider text-[#450C0A] uppercase">
                {m.label}
              </div>

              <p className="text-xs text-[#78716C] font-sans leading-relaxed">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
