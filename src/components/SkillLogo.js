import React from "react";
import "../styles/scss/_skillLogo.scss";

/*
 * Component that gives logo's prop an animation on hover
 */

const SkillLogo = ({ logo, alt }) => {
  return (
    <div className="logo-wrapper">
      <img className="skill-logo" src={logo} alt={alt} />
    </div>
  );
};

export default SkillLogo;
