import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import StarCanvas from "./components/StarField";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The selected theme still applies for this session when storage is unavailable.
    }
  }, [theme]);

  return (
    <div className="portfolio-shell" data-theme={theme}>
      <Navbar theme={theme} onToggleTheme={() => setTheme((value) => value === "dark" ? "light" : "dark")} />
      <main>
        <Hero />
        <Skills theme={theme} />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <CursorGlow />
      <StarCanvas />
      <Analytics />
    </div>
  );
}
