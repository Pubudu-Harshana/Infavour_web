"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize);

    // Particle field
    const particles: { x: number; y: number; vx: number; vy: number; r: number; color: string; alpha: number }[] = [];
    const colors = ["#7B2FF7", "#00C6FF", "#a855f7", "#ffffff"];
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      // Draw connecting lines between nearby particles
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "rgba(123,47,247,0.06)";
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    // Mouse tilt on orb
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const rx = ((e.clientY - cy) / cy) * -8;
      const ry = ((e.clientX - cx) / cx) * 8;
      orbRef.current.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const statCards = [
    { icon: "⬡", label: "Premium Quality", sub: "Pixel-perfect execution" },
    { icon: "⚡", label: "Ultra-Fast Delivery", sub: "Projects shipped on time" },
    { icon: "◎", label: "Total Innovation", sub: "Cutting-edge tech stack" },
  ];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#04020F",
      }}
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, zIndex: 0 }} />

      {/* Deep BG radial */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 80% at 20% 50%, rgba(123,47,247,0.08) 0%, transparent 60%)", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 75% 45%, rgba(0,198,255,0.07) 0%, transparent 60%)", zIndex: 0, pointerEvents: "none" }} />

      {/* Grid overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(123,47,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(123,47,247,0.04) 1px, transparent 1px)", backgroundSize: "80px 80px", zIndex: 0, pointerEvents: "none" }} />

      {/* Main layout */}
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "120px 48px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>

        {/* LEFT: Text content */}
        <div>
          {/* Badge */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "7px 20px", borderRadius: "99px", background: "rgba(123,47,247,0.08)", border: "1px solid rgba(123,47,247,0.35)", backdropFilter: "blur(14px)", marginBottom: "28px" }}
            >
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#00C6FF", boxShadow: "0 0 10px #00C6FF", display: "inline-block", animation: "pulse 2s infinite" }} />
              <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c084fc", fontFamily: "'Space Grotesk', sans-serif" }}>
                Digital Solutions Agency
              </span>
            </motion.div>
          )}

          {/* Main heading */}
          {mounted && (
            <>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900, lineHeight: 1.1, marginBottom: "20px", letterSpacing: "0.08em" }}
              >
                <span style={{ display: "block", fontSize: "clamp(38px, 5.5vw, 68px)", color: "#fff", textShadow: "0 0 20px rgba(255,255,255,0.1)" }}>
                  STEP INTO
                </span>
                <span style={{ display: "block", fontSize: "clamp(38px, 5.5vw, 68px)", color: "#fff", textShadow: "0 0 20px rgba(255,255,255,0.1)" }}>
                  ΛNOTHER
                </span>
                <span style={{ display: "block", fontSize: "clamp(46px, 6.5vw, 84px)", background: "linear-gradient(135deg, #00C6FF 0%, #7B2FF7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 30px rgba(0,198,255,0.45))", letterSpacing: "0.12em" }}>
                  REΛLITY
                </span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                style={{ fontSize: "clamp(13px, 1.5vw, 16px)", color: "rgba(255,255,255,0.48)", lineHeight: 1.75, maxWidth: "420px", marginBottom: "40px", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                We craft blazing-fast websites, jaw-dropping designs, and cinematic videos
                for brands that demand more than ordinary.
              </motion.p>

              {/* Service pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "44px" }}
              >
                {[
                  { label: "Web Development", color: "#7B2FF7" },
                  { label: "Graphic Design", color: "#a855f7" },
                  { label: "Video Editing", color: "#00C6FF" },
                ].map(({ label, color }) => (
                  <span key={label} style={{ padding: "7px 18px", borderRadius: "99px", fontSize: "12px", fontWeight: 600, fontFamily: "Outfit, sans-serif", background: `${color}14`, border: `1px solid ${color}40`, color: `${color}dd`, backdropFilter: "blur(12px)" }}>
                    {label}
                  </span>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "60px" }}
              >
                <a
                  href="#contact"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 32px", borderRadius: "99px", fontWeight: 700, fontFamily: "Outfit, sans-serif", fontSize: "14px", color: "#fff", background: "linear-gradient(135deg,#7B2FF7,#00C6FF)", boxShadow: "0 0 40px rgba(123,47,247,0.55), 0 8px 30px rgba(0,0,0,0.4)", textDecoration: "none", transition: "all 0.3s", letterSpacing: "0.03em" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "0 0 65px rgba(123,47,247,0.85), 0 12px 40px rgba(0,0,0,0.5)"; el.style.transform = "scale(1.04) translateY(-1px)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "0 0 40px rgba(123,47,247,0.55), 0 8px 30px rgba(0,0,0,0.4)"; el.style.transform = "scale(1) translateY(0)"; }}
                >
                  Discover More ↗
                </a>
                <a
                  href="#portfolio"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 32px", borderRadius: "99px", fontWeight: 600, fontFamily: "Outfit, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", textDecoration: "none", transition: "all 0.3s", backdropFilter: "blur(12px)" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(123,47,247,0.55)"; el.style.color = "#a78bfa"; el.style.boxShadow = "0 0 25px rgba(123,47,247,0.25)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.12)"; el.style.color = "rgba(255,255,255,0.7)"; el.style.boxShadow = "none"; }}
                >
                  View Our Work
                </a>
              </motion.div>

              {/* Social proof: avatars + join text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.85 }}
                style={{ display: "flex", alignItems: "center", gap: "14px" }}
              >
                <div style={{ display: "flex" }}>
                  {["AM", "SW", "DP", "MC"].map((av, i) => (
                    <div key={av} style={{ width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "#fff", background: ["#7B2FF7", "#00C6FF", "#a855f7", "#38bdf8"][i], border: "2px solid #04020F", marginLeft: i === 0 ? 0 : "-10px", fontFamily: "Outfit, sans-serif", zIndex: 4 - i, position: "relative" }}>
                      {av}
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ display: "flex", gap: "2px", marginBottom: "3px" }}>
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#7B2FF7"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", fontFamily: "Outfit, sans-serif" }}>
                    Join <span style={{ color: "#c084fc", fontWeight: 600 }}>50+ clients</span> who trust our work
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </div>

        {/* RIGHT: 3D Orb Visual */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", height: "560px" }}
          >
            {/* Info card - top right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{ position: "absolute", top: "20px", right: "-10px", zIndex: 10, padding: "16px 20px", borderRadius: "16px", background: "rgba(4,2,15,0.75)", border: "1px solid rgba(123,47,247,0.3)", backdropFilter: "blur(24px)", minWidth: "190px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "rgba(123,47,247,0.2)", border: "1px solid rgba(123,47,247,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                </div>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#fff", fontFamily: "Outfit, sans-serif" }}>INFAVOUR SOLUTIONS</span>
              </div>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontFamily: "Outfit, sans-serif", marginBottom: "8px", lineHeight: 1.5 }}>Premium Digital Agency</p>
              {["Web & App Development", "Brand Identity Design", "Cinematic Video", "UI/UX Experience"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "5px" }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#7B2FF7", flexShrink: 0 }} />
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", fontFamily: "Outfit, sans-serif" }}>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Orb container with 3D tilt */}
            <div ref={orbRef} style={{ position: "relative", width: "380px", height: "380px", transition: "transform 0.1s ease", transformStyle: "preserve-3d" }}>
              {/* Outer spin ring 1 */}
              <div className="animate-spin-slow" style={{ position: "absolute", inset: "-50px", borderRadius: "50%", border: "1.5px solid rgba(123,47,247,0.25)", boxShadow: "0 0 30px rgba(123,47,247,0.05)" }} />
              {/* Outer spin ring 2 */}
              <div className="animate-spin-reverse" style={{ position: "absolute", inset: "-20px", borderRadius: "50%", border: "1px dashed rgba(0,198,255,0.2)" }} />
              {/* Inner ring */}
              <div className="animate-spin-slow" style={{ position: "absolute", inset: "20px", borderRadius: "50%", border: "1px solid rgba(168,85,247,0.2)" }} />

              {/* Central glowing orb */}
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #a855f7 0%, #7B2FF7 35%, #00C6FF 70%, rgba(0,198,255,0.1) 100%)", boxShadow: "0 0 80px rgba(123,47,247,0.7), 0 0 160px rgba(0,198,255,0.35), inset 0 0 60px rgba(0,0,0,0.3)", overflow: "hidden" }}>
                {/* Specular highlight */}
                <div style={{ position: "absolute", top: "10%", left: "15%", width: "30%", height: "25%", borderRadius: "50%", background: "rgba(255,255,255,0.18)", filter: "blur(12px)" }} />
                {/* Inner swirl patterns */}
                <div className="animate-spin-slow" style={{ position: "absolute", inset: "15%", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.12)" }} />
                <div className="animate-spin-reverse" style={{ position: "absolute", inset: "30%", borderRadius: "50%", border: "1px dashed rgba(255,255,255,0.08)" }} />
              </div>

              {/* Energy particles orbiting the orb */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <div key={i} className="animate-spin-slow" style={{ position: "absolute", inset: "-60px", borderRadius: "50%", pointerEvents: "none" }}>
                  <div style={{ position: "absolute", width: "6px", height: "6px", borderRadius: "50%", background: i % 2 === 0 ? "#7B2FF7" : "#00C6FF", boxShadow: `0 0 12px ${i % 2 === 0 ? "#7B2FF7" : "#00C6FF"}`, top: "50%", left: "50%", transform: `rotate(${deg}deg) translateX(${180 + i * 5}px) translateY(-50%)` }} />
                </div>
              ))}
            </div>

            {/* Bottom stat cards */}
            <div style={{ position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "12px", width: "max-content" }}>
              {statCards.map((sc, i) => (
                <motion.div
                  key={sc.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + i * 0.12 }}
                  style={{ padding: "14px 16px", borderRadius: "14px", background: "rgba(4,2,15,0.7)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(20px)", minWidth: "140px" }}
                >
                  <div style={{ fontSize: "18px", marginBottom: "5px" }}>{sc.icon}</div>
                  <p style={{ fontSize: "12px", fontWeight: 700, color: "#fff", fontFamily: "Outfit, sans-serif", marginBottom: "2px" }}>{sc.label}</p>
                  <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.38)", fontFamily: "Outfit, sans-serif" }}>{sc.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}
        >
          <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", fontFamily: "Outfit, sans-serif" }}>
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{ width: "1.5px", height: "45px", background: "linear-gradient(180deg, rgba(123,47,247,0.8) 0%, transparent 100%)" }}
          />
        </motion.div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 10px #00C6FF; }
          50% { opacity: 0.6; box-shadow: 0 0 20px #00C6FF; }
        }
        @media (max-width: 900px) {
          #hero > div > div:last-child { display: none !important; }
          #hero > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
