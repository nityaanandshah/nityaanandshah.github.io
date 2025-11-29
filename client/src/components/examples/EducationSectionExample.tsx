import EducationSection from "../EducationSection";
import { education, publications } from "@/data/portfolioData";

export default function EducationSectionExample() {
  return <EducationSection education={education} publications={publications} />;
}
