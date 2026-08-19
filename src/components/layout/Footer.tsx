// src/components/layout/Footer.tsx
"use client";

import { FaLinkedin, FaInstagram,  } from "react-icons/fa";
import {Mail, ArrowUp} from "lucide-react";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

const services = [
  "Web & App Development",
  "Digital Marketing",
  "Graphic & VFX Design",
  "E-Commerce Solutions",
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative" style={{ background: "#04080D" }}>
      {/* Glow divider - separates from section above */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(55,138,221,0.5) 50%, transparent)" }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(55,138,221,0.1) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 pt-20 pb-8">
        {/* Top: CTA strip */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 p-8 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(55,138,221,0.1) 0%, rgba(24,95,165,0.06) 100%)",
            border: "1px solid rgba(55,138,221,0.2)",
          }}
        >
          <div>
            <h3
              className="text-xl sm:text-2xl font-bold mb-1"
              style={{ color: "#E6EDF5", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Have a project in mind?
            </h3>
            <p className="text-sm" style={{ color: "#8B98AC" }}>
              Let&apos;s talk about how to grow your business online.
            </p>
          </div>
          <button
            onClick={() => scrollTo("#contact")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold shrink-0 transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
              color: "#F7F9FC",
              cursor: "pointer",
            }}
          >
            <Mail size={15} />
            Get In Touch
          </button>
        </div>

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
                style={{ color: "#E6EDF5", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Muhammad Ahmad
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: "#8B98AC" }}>
              Entrepreneur &amp; business growth specialist helping companies
              build, launch, and market their digital presence, end to end.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/muhammadahmad1104/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                style={{ background: "rgba(55,138,221,0.1)", border: "1px solid rgba(55,138,221,0.2)" }}
              >
                <FaLinkedin size={16} style={{ color: "#64B5F6" }} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                style={{ background: "rgba(55,138,221,0.1)", border: "1px solid rgba(55,138,221,0.2)" }}
              >
                <FaInstagram size={16} style={{ color: "#64B5F6" }} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "#5C8A9E" }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium text-left transition-colors duration-200 w-fit"
                  style={{ color: "#8B98AC", cursor: "pointer" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#64B5F6")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8B98AC")}
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
              style={{ color: "#5C8A9E" }}
            >
              Services
            </h4>
            <div className="flex flex-col gap-3">
              {services.map((s) => (
                <span key={s} className="text-sm font-medium" style={{ color: "#8B98AC" }}>
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
          <p className="text-xs" style={{ color: "#5C8A9E" }}>
            © {new Date().getFullYear()} Muhammad Ahmad. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
            style={{ background: "rgba(55,138,221,0.1)", border: "1px solid rgba(55,138,221,0.25)", cursor: "pointer" }}
          >
            <ArrowUp size={15} style={{ color: "#64B5F6" }} />
          </button>
        </div>
      </div>
    </footer>
  );
}