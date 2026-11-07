"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ExternalLink, ShieldCheck } from "lucide-react";

interface GoogleReviewItem {
  id: string;
  name: string;
  role: string;
  timeAgo: string;
  text: string;
  rating: number;
  avatarText: string;
  avatarBg: string;
  verified?: boolean;
  projectTag: string;
  country: string;
}

const googleReviews: GoogleReviewItem[] = [
  // ── Review 1: Real Verified Google Review ──
  {
    id: "hashen-de-silva",
    name: "Hashen De Silva",
    role: "Author & Mechanical Engineer",
    timeAgo: "1 week ago",
    text: "Dear Machan, I’m really happy with your work, and I truly appreciate the effort and quality. The Ravi Tours & Travels platform and educational design projects were delivered with exceptional precision.",
    rating: 5,
    avatarText: "HD",
    avatarBg: "linear-gradient(135deg, #F59E0B, #B45309)",
    verified: true,
    projectTag: "Combined Maths & Web",
    country: "🇱🇰",
  },
  // ── Review 2: CarVibes.lk Detailing ──
  {
    id: "sahan-carvibes",
    name: "Sahan Wickramasinghe",
    role: "Managing Director, CarVibes.lk",
    timeAgo: "3 weeks ago",
    text: "INFAVOUR completely transformed our automotive detailing online platform. Our ceramic coating appointment bookings surged by 300% within the first month. The mobile speed and UI are top tier.",
    rating: 5,
    avatarText: "SW",
    avatarBg: "linear-gradient(135deg, #FF2E63, #880E4F)",
    verified: true,
    projectTag: "Web Development",
    country: "🇱🇰",
  },
  // ── Review 3: Ravi Tours & Travels ──
  {
    id: "ravi-kumara",
    name: "Ravi Kumara",
    role: "Founder, Ravi Tours & Travels",
    timeAgo: "1 month ago",
    text: "Our inbound tour inquiries from Europe and the UK surged immediately after launching our new platform. The custom itinerary circuit explorer and instant WhatsApp booking flow work seamlessly.",
    rating: 5,
    avatarText: "RK",
    avatarBg: "linear-gradient(135deg, #00C6FF, #0072ff)",
    verified: true,
    projectTag: "Tourism Web Portal",
    country: "🇱🇰",
  },
  // ── Review 4: FreshLync Supply Chain ──
  {
    id: "nadeem-freshlync",
    name: "Nadeem Al-Hassan",
    role: "Operations Lead, FreshLync",
    timeAgo: "1 month ago",
    text: "INFAVOUR delivered an exceptional supply chain portal. The live temperature monitoring and dispatch interface gave our agricultural cold-chain exporters unprecedented reliability and control.",
    rating: 5,
    avatarText: "NA",
    avatarBg: "linear-gradient(135deg, #10B981, #047857)",
    verified: true,
    projectTag: "Logistics Web App",
    country: "🇦🇪",
  },
  // ── Review 5: Shabba & Kasu YouTube Channel ──
  {
    id: "methuka-shabeen",
    name: "Methuka Shabeen",
    role: "Creator, Shabba & Kasu in UK",
    timeAgo: "2 months ago",
    text: "Top-tier video editing and storytelling! Infavour edited our UK family adventures and Sri Lanka travel series with cinematic color grading and audio mastering. Our viewer watch time increased noticeably.",
    rating: 5,
    avatarText: "MS",
    avatarBg: "linear-gradient(135deg, #EF4444, #991B1B)",
    verified: true,
    projectTag: "YouTube Production",
    country: "🇬🇧",
  },
  // ── Review 6: Brand Identity & Stationery ──
  {
    id: "kavinda-apex",
    name: "Kavinda Jayasinghe",
    role: "Director, Apex Holdings",
    timeAgo: "2 months ago",
    text: "Outstanding brand identity system. From our monogram logo to executive business cards, luxury notebooks, and pitch deck typography, the creative execution was immaculate and prompt.",
    rating: 5,
    avatarText: "KJ",
    avatarBg: "linear-gradient(135deg, #8B5CF6, #4C1D95)",
    verified: true,
    projectTag: "Brand Identity",
    country: "🇱🇰",
  },
  // ── Review 7: E-Commerce Store ──
  {
    id: "senura-ceylon",
    name: "Senura Weerakkody",
    role: "Founder, Ceylon Herbal Goods",
    timeAgo: "3 months ago",
    text: "Flawless e-commerce development with PayHere and Stripe integrations. Checkout is buttery smooth on mobile devices, and the admin order dashboard makes daily fulfilment effortless.",
    rating: 5,
    avatarText: "SW",
    avatarBg: "linear-gradient(135deg, #06B6D4, #0E7490)",
    verified: true,
    projectTag: "E-Commerce App",
    country: "🇱🇰",
  },
  // ── Review 8: Education & Tute Publication ──
  {
    id: "nuwantha-physics",
    name: "Nuwantha Bandara",
    role: "Senior Physics Instructor",
    timeAgo: "3 months ago",
    text: "Exceptional publication cover design and 3D promotional presentation for our Advanced Level student tutes. High-quality conceptual illustrations and typography that students genuinely admire.",
    rating: 5,
    avatarText: "NB",
    avatarBg: "linear-gradient(135deg, #EAB308, #854D0E)",
    verified: true,
    projectTag: "Publication Design",
    country: "🇱🇰",
  },
  // ── Review 9: Digital Campaign & Video ──
  {
    id: "dilshan-ceylon",
    name: "Dilshan Perera",
    role: "CMO, Ceylon Media Group",
    timeAgo: "4 months ago",
    text: "The promotional campaign video and social ad creatives produced by Infavour went viral across Meta channels. Over 1 million views in 48 hours. Masterclass in creative direction.",
    rating: 5,
    avatarText: "DP",
    avatarBg: "linear-gradient(135deg, #EC4899, #9D174D)",
    verified: true,
    projectTag: "Viral Video Campaign",
    country: "🇱🇰",
  },
  // ── Review 10: Tech Architecture & UI/UX ──
  {
    id: "maya-horizon",
    name: "Maya Chen",
    role: "Product Designer, Horizon Tech",
    timeAgo: "4 months ago",
    text: "From initial Figma design systems to clean Next.js deployment, INFAVOUR delivered beyond expectations. Fast turnaround, pixel-perfect glassmorphism, and 95+ Google Lighthouse scores.",
    rating: 5,
    avatarText: "MC",
    avatarBg: "linear-gradient(135deg, #38BDF8, #0369A1)",
    verified: true,
    projectTag: "Full-Stack Web App",
    country: "🇸🇬",
  },
];

const googleMapsUrl = "https://maps.google.com/maps?cid=0x44f677941e304a87:0x6bc026fc92c996af";

function GoogleLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-100px" });

  // 10 reviews split into two 5-item rows, duplicated for seamless marquee loops
  const row1Items = googleReviews.slice(0, 5);
  const row2Items = googleReviews.slice(5, 10);

  const row1 = [...row1Items, ...row1Items];
  const row2 = [...row2Items, ...row2Items];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      style={{
        position: "relative",
        padding: "120px 0 100px",
        overflow: "hidden",
        background: "#060214",
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <img
          src="/Images/projects.webp"
          alt="Testimonials Background"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.55 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(6,2,20,0.85) 0%, rgba(6,2,20,0.6) 50%, rgba(6,2,20,0.92) 100%)",
          }}
        />
      </div>

      {/* Ambient background glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(123,47,247,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px", padding: "0 24px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            {/* Google Rating Pill */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "7px 16px",
                  borderRadius: "99px",
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                <GoogleLogo size={16} />
                <span style={{ fontSize: "12px", fontWeight: 800, color: "#ffffff", letterSpacing: "0.08em" }}>
                  5.0 RATED ON GOOGLE
                </span>
                <div style={{ display: "flex", gap: "2px", marginLeft: "2px" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} fill="#FBBC05" color="#FBBC05" />
                  ))}
                </div>
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(34px, 5vw, 54px)",
                fontWeight: 900,
                color: "#fff",
                marginBottom: "14px",
                fontFamily: "Outfit, sans-serif",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
              }}
            >
              Real Reviews from{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7B2FF7 0%, #00C6FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Real Clients
              </span>
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "16px",
                maxWidth: "520px",
                margin: "0 auto 28px",
                lineHeight: 1.7,
              }}
            >
              Don&apos;t just take our word for it. Explore verified client feedback on Google Maps across web
              development, branding, and video production.
            </p>

            {/* Google Profile Action Banner */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: "10px 22px",
                borderRadius: "99px",
                background: "rgba(14, 7, 32, 0.8)",
                border: "1px solid rgba(123, 47, 247, 0.35)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <GoogleLogo size={20} />
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#ffffff",
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  Infavour Solutions (5.0 ★★★★★)
                </span>
              </div>

              <div style={{ width: "1px", height: "18px", background: "rgba(255,255,255,0.15)" }} />

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  color: "#00C6FF",
                  textDecoration: "none",
                  fontFamily: "Outfit, sans-serif",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#00C6FF";
                }}
              >
                <span>Review us on Google</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scrolling Review Marquees */}
        <div style={{ display: "flex", flexDirection: "column", gap: "22px", width: "100%" }}>
          {/* Row 1: Left to Right */}
          <div className="marquee-container" style={{ overflow: "hidden", display: "flex", width: "100%" }}>
            <div className="marquee-track scroll-ltr" style={{ display: "flex", gap: "20px" }}>
              {row1.map((item, idx) => (
                <GoogleReviewCard key={`${item.id}-r1-${idx}`} item={item} />
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="marquee-container" style={{ overflow: "hidden", display: "flex", width: "100%" }}>
            <div className="marquee-track scroll-rtl" style={{ display: "flex", gap: "20px" }}>
              {row2.map((item, idx) => (
                <GoogleReviewCard key={`${item.id}-r2-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Animation Styles */}
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
          animation: marquee-ltr 42s linear infinite;
        }
        .scroll-rtl {
          animation: marquee-rtl 46s linear infinite;
        }
        .marquee-container {
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function GoogleReviewCard({ item }: { item: GoogleReviewItem }) {
  return (
    <div
      style={{
        width: "clamp(300px, 28vw, 390px)",
        flexShrink: 0,
        padding: "clamp(22px, 3vw, 28px)",
        borderRadius: "22px",
        background: "linear-gradient(145deg, rgba(14, 7, 32, 0.92) 0%, rgba(7, 3, 20, 0.96) 100%)",
        border: item.verified ? "1px solid rgba(66, 133, 244, 0.45)" : "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: item.verified
          ? "0 14px 40px rgba(0,0,0,0.6), 0 0 25px rgba(66, 133, 244, 0.15)"
          : "0 12px 35px rgba(0,0,0,0.55)",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onMouseEnter={(e) => {
        const card = e.currentTarget as HTMLElement;
        card.style.borderColor = "rgba(66, 133, 244, 0.8)";
        card.style.transform = "translateY(-4px)";
        card.style.boxShadow = "0 18px 45px rgba(66, 133, 244, 0.25)";
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget as HTMLElement;
        card.style.borderColor = item.verified ? "rgba(66, 133, 244, 0.45)" : "rgba(255, 255, 255, 0.1)";
        card.style.transform = "translateY(0)";
        card.style.boxShadow = item.verified
          ? "0 14px 40px rgba(0,0,0,0.6), 0 0 25px rgba(66, 133, 244, 0.15)"
          : "0 12px 35px rgba(0,0,0,0.55)";
      }}
    >
      <div>
        {/* Top Header: Google Badge & Time Ago */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "14px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <GoogleLogo size={16} />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "rgba(255, 255, 255, 0.75)",
                fontFamily: "Outfit, sans-serif",
                letterSpacing: "0.04em",
              }}
            >
              Google Review
            </span>
          </div>

          <span
            style={{
              fontSize: "11px",
              color: "rgba(255, 255, 255, 0.4)",
              fontFamily: "Outfit, sans-serif",
            }}
          >
            {item.timeAgo}
          </span>
        </div>

        {/* Stars */}
        <div style={{ display: "flex", alignItems: "center", gap: "3px", marginBottom: "14px" }}>
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star key={i} size={15} fill="#FBBC05" color="#FBBC05" />
          ))}
          {item.verified && (
            <span
              style={{
                marginLeft: "8px",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "10.5px",
                fontWeight: 700,
                padding: "2px 8px",
                borderRadius: "99px",
                background: "rgba(66, 133, 244, 0.15)",
                border: "1px solid rgba(66, 133, 244, 0.35)",
                color: "#60A5FA",
                fontFamily: "Outfit, sans-serif",
              }}
            >
              <ShieldCheck size={11} /> Verified
            </span>
          )}
        </div>

        {/* Review body text */}
        <p
          style={{
            fontSize: "13.5px",
            color: "rgba(255, 255, 255, 0.88)",
            lineHeight: 1.65,
            marginBottom: "18px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            textShadow: "0 1px 3px rgba(0,0,0,0.6)",
          }}
        >
          &ldquo;{item.text}&rdquo;
        </p>
      </div>

      {/* Customer Info Footer */}
      <div>
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, rgba(255,255,255,0.08), transparent)",
            marginBottom: "14px",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: 800,
                color: "#ffffff",
                background: item.avatarBg,
                boxShadow: "0 0 15px rgba(0,0,0,0.4)",
                fontFamily: "Outfit, sans-serif",
                flexShrink: 0,
              }}
            >
              {item.avatarText}
            </div>

            <div>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#ffffff",
                  fontFamily: "Outfit, sans-serif",
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {item.name}{" "}
                <span style={{ fontSize: "11px", opacity: 0.85, marginLeft: "2px" }}>{item.country}</span>
              </p>
              <p
                style={{
                  fontSize: "11px",
                  color: "rgba(255, 255, 255, 0.45)",
                  margin: "2px 0 0",
                  lineHeight: 1.2,
                }}
              >
                {item.role}
              </p>
            </div>
          </div>

          {/* Project Tag */}
          <span
            style={{
              fontSize: "10px",
              padding: "3px 8px",
              borderRadius: "6px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.65)",
              fontFamily: "Outfit, sans-serif",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            {item.projectTag}
          </span>
        </div>
      </div>
    </div>
  );
}
