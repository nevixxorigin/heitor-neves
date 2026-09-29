import { NAME, TAGLINE, PLATFORMS } from "../config/site.js";

// Largura relativa dos "clipes" da linha do tempo decorativa
const TRACK_A = [14, 9, 22, 11, 17, 8, 19];
const TRACK_B = [8, 18, 10, 24, 9, 15, 16];

function Track({ clips }) {
  return (
    <div className="timeline__track">
      {clips.map((w, i) => (
        <span key={i} className="timeline__clip" style={{ flexGrow: w }} />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <header className="container topbar">
        <img className="topbar__logo" src="/logo.png" alt={NAME} width="56" height="56" />
        <div className="topbar__id">
          <p className="hero__name">{NAME}</p>
          <p className="hero__role">EDITOR DE VÍDEO</p>
        </div>
      </header>

      <div className="container hero__inner">
        <h1 className="hero__title">{TAGLINE}</h1>
        <p className="hero__platforms">{PLATFORMS}</p>

        <a className="btn" href="#trabalhos">
          VER TRABALHOS <span aria-hidden="true">↓</span>
        </a>
      </div>

      <div className="timeline" aria-hidden="true">
        <Track clips={TRACK_A} />
        <Track clips={TRACK_B} />
        <span className="timeline__playhead" />
      </div>
    </section>
  );
}
