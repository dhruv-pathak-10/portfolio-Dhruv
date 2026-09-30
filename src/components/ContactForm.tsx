"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    bottleneck: "",
    tools: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
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
  );
}
