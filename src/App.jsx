import { useEffect } from "react";
import Hero from "./components/Hero.jsx";
import WorkSection from "./components/WorkSection.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import { NAME, WHATSAPP_NUMBER } from "./config/site.js";

export default function App() {
  useEffect(() => {
    document.title = `${NAME} — Editor de Vídeo`;
    if (!/^\d{12,13}$/.test(WHATSAPP_NUMBER)) {
      console.warn("[portfólio] Confira WHATSAPP_NUMBER em src/config/site.js (ex.: 5533999999999).");
    }
  }, []);

  return (
    <>
      <main>
        <Hero />
        <WorkSection />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
