import HeroSection from "./components/HeroSection/HeroSection";
import Company from "./components/Company/Company";
import { ProjectsSection } from "./components/projects-section/ProjectsSection";
import About from "./components/About/About";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Company />
      <ProjectsSection />
      <About />
    </div>
  );
}
