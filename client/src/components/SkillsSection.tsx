import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

interface SkillsSectionProps {
  skills: {
    programming: string[];
    web: string[];
    databases: string[];
    ml: string[];
    tools: string[];
  };
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const categories = [
    { label: "Programming Languages", items: skills.programming },
    { label: "Web Development", items: skills.web },
    { label: "Databases", items: skills.databases },
    { label: "Machine Learning", items: skills.ml },
    { label: "Tools & Technologies", items: skills.tools },
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Skills & Technologies" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((category, categoryIndex) => (
            <AnimatedSection key={category.label} delay={categoryIndex * 0.1}>
              <div className="space-y-5">
                <h3 className="font-semibold text-lg text-foreground font-display">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.3,
                      }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="secondary"
                        className="font-mono text-sm px-4 py-2 cursor-default bg-background border border-border"
                        data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
