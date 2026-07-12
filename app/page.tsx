import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingHero from "@/components/landing/LandingHero";
import InfinityFlow from "@/components/InfinityFlow";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      style={{
        background: "#04020F",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* ── New Landing Navbar ── */}
      <LandingNavbar />

      {/* ── New Landing Hero (space bg + astronaut) ── */}
      <LandingHero />

      {/* ── Section Divider ── */}
      <div className="section-divider" />

      {/* ── Services / Infinity Flow ── */}
      <div style={{ background: "#04020F", position: "relative", zIndex: 1 }}>
        <InfinityFlow />
      </div>

      {/* ── Section Divider ── */}
      <div className="section-divider" />

      {/* ── Why Choose Us ── */}
      <div style={{ background: "#060214", position: "relative", zIndex: 1 }}>
        <WhyChooseUs />
      </div>

      {/* ── Section Divider ── */}
      <div className="section-divider" />

      {/* ── Portfolio ── */}
      <div style={{ background: "#04020F", position: "relative", zIndex: 1 }}>
        <Portfolio />
      </div>

      {/* ── Section Divider ── */}
      <div className="section-divider" />

      {/* ── Testimonials ── */}
      <div style={{ background: "#060214", position: "relative", zIndex: 1 }}>
        <Testimonials />
      </div>

      {/* ── Section Divider ── */}
      <div className="section-divider" />

      {/* ── Final CTA ── */}
      <div style={{ background: "#04020F", position: "relative", zIndex: 1 }}>
        <FinalCTA />
      </div>

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}
