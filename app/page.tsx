import Image from "next/image";
import HeroSection from "./components/HeroSection/HeroSection";
import Company from "./components/Company/Company";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Company />
    </div>
  );
}
