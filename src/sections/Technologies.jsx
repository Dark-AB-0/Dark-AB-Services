import { FileCode2, Braces, Code2, Palette } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { technologies } from "../data/technologies.js";
import "./Technologies.css";

const icons = { FileCode2, Braces, Code2, Palette };

export default function Technologies() {
  return (
    <section className="section technologies">
      <div className="container">
        <Reveal className="technologies-head">
          <span className="section-eyebrow">Technologies I Work With</span>
        </Reveal>

        <div className="technologies-row">
          {technologies.map((tech, i) => {
            const Icon = icons[tech.icon];
            return (
              <Reveal key={tech.name} delay={i * 0.06} className="technology-pill">
                <Icon size={17} aria-hidden="true" />
                {tech.name}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
