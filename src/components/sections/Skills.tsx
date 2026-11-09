"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Server, Wrench } from "lucide-react";

const skillGroups = [
  { icon: Code2, title: "Frontend", proof: "Used across AS Digital, EVOO, and Char & Ember.", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { icon: Server, title: "Backend & data", proof: "Examples: MongoDB in FitPro, PostgreSQL in Brew & Co, and Resend in Ignisis Solutions.", skills: ["Node.js", "MongoDB", "PostgreSQL", "API integration", "Resend"] },
  { icon: Wrench, title: "Build & delivery", proof: "Explore the live builds and source code in selected projects.", skills: ["Responsive design", "SEO-friendly architecture", "Git", "Deployment"] },
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <section id="skills" ref={ref} className="portfolio-glow-section relative py-16 sm:py-20 overflow-hidden" style={{ background: "#F5F8FC" }}>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} className="max-w-2xl mb-10">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ background: "rgba(55,138,221,0.1)", border: "1px solid rgba(55,138,221,0.25)", color: "#2269A4" }}>Technical skills</span>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight mb-4" style={{ color: "#17263A", fontFamily: "'Space Grotesk', sans-serif" }}>Tools I use to build <span style={{ color: "#2269A4" }}>for the web.</span></h2>
          <p className="text-base leading-relaxed" style={{ color: "#52677F" }}>A focused full-stack toolkit drawn from my web projects. I keep learning as the work calls for it.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skillGroups.map(({ icon: Icon, title, skills, proof }, i) => <motion.div key={title} initial={{ opacity: 0, y: 28, scale: 0.98 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.55, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -6, borderColor: "rgba(100,181,246,0.5)", boxShadow: "0 16px 42px rgba(31,112,196,0.2)" }} className="p-5 sm:p-6 rounded-2xl transition-colors duration-300" style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(245,248,252,0.98))", border: "1px solid rgba(75,140,210,0.22)" }}><div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(55,138,221,0.15)", border: "1px solid rgba(55,138,221,0.28)" }}><Icon size={20} style={{ color: "#2269A4" }} /></div><h3 className="text-base font-bold mb-4" style={{ color: "#17263A", fontFamily: "'Space Grotesk', sans-serif" }}>{title}</h3><div className="flex flex-wrap gap-2">{skills.map((skill, j) => <motion.span key={skill} initial={{ opacity: 0, y: 5 }} animate={inView ? { opacity: 1, y: 0 } : {}} whileHover={{ scale: 1.08, y: -2 }} transition={{ duration: 0.28, delay: i * 0.12 + j * 0.035 }} className="text-xs font-medium px-3 py-1.5 rounded-full" style={{ background: "rgba(55,138,221,0.08)", color: "#40546B", border: "1px solid rgba(75,140,210,0.2)" }}>{skill}</motion.span>)}</div><p className="mt-4 border-t pt-3 text-sm leading-relaxed" style={{ borderColor: "#DDE6F0", color: "#52677F" }}>{proof} <a href="#projects" className="font-semibold underline underline-offset-2" style={{ color: "#2269A4" }}>View projects</a></p></motion.div>)}
        </div>
      </div>
    </section>
  );
}
