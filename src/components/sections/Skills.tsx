// src/components/sections/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, ShoppingBag, Target, Megaphone, Palette, Film, Box, BarChart3 } from "lucide-react";

const skillGroups = [
     {
    icon: BarChart3,
    title: "Business Growth",
    skills: ["Sales Strategy", "Brand Positioning", "KPI Tracking", "Budget Allocation", "Client Acquisition"],
  },
  {
    icon: Code2,
    title: "Web Development",
    skills: ["HTML/CSS", "JavaScript", "PHP", "Next.js", "Payment Gateway Integration", "SEO-Friendly Architecture"],
  },

  {
    icon: Target,
    title: "Digital Marketing",
    skills: ["SEO & SEM", "Google Ads", "Facebook Ads", "Content Marketing", "Analytics & ROI Tracking"],
  },
  {
    icon: Megaphone,
    title: "Social Media",
    skills: ["Social Media Management", "Ad Campaign Strategy", "Audience Research", "A/B Testing", "Retargeting & Funnels"],
  },
  {
    icon: Palette,
    title: "Graphic & VFX Design",
    skills: ["Graphic Design", "VFX Design", "Brand Identity", "Creative Ad Design", "Motion Graphics"],
  },
  {
    icon: Film,
    title: "Video Editing",
    skills: ["Adobe After Effects", "Adobe Premiere Pro", "Video Compositing", "Color Grading", "Short-Form Editing"],
  },
  {
    icon: Box,
    title: "3D & 2D Animation",
    skills: ["3D Animation", "2D Animation", "Modeling", "Motion Design", "Rendering"],
  },
 
    {
    icon: ShoppingBag,
    title: "E-Commerce & Operations",
    skills: ["Product Sourcing", "Inventory Management", "Order Fulfillment", "Shopping Cart Systems", "Customer Support"],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" ref={ref} className="relative py-10 sm:py-14 overflow-hidden" style={{ background: "#060B14" }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: "radial-gradient(rgba(55,138,221,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{
              background: "rgba(55,138,221,0.1)",
              border: "1px solid rgba(55,138,221,0.25)",
              color: "#64B5F6",
            }}
          >
            Skills &amp; Expertise
          </span>
          <h2
            className="text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight mb-4"
            style={{ color: "#E6EDF5", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            8+ years, Providing{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #378ADD 0%, #64B5F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              End to End Digital Solutions.
            </span>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#8B98AC" }}>
            Built from real client and business work, not just tutorials —
            development, design, and growth marketing, side by side.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="p-6 rounded-2xl"
                style={{ background: "#0D1420", border: "1px solid rgba(55,138,221,0.15)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(55,138,221,0.12)", border: "1px solid rgba(55,138,221,0.25)" }}
                >
                  <Icon size={20} style={{ color: "#64B5F6" }} />
                </div>

                <h3
                  className="text-base font-bold mb-4"
                  style={{ color: "#E6EDF5", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(55,138,221,0.06)",
                        color: "#B8C4D4",
                        border: "1px solid rgba(55,138,221,0.15)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}