import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Contact -8187812548</span>
        <div className="f-icons">
          <div className="i-icons">
            <a
              href="https://github.com/MohammedGhouseP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-ghouse-0bb220220/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a
              href="https://www.instagram.com/ghouse5545?igsh=MTZ1NWZscGY0OHpjbA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
