import useInView from "../hooks/useInView.js";

// Aceita links de Shorts, watch?v= e youtu.be e devolve o ID do vídeo.
export function getYouTubeId(url) {
  const match = String(url).match(
    /(?:youtube\.com\/(?:shorts\/|embed\/|watch\?(?:.*&)?v=)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

export default function VideoCard({ project }) {
  const { number, title, description, youtubeUrl } = project;
  const id = getYouTubeId(youtubeUrl);

  // Revela o cartão ao entrar na tela; o embed só carrega perto da viewport.
  const [ref, revealed] = useInView({ threshold: 0.08 });
  const [loadRef, nearby] = useInView({ rootMargin: "400px 0px", threshold: 0 });

  const src = id
    ? `https://www.youtube-nocookie.com/embed/${id}?rel=0&playsinline=1&modestbranding=1`
    : null;

  return (
    <article ref={ref} className={`card ${revealed ? "is-visible" : ""}`}>
      <div className="card__meta">
        <span className="card__number">{number}</span>
        <h3 className="card__title">{title}</h3>
      </div>

      <div className="player" ref={loadRef}>
        {src && nearby ? (
          <iframe
            src={src}
            title={`Vídeo ${number} — ${title}`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="player__placeholder" aria-hidden="true" />
        )}
        {!id && <p className="player__error">Link de vídeo inválido em projects.js</p>}
      </div>

      <p className="card__desc">{description}</p>
    </article>
  );
}
