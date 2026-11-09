// src/components/sections/CreativeWork.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Palette, Megaphone, Sparkles } from "lucide-react";

const categories = [
  {
    icon: Palette,
    title: "Graphic & VFX Design",
    desc: "Brand identity, visual assets, and motion/VFX work.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Paid ad campaigns, social media growth, and brand campaigns.",
  },
];

export default function CreativeWork() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="creative-work" ref={ref} className="relative py-28 overflow-hidden" style={{ background: "#F5F8FC" }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.2]"
        style={{
          backgroundImage: "radial-gradient(rgba(55,138,221,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <span
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{
              background: "rgba(55,138,221,0.1)",
              border: "1px solid rgba(55,138,221,0.25)",
              color: "#2269A4",
            }}
          >
            Coming Soon
          </span>
          <h2
            className="text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight mb-4"
            style={{ color: "#17263A", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Creative &amp;{" "}
            <span
              style={{ color: "#2269A4" }}
            >
              Marketing Work
            </span>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#60738A" }}>
            Design and campaign work is being curated for this section. In the
            meantime, get in touch to see samples directly.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="relative p-8 rounded-2xl overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px dashed rgba(55,138,221,0.3)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 mx-auto"
                  style={{ background: "rgba(55,138,221,0.12)", border: "1px solid rgba(55,138,221,0.25)" }}
                >
                  <Icon size={20} style={{ color: "#2269A4" }} />
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: "#17263A", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {cat.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#60738A" }}>
                  {cat.desc}
                </p>
                <span
                  className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider"
                  style={{ color: "#52677F" }}
                >
                  <Sparkles size={11} />
                  Soon
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
