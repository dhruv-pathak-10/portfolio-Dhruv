"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterEditorial from "@/components/FooterEditorial";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    bottleneck: "",
    tools: "",
    targetKpi: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F6F1EB] text-[#1C1917] selection:bg-[#B12223] selection:text-[#FCF7F1]">
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

          {/* Right Column: Problem Intake Form */}
          <div className="lg:col-span-7">
            <div className="border border-[#6D0305]/20 bg-[#FCF7F1] p-8 sm:p-12">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#B12223] text-[#FCF7F1] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-3xl text-[#6D0305] uppercase tracking-tight">
                    Discovery Brief Received
                  </h3>
                  <p className="text-sm font-sans text-[#450C0A] max-w-md mx-auto">
                    Thank you. I have received your enquiry and will review your workflow bottleneck within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <span className="text-xs font-mono tracking-widest uppercase text-[#B12223] font-semibold block mb-4">
                    INTAKE SPECIFICATION
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono tracking-wider uppercase text-[#450C0A] mb-2 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full bg-[#F6F1EB] border border-[#6D0305]/20 px-4 py-3 text-sm text-[#1C1917] focus:border-[#B12223] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono tracking-wider uppercase text-[#450C0A] mb-2 font-medium">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full bg-[#F6F1EB] border border-[#6D0305]/20 px-4 py-3 text-sm text-[#1C1917] focus:border-[#B12223] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-wider uppercase text-[#450C0A] mb-2 font-medium">
                      Company &amp; Domain
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Corp / SaaS / B2B Services"
                      className="w-full bg-[#F6F1EB] border border-[#6D0305]/20 px-4 py-3 text-sm text-[#1C1917] focus:border-[#B12223] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-wider uppercase text-[#450C0A] mb-2 font-medium">
                      The Operational Bottleneck *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.bottleneck}
                      onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                      placeholder="Describe what's slow, manual, or breaking today. (e.g., 'Our SDRs spend 15 hours/wk manually researching leads', 'Inbound leads don't get called fast enough...')"
                      className="w-full bg-[#F6F1EB] border border-[#6D0305]/20 px-4 py-3 text-sm text-[#1C1917] focus:border-[#B12223] focus:outline-none font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-wider uppercase text-[#450C0A] mb-2 font-medium">
                      Current Tools in Use
                    </label>
                    <input
                      type="text"
                      value={formData.tools}
                      onChange={(e) => setFormData({ ...formData, tools: e.target.value })}
                      placeholder="HubSpot, Salesforce, Retell, Make, Postgres, Sheets..."
                      className="w-full bg-[#F6F1EB] border border-[#6D0305]/20 px-4 py-3 text-sm text-[#1C1917] focus:border-[#B12223] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#B12223] text-[#FCF7F1] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#6D0305] transition-colors flex items-center justify-center gap-3"
                  >
                    <span>SUBMIT DISCOVERY BRIEF</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <FooterEditorial />
    </main>
  );
}
