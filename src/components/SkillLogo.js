import React from "react";
import "../styles/scss/_skillLogo.scss";

const SkillLogo = ({ logo, alt }) => {
  return (
    <div className="logo-wrapper">
      <img className="skill-logo" src={logo} alt={alt} />
    </div>
  );
};

export default SkillLogo;
