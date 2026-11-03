"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Sahan Wickramasinghe", role: "Managing Director, CarVibes.lk", text: "INFAVOUR completely transformed our online presence. Our detailing appointments and package inquiries surged by 300% within the first month. Incredible design and execution.", rating: 5, avatar: "SW", color: "#FF2E63", country: "🇱🇰" },
  { name: "Ravi Kumara", role: "Founder, Ravi Tours & Travels", text: "Our inbound tour inquiries from Europe and the Americas surged after launching our new platform. The itinerary builder and instant WhatsApp booking flow work seamlessly.", rating: 5, avatar: "RK", color: "#00C6FF", country: "🇱🇰" },
  { name: "Nadeem Al-Hassan", role: "Operations Lead, FreshLync", text: "INFAVOUR delivered an exceptional supply chain portal. The real-time temperature tracking and live dispatch interface gave our agricultural exporters unprecedented reliability.", rating: 5, avatar: "NA", color: "#10B981", country: "🇦🇪" },
  { name: "Dilshan Perera", role: "CMO, Ceylon Media", text: "The promotional campaign video INFAVOUR produced went viral. Over 1 million views in 48 hours. The cinematic quality and storytelling were world-class.", rating: 5, avatar: "DP", color: "#a855f7", country: "🇱🇰" },
  { name: "Maya Chen", role: "Product Designer, Global Exports", text: "From design system to full Next.js deployment, INFAVOUR delivered beyond expectations. Fast turnaround, pixel-perfect layouts, and top-tier code quality.", rating: 5, avatar: "MC", color: "#38bdf8", country: "🇸🇬" },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-100px" });

  // We duplicate and arrange testimonials for two separate marquee rows
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials].reverse().concat([...testimonials].reverse());

  return (
    <section ref={sectionRef} id="testimonials" style={{ position: "relative", padding: "140px 0", overflow: "hidden", background: "#060214" }}>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <img
          src="/Images/projects.webp"
          alt="Testimonials Background"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.65 }}
        />
        {/* Dark overlay for readability */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,2,20,0.7) 0%, rgba(6,2,20,0.4) 50%, rgba(6,2,20,0.8) 100%)" }} />
      </div>

      {/* BG decorations */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse, rgba(123,47,247,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 1 }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(123,47,247,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(123,47,247,0.02) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none", zIndex: 1 }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(90deg, transparent, rgba(123,47,247,0.7))" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#7B2FF7", fontFamily: "Outfit, sans-serif" }}>Success Stories</span>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(270deg, transparent, rgba(0,198,255,0.7))" }} />
          </div>
          <h2 style={{ fontSize: "clamp(38px,5.5vw,56px)", fontWeight: 900, color: "#fff", marginBottom: "16px", fontFamily: "Outfit, sans-serif", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            Trusted by{" "}
            <span style={{ background: "linear-gradient(135deg,#7B2FF7,#00C6FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Growing Brands
            </span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "17px", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Don&apos;t take our word for it — hear from brands we&apos;ve launched into orbit.
          </p>
        </div>

        {/* Infinite Scrolling Marquee Containers */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", width: "100%" }}>
          
          {/* Row 1: Left to Right */}
          <div className="marquee-container" style={{ overflow: "hidden", display: "flex", width: "100%" }}>
            <div className="marquee-track scroll-ltr" style={{ display: "flex", gap: "24px" }}>
              {row1.map((item, idx) => (
                <TestimonialCard key={`${item.name}-r1-${idx}`} item={item} />
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="marquee-container" style={{ overflow: "hidden", display: "flex", width: "100%" }}>
            <div className="marquee-track scroll-rtl" style={{ display: "flex", gap: "24px" }}>
              {row2.map((item, idx) => (
                <TestimonialCard key={`${item.name}-r2-${idx}`} item={item} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Hardware-accelerated CSS Keyframes */}
      <style>{`
        @keyframes marquee-ltr {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @keyframes marquee-rtl {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-track {
          will-change: transform;
        }
        .scroll-ltr {
          animation: marquee-ltr 38s linear infinite;
        }
        .scroll-rtl {
          animation: marquee-rtl 42s linear infinite;
        }
        .marquee-container {
          mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
        }
        /* Pause marquee loop when user hovers to read */
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

interface CardProps {
  item: typeof testimonials[0];
}

function TestimonialCard({ item }: CardProps) {
  return (
    <div
      style={{
        width: "clamp(340px, 28vw, 420px)",
        flexShrink: 0,
        padding: "32px",
        borderRadius: "24px",
        background: "linear-gradient(135deg, rgba(14, 6, 32, 0.88) 0%, rgba(7, 3, 20, 0.95) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(24px)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        const card = e.currentTarget as HTMLElement;
        card.style.borderColor = `${item.color}60`;
        card.style.transform = "translateY(-6px) scale(1.015)";
        card.style.boxShadow = `0 18px 45px ${item.color}25, 0 0 0 1px ${item.color}40`;
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget as HTMLElement;
        card.style.borderColor = "rgba(255, 255, 255, 0.1)";
        card.style.transform = "translateY(0) scale(1)";
        card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
      }}
    >
      {/* Subtle Glow behind the card */}
      <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "120px", height: "120px", background: `radial-gradient(circle, ${item.color}25 0%, transparent 70%)`, pointerEvents: "none" }} />

      {/* Floating Quote Icon */}
      <div style={{ position: "absolute", top: "24px", right: "24px", opacity: 0.12, color: item.color }}>
        <Quote size={32} />
      </div>

      {/* Rating */}
      <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} size={14} fill={item.color} color={item.color} />
        ))}
      </div>

      {/* Testimonial text */}
      <p style={{ fontSize: "14.5px", color: "rgba(255,255,255,0.88)", lineHeight: 1.68, marginBottom: "24px", fontFamily: "Inter, sans-serif", fontWeight: 400, textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
        &ldquo;{item.text}&rdquo;
      </p>

      {/* Divider */}
      <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, rgba(255,255,255,0.06), transparent)", marginBottom: "16px" }} />

      {/* Customer details */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Avatar */}
        <div style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          fontWeight: 700,
          color: "#fff",
          background: `${item.color}20`,
          border: `2px solid ${item.color}50`,
          boxShadow: `0 0 15px ${item.color}25`,
          fontFamily: "Outfit, sans-serif"
        }}>
          <span>{item.avatar}</span>
        </div>
        <div>
          <p style={{ fontSize: "13.5px", fontWeight: 700, color: "#fff", fontFamily: "Outfit, sans-serif" }}>
            {item.name} <span style={{ fontSize: "12.5px", marginLeft: "4px" }}>{item.country}</span>
          </p>
          <p style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.38)", marginTop: "1px" }}>{item.role}</p>
        </div>
      </div>
    </div>
  );
}
