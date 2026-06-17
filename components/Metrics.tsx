"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter({ target, suffix = "", duration = 1800 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return <span>{count}{suffix}</span>;
}

const stats = [
  { value: 10, suffix: "M+", label: "Transactions Monthly", desc: "Payment volume processed globally", color: "#2997ff" },
  { value: 99, suffix: ".99%", label: "System Uptime", desc: "Mission-critical reliability", color: "#34d399" },
  { value: 70, suffix: "%", label: "Test Time Reduced", desc: "Via automated frameworks", color: "#a78bfa" },
  { value: 5, suffix: "+", label: "Years Engineering", desc: "Building systems at scale", color: "#f59e0b" },
];

export default function Metrics() {
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check(); window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="metrics" style={{ background: "linear-gradient(180deg, #000 0%, #040408 100%)", padding: isMobile ? "80px 20px" : "120px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: isMobile ? 48 : 64 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5 }}>
            <span className="section-eyebrow">Impact</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ fontSize: isMobile ? "clamp(32px, 9vw, 48px)" : "clamp(36px, 6vw, 72px)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.05, color: "#f5f5f7" }}>
            Numbers that{" "}
            <span style={{ background: "linear-gradient(135deg, #2997ff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>speak.</span>
          </motion.h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: isMobile ? 12 : 20 }}>
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: isMobile ? "24px 16px" : "36px 28px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }} />
              <div style={{ fontSize: isMobile ? "clamp(32px, 8vw, 44px)" : "clamp(40px, 5vw, 56px)", fontWeight: 700, letterSpacing: "-0.04em", color: stat.color, lineHeight: 1, marginBottom: 8 }}>
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ fontSize: isMobile ? 13 : 15, fontWeight: 600, color: "#f5f5f7", marginBottom: 6 }}>{stat.label}</div>
              <div style={{ fontSize: 12, color: "#6e6e73", lineHeight: 1.4 }}>{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
