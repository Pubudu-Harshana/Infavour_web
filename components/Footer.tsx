"use client";

import React from "react";

const footerLinks = [
  {
    heading: "Services",
    links: [
      { label: "Web Development", href: "#services" },
      { label: "Graphic Design", href: "#services" },
      { label: "Video Editing", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "infavoursolutions@gmail.com", href: "mailto:infavoursolutions@gmail.com" },
      { label: "+94 71 059 4305", href: "https://wa.me/94710594305?text=Hi%20INFAVOUR%20SOLUTIONS,%20I'm%20interested%20in%20your%20services!" },
      { label: "Colombo, Sri Lanka", href: "#" },
    ],
  },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1JLFFksvLk/?mibextid=wwXIfr",
    svg: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/infavour_solutions",
    svg: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/110241827",
    svg: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:infavoursolutions@gmail.com",
    svg: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#060214", position: "relative", overflow: "hidden" }}>
      {/* Top glow divider */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(123,47,247,0.5), rgba(0,198,255,0.5), transparent)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px 40px" }}>
        {/* Top grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "40px", marginBottom: "72px" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ fontSize: "24px", fontWeight: 900, background: "linear-gradient(135deg,#7B2FF7,#00C6FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "Outfit, sans-serif" }}>∞</span>
              <span style={{ fontSize: "20px", fontWeight: 800, color: "#fff", fontFamily: "Outfit, sans-serif", letterSpacing: "0.08em" }}>INFAVOUR</span>
            </div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.38)", lineHeight: 1.75, maxWidth: "220px" }}>
              Infinite creativity. Premium digital solutions. Futuristic innovation — crafted for brands that demand more.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "10px", marginTop: "24px" }}>
              {socials.map(({ svg: IconSVG, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{ width: "34px", height: "34px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)", transition: "all 0.3s", textDecoration: "none" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(123,47,247,0.2)"; el.style.borderColor = "rgba(123,47,247,0.5)"; el.style.color = "#a78bfa"; el.style.boxShadow = "0 0 15px rgba(123,47,247,0.3)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.05)"; el.style.borderColor = "rgba(255,255,255,0.08)"; el.style.color = "rgba(255,255,255,0.4)"; el.style.boxShadow = "none"; }}
                >
                  <IconSVG style={{ fontSize: "15px" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map(({ heading, links }) => (
            <div key={heading}>
              <h4 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "20px", fontFamily: "Outfit, sans-serif" }}>
                {heading}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.3s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#a78bfa"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()}{" "}
            <span style={{ background: "linear-gradient(90deg,#7B2FF7,#00C6FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 600 }}>INFAVOUR SOLUTIONS</span>
            . All rights reserved.
          </p>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.18)" }}>
            Crafted with ∞ creativity in Sri Lanka 🇱🇰
          </p>
        </div>
      </div>
    </footer>
  );
}
