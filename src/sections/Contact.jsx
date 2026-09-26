import { useState } from "react";
import { Github, Mail, MessageSquare, Send } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { links } from "../data/business.js";
import "./Contact.css";

const channels = [
  {
    icon: Mail,
    name: "Email",
    description: "Cuéntame sobre tu proyecto.",
    cta: "Contact",
    href: `mailto:${links.email}`,
  },
  {
    icon: MessageSquare,
    name: "Discord",
    description: "Hablemos directamente.",
    cta: "Open Discord",
    href: links.discord,
  },
  {
    icon: Github,
    name: "GitHub",
    description: "Mira mi código y proyectos.",
    cta: "View GitHub",
    href: links.github,
  },
];

const initialForm = { name: "", email: "", projectType: "", budget: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Sin backend por ahora: se arma un correo prellenado como fallback.
    // Para conectar un backend o servicio de correo (por ejemplo Formspree,
    // Resend o un endpoint propio), reemplaza este bloque por algo como:
    //
    // await fetch("https://tu-endpoint.com/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });

    const subject = encodeURIComponent(`Nuevo proyecto: ${form.projectType || "Sin especificar"}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\nTipo de proyecto: ${form.projectType}\nPresupuesto: ${form.budget}\n\n${form.message}`
    );
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;

    setSent(true);
    setForm(initialForm);
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Hablemos de tu proyecto</h2>
          <p className="section-sub">
            Cada proyecto tiene necesidades distintas, así que la cotización depende
            del alcance y las características. Elige cómo prefieres contactarme.
          </p>
        </Reveal>

        <div className="contact-channels">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <Reveal key={channel.name} delay={i * 0.08} className="panel contact-channel">
                <Icon size={22} className="contact-channel-icon" aria-hidden="true" />
                <h3>{channel.name}</h3>
                <p>{channel.description}</p>
                <a href={channel.href} className="btn btn-ghost btn-sm">
                  {channel.cta}
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="panel contact-form-wrap">
          <h3 className="contact-form-title">O solicita una cotización</h3>
          <p className="contact-form-sub">
            Completa el formulario y se abrirá tu cliente de correo con los datos
            listos para enviar.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <label className="contact-field">
                <span>Name</span>
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
              </label>
              <label className="contact-field">
                <span>Email</span>
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </label>
            </div>

            <div className="contact-form-row">
              <label className="contact-field">
                <span>Project Type</span>
                <input
                  type="text"
                  name="projectType"
                  placeholder="Web, automatización, integración..."
                  value={form.projectType}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="contact-field">
                <span>Budget (opcional)</span>
                <input type="text" name="budget" value={form.budget} onChange={handleChange} />
              </label>
            </div>

            <label className="contact-field">
              <span>Message</span>
              <textarea name="message" rows={4} value={form.message} onChange={handleChange} required />
            </label>

            <button type="submit" className="btn btn-primary">
              <Send size={16} aria-hidden="true" /> Request a Quote
            </button>

            {sent && (
              <p className="contact-form-sent" role="status">
                Se abrió tu cliente de correo con el mensaje listo para enviar.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
