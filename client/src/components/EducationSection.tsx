import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin } from "lucide-react";

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
    <section id="education" className="py-20 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Education & Publications
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((item) => (
                <Card
                  key={item.id}
                  className="border-card-border"
                  data-testid={`card-education-${item.id}`}
                >
                  <CardHeader className="pb-3">
                    <h4 className="font-semibold text-lg">{item.degree}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-medium">
                        {item.institution}
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{item.period}</span>
                      <Badge variant="secondary" className="font-mono">
                        {item.grade}
                      </Badge>
                    </div>
                    {item.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.slice(0, 4).map((highlight) => (
                          <Badge
                            key={highlight}
                            variant="outline"
                            className="text-xs"
                          >
                            {highlight}
                          </Badge>
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
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <svg
                className="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Publications
            </h3>
            <div className="space-y-4">
              {publications.map((pub) => (
                <Card
                  key={pub.id}
                  className="border-card-border"
                  data-testid={`card-publication-${pub.id}`}
                >
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold">{pub.title}</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>
                          <span className="text-primary font-medium">
                            {pub.venue}
                          </span>
                        </p>
                        <p>{pub.track}</p>
                      </div>
                      <Badge variant="secondary" className="font-mono text-xs">
                        {pub.year}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
