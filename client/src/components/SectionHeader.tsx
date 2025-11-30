import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
  title: string;
  description?: string;
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <AnimatedSection>
      <div className="space-y-4 mb-16">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight font-display bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {title}
          </h2>
        </div>
        <motion.div
          className="h-1 w-12 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-full origin-left shadow-lg shadow-purple-500/40"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        />
        {description && (
          <p className="text-lg text-muted-foreground/90 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </AnimatedSection>
  );
}
