import Reveal from "../components/Reveal.jsx";
import { links } from "../data/business.js";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="section cta">
      <div className="container">
        <Reveal className="cta-panel">
          <div className="glow cta-glow" aria-hidden="true" />
          <h2 className="cta-title">Have an idea?</h2>
          <p className="cta-sub">Let's turn it into something real.</p>
          <div className="cta-actions">
            <a href="#contact" className="btn btn-primary">
              Start a Project
            </a>
            <a href={links.portfolio} className="btn btn-ghost">
              View My Portfolio
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
