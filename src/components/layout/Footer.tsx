// src/components/layout/Footer.tsx
"use client";

import { FaLinkedin } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

const services = [
  "Next.js & React",
  "TypeScript",
  "MongoDB & PostgreSQL",
  "API integrations",
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative" style={{ background: "transparent" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(100,150,205,0.22) 50%, transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 pt-20 pb-8">
        {/* Top: CTA strip */}
     

        {/* Columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{
                  background: "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
                  color: "#F7F9FC",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                MA
              </div>
              <span
                className="text-base font-bold tracking-tight"
                style={{ color: "#17263A", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Muhammad Ahmad
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: "#60738A" }}>
              Full-stack web developer building responsive websites and practical web applications.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/muhammadahmad1104/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                style={{ background: "rgba(55,138,221,0.1)", border: "1px solid rgba(55,138,221,0.2)" }}
              >
                <FaLinkedin size={16} style={{ color: "#2269A4" }} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "#52677F" }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium text-left transition-colors duration-200 w-fit"
                  style={{ color: "#60738A", cursor: "pointer" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#2269A4")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#60738A")}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "#52677F" }}
            >
              Services
            </h4>
            <div className="flex flex-col gap-3">
              {services.map((s) => (
                <span key={s} className="text-sm font-medium" style={{ color: "#60738A" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(55,138,221,0.1)" }}
        >
          <p className="text-xs" style={{ color: "#52677F" }}>
            © {new Date().getFullYear()} Muhammad Ahmad. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
            style={{ background: "rgba(55,138,221,0.1)", border: "1px solid rgba(55,138,221,0.25)", cursor: "pointer" }}
          >
            <ArrowUp size={15} style={{ color: "#2269A4" }} />
          </button>
        </div>
      </div>
    </footer>
  );
}
