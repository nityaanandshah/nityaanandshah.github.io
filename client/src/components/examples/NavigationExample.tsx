import Navigation from "../Navigation";
import { navLinks, personalInfo } from "@/data/portfolioData";

export default function NavigationExample() {
  return <Navigation links={navLinks} name={personalInfo.name} />;
}
