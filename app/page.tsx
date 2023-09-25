import Image from "next/image";
import HeroSection from "./components/HeroSection/HeroSection";
import Company from "./components/Company/Company";
import { ProjectsSection } from "./components/projects-section/ProjectsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Company />
      <ProjectsSection />
    </div>
  );
}
