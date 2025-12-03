import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { IoBook } from "react-icons/io5";
import AnimatedCard from "./AnimatedCard";
import SectionHeader from "./SectionHeader";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

interface BlogSectionProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section id="blog" className="py-32 sm:py-40 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Latest Thoughts"
          description="Sharing insights on system design, machine learning, and engineering career growth."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <AnimatedCard key={post.id} index={index}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card
                  className="border-card-border bg-card backdrop-blur-sm transition-all group flex flex-col h-full cursor-pointer relative overflow-hidden hover:shadow-[0_15px_40px_rgb(130,90,200,0.15)]"
                  data-testid={`card-blog-${post.id}`}
                  style={{ boxShadow: "0 4px 20px rgba(130, 90, 200, 0.12), 0 0 12px rgba(130, 90, 200, 0.08)" }}
                >
                  {/* Animated accent bar */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1.5 bg-primary"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    style={{ boxShadow: "0 2px 12px rgba(130, 90, 200, 0.4), 0 0 16px rgba(130, 90, 200, 0.25)" }}
                  />

                  <CardHeader className="pb-5 relative z-10 pt-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <motion.div
                        className="p-3 rounded-lg bg-secondary text-foreground"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        style={{ boxShadow: "0 2px 12px rgba(130, 90, 200, 0.15), 0 0 12px rgba(130, 90, 200, 0.1)" }}
                      >
                        <IoBook className="h-6 w-6" />
                      </motion.div>
                      <Badge
                        variant="secondary"
                        className="text-xs font-semibold bg-card border-2 border-border px-3 py-1"
                      >
                        {post.category}
                      </Badge>
                    </div>

                    <h3 className="font-bold text-xl leading-tight group-hover:text-primary transition-colors font-display">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                      {post.excerpt}
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-between space-y-5 relative z-10">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + tagIndex * 0.05 }}
                        >
                          <Badge
                            variant="outline"
                            className="text-xs font-mono bg-background/50"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge
                          variant="outline"
                          className="text-xs font-mono bg-background/50"
                        >
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>

                    {/* Meta information */}
                    <div className="flex items-center justify-between pt-3 border-t border-border/50">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" strokeWidth={2.5} />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" strokeWidth={2.5} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Read more arrow with animation */}
                      <motion.div
                        className="text-primary"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>

        {/* Optional: "View All Posts" button for future expansion */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-card hover:bg-secondary border border-border hover:border-primary text-base font-semibold transition-all group"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{ boxShadow: "0 2px 12px rgba(130, 90, 200, 0.08)" }}
          >
            <span>Coming Soon: More Posts</span>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="h-5 w-5 text-primary" strokeWidth={2.5} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

