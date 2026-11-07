"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Check,
  Zap,
  Rocket,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Clock,
  Code2,
  Palette,
  Film,
  BookOpen,
  Gauge,
  Shield,
  PhoneCall,
  Laptop,
} from "lucide-react";
import { siteConfig } from "@/config/site";

type ServiceCategory = "web" | "design" | "video";

interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  icon: any;
  priceLKR: string;
  priceUSD: string;
  turnaround: string;
  featured?: boolean;
  accentColor: string;
  gradient: string;
  clientExample?: string;
  features: string[];
  ctaLabel: string;
  whatsappMessage: string;
}

const servicePricing: Record<
  ServiceCategory,
  {
    categoryTitle: string;
    description: string;
    plans: PricingPlan[];
  }
> = {
  web: {
    categoryTitle: "Web Development Packages",
    description:
      "Handcrafted with modern Next.js and Tailwind CSS. Ultra-fast, SEO-optimized, and engineered for customer conversions.",
    plans: [
      {
        id: "starter",
        name: "Starter Presence",
        tagline: "Ultra-fast, high-converting single-page presence for tutors, personal brands & single-service businesses.",
        icon: Zap,
        priceLKR: "Rs. 45,000",
        priceUSD: "$190",
        turnaround: "5–7 Days Delivery",
        featured: false,
        accentColor: "#38BDF8",
        gradient: "linear-gradient(135deg, rgba(56,189,248,0.15) 0%, rgba(14,7,32,0.85) 100%)",
        clientExample: "Ideal for Tuition Tutes, Consultancies & Local Services",
        features: [
          "1–3 Custom Modern Responsive Sections",
          "Ultra-Fast Next.js & Tailwind Architecture",
          "Direct WhatsApp & Call Lead Capture",
          "Contact Form with Instant Email Alerts",
          "Google Maps & Social Media Links",
          "On-Page SEO & Mobile Speed Tuning",
          "Free SSL & Custom Domain Setup",
          "30 Days Free Technical Support",
        ],
        ctaLabel: "Get Started Now",
        whatsappMessage:
          "Hi INFAVOUR SOLUTIONS! I'm interested in the Starter Presence Web Package (Rs. 45,000 / $190). Could you guide me through the next steps?",
      },
      {
        id: "growth",
        name: "Growth Business",
        badge: "MOST POPULAR • BEST ROI",
        tagline: "Complete multi-page digital powerhouse engineered for tour agencies, automotive detailing, clinics & growing brands.",
        icon: Rocket,
        priceLKR: "Rs. 95,000",
        priceUSD: "$390",
        turnaround: "10–14 Days Delivery",
        featured: true,
        accentColor: "#7B2FF7",
        gradient: "linear-gradient(135deg, rgba(123,47,247,0.25) 0%, rgba(0,198,255,0.15) 50%, rgba(14,7,32,0.92) 100%)",
        clientExample: "Engineered like CarVibes.lk & Ravi Tours & Travels",
        features: [
          "Up to 6–8 Custom Pages (Home, Services, Tours, Contact)",
          "Interactive Service Booking & Tour Inquiry Engine",
          "Custom Framer Motion UI & Glassmorphic Design",
          "Technical SEO & High-Res Social Share Cards",
          "Multi-Channel Floating WhatsApp Widget",
          "Google Analytics 4 & Meta Pixel Setup",
          "Lighthouse 90+ Speed Score Guaranteed",
          "60 Days Priority Maintenance & Video Handover",
        ],
        ctaLabel: "Launch Your Website",
        whatsappMessage:
          "Hi INFAVOUR SOLUTIONS! I want to launch my website with the Growth Business Package (Rs. 95,000 / $390). Let's discuss our project goals!",
      },
      {
        id: "enterprise",
        name: "E-Commerce & Web App",
        badge: "SCALABLE PLATFORM",
        tagline: "Full-scale custom digital platforms, web portals, e-commerce stores & live tracking logistics systems.",
        icon: ShieldCheck,
        priceLKR: "Rs. 195,000",
        priceUSD: "$790",
        turnaround: "3–4 Weeks Delivery",
        featured: false,
        accentColor: "#10B981",
        gradient: "linear-gradient(135deg, rgba(16,185,129,0.18) 0%, rgba(14,7,32,0.85) 100%)",
        clientExample: "Engineered like FreshLync & Custom Digital Portals",
        features: [
          "Full Custom Web Application Architecture",
          "Payment Gateway (PayHere, Stripe, Cards)",
          "Dynamic Product Catalog & Shopping Cart Flow",
          "Customer Accounts & Secure Role Dashboards",
          "Real-Time Data APIs & Live Tracking",
          "Automated Order Alerts via WhatsApp & Email",
          "Enterprise Database Security & Daily Backups",
          "90 Days VIP Dedicated SLA Maintenance",
        ],
        ctaLabel: "Build Scalable App",
        whatsappMessage:
          "Hi INFAVOUR SOLUTIONS! I'm planning an E-Commerce / Custom Web App project (Starting Rs. 195,000 / $790). I would love to schedule a technical consultation.",
      },
    ],
  },
  design: {
    categoryTitle: "Graphic Design & Branding Packages",
    description:
      "Stunning publications, educational covers, social creatives, and unified corporate identity systems that command respect.",
    plans: [
      {
        id: "social-kit",
        name: "Social Ad Creative Kit",
        tagline: "High-impact social media creatives designed to stop the scroll and drive targeted clicks.",
        icon: Palette,
        priceLKR: "Rs. 25,000",
        priceUSD: "$110",
        turnaround: "2–3 Days Delivery",
        featured: false,
        accentColor: "#EC4899",
        gradient: "linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(14,7,32,0.85) 100%)",
        clientExample: "High-Conversion Facebook & Instagram Ad Sets",
        features: [
          "8–10 Bespoke High-Resolution Ad Creatives",
          "Feed (1:1) and Story/Reel (9:16) Aspect Ratios",
          "Sales Psychology & Persuasive Headline Formatting",
          "Color Theory & High-Contrast Typography",
          "Export in Retina JPG, PNG & Source PSD/Figma",
          "3 Review & Revision Iterations",
          "Commercial Social Rights Included",
        ],
        ctaLabel: "Order Social Kit",
        whatsappMessage:
          "Hi INFAVOUR SOLUTIONS! I'm interested in the Social Ad Creative Kit (Rs. 25,000 / $110). Let's collaborate!",
      },
      {
        id: "book-cover",
        name: "Publication & Book/Tute Cover",
        badge: "VERIFIED PORTFOLIO STANDARD",
        tagline: "Prestigious book covers, tuition handbooks, and academic publications crafted with commercial-grade precision.",
        icon: BookOpen,
        priceLKR: "Rs. 45,000",
        priceUSD: "$190",
        turnaround: "4–6 Days Delivery",
        featured: true,
        accentColor: "#7B2FF7",
        gradient: "linear-gradient(135deg, rgba(123,47,247,0.25) 0%, rgba(236,72,153,0.15) 50%, rgba(14,7,32,0.92) 100%)",
        clientExample: "As crafted for Hashen De Silva (Combined Mathematics)",
        features: [
          "Complete Front, Spine & Back Cover Design",
          "Print-Ready 300+ DPI CMYK PDF with Bleed & Crop Marks",
          "Ultra-Realistic 3D Hardcover & Paperback Mockups",
          "Complex Technical / Mathematical Typography & Layouts",
          "Barcode & ISBN Precision Placement",
          "Social Launch Promo Graphics Included",
          "Unlimited Fine-Tuning Revisions Until Print Sign-off",
          "Full Commercial Intellectual Property Rights",
        ],
        ctaLabel: "Design Book Cover",
        whatsappMessage:
          "Hi INFAVOUR SOLUTIONS! I want to design a publication / book cover (Rs. 45,000 / $190) similar to the Hashen De Silva Combined Maths project.",
      },
      {
        id: "brand-identity",
        name: "Corporate Brand Identity",
        badge: "COMPLETE BRAND SYSTEM",
        tagline: "Comprehensive visual branding for startups and enterprises seeking authority and market distinction.",
        icon: Sparkles,
        priceLKR: "Rs. 85,000",
        priceUSD: "$350",
        turnaround: "7–10 Days Delivery",
        featured: false,
        accentColor: "#F59E0B",
        gradient: "linear-gradient(135deg, rgba(245,158,11,0.18) 0%, rgba(14,7,32,0.85) 100%)",
        clientExample: "Complete Brand Ecosystem & Guidelines",
        features: [
          "Primary Logo, Secondary Mark & App Icon / Favicon",
          "Complete Brand Guidelines (Color Hex, Fonts, Usage Rules)",
          "Stationery Suite: Business Cards, Letterhead & Invoices",
          "Social Media Kit: Profile Avatars & Cover Banners",
          "Master Vector Assets (AI, EPS, SVG, High-Res PNG)",
          "Packaging or Merch Concept Application",
          "Direct Consultation with Senior Creative Director",
          "100% Perpetual Copyright Ownership Handover",
        ],
        ctaLabel: "Build Brand Identity",
        whatsappMessage:
          "Hi INFAVOUR SOLUTIONS! I'm looking for a Corporate Brand Identity Suite (Rs. 85,000 / $350). Let's discuss our brand vision!",
      },
    ],
  },
  video: {
    categoryTitle: "Cinematic Video Production Packages",
    description:
      "Hook-driven YouTube vlogs, viral vertical reels, and 4K commercial films edited with broadcast-grade storytelling.",
    plans: [
      {
        id: "reels-pack",
        name: "Viral Shorts & Reels Bundle",
        tagline: "Short-form vertical video edits engineered for high watch-time on TikTok, Instagram, and YouTube Shorts.",
        icon: Film,
        priceLKR: "Rs. 35,000",
        priceUSD: "$150",
        turnaround: "3–5 Days Delivery",
        featured: false,
        accentColor: "#06B6D4",
        gradient: "linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(14,7,32,0.85) 100%)",
        clientExample: "High-Engagement Vertical Reel Series",
        features: [
          "4 High-Retention Edited Vertical Videos (Up to 60s each)",
          "Dynamic Kinetic Captions & Emoji Styling",
          "Fast-Paced Hook Editing & Sound Effects (SFX)",
          "Cinematic Color Grading & Audio Noise Removal",
          "Trending Music Alignment & Beat Syncing",
          "Exported in Crisp 1080x1920 60FPS",
          "2 Revision Rounds Included",
        ],
        ctaLabel: "Order Reels Pack",
        whatsappMessage:
          "Hi INFAVOUR SOLUTIONS! I'm interested in the Viral Shorts & Reels Bundle (Rs. 35,000 / $150).",
      },
      {
        id: "youtube-master",
        name: "YouTube Vlog Mastery",
        badge: "CREATOR FAVORITE",
        tagline: "Complete narrative editing, audio engineering, and high-CTR thumbnail creation for ambitious creators.",
        icon: Rocket,
        priceLKR: "Rs. 70,000",
        priceUSD: "$290",
        turnaround: "5–7 Days Delivery",
        featured: true,
        accentColor: "#7B2FF7",
        gradient: "linear-gradient(135deg, rgba(123,47,247,0.25) 0%, rgba(6,182,212,0.15) 50%, rgba(14,7,32,0.92) 100%)",
        clientExample: "As produced for Shabba & Kasu in UK (Travel & Lifestyle)",
        features: [
          "Up to 15–20 Minute Narrative Long-Form Edit",
          "Multi-Camera Sync & Audio Levelling",
          "Cinematic B-Roll Flow, Zoom Cuts & Pacing Control",
          "Custom Motion Graphics, Lower Thirds & End Screens",
          "1 High-CTR Custom YouTube Thumbnail Included",
          "Licensed Cinematic Background Music Tracks",
          "Full 4K UHD Master File Export",
          "Dedicated Video Editor Communication Channel",
        ],
        ctaLabel: "Edit YouTube Video",
        whatsappMessage:
          "Hi INFAVOUR SOLUTIONS! I want to produce YouTube videos (Rs. 70,000 / $290) like your work for Shabba & Kasu in UK.",
      },
      {
        id: "cinematic-commercial",
        name: "4K Brand Commercial",
        badge: "CINEMATIC MASTER",
        tagline: "Broadcast-quality corporate commercial film and product showcases that build immense brand trust.",
        icon: ShieldCheck,
        priceLKR: "Rs. 140,000",
        priceUSD: "$580",
        turnaround: "10–14 Days Delivery",
        featured: false,
        accentColor: "#8B5CF6",
        gradient: "linear-gradient(135deg, rgba(139,92,246,0.18) 0%, rgba(14,7,32,0.85) 100%)",
        clientExample: "High-End Corporate Showcases & Tourism Campaigns",
        features: [
          "Storyboard & Narrative Arc Consulting",
          "Advanced Log-to-Rec709 Cinematic Color Grading",
          "Professional Voiceover Audio Engineering & Mastering",
          "Complex 2D/3D Motion Titles & Brand Logo Animation",
          "16:9 Landscape 4K Master + 9:16 Vertical Cut Included",
          "Commercial Broadcasting & Perpetual Ad Rights",
          "Comprehensive Sound Design (Foley, Whooshes, Ambiance)",
          "VIP Priority Turnaround & Revision Support",
        ],
        ctaLabel: "Produce Commercial",
        whatsappMessage:
          "Hi INFAVOUR SOLUTIONS! I'm planning a 4K Brand Commercial project (Rs. 140,000 / $580). Let's schedule a creative kickoff.",
      },
    ],
  },
};

const guarantees = [
  {
    icon: Code2,
    title: "100% Handcrafted Code",
    desc: "Built with Next.js & React. Zero bloated templates, zero sluggish builders.",
  },
  {
    icon: Gauge,
    title: "90+ Lighthouse Speed",
    desc: "Lightning load times under 1.2s to maximize Google ranking and lead conversion.",
  },
  {
    icon: Shield,
    title: "Transparent & No Hidden Fees",
    desc: "Fixed milestone pricing with zero surprise charges or recurring agency lock-in.",
  },
  {
    icon: PhoneCall,
    title: "Direct Access to Engineers",
    desc: "Speak directly with senior developers and creative directors via WhatsApp and phone.",
  },
];

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("web");
  const [currency, setCurrency] = useState<"LKR" | "USD">("LKR");
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-80px" });

  const currentCategoryData = servicePricing[activeCategory];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "120px 24px 100px",
        overflow: "hidden",
        background: "#04020F",
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(123,47,247,0.14) 0%, rgba(0,198,255,0.06) 50%, transparent 75%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "36px" }}
        >
          {/* Eyebrow Pill */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              padding: "7px 18px",
              borderRadius: "99px",
              background: "rgba(123, 47, 247, 0.12)",
              border: "1px solid rgba(123, 47, 247, 0.35)",
              color: "#C084FC",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontFamily: "Outfit, sans-serif",
              marginBottom: "16px",
              boxShadow: "0 0 20px rgba(123,47,247,0.25)",
            }}
          >
            <Sparkles size={13} color="#C084FC" />
            Transparent Pricing &amp; High-ROI Packages
          </span>

          <h2
            style={{
              fontSize: "clamp(32px, 4.5vw, 54px)",
              fontWeight: 900,
              fontFamily: "Outfit, sans-serif",
              color: "#ffffff",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              margin: "0 0 16px",
            }}
          >
            Invest in Digital Assets that{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7B2FF7 0%, #00C6FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Generate Real Revenue
            </span>
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.65)",
              maxWidth: "680px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            {currentCategoryData.description}
          </p>

          {/* Controls Container: Service Tabs + Currency Switcher */}
          <div
            style={{
              marginTop: "32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "18px",
            }}
          >
            {/* Service Category Switcher Tabs */}
            <div
              style={{
                display: "inline-flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "8px",
                background: "rgba(14, 7, 32, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "16px",
                padding: "6px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
                backdropFilter: "blur(14px)",
              }}
            >
              <button
                onClick={() => setActiveCategory("web")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "9px 20px",
                  borderRadius: "12px",
                  fontSize: "13.5px",
                  fontWeight: 700,
                  cursor: "pointer",
                  border: "none",
                  fontFamily: "Outfit, sans-serif",
                  transition: "all 0.25s ease",
                  background:
                    activeCategory === "web"
                      ? "linear-gradient(135deg, #7B2FF7, #00C6FF)"
                      : "transparent",
                  color: activeCategory === "web" ? "#ffffff" : "rgba(255, 255, 255, 0.65)",
                  boxShadow:
                    activeCategory === "web"
                      ? "0 4px 15px rgba(123, 47, 247, 0.45)"
                      : "none",
                }}
              >
                <Laptop size={16} />
                Web Development
              </button>

              <button
                onClick={() => setActiveCategory("design")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "9px 20px",
                  borderRadius: "12px",
                  fontSize: "13.5px",
                  fontWeight: 700,
                  cursor: "pointer",
                  border: "none",
                  fontFamily: "Outfit, sans-serif",
                  transition: "all 0.25s ease",
                  background:
                    activeCategory === "design"
                      ? "linear-gradient(135deg, #7B2FF7, #00C6FF)"
                      : "transparent",
                  color: activeCategory === "design" ? "#ffffff" : "rgba(255, 255, 255, 0.65)",
                  boxShadow:
                    activeCategory === "design"
                      ? "0 4px 15px rgba(123, 47, 247, 0.45)"
                      : "none",
                }}
              >
                <Palette size={16} />
                Graphic Design &amp; Branding
              </button>

              <button
                onClick={() => setActiveCategory("video")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "9px 20px",
                  borderRadius: "12px",
                  fontSize: "13.5px",
                  fontWeight: 700,
                  cursor: "pointer",
                  border: "none",
                  fontFamily: "Outfit, sans-serif",
                  transition: "all 0.25s ease",
                  background:
                    activeCategory === "video"
                      ? "linear-gradient(135deg, #7B2FF7, #00C6FF)"
                      : "transparent",
                  color: activeCategory === "video" ? "#ffffff" : "rgba(255, 255, 255, 0.65)",
                  boxShadow:
                    activeCategory === "video"
                      ? "0 4px 15px rgba(123, 47, 247, 0.45)"
                      : "none",
                }}
              >
                <Film size={16} />
                Video Production &amp; Editing
              </button>
            </div>

            {/* Interactive Currency Switcher */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                background: "rgba(10, 5, 25, 0.75)",
                border: "1px solid rgba(255, 255, 255, 0.09)",
                borderRadius: "99px",
                padding: "4px",
                backdropFilter: "blur(14px)",
              }}
            >
              <button
                onClick={() => setCurrency("LKR")}
                style={{
                  padding: "6px 16px",
                  borderRadius: "99px",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                  border: "none",
                  fontFamily: "Outfit, sans-serif",
                  transition: "all 0.2s ease",
                  background:
                    currency === "LKR"
                      ? "rgba(123, 47, 247, 0.35)"
                      : "transparent",
                  color: currency === "LKR" ? "#ffffff" : "rgba(255, 255, 255, 0.55)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: currency === "LKR" ? "rgba(123, 47, 247, 0.6)" : "transparent",
                }}
              >
                🇱🇰 Sri Lanka (LKR)
              </button>
              <button
                onClick={() => setCurrency("USD")}
                style={{
                  padding: "6px 16px",
                  borderRadius: "99px",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                  border: "none",
                  fontFamily: "Outfit, sans-serif",
                  transition: "all 0.2s ease",
                  background:
                    currency === "USD"
                      ? "rgba(123, 47, 247, 0.35)"
                      : "transparent",
                  color: currency === "USD" ? "#ffffff" : "rgba(255, 255, 255, 0.55)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: currency === "USD" ? "rgba(123, 47, 247, 0.6)" : "transparent",
                }}
              >
                🌐 International (USD)
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="responsive-pricing-grid" key={activeCategory}>
          {currentCategoryData.plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = currency === "LKR" ? plan.priceLKR : plan.priceUSD;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{
                  position: "relative",
                  borderRadius: "24px",
                  background: "rgba(10, 5, 25, 0.88)",
                  border: plan.featured
                    ? "2px solid rgba(123, 47, 247, 0.75)"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "clamp(26px, 4vw, 36px) clamp(20px, 3.5vw, 30px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow: plan.featured
                    ? "0 20px 60px rgba(123, 47, 247, 0.28), 0 0 35px rgba(0, 198, 255, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                    : "0 14px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                  transform: plan.featured ? "scale(1.02)" : "scale(1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = plan.featured
                    ? "scale(1.035) translateY(-4px)"
                    : "scale(1.015) translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.borderColor = plan.accentColor;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = plan.featured
                    ? "scale(1.02)"
                    : "scale(1)";
                  (e.currentTarget as HTMLElement).style.borderColor = plan.featured
                    ? "rgba(123, 47, 247, 0.75)"
                    : "rgba(255, 255, 255, 0.1)";
                }}
              >
                {/* Floating "Most Popular" / "Creator Favorite" Badge */}
                {plan.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      padding: "6px 18px",
                      borderRadius: "99px",
                      fontSize: "11px",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      fontFamily: "Outfit, sans-serif",
                      background: "linear-gradient(135deg, #7B2FF7, #00C6FF)",
                      color: "#ffffff",
                      boxShadow: "0 6px 20px rgba(123, 47, 247, 0.6)",
                      whiteSpace: "nowrap",
                      zIndex: 3,
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Plan Header */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "18px",
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "14px",
                        background: `linear-gradient(135deg, ${plan.accentColor}25, rgba(255,255,255,0.03))`,
                        border: `1px solid ${plan.accentColor}55`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={24} color={plan.accentColor} />
                    </div>

                    {/* Delivery Time Badge */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "5px 12px",
                        borderRadius: "99px",
                        fontSize: "11px",
                        fontWeight: 600,
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "rgba(255,255,255,0.8)",
                        fontFamily: "Outfit, sans-serif",
                      }}
                    >
                      <Clock size={12} color={plan.accentColor} />
                      {plan.turnaround}
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      color: "#ffffff",
                      fontFamily: "Outfit, sans-serif",
                      margin: "0 0 8px",
                    }}
                  >
                    {plan.name}
                  </h3>

                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.6,
                      minHeight: "44px",
                      margin: "0 0 20px",
                    }}
                  >
                    {plan.tagline}
                  </p>

                  {/* Real Proof Tag */}
                  {plan.clientExample && (
                    <div
                      style={{
                        padding: "7px 12px",
                        borderRadius: "8px",
                        background: "rgba(255,255,255,0.04)",
                        borderLeft: `3px solid ${plan.accentColor}`,
                        fontSize: "11.5px",
                        color: "rgba(255,255,255,0.85)",
                        marginBottom: "24px",
                        fontFamily: "Outfit, sans-serif",
                      }}
                    >
                      <strong>Benchmark:</strong> {plan.clientExample}
                    </div>
                  )}

                  {/* Price Tag */}
                  <div
                    style={{
                      paddingBottom: "24px",
                      marginBottom: "24px",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                      <span
                        style={{
                          fontSize: "38px",
                          fontWeight: 900,
                          color: "#ffffff",
                          fontFamily: "Outfit, sans-serif",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {price}
                      </span>
                      <span
                        style={{
                          fontSize: "13px",
                          color: "rgba(255,255,255,0.5)",
                          fontWeight: 500,
                        }}
                      >
                        / package
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "11px",
                        color: plan.accentColor,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        display: "block",
                        marginTop: "4px",
                      }}
                    >
                      Milestone Invoicing • 100% IP Handover
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div style={{ marginBottom: "24px" }}>
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.45)",
                        fontFamily: "Outfit, sans-serif",
                        marginBottom: "12px",
                      }}
                    >
                      Deliverables Included:
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                      {plan.features.map((feature, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "9px",
                            fontSize: "13px",
                            color: "rgba(255,255,255,0.85)",
                            lineHeight: 1.45,
                          }}
                        >
                          <div
                            style={{
                              width: "17px",
                              height: "17px",
                              borderRadius: "50%",
                              background: `${plan.accentColor}25`,
                              border: `1px solid ${plan.accentColor}`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              marginTop: "2px",
                            }}
                          >
                            <Check size={10} color={plan.accentColor} strokeWidth={3} />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Button */}
                <a
                  href={`https://wa.me/94710594305?text=${encodeURIComponent(plan.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    width: "100%",
                    padding: "14px 24px",
                    borderRadius: "99px",
                    fontSize: "14px",
                    fontWeight: 700,
                    fontFamily: "Outfit, sans-serif",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    background: plan.featured
                      ? "linear-gradient(135deg, #7B2FF7, #00C6FF)"
                      : "rgba(255, 255, 255, 0.08)",
                    border: plan.featured
                      ? "1px solid rgba(255,255,255,0.3)"
                      : `1px solid ${plan.accentColor}55`,
                    color: "#ffffff",
                    boxShadow: plan.featured
                      ? "0 0 25px rgba(123, 47, 247, 0.45)"
                      : "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = plan.featured
                      ? "linear-gradient(135deg, #8B3FF7, #1ad4ff)"
                      : `${plan.accentColor}25`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = plan.featured
                      ? "linear-gradient(135deg, #7B2FF7, #00C6FF)"
                      : "rgba(255, 255, 255, 0.08)";
                  }}
                >
                  <MessageCircle size={16} />
                  <span>{plan.ctaLabel}</span>
                  <ArrowRight size={15} />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Solution Consultation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            borderRadius: "20px",
            background: "linear-gradient(135deg, rgba(123,47,247,0.18) 0%, rgba(14,7,32,0.9) 100%)",
            border: "1px solid rgba(123,47,247,0.4)",
            padding: "32px 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
            marginBottom: "56px",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <Sparkles size={16} color="#00C6FF" />
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#00C6FF",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                Custom Digital Ecosystems
              </span>
            </div>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 800,
                color: "#ffffff",
                fontFamily: "Outfit, sans-serif",
                margin: "0 0 6px",
              }}
            >
              Need a Custom Cross-Service Package or Retainer?
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.7)",
                maxWidth: "680px",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Combine web development, monthly branding graphics, and continuous video content under a unified
              agency retainer. Book a 20-minute discovery call directly with our leads.
            </p>
          </div>

          <a
            href={`https://wa.me/94710594305?text=${encodeURIComponent(
              "Hi INFAVOUR SOLUTIONS! I'm interested in a custom multi-service bundle (Web + Design + Video). Let's schedule a consultation."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 26px",
              borderRadius: "99px",
              fontSize: "13px",
              fontWeight: 700,
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#ffffff",
              textDecoration: "none",
              fontFamily: "Outfit, sans-serif",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
            }}
          >
            <span>Request Custom Scope</span>
            <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Guarantees & Quality Standard Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {guarantees.map((g, i) => {
            const GIcon = g.icon;
            return (
              <div
                key={i}
                style={{
                  padding: "22px 20px",
                  borderRadius: "16px",
                  background: "rgba(10, 5, 25, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.07)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(123, 47, 247, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "4px",
                  }}
                >
                  <GIcon size={18} color="#00C6FF" />
                </div>
                <h4
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#ffffff",
                    fontFamily: "Outfit, sans-serif",
                    margin: 0,
                  }}
                >
                  {g.title}
                </h4>
                <p
                  style={{
                    fontSize: "12.5px",
                    color: "rgba(255, 255, 255, 0.6)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {g.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
