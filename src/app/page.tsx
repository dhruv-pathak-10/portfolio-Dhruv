import Navbar from "@/components/Navbar";
import HeroCover from "@/components/HeroCover";
import EditorialSection from "@/components/EditorialSection";
import ThinkingSection from "@/components/ThinkingSection";
import MetricsEditorial from "@/components/MetricsEditorial";
import SelectedWorkEditorial from "@/components/SelectedWorkEditorial";
import DecisionEngineEditorial from "@/components/DecisionEngineEditorial";
import ExperienceEditorial from "@/components/ExperienceEditorial";
import StackTypography from "@/components/StackTypography";
import AboutEditorial from "@/components/AboutEditorial";
import ResumeEditorial from "@/components/ResumeEditorial";
import FooterEditorial from "@/components/FooterEditorial";
import JsonLd from "@/components/JsonLd";
import { getProfilePageJsonLd } from "@/lib/jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dhruv Pathak — AI Solutions Engineer | AI Adoption & Solution Architecture",
  description:
    "AI Solutions Engineer focused on AI adoption, solution architecture, Voice AI agents, automation, and turning messy business friction into practical production systems.",
  alternates: {
    canonical: "https://itsdhruv.online",
  },
  openGraph: {
    title: "Dhruv Pathak — AI Solutions Engineer | AI Adoption & Solution Architecture",
    description: "I don't just build AI. I figure out where it belongs. Explore production architectures and verified commercial ROI.",
    url: "https://itsdhruv.online",
  },
};

export default function Home() {
  const profilePageJsonLd = getProfilePageJsonLd();

  return (
    <main className="min-h-screen bg-[#F6F1EB] text-[#1C1917] selection:bg-[#B12223] selection:text-[#FCF7F1]">
      <JsonLd data={profilePageJsonLd} />
      <Navbar />
      <HeroCover />
      <EditorialSection />
      <ThinkingSection />
      <MetricsEditorial />
      <SelectedWorkEditorial />
      <DecisionEngineEditorial />
      <ExperienceEditorial />
      <StackTypography />
      <AboutEditorial />
      <ResumeEditorial />
      <FooterEditorial />
    </main>
  );
}
