"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const features = [
  { title: "Backend Engineering", subtitle: "THE ENGINE UNDER THE HOOD.", description: "Architecting high-throughput services with Java and Spring Boot that handle millions of concurrent requests with sub-millisecond latency.", gradient: "linear-gradient(135deg, #2997ff, #34aadc)", bg: "rgba(41,151,255,0.05)", border: "rgba(41,151,255,0.15)", tags: ["Java 17+", "Spring Boot", "REST APIs", "JVM Optimization"] },
  { title: "Microservices Architecture", subtitle: "DISTRIBUTED. RESILIENT. SCALABLE.", description: "Designing loosely coupled microservices with event-driven communication, service mesh patterns, and fault-tolerant design principles.", gradient: "linear-gradient(135deg, #a78bfa, #ec4899)", bg: "rgba(167,139,250,0.05)", border: "rgba(167,139,250,0.15)", tags: ["Kafka", "Event-Driven", "Circuit Breakers", "Saga Pattern"] },
  { title: "Payment Systems", subtitle: "WHERE RELIABILITY IS NON-NEGOTIABLE.", description: "Engineering SEPA, RTP, and global payment orchestration systems at Goldman Sachs. Real-time processing pipelines trusted by enterprise financial institutions.", gradient: "linear-gradient(135deg, #34d399, #2997ff)", bg: "rgba(52,211,153,0.05)", border: "rgba(52,211,153,0.15)", tags: ["RTP Payments", "SEPA", "ISO 20022", "PCI Compliance"] },
  { title: "Cloud Infrastructure", subtitle: "BUILT FOR THE CLOUD ERA.", description: "Deploying containerized workloads across AWS with Docker, CI/CD pipelines, and infrastructure-as-code practices for zero-downtime deployments.", gradient: "linear-gradient(135deg, #f59e0b, #ef4444)", bg: "rgba(245,158,11,0.05)", border: "rgba(245,158,11,0.15)", tags: ["AWS", "Docker", "CI/CD", "Infrastructure as Code"] },
  { title: "High-Performance APIs", subtitle: "SPEED IS A FEATURE.", description: "Building fast, reliable REST APIs with Spring Boot. Optimizing database queries, implementing Redis caching, and profiling JVM performance.", gradient: "linear-gradient(135deg, #ec4899, #f59e0b)", bg: "rgba(236,72,153,0.05)", border: "rgba(236,72,153,0.15)", tags: ["REST APIs", "Redis Cache", "JVM Tuning", "Performance"] },
];

function FeatureCard({ feature, index, isMobile }: { feature: typeof features[0]; index: number; isMobile: boolean }) {
  
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ background: feature.bg, border: `1px solid ${feature.border}`, borderRadius: 20, padding: isMobile ? "28px 20px" : "40px 36px", position: "relative", overflow: "hidden" }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", background: feature.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: 12 }}>{feature.subtitle}</div>
      <h3 style={{ fontSize: isMobile ? 20 : 26, fontWeight: 700, letterSpacing: "-0.02em", color: "#f5f5f7", marginBottom: 12 }}>{feature.title}</h3>
      <p style={{ fontSize: isMobile ? 14 : 15, color: "#86868b", lineHeight: 1.65, marginBottom: 20 }}>{feature.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {feature.tags.map((tag) => (
          <span key={tag} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 980, padding: "4px 12px", fontSize: 11, fontWeight: 500, color: "#86868b" }}>{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Expertise() {
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check(); window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="expertise" style={{ background: "linear-gradient(180deg, #040408 0%, #000 100%)", padding: isMobile ? "80px 20px" : "140px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: isMobile ? 48 : 72 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5 }}>
            <span className="section-eyebrow">Expertise</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ fontSize: isMobile ? "clamp(32px, 9vw, 48px)" : "clamp(36px, 6vw, 72px)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.05, color: "#f5f5f7", marginBottom: 16 }}>
            Crafted for performance.
            <br />
            <span style={{ background: "linear-gradient(135deg, #2997ff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Built for scale.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: 0.3, duration: 0.6 }}
            style={{ fontSize: isMobile ? 15 : 18, color: "#86868b" }}>Five core disciplines that define my engineering practice.</motion.p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
          {features.map((f, i) => <FeatureCard key={f.title} feature={f} index={i} isMobile={isMobile} />)}
        </div>
      </div>
    </section>
  );
}
