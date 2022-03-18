import React, { useState } from "react";
import "./styles/Contato.css";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

mapboxgl.workerClass =
  // eslint-disable-next-line import/no-webpack-loader-syntax
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const mapboxAPI = process.env.REACT_APP_MAPAPI;

function Contato() {
  // MAPGL DATA
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 500,
    latitude: -30.059743711116457,
    longitude: -51.17178167686147,
    zoom: 15,
  });

  // INFO LIST
  const info = [
    {
      title: "E-mail",
      desc: "gabrielrtxon@gmail.com",
    },
    {
      title: "Endereço",
      desc: "Porto Alegre - RS",
    },
    {
      title: "Telefone",
      desc: "+ 55 (51) 96969-6969",
    },
  ];

  return (
    <section className="contato">
      <div className="contato__content">
        {/* MAP COMPONENT */}
        <ReactMapGL
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          mapboxApiAccessToken={mapboxAPI}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          className="contato__content__map"
        />

        <div className="contato__content__texts">
          <h4 className="contato__content__texts__subTxt">ENTRE EM CONTATO</h4>
          <h2 className="contato__content__texts__title">Brasil</h2>
          <ul className="contato__content__texts__data">
            {/* INFO ITEMS */}
            {info.map((item, key) => (
              <li className="contato__content__texts__data__item" key={key}>
                <p className="contato__content__texts__data__item__title">
                  {item.title}
                </p>
                <p className="contato__content__texts__data__item__desc">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT GREEN FORM */}
      <div className="contato__forma"></div>
    </section>
  );
}

export default Contato;
