import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
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
    <section id="blog" className="py-24 sm:py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Latest Thoughts"
          description="Sharing insights on system design, machine learning, and engineering career growth."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <AnimatedCard key={post.id} index={index}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card
                  className="border-card-border bg-card/50 backdrop-blur-sm transition-all group flex flex-col h-full hover:shadow-xl hover:border-accent/50 cursor-pointer relative overflow-hidden"
                  data-testid={`card-blog-${post.id}`}
                >
                  {/* Animated gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Animated accent bar */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  />

                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <motion.div
                        className="p-2 rounded-lg bg-accent/10 text-accent"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <BookOpen className="h-5 w-5" />
                      </motion.div>
                      <Badge
                        variant="secondary"
                        className="text-xs font-medium bg-accent/10 text-accent border-accent/20"
                      >
                        {post.category}
                      </Badge>
                    </div>

                    <h3 className="font-semibold text-xl leading-tight group-hover:text-accent transition-colors font-display">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                      {post.excerpt}
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-between space-y-4 relative z-10">
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
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Read more arrow with animation */}
                      <motion.div
                        className="text-accent"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </CardContent>

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.06), transparent 40%)",
                    }}
                  />
                </Card>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>

        {/* Optional: "View All Posts" button for future expansion */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary hover:bg-accent/10 border border-border hover:border-accent/50 text-sm font-medium transition-all group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Coming Soon: More Posts</span>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="h-4 w-4 text-accent" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

