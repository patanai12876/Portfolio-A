"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { createPortal } from "react-dom";

type CaseStudy = {
  challenge: string;
  approach: string;
  impact: string;
};

type Project = {
  name: string;
  description: string;
  tags: string[];
  image: string;
  emoji: string;
  live: string;
  github?: string;
  caseStudy?: CaseStudy;
};

const projects: Project[] = [
  {
    name: "AS Digital",
    description: "A digital services and professional training platform for businesses and learners.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/images/AS digital.png",
    emoji: "📈",
    live: "https://as-digital-umcg.vercel.app/",
    github: "https://github.com/patanai12876/AS-Digital",
    caseStudy: {
      challenge: "The site serves two audiences: businesses looking for growth services and learners exploring digital courses.",
      approach: "I organized the page into business-service and learner-training journeys, then connected service/course summaries, a getting-started flow, FAQs, and WhatsApp calls to action.",
      impact: "Visitors can quickly identify the path that fits them and contact the team with a service or course enquiry.",
    },
  },
  {
    name: "E-Bikes",
    description: "A product-led website for electric bikes and scooters, with product discovery and company information.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/e-bike.png",
    emoji: "⚡",
    live: "https://evoo-lemon.vercel.app/",
    github: "https://github.com/patanai12876/E-bikes",
    caseStudy: {
      challenge: "Electric mobility products need a clear way to present their lineup, technology, and ownership options to prospective buyers.",
      approach: "I shaped a product-led landing page around model summaries, performance and technology sections, and clear routes to products, comparison, and dealership information.",
      impact: "The experience gives buyers a guided route from the brand overview to model details and next steps for purchase or dealership enquiries.",
    },
  },
  {
    name: "Char & Ember",
    description: "A Lahore restaurant website that guides customers from menu discovery to WhatsApp ordering.",
    tags: ["Next.js", "Framer Motion", "TypeScript"],
    image: "/images/char and ember.png",
    emoji: "🍔",
    live: "https://char-ember.vercel.app/",
    github: "https://github.com/patanai12876/char-ember",
    caseStudy: {
      challenge: "Customers need to browse food, prices, and deals, then place an order without a long registration process.",
      approach: "I arranged menu categories, popular dishes with prices, cart access, deals, delivery details, and a checkout path through WhatsApp.",
      impact: "Customers can move from browsing to a prepared WhatsApp order in a few clear steps, while also finding the restaurant’s contact and location details.",
    },
  },
  {
    name: "Brew & Co",
    description: "A coffee brand website with an inviting visual identity and a menu showcase.",
    tags: ["Next.js", "PostgreSQL", "TypeScript"],
    image: "/images/p2.png",
    emoji: "☕",
    live: "https://brew-and-co-acyz.vercel.app/",
  },
  {
    name: "Ignisis Solutions",
    description: "A digital agency website presenting its services and giving prospective clients a clear contact path.",
    tags: ["Next.js", "React", "Resend"],
    image: "/images/ignisis 1.png",
    emoji: "🏢",
    live: "https://www.ignisissolutions.com/",
  },
  {
    name: "FitPro",
    description: "A fitness platform concept for workout management, trainers, and membership plans.",
    tags: ["Next.js", "MongoDB"],
    image: "/images/fitpro.png",
    emoji: "💪",
    live: "https://fit-pro-frontend.vercel.app/",
  },
  {
    name: "TradeSync",
    description: "A trading analytics and copy-trading platform concept for active traders.",
    tags: ["Next.js", "TypeScript"],
    image: "/images/tradesync.png",
    emoji: "📊",
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
  project: Project;
  index: number;
  inView: boolean;
}) {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const caseStudyId = useId();
  const caseStudyTitleId = useId();
  const caseStudyDialogRef = useRef<HTMLDivElement>(null);
  const caseStudyTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!caseStudyOpen) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = caseStudyTriggerRef.current;
    document.body.style.overflow = "hidden";
    const firstControl = caseStudyDialogRef.current?.querySelector<HTMLElement>(
      'button, a[href], [tabindex]:not([tabindex="-1"])'
    );
    (firstControl ?? caseStudyDialogRef.current)?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCaseStudyOpen(false);
        return;
      }

      if (event.key !== "Tab" || !caseStudyDialogRef.current) return;
      const focusable = caseStudyDialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [caseStudyOpen]);

  return (
    <>
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, borderColor: "#A8C7E2", boxShadow: "0 18px 40px rgba(10,35,62,0.22)" }}
      className="group flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #F8FAFD, #EDF3F9)",
        border: "1px solid #D7E1EC",
      }}
    >
      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex flex-1 flex-col" style={{ color: "inherit", textDecoration: "none" }}>
        <div className="relative" style={{ background: "#E4EBF3" }}>
          <div className="flex items-center gap-2 px-3.5 py-2.5" style={{ background: "#E7EDF4", borderBottom: "1px solid #D3DEE9" }}>
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2 h-2 rounded-full" style={{ background: "#FF6B66" }} />
              <span className="w-2 h-2 rounded-full" style={{ background: "#FFC857" }} />
              <span className="w-2 h-2 rounded-full" style={{ background: "#48D597" }} />
            </div>
            <span className="flex-1 ml-2 px-3 py-1 rounded-md text-xs truncate" style={{ background: "#F7F9FC", color: "#52677F", fontFamily: "'JetBrains Mono', monospace" }}>
              {getDomain(project.live)}
            </span>
          </div>

          <div className="relative flex items-center justify-center overflow-hidden" style={{ height: "220px" }}>
            <Image
              src={project.image}
              alt={`${project.name} website preview`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain transition-transform duration-500 group-hover:scale-[1.035]"
              onError={(event) => {
                (event.currentTarget as HTMLImageElement).style.display = "none";
                const placeholder = event.currentTarget.nextElementSibling as HTMLElement | null;
                if (placeholder) placeholder.style.display = "flex";
              }}
            />
            <div className="absolute inset-0 items-center justify-center" style={{ display: "none", background: "linear-gradient(135deg, #E5EDF6 0%, #F7F9FC 100%)" }}>
              <span className="text-5xl opacity-60">{project.emoji}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-xl font-bold tracking-tight" style={{ color: "#15263C", fontFamily: "'Space Grotesk', sans-serif" }}>{project.name}</h3>
            <ArrowUpRight size={17} className="shrink-0 mt-1 text-sky-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <p className="text-base leading-7 mb-5 flex-1" style={{ color: "#4B5E73" }}>{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: "#E4F0FA", color: "#285F8B", border: "1px solid #CFDFEE" }}>{tag}</span>)}
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#145B91" }}>Visit live project <ArrowUpRight size={15} /></span>
        </div>
      </a>

      {(project.caseStudy || project.github) && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6">
          <div className="flex flex-wrap items-center gap-3 border-t pt-4" style={{ borderColor: "rgba(100,150,205,0.2)" }}>
            {project.caseStudy && (
              <button
                ref={caseStudyTriggerRef}
                type="button"
                aria-haspopup="dialog"
                aria-controls={caseStudyId}
                onClick={() => setCaseStudyOpen(true)}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:bg-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
                style={{ color: "#145B91", background: "rgba(94,181,246,0.12)", border: "1px solid rgba(94,181,246,0.32)" }}
              >
                Read case study <ArrowUpRight size={15} />
              </button>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} source code on GitHub`}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
                style={{ color: "#334B65", background: "#FFFFFF", border: "1px solid #D7E1EC" }}
              >
                <FaGithub size={15} /> GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </motion.article>
    {typeof document !== "undefined" && createPortal(
      <AnimatePresence>
      {caseStudyOpen && project.caseStudy && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setCaseStudyOpen(false);
          }}
        >
          <motion.div
            ref={caseStudyDialogRef}
            id={caseStudyId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={caseStudyTitleId}
            tabIndex={-1}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative my-auto w-full max-w-4xl overflow-hidden rounded-3xl shadow-2xl outline-none"
            style={{ background: "#F5F8FC", color: "#17263A" }}
          >
            <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #2877C7, #8875E8)" }} />
            <div className="p-6 sm:p-9 lg:p-11">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#246BA9" }}>Project case study</p>
                  <h2 id={caseStudyTitleId} className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#15263C" }}>{project.name}</h2>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: "#52647A" }}>{project.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setCaseStudyOpen(false)}
                  aria-label="Close case study"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-2xl transition-colors hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  style={{ color: "#44566D", background: "#E9EFF6" }}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  { label: "Challenge", text: project.caseStudy.challenge },
                  { label: "My contribution", text: project.caseStudy.approach },
                  { label: "Impact", text: project.caseStudy.impact },
                ].map((item, index) => (
                  <section key={item.label} className="rounded-2xl p-5 sm:p-6" style={{ background: "#FFFFFF", border: "1px solid #DDE6F0" }}>
                    <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold" style={{ background: "#E8F3FC", color: "#2269A4" }}>{String(index + 1).padStart(2, "0")}</div>
                    <h3 className="mb-2 text-base font-bold" style={{ color: "#1C2F46" }}>{item.label}</h3>
                    <p className="text-base leading-7" style={{ color: "#4B5E73" }}>{item.text}</p>
                  </section>
                ))}
              </div>

              <div className="mt-7 flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: "#DDE6F0" }}>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span key={tag} className="rounded-full px-3 py-1.5 text-xs font-semibold" style={{ background: "#E8F3FC", color: "#285F8B" }}>{tag}</span>)}
                </div>
                <div className="flex flex-wrap gap-3 sm:justify-end">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-bold transition-transform hover:scale-[1.02]" style={{ color: "#285F8B", background: "#FFFFFF", borderColor: "#CFDFEE" }}>
                      <FaGithub size={16} /> View source
                    </a>
                  )}
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #2877C7, #185FA5)" }}>
                    Visit live project <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>,
      document.body
    )}
    </>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const caseStudies = projects.filter((project) => project.caseStudy);
  const moreProjects = projects.filter((project) => !project.caseStudy);

  return (
    <section id="projects" ref={ref} className="portfolio-glow-section relative py-16 sm:py-24 overflow-hidden" style={{ background: "#F5F8FC" }}>
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-10 sm:mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10" style={{ background: "#2269A4" }} />
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#2269A4" }}>Selected work</span>
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold tracking-tight leading-[1.06] mb-4" style={{ color: "#17263A", fontFamily: "'Space Grotesk', sans-serif" }}>
            Projects built around <span style={{ color: "#2269A4" }}>real user journeys.</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#52677F" }}>
            Three recent projects, with the problem, design approach, and user impact behind each one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {caseStudies.map((project, index) => <ProjectCard key={project.name} project={project} index={index} inView={inView} />)}
        </div>

        <div className="flex items-end justify-between gap-4 mt-16 sm:mt-20 mb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] mb-2" style={{ color: "#2269A4" }}>More projects</p>
            <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: "#17263A", fontFamily: "'Space Grotesk', sans-serif" }}>Other web work</h3>
          </div>
          <span className="hidden sm:block text-xs" style={{ color: "#8194AD" }}>Open any project to view the live site</span>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {moreProjects.map((project, index) => <ProjectCard key={project.name} project={project} index={index + caseStudies.length} inView={inView} />)}
        </div>
      </div>
    </section>
  );
}
