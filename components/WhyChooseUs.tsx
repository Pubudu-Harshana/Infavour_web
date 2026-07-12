"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Zap, Award, Cpu, Shield, Globe } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Creative Innovation",
    description: "We don't follow trends — we set them. Every project pushes the boundary of what's visually and technically possible.",
    color: "#7B2FF7",
    glow: "rgba(123,47,247,0.5)",
    accent: "rgba(123,47,247,0.08)",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Speed without compromise. Our agile workflow ensures you get premium quality on time, every time.",
    color: "#00C6FF",
    glow: "rgba(0,198,255,0.5)",
    accent: "rgba(0,198,255,0.08)",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "We obsess over the details. From pixel-perfect design to flawless code — every deliverable is crafted to impress.",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.5)",
    accent: "rgba(168,85,247,0.08)",
  },
  {
    icon: Cpu,
    title: "Modern Tech Stack",
    description: "Powered by the latest technologies. We build with the tools that top-tier companies use — scalable, secure, future-proof.",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.5)",
    accent: "rgba(56,189,248,0.08)",
  },
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "Your project is in safe hands. We maintain transparent communication and deliver what we promise, always.",
    color: "#fb923c",
    glow: "rgba(251,146,60,0.5)",
    accent: "rgba(251,146,60,0.08)",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Sri Lanka born, globally minded. We've served clients across Asia, Europe, and North America with world-class results.",
    color: "#34d399",
    glow: "rgba(52,211,153,0.5)",
    accent: "rgba(52,211,153,0.08)",
  },
];

const bigStats = [
  { value: "50+", label: "Projects Delivered", desc: "Across 3 continents" },
  { value: "98%", label: "Client Satisfaction", desc: "Based on client feedback" },
  { value: "3×", label: "Avg. ROI Boost", desc: "After working with us" },
  { value: "24/7", label: "Support", desc: "Always available" },
];

export default function WhyChooseUs() {
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const inView = useInView(titleRef, { once: false, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: false, margin: "-60px" });

  return (
    <section id="why-us" style={{ position: "relative", padding: "130px 24px", overflow: "hidden", background: "#060214" }}>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <img
          src="/Images/solutions.webp"
          alt="Solutions Background"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.65 }}
        />
        {/* Dark overlay for readability */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,2,20,0.65) 0%, rgba(6,2,20,0.35) 50%, rgba(6,2,20,0.75) 100%)" }} />
      </div>

      {/* BG elements */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
        <div style={{ position: "absolute", top: "-200px", left: "-200px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(123,47,247,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", bottom: "-200px", right: "-200px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,198,255,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(123,47,247,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(123,47,247,0.025) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <motion.div ref={titleRef} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "80px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(90deg, transparent, rgba(123,47,247,0.7))" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#7B2FF7", fontFamily: "Outfit, sans-serif" }}>Why INFAVOUR</span>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(270deg, transparent, rgba(0,198,255,0.7))" }} />
          </div>
          <h2 style={{ fontSize: "clamp(36px,5.5vw,58px)", fontWeight: 900, color: "#fff", marginBottom: "16px", fontFamily: "Outfit, sans-serif", letterSpacing: "-0.03em" }}>
            Built Different.{" "}
            <span style={{ background: "linear-gradient(135deg,#7B2FF7,#00C6FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Built Better.
            </span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "17px", maxWidth: "500px", margin: "0 auto", lineHeight: 1.75 }}>
            We combine creative genius with technical mastery to deliver results that speak louder than words.
          </p>
        </motion.div>

        {/* Stats banner */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", borderRadius: "20px", overflow: "hidden", marginBottom: "64px", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(24px)" }}
        >
          {bigStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ padding: "32px 24px", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none", position: "relative" }}
            >
              {/* Glow accent top */}
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(123,47,247,0.6), transparent)" }} />
              <p style={{ fontSize: "42px", fontWeight: 900, background: "linear-gradient(135deg,#7B2FF7,#00C6FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "Outfit, sans-serif", lineHeight: 1 }}>
                {stat.value}
              </p>
              <p style={{ fontSize: "14px", fontWeight: 600, color: "#fff", fontFamily: "Outfit, sans-serif", marginTop: "8px" }}>{stat.label}</p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginTop: "4px" }}>{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Cards grid 3x2 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {reasons.map((reason, i) => (
            <TiltCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const cardInView = useInView(ref, { once: false, margin: "-60px" });
  const Icon = reason.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -5;
    const ry = ((x - cx) / cx) * 5;
    ref.current.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    ref.current.style.boxShadow = "none";
    ref.current.style.borderColor = `${reason.color}28`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: "easeOut" }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${reason.glow}20, 0 0 0 1px ${reason.color}45`;
          (e.currentTarget as HTMLElement).style.borderColor = `${reason.color}50`;
        }}
        style={{ position: "relative", padding: "32px", borderRadius: "20px", background: "rgba(255,255,255,0.028)", border: `1px solid ${reason.color}28`, backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", transformStyle: "preserve-3d", transition: "transform 0.15s ease, box-shadow 0.3s ease, border-color 0.3s ease", overflow: "hidden", cursor: "default" }}
      >
        {/* Corner accent */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "120px", height: "120px", background: `radial-gradient(circle at top right, ${reason.glow}15 0%, transparent 70%)`, pointerEvents: "none" }} />
        {/* Bottom accent line */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${reason.color}50, transparent)` }} />

        {/* Icon */}
        <div style={{ width: "50px", height: "50px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", background: `${reason.color}18`, border: `1px solid ${reason.color}30`, boxShadow: `0 0 20px ${reason.glow}20`, marginBottom: "20px" }}>
          <Icon size={22} color={reason.color} />
        </div>

        <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#fff", fontFamily: "Outfit, sans-serif", marginBottom: "10px" }}>
          {reason.title}
        </h3>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.42)", lineHeight: 1.75 }}>
          {reason.description}
        </p>
      </div>
    </motion.div>
  );
}
