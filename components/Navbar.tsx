"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "12px 32px" : "20px 32px",
          background: scrolled ? "rgba(4,2,15,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "all 0.4s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
        >
          <span style={{ fontSize: "22px", fontWeight: 900, background: "linear-gradient(135deg,#7B2FF7,#00C6FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "Outfit, sans-serif" }}>∞</span>
          <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "16px", color: "#fff", letterSpacing: "0.12em" }}>INFAVOUR</span>
        </a>

        {/* Desktop nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.3s", fontFamily: "Outfit, sans-serif", letterSpacing: "0.04em" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#a78bfa"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href="#contact"
            style={{ padding: "9px 20px", borderRadius: "99px", fontWeight: 600, fontFamily: "Outfit, sans-serif", fontSize: "13px", color: "#fff", background: "linear-gradient(135deg,#7B2FF7,#00C6FF)", boxShadow: "0 0 20px rgba(123,47,247,0.4)", textDecoration: "none", transition: "all 0.3s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 35px rgba(123,47,247,0.7)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(123,47,247,0.4)"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
          >
            Get Started
          </a>

          {/* Hamburger for mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ width: "36px", height: "36px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)", cursor: "pointer", display: "none", alignItems: "center", justifyContent: "center", color: "#fff" }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
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
            style={{ position: "fixed", top: "72px", left: "16px", right: "16px", zIndex: 99, borderRadius: "16px", padding: "20px", background: "rgba(4,2,15,0.95)", border: "1px solid rgba(123,47,247,0.25)", backdropFilter: "blur(30px)" }}
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{ display: "block", padding: "14px 16px", fontSize: "15px", fontWeight: 500, color: "rgba(255,255,255,0.7)", textDecoration: "none", borderRadius: "10px", transition: "all 0.3s", fontFamily: "Outfit, sans-serif" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(123,47,247,0.15)"; el.style.color = "#a78bfa"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.color = "rgba(255,255,255,0.7)"; }}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
