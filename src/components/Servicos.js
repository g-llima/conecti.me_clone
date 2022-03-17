import React from "react";
import "./styles/Servicos.css";
import CardServico from "./CardServico";

const cards = [
  {
    icon: "fa-solid fa-pen-ruler",
    title: "Customização",
    desc: "Customização dos ambientes que atendam às suas necessidades.",
    colorRGB: "253, 133, 88",
  },
  {
    icon: "fa-solid fa-screwdriver-wrench",
    title: "Desenvolvimento",
    desc: "Desenvolvimento de plugins e integrações entre sistemas.",
    colorRGB: "157, 151, 255",
  },
  {
    icon: "fa-solid fa-database",
    title: "Hospedagem",
    desc: "Hospedagem em cloud escalável.",
    colorRGB: "112, 180, 70",
  },
  {
    icon: "fa-solid fa-headset",
    title: "Suporte",
    desc: "Suporte especializado com profissionais experientes.",
    colorRGB: "250, 202, 106",
  },
];

function Servicos() {
  return (
    <section className="servicos">
      {/* LEFT SIDE RED FORM */}
      <span className="servicos__forma"></span>

      <div className="servicos__content">
        <div className="servicos__content__texts">
          <h4 className="servicos__content__texts__subTxt">
            ALGUNS DE NOSSOS SERVIÇOS
          </h4>
          <h2 className="servicos__content__texts__txt">
            Foque no seu negócio e deixe o resto conosco
          </h2>
        </div>
        <div className="servicos__content__cards">
          {/* CARDS ITEMS */}
          {cards.map((item, key) => (
            <CardServico
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              colorRGB={item.colorRGB}
              key={key}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicos;
