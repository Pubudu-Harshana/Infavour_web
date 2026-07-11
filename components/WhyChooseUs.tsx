"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Zap, Award, Cpu } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Creative Innovation",
    description:
      "We don't follow trends — we set them. Every project pushes the boundary of what's visually and technically possible.",
    color: "#7B2FF7",
    glow: "rgba(123,47,247,0.5)",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Speed without compromise. Our agile workflow ensures you get premium quality on time, every time.",
    color: "#00C6FF",
    glow: "rgba(0,198,255,0.5)",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "We obsess over the details. From pixel-perfect design to flawless code — every deliverable is crafted to impress.",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.5)",
  },
  {
    icon: Cpu,
    title: "Modern Tech Stack",
    description:
      "Powered by the latest technologies. We build with the tools that top-tier companies use — scalable, secure, future-proof.",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.5)",
  },
];

export default function WhyChooseUs() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="relative py-32 px-6 overflow-hidden">
      {/* BG glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(123,47,247,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,198,255,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#7B2FF7" }}
          >
            Why INFAVOUR
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Built Different.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7B2FF7, #00C6FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Built Better.
            </span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            We combine creative genius with technical mastery to deliver results
            that speak louder than words.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <TiltCard key={reason.title} reason={reason} index={i} Icon={Icon} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TiltCard({
  reason,
  index,
  Icon,
}: {
  reason: (typeof reasons)[0];
  index: number;
  Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const cardInView = useInView(ref, { once: true, margin: "-60px" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative p-8 rounded-2xl cursor-default transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${reason.color}20`,
          backdropFilter: "blur(20px)",
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${reason.glow}30, 0 0 0 1px ${reason.color}40`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        {/* Corner glow */}
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${reason.glow}20 0%, transparent 70%)`,
            transform: "translate(50%, -50%)",
          }}
        />

        <div className="flex items-start gap-6">
          {/* Icon */}
          <div
            className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
            style={{
              background: `${reason.color}15`,
              border: `1px solid ${reason.color}30`,
              boxShadow: `0 0 20px ${reason.glow}20`,
            }}
          >
            <Icon size={24} style={{ color: reason.color }} />
          </div>

          <div className="flex flex-col gap-2">
            <h3
              className="text-xl font-bold text-white"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              {reason.title}
            </h3>
            <p className="text-white/45 text-sm leading-relaxed">
              {reason.description}
            </p>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${reason.color}60, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
}
