import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Mail } from "lucide-react";
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
    <section className="min-h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden">
      {/* Background gradient glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-pink-600/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8">
          <motion.div variants={item} className="inline-block">
            <motion.span
              className="text-sm font-medium tracking-wide bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 px-5 py-2.5 rounded-full shadow-lg shadow-purple-500/30"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
            >
              <span className="text-white">✨ Available for opportunities</span>
            </motion.span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight font-display bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent"
          >
            {name}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-2xl sm:text-3xl font-medium tracking-tight bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent"
          >
            {title}
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed"
          >
            {tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-4 pt-6"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="gap-2 h-12 px-6 text-base bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-700 hover:via-fuchsia-700 hover:to-pink-700 shadow-lg shadow-purple-500/40 text-white"
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
                className="gap-2 h-12 px-6 text-base border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-500"
                data-testid="button-view-resume"
              >
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  View Resume
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="secondary"
                size="lg"
                onClick={scrollToContact}
                className="gap-2 h-12 px-6 text-base hover:bg-purple-500/10"
                data-testid="button-contact-me"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            className="flex items-center justify-center gap-4 pt-8"
          >
            <motion.a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-fuchsia-500/20 border border-border hover:border-purple-500/50 transition-all duration-300"
              aria-label="GitHub Profile"
              whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              data-testid="link-github"
            >
              <SiGithub className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-gradient-to-br hover:from-fuchsia-500/20 hover:to-pink-500/20 border border-border hover:border-fuchsia-500/50 transition-all duration-300"
              aria-label="LinkedIn Profile"
              whileHover={{ scale: 1.1, rotate: -5, boxShadow: "0 10px 30px rgba(217, 70, 239, 0.4)" }}
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
