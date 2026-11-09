// src/components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, ArrowRight } from "lucide-react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const sections = links.map((l) => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      }
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

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          fixed
          top-0
          left-0
          right-0
          z-50
          w-full
          max-w-full
          overflow-visible
          flex
          justify-center
          px-3
          sm:px-5
          lg:px-6
          pt-3
          sm:pt-4
          lg:pt-5
        "
      >
        {/* NAVBAR */}
        <div
          className="
            w-full
            max-w-[1152px]
            min-w-0
            flex
            items-center
            justify-between
            gap-2
            px-3
            sm:px-4
            lg:px-6
            py-2.5
            sm:py-3
            rounded-2xl
            transition-all
            duration-300
          "
          style={{
            background: scrolled
              ? "rgba(255,255,255,0.96)"
              : "rgba(255,255,255,0.88)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: scrolled
              ? "1px solid rgba(55,138,221,0.25)"
              : "1px solid rgba(55,138,221,0.1)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.35)"
              : "none",
            boxSizing: "border-box",
          }}
        >
          {/* ================= LOGO ================= */}
          <button
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="
              flex
              items-center
              gap-2.5
              min-w-0
              shrink
              cursor-pointer
              bg-transparent
              border-0
              p-0
            "
          >
            <div
              className="
                w-9
                h-9
                sm:w-10
                sm:h-10
                rounded-xl
                flex
                items-center
                justify-center
                shrink-0
              "
              style={{
                background: "rgba(55,138,221,0.1)",
                border:
                  "1.5px solid rgba(55,138,221,0.35)",
              }}
            >
              <Code2
                size={17}
                strokeWidth={2.5}
                style={{ color: "#2269A4" }}
              />
            </div>

            {/* Desktop logo text only */}
            <span
              className="
                hidden
                sm:block
                text-sm
                lg:text-base
                font-bold
                tracking-tight
                whitespace-nowrap
              "
              style={{
                color: "#17263A",
                fontFamily:
                  "'Space Grotesk', sans-serif",
              }}
            >
              Muhammad Ahmad
            </span>
          </button>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-1 min-w-0">
            {links.map((link) => {
              const isActive =
                active === link.href.replace("#", "");

              return (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="
                    relative
                    px-3
                    xl:px-4
                    py-2
                    rounded-xl
                    text-sm
                    font-semibold
                    uppercase
                    whitespace-nowrap
                    transition-colors
                    duration-200
                  "
                  style={{
                    color: isActive
                      ? "#2269A4"
                      : "#60738A",
                    fontSize: "0.78rem",
                    letterSpacing: "0.04em",
                    cursor: "pointer",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background:
                          "rgba(55,138,221,0.12)",
                        border:
                          "1px solid rgba(55,138,221,0.3)",
                      }}
                    />
                  )}

                  <span className="relative z-10">
                    {link.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* ================= RIGHT ================= */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Desktop CTA */}
            <button
              onClick={() => handleClick("#contact")}
              className="
                hidden
                lg:inline-flex
                items-center
                gap-1.5
                px-5
                py-2.5
                rounded-xl
                text-sm
                font-bold
                whitespace-nowrap
                transition-all
                duration-300
                hover:scale-[1.03]
              "
              style={{
                background:
                  "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
                color: "#F7F9FC",
                boxShadow:
                  "0 4px 14px rgba(55,138,221,0.35)",
                border: "none",
              }}
            >
              Let&apos;s Connect
              <ArrowRight size={14} />
            </button>

            {/* Mobile Button */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className="
                lg:hidden
                w-9
                h-9
                sm:w-10
                sm:h-10
                shrink-0
                flex
                items-center
                justify-center
                rounded-xl
              "
              style={{
                background: menuOpen
                  ? "rgba(55,138,221,0.15)"
                  : "rgba(55,138,221,0.06)",
                border:
                  "1px solid rgba(55,138,221,0.2)",
              }}
            >
              {menuOpen ? (
                <X
                  size={18}
                  style={{ color: "#2269A4" }}
                />
              ) : (
                <Menu
                  size={18}
                  style={{ color: "#2269A4" }}
                />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="
                fixed
                inset-0
                z-30
                lg:hidden
              "
              style={{
                background: "rgba(0,0,0,0.25)",
                backdropFilter: "blur(3px)",
              }}
            />

            {/* Menu */}
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.22,
              }}
              className="
                fixed
                z-40
                lg:hidden
                top-[4.6rem]
                sm:top-[5rem]
                left-3
                sm:left-5
                right-3
                sm:right-5
                max-w-none
                overflow-hidden
                rounded-2xl
              "
              style={{
                width: "auto",
                boxSizing: "border-box",
                background:
                  "rgba(255,255,255,0.99)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border:
                  "1px solid rgba(55,138,221,0.2)",
                boxShadow:
                  "0 16px 48px rgba(0,0,0,0.5)",
              }}
            >
              <div className="flex flex-col p-3 gap-1">
                {links.map((link, i) => {
                  const isActive =
                    active === link.href.replace("#", "");

                  return (
                    <motion.button
                      key={link.href}
                      initial={{
                        opacity: 0,
                        x: -8,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: i * 0.04,
                      }}
                      onClick={() =>
                        handleClick(link.href)
                      }
                      className="
                        w-full
                        flex
                        items-center
                        justify-between
                        px-4
                        py-3.5
                        rounded-xl
                        text-left
                        text-sm
                        font-semibold
                        uppercase
                        whitespace-nowrap
                      "
                      style={{
                        color: isActive
                          ? "#2269A4"
                          : "#17263A",
                        background: isActive
                          ? "rgba(55,138,221,0.1)"
                          : "transparent",
                        border: "none",
                      }}
                    >
                      {link.label}

                      {isActive && (
                        <span
                          className="
                            w-1.5
                            h-1.5
                            rounded-full
                            shrink-0
                          "
                          style={{
                            background: "#378ADD",
                          }}
                        />
                      )}
                    </motion.button>
                  );
                })}

                <div
                  className="h-px my-2"
                  style={{
                    background:
                      "rgba(55,138,221,0.15)",
                  }}
                />

                <button
                  onClick={() =>
                    handleClick("#contact")
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    px-4
                    py-3.5
                    rounded-xl
                    text-sm
                    font-bold
                  "
                  style={{
                    background:
                      "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
                    color: "#F7F9FC",
                    border: "none",
                  }}
                >
                  Let&apos;s Connect
                  <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
