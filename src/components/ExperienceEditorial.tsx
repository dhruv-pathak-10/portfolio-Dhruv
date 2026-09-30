import { EXPERIENCE_ITEMS } from "@/data/portfolioData";

export default function ExperienceEditorial() {
  return (
    <section id="experience" className="bg-[#FCF7F1] py-24 sm:py-32 border-b border-[#6D0305]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex items-baseline justify-between border-b border-[#6D0305]/15 pb-4 mb-16 sm:mb-20">
          <span className="font-display text-4xl sm:text-6xl text-[#B12223]">
            07
          </span>
          <span className="text-xs font-mono tracking-widest text-[#450C0A] uppercase">
            EXPERIENCE / TIMELINE
          </span>
        </div>

        <div className="max-w-3xl mb-20 sm:mb-24">
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-[#6D0305] uppercase tracking-tight">
            WHERE I&apos;VE OPERATED.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#78716C] font-mono leading-relaxed">
            From early-stage RevOps loops to enterprise platform architecture.
          </p>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="relative border-l-2 border-[#B12223] ml-4 sm:ml-8 pl-8 sm:pl-16 space-y-24 sm:space-y-32">
          {/* Item 1: 2026 Clozzet India */}
          <div className="relative">
            <div className="absolute -left-[41px] sm:-left-[73px] top-2 w-4 h-4 bg-[#B12223] border-4 border-[#FCF7F1]" />
            <div className="space-y-4">
              <span className="font-display text-6xl sm:text-8xl text-[#B12223] block leading-none">
                2026
              </span>
              <h3 className="font-display text-3xl sm:text-5xl text-[#6D0305] uppercase">
                CLOZZET INDIA
              </h3>
              <div className="text-xs font-mono uppercase tracking-widest text-[#450C0A] font-bold">
                Growth Engineer — AI Solutions &amp; RevOps
              </div>
              <p className="text-sm sm:text-base text-[#1C1917] max-w-2xl font-sans leading-relaxed">
                Designed and deployed AI-powered automation workflows for brand partnership acquisition,
                reducing manual prospecting effort by 60%. Built automated outreach and lead-scoring
                systems generating 3× more qualified brand leads per week.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["AI Solutions", "Workflow Automation", "CRM Sync", "HubSpot", "Apollo.io", "n8n"].map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-mono text-[#6D0305] border border-[#6D0305]/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Item 2: 2024 StudAI Genie */}
          <div className="relative">
            <div className="absolute -left-[41px] sm:-left-[73px] top-2 w-4 h-4 bg-[#B12223] border-4 border-[#FCF7F1]" />
            <div className="space-y-4">
              <span className="font-display text-6xl sm:text-8xl text-[#6D0305] block leading-none">
                2024
              </span>
              <h3 className="font-display text-3xl sm:text-5xl text-[#6D0305] uppercase">
                STUDAI GENIE EDUTECH
              </h3>
              <div className="text-xs font-mono uppercase tracking-widest text-[#450C0A] font-bold">
                Campus Ambassador Leader — Technology Adoption
              </div>
              <p className="text-sm sm:text-base text-[#1C1917] max-w-2xl font-sans leading-relaxed">
                Led AI-focused outreach campaigns connecting 1,000+ students to hands-on learning
                opportunities. Organized 10+ workshops on AI and data technologies, translating complex
                emerging technical topics for non-technical audiences.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["AI Adoption", "Workshops", "Technical Communication", "Stakeholder Alignment"].map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-mono text-[#6D0305] border border-[#6D0305]/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Item 3: 2023 Independent Technical Delivery */}
          <div className="relative">
            <div className="absolute -left-[41px] sm:-left-[73px] top-2 w-4 h-4 bg-[#78716C] border-4 border-[#FCF7F1]" />
            <div className="space-y-4">
              <span className="font-display text-6xl sm:text-8xl text-[#78716C] block leading-none">
                2023
              </span>
              <h3 className="font-display text-3xl sm:text-5xl text-[#6D0305] uppercase">
                INDEPENDENT TECHNICAL DELIVERY
              </h3>
              <div className="text-xs font-mono uppercase tracking-widest text-[#450C0A] font-bold">
                Full-Stack Developer &amp; ERP Architect
              </div>
              <p className="text-sm sm:text-base text-[#1C1917] max-w-2xl font-sans leading-relaxed">
                Built a full-stack institutional school ERP system handling attendance, grading,
                scheduling, and parent communication for 500+ active users across faculty and administrative roles.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Requirements Gathering", "System Architecture", "Relational Database", "Cloud Deployment"].map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-mono text-[#6D0305] border border-[#6D0305]/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
