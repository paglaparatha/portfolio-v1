import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <span className="footer__item-container">
        <a
          href="https://github.com/paglaparatha/portfolio-v1"
          target="_blank"
          rel="noreferrer"
          className="footer__item"
        >
          <i
            className="fa fa-code-fork footer__item--icon"
            aria-hidden="true"
          ></i>
          <span className="footer__item--text">master*</span>
        </a>

        <span className="footer__item">
          <i
            className="fa fa-copyright footer__item--icon"
            aria-hidden="true"
          ></i>
          <span className="footer__item--text">Ritam's Portfolio</span>
        </span>

        <a
          href="https://rahul-rt.me"
          target="_blank"
          rel="noreferrer"
          className="footer__item"
        >
          <i
            className="fa fa-play-circle footer__item--icon"
            aria-hidden="true"
          ></i>
          <span className="footer__item--text">Inspiration</span>
        </a>
      </span>

      <span className="footer__item-container hide-on-mobile">
        <span className="footer__item">
          <span className="footer__item--text">Spaces: 4</span>
        </span>

        <span className="footer__item">
          <span className="footer__item--text">UTF-8</span>
        </span>

        <span className="footer__item">
          <span className="footer__item--text">LF</span>
        </span>

        <span className="footer__item">
          <span className="footer__item--text">JavaScript</span>
        </span>

        <a href="#" className="footer__item">
          <i
            className="fa fa-smile-o footer__item--icon"
            aria-hidden="true"
          ></i>
        </a>

        <a href="#" className="footer__item">
          <i className="fa fa-bell footer__item--icon" aria-hidden="true"></i>
        </a>
      </span>
    </div>
  );
};

export default Footer;
