import { Github, ExternalLink, Sparkles } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { projects } from "../data/projects.js";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-title">Selected Projects</h2>
        </Reveal>

        {projects.length === 0 ? (
          <Reveal delay={0.1} className="panel projects-empty">
            <Sparkles size={26} className="projects-empty-icon" aria-hidden="true" />
            <p>Projects are coming soon.</p>
            <span>
              
            </span>
          </Reveal>
        ) : (
          <div className="projects-grid">
            {projects.map((project, i) => (
              <Reveal key={project.name} delay={i * 0.1} className="panel project-card">
                <div className="project-preview" aria-hidden="true">
                  {project.image ? (
                    <img src={project.image} alt="" />
                  ) : (
                    <Sparkles size={24} />
                  )}
                </div>
                {project.category && <span className="tag project-category">{project.category}</span>}
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                {project.tech?.length > 0 && (
                  <ul className="project-tags">
                    {project.tech.map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
                {(project.github || project.demo) && (
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} className="btn btn-ghost btn-sm">
                        <Github size={15} aria-hidden="true" /> GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} className="btn btn-ghost btn-sm">
                        <ExternalLink size={15} aria-hidden="true" /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
