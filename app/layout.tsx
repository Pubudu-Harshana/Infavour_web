import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from "../components/SmoothScroll";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { siteConfig } from "../config/site";
import "./globals.css";

const spectre = localFont({
  src: "../public/fonts/spectre.woff2",
  variable: "--font-spectre",
  display: "swap",
});

const data70 = localFont({
  src: "../public/fonts/data70.woff2",
  variable: "--font-data70",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Infinite Digital Experiences`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "digital agency Sri Lanka",
    "web development Colombo",
    "luxury graphic design",
    "cinematic video editing",
    "Next.js agency",
    "brand identity design",
    "INFAVOUR SOLUTIONS",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: `${siteConfig.name} — Infinite Digital Experiences`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Creative Digital Agency`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Infinite Digital Experiences`,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/Images/logo.png`,
  image: `${siteConfig.url}/og-image.png`,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  sameAs: [
    "https://maps.google.com/maps?cid=0x44f677941e304a87:0x6bc026fc92c996af",
    siteConfig.socials.facebook,
    siteConfig.socials.instagram,
    siteConfig.socials.linkedin,
    siteConfig.socials.tiktok,
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "10",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spectre.variable} ${data70.variable} antialiased noise-overlay`}
      >
        <SmoothScroll>{children}</SmoothScroll>
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
