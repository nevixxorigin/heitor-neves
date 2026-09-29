import { services } from "../data/projects.js";

export default function Services() {
  return (
    <section className="section services" id="servicos">
      <div className="container">
        <h2 className="section__title">O QUE EU FAÇO</h2>
        <ul className="services__list">
          {services.map((s) => (
            <li key={s} className="services__item">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
