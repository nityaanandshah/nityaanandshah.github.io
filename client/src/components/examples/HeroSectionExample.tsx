import HeroSection from "../HeroSection";
import { personalInfo } from "@/data/portfolioData";

export default function HeroSectionExample() {
  return (
    <HeroSection
      name={personalInfo.name}
      title={personalInfo.title}
      tagline={personalInfo.tagline}
      resumeUrl={personalInfo.resumeUrl}
      social={personalInfo.social}
    />
  );
}
