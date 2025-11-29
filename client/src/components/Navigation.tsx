import { useState, useEffect } from "react";
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="font-semibold text-lg tracking-tight hover:text-primary transition-colors"
          data-testid="link-logo"
        >
          {name.split(" ")[0]}
          <span className="text-primary">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === link.id
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
              data-testid={`link-nav-${link.id}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="px-6 py-4 space-y-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  activeSection === link.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                data-testid={`link-mobile-nav-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
