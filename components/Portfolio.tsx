"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { X, ExternalLink, Globe, Figma, Play } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    category: "Web",
    title: "NexaCloud Platform",
    description:
      "A SaaS dashboard with real-time analytics, dark mode, and blazing-fast performance.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    icon: Globe,
    gradient: "linear-gradient(135deg, #7B2FF7 0%, #1a0a3e 100%)",
    accentColor: "#7B2FF7",
    stat: "2x faster load time",
  },
  {
    id: 2,
    category: "Design",
    title: "Aura Brand Identity",
    description:
      "Complete brand overhaul including logo, color system, typography, and brand guidelines.",
    tags: ["Branding", "Figma", "Motion"],
    icon: Figma,
    gradient: "linear-gradient(135deg, #a855f7 0%, #2d1b69 100%)",
    accentColor: "#a855f7",
    stat: "300% engagement boost",
  },
  {
    id: 3,
    category: "Video",
    title: "Orbital Launch Film",
    description:
      "Cinematic product launch video with VFX, color grading, and 3D animations.",
    tags: ["After Effects", "Premiere", "VFX"],
    icon: Play,
    gradient: "linear-gradient(135deg, #00C6FF 0%, #003d5c 100%)",
    accentColor: "#00C6FF",
    stat: "1M+ views in 48hrs",
  },
  {
    id: 4,
    category: "Web",
    title: "CryptoVault DeFi",
    description:
      "Decentralized finance platform with live charts, wallet integration, and trading UI.",
    tags: ["React", "Web3", "D3.js"],
    icon: Globe,
    gradient: "linear-gradient(135deg, #38bdf8 0%, #0c2a4a 100%)",
    accentColor: "#38bdf8",
    stat: "$2M TVL in launch week",
  },
  {
    id: 5,
    category: "Design",
    title: "Luminary UI System",
    description:
      "A complete design system with 200+ components, tokens, and Figma auto-layout.",
    tags: ["Figma", "Design Tokens", "UI Kit"],
    icon: Figma,
    gradient: "linear-gradient(135deg, #f472b6 0%, #4a0a2e 100%)",
    accentColor: "#f472b6",
    stat: "Used by 50+ teams",
  },
  {
    id: 6,
    category: "Video",
    title: "Nova Social Campaign",
    description:
      "Vertical video series for Instagram Reels and TikTok — strategy, script to final cut.",
    tags: ["CapCut Pro", "Social", "Strategy"],
    icon: Play,
    gradient: "linear-gradient(135deg, #fb923c 0%, #3d1500 100%)",
    accentColor: "#fb923c",
    stat: "5M+ organic reach",
  },
];

export default function Portfolio() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [modal, setModal] = useState<(typeof portfolioItems)[0] | null>(null);

  const filters = ["All", "Web", "Design", "Video"];
  const filtered =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-32 px-6 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(123,47,247,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(123,47,247,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#00C6FF" }}
          >
            Our Work
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            A Universe of{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7B2FF7, #00C6FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            From concept to launch — explore the work that defines us.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background:
                  activeFilter === f
                    ? "linear-gradient(135deg, #7B2FF7, #00C6FF)"
                    : "rgba(255,255,255,0.04)",
                border:
                  activeFilter === f
                    ? "none"
                    : "1px solid rgba(255,255,255,0.08)",
                color: activeFilter === f ? "#fff" : "rgba(255,255,255,0.5)",
                boxShadow:
                  activeFilter === f
                    ? "0 0 20px rgba(123,47,247,0.4)"
                    : "none",
                fontFamily: "Outfit, sans-serif",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setModal(item)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                style={{ height: "280px" }}
              >
                {/* Gradient background */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{ background: item.gradient }}
                />

                {/* Icon watermark */}
                <div className="absolute bottom-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Icon size={100} style={{ color: "#fff" }} />
                </div>

                {/* Glass overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "rgba(0,0,0,0.4)",
                    backdropFilter: "blur(4px)",
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 p-7 flex flex-col justify-between">
                  <div>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      {item.category}
                    </span>
                    <h3
                      className="text-xl font-bold text-white"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <div>
                    <p className="text-white/70 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-xs"
                            style={{
                              background: "rgba(255,255,255,0.1)",
                              color: "rgba(255,255,255,0.7)",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <ExternalLink
                        size={16}
                        className="text-white/50 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Glow border on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 0 1px ${item.accentColor}60, 0 0 40px ${item.accentColor}30`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal */}
      {modal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: "rgba(4,2,15,0.9)", backdropFilter: "blur(20px)" }}
          onClick={() => setModal(null)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative max-w-lg w-full rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${modal.accentColor}30`,
              backdropFilter: "blur(40px)",
            }}
          >
            {/* Modal header image */}
            <div
              className="h-52 flex items-center justify-center"
              style={{ background: modal.gradient }}
            >
              {(() => {
                const Icon = modal.icon;
                return <Icon size={64} style={{ color: "rgba(255,255,255,0.3)" }} />;
              })()}
            </div>

            <div className="p-8">
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: modal.accentColor }}
              >
                {modal.category}
              </span>
              <h3
                className="text-2xl font-black text-white mt-2 mb-3"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {modal.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {modal.description}
              </p>

              <div className="flex items-center justify-between">
                <div
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    background: `${modal.accentColor}15`,
                    border: `1px solid ${modal.accentColor}30`,
                    color: modal.accentColor,
                  }}
                >
                  ✦ {modal.stat}
                </div>
                <div className="flex gap-2">
                  {modal.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs text-white/50"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <X size={16} className="text-white/60" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
