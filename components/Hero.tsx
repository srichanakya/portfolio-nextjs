"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "100px 24px 60px" : "120px 24px 80px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 600, height: 600, background: "radial-gradient(circle, rgba(41,151,255,0.08) 0%, transparent 65%)", filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 860, textAlign: "center", position: "relative", width: "100%" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-eyebrow">Software Developer Analyst · Goldman Sachs</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ fontSize: isMobile ? "clamp(42px, 12vw, 64px)" : "clamp(56px, 8vw, 96px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.02, color: "#f5f5f7", marginBottom: 24 }}>
          Engineering systems
          <br />
          <span style={{ background: "linear-gradient(135deg, #2997ff 0%, #a78bfa 50%, #ec4899 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            at scale.
          </span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontSize: isMobile ? 16 : 20, color: "#86868b", letterSpacing: "-0.02em", lineHeight: 1.6, maxWidth: 600, margin: "0 auto 40px" }}>
          Backend engineer building mission-critical payment infrastructure, distributed microservices, and high-throughput APIs that power global financial markets.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexDirection: isMobile ? "column" : "row", alignItems: "center" }}>
          <motion.button onClick={() => scrollTo("experience")} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            style={{ background: "linear-gradient(135deg, #2997ff, #34aadc)", color: "#fff", padding: isMobile ? "15px 0" : "16px 36px", width: isMobile ? "100%" : "auto", borderRadius: 980, fontSize: 17, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 0 40px rgba(41,151,255,0.3)" }}>
            View Experience
          </motion.button>
          <motion.button onClick={() => scrollTo("projects")} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            style={{ background: "rgba(255,255,255,0.07)", color: "#f5f5f7", padding: isMobile ? "15px 0" : "16px 36px", width: isMobile ? "100%" : "auto", borderRadius: 980, fontSize: 17, fontWeight: 600, border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer", fontFamily: "inherit" }}>
            See Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
