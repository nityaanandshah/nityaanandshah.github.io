import { Badge } from "@/components/ui/badge";

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
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Skills & Technologies
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category.label} className="space-y-4">
              <h3 className="font-semibold text-lg text-foreground">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="font-mono text-sm px-3 py-1.5"
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
