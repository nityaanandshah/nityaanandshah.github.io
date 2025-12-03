import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IoBriefcase, IoLocation, IoCalendar } from "react-icons/io5";
import AnimatedSection from "./AnimatedSection";
import AnimatedCard from "./AnimatedCard";
import SectionHeader from "./SectionHeader";

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
    <section id="experience" className="py-32 sm:py-40 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Work Experience" />

        <div className="relative">
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <div
                key={item.id}
                className="relative md:pl-12"
                data-testid={`card-experience-${item.id}`}
              >
                  <motion.div
                    className="absolute left-0 top-10 w-3 h-3 bg-primary rounded-full hidden md:block -translate-x-1.5"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                    style={{ boxShadow: "0 0 12px rgba(130, 90, 200, 0.6), 0 0 20px rgba(130, 90, 200, 0.3)" }}
                  />

                <AnimatedCard index={index}>
                  <Card className="border-card-border bg-card backdrop-blur-sm transition-all hover:shadow-[0_15px_40px_rgb(130,90,200,0.15)]" style={{ boxShadow: "0 4px 20px rgba(130, 90, 200, 0.12), 0 0 12px rgba(130, 90, 200, 0.08)" }}>
                    <CardHeader className="pb-5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
                        <div className="space-y-3">
                          <h3 className="font-bold text-2xl font-display">{item.role}</h3>
                          <div className="flex items-center gap-3 text-foreground font-semibold">
                            <IoBriefcase className="h-5 w-5" />
                            <span>{item.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-start sm:items-end gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <IoCalendar className="h-4 w-4" />
                            <span>
                              {item.startDate} - {item.endDate}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <IoLocation className="h-4 w-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex flex-wrap gap-2.5">
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
                      <ul className="space-y-3.5">
                        {item.bullets.map((bullet, bulletIndex) => (
                          <motion.li
                            key={bulletIndex}
                            className="text-sm text-muted-foreground pl-5 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-foreground/40 before:rounded-full"
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
