"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#7B2FF7", "#00C6FF", "#a855f7", "#38bdf8", "#ffffff"];
    const particles: Particle[] = [];
    const count = 200;

    for (let i = 0; i < count; i++) {
      particles.push({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.3,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.7 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep space gradient background
      const bg = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.8
      );
      bg.addColorStop(0, "#0d0520");
      bg.addColorStop(0.5, "#08041a");
      bg.addColorStop(1, "#04020F");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Nebula glow
      const nebula1 = ctx.createRadialGradient(
        canvas.width * 0.3,
        canvas.height * 0.3,
        0,
        canvas.width * 0.3,
        canvas.height * 0.3,
        canvas.width * 0.4
      );
      nebula1.addColorStop(0, "rgba(123,47,247,0.06)");
      nebula1.addColorStop(1, "transparent");
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nebula2 = ctx.createRadialGradient(
        canvas.width * 0.7,
        canvas.height * 0.6,
        0,
        canvas.width * 0.7,
        canvas.height * 0.6,
        canvas.width * 0.35
      );
      nebula2.addColorStop(0, "rgba(0,198,255,0.05)");
      nebula2.addColorStop(1, "transparent");
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        // Glow effect for larger particles
        if (p.size > 1.5) {
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
          glow.addColorStop(0, p.color + "60");
          glow.addColorStop(1, "transparent");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Radial center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(123,47,247,0.15) 0%, rgba(0,198,255,0.05) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Rotating rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] rounded-full border border-purple-500/10 animate-spin-slow"
        />
        <div
          className="absolute w-[700px] h-[700px] rounded-full border border-blue-400/5 animate-spin-reverse"
        />
        <div
          className="absolute w-[900px] h-[900px] rounded-full border border-purple-400/5 animate-spin-slow"
          style={{ animationDuration: "30s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Logo mark */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4 mx-auto">
              <div
                className="absolute inset-0 rounded-full animate-pulse-glow"
                style={{
                  background: "linear-gradient(135deg, #7B2FF7, #00C6FF)",
                  opacity: 0.2,
                }}
              />
              <div
                className="w-16 h-16 rounded-full glass flex items-center justify-center"
                style={{
                  border: "1px solid rgba(123,47,247,0.5)",
                  boxShadow: "0 0 30px rgba(123,47,247,0.5)",
                }}
              >
                <span
                  className="text-2xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #7B2FF7, #00C6FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  ∞
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Brand name */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1
              className="text-6xl md:text-8xl font-black tracking-tight mb-4 animate-neon-flicker"
              style={{
                fontFamily: "Outfit, sans-serif",
                background: "linear-gradient(135deg, #ffffff 0%, #c084fc 40%, #00C6FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "none",
              }}
            >
              INFAVOUR
            </h1>
            <h2
              className="text-3xl md:text-4xl font-light tracking-[0.4em] text-purple-300/80 mb-2"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              SOLUTIONS
            </h2>
          </motion.div>
        )}

        {/* Tagline */}
        {mounted && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl font-light text-blue-200/70 mt-6 mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Crafting{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7B2FF7, #00C6FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 600,
              }}
            >
              Infinite
            </span>{" "}
            Digital Experiences
          </motion.p>
        )}

        {/* Services pills */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12 mt-2"
          >
            {["Web Development", "Graphic Design", "Video Editing"].map(
              (service, i) => (
                <span
                  key={service}
                  className="px-4 py-1.5 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(123,47,247,0.12)",
                    border: "1px solid rgba(123,47,247,0.3)",
                    color: i % 2 === 0 ? "#c084fc" : "#67e8f9",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {service}
                </span>
              )
            )}
          </motion.div>
        )}

        {/* CTA Buttons */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #7B2FF7, #00C6FF)",
                boxShadow: "0 0 30px rgba(123,47,247,0.5)",
                fontFamily: "Outfit, sans-serif",
              }}
            >
              <span className="relative z-10">Get Started</span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, #00C6FF, #7B2FF7)",
                }}
              />
            </a>
            <a
              href="#portfolio"
              className="group px-8 py-4 rounded-full font-semibold transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(123,47,247,0.4)",
                color: "#c084fc",
                backdropFilter: "blur(10px)",
                fontFamily: "Outfit, sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 30px rgba(123,47,247,0.4)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(123,47,247,0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(123,47,247,0.4)";
              }}
            >
              View Our Work
            </a>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="text-xs tracking-widest text-white/30 uppercase"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Scroll to explore
          </span>
          <div
            className="w-px h-10 mx-auto"
            style={{
              background: "linear-gradient(to bottom, rgba(123,47,247,0.8), transparent)",
              animation: "pulse-glow 2s ease-in-out infinite",
            }}
          />
        </motion.div>
      )}
    </section>
  );
}
