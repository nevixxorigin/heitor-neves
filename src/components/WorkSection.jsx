import VideoCard from "./VideoCard.jsx";
import { projects } from "../data/projects.js";

export default function WorkSection() {
  return (
    <section className="section work" id="trabalhos">
      <div className="container">
        <header className="section__head">
          <h2 className="section__title">TRABALHOS SELECIONADOS</h2>
          <p className="section__sub">Alguns dos vídeos que já editei.</p>
        </header>

        <div className="work__grid">
          {projects.map((p) => (
            <VideoCard key={p.number} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
