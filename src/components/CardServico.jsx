import React from "react";
import "./styles/CardServico.css";

function cardServico({ icon, title, desc, colorRGB }) {
  return (
    <div className="cardServico">
      <span
        className="cardServico__circle"
        style={{ backgroundColor: `rgba(${colorRGB}, 0.2)` }}
      ></span>
      <div className="cardServico__icon">
        <i
          className={`${icon} cardServicoIconComp`}
          style={{ color: `rgb(${colorRGB})` }}
        ></i>
      </div>
      <h4 className="cardServico__title">{title}</h4>
      <p className="cardServico__desc">{desc}</p>
    </div>
  );
}

export default cardServico;
