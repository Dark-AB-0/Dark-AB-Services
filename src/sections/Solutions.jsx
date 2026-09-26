import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { solutions } from "../data/solutions.js";
import "./Solutions.css";

export default function Solutions() {
  return (
    <section className="section solutions">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Solutions</span>
          <h2 className="section-title">¿Con qué puedo ayudarte?</h2>
        </Reveal>

        <div className="solutions-list">
          {solutions.map((item, i) => (
            <Reveal key={item.problem} delay={i * 0.08} className="solution-row">
              <p className="solution-problem">"{item.problem}"</p>
              <ArrowRight className="solution-arrow" size={20} aria-hidden="true" />
              <p className="solution-answer">{item.solution}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
