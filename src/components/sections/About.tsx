"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, BriefcaseBusiness, MapPin } from "lucide-react";
import Image from "next/image";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="about" ref={ref} className="portfolio-glow-section relative py-16 sm:py-24 overflow-hidden" style={{ background: "#F5F8FC" }}>
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65 }} className="lg:col-span-2 relative">
          <motion.div aria-hidden="true" className="absolute -inset-8 rounded-[3rem] pointer-events-none blur-3xl" style={{ background: "radial-gradient(ellipse at 42% 40%, rgba(56,146,255,0.42), rgba(133,83,255,0.22) 42%, transparent 72%)" }} animate={{ opacity: [0.55, 0.9, 0.55], scale: [0.96, 1.04, 0.96] }} transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }} />
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="relative z-10 rounded-2xl overflow-hidden max-w-sm mx-auto lg:mx-0 photo-glow-frame" style={{ aspectRatio: "4/5", background: "#FFFFFF", border: "1px solid rgba(112,174,255,0.42)" }}>
            <Image src="/images/Ahmad.png" alt="Muhammad Ahmad, full-stack web developer" fill sizes="(max-width: 1024px) 80vw, 400px" className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-5" style={{ background: "linear-gradient(to top, rgba(6,11,20,0.92), transparent)" }}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-full" style={{ background: "rgba(55,138,221,0.15)", border: "1px solid rgba(55,138,221,0.3)", color: "#2269A4" }}><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Open to full-stack opportunities</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: 0.08 }} className="lg:col-span-3">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ background: "rgba(55,138,221,0.1)", border: "1px solid rgba(55,138,221,0.25)", color: "#2269A4" }}>About me</span>
          <h2 className="text-[clamp(1.9rem,3.2vw,2.8rem)] font-bold leading-tight mb-5" style={{ color: "#17263A", fontFamily: "'Space Grotesk', sans-serif" }}>
            I turn product ideas into <span style={{ color: "#2269A4" }}>useful web experiences.</span>
          </h2>
          <div className="space-y-4 mb-7 text-base leading-relaxed" style={{ color: "#52677F" }}>
            <p>I&apos;ve been working in web development since 2023, building on an earlier background in creative and digital work. That mix helps me think about both how a product works and how people experience it.</p>
            <p>My projects include business websites and web application work with Next.js and related JavaScript technologies. I enjoy collaborating with teams to turn requirements into responsive, production-ready web experiences.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { icon: Code2, title: "Web development", detail: "Working since 2023" },
              { icon: BriefcaseBusiness, title: "Project work", detail: "Client and product builds" },
              { icon: MapPin, title: "Based in", detail: "Lahore, Pakistan" },
            ].map(({ icon: Icon, title, detail }, i) => <motion.div key={title} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.22 + i * 0.1 }} whileHover={{ y: -4, borderColor: "rgba(100,181,246,0.42)" }} className="p-4 rounded-xl" style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(245,248,252,0.98))", border: "1px solid rgba(75,140,210,0.22)" }}><Icon size={18} style={{ color: "#2269A4" }} /><p className="text-sm font-semibold mt-3" style={{ color: "#17263A" }}>{title}</p><p className="text-xs mt-1" style={{ color: "#52677F" }}>{detail}</p></motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
