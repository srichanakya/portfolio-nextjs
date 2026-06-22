"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

function UTDLogo() {
  return (
    <svg viewBox="0 0 56 56" width="38" height="38" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="28" fill="#154734"/>
      <text x="28" y="22" fontFamily="Georgia, serif" fontSize="9.5" fontWeight="700" fill="#C75B12" textAnchor="middle" letterSpacing="0.5">THE</text>
      <text x="28" y="33" fontFamily="Georgia, serif" fontSize="8" fontWeight="700" fill="#fff" textAnchor="middle" letterSpacing="0.3">UNIVERSITY</text>
      <text x="28" y="42" fontFamily="Georgia, serif" fontSize="7.5" fontWeight="700" fill="#fff" textAnchor="middle" letterSpacing="0.2">OF TEXAS</text>
      <line x1="10" y1="24.5" x2="46" y2="24.5" stroke="#C75B12" strokeWidth="0.8"/>
    </svg>
  );
}

function GitamLogo() {
  return (
    <svg viewBox="0 0 56 56" width="38" height="38" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="28" fill="#003087"/>
      <text x="28" y="25" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="800" fill="#fff" textAnchor="middle" letterSpacing="1.5">GITAM</text>
      <line x1="10" y1="28.5" x2="46" y2="28.5" stroke="#FFD700" strokeWidth="1"/>
      <text x="28" y="39" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="500" fill="#aac4ff" textAnchor="middle" letterSpacing="0.3">DEEMED UNIVERSITY</text>
    </svg>
  );
}

const education = [
  {
    school: "The University of Texas at Dallas",
    degree: "Master of Science, Computer Science",
    period: "Aug 2022 – May 2024",
    location: "Texas, United States",
    gpa: "3.45 / 4.0",
    coursework: ["Database Design", "Machine Learning", "Algorithms", "Big Data Management & Analytics", "Web Programming"],
    color: "#2997ff",
    gradient: "linear-gradient(135deg, #2997ff, #34aadc)",
    logoBg: "linear-gradient(135deg, #0a2540, #0d3060)",
    short: "UTD",
  },
  {
    school: "GITAM Deemed University",
    degree: "Bachelor of Technology, Computer Science & Engineering",
    period: "Jun 2016 – Jun 2020",
    location: "Visakhapatnam, India",
    gpa: "8.81 / 10",
    coursework: ["Operating Systems", "OOP in Java", "Data Structures in C", "DBMS", "Compiler Design", "ML / AI"],
    color: "#a78bfa",
    gradient: "linear-gradient(135deg, #a78bfa, #ec4899)",
    logoBg: "linear-gradient(135deg, #1a0033, #0f001f)",
    short: "GU",
  },
];

export default function Education() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="education" style={{ background: "linear-gradient(180deg, #040408 0%, #000 100%)", padding: isMobile ? "80px 20px" : "140px 24px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: isMobile ? 48 : 72 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5 }}>
            <span className="section-eyebrow">Education</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ fontSize: isMobile ? "clamp(32px, 9vw, 48px)" : "clamp(36px, 6vw, 72px)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.05, color: "#f5f5f7", marginBottom: 16 }}>
            Built on a strong{" "}
            <span style={{ background: "linear-gradient(135deg, #2997ff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>foundation.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: 0.3, duration: 0.6 }}
            style={{ fontSize: isMobile ? 15 : 18, color: "#86868b" }}>Academic background in Computer Science across two continents.</motion.p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {education.map((edu, index) => (
            <motion.div key={edu.school}
              initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: isMobile ? "28px 20px" : "48px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: edu.gradient }} />

              <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: edu.logoBg, border: `1px solid ${edu.color}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
                    {edu.school.includes("Texas") ? <UTDLogo /> : <GitamLogo />}
                  </div>
                  <div>
                    <h3 style={{ fontSize: isMobile ? 18 : 24, fontWeight: 700, letterSpacing: "-0.025em", color: "#f5f5f7", marginBottom: 4 }}>{edu.school}</h3>
                    <div style={{ fontSize: 14, background: edu.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontWeight: 500 }}>{edu.degree}</div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, flexShrink: 0 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "#86868b" }}><Calendar size={12} />{edu.period}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "#86868b" }}><MapPin size={12} />{edu.location}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${edu.color}12`, border: `1px solid ${edu.color}25`, borderRadius: 980, padding: "4px 12px", fontSize: 12, fontWeight: 600, color: edu.color, width: "fit-content" }}>
                    GPA: {edu.gpa}
                  </span>
                </div>
              </div>

              <div>
                <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 10 }}>Coursework</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {edu.coursework.map((course) => (
                    <span key={course} style={{ background: `${edu.color}12`, border: `1px solid ${edu.color}25`, borderRadius: 980, padding: "4px 14px", fontSize: 12, fontWeight: 500, color: edu.color }}>{course}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
