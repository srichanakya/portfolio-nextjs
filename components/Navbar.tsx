"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Expertise", "Experience", "Projects", "Stack", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => { window.removeEventListener("resize", checkMobile); window.removeEventListener("scroll", onScroll); };
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: isMobile ? "0 20px" : "0 40px", height: 64,
          background: (scrolled || menuOpen) ? "rgba(0,0,0,0.92)" : "transparent",
          backdropFilter: (scrolled || menuOpen) ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          transition: "background 0.4s, backdrop-filter 0.4s",
        }}>
        <div
          style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em", color: "#f5f5f7", cursor: "pointer", zIndex: 101 }}
          onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          SY
        </div>

        {/* Desktop nav */}
        {!isMobile && (
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {links.map((link) => (
              <button key={link} onClick={() => scrollTo(link)}
                style={{ background: "none", border: "none", fontSize: 14, color: "#86868b", cursor: "pointer", fontFamily: "inherit", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#f5f5f7")}
                onMouseLeave={e => (e.currentTarget.style.color = "#86868b")}>
                {link}
              </button>
            ))}
            <motion.a href="/resume.pdf" target="_blank" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              style={{ background: "linear-gradient(135deg, #2997ff, #34aadc)", color: "#fff", padding: "8px 20px", borderRadius: 980, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              Resume
            </motion.a>
          </div>
        )}

        {/* Hamburger */}
        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, zIndex: 101, display: "flex", flexDirection: "column", gap: 5 }}>
            <span style={{ display: "block", width: 22, height: 2, background: "#f5f5f7", borderRadius: 2, transition: "transform 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ display: "block", width: 22, height: 2, background: "#f5f5f7", borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: "opacity 0.3s" }} />
            <span style={{ display: "block", width: 22, height: 2, background: "#f5f5f7", borderRadius: 2, transition: "transform 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        )}
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed", top: 64, left: 0, right: 0, zIndex: 99,
              background: "rgba(0,0,0,0.97)", backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              padding: "24px 20px 32px",
              display: "flex", flexDirection: "column", gap: 4,
            }}>
            {links.map((link) => (
              <button key={link} onClick={() => scrollTo(link)}
                style={{ background: "none", border: "none", fontSize: 20, color: "#f5f5f7", cursor: "pointer", fontFamily: "inherit", fontWeight: 500, padding: "12px 0", textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {link}
              </button>
            ))}
            <a href="/resume.pdf" target="_blank"
              style={{ display: "block", marginTop: 16, background: "linear-gradient(135deg, #2997ff, #34aadc)", color: "#fff", padding: "14px 20px", borderRadius: 12, fontSize: 16, fontWeight: 600, textDecoration: "none", textAlign: "center" }}>
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
