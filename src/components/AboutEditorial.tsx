import Image from "next/image";
import { EDUCATION } from "@/data/portfolioData";

export default function AboutEditorial() {
  return (
    <section id="about" className="bg-[#FCF7F1] py-24 sm:py-32 border-b border-[#6D0305]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex items-baseline justify-between border-b border-[#6D0305]/15 pb-4 mb-16 sm:mb-20">
          <span className="font-display text-4xl sm:text-6xl text-[#B12223]">
            09
          </span>
          <span className="text-xs font-mono tracking-widest text-[#450C0A] uppercase">
            PHILOSOPHY / ABOUT
          </span>
        </div>

        {/* 2-Column Asymmetrical Editorial Layout with Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait with Red Border Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto border-2 border-[#6D0305] p-3 bg-[#F6F1EB]">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/dhruv-cutout.png"
                  alt="Dhruv Pathak"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain object-bottom contrast-105"
                />
              </div>
            </div>
            <div className="text-[10px] font-mono tracking-widest text-[#78716C] uppercase mt-3 text-center lg:text-left">
              DHRUV PATHAK · AI SOLUTIONS ENGINEER
            </div>
          </div>

          {/* Right Column: Statement & Background */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#6D0305] uppercase tracking-tight leading-[0.94]">
              BUILDING IS ONLY
              <span className="block text-[#B12223]">HALF THE JOB.</span>
            </h2>

            <p className="text-lg sm:text-xl text-[#450C0A] font-medium leading-relaxed font-sans border-l-2 border-[#B12223] pl-4">
              &ldquo;The other half is understanding whether what you build actually solves the problem.&rdquo;
            </p>

            <div className="space-y-4 text-sm text-[#1C1917] font-sans leading-relaxed">
              <p>
                Based in Ahmedabad, Gujarat, I work with startups, businesses, and international
                clients across US and UK time zones to design, deploy, and operationalize AI systems.
              </p>
              <p>
                Whether it is engineering an inbound Voice AI admissions agent that converts international
                prospects 24/7, automating multi-agent account scoring that saves 10 hours a week, or
                architecting full-stack ERP software for 500+ users, I focus on frontline adoption
                and defensible commercial ROI.
              </p>
            </div>

            {/* Education callout */}
            <div className="border-t border-[#6D0305]/15 pt-6 text-xs font-mono text-[#78716C]">
              <div className="text-[#6D0305] font-bold">
                {EDUCATION.degree} — {EDUCATION.institution}
              </div>
              <div className="mt-1">
                {EDUCATION.focus} · Smart India Hackathon Team Lead
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
