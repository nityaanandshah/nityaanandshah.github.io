import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

interface AboutSectionProps {
  summary: string;
  highlights: string[];
}

export default function AboutSection({ summary, highlights }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="About Me" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {summary}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <Card className="border-card-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-lg mb-6 font-display">What I Bring</h3>
                  <ul className="space-y-4">
                    {highlights.map((highlight, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-foreground mt-0.5 shrink-0" />
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
