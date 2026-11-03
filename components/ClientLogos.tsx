"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ClientLogos() {
  return (
    <section
      style={{
        position: "relative",
        background: "#04020F",
        padding: "48px 24px",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "100px",
          background: "radial-gradient(ellipse, rgba(123, 47, 247, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.4)",
            fontFamily: "Outfit, sans-serif",
            marginBottom: "28px",
          }}
        >
          Trusted by High-Growth Businesses &amp; Enterprises
        </p>

        {/* Client badges grid */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "18px",
            flexWrap: "wrap",
          }}
        >
          {siteConfig.clients.map((client, idx) => (
            <motion.a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 22px",
                borderRadius: "99px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(12px)",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(123, 47, 247, 0.12)";
                el.style.borderColor = "rgba(123, 47, 247, 0.45)";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 8px 24px rgba(123, 47, 247, 0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255, 255, 255, 0.03)";
                el.style.borderColor = "rgba(255, 255, 255, 0.08)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: "13.5px",
                    fontWeight: 700,
                    color: "#ffffff",
                    fontFamily: "Outfit, sans-serif",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {client.name}
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    color: "rgba(255, 255, 255, 0.45)",
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  {client.category}
                </span>
              </div>
              <ExternalLink size={12} color="rgba(255,255,255,0.4)" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

