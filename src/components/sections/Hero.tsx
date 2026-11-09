"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Code2 } from "lucide-react";

const technologies = ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "PostgreSQL"];

const headingVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.05,
    },
  },
};

const headingWordVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="portfolio-glow-section relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24" style={{ background: "#F5F8FC" }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.3]" style={{ backgroundImage: "radial-gradient(rgba(55,138,221,0.18) 1px, transparent 1px)", backgroundSize: "28px 28px", maskImage: "radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 100%)" }} />
      <motion.div aria-hidden="true" className="absolute top-[-12%] left-1/2 -translate-x-1/2 w-[min(900px,160vw)] h-[460px] pointer-events-none blur-sm" style={{ background: "radial-gradient(ellipse, rgba(55,138,221,0.24) 0%, rgba(116,73,214,0.1) 42%, transparent 72%)" }} animate={{ opacity: [0.78, 1, 0.78], scale: [0.98, 1.02, 0.98] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ background: "rgba(55,138,221,0.1)", border: "1px solid rgba(55,138,221,0.25)", color: "#2269A4" }}>
          <Code2 size={14} /> Full-Stack Web Developer
        </motion.div>

        <motion.h1 variants={headingVariants} initial="hidden" animate="visible" className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.04] tracking-tight mb-6" style={{ color: "#17263A", fontFamily: "'Space Grotesk', sans-serif" }}>
          <span className="block">
            {["I", "build", "web", "apps", "that"].map((word) => <motion.span key={word} variants={headingWordVariants} className="inline-block mr-[0.22em]">{word}</motion.span>)}
          </span>
          <span className="block">
            {["help", "businesses"].map((word) => <motion.span key={word} variants={headingWordVariants} className="inline-block mr-[0.22em]">{word}</motion.span>)}
            <span className="inline-block" style={{ color: "#2269A4" }}>
              {["move", "faster."].map((word) => <motion.span key={word} variants={headingWordVariants} className="inline-block mr-[0.22em]">{word}</motion.span>)}
            </span>
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.25 }} className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8" style={{ color: "#52677F" }}>
          I&apos;m Muhammad Ahmad, a Lahore-based developer focused on building responsive websites and web applications with clean interfaces and practical backend integrations.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.35 }} className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {technologies.map((tech, index) => <motion.span key={tech} animate={{ y: [0, -3, 0] }} transition={{ duration: 3.6, delay: index * 0.22, repeat: Infinity, ease: "easeInOut" }} className="px-3.5 py-2 rounded-full text-sm font-medium" style={{ background: "rgba(55,138,221,0.1)", border: "1px solid rgba(83,156,231,0.28)", color: "#40546B" }}>{tech}</motion.span>)}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.45 }} className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#projects" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-transform hover:scale-[1.03]" style={{ background: "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)", color: "#F7F9FC", boxShadow: "0 4px 20px rgba(55,138,221,0.3)" }}>
            Explore my projects <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
