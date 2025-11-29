import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

import {
  personalInfo,
  aboutContent,
  skills,
  experience,
  projects,
  education,
  publications,
  blogPosts,
  navLinks,
} from "@/data/portfolioData";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation links={navLinks} name={personalInfo.name} />

      <main>
        <HeroSection
          name={personalInfo.name}
          title={personalInfo.title}
          tagline={personalInfo.tagline}
          resumeUrl={personalInfo.resumeUrl}
          social={personalInfo.social}
        />

        <AboutSection
          summary={aboutContent.summary}
          highlights={aboutContent.highlights}
        />

        <SkillsSection skills={skills} />

        <ExperienceSection experience={experience} />

        <ProjectsSection projects={projects} />

        <EducationSection education={education} publications={publications} />

        <BlogSection posts={blogPosts} />

        <ContactSection
          email={personalInfo.email}
          phone={personalInfo.phone}
          location={personalInfo.location}
          social={personalInfo.social}
        />
      </main>

      <Footer name={personalInfo.name} social={personalInfo.social} />

      <ThemeToggle />
    </div>
  );
}
