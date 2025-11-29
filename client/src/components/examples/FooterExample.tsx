import Footer from "../Footer";
import { personalInfo } from "@/data/portfolioData";

export default function FooterExample() {
  return <Footer name={personalInfo.name} social={personalInfo.social} />;
}
