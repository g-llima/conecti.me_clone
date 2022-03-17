import React from "react";
import "./styles/Hero.css";
import TypeWritter from "typewriter-effect";

const colors = ["#f69977", "#9d97ff", "#9ed27d", "#faca6a"];

function Hero() {
  return (
    <section className="hero" id="hero">
      {/* GENERATE 20 DOTS */}
      {[
        [...Array(20)].map((x, i) => (
          <span
            className={`hero__dots`}
            key={i}
            style={{
              backgroundColor: colors[Math.floor(Math.random() * 4)],
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          ></span>
        )),
      ]}

      {/* RANDOM SHAPES */}
      <div>
        <span className="hero__rshape circle"></span>
        <span className="hero__rshape filledCircle"></span>
        <span className="hero__rshape square"></span>
        <span className="hero__rshape thing"></span>
      </div>

      {/* CORNER IMG */}
      <div className="hero__imgWrapper">
        <img
          src="https://i.ibb.co/5Mts8cQ/pexels-alex-conchillos-3745234.jpg"
          alt="conecti.me"
          className="hero__imgWrapper__img"
        ></img>
      </div>

      <div className="hero__content">
        <div className="hero__texts">
          <h1 className="hero__texts__title">
            EAD com
            {/* TYPEWRITTER EFFECT */}
            <TypeWritter
              options={{
                strings: ["excelência", "segurança", "qualidade", "confiança"],
                autoStart: true,
                loop: true,
                delay: 200,
              }}
            />
          </h1>
          <p className="hero__texts__desc">
            Conectamos você a seus alunos através de um mundo virtual intuitivo
            e dinâmico.
          </p>
          <button className="hero__texts__btn">Entre em contato</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
