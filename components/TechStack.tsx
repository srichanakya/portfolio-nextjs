"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const techs = [
  { name: "Java", icon: "J", color: "#f59e0b", desc: "Primary Language" },
  { name: "Spring Boot", icon: "S", color: "#34d399", desc: "Framework" },
  { name: "Apache Kafka", icon: "K", color: "#2997ff", desc: "Event Streaming" },
  { name: "MongoDB", icon: "M", color: "#34d399", desc: "NoSQL Database" },
  { name: "PostgreSQL", icon: "P", color: "#a78bfa", desc: "Relational DB" },
  { name: "AWS", icon: "A", color: "#f59e0b", desc: "Cloud Platform" },
  { name: "Docker", icon: "D", color: "#2997ff", desc: "Containerization" },
  { name: "Redis", icon: "R", color: "#ef4444", desc: "Caching Layer" },
  { name: "Git", icon: "G", color: "#f97316", desc: "Version Control" },
  { name: "TypeScript", icon: "T", color: "#2997ff", desc: "Frontend" },
  { name: "SQL", icon: "S", color: "#a78bfa", desc: "Query Language" },
  { name: "REST APIs", icon: "R", color: "#34d399", desc: "API Design" },
];

export default function TechStack() {
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check(); window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="stack" style={{ background: "linear-gradient(180deg, #040408 0%, #000 100%)", padding: isMobile ? "80px 20px" : "140px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: isMobile ? 48 : 72 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5 }}>
            <span className="section-eyebrow">Technical Stack</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ fontSize: isMobile ? "clamp(32px, 9vw, 48px)" : "clamp(36px, 6vw, 72px)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.05, color: "#f5f5f7", marginBottom: 16 }}>
            Tools of{" "}
            <span style={{ background: "linear-gradient(135deg, #2997ff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>precision engineering.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: 0.3 }}
            style={{ fontSize: isMobile ? 15 : 18, color: "#86868b" }}>Battle-tested technologies at enterprise scale.</motion.p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(160px, 1fr))", gap: isMobile ? 12 : 16 }}>
          {techs.map((tech, i) => (
            <motion.div key={tech.name} initial={{ opacity: 0, y: 30, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: isMobile ? "20px 12px" : "28px 20px", textAlign: "center" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `${tech.color}20`, border: `2px solid ${tech.color}40`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: 18, fontWeight: 800, color: tech.color }}>{tech.icon}</div>
              <div style={{ fontSize: isMobile ? 13 : 14, fontWeight: 600, color: "#f5f5f7", marginBottom: 4 }}>{tech.name}</div>
              <div style={{ fontSize: 11, color: "#6e6e73" }}>{tech.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
