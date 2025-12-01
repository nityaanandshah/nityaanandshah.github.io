import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Target, AlertCircle, TrendingUp, Image as ImageIcon } from "lucide-react";
import { IoFolder, IoLogoGithub, IoOpenOutline, IoBulb } from "react-icons/io5";
import AnimatedCard from "./AnimatedCard";
import SectionHeader from "./SectionHeader";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  bullets: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  // Extended fields for modal
  fullDescription?: string;
  problemStatement?: string;
  approach?: string;
  challenges?: string[];
  impact?: string;
  architectureDiagram?: string | null;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 sm:py-40 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Featured Projects"
          description="A selection of projects that showcase my experience in full-stack development, machine learning, and building scalable applications."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <AnimatedCard key={project.id} index={index}>
              <Card
                className="border-card-border bg-card backdrop-blur-sm transition-all group flex flex-col h-full cursor-pointer hover:shadow-[0_15px_40px_rgb(236,72,153,0.2)]"
                data-testid={`card-project-${project.id}`}
                onClick={() => setSelectedProject(project)}
                style={{ 
                  boxShadow: "0 4px 20px rgba(236, 72, 153, 0.12), 0 0 12px rgba(236, 72, 153, 0.08)",
                  pointerEvents: "auto",
                  position: "relative",
                  zIndex: 1
                }}
              >
                  <CardHeader className="pb-5">
                    <div className="flex items-start justify-between gap-4">
                      <motion.div
                        className="p-3 rounded-lg bg-secondary text-foreground"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        style={{ boxShadow: "0 2px 12px rgba(236, 72, 153, 0.15), 0 0 12px rgba(236, 72, 153, 0.1)" }}
                      >
                        <IoFolder className="h-6 w-6" />
                      </motion.div>
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg hover:bg-secondary transition-colors shadow-sm"
                            aria-label={`View ${project.name} on GitHub`}
                            whileHover={{ scale: 1.15, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            data-testid={`link-github-${project.id}`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <IoLogoGithub className="h-5 w-5 text-muted-foreground" />
                          </motion.a>
                        )}
                        {project.demoUrl && (
                          <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg hover:bg-secondary transition-colors shadow-sm"
                            aria-label={`View ${project.name} demo`}
                            whileHover={{ scale: 1.15, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            data-testid={`link-demo-${project.id}`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <IoOpenOutline className="h-5 w-5 text-muted-foreground" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl mt-6 group-hover:text-foreground transition-colors font-display">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between space-y-6">
                    <ul className="space-y-3">
                      {project.bullets.map((bullet, bulletIndex) => (
                        <motion.li
                          key={bulletIndex}
                          className="text-sm text-muted-foreground pl-5 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-foreground/40 before:rounded-full"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + bulletIndex * 0.05 }}
                        >
                          {bullet}
                        </motion.li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2.5 pt-4">
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
                            className="font-mono text-xs bg-background border border-border"
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

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <DialogHeader className="pb-4">
                  <DialogTitle className="text-3xl font-bold font-display flex items-center gap-4">
                    <motion.div
                      className="p-3 rounded-lg bg-secondary shadow-sm"
                      initial={{ rotate: -10 }}
                      animate={{ rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <IoFolder className="h-7 w-7" />
                    </motion.div>
                    {selectedProject.name}
                  </DialogTitle>
                </DialogHeader>

                <ScrollArea className="max-h-[calc(90vh-120px)] pr-4">
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {/* Full Description */}
                    {selectedProject.fullDescription && (
                      <div>
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedProject.fullDescription}
                        </p>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide text-muted-foreground">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.15 + index * 0.03 }}
                          >
                            <Badge variant="secondary" className="font-mono text-xs">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Problem Statement */}
                    {selectedProject.problemStatement && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex items-start gap-3 p-4 rounded-md bg-secondary/30 border border-border">
                          <Target className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold mb-2">Problem Statement</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {selectedProject.problemStatement}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Approach */}
                    {selectedProject.approach && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 }}
                      >
                        <div className="flex items-start gap-3 p-5 rounded-lg bg-secondary/30 border border-border shadow-sm">
                          <IoBulb className="h-6 w-6 text-foreground mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold mb-2">Approach & Implementation</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {selectedProject.approach}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Architecture Diagram Placeholder */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="p-8 rounded-md bg-secondary/20 border border-dashed border-border flex flex-col items-center justify-center text-center">
                        <ImageIcon className="h-12 w-12 text-muted-foreground/50 mb-3" />
                        <p className="text-sm text-muted-foreground">
                          Architecture Diagram
                        </p>
                        <p className="text-xs text-muted-foreground/70 mt-1">
                          Coming soon
                        </p>
                      </div>
                    </motion.div>

                    {/* Challenges */}
                    {selectedProject.challenges && selectedProject.challenges.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 }}
                      >
                        <div className="flex items-start gap-3 p-4 rounded-md bg-secondary/30 border border-border">
                          <AlertCircle className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-semibold mb-3">Key Challenges</h4>
                            <ul className="space-y-2">
                              {selectedProject.challenges.map((challenge, index) => (
                                <motion.li
                                  key={index}
                                  className="text-sm text-muted-foreground pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-foreground/40 before:rounded-full"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.4 + index * 0.05 }}
                                >
                                  {challenge}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Impact */}
                    {selectedProject.impact && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.45 }}
                      >
                        <div className="flex items-start gap-3 p-4 rounded-md bg-secondary/30 border border-border">
                          <TrendingUp className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold mb-2">Impact & Results</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {selectedProject.impact}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Links */}
                    {(selectedProject.githubUrl || selectedProject.demoUrl) && (
                      <motion.div
                        className="flex gap-3 pt-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {selectedProject.githubUrl && (
                          <motion.a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm font-semibold shadow-sm"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <IoLogoGithub className="h-5 w-5" />
                            View on GitHub
                          </motion.a>
                        )}
                        {selectedProject.demoUrl && (
                          <motion.a
                            href={selectedProject.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm font-semibold shadow-sm"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <IoOpenOutline className="h-5 w-5" />
                            View Demo
                          </motion.a>
                        )}
                      </motion.div>
                    )}
                  </motion.div>
                </ScrollArea>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}
