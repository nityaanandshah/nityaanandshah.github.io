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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight font-display">
            {title}
          </h2>
        </div>
        <motion.div
          className="h-1 w-12 bg-foreground rounded-full origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        />
        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </AnimatedSection>
  );
}
