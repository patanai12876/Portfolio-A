// src/components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, TrendingUp } from "lucide-react";

const links = [
  { label: "About Me", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-5"
      >
        <div
          className="w-full max-w-5xl flex items-center justify-between px-6 py-3.5 rounded-2xl transition-all duration-300"
          style={{
            background: scrolled ? "rgba(10,14,20,0.82)" : "rgba(10,14,20,0.5)",
            backdropFilter: "blur(20px)",
            border: scrolled
              ? "1px solid rgba(55,138,221,0.25)"
              : "1px solid rgba(55,138,221,0.1)",
            boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.35)" : "none",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 cursor-pointer select-none"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(55,138,221,0.1)",
                border: "1.5px solid rgba(55,138,221,0.35)",
              }}
            >
              <TrendingUp size={16} strokeWidth={2.5} style={{ color: "#64B5F6" }} />
            </div>
            <span
              className="text-base font-bold tracking-tight"
              style={{ color: "#E6EDF5", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Muhammad Ahmad
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="relative px-4 py-2 rounded-xl text-sm font-semibold uppercase tracking-wide transition-colors duration-200"
                  style={{
                    color: isActive ? "#64B5F6" : "#8B98AC",
                    fontSize: "0.8rem",
                    letterSpacing: "0.04em",
                    cursor: "pointer",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: "rgba(55,138,221,0.12)",
                        border: "1px solid rgba(55,138,221,0.3)",
                      }}
                      transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleClick("#contact");
              }}
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
                color: "#F7F9FC",
                boxShadow: "0 4px 14px rgba(55,138,221,0.35)",
              }}
            >
              Hire Me
            </a>

            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl transition-colors duration-200"
              style={{
                background: menuOpen ? "rgba(55,138,221,0.15)" : "transparent",
                border: "1px solid rgba(55,138,221,0.2)",
                cursor: "pointer",
              }}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? (
                <X size={18} style={{ color: "#64B5F6" }} />
              ) : (
                <Menu size={18} style={{ color: "#64B5F6" }} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-24 left-6 right-6 z-40 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(10,14,20,0.97)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(55,138,221,0.2)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex flex-col p-4 gap-1">
              {links.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleClick(link.href)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wide text-left transition-colors duration-200 hover:bg-[rgba(55,138,221,0.1)]"
                  style={{
                    color: active === link.href.replace("#", "") ? "#64B5F6" : "#E6EDF5",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    background:
                      active === link.href.replace("#", "") ? "rgba(55,138,221,0.1)" : "transparent",
                  }}
                >
                  {link.label}
                  {active === link.href.replace("#", "") && (
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#378ADD" }} />
                  )}
                </motion.button>
              ))}

              <div className="h-px my-2" style={{ background: "rgba(55,138,221,0.15)" }} />

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("#contact");
                }}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-bold"
                style={{
                  background: "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
                  color: "#F7F9FC",
                }}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}