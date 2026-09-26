import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import { process } from "../data/process.js";
import "./Process.css";

export default function Process() {
  return (
    <section id="how-it-works" className="section process">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">How It Works</span>
          <h2 className="section-title">De la idea a la solución, en cuatro pasos.</h2>
        </Reveal>

        <div className="process-track">
          <div className="process-line" aria-hidden="true">
            <motion.div
              className="process-line-fill"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
          </div>

          <div className="process-steps">
            {process.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.12} className="process-step">
                <span className="process-number">{step.number}</span>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
