"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Globe, Layers, Play, ArrowRight, Sparkles, MessageCircle } from "lucide-react";

export interface PortfolioItem {
  id: number;
  category: "Web" | "Design" | "Video";
  title: string;
  description: string;
  tags: string[];
  icon: typeof Globe | typeof Layers | typeof Play;
  gradient: string;
  accentColor: string;
  stat: string;
  featured: boolean;
  image?: string;
  url?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: "Web",
    title: "CarVibes.lk Platform",
    description:
      "Automotive detailing & car care web platform featuring online service booking, high-intensity showroom packages, steam sanitation scheduling, and ceramic coating showcase.",
    tags: ["Next.js", "Tailwind CSS", "Online Booking"],
    icon: Globe,
    gradient: "linear-gradient(135deg, #FF2E63 0%, #150720 100%)",
    accentColor: "#FF2E63",
    stat: "3× booking surge",
    featured: true,
    image: "/Images/portfolio/carvibes.png",
    url: "https://carvibes.lk",
  },
  {
    id: 2,
    category: "Web",
    title: "Ravi Tours & Travels",
    description:
      "Inbound Sri Lankan tourism portal designed for international travelers. Features bespoke Ceylon expedition itineraries, wildlife safaris, and direct WhatsApp trip planning.",
    tags: ["Next.js", "Travel Portal", "UX/UI"],
    icon: Globe,
    gradient: "linear-gradient(135deg, #00C6FF 0%, #061c33 100%)",
    accentColor: "#00C6FF",
    stat: "+180% tourist inquiries",
    featured: true,
    image: "/Images/portfolio/ravitours.png",
    url: "https://ravitoursandtravels.com",
  },
  {
    id: 3,
    category: "Web",
    title: "FreshLync Supply Chain",
    description:
      "Intelligent cold-chain digital distribution platform connecting verified agricultural suppliers with buyers, featuring live temperature tracking and route visibility.",
    tags: ["React", "Live Tracking", "Logistics"],
    icon: Globe,
    gradient: "linear-gradient(135deg, #10B981 0%, #031c12 100%)",
    accentColor: "#10B981",
    stat: "Zero cold-chain loss",
    featured: true,
    image: "/Images/portfolio/freshlync.png",
    url: "https://freshlync.live",
  },
  {
    id: 4,
    category: "Design",
    title: "Combined Mathematics Book Cover",
    description:
      "Premium educational publication cover and 3D promotional presentation for 'Basic Concepts of Combined Mathematics' by Eng. Hashen De Silva. Features bespoke conceptual robotics artwork, architectural blueprint backdrop, and precision print typography.",
    tags: ["Book Cover", "Educational Tute", "Print Design", "3D Mockup"],
    icon: Layers,
    gradient: "linear-gradient(135deg, #F59E0B 0%, #1e1203 100%)",
    accentColor: "#F59E0B",
    stat: "Featured Publication",
    featured: true,
    image: "/Images/portfolio/tuition_book_cover.jpg",
    url: "https://www.facebook.com/share/p/19rGVhbocu/",
  },
  {
    id: 5,
    category: "Design",
    title: "Infavour Corporate Identity",
    description:
      "Complete brand identity system & stationery suite for Infavour Solutions, including stylized monogram logo, business cards, letterhead, luxury notebook, and multi-device UI staging.",
    tags: ["Brand Identity", "Stationery", "Corporate Kit"],
    icon: Layers,
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #170d30 100%)",
    accentColor: "#8B5CF6",
    stat: "Full Brand Suite",
    featured: true,
    image: "/Images/portfolio/infavour_stationery.jpg",
    url: "https://www.facebook.com/people/Infavour/61575722499481/",
  },
  {
    id: 6,
    category: "Design",
    title: "Hardcover 3D Edition Mockup",
    description:
      "Photorealistic 3D hardcover edition presentation for Combined Mathematics Advanced Level series, showcasing spine typography, industrial workshop desktop staging, and tactile materials.",
    tags: ["3D Mockup", "Hardcover Staging", "Editorial", "Spine Design"],
    icon: Layers,
    gradient: "linear-gradient(135deg, #EAB308 0%, #1a1400 100%)",
    accentColor: "#EAB308",
    stat: "3D Presentation",
    featured: false,
    image: "/Images/portfolio/tuition_tute_cover_3.jpg",
    url: "https://www.facebook.com/share/p/19rGVhbocu/",
  },
  {
    id: 7,
    category: "Design",
    title: "Ravi Tours Mobile Experience",
    description:
      "High-conversion responsive mobile user interface crafted for international travelers exploring Sri Lankan tour itineraries and booking destinations directly on smartphones.",
    tags: ["Mobile UI/UX", "Responsive", "Travel Portal"],
    icon: Layers,
    gradient: "linear-gradient(135deg, #38BDF8 0%, #082136 100%)",
    accentColor: "#38BDF8",
    stat: "100% Responsive",
    featured: false,
    image: "/Images/portfolio/ravi_tours_mobile.jpg",
    url: "https://ravitoursandtravels.com",
  },
  {
    id: 8,
    category: "Design",
    title: "Interactive Route Explorer UI",
    description:
      "Interactive Sri Lanka circuit map interface with live waypoint tracking, driving durations, and local tips designed for Ravi Tours & Travels desktop explorers.",
    tags: ["UI/UX", "Interactive Map", "Design System"],
    icon: Layers,
    gradient: "linear-gradient(135deg, #10B981 0%, #042116 100%)",
    accentColor: "#10B981",
    stat: "Interactive Map",
    featured: false,
    image: "/Images/portfolio/ravi_tours_map.jpg",
    url: "https://ravitoursandtravels.com",
  },
  {
    id: 9,
    category: "Design",
    title: "Infavour Viral Ad Creative",
    description:
      "High-engagement social media advertising creative developed for brand positioning, client outreach, and digital marketing across Meta channels.",
    tags: ["Social Ad", "Copywriting", "Creative Direction"],
    icon: Layers,
    gradient: "linear-gradient(135deg, #EC4899 0%, #260515 100%)",
    accentColor: "#EC4899",
    stat: "10× Engagement",
    featured: false,
    image: "/Images/portfolio/social_campaign_creative.jpg",
    url: "https://www.facebook.com/people/Infavour/61575722499481/",
  },
  {
    id: 10,
    category: "Video",
    title: "Shabba & Kasu: 2025 Journey & Memories",
    description:
      "Cinematic retrospective year-end film highlighting 2025 milestones, family travels across the United Kingdom and Sri Lanka, and cherished memories. Crafted with bespoke color grading, rhythmic pacing, and emotional narrative arcs by Infavour.",
    tags: ["YouTube Film", "Color Grading", "Cinematic Vlog", "Sound Design"],
    icon: Play,
    gradient: "linear-gradient(135deg, #FF0000 0%, #300006 100%)",
    accentColor: "#FF2A2A",
    stat: "2025 Annual Film",
    featured: true,
    image: "/Images/portfolio/shabba_kasu_memories.jpg",
    url: "https://www.youtube.com/watch?v=nc72bvIDflw",
  },
  {
    id: 11,
    category: "Video",
    title: "Shabba & Kasu: Sigiriya Lion Rock Expedition",
    description:
      "High-energy Sri Lankan travel documentary vlog capturing the summit climb of the world-famous Sigiriya ancient fortress. Features dynamic drone transitions, atmospheric Sri Lankan sound design, and vibrant color grading.",
    tags: ["Travel Vlog", "Sound Design", "Dynamic Pacing", "4K Video"],
    icon: Play,
    gradient: "linear-gradient(135deg, #F59E0B 0%, #301700 100%)",
    accentColor: "#F59E0B",
    stat: "Sri Lanka Series",
    featured: true,
    image: "/Images/portfolio/shabba_kasu_sigiriya.jpg",
    url: "https://www.youtube.com/watch?v=3kkqrOWLqoY",
  },
  {
    id: 12,
    category: "Video",
    title: "Shabba & Kasu: Pennywell Farm UK Adventure",
    description:
      "Fun-filled UK family vlog documenting an adventurous day out at Devon's Pennywell Farm. Edited with smooth speed ramps, playful Foley sound effects, high viewer retention pacing, and crisp audio leveling.",
    tags: ["Family Vlog", "Speed Ramps", "Foley Audio", "Retention Edit"],
    icon: Play,
    gradient: "linear-gradient(135deg, #10B981 0%, #032115 100%)",
    accentColor: "#10B981",
    stat: "UK Vlog Series",
    featured: false,
    image: "/Images/portfolio/shabba_kasu_farm.jpg",
    url: "https://www.youtube.com/watch?v=ImcBW5gK6RQ",
  },
  {
    id: 13,
    category: "Video",
    title: "Shabba & Kasu: Festive UK Christmas Shopping",
    description:
      "Cozy seasonal lifestyle vlog following holiday shopping and festivities in the UK. Crafted with warm cinematic color grades, seamless music sync, and optimized pacing to maximize audience watch time.",
    tags: ["Lifestyle Vlog", "UK Holiday", "Music Sync", "Color Grade"],
    icon: Play,
    gradient: "linear-gradient(135deg, #EC4899 0%, #33051b 100%)",
    accentColor: "#EC4899",
    stat: "Holiday Special",
    featured: false,
    image: "/Images/portfolio/shabba_kasu_christmas.jpg",
    url: "https://www.youtube.com/watch?v=Os_cBwN4qEc",
  },
];

export default function Portfolio() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: false, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [modal, setModal] = useState<PortfolioItem | null>(null);

  const filters = ["All", "Web", "Design", "Video"];
  const filtered =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeFilter);

  // Lock scroll & handle Escape key for modal
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setModal(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  const getFilterCount = (cat: string) => {
    if (cat === "All") return portfolioItems.length;
    return portfolioItems.filter((item) => item.category === cat).length;
  };

  return (
    <section
      id="portfolio"
      style={{
        position: "relative",
        padding: "130px 24px",
        overflow: "hidden",
        background: "#04020F",
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <img
          src="/Images/projects.webp"
          alt="Projects Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.65,
          }}
        />
        {/* Dark overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(4,2,15,0.75) 0%, rgba(4,2,15,0.45) 50%, rgba(4,2,15,0.85) 100%)",
          }}
        />
      </div>

      {/* Grid Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(123,47,247,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(123,47,247,0.035) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "450px",
          background:
            "radial-gradient(ellipse, rgba(0,198,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              marginBottom: "18px",
            }}
          >
            <div
              style={{
                height: "1px",
                width: "60px",
                background:
                  "linear-gradient(90deg, transparent, rgba(0,198,255,0.7))",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#00C6FF",
                fontFamily: "Outfit, sans-serif",
              }}
            >
              Proven Track Record
            </span>
            <div
              style={{
                height: "1px",
                width: "60px",
                background:
                  "linear-gradient(270deg, transparent, rgba(123,47,247,0.7))",
              }}
            />
          </div>
          <h2
            style={{
              fontSize: "clamp(36px,5.5vw,56px)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: "16px",
              fontFamily: "Outfit, sans-serif",
              letterSpacing: "-0.03em",
            }}
          >
            Our Real Client{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#7B2FF7,#00C6FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Work &amp; Case Studies
            </span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "16px",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Explore live digital platforms, official editorial publications, and high-impact brand identities built by Infavour.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "46px",
            flexWrap: "wrap",
          }}
        >
          {filters.map((f) => {
            const count = getFilterCount(f);
            const isSelected = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 24px",
                  borderRadius: "99px",
                  fontSize: "13px",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "Outfit, sans-serif",
                  transition: "all 0.3s ease",
                  background: isSelected
                    ? "linear-gradient(135deg, #7B2FF7, #00C6FF)"
                    : "rgba(10, 5, 25, 0.75)",
                  border: isSelected
                    ? "1px solid rgba(255,255,255,0.4)"
                    : "1px solid rgba(255,255,255,0.12)",
                  color: isSelected ? "#fff" : "rgba(255,255,255,0.75)",
                  boxShadow: isSelected
                    ? "0 0 25px rgba(123,47,247,0.5), inset 0 1px 0 rgba(255,255,255,0.3)"
                    : "0 4px 12px rgba(0,0,0,0.3)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span>{f === "All" ? "All Works" : f}</span>
                <span
                  style={{
                    fontSize: "11px",
                    padding: "2px 7px",
                    borderRadius: "99px",
                    background: isSelected ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.08)",
                    color: isSelected ? "#ffffff" : "rgba(255,255,255,0.5)",
                    fontWeight: 700,
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Portfolio grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "26px",
          }}
        >
          {filtered.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                onClick={() => setModal(item)}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "24px",
                  height: "390px",
                  cursor: "pointer",
                  background: "#080414",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 14px 40px rgba(0,0,0,0.5)",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget as HTMLElement;
                  card.style.transform = "translateY(-6px)";
                  card.style.borderColor = `${item.accentColor}60`;
                  card.style.boxShadow = `0 20px 50px ${item.accentColor}25, 0 0 0 1px ${item.accentColor}40`;
                  const bg = card.querySelector(".card-bg") as HTMLElement;
                  if (bg) bg.style.transform = "scale(1.06)";
                  const ctaArrow = card.querySelector(".card-arrow") as HTMLElement;
                  if (ctaArrow) ctaArrow.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget as HTMLElement;
                  card.style.transform = "translateY(0)";
                  card.style.borderColor = "rgba(255,255,255,0.1)";
                  card.style.boxShadow = "0 14px 40px rgba(0,0,0,0.5)";
                  const bg = card.querySelector(".card-bg") as HTMLElement;
                  if (bg) bg.style.transform = "scale(1)";
                  const ctaArrow = card.querySelector(".card-arrow") as HTMLElement;
                  if (ctaArrow) ctaArrow.style.transform = "translateX(0)";
                }}
              >
                {/* BG screenshot / image */}
                {item.image ? (
                  <img
                    className="card-bg"
                    src={item.image}
                    alt={item.title}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                ) : (
                  <div
                    className="card-bg"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: item.gradient,
                      transition: "transform 0.65s ease",
                    }}
                  />
                )}

                {/* ── Permanent Multi-Stop Contrast Scrim (Ensures 100% Text Readability On Any Image) ── */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(5,2,16,0.92) 0%, rgba(5,2,16,0.3) 25%, rgba(5,2,16,0.4) 48%, rgba(5,2,16,0.94) 75%, #050210 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Subtle project accent color ambient glow */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80%",
                    height: "120px",
                    background: `radial-gradient(ellipse, ${item.accentColor}25 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Card Container Layout */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    zIndex: 2,
                  }}
                >
                  {/* Top Bar: Badges */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      {/* Category Pill */}
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "6px 13px",
                          borderRadius: "99px",
                          fontSize: "11px",
                          fontWeight: 800,
                          letterSpacing: "0.06em",
                          background: "rgba(8, 3, 20, 0.88)",
                          backdropFilter: "blur(14px)",
                          WebkitBackdropFilter: "blur(14px)",
                          border: `1px solid ${item.accentColor}50`,
                          color: item.accentColor,
                          fontFamily: "Outfit, sans-serif",
                          boxShadow: "0 4px 14px rgba(0,0,0,0.5)",
                        }}
                      >
                        <Icon size={12} />
                        {item.category.toUpperCase()}
                      </span>

                      {/* Live Link Indicator Pill */}
                      {item.url && (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "6px 12px",
                            borderRadius: "99px",
                            fontSize: "11px",
                            fontWeight: 600,
                            background: "rgba(8, 3, 20, 0.88)",
                            backdropFilter: "blur(14px)",
                            WebkitBackdropFilter: "blur(14px)",
                            border: "1px solid rgba(255, 255, 255, 0.16)",
                            color: "#ffffff",
                            fontFamily: "Outfit, sans-serif",
                            boxShadow: "0 4px 14px rgba(0,0,0,0.5)",
                          }}
                        >
                          <span
                            style={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              background: item.category === "Video" ? "#FF0000" : "#10B981",
                              boxShadow: item.category === "Video" ? "0 0 8px #FF0000" : "0 0 8px #10B981",
                            }}
                          />
                          {item.category === "Video"
                            ? "YouTube"
                            : item.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "")}
                        </span>
                      )}
                    </div>

                    {item.featured && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          padding: "5px 11px",
                          borderRadius: "99px",
                          fontSize: "10px",
                          fontWeight: 800,
                          background: "linear-gradient(135deg, rgba(245,158,11,0.3), rgba(245,158,11,0.12))",
                          backdropFilter: "blur(14px)",
                          WebkitBackdropFilter: "blur(14px)",
                          border: "1px solid rgba(245,158,11,0.55)",
                          color: "#FBBF24",
                          fontFamily: "Outfit, sans-serif",
                          letterSpacing: "0.1em",
                          boxShadow: "0 4px 14px rgba(0,0,0,0.5)",
                        }}
                      >
                        <Sparkles size={11} /> FEATURED
                      </span>
                    )}
                  </div>

                  {/* Center Play Icon for Video cards */}
                  {item.category === "Video" && (
                    <div
                      style={{
                        alignSelf: "center",
                        width: "58px",
                        height: "58px",
                        borderRadius: "50%",
                        background: "rgba(255, 0, 0, 0.88)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 35px rgba(255, 0, 0, 0.6), 0 8px 24px rgba(0,0,0,0.7)",
                        border: "2px solid rgba(255, 255, 255, 0.4)",
                        pointerEvents: "none",
                      }}
                    >
                      <Play size={22} color="#ffffff" fill="#ffffff" style={{ marginLeft: "3px" }} />
                    </div>
                  )}

                  {/* Bottom: Dedicated Frosted Glass Content Deck */}
                  <div
                    style={{
                      background: "rgba(8, 3, 22, 0.88)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "18px",
                      padding: "18px 20px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)",
                    }}
                  >
                    {/* Title */}
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 800,
                        color: "#ffffff",
                        fontFamily: "Outfit, sans-serif",
                        marginBottom: "6px",
                        lineHeight: 1.25,
                        textShadow: "0 2px 6px rgba(0,0,0,0.9)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Short Description */}
                    <p
                      style={{
                        fontSize: "12.5px",
                        color: "rgba(255, 255, 255, 0.75)",
                        lineHeight: 1.55,
                        marginBottom: "14px",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Tags & Metric Stat Row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                        {item.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            style={{
                              padding: "4px 10px",
                              borderRadius: "6px",
                              fontSize: "11px",
                              fontWeight: 600,
                              background: "rgba(255, 255, 255, 0.08)",
                              border: "1px solid rgba(255, 255, 255, 0.12)",
                              color: "rgba(255, 255, 255, 0.9)",
                              fontFamily: "Outfit, sans-serif",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Stat badge */}
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          padding: "4px 10px",
                          borderRadius: "99px",
                          fontSize: "11px",
                          fontWeight: 700,
                          background: `${item.accentColor}20`,
                          border: `1px solid ${item.accentColor}55`,
                          color: item.accentColor,
                          fontFamily: "Outfit, sans-serif",
                          whiteSpace: "nowrap",
                        }}
                      >
                        ✦ {item.stat}
                      </span>
                    </div>

                    {/* Action Bar */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "12px",
                        paddingTop: "12px",
                        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                        fontSize: "12px",
                        fontWeight: 700,
                        fontFamily: "Outfit, sans-serif",
                      }}
                    >
                      <span
                        style={{
                          color: "#ffffff",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        View Details &amp; Preview
                        <ArrowRight
                          size={13}
                          className="card-arrow"
                          color={item.accentColor}
                          style={{ transition: "transform 0.25s ease" }}
                        />
                      </span>

                      {item.url && (
                        <span
                          style={{
                            fontSize: "11px",
                            color: "rgba(255,255,255,0.55)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          Open <ExternalLink size={11} />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Modal Preview Dialogue ── */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              background: "rgba(2, 1, 8, 0.88)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "680px",
                width: "100%",
                maxHeight: "92vh",
                overflowY: "auto",
                borderRadius: "28px",
                background: "#080416",
                border: `1px solid ${modal.accentColor}50`,
                boxShadow: `0 24px 70px rgba(0,0,0,0.85), 0 0 40px ${modal.accentColor}25`,
              }}
            >
              {/* Modal Image Frame */}
              <div
                style={{
                  height: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  background: "#04020a",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {modal.image ? (
                  <img
                    src={modal.image}
                    alt={modal.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: modal.category === "Video" ? "cover" : "contain",
                      padding: modal.category === "Video" ? "0" : "16px",
                    }}
                  />
                ) : (
                  (() => {
                    const Icon = modal.icon;
                    return <Icon size={90} color="rgba(255,255,255,0.25)" />;
                  })()
                )}

                {/* Interactive Play Button for Video in Modal */}
                {modal.category === "Video" && modal.url && (
                  <a
                    href={modal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      position: "absolute",
                      width: "68px",
                      height: "68px",
                      borderRadius: "50%",
                      background: "rgba(255, 0, 0, 0.92)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 35px rgba(255, 0, 0, 0.7), 0 8px 24px rgba(0,0,0,0.6)",
                      border: "2px solid rgba(255, 255, 255, 0.5)",
                      cursor: "pointer",
                      zIndex: 3,
                      transition: "transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                    }}
                  >
                    <Play size={26} color="#ffffff" fill="#ffffff" style={{ marginLeft: "4px" }} />
                  </a>
                )}

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "40%",
                    background: "linear-gradient(transparent, rgba(8,4,22,0.9))",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Modal Body */}
              <div style={{ padding: "32px 34px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 800,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: modal.accentColor,
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    {modal.category} Portfolio Piece
                  </span>

                  {modal.url && (
                    <span
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.6)",
                        fontFamily: "Outfit, sans-serif",
                      }}
                    >
                      {modal.url.replace(/^https?:\/\//, "")}
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontSize: "28px",
                    fontWeight: 900,
                    color: "#fff",
                    margin: "4px 0 14px",
                    fontFamily: "Outfit, sans-serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {modal.title}
                </h3>

                <p
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: 1.8,
                    marginBottom: "26px",
                  }}
                >
                  {modal.description}
                </p>

                {/* Call To Action Buttons */}
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                    marginBottom: "26px",
                  }}
                >
                  {modal.url && (
                    <a
                      href={modal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "12px 26px",
                        borderRadius: "99px",
                        fontSize: "13px",
                        fontWeight: 700,
                        background:
                          modal.category === "Video"
                            ? "linear-gradient(135deg, #FF0000, #B91C1C)"
                            : `linear-gradient(135deg, ${modal.accentColor}, #7B2FF7)`,
                        color: "#fff",
                        textDecoration: "none",
                        fontFamily: "Outfit, sans-serif",
                        boxShadow:
                          modal.category === "Video"
                            ? "0 0 25px rgba(255, 0, 0, 0.55)"
                            : `0 0 25px ${modal.accentColor}50`,
                        transition: "transform 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                      }}
                    >
                      {modal.category === "Video" ? (
                        <>
                          <Play size={14} fill="#ffffff" /> Watch on YouTube
                        </>
                      ) : modal.url.includes("facebook.com") ? (
                        <>
                          View on Facebook <ExternalLink size={14} />
                        </>
                      ) : (
                        <>
                          Visit Live Platform <ExternalLink size={14} />
                        </>
                      )}
                    </a>
                  )}

                  {/* Direct WhatsApp Project Inquiry */}
                  <a
                    href={`https://wa.me/94710594305?text=${encodeURIComponent(
                      `Hi INFAVOUR SOLUTIONS, I'm interested in discussing a project similar to ${modal.title}!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "12px 24px",
                      borderRadius: "99px",
                      fontSize: "13px",
                      fontWeight: 700,
                      background: "rgba(37, 211, 102, 0.14)",
                      border: "1px solid rgba(37, 211, 102, 0.45)",
                      color: "#25D366",
                      textDecoration: "none",
                      fontFamily: "Outfit, sans-serif",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(37, 211, 102, 0.24)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(37, 211, 102, 0.14)";
                    }}
                  >
                    <MessageCircle size={15} /> Inquire Similar Project
                  </a>
                </div>

                {/* Footer details: Stats & Tags */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "12px",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    paddingTop: "20px",
                  }}
                >
                  <span
                    style={{
                      padding: "8px 18px",
                      borderRadius: "99px",
                      fontSize: "12.5px",
                      fontWeight: 700,
                      background: `${modal.accentColor}18`,
                      border: `1px solid ${modal.accentColor}40`,
                      color: modal.accentColor,
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    ✦ {modal.stat}
                  </span>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {modal.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: "6px 14px",
                          borderRadius: "99px",
                          fontSize: "12px",
                          fontWeight: 600,
                          background: "rgba(255,255,255,0.07)",
                          color: "rgba(255,255,255,0.75)",
                          fontFamily: "Outfit, sans-serif",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setModal(null)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(10px)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.25s ease",
                  zIndex: 10,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.6)";
                }}
              >
                <X size={16} color="#ffffff" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
