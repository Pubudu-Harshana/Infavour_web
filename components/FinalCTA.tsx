"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageCircle, Mail, MapPin, Send, CheckCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    color: "#7B2FF7",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Direct",
    value: siteConfig.phoneFormatted,
    href: siteConfig.whatsappUrl,
    color: "#25D366",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: `${siteConfig.location} 🇱🇰`,
    href: "#",
    color: "#a855f7",
  },
];

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        padding: "140px 24px",
        overflow: "hidden",
        background: "#04020F",
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <img
          src="/Images/contact.webp"
          alt="Contact Background"
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

      {/* Animated background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(123,47,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(123,47,247,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "700px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(123,47,247,0.14) 0%, rgba(0,198,255,0.07) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="animate-spin-slow"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            border: "1px solid rgba(123,47,247,0.08)",
          }}
        />
      </div>

      <div
        ref={ref}
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                height: "1px",
                width: "60px",
                background: "linear-gradient(90deg, transparent, rgba(123,47,247,0.7))",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#7B2FF7",
                fontFamily: "Outfit, sans-serif",
              }}
            >
              Start Your Journey
            </span>
            <div
              style={{
                height: "1px",
                width: "60px",
                background: "linear-gradient(270deg, transparent, rgba(0,198,255,0.7))",
              }}
            />
          </div>

          <h2
            style={{
              fontSize: "clamp(38px,6vw,60px)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: "20px",
              fontFamily: "Outfit, sans-serif",
              letterSpacing: "-0.04em",
            }}
          >
            Let&apos;s Build Something{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#7B2FF7,#00C6FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Infinite
            </span>{" "}
            Together
          </h2>
        </motion.div>

        {/* 2-Column Content Layout */}
        <div
          className="contact-grid"
          style={{ display: "grid", gap: "48px", marginBottom: "72px" }}
        >
          {/* Left Column: Info Cards & WhatsApp action */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              justifyContent: "center",
            }}
          >
            <div>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "17.5px",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Whether launching a new digital platform, revamping brand identity, or scaling customer conversion, our engineering &amp; design team delivers world-class precision.
              </p>

              {/* Stacked Info Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        padding: "20px 24px",
                        borderRadius: "18px",
                        background: "rgba(10, 5, 24, 0.8)",
                        border: `1px solid ${info.color}35`,
                        backdropFilter: "blur(20px)",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = `${info.color}70`;
                        el.style.boxShadow = `0 0 30px ${info.color}25`;
                        el.style.background = `${info.color}14`;
                        el.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = `${info.color}35`;
                        el.style.boxShadow = "none";
                        el.style.background = "rgba(10, 5, 24, 0.8)";
                        el.style.transform = "translateX(0)";
                      }}
                    >
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: `${info.color}20`,
                          border: `1px solid ${info.color}45`,
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} color={info.color} />
                      </div>
                      <div>
                        <p
                          style={{
                            fontSize: "11px",
                            fontWeight: 700,
                            color: "rgba(255,255,255,0.45)",
                            fontFamily: "Outfit, sans-serif",
                            marginBottom: "3px",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}
                        >
                          {info.label}
                        </p>
                        <p style={{ fontSize: "15px", fontWeight: 600, color: "#fff" }}>
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Button Stack */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "16px 36px",
                  borderRadius: "99px",
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "15px",
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  boxShadow: "0 0 35px rgba(37,211,102,0.45)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.02) translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(37,211,102,0.65)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1) translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 35px rgba(37,211,102,0.45)";
                }}
              >
                <MessageCircle size={19} /> Chat on WhatsApp
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "16px 32px",
                  borderRadius: "99px",
                  fontWeight: 600,
                  color: "#fff",
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "15px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                }}
              >
                <Mail size={18} /> Send Direct Email
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0",
            flexWrap: "wrap",
            paddingTop: "40px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {[
            ["50+", "Projects Delivered"],
            ["98%", "Client Satisfaction"],
            ["3×", "Avg. ROI Boost"],
            ["24/7", "Dedicated Support"],
          ].map(([value, label], i) => (
            <div
              key={label}
              style={{
                textAlign: "center",
                padding: "12px 40px",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <p
                style={{
                  fontSize: "38px",
                  fontWeight: 900,
                  background: "linear-gradient(135deg,#7B2FF7,#00C6FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Outfit, sans-serif",
                  lineHeight: 1,
                }}
              >
                {value}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.45)",
                  marginTop: "6px",
                  letterSpacing: "0.05em",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .contact-grid {
          grid-template-columns: 1fr 1.25fr;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    budget: "$1.5k – $3k",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const budgetOptions = ["< $500", "$500 – $1.5k", "$1.5k – $3k", "$3k+"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "72ee69aa-e17b-4c50-8d1f-47ed3db25034",
          name: form.name,
          email: form.email,
          phone: form.phone || "Not specified",
          service: form.service,
          budget: form.budget,
          message: form.message,
          subject: `New Project Inquiry from ${form.name} [${form.service}] [${form.budget}]`,
          from_name: "INFAVOUR SOLUTIONS Portal",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSent(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "Web Development",
          budget: "$1.5k – $3k",
          message: "",
        });
      } else {
        alert("Transmission failed. Please connect directly via WhatsApp!");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please connect directly via WhatsApp!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(10, 5, 24, 0.8)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    borderRadius: "14px",
    padding: "14px 18px",
    color: "#fff",
    fontSize: "14.5px",
    fontFamily: "Inter, sans-serif",
    outline: "none",
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    marginTop: "8px",
  };

  const focusInput = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    e.currentTarget.style.borderColor = "#7B2FF7";
    e.currentTarget.style.boxShadow = "0 0 20px rgba(123,47,247,0.25)";
    e.currentTarget.style.background = "rgba(18, 9, 42, 0.9)";
  };

  const blurInput = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.background = "rgba(10, 5, 24, 0.8)";
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, rgba(14, 7, 32, 0.9) 0%, rgba(7, 3, 20, 0.96) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: "28px",
        padding: "36px",
        backdropFilter: "blur(24px)",
        boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "140px",
          height: "140px",
          background: "radial-gradient(circle, rgba(123,47,247,0.2) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {isSent ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ textAlign: "center", padding: "40px 0" }}
        >
          <div
            style={{
              display: "inline-flex",
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "rgba(37,211,102,0.15)",
              border: "2px solid rgba(37,211,102,0.5)",
              color: "#25D366",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "24px",
              boxShadow: "0 0 25px rgba(37,211,102,0.3)",
            }}
          >
            <CheckCircle size={32} />
          </div>
          <h3
            style={{
              fontSize: "24px",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "12px",
              fontFamily: "Outfit, sans-serif",
            }}
          >
            Inquiry Dispatched! 🚀
          </h3>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "14.5px",
              lineHeight: 1.6,
              maxWidth: "320px",
              margin: "0 auto 28px",
            }}
          >
            Thank you! Our technical lead will review your project scope and reply within 24 hours.
          </p>
          <button
            onClick={() => setIsSent(false)}
            style={{
              padding: "10px 26px",
              borderRadius: "99px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#fff",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 700,
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.16)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
          >
            Submit Another Project
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <div>
              <label
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.55)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                Your Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Sahan W."
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                onFocus={focusInput}
                onBlur={blurInput}
                style={inputStyle}
              />
            </div>

            <div>
              <label
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.55)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                Email Address *
              </label>
              <input
                type="email"
                placeholder="e.g. name@brand.com"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onFocus={focusInput}
                onBlur={blurInput}
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <div>
              <label
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.55)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                WhatsApp / Phone (Optional)
              </label>
              <input
                type="tel"
                placeholder="e.g. +94 77 123 4567"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                onFocus={focusInput}
                onBlur={blurInput}
                style={inputStyle}
              />
            </div>

            <div>
              <label
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.55)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                Service Category
              </label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                onFocus={focusInput}
                onBlur={blurInput}
                style={{ ...inputStyle, cursor: "pointer" }}
              >
                <option value="Web Development" style={{ background: "#060214", color: "#fff" }}>
                  Web Development
                </option>
                <option value="Graphic Design" style={{ background: "#060214", color: "#fff" }}>
                  Graphic &amp; Brand Design
                </option>
                <option value="Video Editing" style={{ background: "#060214", color: "#fff" }}>
                  Cinematic Video Editing
                </option>
                <option value="Full Digital Agency Suite" style={{ background: "#060214", color: "#fff" }}>
                  Full Digital Agency Suite
                </option>
              </select>
            </div>
          </div>

          {/* Budget Range Selector */}
          <div>
            <label
              style={{
                fontSize: "11px",
                fontWeight: 800,
                color: "rgba(255,255,255,0.55)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontFamily: "Outfit, sans-serif",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Estimated Project Budget
            </label>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {budgetOptions.map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setForm({ ...form, budget: opt })}
                  style={{
                    padding: "7px 16px",
                    borderRadius: "99px",
                    fontSize: "12px",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontFamily: "Outfit, sans-serif",
                    transition: "all 0.2s ease",
                    background:
                      form.budget === opt
                        ? "linear-gradient(135deg, #7B2FF7, #00C6FF)"
                        : "rgba(255,255,255,0.05)",
                    border:
                      form.budget === opt
                        ? "1px solid rgba(255,255,255,0.4)"
                        : "1px solid rgba(255,255,255,0.1)",
                    color: form.budget === opt ? "#fff" : "rgba(255,255,255,0.7)",
                    boxShadow: form.budget === opt ? "0 0 15px rgba(123,47,247,0.4)" : "none",
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              style={{
                fontSize: "11px",
                fontWeight: 800,
                color: "rgba(255,255,255,0.55)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontFamily: "Outfit, sans-serif",
              }}
            >
              Project Vision &amp; Goals *
            </label>
            <textarea
              rows={3}
              placeholder="Tell us what you want to achieve..."
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              onFocus={focusInput}
              onBlur={blurInput}
              style={{ ...inputStyle, resize: "none" }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              marginTop: "6px",
              padding: "16px",
              borderRadius: "14px",
              background: "linear-gradient(135deg,#7B2FF7,#00C6FF)",
              color: "#fff",
              fontWeight: 800,
              fontSize: "15px",
              fontFamily: "Outfit, sans-serif",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              transition: "all 0.3s",
              boxShadow: "0 0 30px rgba(123,47,247,0.4)",
            }}
            onMouseEnter={(e) => {
              if (isSubmitting) return;
              e.currentTarget.style.boxShadow =
                "0 0 50px rgba(123,47,247,0.7), 0 0 80px rgba(0,198,255,0.3)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 30px rgba(123,47,247,0.4)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {isSubmitting ? (
              <span>Encrypting Transmission...</span>
            ) : (
              <>
                <span>Launch Project Inquiry</span>
                <Send size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
