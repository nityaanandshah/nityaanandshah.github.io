import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, BookOpen } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import AnimatedCard from "./AnimatedCard";
import SectionHeader from "./SectionHeader";

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  highlights: string[];
}

interface Publication {
  id: string;
  title: string;
  venue: string;
  track: string;
  year: string;
  url: string | null;
}

interface EducationSectionProps {
  education: EducationItem[];
  publications: Publication[];
}

export default function EducationSection({
  education,
  publications,
}: EducationSectionProps) {
  return (
    <section id="education" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Education & Publications" />

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <AnimatedSection delay={0.1}>
              <h3 className="text-xl font-semibold flex items-center gap-3 font-display">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <GraduationCap className="h-6 w-6 text-foreground" />
                </motion.div>
                Education
              </h3>
            </AnimatedSection>
            <div className="space-y-5">
              {education.map((item, index) => (
                <AnimatedCard key={item.id} index={index}>
                  <Card
                    className="border-card-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow"
                    data-testid={`card-education-${item.id}`}
                  >
                    <CardHeader className="pb-3">
                      <h4 className="font-semibold text-lg font-display">{item.degree}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-foreground font-medium">
                          {item.institution}
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {item.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{item.period}</span>
                        <motion.div whileHover={{ scale: 1.05 }}>
                          <Badge variant="secondary" className="font-mono bg-background border border-border">
                            {item.grade}
                          </Badge>
                        </motion.div>
                      </div>
                      {item.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.highlights.slice(0, 4).map((highlight, hIndex) => (
                            <motion.div
                              key={highlight}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + hIndex * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge
                                variant="outline"
                                className="text-xs"
                              >
                                {highlight}
                              </Badge>
                            </motion.div>
                          ))}
                          {item.highlights.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{item.highlights.length - 4} more
                            </Badge>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <h3 className="text-xl font-semibold flex items-center gap-3 font-display">
                <motion.div
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <BookOpen className="h-6 w-6 text-foreground" />
                </motion.div>
                Publications
              </h3>
            </AnimatedSection>
            <div className="space-y-5">
              {publications.map((pub, index) => (
                <AnimatedCard key={pub.id} index={index}>
                  <Card
                    className="border-card-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow"
                    data-testid={`card-publication-${pub.id}`}
                  >
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold font-display">{pub.title}</h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>
                            <span className="text-foreground font-medium">
                              {pub.venue}
                            </span>
                          </p>
                          <p>{pub.track}</p>
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                          <Badge variant="secondary" className="font-mono text-xs bg-background border border-border">
                            {pub.year}
                          </Badge>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
