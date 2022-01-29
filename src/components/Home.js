import React from "react";
import "./styles/Home.css";
import TypeWritter from "typewriter-effect";

function Pagestart() {
  return (
    <section id="home" className="pagestart">
      <span className="dot dot1"></span>
      <span className="dot dot2"></span>
      <span className="dot dot3"></span>
      <span className="dot dot4"></span>
      <span className="dot dot5"></span>
      <span className="dot dot6"></span>
      <div>
        <span className="circle"></span>
        <span className="square"></span>
        <span className="filledCircle"></span>
        <span className="thing"></span>
      </div>
      <div className="pagestart__content__imgWrapper">
        <img
          src="https://i.ibb.co/5Mts8cQ/pexels-alex-conchillos-3745234.jpg"
          alt="conecti.me"
          className="pagestart__content__imgWrapper__img"
        ></img>
      </div>
      <div className="pagestart__content">
        <div className="pagestart__texts">
          <h1 className="pagestart__texts__title">
            EAD com
            <TypeWritter
              options={{
                strings: ["excelência", "segurança", "qualidade", "confiança"],
                autoStart: true,
                loop: true,
                delay: 200,
              }}
            />
          </h1>
          <p className="pagestart__texts__desc">
            Conectamos você a seus alunos através de um mundo virtual intuitivo
            e dinâmico.
          </p>
          <button className="pagestart__texts__btn">Entre em contato</button>
        </div>
      </div>
    </section>
  );
}

export default Pagestart;
