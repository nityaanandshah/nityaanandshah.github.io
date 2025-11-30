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

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      purple: "hover:border-purple-400 hover:bg-purple-500/20 hover:shadow-lg hover:shadow-purple-500/50",
      fuchsia: "hover:border-fuchsia-400 hover:bg-fuchsia-500/20 hover:shadow-lg hover:shadow-fuchsia-500/50",
      pink: "hover:border-pink-400 hover:bg-pink-500/20 hover:shadow-lg hover:shadow-pink-500/50",
      rose: "hover:border-rose-400 hover:bg-rose-500/20 hover:shadow-lg hover:shadow-rose-500/50",
      violet: "hover:border-violet-400 hover:bg-violet-500/20 hover:shadow-lg hover:shadow-violet-500/50",
    };
    return colorMap[color] || colorMap.purple;
  };

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-fuchsia-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-purple-500/30 rounded-full blur-3xl" />
      </div>
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
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="secondary"
                        className={`font-mono text-sm px-4 py-2 cursor-default bg-background border border-border transition-all duration-300 hover:shadow-lg ${getColorClasses(category.color)}`}
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
