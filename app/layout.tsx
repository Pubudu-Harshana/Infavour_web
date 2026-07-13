import type { Metadata } from "next";
import localFont from "next/font/local";
import SmoothScroll from "../components/SmoothScroll";
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
  title: "INFAVOUR SOLUTIONS — Infinite Digital Experiences",
  description:
    "INFAVOUR SOLUTIONS is a premium digital media agency crafting infinite digital experiences through Web Development, Graphic Design, and Video Editing.",
  keywords: [
    "digital agency",
    "web development",
    "graphic design",
    "video editing",
    "INFAVOUR SOLUTIONS",
  ],
  openGraph: {
    title: "INFAVOUR SOLUTIONS — Infinite Digital Experiences",
    description:
      "Premium digital agency crafting infinite digital experiences.",
    type: "website",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${spectre.variable} ${data70.variable} antialiased noise-overlay`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
