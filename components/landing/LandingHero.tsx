"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* ─── Icon helpers ─── */
function WebIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}
function MarketingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
function CloudIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

/* ─── Feature card ─── */
function FeatureCard({
  icon,
  title,
  desc,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 200px",
        padding: "20px 22px",
        borderRadius: "16px",
        background: hovered
          ? "rgba(0,212,232,0.07)"
          : "rgba(255,255,255,0.04)",
        border: hovered
          ? "1px solid rgba(0,212,232,0.35)"
          : "1px solid rgba(255,255,255,0.09)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        cursor: "default",
        transition: "all 0.35s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 8px 32px rgba(0,212,232,0.12)"
          : "0 2px 12px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "12px",
          background: "rgba(0,212,232,0.1)",
          border: "1px solid rgba(0,212,232,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#00d4e8",
          marginBottom: "12px",
        }}
      >
        {icon}
      </div>
      <p
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: "#fff",
          fontFamily: "'Poppins', sans-serif",
          marginBottom: "6px",
          letterSpacing: "0.01em",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontSize: "11.5px",
          color: "rgba(255,255,255,0.45)",
          fontFamily: "'Poppins', sans-serif",
          lineHeight: 1.55,
        }}
      >
        {desc}
      </p>
    </motion.div>
  );
}

/* ─── Main Hero ─── */
export default function LandingHero() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const astronautRef = useRef<HTMLDivElement>(null); // kept for Effect 2 later

  useEffect(() => {
    setMounted(true);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    /* ── Warp starfield ─────────────────────────────────────── */
    const colors = ["#ffffff", "#c8f0ff", "#a0d8ef", "#00d4e8", "#b0c4ff"];
    type Star = { x:number; y:number; z:number; px:number; py:number; size:number; speed:number; color:string };
    const mkStar = (): Star => ({
      x: (Math.random() - 0.5) * w,
      y: (Math.random() - 0.5) * h,
      z: Math.random() * 0.5,
      px: 0, py: 0,
      size: Math.random() * 1.2 + 0.3,
      speed: Math.random() * 1.8 + 0.6,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
    const stars: Star[] = Array.from({ length: 280 }, mkStar);

    const drawStars = () => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      stars.forEach((s) => {
        const scale = 1 / (1 - s.z * 0.8);
        const sx = cx + s.x * scale;
        const sy = cy + s.y * scale;

        ctx.beginPath();
        ctx.arc(sx, sy, s.size * (0.5 + s.z * 1.2), 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.min(s.z * 1.2, 0.9);
        ctx.fill();
        ctx.globalAlpha = 1;

        s.z += s.speed * 0.004;
        if (s.z >= 1 || sx < -80 || sx > w+80 || sy < -80 || sy > h+80)
          Object.assign(s, mkStar(), { z: 0.01 });
      });
    };

    /* ── EFFECT 1: Shooting Stars ────────────────────────────── ACTIVE ── */
    type Shooter = { x:number; y:number; vx:number; vy:number; life:number; maxLife:number; len:number };
    const shooters: Shooter[] = [];
    let nextShoot = Date.now() + 2000;

    const spawnShooter = () => {
      const angle = Math.PI / 5 + (Math.random() - 0.5) * 0.4;
      const speed = 14 + Math.random() * 8;
      shooters.push({
        x: Math.random() * w * 0.7,
        y: Math.random() * h * 0.4,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 35 + Math.random() * 20,
        len: 90 + Math.random() * 80,
      });
    };

    const drawShooters = () => {
      const now = Date.now();
      if (now > nextShoot) {
        spawnShooter();
        nextShoot = now + 3500 + Math.random() * 4500;
      }
      for (let i = shooters.length - 1; i >= 0; i--) {
        const sh = shooters[i];
        const p = sh.life / sh.maxLife;
        const alpha = p < 0.3 ? p / 0.3 : 1 - (p - 0.3) / 0.7;
        const tailX = sh.x - sh.vx * (sh.len / 14);
        const tailY = sh.y - sh.vy * (sh.len / 14);
        const grad = ctx.createLinearGradient(tailX, tailY, sh.x, sh.y);
        grad.addColorStop(0, "rgba(255,255,255,0)");
        grad.addColorStop(1, `rgba(200,240,255,${(alpha * 0.95).toFixed(2)})`);
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(sh.x, sh.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(sh.x, sh.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(2)})`;
        ctx.fill();
        sh.x += sh.vx; sh.y += sh.vy; sh.life++;
        if (sh.life >= sh.maxLife) shooters.splice(i, 1);
      }
    };

    /* ── EFFECT 4: Interactive Space Dust Mouse Trail ── */
    type DustParticle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      decay: number;
    };
    const dustParticles: DustParticle[] = [];
    const dustColors = ["#00d4e8", "#7B2FF7", "#a855f7", "#ffffff", "#00c6ff"];

    const spawnDust = (mx: number, my: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.4 + 0.3;
      dustParticles.push({
        x: mx,
        y: my,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.15, // slight upward drift
        size: Math.random() * 2.5 + 1.2,
        color: dustColors[Math.floor(Math.random() * dustColors.length)],
        alpha: 1.0,
        decay: Math.random() * 0.015 + 0.012,
      });
      if (dustParticles.length > 90) dustParticles.shift();
    };

    const drawDust = () => {
      for (let i = dustParticles.length - 1; i >= 0; i--) {
        const p = dustParticles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        if (p.alpha <= 0) {
          dustParticles.splice(i, 1);
        }
      }
    };

    /* ── EFFECT 2: Mouse Parallax on Astronaut + Mouse Trail ── ACTIVE ── */
    const onMouseMove = (e: MouseEvent) => {
      if (astronautRef.current) {
        const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
        const dx = ((e.clientX - cx) / cx) * 20;
        const dy = ((e.clientY - cy) / cy) * 15;
        astronautRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
      }

      spawnDust(e.clientX, e.clientY);
      if (Math.random() < 0.5) {
        spawnDust(e.clientX, e.clientY);
      }
    };
    window.addEventListener("mousemove", onMouseMove);

    /* ── EFFECT 3: Nebula Pulse ── ACTIVE ── */

    /* ── Main loop ───────────────────────────────────────────── */
    const loop = () => {
      drawStars();
      drawDust();
      animId = requestAnimationFrame(loop);
    };

    // no initial solid fill to keep canvas transparent
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove); // Effect 2 enabled
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Background image (background1.webp) ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, overflow: "hidden" }}>
        <img
          src="/Images/background1.webp"
          className="space-bg-zoom"
          alt="Space background"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        {/* Dark overlay so text stays readable */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(3,0,17,0.45) 0%, rgba(3,0,17,0.22) 50%, rgba(3,0,17,0.85) 88%, rgba(4,2,15,1) 100%)",
          }}
        />
      </div>

      {/* ── Animated starfield canvas (transparent overlay) ── */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      />

      {/* Subtle cyan glow left */}
      <div
        className="nebula-pulse"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          background:
            "radial-gradient(ellipse 50% 65% at 12% 60%, rgba(0,212,232,0.15) 0%, transparent 65%)",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
        }}
      />
      {/* Purple glow right */}
      <div
        className="nebula-pulse"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          background:
            "radial-gradient(ellipse 40% 55% at 85% 40%, rgba(123,47,247,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
        }}
      />
      {/* Bottom fade into dark sections */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          zIndex: 4,
          background: "linear-gradient(to bottom, transparent 0%, #04020F 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Main content row ── */}
      <div
        className="landing-hero-grid"
        style={{
          position: "relative",
          zIndex: 5,
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          padding: "100px 48px 0",
          gap: "20px",
        }}
      >
        {/* ── LEFT: Text content ── */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-spectre), sans-serif",
              fontSize: "clamp(12px, 1.4vw, 15px)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#00d4e8",
              marginBottom: "18px",
              fontWeight: 400,
            }}
          >
            Innovate, Integrate, Elevate.
          </motion.p>

          {/* Main heading — INFAVOUR in Data70 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ marginBottom: "0" }}
          >
            <h1
              style={{
                fontFamily: "var(--font-data70), monospace",
                fontWeight: 400,
                lineHeight: 0.9,
                margin: 0,
                padding: 0,
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(72px, 10.5vw, 145px)",
                  color: "#fff",
                  letterSpacing: "-0.01em",
                }}
              >
                {/* "IN" in cyan, rest in white to match reference */}
                <span style={{ color: "#00d4e8" }}>IN</span>FAVOUR
              </span>
            </h1>
          </motion.div>

          {/* SOLUTIONS subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
          >
            <p
              style={{
                fontFamily: "var(--font-spectre), sans-serif",
                fontSize: "clamp(28px, 4vw, 52px)",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#fff",
                fontWeight: 400,
                marginTop: "4px",
                marginBottom: "28px",
              }}
            >
              Solutions
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(13px, 1.3vw, 15px)",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.75,
              maxWidth: "380px",
              marginBottom: "38px",
              fontWeight: 300,
            }}
          >
            Infavour Solutions delivers cutting-edge digital solutions that drive
            your business forward in the modern world.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58 }}
          >
            <a
              href="#portfolio"
              id="explore-solutions-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 30px",
                borderRadius: "99px",
                background: "linear-gradient(135deg, #00d4e8 0%, #00a3b5 100%)",
                color: "#000",
                fontWeight: 600,
                fontSize: "14px",
                fontFamily: "'Poppins', sans-serif",
                textDecoration: "none",
                letterSpacing: "0.02em",
                boxShadow:
                  "0 0 32px rgba(0,212,232,0.5), 0 8px 24px rgba(0,0,0,0.3)",
                transition: "all 0.35s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow =
                  "0 0 55px rgba(0,212,232,0.75), 0 12px 32px rgba(0,0,0,0.4)";
                el.style.transform = "scale(1.04) translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow =
                  "0 0 32px rgba(0,212,232,0.5), 0 8px 24px rgba(0,0,0,0.3)";
                el.style.transform = "scale(1) translateY(0)";
              }}
            >
              Explore Our Solutions
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
          </motion.div>
        </div>

        {/* ── RIGHT: Astronaut + glass card ── */}
        <div
          className="hero-right-col"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "clamp(420px, 55vw, 660px)",
          }}
        >
          {/* Glass info card — top left of astronaut area */}
          <motion.div
            className="hero-glass-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            style={{
              position: "absolute",
              top: "10px",
              right: "270px",
              zIndex: 10,
              padding: "16px 20px",
              borderRadius: "16px",
              background: "rgba(3,0,17,0.55)",
              border: "1px solid rgba(0,212,232,0.3)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              minWidth: "200px",
              boxShadow: "0 4px 32px rgba(0,212,232,0.1)",
            }}
          >
            {/* Card header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "10px",
                  background: "rgba(0,212,232,0.12)",
                  border: "1px solid rgba(0,212,232,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#00d4e8",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#00d4e8",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Next-Gen
                <br />
                Experience
              </p>
            </div>

            {/* List items */}
            {[
              "Next-Gen Web Solutions",
              "Seamless System Integration",
              "Scalable Cloud Infrastructure",
              "Intelligent Digital Experiences",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "7px",
                }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "#00d4e8",
                    flexShrink: 0,
                    boxShadow: "0 0 6px #00d4e8",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.7)",
                    fontWeight: 300,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Astronaut image with float animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.15 }}
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              ref={astronautRef}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
                zIndex: 12,
              }}
            >
              <div
                className="astronaut-float"
                style={{
                  position: "relative",
                  width: "clamp(320px, 48vw, 680px)",
                  height: "clamp(320px, 48vw, 680px)",
                  filter: "drop-shadow(0 20px 60px rgba(0,212,232,0.2))",
                }}
              >
                <Image
                  src="/Images/astronaut.png"
                  alt="Floating astronaut"
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Bottom right: 50K Happy Clients card */}
          <motion.div
            className="hero-stats-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            style={{
              position: "absolute",
              bottom: "20px",
              right: "0px",
              zIndex: 10,
              padding: "14px 18px",
              borderRadius: "14px",
              background: "rgba(3,0,17,0.6)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              minWidth: "190px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "6px",
              }}
            >
              {/* Avatar group */}
              <div style={{ display: "flex" }}>
                {["#00d4e8", "#7B2FF7", "#a855f7"].map((color, i) => (
                  <div
                    key={i}
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${color} 0%, ${color}99 100%)`,
                      border: "2px solid rgba(3,0,17,0.8)",
                      marginLeft: i === 0 ? 0 : "-9px",
                      position: "relative",
                      zIndex: 3 - i,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "9px",
                      fontWeight: 700,
                      color: "#fff",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {["AM", "BK", "LC"][i]}
                  </div>
                ))}
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  50K+ Happy Clients
                </p>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "11px",
                color: "rgba(255,255,255,0.45)",
                marginBottom: "8px",
              }}
            >
              Worldwide trust in our solutions
            </p>
            {/* Stars */}
            <div style={{ display: "flex", gap: "3px" }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <svg
                  key={s}
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="#f59e0b"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom feature cards row ── */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          padding: "32px 48px 48px",
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          alignItems: "stretch",
        }}
        className="landing-cards-row"
      >
        <FeatureCard
          icon={<WebIcon />}
          title="Web Development"
          desc="Modern, responsive & high-performance websites."
          delay={0.8}
        />
        <FeatureCard
          icon={<MarketingIcon />}
          title="Digital Marketing"
          desc="Boost your brand with smart digital strategies."
          delay={0.92}
        />
        <FeatureCard
          icon={<CloudIcon />}
          title="Cloud Services"
          desc="Scalable cloud solutions for your business."
          delay={1.04}
        />
      </div>

      {/* ── Keyframe & responsive styles ── */}
      <style>{`
        @keyframes astronautFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(1deg); }
        }
        .astronaut-float {
          animation: astronautFloat 5s ease-in-out infinite;
          transition: transform 0.15s ease; /* smooth for Effect 2 parallax */
        }

         /* Effect 3: Nebula Pulse — apply class "nebula-pulse" to glow divs to activate */
        @keyframes nebulaBreath {
          0%, 100% { opacity: 0.45; transform: scale(1) translate(0px, 0px); }
          50% { opacity: 1.0; transform: scale(1.18) translate(15px, -10px); }
        }
        .nebula-pulse {
          animation: nebulaBreath 9s ease-in-out infinite;
          transform-origin: center;
        }

        /* Ambient Space Background slowly breathing zoom */
        @keyframes spaceZoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.07); }
        }
        .space-bg-zoom {
          animation: spaceZoom 24s ease-in-out infinite;
        }

        @media (max-width: 900px) {
          .landing-hero-grid {
            grid-template-columns: 1fr !important;
            padding: 90px 24px 0 !important;
            text-align: center !important;
          }
          .hero-right-col {
            height: 280px !important;
            margin-top: 10px !important;
          }
          .astronaut-float {
            width: 240px !important;
            height: 240px !important;
          }
          .hero-glass-card,
          .hero-stats-card {
            display: none !important;
          }
          .landing-cards-row {
            padding: 24px 24px 40px !important;
          }
        }

        @media (max-width: 640px) {
          .landing-cards-row {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}
