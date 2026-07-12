"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageCircle, Mail, MapPin, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "infavoursolutions@gmail.com", href: "mailto:infavoursolutions@gmail.com", color: "#7B2FF7" },
  { icon: MessageCircle, label: "WhatsApp", value: "+94 71 059 4305", href: "https://wa.me/94710594305?text=Hi%20INFAVOUR%20SOLUTIONS,%20I'm%20interested%20in%20your%20services!", color: "#25D366" },
  { icon: MapPin, label: "Location", value: "Colombo, Sri Lanka 🇱🇰", href: "#", color: "#a855f7" },
];

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section id="contact" style={{ position: "relative", padding: "140px 24px", overflow: "hidden", background: "#04020F" }}>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <img
          src="/Images/contact.webp"
          alt="Contact Background"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.65 }}
        />
        {/* Dark overlay for readability */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(4,2,15,0.65) 0%, rgba(4,2,15,0.35) 50%, rgba(4,2,15,0.75) 100%)" }} />
      </div>

      {/* Animated background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
        {/* Grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(123,47,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(123,47,247,0.04) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        {/* Central glow */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "700px", height: "400px", background: "radial-gradient(ellipse, rgba(123,47,247,0.12) 0%, rgba(0,198,255,0.06) 40%, transparent 70%)", filter: "blur(40px)" }} />
        {/* Orbit rings */}
        <div className="animate-spin-slow" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", borderRadius: "50%", border: "1px solid rgba(123,47,247,0.08)" }} />
        <div className="animate-spin-reverse" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "400px", height: "400px", borderRadius: "50%", border: "1px dashed rgba(0,198,255,0.07)" }} />
      </div>

      <div ref={ref} style={{ position: "relative", zIndex: 2, maxWidth: "1150px", margin: "0 auto" }}>
        {/* Label */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(90deg, transparent, rgba(123,47,247,0.7))" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#7B2FF7", fontFamily: "Outfit, sans-serif" }}>Ready to Launch?</span>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(270deg, transparent, rgba(0,198,255,0.7))" }} />
          </div>

          <h2 style={{ fontSize: "clamp(38px,6vw,60px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: "20px", fontFamily: "Outfit, sans-serif", letterSpacing: "-0.04em" }}>
            Let&apos;s Build Something{" "}
            <span style={{ background: "linear-gradient(135deg,#7B2FF7,#00C6FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Infinite
            </span>{" "}
            Together
          </h2>
        </motion.div>

        {/* 2-Column Content Layout */}
        <div className="contact-grid" style={{ display: "grid", gap: "40px", marginBottom: "72px" }}>
          
          {/* Left Column: Info Cards & CTA Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={inView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: "28px", justifyContent: "center" }}
          >
            <div>
              <p style={{ color: "rgba(255,255,255,0.48)", fontSize: "17.5px", lineHeight: 1.7, marginBottom: "28px", fontFamily: "Inter, sans-serif" }}>
                Your vision deserves more than a layout template. Connect with our engineering and design team to launch a premium digital product.
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
                      style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px 24px", borderRadius: "18px", background: "rgba(255,255,255,0.03)", border: `1px solid ${info.color}25`, backdropFilter: "blur(20px)", textDecoration: "none", transition: "all 0.3s" }}
                      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${info.color}50`; el.style.boxShadow = `0 0 30px ${info.color}15`; el.style.background = `${info.color}06`; }}
                      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${info.color}25`; el.style.boxShadow = "none"; el.style.background = "rgba(255,255,255,0.03)"; }}
                    >
                      <div style={{ width: "42px", height: "42px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", background: `${info.color}18`, border: `1px solid ${info.color}30`, flexShrink: 0 }}>
                        <Icon size={18} color={info.color} />
                      </div>
                      <div>
                        <p style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", fontFamily: "Outfit, sans-serif", marginBottom: "3px", letterSpacing: "0.08em", textTransform: "uppercase" }}>{info.label}</p>
                        <p style={{ fontSize: "14.5px", fontWeight: 500, color: "#fff" }}>{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Button Stack */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="mailto:infavoursolutions@gmail.com"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 34px", borderRadius: "99px", fontWeight: 700, color: "#fff", fontFamily: "Outfit, sans-serif", fontSize: "15px", background: "linear-gradient(135deg,#7B2FF7,#00C6FF)", boxShadow: "0 0 40px rgba(123,47,247,0.5)", textDecoration: "none", transition: "all 0.3s", letterSpacing: "0.02em" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 60px rgba(123,47,247,0.7), 0 0 100px rgba(0,198,255,0.2)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.03) translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(123,47,247,0.5)"; (e.currentTarget as HTMLElement).style.transform = "scale(1) translateY(0)"; }}
              >
                Start a Project <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/94710594305?text=Hi%20INFAVOUR%20SOLUTIONS,%20I'm%20interested%20in%20your%20services!"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 34px", borderRadius: "99px", fontWeight: 600, color: "#25D366", fontFamily: "Outfit, sans-serif", fontSize: "15px", background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.45)", textDecoration: "none", transition: "all 0.3s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 35px rgba(37,211,102,0.45)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,211,102,0.75)"; (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.15)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,211,102,0.45)"; (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.08)"; }}
              >
                <MessageCircle size={18} /> Connect on WhatsApp
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.5 }} style={{ display: "flex", justifyContent: "center", gap: "0", flexWrap: "wrap", paddingTop: "40px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {[["50+", "Projects Delivered"], ["98%", "Client Satisfaction"], ["3×", "Avg. ROI Boost"], ["24/7", "Support Available"]].map(([value, label], i) => (
            <div key={label} style={{ textAlign: "center", padding: "0 40px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
              <p style={{ fontSize: "38px", fontWeight: 900, background: "linear-gradient(135deg,#7B2FF7,#00C6FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "Outfit, sans-serif" }}>{value}</p>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", marginTop: "4px", letterSpacing: "0.05em" }}>{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .contact-grid {
          grid-template-columns: 1fr 1.2fr;
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
  const [form, setForm] = useState({ name: "", email: "", service: "Web Development", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setIsSubmitting(true);
    
    // Simulate submission loading
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);

      // Open prefilled mail client
      const subject = encodeURIComponent(`New Inquiry from ${form.name} - ${form.service}`);
      const body = encodeURIComponent(`Project Inquiry:\n\nName: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\nMessage/Requirements:\n${form.message}`);
      window.location.href = `mailto:infavoursolutions@gmail.com?subject=${subject}&body=${body}`;

      // Reset
      setForm({ name: "", email: "", service: "Web Development", message: "" });
    }, 1500);
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255, 255, 255, 0.02)",
    border: "1px solid rgba(255, 255, 255, 0.06)",
    borderRadius: "14px",
    padding: "14px 18px",
    color: "#fff",
    fontSize: "14.5px",
    fontFamily: "Inter, sans-serif",
    outline: "none",
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    marginTop: "8px",
  };

  const focusInput = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "#7B2FF7";
    e.currentTarget.style.boxShadow = "0 0 20px rgba(123,47,247,0.15)";
    e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
  };

  const blurInput = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
  };

  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      borderRadius: "28px",
      padding: "40px",
      backdropFilter: "blur(24px)",
      boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Decorative Glow */}
      <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "120px", height: "120px", background: "radial-gradient(circle, rgba(123,47,247,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />

      {isSent ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ textAlign: "center", padding: "40px 0" }}
        >
          <div style={{ display: "inline-flex", width: "64px", height: "64px", borderRadius: "50%", background: "rgba(37,211,102,0.1)", border: "2px solid rgba(37,211,102,0.4)", color: "#25D366", alignItems: "center", justifyContent: "center", marginBottom: "24px", boxShadow: "0 0 20px rgba(37,211,102,0.2)" }}>
            <CheckCircle size={32} />
          </div>
          <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "12px", fontFamily: "Outfit, sans-serif" }}>Inquiry Pre-Filled! 🚀</h3>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14.5px", lineHeight: 1.6, maxWidth: "290px", margin: "0 auto 28px" }}>
            We pre-filled your mail application with all your details. Just hit send to launch it to us!
          </p>
          <button 
            onClick={() => setIsSent(false)}
            style={{ padding: "10px 24px", borderRadius: "99px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", cursor: "pointer", fontSize: "13px", fontWeight: 600, transition: "all 0.3s" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
          >
            Send Another Inquiry
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <label style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Your Name</label>
            <input 
              type="text" 
              placeholder="e.g. John Doe"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              onFocus={focusInput}
              onBlur={blurInput}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Email Address</label>
            <input 
              type="email" 
              placeholder="e.g. john@example.com"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onFocus={focusInput}
              onBlur={blurInput}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Service Required</label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              onFocus={focusInput}
              onBlur={blurInput}
              style={{ ...inputStyle, cursor: "pointer", paddingRight: "36px" }}
            >
              <option value="Web Development" style={{ background: "#060214", color: "#fff" }}>Web Development</option>
              <option value="Graphic Design" style={{ background: "#060214", color: "#fff" }}>Graphic Design</option>
              <option value="Video Editing" style={{ background: "#060214", color: "#fff" }}>Video Editing</option>
              <option value="Full Digital Package" style={{ background: "#060214", color: "#fff" }}>Full Digital Package</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Project Details</label>
            <textarea 
              rows={4}
              placeholder="Describe your vision, scope, and timeline..."
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
              marginTop: "10px",
              padding: "16px",
              borderRadius: "14px",
              background: "linear-gradient(135deg,#7B2FF7,#00C6FF)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "15px",
              fontFamily: "Outfit, sans-serif",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              transition: "all 0.3s",
              boxShadow: "0 0 30px rgba(123,47,247,0.3)"
            }}
            onMouseEnter={(e) => {
              if (isSubmitting) return;
              e.currentTarget.style.boxShadow = "0 0 45px rgba(123,47,247,0.6), 0 0 90px rgba(0,198,255,0.2)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 30px rgba(123,47,247,0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {isSubmitting ? (
              <span>Encrypting Transmission...</span>
            ) : (
              <>
                <span>Launch Inquiry</span>
                <Send size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
