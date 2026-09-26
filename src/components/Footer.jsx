import { brand, links } from "../data/business.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{brand.name}</p>
          <p className="footer-focus">{brand.focus}</p>
        </div>

        <nav className="footer-links" aria-label="Enlaces">
          <a href={links.portfolio}>Portfolio</a>
          <a href={links.github}>GitHub</a>
          <a href={links.discord}>Discord</a>
          <a href={`mailto:${links.email}`}>Email</a>
        </nav>

        <p className="footer-copy">© {year} {brand.name}</p>
      </div>
    </footer>
  );
}
