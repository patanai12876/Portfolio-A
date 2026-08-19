// src/components/sections/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from "lucide-react";

const projects = [
      {
    name: "Ignisis Solutions",
    description: "Services showcase and lead-generation site for a digital agency.",
    tags: ["Next.js", "Resend"],
    image: "/images/ignisis 1.png",
    emoji: "🏢",
    live: "https://ignisissolutions-phi.vercel.app/",
  },
  {
    name: "Evoo",
    description: "An EV company website built to highlight smart mobility with a bold, modern experience.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/evoo.png",
    emoji: "⚡",
    live: "https://evoo-one.vercel.app/",
  },
  {
    name: "S.Z Tensile",
    description: "High-quality shade solutions for residential and commercial properties.",
    tags: ["Next.js", "Framer Motion", "TypeScript"],
    image: "/images/tensile.png",
    emoji: "☀️",
    live: "https://www.sztensile.com/",
  },
  {
    name: "Brew & Co",
    description: "A modern coffee brand site with smooth animations and an elegant menu showcase.",
    tags: ["Next.js", "MongoDB", "TypeScript"],
    image: "/images/p2.png",
    emoji: "☕",
    live: "https://brew-and-co-acyz.vercel.app/",
  },
   {
    name: "Seco Developers",
    description: "Trusted name in Pakistan's construction industry since 1963.",
    tags: ["Next.js", "Node.js", "Tailwind CSS"],
    image: "/images/s1.png",
    emoji: "🏗️",
    live: "https://secodevelopers.com/",
  },
   {
    name: "FitPro",
    description: "A fitness platform for workout management, trainers, and membership plans.",
    tags: ["Next.js", "MongoDB"],
    image: "/images/fitpro.png",
    emoji: "💪",
    live: "https://fit-pro-frontend.vercel.app/",
  },
  {
    name: "TTT Global Services",
    description: "A platform offering training, trading, and travel services in one place.",
    tags: ["Next.js", "TypeScript"],
    image: "/images/p3.png",
    emoji: "🌍",
    live: "https://tttglobalservice.com/",
  },
  {
    name: "TradeSync",
    description: "Trading analytics and a copy-trading platform built for active traders.",
    tags: ["Next.js", "TypeScript"],
    image: "/images/tradesync.png",
    emoji: "📈",
    live: "https://trade-sync-seven.vercel.app/",
  },
 

 
];

function getDomain(url: string) {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      className="group flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: "#0D1420",
        border: "1px solid rgba(55,138,221,0.15)",
        textDecoration: "none",
      }}
    >
      {/* Browser mockup frame */}
      <div className="relative" style={{ background: "#0A0F18" }}>
        {/* Chrome bar */}
        <div
          className="flex items-center gap-2 px-3.5 py-2.5"
          style={{ background: "#111827", borderBottom: "1px solid rgba(55,138,221,0.12)" }}
        >
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ background: "#FF5F57" }} />
            <span className="w-2 h-2 rounded-full" style={{ background: "#FEBC2E" }} />
            <span className="w-2 h-2 rounded-full" style={{ background: "#28C840" }} />
          </div>
          <div
            className="flex-1 ml-2 px-3 py-1 rounded-md text-[10px] truncate"
            style={{ background: "#0A0F18", color: "#5C8A9E", fontFamily: "'JetBrains Mono', monospace" }}
          >
            {getDomain(project.live)}
          </div>
        </div>

        {/* Image area - fixed height, contain so nothing crops badly */}
        <div className="relative flex items-center justify-center overflow-hidden" style={{ height: "clamp(160px, 48vw, 200px)" }}>
          <img
            src={project.image}
            alt={project.name}
            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              const placeholder = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
              if (placeholder) placeholder.style.display = "flex";
            }}
          />
          <div
            className="absolute inset-0 items-center justify-center"
            style={{ display: "none", background: "linear-gradient(135deg, #0D1420 0%, #0A0F18 100%)" }}
          >
            <span className="text-5xl opacity-50">{project.emoji}</span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-2 mb-2.5">
          <h3
            className="text-lg font-bold tracking-tight"
            style={{ color: "#E6EDF5", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {project.name}
          </h3>
          <ArrowUpRight
            size={17}
            className="shrink-0 mt-1 opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0"
            style={{ color: "#64B5F6" }}
          />
        </div>

        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#8B98AC" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(55,138,221,0.08)",
                color: "#64B5F6",
                border: "1px solid rgba(55,138,221,0.2)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" ref={ref} className="relative py-10 sm:py-14 overflow-hidden" style={{ background: "#060B14" }}>
      <div
        className="absolute top-40 right-[-120px] w-[min(500px,100vw)] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(55,138,221,0.1) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "#378ADD" }} />
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#64B5F6" }}>
              Web Development
            </span>
          </div>
          <h2
            className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-bold tracking-tight leading-[1.05]"
            style={{ color: "#E6EDF5", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Products I&apos;ve{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #378ADD 0%, #64B5F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              built for the web.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}