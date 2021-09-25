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
          <GithubIcon className="footer-github-icon" />
        </div>
        <div className="footer-link">
          <Linkedin className="footer-linkedin-icon" />
        </div>
        <div className="footer-link">
          <Email className="footer-email-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
