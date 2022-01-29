import React from "react";
import "./styles/Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__content">
        <div className="portfolio__content__texts">
          <h4 className="portfolio__content__texts__subTxt">PORTFÓLIO</h4>
          <h2 className="portfolio__content__texts__title">
            Veja alguns de nossos trabalhos recentes
          </h2>
        </div>
        <div className="portfolio__content__grid">
          <a
            href="https://conecti.me/portfolio-item/moodle-brasil/"
            target="_blank"
          >
            <div className="portfolio__content__grid__item">
              <div className="portfolio__content__grid__item__img img1"></div>
              <div className="portfolio__content__grid__item__texts">
                <h4 className="portfolio__content__grid__item__texts__title">
                  Moodle Brasil
                </h4>
                <p className="portfolio__content__grid__item__texts__desc">
                  Clique e saiba mais
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://conecti.me/portfolio-item/app-mobile-fiep/"
            target="_blank"
          >
            <div className="portfolio__content__grid__item">
              <div className="portfolio__content__grid__item__img img2"></div>
              <div className="portfolio__content__grid__item__texts">
                <h4 className="portfolio__content__grid__item__texts__title">
                  App Mobile Fiep
                </h4>
                <p className="portfolio__content__grid__item__texts__desc">
                  Clique e saiba mais
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://conecti.me/portfolio-item/un-cce-learng/"
            target="_blank"
          >
            <div className="portfolio__content__grid__item">
              <div className="portfolio__content__grid__item__img img3"></div>
              <div className="portfolio__content__grid__item__texts">
                <h4 className="portfolio__content__grid__item__texts__title">
                  UN CC:e-Learn
                </h4>
                <p className="portfolio__content__grid__item__texts__desc">
                  Clique e saiba mais
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://conecti.me/portfolio-item/wiki-asus-it/"
            target="_blank"
          >
            <div className="portfolio__content__grid__item">
              <div className="portfolio__content__grid__item__img img4"></div>
              <div className="portfolio__content__grid__item__texts">
                <h4 className="portfolio__content__grid__item__texts__title">
                  Wiki Asus IT
                </h4>
                <p className="portfolio__content__grid__item__texts__desc">
                  Clique e saiba mais
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://conecti.me/portfolio-item/dab-pumps-learning/"
            target="_blank"
          >
            <div className="portfolio__content__grid__item">
              <div className="portfolio__content__grid__item__img img5"></div>
              <div className="portfolio__content__grid__item__texts">
                <h4 className="portfolio__content__grid__item__texts__title">
                  Dab Pumps Learning
                </h4>
                <p className="portfolio__content__grid__item__texts__desc">
                  Clique e saiba mais
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://conecti.me/portfolio-item/cursos-abertos/"
            target="_blank"
          >
            <div className="portfolio__content__grid__item">
              <div className="portfolio__content__grid__item__img img6"></div>
              <div className="portfolio__content__grid__item__texts">
                <h4 className="portfolio__content__grid__item__texts__title">
                  Cursos Abertos
                </h4>
                <p className="portfolio__content__grid__item__texts__desc">
                  Clique e saiba mais
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
