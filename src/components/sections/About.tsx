// src/components/sections/About.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Palette, Film, Megaphone, Target, TrendingUp, ShoppingBag, Code2 } from "lucide-react";

const roles = [
  { icon: Palette, label: "Graphic Designer", period: "Dec 2018 — Present" },
  { icon: Film, label: "2D Animator", period: "Mar 2020 — Present" },
  { icon: Megaphone, label: "Social Media Marketing Manager", period: "Dec 2021 — Present" },
  { icon: Target, label: "Social Media Ads Manager", period: "Jul 2022 — Present" },
  { icon: TrendingUp, label: "Digital Marketing Specialist", period: "Oct 2022 — Present" },
  { icon: ShoppingBag, label: "E-Commerce Business Owner", period: "Aug 2023 — Present" },
  { icon: Code2, label: "Website Developer", period: "Sep 2023 — Present" },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="about" ref={ref} className="relative py-10 sm:py-14 overflow-hidden" style={{ background: "#060B14" }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.2]"
        style={{
          backgroundImage: "radial-gradient(rgba(55,138,221,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-5 gap-14 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 lg:order-2"
        >
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ aspectRatio: "4/5", background: "#0D1420", border: "1px solid rgba(55,138,221,0.2)" }}
          >
            <img
              src="/images/Ahmad.png"
              alt="Muhammad Ahmad"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-5"
              style={{ background: "linear-gradient(to top, rgba(6,11,20,0.9), transparent)" }}
            >
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(55,138,221,0.15)",
                  border: "1px solid rgba(55,138,221,0.3)",
                  color: "#64B5F6",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#378ADD] animate-pulse" />
                Available for work
              </span>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-3 lg:order-1"
        >
          <span
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{
              background: "rgba(55,138,221,0.1)",
              border: "1px solid rgba(55,138,221,0.25)",
              color: "#64B5F6",
            }}
          >
            About Me
          </span>

          <h2
            className="text-[clamp(1.9rem,3.2vw,2.8rem)] font-bold leading-tight mb-6"
            style={{ color: "#E6EDF5", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            8+ years of{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #378ADD 0%, #64B5F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              adding new skills.
            </span>
          </h2>

          <div className="space-y-4 mb-10 text-base leading-relaxed" style={{ color: "#8B98AC" }}>
            <p>
              I started in 2018 as a graphic designer, then picked up 2D
              animation and motion graphics to bring brands to life. From
              there I moved into social media and paid ad management, then
              full digital marketing strategy, then running my own
              e-commerce store, and most recently, website development.
            </p>
            <p>
              Every skill I&apos;ve added stayed in active use for the next —
              which is why I can take a business from a logo to a live,
              marketed, selling website, without handing it off between five
              different freelancers.
            </p>
          </div>

          {/* Role grid */}
          <div className="grid sm:grid-cols-2 gap-3">
            {roles.map((role, i) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ background: "#0D1420", border: "1px solid rgba(55,138,221,0.12)" }}
                >
                  <div
                    className="w-9 h-9 shrink-0 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(55,138,221,0.12)" }}
                  >
                    <Icon size={16} style={{ color: "#64B5F6" }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#E6EDF5" }}>
                      {role.label}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "#5C8A9E" }}>
                      {role.period}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}