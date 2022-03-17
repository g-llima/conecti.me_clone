import React from "react";
import "./styles/Lema.css";

const lemaIcons = [
  {
    img: "https://i.ibb.co/YkkJB4J/image.png",
    width: "22%",
    left: "",
    top: "",
  },
  {
    img: "https://i.ibb.co/jbg4b0D/image.png",
    width: "18%",
    left: "55%",
    top: "12%",
  },
  {
    img: "https://i.ibb.co/k9pvN3q/image.png",
    width: "12%",
    left: "88%",
    top: "20%",
  },
  {
    img: "https://i.ibb.co/r3DYTqk/image.png",
    width: "12%",
    left: "50%",
    top: "53%",
  },
  {
    img: "https://i.ibb.co/wgJC699/tech3.png",
    width: "20%",
    left: "75%",
    top: "65%",
  },
  {
    img: "https://i.ibb.co/12ST82W/image.png",
    width: "17%",
    left: "15%",
    top: "50%",
  },
  {
    img: "https://i.ibb.co/vQjBhSv/image.png",
    width: "10%",
    left: "15%",
    top: "83%",
  },
];

function Lema() {
  return (
    <div className="lema">
      <div className="lema__content">
        {/* CIRCLE WITH THE ICONS */}
        <div className="lema__content__imgs">
          <img
            src="https://i.ibb.co/DrmfxdS/round.png"
            alt="#"
            className="lema__content__imgs__bgImg"
          />
          <div className="lema__content__imgs__objects">
            {lemaIcons.map((item, index) => (
              <img
                key={index}
                src={item.img}
                alt={index}
                className="lema__content__imgs__objects__img"
                style={{ width: item.width, left: item.left, top: item.top }}
              />
            ))}
          </div>
        </div>

        {/* SECTION TEXTS */}
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

      {/* RIGHT SIDE BLUE FORM */}
      <div className="lema__circle"></div>
    </div>
  );
}

export default Lema;
