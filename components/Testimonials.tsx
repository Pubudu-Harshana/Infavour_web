"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "CEO, NexaCloud",
    text: "INFAVOUR completely transformed our online presence. The website they built for us is a masterpiece — fast, beautiful, and our conversions went up 200%. Absolute professionals.",
    rating: 5,
    avatar: "AM",
    color: "#7B2FF7",
  },
  {
    name: "Sarah Williams",
    role: "Founder, Aura Beauty",
    text: "I've worked with many agencies, but INFAVOUR is on another level. The brand identity they created for us tells our story perfectly. Every detail was thoughtfully crafted.",
    rating: 5,
    avatar: "SW",
    color: "#00C6FF",
  },
  {
    name: "Dilshan Perera",
    role: "CMO, Orbital Tech",
    text: "The launch video INFAVOUR produced for us went viral. 1 million views in 48 hours. The quality was cinematic, the storytelling was perfect. Couldn't be happier.",
    rating: 5,
    avatar: "DP",
    color: "#a855f7",
  },
  {
    name: "Maya Chen",
    role: "Product Lead, CryptoVault",
    text: "From design to deployment, INFAVOUR delivered beyond expectations. The DeFi platform UI they built is the best in the space. Our users love it.",
    rating: 5,
    avatar: "MC",
    color: "#38bdf8",
  },
  {
    name: "Rohan Sharma",
    role: "Director, Nova Media",
    text: "Working with INFAVOUR felt like having a top-tier in-house team. They understood our vision instantly and delivered a social campaign that exceeded every KPI.",
    rating: 5,
    avatar: "RS",
    color: "#fb923c",
  },
];

export default function Testimonials() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const getVisible = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      const index = (current + i + testimonials.length) % testimonials.length;
      result.push({ ...testimonials[index], offset: i });
    }
    return result;
  };

  return (
    <section id="testimonials" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(123,47,247,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Orbit rings (decorative) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[500, 700, 900].map((size, i) => (
          <div
            key={size}
            className="absolute rounded-full border border-white/[0.02]"
            style={{ width: `${size}px`, height: `${size}px` }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto">
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
            Testimonials
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Trusted by{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7B2FF7, #00C6FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Growing Brands
            </span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it — hear from the brands we&apos;ve launched
            into orbit.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center" style={{ height: "340px" }}>
          {getVisible().map(({ offset, ...t }) => {
            const isCenter = offset === 0;
            return (
              <motion.div
                key={t.name + offset}
                animate={{
                  x: offset * 320,
                  scale: isCenter ? 1 : 0.82,
                  opacity: isCenter ? 1 : 0.35,
                  zIndex: isCenter ? 10 : 5,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                className="absolute w-80 rounded-2xl p-7 flex flex-col gap-5"
                style={{
                  background: isCenter
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(255,255,255,0.02)",
                  border: isCenter
                    ? `1px solid ${t.color}30`
                    : "1px solid rgba(255,255,255,0.05)",
                  backdropFilter: "blur(20px)",
                  boxShadow: isCenter
                    ? `0 0 40px ${t.color}20, 0 20px 60px rgba(0,0,0,0.3)`
                    : "none",
                }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={t.color}
                      style={{ color: t.color }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/70 text-sm leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: `${t.color}30`, border: `1px solid ${t.color}40` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-white"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: "rgba(123,47,247,0.12)",
              border: "1px solid rgba(123,47,247,0.3)",
              color: "#c084fc",
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  background:
                    i === current
                      ? "linear-gradient(90deg, #7B2FF7, #00C6FF)"
                      : "rgba(255,255,255,0.15)",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: "rgba(123,47,247,0.12)",
              border: "1px solid rgba(123,47,247,0.3)",
              color: "#c084fc",
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
