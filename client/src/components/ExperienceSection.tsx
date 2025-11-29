import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import AnimatedCard from "./AnimatedCard";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  bullets: string[];
}

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Work Experience
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

        <div className="relative">
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-0.5 bg-border hidden md:block"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <div
                key={item.id}
                className="relative md:pl-8"
                data-testid={`card-experience-${item.id}`}
              >
                <motion.div
                  className="absolute left-0 top-6 w-2 h-2 bg-primary rounded-full hidden md:block -translate-x-[3px]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                />

                <AnimatedCard index={index}>
                  <Card className="border-card-border transition-shadow hover:shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div className="space-y-1">
                          <h3 className="font-semibold text-xl">{item.role}</h3>
                          <div className="flex items-center gap-2 text-primary font-medium">
                            <Briefcase className="h-4 w-4" />
                            <span>{item.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>
                              {item.startDate} - {item.endDate}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {item.techStack.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + techIndex * 0.05 }}
                          >
                            <Badge
                              variant="outline"
                              className="font-mono text-xs"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      <ul className="space-y-2">
                        {item.bullets.map((bullet, bulletIndex) => (
                          <motion.li
                            key={bulletIndex}
                            className="text-sm text-muted-foreground pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-muted-foreground/40 before:rounded-full"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + bulletIndex * 0.05 }}
                          >
                            {bullet}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
