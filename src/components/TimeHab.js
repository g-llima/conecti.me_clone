import React from "react";
import "./styles/TimeHab.css";
import CircularSlider from "./CircularSlider";

const habs = [
  {
    valueSlider: 93,
    title: "Visão de negócio",
    desc: "Tentamos sempre entender a proposta pedagócica do cliente para melhor alinhá-la às tecnologias.",
  },
  {
    valueSlider: 95,
    title: "Gestão ágil e eficaz",
    desc: "Utilizamos metodologias e processos de gestão e execução de projetos que nos permitem entregar projetos diferenciados sempre em tempo hábil.",
  },
];

function TimeHab() {
  return (
    <section className="timeHab">
      <div className="timeHab__content">
        <div className="timeHab__content__texts">
          <h4 className="timeHab__content__texts__subTxt">
            NOSSO TIME DE ARTISTAS
          </h4>
          <h2 className="timeHab__content__texts__title">
            Habilidades de negócio
          </h2>
          <p className="timeHab__content__texts__desc">
            Nós da conecti.me estamos conectados com as novidades do mercado e
            suas tendências.
          </p>
        </div>
        <div className="timeHab__content__habs">
          {/* ABILITIES ITEMS */}
          {habs.map((item, key) => (
            <div className="timeHab__content__habs__item" key={key}>
              <CircularSlider value={item.valueSlider} />
              <h3 className="timeHab__content__habs__item__title">
                {item.title}
              </h3>
              <p className="timeHab__content__habs__item__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimeHab;
