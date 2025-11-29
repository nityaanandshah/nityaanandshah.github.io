import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import AnimatedSection from "./AnimatedSection";

interface ContactSectionProps {
  email: string;
  phone: string;
  location: string;
  social: {
    linkedin: string;
    github: string;
  };
}

export default function ContactSection({
  email,
  phone,
  location,
  social,
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // TODO: Replace with actual API call
    console.log("Form submitted:", formData);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Get In Touch
            </h2>
            <motion.div
              className="h-1 w-16 bg-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <p className="text-muted-foreground max-w-2xl">
              I'm always open to discussing new opportunities, interesting projects,
              or just having a chat about technology. Feel free to reach out!
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <div className="space-y-8">
              <div className="space-y-6">
                <motion.a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 4 }}
                  data-testid="link-contact-email"
                >
                  <motion.div
                    className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Mail className="h-5 w-5" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {email}
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${phone}`}
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 4 }}
                  data-testid="link-contact-phone"
                >
                  <motion.div
                    className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Phone className="h-5 w-5" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {phone}
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-4"
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    className="p-3 rounded-lg bg-primary/10 text-primary"
                    whileHover={{ scale: 1.1 }}
                  >
                    <MapPin className="h-5 w-5" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{location}</p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with me on social media
                </p>
                <div className="flex gap-3">
                  <motion.a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card border border-card-border hover:bg-accent transition-colors"
                    aria-label="GitHub Profile"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    data-testid="link-contact-github"
                  >
                    <SiGithub className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card border border-card-border hover:bg-accent transition-colors"
                    aria-label="LinkedIn Profile"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    data-testid="link-contact-linkedin"
                  >
                    <SiLinkedin className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <Card className="border-card-border">
                <CardContent className="p-6">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                      >
                        <motion.div
                          className="p-3 rounded-full bg-green-500/10 text-green-500"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.2 }}
                        >
                          <CheckCircle2 className="h-8 w-8" />
                        </motion.div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg">Message Sent!</h3>
                          <p className="text-sm text-muted-foreground">
                            Thank you for reaching out. I'll get back to you soon.
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? "border-destructive" : ""}
                            data-testid="input-contact-name"
                          />
                          <AnimatePresence>
                            {errors.name && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-xs text-destructive"
                              >
                                {errors.name}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? "border-destructive" : ""}
                            data-testid="input-contact-email"
                          />
                          <AnimatePresence>
                            {errors.email && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-xs text-destructive"
                              >
                                {errors.email}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell me about your project or opportunity..."
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className={`resize-none ${errors.message ? "border-destructive" : ""}`}
                            data-testid="input-contact-message"
                          />
                          <AnimatePresence>
                            {errors.message && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-xs text-destructive"
                              >
                                {errors.message}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <Button
                            type="submit"
                            className="w-full gap-2"
                            disabled={isSubmitting}
                            data-testid="button-contact-submit"
                          >
                            {isSubmitting ? (
                              <motion.span
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                Sending...
                              </motion.span>
                            ) : (
                              <>
                                <Send className="h-4 w-4" />
                                Send Message
                              </>
                            )}
                          </Button>
                        </motion.div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
