import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Lightbulb, X, Code2 } from "lucide-react";
import { IoFolder, IoLogoGithub, IoOpenOutline } from "react-icons/io5";
import AnimatedCard from "./AnimatedCard";
import SectionHeader from "./SectionHeader";

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  bullets: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  fullDescription?: string;
  problemStatement?: string;
  approach?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

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
                className="border-card-border bg-card backdrop-blur-sm transition-all group flex flex-col h-full cursor-pointer hover:shadow-[0_15px_40px_rgb(130,90,200,0.15)]"
                data-testid={`card-project-${project.id}`}
                onClick={() => setSelectedProject(project)}
                style={{ 
                  boxShadow: "0 4px 20px rgba(130, 90, 200, 0.12), 0 0 12px rgba(130, 90, 200, 0.08)",
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
                        style={{ boxShadow: "0 2px 12px rgba(130, 90, 200, 0.15), 0 0 12px rgba(130, 90, 200, 0.1)" }}
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

      {/* Project Details Modal - Custom Implementation */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Card */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-2xl border border-card-border bg-card/95 backdrop-blur-xl"
                initial={{ scale: 0.9, y: 40, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 40, opacity: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  duration: 0.3 
                }}
                onClick={(e) => e.stopPropagation()}
                style={{ 
                  boxShadow: "0 25px 60px rgba(130, 90, 200, 0.12), 0 0 20px rgba(130, 90, 200, 0.06), inset 0 1px 0 rgba(255,255,255,0.05)"
                }}
              >
                {/* Gradient Header Bar */}
                <div 
                  className="h-1.5 w-full"
                  style={{
                    background: "linear-gradient(90deg, hsl(260, 70%, 55%), hsl(280, 68%, 65%), hsl(245, 72%, 60%))"
                  }}
                />

                {/* Close Button */}
                <motion.button
                  className="absolute top-5 right-5 p-2 rounded-full bg-secondary/80 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors z-10"
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
                >
                  <X className="h-5 w-5" />
                </motion.button>

                {/* Scrollable Content */}
                <div className="overflow-y-auto max-h-[calc(85vh-6px)] p-6 sm:p-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {/* Header */}
                  <motion.div 
                    className="flex items-start gap-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.div
                      className="p-4 rounded-xl bg-secondary text-foreground shrink-0"
                      initial={{ rotate: -15, scale: 0.8 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.15 }}
                      style={{ boxShadow: "0 4px 12px rgba(130, 90, 200, 0.1)" }}
                    >
                      <IoFolder className="h-8 w-8" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground leading-tight">
                        {selectedProject.name}
                      </h2>
                      <p className="text-muted-foreground mt-2 leading-relaxed">
                        {selectedProject.fullDescription || selectedProject.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Content Sections */}
                  <div className="space-y-6">
                    {/* Problem Statement */}
                    {selectedProject.problemStatement && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div 
                          className="p-5 rounded-xl border border-border/50 relative overflow-hidden"
                          style={{ 
                            background: "linear-gradient(135deg, hsla(260, 70%, 55%, 0.08), hsla(280, 68%, 65%, 0.05))"
                          }}
                        >
                          {/* Decorative accent line */}
                          <div 
                            className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                            style={{ background: "linear-gradient(180deg, hsl(260, 70%, 55%), hsl(280, 68%, 65%))" }}
                          />
                          <div className="flex items-start gap-4 pl-3">
                            <motion.div 
                              className="p-2.5 rounded-lg bg-secondary/80 text-foreground shrink-0"
                              whileHover={{ scale: 1.05 }}
                              style={{ boxShadow: "0 2px 8px rgba(130, 90, 200, 0.08)" }}
                            >
                              <Target className="h-5 w-5" />
                            </motion.div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-foreground mb-2 font-display">
                                Problem Statement
                              </h3>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {selectedProject.problemStatement}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Approach */}
                    {selectedProject.approach && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div 
                          className="p-5 rounded-xl border border-border/50 relative overflow-hidden"
                          style={{ 
                            background: "linear-gradient(135deg, hsla(245, 72%, 60%, 0.08), hsla(260, 70%, 55%, 0.05))"
                          }}
                        >
                          {/* Decorative accent line */}
                          <div 
                            className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                            style={{ background: "linear-gradient(180deg, hsl(245, 72%, 60%), hsl(260, 70%, 55%))" }}
                          />
                          <div className="flex items-start gap-4 pl-3">
                            <motion.div 
                              className="p-2.5 rounded-lg bg-secondary/80 text-foreground shrink-0"
                              whileHover={{ scale: 1.05 }}
                              style={{ boxShadow: "0 2px 8px rgba(130, 90, 200, 0.08)" }}
                            >
                              <Lightbulb className="h-5 w-5" />
                            </motion.div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-foreground mb-2 font-display">
                                Approach & Implementation
                              </h3>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {selectedProject.approach}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Tech Stack */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div 
                        className="p-5 rounded-xl border border-border/50 relative overflow-hidden"
                        style={{ 
                          background: "linear-gradient(135deg, hsla(270, 65%, 58%, 0.08), hsla(245, 72%, 60%, 0.05))"
                        }}
                      >
                        {/* Decorative accent line */}
                        <div 
                          className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                          style={{ background: "linear-gradient(180deg, hsl(270, 65%, 58%), hsl(245, 72%, 60%))" }}
                        />
                        <div className="flex items-start gap-4 pl-3">
                          <motion.div 
                            className="p-2.5 rounded-lg bg-secondary/80 text-foreground shrink-0"
                            whileHover={{ scale: 1.05 }}
                            style={{ boxShadow: "0 2px 8px rgba(130, 90, 200, 0.08)" }}
                          >
                            <Code2 className="h-5 w-5" />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground mb-3 font-display">
                              Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.techStack.map((tech, index) => (
                                <motion.div
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.45 + index * 0.05 }}
                                  whileHover={{ scale: 1.08, y: -2 }}
                                >
                                  <Badge
                                    className="font-mono text-xs px-3 py-1.5 bg-secondary/80 text-foreground border border-border/50 hover:bg-secondary transition-colors"
                                    style={{ boxShadow: "0 1px 4px rgba(130, 90, 200, 0.05)" }}
                                  >
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Action Links */}
                    {(selectedProject.githubUrl || selectedProject.demoUrl) && (
                      <motion.div
                        className="flex flex-wrap gap-3 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {selectedProject.githubUrl && (
                          <motion.a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground text-sm font-semibold transition-all"
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            style={{ boxShadow: "0 2px 10px rgba(130, 90, 200, 0.08)" }}
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
                            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground text-sm font-semibold transition-all"
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            style={{ boxShadow: "0 2px 10px rgba(130, 90, 200, 0.08)" }}
                          >
                            <IoOpenOutline className="h-5 w-5" />
                            View Live Demo
                          </motion.a>
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
