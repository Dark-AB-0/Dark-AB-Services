import { Globe, Cog, Plug } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { services } from "../data/services.js";
import "./Services.css";

const icons = { Globe, Cog, Plug };

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Services</span>
          <h2 className="section-title">What I Can Build</h2>
          <p className="section-sub">
            Tres áreas principales de trabajo. Cada proyecto se adapta a lo que
            realmente necesitas, no al revés.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={i * 0.1} className="panel service-card">
                <div className="service-icon">
                  <Icon size={26} aria-hidden="true" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-examples">
                  {service.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
