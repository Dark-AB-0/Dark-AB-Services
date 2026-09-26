import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Services from "./sections/Services.jsx";
import Solutions from "./sections/Solutions.jsx";
import Process from "./sections/Process.jsx";
import Projects from "./sections/Projects.jsx";
import Technologies from "./sections/Technologies.jsx";
import CTA from "./sections/CTA.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <Process />
        <Projects />
        <Technologies />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
