import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

interface SkillCategory {
  highlights: string[];
  additional: string[];
}

interface SkillsSectionProps {
  skills: {
    programming: SkillCategory;
    web: SkillCategory;
    databases: SkillCategory;
    ml: SkillCategory;
    tools: SkillCategory;
  };
}

function SkillCategoryComponent({ 
  label, 
  category, 
  categoryIndex 
}: { 
  label: string; 
  category: SkillCategory; 
  categoryIndex: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AnimatedSection delay={categoryIndex * 0.1}>
      <div className="space-y-6">
        <h3 className="font-bold text-xl text-foreground font-display">
          {label}
        </h3>
        <div className="flex flex-wrap gap-3">
          {category.highlights.map((skill, skillIndex) => (
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
                className="font-mono text-sm px-5 py-2.5 cursor-default bg-secondary border border-border transition-all duration-300 shadow-sm hover:shadow hover:bg-card hover:border-primary"
                data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
          {category.additional && category.additional.length > 0 && !isExpanded && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(true)}
              className="h-9 px-3 text-xs gap-1"
            >
              +{category.additional.length}
              <ChevronDown className="h-3 w-3" strokeWidth={3} />
            </Button>
          )}
        </div>
        {isExpanded && category.additional && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {category.additional.map((skill, skillIndex) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: skillIndex * 0.03 }}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="secondary"
                  className="font-mono text-sm px-5 py-2.5 cursor-default bg-secondary/70 border border-border transition-all duration-300 shadow-sm hover:shadow hover:bg-card hover:border-primary"
                  data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="h-9 px-3 text-xs gap-1"
            >
              Show less
              <ChevronUp className="h-3 w-3" strokeWidth={3} />
            </Button>
          </motion.div>
        )}
      </div>
    </AnimatedSection>
  );
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const categories = [
    { label: "Programming Languages", category: skills.programming },
    { label: "Web Development", category: skills.web },
    { label: "Databases", category: skills.databases },
    { label: "Machine Learning", category: skills.ml },
    { label: "Tools & Technologies", category: skills.tools },
  ];

  return (
    <section id="skills" className="py-32 sm:py-40 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Skills & Technologies" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {categories.map((cat, categoryIndex) => (
            <SkillCategoryComponent
              key={cat.label}
              label={cat.label}
              category={cat.category}
              categoryIndex={categoryIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
