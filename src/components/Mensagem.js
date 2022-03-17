import React, { useState } from "react";
import "./styles/Mensagem.css";

// FORM LEFT SIDE INPUTS
const msgForm = [
  {
    name: "nome",
    type: "text",
    placeholder: "Nome completo *",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Endereço de e-mail *",
  },
  {
    name: "telefone",
    type: "number",
    placeholder: "Número de telefone **",
  },
];
const colors = ["#f69977", "#9d97ff", "#9ed27d", "#faca6a"];

function Mensagem() {
  const [submited, setSubmited] = useState(false);

  return (
    <div className="mensagem">
      {/* GENERATE 8 DOTS */}
      {[
        [...Array(8)].map((x, i) => (
          <span
            className={`mensagem__dots`}
            key={i}
            style={{
              backgroundColor: colors[Math.floor(Math.random() * 4)],
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          ></span>
        )),
      ]}

      <div className="mensagem__content">
        <h4 className="mensagem__content__subTxt">VAMOS BATER UM PAPO</h4>
        <h2 className="mensagem__content__tile">Basta entrar em contato</h2>
        <form
          className="mensagem__content__form"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmited(true);
            e.target.reset();
          }}
        >
          {/* FORM LEFT SIDE */}
          <div className="mensagem__content__form__left">
            {msgForm.map((item, index) => (
              <input
                key={index}
                type={item.type}
                placeholder={item.placeholder}
                name={item.name}
                className="mensagem__content__form__left__input"
                required
              />
            ))}
          </div>

          {/* FORM RIGHT SIDE */}
          <div className="mensagem__content__form__right">
            <img
              src="https://i.ibb.co/30kC48z/envelope-89296.png"
              alt="#"
              className="envelopeForm"
            />
            <textarea
              type="text"
              name="motivo"
              rows="10"
              placeholder="Informe o motivo do seu contato"
              className="mensagem__content__form__right__input__textArea"
            />
            <input
              type={!submited ? "submit" : "button"}
              value={!submited ? "Enviar Mensagem" : "Mensagem Enviada"}
              className={`mensagem__content__form__right__submitBtn ${
                submited ? "submited" : null
              }`}
            />
            <p className="mensagem__content__form__right__txt">
              Responderemos sua mensagem o mais breve possível
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Mensagem;
