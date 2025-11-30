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
import SectionHeader from "./SectionHeader";

interface ContactSectionProps {
  email: string;
  phone: string;
  location: string;
  web3formsKey: string;
  social: {
    linkedin: string;
    github: string;
  };
}

export default function ContactSection({
  email,
  phone,
  location,
  web3formsKey,
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

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try emailing me directly at " + email);
    } finally {
      setIsSubmitting(false);
    }
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
    <section id="contact" className="py-24 sm:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Get In Touch"
          description="I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!"
        />

        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedSection delay={0.1}>
            <div className="space-y-10">
              <div className="space-y-6">
                <motion.a
                  href={`mailto:${email}`}
                  className="flex items-center gap-5 group"
                  whileHover={{ x: 4 }}
                  data-testid="link-contact-email"
                >
                  <motion.div
                    className="p-4 rounded-xl bg-secondary text-foreground group-hover:bg-foreground group-hover:text-background transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Mail className="h-5 w-5" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium group-hover:text-foreground transition-colors">
                      {email}
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${phone}`}
                  className="flex items-center gap-5 group"
                  whileHover={{ x: 4 }}
                  data-testid="link-contact-phone"
                >
                  <motion.div
                    className="p-4 rounded-xl bg-secondary text-foreground group-hover:bg-foreground group-hover:text-background transition-colors"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Phone className="h-5 w-5" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium group-hover:text-foreground transition-colors">
                      {phone}
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-5"
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    className="p-4 rounded-xl bg-secondary text-foreground"
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

              <div className="pt-6">
                <p className="text-sm text-muted-foreground mb-5">
                  Connect with me on social media
                </p>
                <div className="flex gap-4">
                  <motion.a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-card border border-card-border hover:bg-secondary transition-colors"
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
                    className="p-4 rounded-xl bg-card border border-card-border hover:bg-secondary transition-colors"
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
              <Card className="border-card-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex flex-col items-center justify-center py-16 text-center space-y-5"
                      >
                        <motion.div
                          className="p-4 rounded-full bg-green-500/10 text-green-500"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.2 }}
                        >
                          <CheckCircle2 className="h-10 w-10" />
                        </motion.div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-xl font-display">Message Sent!</h3>
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
                          <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`h-12 ${errors.name ? "border-destructive" : ""}`}
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
                          <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={`h-12 ${errors.email ? "border-destructive" : ""}`}
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
                          <Label htmlFor="message" className="text-sm font-medium">Message</Label>
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
                            className="w-full gap-2 h-12 text-base"
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
