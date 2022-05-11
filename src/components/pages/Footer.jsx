import React, { Fragment } from "react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import Nicnor from "../../assets/log.webp";
import "./Footer.css";
const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <h1>
          <img src={Nicnor} alt="..." />
          Nicnor
        </h1>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="..." />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="..." />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="..." />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="" />
        </a>
      </div>
    </Fragment>
  );
};

export default Footer;
