import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { IoCheckmarkCircle } from "react-icons/io5";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

interface AboutSectionProps {
  summary: string;
  highlights: string[];
}

export default function AboutSection({ summary, highlights }: AboutSectionProps) {
  return (
    <section id="about" className="py-32 sm:py-40 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="About Me" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {summary}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <Card className="border-card-border bg-card backdrop-blur-sm" style={{ boxShadow: "0 4px 20px rgba(130, 90, 200, 0.12), 0 0 12px rgba(130, 90, 200, 0.08)" }}>
                <CardContent className="p-10">
                  <h3 className="font-bold text-xl mb-8 font-display">What I Bring</h3>
                  <ul className="space-y-5">
                    {highlights.map((highlight, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-5"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <IoCheckmarkCircle className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground text-base">{highlight}</span>
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
