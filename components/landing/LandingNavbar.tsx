"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "#home",      label: "Home",      sectionId: "home" },
  { href: "#services",  label: "Services",  sectionId: "services" },
  { href: "#why-us",    label: "Solutions", sectionId: "why-us" },
  { href: "#portfolio", label: "Projects",  sectionId: "portfolio" },
  { href: "#contact",   label: "Contact",   sectionId: "contact" },
];

// Section IDs we actually observe (unique)
const sectionIds = ["home", "services", "why-us", "portfolio", "contact"];

export default function LandingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ── Scroll spy using IntersectionObserver ──────────────────────────────────
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-40% 0px -50% 0px", // triggers when section is ~40% from top
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Map active section → which nav labels should be highlighted
  const isActive = (sectionId: string) => {
    if (sectionId === "about-us") return activeSection === "why-us";
    return activeSection === sectionId;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 40px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(3,0,17,0.60)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          transition: "background 0.4s ease",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <Image
            src="/Images/logo.png"
            alt="Infavour Solutions Logo"
            width={130}
            height={40}
            style={{ objectFit: "contain", width: "auto", height: "40px" }}
            priority
          />
        </a>

        {/* Desktop center nav */}
        <div
          className="landing-desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          {navLinks.map(({ href, label, sectionId }) => {
            const active = isActive(sectionId);
            return (
              <a
                key={label}
                href={href}
                style={{
                  padding: "7px 18px",
                  borderRadius: "99px",
                  fontSize: "13px",
                  fontWeight: active ? 600 : 400,
                  color: active ? "#fff" : "rgba(255,255,255,0.60)",
                  textDecoration: "none",
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "0.01em",
                  // pill border only on active
                  border: active
                    ? "1px solid rgba(255,255,255,0.28)"
                    : "1px solid transparent",
                  background: active
                    ? "rgba(255,255,255,0.07)"
                    : "transparent",
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.60)";
                  }
                }}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* CTA Button + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a
            href="#contact"
            id="landing-cta-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "9px 22px",
              borderRadius: "99px",
              background: "linear-gradient(135deg, #00d4e8 0%, #00b5c8 100%)",
              color: "#000",
              fontWeight: 700,
              fontSize: "13px",
              fontFamily: "'Poppins', sans-serif",
              textDecoration: "none",
              letterSpacing: "0.02em",
              boxShadow: "0 0 24px rgba(0,212,232,0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = "0 0 40px rgba(0,212,232,0.65)";
              el.style.transform = "scale(1.04) translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = "0 0 24px rgba(0,212,232,0.4)";
              el.style.transform = "scale(1) translateY(0)";
            }}
          >
            Get in Touch
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>

          {/* Hamburger for mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="landing-hamburger"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              cursor: "pointer",
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              flexDirection: "column",
              gap: "5px",
              padding: "10px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "18px",
                height: "2px",
                background: "#fff",
                borderRadius: "2px",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "18px",
                height: "2px",
                background: "#fff",
                borderRadius: "2px",
                opacity: menuOpen ? 0 : 1,
                transition: "all 0.3s",
              }}
            />
            <span
              style={{
                display: "block",
                width: "18px",
                height: "2px",
                background: "#fff",
                borderRadius: "2px",
                transition: "all 0.3s",
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-7px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed",
              top: "72px",
              left: "12px",
              right: "12px",
              zIndex: 99,
              borderRadius: "16px",
              padding: "16px",
              background: "rgba(3,0,17,0.95)",
              border: "1px solid rgba(0,212,232,0.2)",
              backdropFilter: "blur(30px)",
            }}
          >
            {navLinks.map(({ href, label, sectionId }) => {
              const active = isActive(sectionId);
              return (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: "13px 16px",
                    fontSize: "15px",
                    fontWeight: active ? 600 : 400,
                    color: active ? "#00d4e8" : "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    borderRadius: "10px",
                    transition: "all 0.3s",
                    fontFamily: "'Poppins', sans-serif",
                    background: active ? "rgba(0,212,232,0.06)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(0,212,232,0.08)";
                    el.style.color = "#00d4e8";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = active
                      ? "rgba(0,212,232,0.06)"
                      : "transparent";
                    el.style.color = active
                      ? "#00d4e8"
                      : "rgba(255,255,255,0.7)";
                  }}
                >
                  {label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .landing-desktop-nav { display: none !important; }
          .landing-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
