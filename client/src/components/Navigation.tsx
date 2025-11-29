import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavLink {
  id: string;
  label: string;
}

interface NavigationProps {
  links: NavLink[];
  name: string;
}

export default function Navigation({ links, name }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = links.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(links[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-18 py-5 flex items-center justify-between">
        <motion.button
          onClick={scrollToTop}
          className="font-semibold text-xl tracking-tight font-display hover:opacity-70 transition-opacity"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          data-testid="link-logo"
        >
          {name.split(" ")[0]}
          <span className="text-muted-foreground">.</span>
        </motion.button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid={`link-nav-${link.id}`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-foreground rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.div>
        </Button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === link.id
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                  data-testid={`link-mobile-nav-${link.id}`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
