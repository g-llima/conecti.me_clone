import React from "react";
import "./styles/Lema.css";

function Lema() {
  return (
    <div className="lema">
      <div className="lema__content">
        <div className="lema__content__imgs">
          <img
            src="https://i.ibb.co/DrmfxdS/round.png"
            alt="#"
            className="lema__content__imgs__bgImg"
          />
        </div>
        <div className="lema__content__texts">
          <h4 className="lema__content__texts__subTxt">NOSSO LEMA</h4>
          <h2 className="lema__content__texts__title">
            Conectando pessoas e tecnologia
          </h2>
          <p className="lema__content__texts__desc">
            Temos como lema conectar pessoas e tecnologias de forma criativa e
            eficaz. Alinhado a isso, acreditamos que a educação é o principal
            pilar de uma sociedade moderna, por isso auxiliamos empresas e
            instituições a transformarem de forma efetiva o ensino e a
            aprendizagem de seu público.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lema;
