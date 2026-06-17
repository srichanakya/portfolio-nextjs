"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const projects = [
  { id: 1, title: "Payment Processing Platform", category: "FinTech Infrastructure", description: "Enterprise-grade real-time payment processing system handling millions of transactions daily. Built with fault-tolerant architecture and sub-100ms latency.", achievements: ["Processed 10M+ transactions monthly with 99.99% uptime", "Sub-100ms P95 latency across all payment types", "Integrated with 15+ banking APIs and payment networks"], tech: ["Java 17", "Spring Boot", "Kafka", "MongoDB", "AWS", "Docker"], color: "#2997ff", gradient: "linear-gradient(135deg, #2997ff, #34aadc)", featured: true },
  { id: 2, title: "Transaction Orchestrator", category: "Distributed Systems", description: "Intelligent payment orchestration engine with smart routing, automatic failover, and real-time reconciliation across distributed microservices.", achievements: ["Reduced payment failures by 94% via intelligent routing", "Orchestrates 50+ microservice interactions per transaction", "Real-time monitoring with custom dashboards"], tech: ["Java", "Spring Boot", "Kafka", "Redis", "PostgreSQL", "Docker"], color: "#a78bfa", gradient: "linear-gradient(135deg, #a78bfa, #ec4899)", featured: true },
  { id: 3, title: "Enterprise CRM Platform", category: "Enterprise Software", description: "Comprehensive CRM platform for William Demant hearing care network, managing thousands of clinics, patients, and hearing care professionals.", achievements: ["Serves 3000+ hearing care clinics globally", "40% reduction in data retrieval time", "100+ configurable automation rules"], tech: ["Java", "Spring Boot", "MongoDB", "Kafka", "TypeScript"], color: "#34d399", gradient: "linear-gradient(135deg, #34d399, #2997ff)", featured: false },
  { id: 4, title: "Automated Testing Framework", category: "Developer Tools", description: "Comprehensive test automation framework for microservices. Supports integration, contract, and performance testing with parallel execution.", achievements: ["70% reduction in manual regression testing time", "99% test reliability with flaky test detection", "Parallel execution across 20+ microservices"], tech: ["Java", "TestContainers", "JUnit 5", "Mockito", "WireMock"], color: "#f59e0b", gradient: "linear-gradient(135deg, #f59e0b, #ef4444)", featured: false },
];

const icons = ["#", "~", "@", "!"];

function ProjectCard({ project, index, isMobile }: { project: typeof projects[0]; index: number; isMobile: boolean }) {
  
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 24, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 80, background: project.gradient, opacity: 0.12, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 48, height: 48, borderRadius: 14, background: project.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: "#fff", opacity: 1 }}>{icons[index]}</div>
      </div>
      <div style={{ padding: isMobile ? "20px 16px 24px" : "28px 28px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, background: project.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{project.category}</span>
          {project.featured && <span style={{ background: `${project.color}15`, border: `1px solid ${project.color}30`, borderRadius: 980, padding: "2px 10px", fontSize: 10, fontWeight: 600, color: project.color }}>Featured</span>}
        </div>
        <h3 style={{ fontSize: isMobile ? 18 : 22, fontWeight: 700, letterSpacing: "-0.02em", color: "#f5f5f7", marginBottom: 10, lineHeight: 1.2 }}>{project.title}</h3>
        <p style={{ fontSize: 13, color: "#86868b", lineHeight: 1.6, marginBottom: 16, flex: 1 }}>{project.description}</p>
        <ul style={{ listStyle: "none", marginBottom: 16, display: "flex", flexDirection: "column", gap: 7 }}>
          {project.achievements.map((a, i) => (
            <li key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: project.gradient, marginTop: 7, flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: "#adadb8", lineHeight: 1.5 }}>{a}</span>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
          {project.tech.map((t) => (
            <span key={t} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 980, padding: "3px 10px", fontSize: 11, color: "#86868b" }}>{t}</span>
          ))}
        </div>
        <a href="https://github.com/srichanakyayennana" target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 980, fontSize: 13, fontWeight: 500, color: "#f5f5f7", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", width: "fit-content" }}>
          <GithubIcon /> GitHub
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check(); window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="projects" style={{ background: "linear-gradient(180deg, #000 0%, #040408 100%)", padding: isMobile ? "80px 20px" : "140px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: isMobile ? 48 : 72 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5 }}>
            <span className="section-eyebrow">Projects</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ fontSize: isMobile ? "clamp(32px, 9vw, 48px)" : "clamp(36px, 6vw, 72px)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.05, color: "#f5f5f7", marginBottom: 16 }}>
            Systems built to{" "}
            <span style={{ background: "linear-gradient(135deg, #2997ff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>last.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: 0.3, duration: 0.6 }}
            style={{ fontSize: isMobile ? 15 : 18, color: "#86868b" }}>Production-ready engineering across FinTech and enterprise domains.</motion.p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: isMobile ? 16 : 24 }}>
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} isMobile={isMobile} />)}
        </div>
      </div>
    </section>
  );
}
