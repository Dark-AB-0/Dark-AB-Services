import { motion } from "framer-motion";
import IdeaFlow from "../components/IdeaFlow.jsx";
import { links } from "../data/business.js";
import "./Hero.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="glow hero-glow-1" aria-hidden="true" />
      <div className="glow hero-glow-2" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-inner">
        <motion.div className="hero-text" variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="section-eyebrow">
            Dark AB — Digital Development Studio
          </motion.span>

          <motion.h1 variants={item} className="hero-title">
            Tu idea.
            <br />
            Convertida en algo real.
          </motion.h1>

          <motion.p variants={item} className="hero-description">
            Páginas web, automatización e integraciones digitales, construidas alrededor
            de lo que tú necesitas.
          </motion.p>

          <motion.div variants={item} className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Start a Project
            </a>
            <a href="#services" className="btn btn-ghost">
              View Services
            </a>
          </motion.div>

          <motion.a variants={item} href={links.portfolio} className="hero-portfolio-link">
            View my portfolio →
          </motion.a>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
        >
          <IdeaFlow />
        </motion.div>
      </div>
    </section>
  );
}
