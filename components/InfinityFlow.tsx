"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Palette, Film } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    subtitle: "Modern. Fast. Scalable.",
    description:
      "We architect blazing-fast, pixel-perfect web experiences using the latest technologies. From landing pages to complex web apps — we build digital infrastructure that scales.",
    color: "#7B2FF7",
    glow: "rgba(123,47,247,0.4)",
    delay: 0,
    position: "left",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    subtitle: "Impactful. Bold. Memorable.",
    description:
      "Visual identities that stop the scroll. We craft brand stories through typography, color, and composition — turning your vision into unforgettable design.",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.4)",
    delay: 0.2,
    position: "center",
    tags: ["Branding", "UI/UX", "Motion", "Print"],
  },
  {
    icon: Film,
    title: "Video Editing",
    subtitle: "Cinematic. Engaging. Viral.",
    description:
      "From raw footage to cinematic masterpieces. We craft video content that captures attention, builds emotion, and drives action across every platform.",
    color: "#00C6FF",
    glow: "rgba(0,198,255,0.4)",
    delay: 0.4,
    position: "right",
    tags: ["After Effects", "Premiere", "Color Grade", "VFX"],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: service.delay, ease: "easeOut" }}
      className="group relative flex flex-col h-full"
    >
      {/* Card */}
      <div
        className="relative h-full rounded-2xl p-8 flex flex-col gap-6 transition-all duration-500 group-hover:scale-[1.02]"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${service.color}25`,
          backdropFilter: "blur(20px)",
          boxShadow: `0 0 0px ${service.glow}`,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            `0 0 40px ${service.glow}, 0 0 80px ${service.glow}40, inset 0 0 40px ${service.glow}10`;
          (e.currentTarget as HTMLElement).style.borderColor =
            service.color + "60";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0px ${service.glow}`;
          (e.currentTarget as HTMLElement).style.borderColor =
            service.color + "25";
        }}
      >
        {/* Top number */}
        <div
          className="absolute top-6 right-8 text-7xl font-black opacity-5 select-none"
          style={{ color: service.color, fontFamily: "Outfit, sans-serif" }}
        >
          0{index + 1}
        </div>

        {/* Icon */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{
            background: `${service.color}15`,
            border: `1px solid ${service.color}30`,
            boxShadow: `0 0 20px ${service.glow}30`,
          }}
        >
          <Icon size={26} style={{ color: service.color }} />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2 flex-1">
          <p
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: service.color }}
          >
            {service.subtitle}
          </p>
          <h3
            className="text-2xl font-bold text-white"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {service.title}
          </h3>
          <p className="text-white/50 text-sm leading-relaxed mt-1">
            {service.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs"
              style={{
                background: `${service.color}10`,
                border: `1px solid ${service.color}20`,
                color: `${service.color}cc`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom glow line */}
        <div
          className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function InfinityFlow() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const svgRef = useRef(null);
  const svgInView = useInView(svgRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* BG decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(123,47,247,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Infinity symbol */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-purple-500/50" />
            <span
              className="mx-6 text-5xl font-black"
              style={{
                background: "linear-gradient(135deg, #7B2FF7, #00C6FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ∞
            </span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-blue-400/50" />
          </div>

          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Infinite{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7B2FF7, #00C6FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Capabilities
            </span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Every service we offer is a node in our infinite loop of creativity —
            always connected, always evolving.
          </p>
        </motion.div>

        {/* Animated SVG infinity path */}
        <motion.div
          ref={svgRef}
          initial={{ opacity: 0 }}
          animate={svgInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="flex justify-center mb-20"
        >
          <svg
            viewBox="0 0 600 200"
            className="w-full max-w-2xl"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="infinityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7B2FF7" />
                <stop offset="50%" stopColor="#00C6FF" />
                <stop offset="100%" stopColor="#7B2FF7" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {svgInView && (
              <motion.path
                d="M 150 100 C 150 50, 225 50, 300 100 C 375 150, 450 150, 450 100 C 450 50, 375 50, 300 100 C 225 150, 150 150, 150 100 Z"
                stroke="url(#infinityGrad)"
                strokeWidth="2"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            )}
            {svgInView && (
              <>
                {/* Traveling dot */}
                <motion.circle
                  r="5"
                  fill="#00C6FF"
                  filter="url(#glow)"
                  initial={{ offsetDistance: "0%" } as never}
                  animate={{ offsetDistance: "100%" } as never}
                  style={{
                    offsetPath:
                      "path('M 150 100 C 150 50, 225 50, 300 100 C 375 150, 450 150, 450 100 C 450 50, 375 50, 300 100 C 225 150, 150 150, 150 100 Z')",
                  } as never}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2.5,
                  }}
                />
              </>
            )}
          </svg>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
