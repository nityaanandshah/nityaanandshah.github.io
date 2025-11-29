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
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with{" "}
            <Heart className="h-4 w-4 text-destructive fill-destructive" /> by{" "}
            {name.split(" ")[0]}
          </p>

          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {name}. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="GitHub Profile"
              data-testid="link-footer-github"
            >
              <SiGithub className="h-4 w-4 text-muted-foreground" />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="LinkedIn Profile"
              data-testid="link-footer-linkedin"
            >
              <SiLinkedin className="h-4 w-4 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
