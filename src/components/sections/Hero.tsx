// app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight } from "lucide-react";

const services = [
  "Business Strategy",
  "Web & App Development",
  "Graphic & VFX Design",
  "Digital Marketing",
  "E-Commerce Solutions",
  "Algorithm & Logic Building",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24" style={{ background: "#060B14" }}>

      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(rgba(55,138,221,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 100%)",
        }}
      />

      {/* Single soft glow */}
      <div
        className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[min(900px,160vw)] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(55,138,221,0.15) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 pt-10 sm:pt-16 pb-16 sm:pb-20 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex max-w-full items-center justify-center gap-2 mb-6 sm:mb-7 px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-center leading-relaxed"
          style={{
            background: "rgba(55,138,221,0.1)",
            border: "1px solid rgba(55,138,221,0.25)",
            color: "#64B5F6",
          }}
        >
          Entrepreneur &amp; Business Growth Specialist
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.15rem,7vw,4.6rem)] font-bold leading-[1.05] tracking-tight mb-6"
          style={{ color: "#E6EDF5", fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Helping Businesses{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #378ADD 0%, #64B5F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Grow &amp; Scale
          </span>
          <br />
          in the Digital World
        </motion.h1>

        {/* Typewriter line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mb-8 flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 text-[clamp(1rem,2vw,1.3rem)]"
        >
          <span className="font-medium" style={{ color: "#8B98AC" }}>
            I help you
          </span>
          <span
            className="w-full sm:w-auto font-bold text-center sm:text-left"
            style={{ color: "#64B5F6", minWidth: "0" }}
          >
            <TypeAnimation
              sequence={[
                "grow your business",
                1800,
                "build your brand",
                1800,
                "launch your website",
                1800,
                "scale your e-commerce",
                1800,
                "automate your workflow",
                1800,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-xl mx-auto text-base leading-relaxed mb-10"
          style={{ color: "#8B98AC" }}
        >
          From strategy to execution — web &amp; software development, branding,
          digital marketing, and e-commerce, all under one roof to build a
          stronger, more scalable business.
        </motion.p>

        {/* Service marquee - signature element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="relative w-full min-w-0 mb-10 overflow-hidden"
          style={{
            maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <motion.div
            className="flex items-center gap-3 w-max max-w-none"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {[...services, ...services].map((s, i) => (
              <span
                key={i}
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: "rgba(55,138,221,0.08)",
                  border: "1px solid rgba(55,138,221,0.2)",
                  color: "#B8C4D4",
                }}
              >
                {s}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
              color: "#F7F9FC",
              boxShadow: "0 4px 20px rgba(55,138,221,0.35)",
            }}
          >
            View Projects
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: "rgba(55,138,221,0.08)",
              border: "1px solid rgba(55,138,221,0.3)",
              color: "#64B5F6",
            }}
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}