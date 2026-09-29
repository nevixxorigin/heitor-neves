import { whatsappLink } from "../config/site.js";

export default function Contact() {
  return (
    <section className="section contact" id="contato">
      <div className="container contact__inner">
        <h2 className="contact__title">TEM UM VÍDEO EM MENTE?</h2>
        <p className="contact__text">Vamos transformar sua ideia em conteúdo.</p>
        <a
          className="btn btn--solid btn--lg"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          FALAR NO WHATSAPP <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
