import React from "react";
import "./styles/Portfolio.css";

const port_items = [
  {
    name: "Moodle Brasil",
    link: "https://conecti.me/portfolio-item/moodle-brasil/",
  },
  {
    name: "App Mobile Fiep",
    link: "https://conecti.me/portfolio-item/app-mobile-fiep/",
  },
  {
    name: "UN CC:e-Learn",
    link: "https://conecti.me/portfolio-item/un-cce-learng/",
  },
  {
    name: "Wiki Asus IT",
    link: "https://conecti.me/portfolio-item/wiki-asus-it/",
  },
  {
    name: "Dab Pumps Learning",
    link: "https://conecti.me/portfolio-item/dab-pumps-learning/",
  },
  {
    name: "Cursos Abertos",
    link: "https://conecti.me/portfolio-item/cursos-abertos/",
  },
];

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__content">
        <div className="portfolio__content__texts">
          <h4 className="portfolio__content__texts__subTxt">PORTFÓLIO</h4>
          <h2 className="portfolio__content__texts__title">
            Veja alguns de nossos trabalhos recentes
          </h2>
        </div>
        <div className="portfolio__content__grid">
          {/* PORTFOLIO ITEMS */}
          {port_items.map((item, index) => (
            <a href={item.link} target="_blank" key={index}>
              <div className="portfolio__content__grid__item">
                {/* PORTFOLIO ITEMS IMGS (CSS BACKGROUND - PREVENT BUG) */}
                <div
                  className={`portfolio__content__grid__item__img img${
                    index + 1
                  }`}
                ></div>
                <div className="portfolio__content__grid__item__texts">
                  <h4 className="portfolio__content__grid__item__texts__title">
                    {item.name}
                  </h4>
                  <p className="portfolio__content__grid__item__texts__desc">
                    Clique e saiba mais
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
