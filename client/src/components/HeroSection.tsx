import { motion } from "framer-motion";
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

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

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
      <motion.div
        className="max-w-3xl mx-auto text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-6">
          <motion.div variants={item} className="inline-block">
            <motion.span
              className="text-sm font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Available for opportunities
            </motion.span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            {name}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl sm:text-2xl text-muted-foreground font-medium"
          >
            {title}
          </motion.p>

          <motion.p
            variants={item}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="gap-2"
                data-testid="button-view-projects"
              >
                View Projects
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown className="h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            className="flex items-center justify-center gap-4 pt-6"
          >
            <motion.a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-accent transition-colors"
              aria-label="GitHub Profile"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              data-testid="link-github"
            >
              <SiGithub className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-accent transition-colors"
              aria-label="LinkedIn Profile"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              data-testid="link-linkedin"
            >
              <SiLinkedin className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
