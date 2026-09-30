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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F1EB] text-[#1C1917] selection:bg-[#B12223] selection:text-[#FCF7F1]">
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
