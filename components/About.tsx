"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="about" style={{ background: "linear-gradient(180deg, #000 0%, #040408 100%)", padding: isMobile ? "80px 20px" : "140px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 48 : 80, alignItems: "start" }}>
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="section-eyebrow">About</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ fontSize: isMobile ? "clamp(32px, 9vw, 48px)" : "clamp(36px, 5vw, 64px)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.05, color: "#f5f5f7", marginBottom: 24 }}>
              Built for the<br />
              <span style={{ background: "linear-gradient(135deg, #2997ff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>hardest problems.</span>
            </motion.h2>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }}
              style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {["I'm Sri Chanakya Yennana, a Software Developer Analyst at Goldman Sachs in Dallas, Texas. I build payment infrastructure that moves money across global financial markets.",
                "My work spans real-time payment processing (RTP), SEPA compliance, and distributed microservices — systems where reliability and correctness are non-negotiable.",
                "Before Goldman Sachs, I engineered enterprise CRM and backend systems at Accenture, embedded with William Demant — a global leader in hearing healthcare."
              ].map((text, i) => (
                <p key={i} style={{ fontSize: isMobile ? 15 : 17, color: "#86868b", lineHeight: 1.7 }}>{text}</p>
              ))}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { label: "Years Experience", value: "5+", color: "#2997ff" },
              { label: "Transactions / Month", value: "10M+", color: "#a78bfa" },
              { label: "System Uptime", value: "99.99%", color: "#34d399" },
              { label: "Microservices Built", value: "20+", color: "#f59e0b" },
            ].map((stat) => (
              <div key={stat.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: isMobile ? "20px 16px" : "28px 24px" }}>
                <div style={{ fontSize: isMobile ? "clamp(24px,7vw,36px)" : "clamp(28px,4vw,40px)", fontWeight: 700, letterSpacing: "-0.03em", color: stat.color, marginBottom: 6 }}>{stat.value}</div>
                <div style={{ fontSize: isMobile ? 12 : 13, color: "#6e6e73" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
