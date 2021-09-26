import React from "react";
import DarkModeButton from "./DarkModeButton";
import "../styles/scss/_footer.scss";
import { ReactComponent as GithubIcon } from "../styles/img/github.svg";
import { ReactComponent as Linkedin } from "../styles/img/linkedin.svg";
import { ReactComponent as Email } from "../styles/img/email.svg";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-link-wrapper">
        <div className="footer-link">
          <a target="_blank" href="https://github.com/jopms" rel="noreferrer">
            <GithubIcon className="footer-github-icon" />
          </a>
        </div>
        <div className="footer-link">
          <a
            target="_blank"
            href="https://linkedin.com/in/jopms"
            rel="noreferrer"
          >
            <Linkedin className="footer-linkedin-icon" />
          </a>
        </div>
        <div className="footer-link">
          <a target="_blank" href="mailto:joao.34@hotmail.com" rel="noreferrer">
            <Email className="footer-email-icon" />
          </a>
        </div>
        <div className="footer-link">
          <DarkModeButton />
        </div>
      </div>
    </div>
  );
};

export default Footer;
