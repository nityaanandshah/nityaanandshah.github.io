import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Folder } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import AnimatedCard from "./AnimatedCard";

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
        <AnimatedSection>
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Featured Projects
            </h2>
            <motion.div
              className="h-1 w-16 bg-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <p className="text-muted-foreground max-w-2xl">
              A selection of projects that showcase my experience in full-stack
              development, machine learning, and building scalable applications.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedCard key={project.id} index={index}>
              <Card
                className="border-card-border transition-all group flex flex-col h-full hover:shadow-lg"
                data-testid={`card-project-${project.id}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-3">
                    <motion.div
                      className="p-2 rounded-md bg-primary/10 text-primary"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Folder className="h-5 w-5" />
                    </motion.div>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-md hover:bg-muted transition-colors"
                          aria-label={`View ${project.name} on GitHub`}
                          whileHover={{ scale: 1.15, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          data-testid={`link-github-${project.id}`}
                        >
                          <Github className="h-4 w-4 text-muted-foreground" />
                        </motion.a>
                      )}
                      {project.demoUrl && (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-md hover:bg-muted transition-colors"
                          aria-label={`View ${project.name} demo`}
                          whileHover={{ scale: 1.15, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          data-testid={`link-demo-${project.id}`}
                        >
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </motion.a>
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
                    {project.bullets.map((bullet, bulletIndex) => (
                      <motion.li
                        key={bulletIndex}
                        className="text-sm text-muted-foreground pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary/40 before:rounded-full"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + bulletIndex * 0.05 }}
                      >
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="font-mono text-xs"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
