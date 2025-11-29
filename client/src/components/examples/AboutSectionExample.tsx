import AboutSection from "../AboutSection";
import { aboutContent } from "@/data/portfolioData";

export default function AboutSectionExample() {
  return <AboutSection summary={aboutContent.summary} highlights={aboutContent.highlights} />;
}
