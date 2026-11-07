"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Process & Billing",
    question: "How does your milestone payment structure work?",
    answer:
      "We operate with complete financial transparency. Standard web development and branding projects follow a 50% deposit to commence the architecture sprint, and the remaining 50% upon final milestone sign-off and deployment to your production domain. We accept local bank transfers (LKR) as well as international cards and wire transfers (USD).",
  },
  {
    category: "Ownership",
    question: "Who owns the website source code and design files?",
    answer:
      "You retain 100% intellectual property ownership. Upon project delivery, we transfer complete GitHub source code repositories, Figma design systems, brand guideline assets, and high-resolution export files directly to your organization. Zero agency lock-in.",
  },
  {
    category: "Hosting & Setup",
    question: "Do you handle domain registration, hosting, and business emails?",
    answer:
      "Yes! Every package includes turnkey deployment. We handle DNS routing, Cloudflare SSL encryption, global edge hosting on Vercel or AWS, and assist with configuring professional corporate business emails (Google Workspace, Zoho Mail, or Microsoft 365).",
  },
  {
    category: "Redesigns & Migration",
    question: "Can you redesign our existing website without hurting our SEO rankings?",
    answer:
      "Absolutely. We specialize in transforming sluggish WordPress, Wix, or legacy websites into modern, ultra-fast Next.js platforms. We conduct a full 301 redirect audit and meta-tag preservation to ensure your existing Google search rankings and domain authority are protected and accelerated.",
  },
  {
    category: "Timeline",
    question: "What is the typical turnaround time from start to launch?",
    answer:
      "Project timelines depend on the package scope: Starter Presence websites launch in 5–7 days; Growth Business multi-page platforms launch in 10–14 days; and Full-Stack E-Commerce or Custom Web Applications typically take 3–4 weeks with agile weekly progress reviews.",
  },
  {
    category: "Support",
    question: "What post-launch support and warranty do you provide?",
    answer:
      "Every project includes 30 to 90 days of complimentary technical warranty, bug-fix support, and performance monitoring. Following the warranty period, we offer flexible monthly maintenance retainers, CMS training videos, and on-demand feature sprint options.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-80px" });

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "120px 24px 100px",
        overflow: "hidden",
        background: "#060214",
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "350px",
          background: "radial-gradient(ellipse, rgba(123,47,247,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          {/* Eyebrow Pill */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              padding: "7px 18px",
              borderRadius: "99px",
              background: "rgba(123, 47, 247, 0.12)",
              border: "1px solid rgba(123, 47, 247, 0.35)",
              color: "#C084FC",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontFamily: "Outfit, sans-serif",
              marginBottom: "16px",
              boxShadow: "0 0 20px rgba(123,47,247,0.25)",
            }}
          >
            <HelpCircle size={14} color="#C084FC" />
            Frequently Asked Questions
          </span>

          <h2
            style={{
              fontSize: "clamp(32px, 4.5vw, 52px)",
              fontWeight: 900,
              fontFamily: "Outfit, sans-serif",
              color: "#ffffff",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              margin: "0 0 14px",
            }}
          >
            Got Questions?{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7B2FF7 0%, #00C6FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              We Have Answers.
            </span>
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.65)",
              maxWidth: "540px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Everything you need to know about partnering with Infavour, our delivery workflows, and technical standards.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "48px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                style={{
                  borderRadius: "18px",
                  background: isOpen
                    ? "linear-gradient(145deg, rgba(16, 8, 38, 0.95) 0%, rgba(9, 4, 24, 0.98) 100%)"
                    : "rgba(10, 5, 25, 0.7)",
                  border: isOpen ? "1px solid rgba(123, 47, 247, 0.5)" : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isOpen
                    ? "0 10px 30px rgba(123, 47, 247, 0.18), 0 4px 15px rgba(0,0,0,0.5)"
                    : "0 4px 12px rgba(0,0,0,0.3)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  overflow: "hidden",
                  transition: "border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "#ffffff",
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        padding: "3px 9px",
                        borderRadius: "6px",
                        background: isOpen ? "rgba(123, 47, 247, 0.25)" : "rgba(255, 255, 255, 0.06)",
                        color: isOpen ? "#C084FC" : "rgba(255, 255, 255, 0.5)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {faq.category}
                    </span>

                    <span
                      style={{
                        fontSize: "clamp(15px, 2.5vw, 17px)",
                        fontWeight: 700,
                        color: isOpen ? "#ffffff" : "rgba(255, 255, 255, 0.9)",
                        lineHeight: 1.4,
                      }}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: isOpen ? "rgba(123, 47, 247, 0.3)" : "rgba(255, 255, 255, 0.06)",
                      border: isOpen ? "1px solid rgba(123, 47, 247, 0.6)" : "1px solid rgba(255, 255, 255, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isOpen ? "#00C6FF" : "rgba(255, 255, 255, 0.6)",
                      flexShrink: 0,
                      transition: "all 0.25s ease",
                    }}
                  >
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div
                        style={{
                          padding: "0 24px 22px 24px",
                          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                          paddingTop: "14px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "14px",
                            color: "rgba(255, 255, 255, 0.72)",
                            lineHeight: 1.7,
                            margin: 0,
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Direct Inquiry Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            padding: "24px 28px",
            borderRadius: "18px",
            background: "linear-gradient(135deg, rgba(14, 7, 32, 0.9) 0%, rgba(6, 2, 18, 0.95) 100%)",
            border: "1px solid rgba(37, 211, 102, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "18px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "rgba(37, 211, 102, 0.15)",
                border: "1px solid rgba(37, 211, 102, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#25D366",
                flexShrink: 0,
              }}
            >
              <MessageCircle size={22} />
            </div>

            <div>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: 800,
                  color: "#ffffff",
                  fontFamily: "Outfit, sans-serif",
                  margin: "0 0 4px",
                }}
              >
                Have a specific question or custom requirement?
              </h4>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255, 255, 255, 0.65)",
                  margin: 0,
                }}
              >
                Chat directly with our Technical Director on WhatsApp for an immediate response.
              </p>
            </div>
          </div>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "11px 22px",
              borderRadius: "99px",
              background: "#25D366",
              color: "#04020F",
              fontSize: "13px",
              fontWeight: 800,
              textDecoration: "none",
              fontFamily: "Outfit, sans-serif",
              boxShadow: "0 0 20px rgba(37, 211, 102, 0.35)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            <span>Ask on WhatsApp</span>
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

