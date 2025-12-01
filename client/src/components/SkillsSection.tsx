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
    { label: "Programming Languages", items: skills.programming, color: "purple" },
    { label: "Web Development", items: skills.web, color: "fuchsia" },
    { label: "Databases", items: skills.databases, color: "pink" },
    { label: "Machine Learning", items: skills.ml, color: "rose" },
    { label: "Tools & Technologies", items: skills.tools, color: "violet" },
  ];

  const getColorClasses = (_color: string) => {
    return "hover:bg-card hover:border-primary";
  };

  return (
    <section id="skills" className="py-32 sm:py-40 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Skills & Technologies" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {categories.map((category, categoryIndex) => (
            <AnimatedSection key={category.label} delay={categoryIndex * 0.1}>
              <div className="space-y-6">
                <h3 className="font-bold text-xl text-foreground font-display">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-3.5">
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
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="secondary"
                        className={`font-mono text-sm px-5 py-2.5 cursor-default bg-secondary border border-border transition-all duration-300 shadow-sm hover:shadow ${getColorClasses(category.color)}`}
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
