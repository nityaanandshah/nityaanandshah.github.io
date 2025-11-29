import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

interface HeroSectionProps {
  name: string;
  title: string;
  tagline: string;
  resumeUrl: string;
  social: {
    linkedin: string;
    github: string;
  };
}

export default function HeroSection({
  name,
  title,
  tagline,
  resumeUrl,
  social,
}: HeroSectionProps) {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-block">
            <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full">
              Available for opportunities
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            {name}
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
            {title}
          </p>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="gap-2"
              data-testid="button-view-projects"
            >
              View Projects
              <ArrowDown className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="gap-2"
              data-testid="button-download-resume"
            >
              <a href={resumeUrl} download>
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={scrollToContact}
              className="gap-2"
              data-testid="button-contact-me"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-6">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-accent transition-colors"
              aria-label="GitHub Profile"
              data-testid="link-github"
            >
              <SiGithub className="h-5 w-5" />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-accent transition-colors"
              aria-label="LinkedIn Profile"
              data-testid="link-linkedin"
            >
              <SiLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
