// src/components/sections/Contact.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin } from "react-icons/fa";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";


const contactInfo = [
  { icon: Mail, label: "Email", value: "ahmadshahbaz1104@gmail.com", href: "mailto:ahmadshahbaz1104@gmail.com" },
  { icon: Phone, label: "Phone", value: "+92 327 7222004", href: "tel:+923277222004" },
  { icon: MapPin, label: "Location", value: "Lahore, Pakistan", href: undefined },
  { icon: FaLinkedin, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/muhammadahmad1104/" },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setFormData({ name: "", email: "", projectType: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="portfolio-glow-section relative py-10 sm:py-14 overflow-hidden"
      style={{ background: "#F5F8FC" }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{
              background: "rgba(55,138,221,0.1)",
              border: "1px solid rgba(55,138,221,0.25)",
              color: "#2269A4",
            }}
          >
            Let&apos;s connect
          </span>
          <h2
            className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight mb-4"
            style={{ color: "#17263A", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Let&apos;s start a{" "}
            <span
              style={{ color: "#2269A4" }}
            >
              conversation.
            </span>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#60738A" }}>
            I&apos;m open to full-stack development opportunities and project
            collaborations. Send me a note and I&apos;ll get back to you soon.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div
                  className="flex items-center gap-4 p-5 rounded-2xl transition-colors duration-300 hover:border-[rgba(55,138,221,0.35)]"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(55,138,221,0.15)" }}
                >
                  <div
                    className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(55,138,221,0.12)", border: "1px solid rgba(55,138,221,0.25)" }}
                  >
                    <Icon size={18} style={{ color: "#2269A4" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "#52677F" }}>
                      {item.label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: "#17263A" }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} style={{ textDecoration: "none" }}>
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}

            {/* Social links */}
           
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 p-5 sm:p-7 rounded-2xl flex flex-col gap-4"
            style={{ background: "#FFFFFF", border: "1px solid rgba(55,138,221,0.15)" }}
            onSubmit={handleSubmit}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#60738A" }}>
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-colors duration-200 focus:border-[#378ADD]"
                  style={{ background: "#F5F8FC", border: "1px solid rgba(55,138,221,0.2)", color: "#17263A" }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#60738A" }}>
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-colors duration-200 focus:border-[#378ADD]"
                  style={{ background: "#F5F8FC", border: "1px solid rgba(55,138,221,0.2)", color: "#17263A" }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-project-type" className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#60738A" }}>
                  Opportunity or project type
              </label>
              <input
                id="contact-project-type"
                name="projectType"
                type="text"
                value={formData.projectType}
                onChange={handleChange}
                placeholder="Full-stack role, freelance project, collaboration..."
                className="px-4 py-3 rounded-xl text-sm outline-none transition-colors duration-200 focus:border-[#378ADD]"
                style={{ background: "#F5F8FC", border: "1px solid rgba(55,138,221,0.2)", color: "#17263A" }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#60738A" }}>
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share the role or opportunity you have in mind..."
                className="px-4 py-3 rounded-xl text-sm outline-none resize-none transition-colors duration-200 focus:border-[#378ADD]"
                style={{ background: "#F5F8FC", border: "1px solid rgba(55,138,221,0.2)", color: "#17263A" }}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold mt-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-60 disabled:hover:scale-100"
              style={{
                background:
                  status === "sent"
                    ? "#28A745"
                    : "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
                color: "#F7F9FC",
                boxShadow: "0 4px 20px rgba(55,138,221,0.35)",
              }}
            >
              {status === "sending" && <Loader2 size={15} className="animate-spin" />}
              {status === "sent" && <CheckCircle2 size={15} />}
              {status === "idle" || status === "error"
                ? "Send Message"
                : status === "sending"
                ? "Sending..."
                : "Sent!"}
              {status !== "sending" && status !== "sent" && <Send size={15} />}
            </button>

            {status === "error" && (
              <p className="text-sm" style={{ color: "#F87171" }}>
                Something went wrong. Try again, or email directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
