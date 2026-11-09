"use client";

import { motion } from "framer-motion";
import { Code2, PanelsTopLeft, Database, PlugZap } from "lucide-react";

const focusAreas = [
  { icon: PanelsTopLeft, title: "Frontend development", desc: "Responsive interfaces and reusable UI built with React, Next.js, TypeScript, and Tailwind CSS." },
  { icon: Code2, title: "Web applications", desc: "Product and business experiences designed to be clear, usable, and ready to grow." },
  { icon: Database, title: "Databases & data", desc: "Experience with MongoDB and PostgreSQL for structured application data and web product workflows." },
  { icon: PlugZap, title: "API integrations", desc: "Connecting web experiences to services such as email delivery and payment providers." },
];

export function Services() {
  return (
    <section id="services" className="portfolio-glow-section relative py-16 sm:py-20 overflow-hidden" style={{ background: "#F5F8FC" }}>
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="max-w-2xl mb-10">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ background: "rgba(55,138,221,0.1)", border: "1px solid rgba(55,138,221,0.25)", color: "#2269A4" }}>Development focus</span>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight mb-4" style={{ color: "#17263A", fontFamily: "'Space Grotesk', sans-serif" }}>From interface to <span style={{ color: "#2269A4" }}>working product.</span></h2>
          <p className="text-base leading-relaxed" style={{ color: "#52677F" }}>My focus is full-stack web development, with an emphasis on practical features, responsive UI, and reliable integrations.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {focusAreas.map(({ icon: Icon, title, desc }, i) => <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }} whileHover={{ y: -5, borderColor: "rgba(100,181,246,0.42)" }} className="p-5 rounded-2xl transition-colors duration-300" style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(245,248,252,0.98))", border: "1px solid rgba(75,140,210,0.22)" }}><div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(55,138,221,0.16)", border: "1px solid rgba(55,138,221,0.3)" }}><Icon size={19} style={{ color: "#2269A4" }} /></div><h3 className="text-base font-bold mb-2" style={{ color: "#17263A", fontFamily: "'Space Grotesk', sans-serif" }}>{title}</h3><p className="text-sm leading-relaxed" style={{ color: "#52677F" }}>{desc}</p></motion.div>)}
        </div>
      </div>
    </section>
  );
}
