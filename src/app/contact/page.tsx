"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import CustomCursor from "@/components/CustomCursor";
import { Mail, Phone, MapPin, Send, CheckCircle2, Terminal, ArrowUpRight } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { PROFILE } from "@/data/portfolioData";
import confetti from "canvas-confetti";

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
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#4F7CFF", "#8B5CF6", "#10B981"],
      });
    } catch {
      // ignore
    }
  };

  return (
    <main className="min-h-screen bg-[#080A0F] text-[#F5F7FA]">
      <CustomCursor />
      <Navbar />

      <section className="pt-36 pb-20 px-6 md:px-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest bg-white/[0.04] border border-white/10 text-[#4F7CFF] mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>PROJECT DISCOVERY &amp; CONSULTING INTAKE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            <span>HAVE A MESSY BUSINESS PROBLEM?</span>
            <span className="block gradient-text-accent mt-2">
              GOOD. THAT&apos;S WHERE WE START.
            </span>
          </h1>

          <p className="mt-4 text-lg text-[#8B93A3] font-mono leading-relaxed">
            Bring the problem. We&apos;ll figure out where AI creates real leverage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0E121B] border border-white/[0.08] shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Discovery Brief Received
                  </h3>
                  <p className="text-sm text-[#8B93A3] font-sans max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name || "partner"}. I will review the operational
                    bottleneck and reach back out at {formData.email || "your email"} with initial diagnostic feedback within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-mono text-[#4F7CFF] hover:text-white transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#8B93A3] mb-2 uppercase">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-hidden focus:border-[#4F7CFF] transition-all font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#8B93A3] mb-2 uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-hidden focus:border-[#4F7CFF] transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#8B93A3] mb-2 uppercase">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Acme Growth Corp"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-hidden focus:border-[#4F7CFF] transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#8B93A3] mb-2 uppercase">
                      What is the operational bottleneck? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.bottleneck}
                      onChange={(e) =>
                        setFormData({ ...formData, bottleneck: e.target.value })
                      }
                      placeholder="Describe what's leaking pipeline, eating team hours, or slowing down client handoffs..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-hidden focus:border-[#4F7CFF] transition-all font-sans leading-relaxed"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#8B93A3] mb-2 uppercase">
                        Current Software Tools (CRM, APIs)
                      </label>
                      <input
                        type="text"
                        value={formData.tools}
                        onChange={(e) =>
                          setFormData({ ...formData, tools: e.target.value })
                        }
                        placeholder="HubSpot, Apollo, Slack, etc."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-hidden focus:border-[#4F7CFF] transition-all font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#8B93A3] mb-2 uppercase">
                        Target Commercial Metric
                      </label>
                      <input
                        type="text"
                        value={formData.targetKpi}
                        onChange={(e) =>
                          setFormData({ ...formData, targetKpi: e.target.value })
                        }
                        placeholder="Cut response time to <2m"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-hidden focus:border-[#4F7CFF] transition-all font-sans"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    data-cursor="SUBMIT"
                    className="w-full py-4 rounded-xl bg-[#4F7CFF] text-white font-mono text-sm font-semibold tracking-wider hover:bg-[#3d6bf0] shadow-xl shadow-[#4F7CFF]/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <span>SUBMIT DISCOVERY BRIEF</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Direct Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0E121B] border border-white/[0.08] space-y-6">
              <h3 className="text-lg font-mono font-bold text-white">
                Direct Channels
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <a
                  href={`mailto:${PROFILE.contact.email}`}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-white/90 hover:text-white hover:border-[#4F7CFF]/40 transition-all block"
                >
                  <Mail className="w-4 h-4 text-[#4F7CFF] shrink-0" />
                  <div>
                    <span className="text-[10px] text-[#8B93A3] block">EMAIL</span>
                    {PROFILE.contact.email}
                  </div>
                </a>

                <a
                  href={`tel:${PROFILE.contact.phone.replace(/\s+/g, "")}`}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-white/90 hover:text-white hover:border-emerald-400/40 transition-all block"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-[#8B93A3] block">PHONE / WHATSAPP</span>
                    {PROFILE.contact.phone}
                  </div>
                </a>

                <a
                  href={PROFILE.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-white/90 hover:text-white hover:border-violet-500/40 transition-all block"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-violet-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-[#8B93A3] block">LINKEDIN</span>
                      in/dhruvvpathakk
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/40" />
                </a>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-white/90">
                  <MapPin className="w-4 h-4 text-[#8B93A3] shrink-0" />
                  <div>
                    <span className="text-[10px] text-[#8B93A3] block">LOCATION</span>
                    Ahmedabad, Gujarat, India (Remote-Ready)
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 text-xs text-[#8B93A3] font-sans leading-relaxed">
                Available for client discovery engagements, AI adoption strategy, and technical solution architecture roles across international US and UK time zones.
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
