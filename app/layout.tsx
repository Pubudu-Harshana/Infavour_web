import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased noise-overlay">{children}</body>
    </html>
  );
}
