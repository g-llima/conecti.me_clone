import React from "react";
import "./styles/Sobre.css";

function Sobre() {
  return (
    <section className="sobre">
      <div className="sobre__content">
        <h4 className="sobre__content__title__subTxt">SOBRE A CONECTI.ME</h4>
        <div className="sobre__content__container">
          <div className="sobre__content__title">
            <h2 className="sobre__content__title__txt">
              Confiança e credibilidade internacional
            </h2>
          </div>
          <p className="sobre__content__desc">
            A Conecti.me é uma empresa de São Luís do Maranhão, com experiência
            na implantação, customização e evolução de Ambientes Virtuais de
            Aprendizagem no Brasil e no exterior, com projetos já realizados em
            parceria com empresas de diversos países como Canadá, Portugal,
            Itália e Índia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
