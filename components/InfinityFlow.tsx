"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Film } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    subtitle: "Modern. Fast. Scalable.",
    description: "We architect blazing-fast, pixel-perfect web experiences using the latest technologies. From landing pages to complex web apps — we build digital infrastructure that scales.",
    color: "#7B2FF7",
    glow: "rgba(123,47,247,0.4)",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
    num: "01",
    stat: { value: "2×", label: "Faster Load" },
  },
  {
    icon: Palette,
    title: "Graphic Design",
    subtitle: "Impactful. Bold. Memorable.",
    description: "Visual identities that stop the scroll. We craft brand stories through typography, color, and composition — turning your vision into unforgettable design.",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.4)",
    tags: ["Branding", "UI/UX", "Motion", "Print"],
    num: "02",
    stat: { value: "300%", label: "Engagement" },
  },
  {
    icon: Film,
    title: "Video Editing",
    subtitle: "Cinematic. Engaging. Viral.",
    description: "From raw footage to cinematic masterpieces. We craft video content that captures attention, builds emotion, and drives action across every platform.",
    color: "#00C6FF",
    glow: "rgba(0,198,255,0.4)",
    tags: ["After Effects", "Premiere", "Color Grade", "VFX"],
    num: "03",
    stat: { value: "1M+", label: "Views" },
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.25, 1, 0.5, 1], // smooth cubic-bezier ease out
    },
  },
};

export default function InfinityFlow() {
  return (
    <section id="services" style={{ position: "relative", padding: "135px 24px", overflow: "hidden", background: "#04020F" }}>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <img
          src="/Images/service.webp"
          alt="Services Background"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.65 }}
        />
        {/* Dark overlay for readability */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(4,2,15,0.65) 0%, rgba(4,2,15,0.35) 50%, rgba(4,2,15,0.75) 100%)" }} />
      </div>

      {/* Background grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(123,47,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(123,47,247,0.03) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none", zIndex: 1 }} />

      {/* Accent glows */}
      <div style={{ position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse, rgba(123,47,247,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 1 }} />

      <motion.div 
        style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          {/* Label with lines */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(90deg, transparent, rgba(123,47,247,0.7))" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#7B2FF7", fontFamily: "Outfit, sans-serif" }}>What We Do</span>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(270deg, transparent, rgba(0,198,255,0.7))" }} />
          </div>
          <h2 style={{ fontSize: "clamp(36px,5.5vw,58px)", fontWeight: 900, color: "#fff", marginBottom: "16px", fontFamily: "Outfit, sans-serif", letterSpacing: "-0.03em" }}>
            Infinite{" "}
            <span style={{ background: "linear-gradient(135deg,#7B2FF7,#00C6FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Capabilities
            </span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "17px", maxWidth: "480px", margin: "0 auto", lineHeight: 1.75 }}>
            Every service is a node in our infinite loop of creativity — always connected, always evolving.
          </p>
        </motion.div>

        {/* Service cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = service.icon;

  return (
    <motion.div
      variants={itemVariants}
      style={{ position: "relative" }}
    >
      <div
        style={{ position: "relative", borderRadius: "24px", padding: "40px 36px", display: "flex", flexDirection: "column", gap: "0", background: "rgba(255,255,255,0.03)", border: `1px solid ${service.color}28`, backdropFilter: "blur(24px)", transition: "all 0.4s ease", cursor: "default", height: "100%", overflow: "hidden" }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = service.color + "55";
          el.style.boxShadow = `0 0 50px ${service.glow}50, 0 24px 60px rgba(0,0,0,0.3)`;
          el.style.transform = "translateY(-6px)";
          el.style.background = `rgba(255,255,255,0.05)`;
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = service.color + "28";
          el.style.boxShadow = "none";
          el.style.transform = "translateY(0)";
          el.style.background = "rgba(255,255,255,0.03)";
        }}
      >
        {/* Top corner glow */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "180px", height: "180px", background: `radial-gradient(circle at top right, ${service.color}12 0%, transparent 65%)`, pointerEvents: "none" }} />

        {/* Big number watermark */}
        <div style={{ position: "absolute", bottom: "16px", right: "20px", fontSize: "100px", fontWeight: 900, color: service.color, opacity: 0.04, fontFamily: "Outfit, sans-serif", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>
          {service.num}
        </div>

        {/* Icon + number row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", background: `${service.color}1a`, border: `1px solid ${service.color}35`, boxShadow: `0 0 24px ${service.glow}30` }}>
            <Icon size={26} color={service.color} />
          </div>
          {/* Stat badge */}
          <div style={{ padding: "6px 14px", borderRadius: "99px", background: `${service.color}10`, border: `1px solid ${service.color}30` }}>
            <span style={{ fontSize: "16px", fontWeight: 900, color: service.color, fontFamily: "Outfit, sans-serif" }}>{service.stat.value}</span>
            <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", marginLeft: "5px", fontFamily: "Outfit, sans-serif" }}>{service.stat.label}</span>
          </div>
        </div>

        {/* Text */}
        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: service.color, fontFamily: "Outfit, sans-serif", marginBottom: "8px" }}>
          {service.subtitle}
        </p>
        <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#fff", fontFamily: "Outfit, sans-serif", marginBottom: "14px" }}>
          {service.title}
        </h3>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: "28px", flex: 1 }}>
          {service.description}
        </p>

        {/* Separator */}
        <div style={{ height: "1px", background: `linear-gradient(90deg, transparent, ${service.color}40, transparent)`, marginBottom: "22px" }} />

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {service.tags.map((tag) => (
            <span key={tag} style={{ padding: "5px 14px", borderRadius: "99px", fontSize: "11px", fontWeight: 600, background: `${service.color}10`, border: `1px solid ${service.color}22`, color: `${service.color}cc`, fontFamily: "Outfit, sans-serif" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

