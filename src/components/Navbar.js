import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./styles/Navbar.css";

const headerItemsList = [
  {
    text: "Início",
    link: "#",
  },
  {
    text: "Trabalhos passados",
    link: "#portfolio",
  },
  {
    text: "Blog",
    link: "/",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowScroll, setWindowScroll] = useState(0);

  window.addEventListener("scroll", () => setWindowScroll(window.scrollY));
  window.addEventListener("resize", () => setIsMenuOpen(false));

  return (
    <header className={`navbar ${windowScroll >= 200 ? "scrolledNav" : null}`}>
      <div
        className={`navbar__content ${
          windowScroll >= 200 ? "scrolledNavContent" : null
        }`}
      >
        <div className="navbar__content__nav">
          {/* LOGO */}
          <img
            src="https://i.ibb.co/nDSvphj/logo-conectime.png"
            alt="conecti.me"
            className="navbar__content__nav__img"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* HEADER ITEMS */}
          <ul className="navbar__content__nav__items">
            {headerItemsList.map((item, index) => (
              <li className="navbar__content__nav__item" key={index}>
                <Link to={item.link} onClick={() => setIsMenuOpen(false)}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* HAMBURGER BUTTON */}
        <div className="navbarMenuIcon" onClick={() => setIsMenuOpen(true)}>
          <span className="lineNav"></span>
          <span className="lineNav"></span>
        </div>
      </div>

      {/* RIGHT SIDEBAR MENU */}
      <div className={`navbar__menu ${isMenuOpen ? "navbarOpen" : null}`}>
        <div className="navbar__menu__top">
          <a href="https://github.com/g-llima" target="_blank">
            <i
              className="fab fa-github navMenuGit"
              onClick={() => setIsMenuOpen(false)}
            ></i>
          </a>
          <i
            className="fas fa-times navMenuClose"
            onClick={() => setIsMenuOpen(false)}
          ></i>
        </div>

        {/* SIDEBAR MENU ITEMS */}
        <ul className="navbar__menu__items">
          {headerItemsList.map((item, index) => (
            <li className="navbar__menu__items__item" key={index}>
              <Link to={item.link} onClick={() => setIsMenuOpen(false)}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* SIDEBAR MENU INPUT */}
        <div className="navbar__menu__input">
          <label htmlFor="search" className="navbar__menu__input__title">
            Search
          </label>
          <input
            type="text"
            id="search"
            className="navbar__menu__input__field"
            placeholder="Digite uma palavra-chave"
          />
          <i
            className="fas fa-search navMenuSearch"
            onClick={() => setIsMenuOpen(false)}
          ></i>

          <p className="navbar__menu__input__copy">
            Conecti.me &copy; 2022. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
