import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { IoMail, IoLocation, IoCall, IoSend, IoCheckmarkCircle } from "react-icons/io5";
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
    <section id="contact" className="py-32 sm:py-40 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Let's Build Something Amazing"
          description="Got an exciting project or opportunity? I'm always open to collaborating on innovative ideas. Let's turn your vision into reality! ✨"
        />

        <div className="grid lg:grid-cols-2 gap-20">
          <AnimatedSection delay={0.1}>
            <div className="space-y-12">
              <div className="space-y-8">
                <motion.a
                  href={`mailto:${email}`}
                  className="flex items-center gap-6 group"
                  whileHover={{ x: 4 }}
                  data-testid="link-contact-email"
                >
                  <motion.div
                    className="p-5 rounded-2xl bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <IoMail className="h-6 w-6" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Email</p>
                    <p className="font-semibold text-lg group-hover:text-foreground transition-colors mt-1">
                      {email}
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${phone}`}
                  className="flex items-center gap-6 group"
                  whileHover={{ x: 4 }}
                  data-testid="link-contact-phone"
                >
                  <motion.div
                    className="p-5 rounded-2xl bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <IoCall className="h-6 w-6" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Phone</p>
                    <p className="font-semibold text-lg group-hover:text-foreground transition-colors mt-1">
                      {phone}
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-6 group"
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    className="p-5 rounded-2xl bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <IoLocation className="h-6 w-6" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Location</p>
                    <p className="font-semibold text-lg group-hover:text-foreground transition-colors mt-1">{location}</p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-8">
                <p className="text-sm text-muted-foreground mb-6 font-medium">
                  Connect with me on social media
                </p>
                <div className="flex gap-5">
                  <motion.a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl bg-secondary hover:bg-muted transition-all shadow-sm"
                    aria-label="GitHub Profile"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    data-testid="link-contact-github"
                  >
                    <SiGithub className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl bg-secondary hover:bg-muted transition-all shadow-sm"
                    aria-label="LinkedIn Profile"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    data-testid="link-contact-linkedin"
                  >
                    <SiLinkedin className="h-6 w-6" />
                  </motion.a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <Card className="border-card-border bg-card backdrop-blur-sm" style={{ boxShadow: "0 4px 20px rgba(130, 90, 200, 0.12), 0 0 12px rgba(130, 90, 200, 0.08)" }}>
                <CardContent className="p-10">
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
                          className="p-5 rounded-full bg-green-500/10 text-green-500 shadow-md"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.2 }}
                        >
                          <IoCheckmarkCircle className="h-12 w-12" />
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
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            className="w-full gap-3 h-14 text-base font-semibold transition-all hover:shadow-[0_8px_30px_rgba(130,90,200,0.2)]"
                            disabled={isSubmitting}
                            data-testid="button-contact-submit"
                            style={{ boxShadow: "0 4px 20px rgba(130, 90, 200, 0.2), 0 0 20px rgba(130, 90, 200, 0.1)" }}
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
                                <IoSend className="h-5 w-5" />
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
