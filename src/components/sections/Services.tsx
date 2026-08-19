// app/components/Services.tsx
"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Code2,
  Palette,
  Megaphone,
  ShoppingCart,
  Binary,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Business Strategy",
    desc: "Growth planning, market positioning, and consultancy to turn your idea into a scalable business model.",
  },
  {
    icon: Code2,
    title: "Web & App Development",
    desc: "Custom websites, web apps, and software built for performance, from landing pages to full products.",
  },
  {
    icon: Palette,
    title: "Graphic & VFX Design",
    desc: "Brand identity, visual assets, and motion/VFX work that make your business look as good as it performs.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Paid ads, social media management, and campaigns built to bring in the right audience, not just traffic.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    desc: "End-to-end store setup, checkout flows, and optimization to turn visitors into paying customers.",
  },
  {
    icon: Binary,
    title: "Algorithm & Logic Building",
    desc: "Custom logic, automation, and problem-solving for products that need more than a template can offer.",
  },
];

export  function Services() {
  return (
    <section
      id="services"
      className="relative py-10 sm:py-14 overflow-hidden"
      style={{ background: "#060B14" }}
    >
      {/* Dot grid, consistent with hero */}
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
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
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
            What I Do
          </span>
          <h2
            className="text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight mb-4"
            style={{ color: "#E6EDF5", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            One partner, every piece of{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #378ADD 0%, #64B5F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              your growth
            </span>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#8B98AC" }}>
            From strategy to execution, I cover the full stack a growing
            business actually needs, no juggling five different freelancers.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-2xl transition-colors duration-300 cursor-default"
                style={{
                  background: "#0D1420",
                  border: "1px solid rgba(55,138,221,0.15)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: "rgba(55,138,221,0.12)",
                    border: "1px solid rgba(55,138,221,0.25)",
                  }}
                >
                  <Icon size={20} style={{ color: "#64B5F6" }} />
                </div>

                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <h3
                    className="text-lg font-bold"
                    style={{ color: "#E6EDF5", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 mt-0.5 opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0"
                    style={{ color: "#378ADD" }}
                  />
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "#8B98AC" }}>
                  {service.desc}
                </p>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: "linear-gradient(90deg, #378ADD, transparent)" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}