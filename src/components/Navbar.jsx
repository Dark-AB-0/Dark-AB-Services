import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Github, MessageSquare } from "lucide-react";
import { navLinks } from "../data/nav.js";
import { brand, links } from "../data/business.js";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-inner container">
        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          <span className="navbar-brand-dot" aria-hidden="true" />
          {brand.name}
        </a>

        <nav className="navbar-links" aria-label="Principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a href={links.github} className="navbar-icon-btn" aria-label="GitHub">
            <Github size={18} aria-hidden="true" />
          </a>
          <a href={links.discord} className="navbar-icon-btn" aria-label="Discord">
            <MessageSquare size={18} aria-hidden="true" />
          </a>
          <a href={links.portfolio} className="btn btn-ghost btn-sm">
            My Portfolio
          </a>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <nav className="navbar-mobile-links" aria-label="Menú móvil">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="navbar-mobile-link" onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="navbar-mobile-actions">
              <a href={links.portfolio} className="btn btn-ghost" onClick={closeMenu}>
                My Portfolio
              </a>
              <a href={links.github} className="btn btn-ghost" onClick={closeMenu}>
                GitHub
              </a>
              <a href={links.discord} className="btn btn-primary" onClick={closeMenu}>
                Discord
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
