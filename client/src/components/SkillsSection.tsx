import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "./AnimatedSection";

interface SkillsSectionProps {
  skills: {
    programming: string[];
    web: string[];
    ml: string[];
    tools: string[];
  };
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const categories = [
    { label: "Programming Languages", items: skills.programming },
    { label: "Web Development", items: skills.web },
    { label: "Machine Learning", items: skills.ml },
    { label: "Tools & Technologies", items: skills.tools },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Skills & Technologies
            </h2>
            <motion.div
              className="h-1 w-16 bg-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <AnimatedSection key={category.label} delay={categoryIndex * 0.1}>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-2">
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
                        className="font-mono text-sm px-3 py-1.5 cursor-default"
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
