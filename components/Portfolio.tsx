"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Globe, Layers, Play, ArrowRight } from "lucide-react";

const portfolioItems = [
  // Categories: "Web" (Web Designs), "Design" (Logo Design & Social Media Posts), "Video" (Video Editing)
  // To add your own images, place them inside public/Images/portfolio/ (e.g. nexacloud.webp) and add the path here:
  { id: 1, category: "Web", title: "NexaCloud Platform", description: "A SaaS dashboard with real-time analytics, dark mode, and blazing-fast performance. Built with Next.js and TypeScript.", tags: ["Next.js", "TypeScript", "Tailwind"], icon: Globe, gradient: "linear-gradient(135deg, #7B2FF7 0%, #1a0a3e 100%)", accentColor: "#7B2FF7", stat: "2× faster load time", featured: true, image: "/Images/portfolio/nexacloud.svg" },
  { id: 2, category: "Design", title: "Aura Brand Identity", description: "Complete brand overhaul including logo, color system, typography, and brand guidelines for a luxury beauty brand.", tags: ["Branding", "Figma", "Motion"], icon: Layers, gradient: "linear-gradient(135deg, #a855f7 0%, #2d1b69 100%)", accentColor: "#a855f7", stat: "300% engagement boost", featured: false, image: "/Images/portfolio/aura.svg" },
  { id: 3, category: "Video", title: "Orbital Launch Film", description: "Cinematic product launch video with VFX, color grading, and 3D animations that went massively viral.", tags: ["After Effects", "Premiere", "VFX"], icon: Play, gradient: "linear-gradient(135deg, #00C6FF 0%, #003d5c 100%)", accentColor: "#00C6FF", stat: "1M+ views in 48hrs", featured: true, image: "/Images/portfolio/orbital.svg" },
  { id: 4, category: "Web", title: "CryptoVault DeFi", description: "Decentralized finance platform with live charts, wallet integration, and a trading UI loved by thousands.", tags: ["React", "Web3", "D3.js"], icon: Globe, gradient: "linear-gradient(135deg, #38bdf8 0%, #0c2a4a 100%)", accentColor: "#38bdf8", stat: "$2M TVL in launch week", featured: false, image: "/Images/portfolio/cryptovault.svg" },
  { id: 5, category: "Design", title: "Luminary UI System", description: "A complete design system with 200+ components, tokens, and Figma auto-layout used by 50+ product teams.", tags: ["Figma", "Design Tokens", "UI Kit"], icon: Layers, gradient: "linear-gradient(135deg, #f472b6 0%, #4a0a2e 100%)", accentColor: "#f472b6", stat: "Used by 50+ teams", featured: false, image: "/Images/portfolio/luminary.svg" },
  { id: 6, category: "Video", title: "Nova Social Campaign", description: "Vertical video series for Instagram Reels and TikTok — strategy, script to final cut with 5M+ organic reach.", tags: ["Premiere", "Social", "Strategy"], icon: Play, gradient: "linear-gradient(135deg, #fb923c 0%, #3d1500 100%)", accentColor: "#fb923c", stat: "5M+ organic reach", featured: true, image: "/Images/portfolio/nova.svg" },
];

export default function Portfolio() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: false, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [modal, setModal] = useState<typeof portfolioItems[0] | null>(null);

  const filters = ["All", "Web", "Design", "Video"];
  const filtered = activeFilter === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" style={{ position: "relative", padding: "130px 24px", overflow: "hidden", background: "#04020F" }}>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <img
          src="/Images/projects.webp"
          alt="Projects Background"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.65 }}
        />
        {/* Dark overlay for readability */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(4,2,15,0.65) 0%, rgba(4,2,15,0.35) 50%, rgba(4,2,15,0.75) 100%)" }} />
      </div>

      {/* Grid BG */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(123,47,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(123,47,247,0.03) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none", zIndex: 1 }} />
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse, rgba(0,198,255,0.05) 0%, transparent 70%)", pointerEvents: "none", zIndex: 1 }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <motion.div ref={titleRef} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(90deg, transparent, rgba(0,198,255,0.7))" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#00C6FF", fontFamily: "Outfit, sans-serif" }}>Our Work</span>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(270deg, transparent, rgba(123,47,247,0.7))" }} />
          </div>
          <h2 style={{ fontSize: "clamp(36px,5.5vw,58px)", fontWeight: 900, color: "#fff", marginBottom: "16px", fontFamily: "Outfit, sans-serif", letterSpacing: "-0.03em" }}>
            A Universe of{" "}
            <span style={{ background: "linear-gradient(135deg,#7B2FF7,#00C6FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Projects</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "17px", maxWidth: "460px", margin: "0 auto", lineHeight: 1.75 }}>
            From concept to launch — explore the work that defines us.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "52px", flexWrap: "wrap" }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{ padding: "9px 26px", borderRadius: "99px", fontSize: "13px", fontWeight: 600, cursor: "pointer", fontFamily: "Outfit, sans-serif", transition: "all 0.3s", background: activeFilter === f ? "linear-gradient(135deg, #7B2FF7, #00C6FF)" : "rgba(255,255,255,0.04)", border: activeFilter === f ? "none" : "1px solid rgba(255,255,255,0.1)", color: activeFilter === f ? "#fff" : "rgba(255,255,255,0.5)", boxShadow: activeFilter === f ? "0 0 25px rgba(123,47,247,0.45)" : "none" }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "22px" }}>
          {filtered.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                onClick={() => setModal(item)}
                style={{ position: "relative", overflow: "hidden", borderRadius: "22px", height: item.featured ? "300px" : "260px", cursor: "pointer", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget as HTMLElement;
                  const bg = card.querySelector(".card-bg") as HTMLElement;
                  if (bg) bg.style.transform = "scale(1.08)";
                  const overlay = card.querySelector(".card-overlay") as HTMLElement;
                  if (overlay) overlay.style.opacity = "1";
                  const cta = card.querySelector(".card-cta") as HTMLElement;
                  if (cta) cta.style.opacity = "1"; if (cta) cta.style.transform = "translateY(0)";
                  card.style.boxShadow = `0 0 50px ${item.accentColor}30, 0 24px 60px rgba(0,0,0,0.4)`;
                  card.style.borderColor = `${item.accentColor}40`;
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget as HTMLElement;
                  const bg = card.querySelector(".card-bg") as HTMLElement;
                  if (bg) bg.style.transform = "scale(1)";
                  const overlay = card.querySelector(".card-overlay") as HTMLElement;
                  if (overlay) overlay.style.opacity = "0";
                  const cta = card.querySelector(".card-cta") as HTMLElement;
                  if (cta) cta.style.opacity = "0"; if (cta) cta.style.transform = "translateY(6px)";
                  card.style.boxShadow = "none";
                  card.style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                {/* BG gradient / Image */}
                {item.image ? (
                  <img
                    className="card-bg"
                    src={item.image}
                    alt={item.title}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                  />
                ) : (
                  <div className="card-bg" style={{ position: "absolute", inset: 0, background: item.gradient, transition: "transform 0.6s ease" }} />
                )}

                {/* Icon watermark */}
                <div style={{ position: "absolute", bottom: "-10px", right: "-10px", padding: "20px", opacity: 0.1 }}>
                  <Icon size={100} color="#fff" />
                </div>

                {/* Hover overlay */}
                <div className="card-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)", opacity: 0, transition: "opacity 0.4s" }} />

                {/* Content */}
                <div style={{ position: "absolute", inset: 0, padding: "28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                      <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: "99px", fontSize: "11px", fontWeight: 700, background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", color: "#fff", fontFamily: "Outfit, sans-serif" }}>
                        {item.category}
                      </span>
                      {item.featured && (
                        <span style={{ display: "inline-block", padding: "4px 10px", borderRadius: "99px", fontSize: "10px", fontWeight: 700, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", color: "rgba(255,255,255,0.8)", fontFamily: "Outfit, sans-serif", letterSpacing: "0.1em" }}>
                          ✦ FEATURED
                        </span>
                      )}
                    </div>
                    <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#fff", fontFamily: "Outfit, sans-serif" }}>{item.title}</h3>
                  </div>

                  <div>
                    {/* CTA button - shown on hover */}
                    <div className="card-cta" style={{ opacity: 0, transform: "translateY(6px)", transition: "all 0.35s ease", marginBottom: "14px" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 18px", borderRadius: "99px", fontSize: "12px", fontWeight: 700, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", color: "#fff", fontFamily: "Outfit, sans-serif" }}>
                        View Project <ArrowRight size={12} />
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                        {item.tags.slice(0, 2).map((t) => (
                          <span key={t} style={{ padding: "3px 10px", borderRadius: "4px", fontSize: "11px", background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.75)", fontFamily: "Outfit, sans-serif" }}>{t}</span>
                        ))}
                      </div>
                      <div style={{ padding: "4px 10px", borderRadius: "99px", background: "rgba(0,0,0,0.3)", backdropFilter: "blur(8px)" }}>
                        <span style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.8)", fontFamily: "Outfit, sans-serif" }}>✦ {item.stat}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
            style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", background: "rgba(4,2,15,0.9)", backdropFilter: "blur(24px)" }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: "relative", maxWidth: "520px", width: "100%", borderRadius: "28px", overflow: "hidden", background: "rgba(255,255,255,0.04)", border: `1px solid ${modal.accentColor}35`, backdropFilter: "blur(40px)" }}
            >
              {/* Hero area */}
              <div style={{ height: "220px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: modal.image ? "none" : modal.gradient }}>
                {modal.image ? (
                  <img src={modal.image} alt={modal.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  (() => { const Icon = modal.icon; return <Icon size={80} color="rgba(255,255,255,0.2)" />; })()
                )}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(transparent, rgba(4,2,15,0.5))" }} />
              </div>

              <div style={{ padding: "32px" }}>
                <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: modal.accentColor, fontFamily: "Outfit, sans-serif" }}>{modal.category}</span>
                <h3 style={{ fontSize: "26px", fontWeight: 900, color: "#fff", margin: "8px 0 12px", fontFamily: "Outfit, sans-serif" }}>{modal.title}</h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "24px" }}>{modal.description}</p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                  <span style={{ padding: "9px 18px", borderRadius: "99px", fontSize: "13px", fontWeight: 700, background: `${modal.accentColor}12`, border: `1px solid ${modal.accentColor}30`, color: modal.accentColor, fontFamily: "Outfit, sans-serif" }}>
                    ✦ {modal.stat}
                  </span>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {modal.tags.map((t) => (
                      <span key={t} style={{ padding: "6px 14px", borderRadius: "99px", fontSize: "12px", background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)", fontFamily: "Outfit, sans-serif" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <button onClick={() => setModal(null)} style={{ position: "absolute", top: "16px", right: "16px", width: "34px", height: "34px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(10px)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.4)"; }}
              >
                <X size={15} color="rgba(255,255,255,0.8)" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
