import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin, BookOpen, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
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
  additionalCourses?: string[];
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

function EducationCard({ item, index }: { item: EducationItem; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AnimatedCard index={index}>
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
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                Key Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {item.highlights.map((highlight, hIndex) => (
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
                {item.additionalCourses && item.additionalCourses.length > 0 && !isExpanded && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(true)}
                    className="h-6 px-2 text-xs gap-1"
                  >
                    +{item.additionalCourses.length} more
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                )}
              </div>
              {isExpanded && item.additionalCourses && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap gap-2 mt-2"
                >
                  {item.additionalCourses.map((course, cIndex) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: cIndex * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="outline"
                        className="text-xs bg-secondary/50"
                      >
                        {course}
                      </Badge>
                    </motion.div>
                  ))}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(false)}
                    className="h-6 px-2 text-xs gap-1"
                  >
                    Show less
                    <ChevronUp className="h-3 w-3" />
                  </Button>
                </motion.div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </AnimatedCard>
  );
}

export default function EducationSection({
  education,
  publications,
}: EducationSectionProps) {
  return (
    <section id="education" className="py-24 sm:py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-3xl" />
      </div>
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
                <EducationCard key={item.id} item={item} index={index} />
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
                        <div className="flex items-center gap-3">
                          <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                            <Badge variant="secondary" className="font-mono text-xs bg-background border border-border">
                              {pub.year}
                            </Badge>
                          </motion.div>
                          {pub.url && (
                            <motion.a
                              href={pub.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                            >
                              View Paper
                              <ExternalLink className="h-3 w-3" />
                            </motion.a>
                          )}
                        </div>
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
