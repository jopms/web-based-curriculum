import React from "react";
import "../styles/scss/_skills.scss";
import SkillLogo from "../components/SkillLogo";

import css from "../styles/img/css.png";
import html from "../styles/img/html.png";
import javascript from "../styles/img/javascript.png";
import jquery from "../styles/img/jquery.png";
import mongodb from "../styles/img/mongodb.png";
import nodejs from "../styles/img/nodejs.png";
import reactBootstrap from "../styles/img/react-bootstrap.png";
import react from "../styles/img/react.png";
import redux from "../styles/img/redux.png";
import rest from "../styles/img/rest.png";
import sass from "../styles/img/sass.png";

const Skills = () => {
  return (
    <div id="skills" className="skills-wrapper">
      <SkillLogo logo={css} alt="css logo" />
      <SkillLogo logo={html} alt="html logo" />
      <SkillLogo logo={javascript} alt="html logo" />
      <SkillLogo logo={jquery} alt="html logo" />
      <SkillLogo logo={mongodb} alt="html logo" />
      <SkillLogo logo={nodejs} alt="html logo" />
      <SkillLogo logo={reactBootstrap} alt="html logo" />
      <SkillLogo logo={react} alt="html logo" />
      <SkillLogo logo={redux} alt="html logo" />
      <SkillLogo logo={rest} alt="html logo" />
      <SkillLogo logo={sass} alt="html logo" />
    </div>
  );
};

export default Skills;
