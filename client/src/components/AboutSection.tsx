import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface AboutSectionProps {
  summary: string;
  highlights: string[];
}

export default function AboutSection({ summary, highlights }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              About Me
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

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {summary}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <Card className="border-card-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">What I Bring</h3>
                  <ul className="space-y-3">
                    {highlights.map((highlight, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
