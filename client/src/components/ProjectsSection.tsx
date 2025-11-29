import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  bullets: string[];
  githubUrl: string | null;
  demoUrl: string | null;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 sm:py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full" />
          <p className="text-muted-foreground max-w-2xl">
            A selection of projects that showcase my experience in full-stack
            development, machine learning, and building scalable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="border-card-border hover-elevate transition-all group flex flex-col"
              data-testid={`card-project-${project.id}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <Folder className="h-5 w-5" />
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-md hover:bg-muted transition-colors"
                        aria-label={`View ${project.name} on GitHub`}
                        data-testid={`link-github-${project.id}`}
                      >
                        <Github className="h-4 w-4 text-muted-foreground" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-md hover:bg-muted transition-colors"
                        aria-label={`View ${project.name} demo`}
                        data-testid={`link-demo-${project.id}`}
                      >
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="font-semibold text-xl mt-4 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <ul className="space-y-2">
                  {project.bullets.map((bullet, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary/40 before:rounded-full"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-mono text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
