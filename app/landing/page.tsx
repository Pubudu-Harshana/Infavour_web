"use client";

import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingHero from "@/components/landing/LandingHero";

export default function LandingPage() {
  return (
    <main
      style={{
        background: "#030011",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <LandingNavbar />
      <LandingHero />
    </main>
  );
}
