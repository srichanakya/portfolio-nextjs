"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Download, ArrowUpRight, Send } from "lucide-react";

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const links = [
  { label: "Email Me", href: "mailto:srichanakyayennana@gmail.com", icon: <Mail size={20} />, desc: "srichanakyayennana@gmail.com", color: "#2997ff" },
  { label: "LinkedIn", href: "https://linkedin.com/in/srichanakyayennana", icon: <LinkedInIcon />, desc: "linkedin.com/in/srichanakyayennana", color: "#0077b5" },
  { label: "GitHub", href: "https://github.com/srichanakyayennana", icon: <GithubIcon />, desc: "github.com/srichanakyayennana", color: "#f5f5f7" },
  { label: "Resume", href: "/resume.pdf", icon: <Download size={20} />, desc: "Download PDF", color: "#a78bfa" },
];

export default function Contact() {
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check(); window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="contact" style={{ background: "linear-gradient(180deg, #040408 0%, #000 100%)", padding: isMobile ? "80px 20px 100px" : "140px 24px 160px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: isMobile ? 48 : 64 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5 }}>
            <span className="section-eyebrow">Contact</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ fontSize: isMobile ? "clamp(32px, 9vw, 48px)" : "clamp(36px, 6vw, 72px)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.05, color: "#f5f5f7", marginBottom: 16 }}>
            Let&apos;s build{" "}
            <span style={{ background: "linear-gradient(135deg, #2997ff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>something great.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: 0.3 }}
            style={{ fontSize: isMobile ? 15 : 18, color: "#86868b", lineHeight: 1.6 }}>
            Open to senior backend engineering roles, payment systems, and distributed architecture challenges.
          </motion.p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: isMobile ? 12 : 16 }}>
          {links.map((link, i) => (
            <motion.a key={link.label} href={link.href} target={link.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{ display: "flex", alignItems: "center", gap: 16, padding: isMobile ? "18px 20px" : "24px 28px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, textDecoration: "none", transition: "border-color 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = `${link.color}40`)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: `${link.color}15`, border: `1px solid ${link.color}25`, display: "flex", alignItems: "center", justifyContent: "center", color: link.color, flexShrink: 0 }}>
                {link.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#f5f5f7", marginBottom: 3 }}>{link.label}</div>
                <div style={{ fontSize: 12, color: "#6e6e73", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{link.desc}</div>
              </div>
              <ArrowUpRight size={16} style={{ color: "#6e6e73", flexShrink: 0 }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
