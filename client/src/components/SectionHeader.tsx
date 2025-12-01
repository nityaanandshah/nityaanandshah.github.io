import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
  title: string;
  description?: string;
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <AnimatedSection>
      <div className="space-y-6 mb-20">
        <div className="flex items-center gap-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-display text-foreground">
            {title}
          </h2>
        </div>
        <motion.div
          className="h-1 w-20 bg-primary rounded-full origin-left shadow-md"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        />
        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed pt-2">
            {description}
          </p>
        )}
      </div>
    </AnimatedSection>
  );
}
