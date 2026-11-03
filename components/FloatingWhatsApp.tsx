"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            zIndex: 90,
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Quick Chat Pill */}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 18px 10px 14px",
              borderRadius: "99px",
              background: "rgba(10, 5, 24, 0.9)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(37, 211, 102, 0.4)",
              boxShadow:
                "0 12px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(37, 211, 102, 0.25)",
              color: "#fff",
              textDecoration: "none",
              fontFamily: "Outfit, sans-serif",
              transition: "all 0.25s ease",
              transform: hovered ? "translateY(-2px)" : "translateY(0)",
            }}
          >
            {/* WhatsApp Icon Circle with Pulse */}
            <div
              style={{
                position: "relative",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 15px rgba(37, 211, 102, 0.6)",
              }}
            >
              <MessageCircle size={20} color="#fff" />
              {/* Online pulse indicator */}
              <span
                style={{
                  position: "absolute",
                  top: "-1px",
                  right: "-1px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  border: "2px solid #0a0518",
                  boxShadow: "0 0 6px #22c55e",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 800,
                    color: "#ffffff",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Chat with us
                </span>
                <span
                  style={{
                    fontSize: "9px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    padding: "2px 6px",
                    borderRadius: "99px",
                    background: "rgba(34, 197, 94, 0.18)",
                    color: "#4ade80",
                    border: "1px solid rgba(34, 197, 94, 0.3)",
                  }}
                >
                  Online
                </span>
              </div>
              <span
                style={{
                  fontSize: "11px",
                  color: "rgba(255, 255, 255, 0.6)",
                  lineHeight: 1.2,
                }}
              >
                Instant Project Quote
              </span>
            </div>
          </a>

          {/* Dismiss button */}
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss WhatsApp pill"
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "rgba(255, 255, 255, 0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.2)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.1)";
              (e.currentTarget as HTMLElement).style.color = "rgba(255, 255, 255, 0.6)";
            }}
          >
            <X size={12} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

