import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Heart } from "lucide-react";

interface FooterProps {
  name: string;
  social: {
    linkedin: string;
    github: string;
  };
}

export default function Footer({ name, social }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="py-16 px-6 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <motion.p
            className="text-sm text-muted-foreground flex items-center gap-1.5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            </motion.span>{" "}
            by {name.split(" ")[0]}
          </motion.p>

          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            &copy; {currentYear} {name}
          </motion.p>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-secondary transition-all"
              aria-label="GitHub Profile"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-testid="link-footer-github"
            >
              <SiGithub className="h-5 w-5 text-muted-foreground" />
            </motion.a>
            <motion.a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-secondary transition-all"
              aria-label="LinkedIn Profile"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-testid="link-footer-linkedin"
            >
              <SiLinkedin className="h-5 w-5 text-muted-foreground" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
