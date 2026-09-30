import Navbar from "@/components/Navbar";
import FooterEditorial from "@/components/FooterEditorial";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/jsonld";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Project Discovery — Dhruv Pathak",
  description:
    "Schedule an AI technical discovery session with Dhruv Pathak. Review your operational bottlenecks, system constraints, and design actionable AI solutions.",
  alternates: {
    canonical: "https://itsdhruv.online/contact",
  },
  openGraph: {
    title: "Contact & Project Discovery — Dhruv Pathak",
    description: "Bring the messy operational reality. We will dissect the workflow and audit where AI creates defensible leverage.",
    url: "https://itsdhruv.online/contact",
  },
};

export default function ContactPage() {
  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "Home", item: "/" },
    { name: "Contact", item: "/contact" },
  ]);

  return (
    <main className="min-h-screen bg-[#F6F1EB] text-[#1C1917] selection:bg-[#B12223] selection:text-[#FCF7F1]">
      <JsonLd data={breadcrumbs} />
      <Navbar />

      <section className="pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
        {/* Editorial Header */}
        <div className="border-b border-[#6D0305]/15 pb-8 mb-16 sm:mb-20">
          <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#450C0A] uppercase mb-6">
            <span>INTAKE / PROBLEM DISCOVERY</span>
            <span>DIRECT ENGAGEMENT</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl text-[#6D0305] uppercase tracking-tight leading-[0.9]">
            HAVE A BUSINESS PROBLEM?
            <span className="block text-[#B12223]">LET&apos;S FIGURE IT OUT.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#450C0A] font-medium max-w-3xl font-sans">
            Bring the messy operational reality. We will dissect the workflow, audit where
            AI creates defensible leverage, and design an architecture that delivers adoption.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Channels & Expectations */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 space-y-6">
              <span className="text-xs font-mono tracking-widest uppercase text-[#B12223] font-semibold block">
                DIRECT CONTACT CHANNELS
              </span>

              <div className="space-y-4 text-xs font-mono text-[#450C0A]">
                <div>
                  <span className="text-[10px] text-[#78716C] uppercase block mb-1">
                    EMAIL
                  </span>
                  <a
                    href="mailto:work.dhruvpathak@gmail.com"
                    className="flex items-center gap-2 text-sm text-[#6D0305] hover:text-[#B12223] font-bold"
                  >
                    <Mail className="w-4 h-4 text-[#B12223]" />
                    <span>work.dhruvpathak@gmail.com</span>
                  </a>
                </div>

                <div>
                  <span className="text-[10px] text-[#78716C] uppercase block mb-1">
                    PHONE / WHATSAPP
                  </span>
                  <a
                    href="tel:+916354666048"
                    className="flex items-center gap-2 text-sm text-[#6D0305] hover:text-[#B12223] font-bold"
                  >
                    <Phone className="w-4 h-4 text-[#B12223]" />
                    <span>+91 63546 66048</span>
                  </a>
                </div>

                <div>
                  <span className="text-[10px] text-[#78716C] uppercase block mb-1">
                    LINKEDIN
                  </span>
                  <a
                    href="https://linkedin.com/in/dhruvvpathakk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#6D0305] hover:text-[#B12223] font-bold"
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#B12223]" />
                    <span>linkedin.com/in/dhruvvpathakk</span>
                  </a>
                </div>

                <div>
                  <span className="text-[10px] text-[#78716C] uppercase block mb-1">
                    LOCATION &amp; AVAILABILITY
                  </span>
                  <div className="flex items-center gap-2 text-sm text-[#450C0A]">
                    <MapPin className="w-4 h-4 text-[#B12223]" />
                    <span>Ahmedabad, India · Remote Worldwide</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-[#B12223] pl-4 space-y-2">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#B12223] font-semibold block">
                WHAT HAPPENS NEXT?
              </span>
              <p className="text-xs sm:text-sm text-[#450C0A] leading-relaxed font-sans">
                I review every enquiry within 24 hours. We will jump on a 30-minute discovery call to map the problem, review constraints, and determine if an AI solution is appropriate.
              </p>
            </div>
          </div>

          {/* Right Column: Problem Intake Form (Client Component) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <FooterEditorial />
    </main>
  );
}
