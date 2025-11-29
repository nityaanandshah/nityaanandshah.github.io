import ContactSection from "../ContactSection";
import { personalInfo } from "@/data/portfolioData";

export default function ContactSectionExample() {
  return (
    <ContactSection
      email={personalInfo.email}
      phone={personalInfo.phone}
      location={personalInfo.location}
      social={personalInfo.social}
    />
  );
}
