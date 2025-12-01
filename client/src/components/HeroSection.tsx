import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { IoDocument, IoMail } from "react-icons/io5";
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
    <section className="min-h-screen flex items-center justify-center pt-24 pb-32 px-6 relative overflow-hidden">

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-12">
          <motion.div variants={item} className="inline-block">
            <motion.span
              className="text-sm font-medium tracking-wide bg-card border border-border px-6 py-3 rounded-full shadow-sm"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span className="text-foreground">✨ Available for opportunities</span>
            </motion.span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight font-display text-foreground"
          >
            {name}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground/80 font-serif"
          >
            {title}
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-5 pt-8"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="gap-3 h-14 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all hover:shadow-[0_8px_30px_rgba(236,72,153,0.25)]"
                data-testid="button-view-projects"
                style={{ boxShadow: "0 4px 20px rgba(236, 72, 153, 0.2), 0 0 20px rgba(236, 72, 153, 0.1)" }}
              >
                View Projects
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown className="h-4 w-4" strokeWidth={3} />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="gap-3 h-14 px-8 text-base border hover:bg-secondary shadow-sm font-semibold"
                data-testid="button-view-resume"
              >
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  <IoDocument className="h-5 w-5" />
                  View Resume
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="secondary"
                size="lg"
                onClick={scrollToContact}
                className="gap-3 h-14 px-8 text-base shadow-sm font-semibold"
                data-testid="button-contact-me"
              >
                <IoMail className="h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            className="flex items-center justify-center gap-5 pt-10"
          >
            <motion.a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-card border border-border hover:bg-secondary transition-all duration-300 shadow-sm"
              aria-label="GitHub Profile"
              whileHover={{ scale: 1.15, rotate: 5, y: -4 }}
              whileTap={{ scale: 0.9 }}
              data-testid="link-github"
            >
              <SiGithub className="h-6 w-6" />
            </motion.a>
            <motion.a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-card border border-border hover:bg-secondary transition-all duration-300 shadow-sm"
              aria-label="LinkedIn Profile"
              whileHover={{ scale: 1.15, rotate: -5, y: -4 }}
              whileTap={{ scale: 0.9 }}
              data-testid="link-linkedin"
            >
              <SiLinkedin className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
