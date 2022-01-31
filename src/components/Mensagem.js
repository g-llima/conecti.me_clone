import React, { useState } from "react";
import "./styles/Mensagem.css";

function Mensagem() {
  const [submited, setSubmited] = useState(false);

  return (
    <div className="mensagem">
      <span className="dot dotF1"></span>
      <span className="dot dotF2"></span>
      <span className="dot dotF3"></span>
      <span className="dot dotF4"></span>
      <span className="dot dotF5"></span>
      <span className="dot dotF6"></span>
      <span className="dot dotF7"></span>
      <span className="dot dotF8"></span>

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
          <div className="mensagemForm3">
            <input
              type="text"
              placeholder="Nome completo *"
              name="nome"
              className="mensagem__content__form__input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Endereço de e-mail *"
              className="mensagem__content__form__input"
              required
            />
            <input
              type="number"
              name="telefone"
              placeholder="Número de telefone *"
              className="mensagem__content__form__input"
              required
            />
          </div>

          <div className="mensagemForm2">
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
              className="mensagem__content__form__input__textArea"
            />
            <input
              type={!submited ? "submit" : "button"}
              value={!submited ? "Enviar Mensagem" : "Mensagem Enviada"}
              className={`mensagem__content__form__submitBtn ${
                submited ? "submited" : null
              }`}
            />
            <p className="mensagemForm2__txt">
              Responderemos sua mensagem o mais breve possível
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Mensagem;
