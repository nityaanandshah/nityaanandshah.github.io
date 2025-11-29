import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface AboutSectionProps {
  summary: string;
  highlights: string[];
}

export default function AboutSection({ summary, highlights }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {summary}
            </p>
          </div>

          <Card className="border-card-border">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">What I Bring</h3>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
