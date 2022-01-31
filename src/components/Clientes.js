import React from "react";
import "./styles/Clientes.css";

const clientes = [
  {
    imgSrc: "https://i.ibb.co/pWfvtzN/logo-uemanet.png",
    linkUrl: "https://uemanet.uema.br",
    alt: "Núcleo de Tecnologias para Educação",
  },
  {
    imgSrc: "https://i.ibb.co/Nxftwvj/image.png",
    linkUrl: "https://www.uema.br",
    alt: "Universidade Estadual do Maranhão",
  },
  {
    imgSrc: "https://i.ibb.co/RzWBWgw/image.png",
    linkUrl: "https://redeproaprendiz.org.br",
    alt: "Rede Pró Aprendiz",
  },
  {
    imgSrc: "https://i.ibb.co/Fs5QpHS/image.png",
    linkUrl: "https://www.mosaicoelearning.it",
    alt: "Mosaico Elearning",
  },
  {
    imgSrc: "https://i.ibb.co/3RR9wMG/image.png",
    linkUrl: "https://www.lambdasolutions.net",
    alt: "Lambda Solutions",
  },
];

function Clientes() {
  return (
    <div className="clientes">
      <div className="clientes__content">
        <h4 className="clientes__content__subTxt">
          Clientes que creditam confiança
        </h4>
        <h2 className="clientes__content__title">Nossos clientes</h2>
        <div className="clientes__content__clientes">
          {clientes.map((item, key) => (
            <a href={item.linkUrl} key={key} target="_blank">
              <img
                src={item.imgSrc}
                alt={item.alt}
                className="clientes__content__clientes__img"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clientes;
