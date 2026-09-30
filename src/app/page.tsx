import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import ThinkingFramework from "@/components/ThinkingFramework";
import ProblemLab from "@/components/ProblemLab";
import MetricsSection from "@/components/MetricsSection";
import SelectedWork from "@/components/SelectedWork";
import ArchitectureMap from "@/components/ArchitectureMap";
import DecisionEngine from "@/components/DecisionEngine";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import AboutThinking from "@/components/AboutThinking";
import ResumeSection from "@/components/ResumeSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-[#F5F7FA] selection:bg-[#4F7CFF]/30 selection:text-white">
      <CustomCursor />
      <Navbar />
      <Hero />
      <BeforeAfterComparison />
      <ThinkingFramework />
      <ProblemLab />
      <MetricsSection />
      <SelectedWork />
      <ArchitectureMap />
      <DecisionEngine />
      <ExperienceTimeline />
      <AboutThinking />
      <ResumeSection />
      <FinalCTA />
    </main>
  );
}
