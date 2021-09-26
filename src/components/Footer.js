import React from "react";
import "../styles/scss/_footer.scss";
import { ReactComponent as GithubIcon } from "../styles/img/github.svg";
import { ReactComponent as Linkedin } from "../styles/img/linkedin.svg";
import { ReactComponent as Email } from "../styles/img/email.svg";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-link-wrapper">
        <div className="footer-link">
          <a target="_blank" href="https://github.com/jopms">
            <GithubIcon className="footer-github-icon" />
          </a>
        </div>
        <div className="footer-link">
          <a target="_blank" href="https://linkedin.com/in/jopms">
            <Linkedin className="footer-linkedin-icon" />
          </a>
        </div>
        <div className="footer-link">
          <a target="_blank" href="mailto:joao.34@hotmail.com">
            <Email className="footer-email-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
