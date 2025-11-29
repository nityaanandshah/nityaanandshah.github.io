import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Prevent transition on initial page load
    document.documentElement.classList.add("no-transition");
    
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setMounted(true);
    
    // Remove no-transition class after a brief delay to enable smooth transitions
    setTimeout(() => {
      document.documentElement.classList.remove("no-transition");
    }, 100);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Don't render until mounted to prevent flash
  if (!mounted) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="h-10 w-10" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay: 0.5, 
        type: "spring", 
        stiffness: 300,
        damping: 20
      }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }} 
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full shadow-lg bg-card border-2 border-card-border hover:border-ring hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          data-testid="button-theme-toggle"
        >
          {/* Animated background on hover */}
          <motion.div
            className="absolute inset-0 bg-accent/10 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          <AnimatePresence mode="wait">
            {theme === "light" ? (
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Moon className="h-5 w-5 text-foreground group-hover:text-accent transition-colors duration-300" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Sun className="h-5 w-5 text-foreground group-hover:text-accent transition-colors duration-300" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </motion.div>
  );
}
