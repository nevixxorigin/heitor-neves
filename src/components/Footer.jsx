import { NAME, INSTAGRAM_URL, whatsappLink } from "../config/site.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{NAME}</p>
          <p className="footer__role">Editor de Vídeo</p>
        </div>
        <nav className="footer__links" aria-label="Contato">
          {INSTAGRAM_URL && (
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          )}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </nav>
        <p className="footer__copy">© 2026 {NAME}</p>
      </div>
    </footer>
  );
}
