import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Expertise from "../components/Expertise";
import Experience from "../components/Experience";
import Education from "../components/Education";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Metrics from "../components/Metrics";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main style={{ background: "#000", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Education />
      <Projects />
      <TechStack />
      <Metrics />
      <Contact />
    </main>
  );
}
