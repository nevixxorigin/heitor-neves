import { useEffect, useState } from "react";
import { whatsappLink } from "../config/site.js";

// Botão discreto, só no mobile. Aparece depois do hero e some quando
// a seção de contato (que já tem o botão grande) está na tela.
export default function FloatingWhatsApp() {
  const [pastHero, setPastHero] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const hero = document.getElementById("inicio");
    const contact = document.getElementById("contato");
    const observers = [];
    if (hero) {
      const io = new IntersectionObserver(([e]) => setPastHero(!e.isIntersecting), {
        threshold: 0.15,
      });
      io.observe(hero);
      observers.push(io);
    }
    if (contact) {
      const io = new IntersectionObserver(([e]) => setAtContact(e.isIntersecting), {
        threshold: 0.2,
      });
      io.observe(contact);
      observers.push(io);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const show = pastHero && !atContact;

  return (
    <a
      className={`fab ${show ? "is-shown" : ""}`}
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      tabIndex={show ? 0 : -1}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.7-5.2A8.5 8.5 0 1 1 21 11.5Z" />
        <path d="M9 9.5c.3 2.2 2.3 4.2 4.5 4.5l1.2-1.2-1.8-1-.8.6a3 3 0 0 1-1.6-1.6l.6-.8-1-1.8L9 9.5Z" />
      </svg>
    </a>
  );
}
