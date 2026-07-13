"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling when loader is active
    document.body.style.overflow = "hidden";

    // Set duration for the loading animation
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -40,
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "#04020F",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
          }}
        >
          {/* Radial Spotlight BG */}
          <div 
            style={{ 
              position: "absolute", 
              width: "600px", 
              height: "600px", 
              background: "radial-gradient(circle, rgba(123,47,247,0.18) 0%, transparent 65%)", 
              pointerEvents: "none", 
              zIndex: 0 
            }} 
          />

          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
            
            {/* Infinity Loop Container */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: "220px", height: "140px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <svg viewBox="0 0 200 150" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* Linear Gradient for Infinity stroke */}
                  <linearGradient id="infinityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#7B2FF7" />
                    <stop offset="35%" stop-color="#a855f7" />
                    <stop offset="70%" stop-color="#FF007A" />
                    <stop offset="100%" stop-color="#00C6FF" />
                  </linearGradient>
                  
                  {/* Glowing filter */}
                  <filter id="infinityGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="7" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Subdued Background Loop Path */}
                <path
                  d="M 100,75 C 130,25 180,25 180,75 C 180,125 130,125 100,75 C 70,25 20,25 20,75 C 20,125 70,125 100,75 Z"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.03)"
                  stroke-width="12"
                  stroke-linecap="round"
                />

                {/* Main Glowing Infinity Path */}
                <motion.path
                  d="M 100,75 C 130,25 180,25 180,75 C 180,125 130,125 100,75 C 70,25 20,25 20,75 C 20,125 70,125 100,75 Z"
                  fill="none"
                  stroke="url(#infinityGrad)"
                  stroke-width="8"
                  stroke-linecap="round"
                  filter="url(#infinityGlow)"
                  initial={{ strokeDasharray: "290 290", strokeDashoffset: 580 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.2,
                    ease: "linear"
                  }}
                />
                
                {/* Internal High-energy Laser Tracer */}
                <motion.path
                  d="M 100,75 C 130,25 180,25 180,75 C 180,125 130,125 100,75 C 70,25 20,25 20,75 C 20,125 70,125 100,75 Z"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  opacity="0.9"
                  initial={{ strokeDasharray: "70 510", strokeDashoffset: 580 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.2,
                    ease: "linear"
                  }}
                />
              </svg>
            </motion.div>

            {/* Glowing Brand typography */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", textAlign: "center" }}>
              <motion.h2
                initial={{ opacity: 0, y: 10, letterSpacing: "0.25em" }}
                animate={{ opacity: 1, y: 0, letterSpacing: "0.45em" }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "26px",
                  fontWeight: 900,
                  color: "#fff",
                  textTransform: "uppercase",
                  margin: 0,
                  paddingLeft: "0.45em", // Aligns the text perfectly with letter-spacing
                  background: "linear-gradient(135deg, #ffffff 40%, rgba(255,255,255,0.7) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                INFAVOUR
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.35, 0.9, 0.35] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#7B2FF7",
                  letterSpacing: "0.22em",
                  margin: 0,
                  textTransform: "uppercase"
                }}
              >
                Stitching Digital Space
              </motion.p>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
