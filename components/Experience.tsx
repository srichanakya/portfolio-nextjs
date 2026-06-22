"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

function GoldmanSachsLogo() {
  return (
    <svg viewBox="0 0 110 36" width="90" height="28" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="13" fontFamily="sans-serif" fontSize="11" fontWeight="700" letterSpacing="1" fill="white">GOLDMAN</text>
      <text x="0" y="27" fontFamily="sans-serif" fontSize="11" fontWeight="700" letterSpacing="1" fill="white">SACHS</text>
    </svg>
  );
}

function AccentureLogo() {
  return (
    <svg viewBox="0 0 130 36" width="110" height="28" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 6 L14 18 L5 30" stroke="#A100FF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <text x="22" y="23" fontFamily="sans-serif" fontSize="14" fontWeight="400" fill="white">accenture</text>
    </svg>
  );
}

const experiences = [
  {
    company: "Goldman Sachs", role: "Software Engineer Analyst", period: "Sept 2024 – Present", location: "Texas, United States",
    color: "#2997ff", gradient: "linear-gradient(135deg, #2997ff, #34aadc)", logoBg: "linear-gradient(135deg, #0a2540, #0d3060)",
    description: "Engineered mission-critical payment infrastructure for the Orchestrator Payment Engine, processing 10,000+ real-time transactions per day across global financial markets.",
    highlights: [
      "Developed 5+ backend microservices for the Orchestrator Payment Engine from the ground up using Java Spring Boot, Camunda, Kafka, and AWS, enabling processing of 10,000+ real-time payment transactions per day.",
      "Implemented SWIFT and Fed payment gateways covering inbound/outbound message validation and routing across international and domestic rails, reducing transaction processing errors by 30%.",
      "Designed and enhanced Camunda/Zeebe workflows for payment routing, exception handling, and SLA-driven retries, improving payment success rate by 25% across multi-rail decision logic.",
      "Integrated Kafka-based event streams enabling sub-100ms latency asynchronous communication between 8+ upstream and downstream services, maintaining 99.9% SLA compliance.",
      "Owned and delivered the Reconciliation Service end-to-end (built from scratch), improving reconciliation accuracy by 40% and reducing manual intervention by operations teams.",
      "Managed the Alerting Service, implementing 15+ new alert rules, reducing mean time to detect (MTTD) incidents by 35% and improving overall system observability.",
      "Developing WIMP (Where Is My Payment), a centralized payment visibility service exposing standardized APIs and shared libraries consumed by upstream and downstream services to query real-time payment status, eliminating point-to-point integrations.",
      "Led regression and production validation across 3+ major releases, achieving zero critical post-deployment incidents over 6 consecutive release cycles.",
      "Reviewed 100+ merge requests, enforcing coding standards and best practices that reduced defect escape rate by 20% in production.",
    ],
    tech: ["Java", "Spring Boot", "Camunda", "Zeebe", "Kafka", "AWS", "SWIFT", "Fed Gateway", "RTP"], logo: "GS",
  },
  {
    company: "Accenture", role: "Associate Software Engineer", period: "Aug 2020 – Jun 2022", location: "Hyderabad, India",
    color: "#a100ff", gradient: "linear-gradient(135deg, #a100ff, #7b00cc)", logoBg: "linear-gradient(135deg, #1a0033, #0f001f)",
    client: "William Demant",
    description: "Embedded with William Demant engineering team, building high-performance backend infrastructure and automation tooling for a global hearing healthcare leader.",
    highlights: [
      "Developed a high-performance CRM web application for William Demant using Java and Spring Web Flux, handling real-time reactive data streams and improving application responsiveness for end users.",
      "Built an end-to-end automation testing tool for report management workflows, reducing manual QA effort by 60% and ensuring accuracy across 10+ report types and validation scenarios.",
      "Designed and deployed 3+ microservices to ingest, parse, and persist large-scale Excel datasets (500K+ rows) into relational databases, reducing data processing time by 50% compared to manual workflows.",
      "Established RESTful and event-driven communication protocols between microservices, ensuring reliable data flow and decoupled architecture across distributed services.",
      "Implemented CI/CD pipelines using Jenkins and GitLab CI, cutting deployment time by 40% and automating build, test, and release stages; enforced code quality via SonarQube, maintaining code coverage above 80%.",
    ],
    tech: ["Java", "Spring Web Flux", "Spring Boot", "Jenkins", "GitLab CI", "SonarQube", "REST APIs", "PostgreSQL"], logo: "ACC",
  },
];

function ExperienceCard({ exp, index, isMobile }: { exp: typeof experiences[0]; index: number; isMobile: boolean }) {
  
  return (
    <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: isMobile ? "28px 20px" : "48px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: exp.gradient }} />

      {/* Header */}
      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div style={{ height: 52, minWidth: 52, padding: "0 14px", borderRadius: 14, background: exp.logoBg, border: `1px solid ${exp.color}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {exp.logo === "GS" ? <GoldmanSachsLogo /> : <AccentureLogo />}
          </div>
          <div>
            <h3 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, letterSpacing: "-0.025em", color: "#f5f5f7", marginBottom: 4 }}>{exp.company}</h3>
            <div style={{ fontSize: 14, background: exp.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontWeight: 500 }}>{exp.role}</div>
            {"client" in exp && <div style={{ fontSize: 12, color: "#6e6e73", marginTop: 2 }}>Client: {(exp as any).client}</div>}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "#86868b" }}><Calendar size={12} />{exp.period}</span>
          <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "#86868b" }}><MapPin size={12} />{exp.location}</span>
        </div>
      </div>

      <p style={{ fontSize: isMobile ? 14 : 16, color: "#86868b", lineHeight: 1.65, marginBottom: 24 }}>{exp.description}</p>

      <ul style={{ listStyle: "none", marginBottom: 24, display: "flex", flexDirection: "column", gap: 10 }}>
        {exp.highlights.map((h, i) => (
          <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: exp.gradient, marginTop: 7, flexShrink: 0 }} />
            <span style={{ fontSize: isMobile ? 13 : 14, color: "#adadb8", lineHeight: 1.6 }}>{h}</span>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {exp.tech.map((t) => (
          <span key={t} style={{ background: `${exp.color}12`, border: `1px solid ${exp.color}25`, borderRadius: 980, padding: "4px 12px", fontSize: 12, fontWeight: 500, color: exp.color }}>{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check(); window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="experience" style={{ background: "linear-gradient(180deg, #000 0%, #040408 100%)", padding: isMobile ? "80px 20px" : "140px 24px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: isMobile ? 48 : 72 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5 }}>
            <span className="section-eyebrow">Experience</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ fontSize: isMobile ? "clamp(32px, 9vw, 48px)" : "clamp(36px, 6vw, 72px)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.05, color: "#f5f5f7", marginBottom: 16 }}>
            Where I&apos;ve{" "}
            <span style={{ background: "linear-gradient(135deg, #2997ff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>made an impact.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: 0.3, duration: 0.6 }}
            style={{ fontSize: isMobile ? 15 : 18, color: "#86868b" }}>Enterprise-grade engineering at industry-leading companies.</motion.p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {experiences.map((exp, i) => <ExperienceCard key={exp.company} exp={exp} index={i} isMobile={isMobile} />)}
        </div>
      </div>
    </section>
  );
}
