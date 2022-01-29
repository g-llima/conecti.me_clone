import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  window.addEventListener("resize", () => setIsMenuOpen(false));

  return (
    <header className="navbar">
      <div className="navbar__content">
        <div className="navbar__content__nav">
          <img
            src="https://i.ibb.co/nDSvphj/logo-conectime.png"
            alt="conecti.me"
            className="navbar__content__nav__img"
            onClick={() => setIsMenuOpen(false)}
          />
          <ul className="navbar__content__nav__items">
            <li className="navbar__content__nav__item">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Início
              </Link>
            </li>
            <li className="navbar__content__nav__item">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Trabalhos passados
              </Link>
            </li>
            <li className="navbar__content__nav__item">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <i
          className="fas fa-bars navbarMenuIcon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
      </div>

      <div className={`navbar__menu ${isMenuOpen ? "navbarOpen" : null}`}>
        <div className="navbar__menu__top">
          <a href="https://github.com/Osumii" target="_blank">
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
        <ul className="navbar__menu__items">
          <li className="navbar__menu__items__item">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Início
            </Link>
          </li>
          <li className="navbar__menu__items__item">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Trabalhos passados
            </Link>
          </li>
          <li className="navbar__menu__items__item">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
          </li>
        </ul>
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