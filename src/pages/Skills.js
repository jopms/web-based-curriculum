import React from "react";
import SkillLogo from "../components/SkillLogo";
import Title from "../components/Title";
import css from "../styles/img/css.png";
import html from "../styles/img/html.png";
import javascript from "../styles/img/javascript.png";
import jquery from "../styles/img/jquery.png";
import mongodb from "../styles/img/mongodb.png";
import nodejs from "../styles/img/nodejs.png";
import reactBootstrap from "../styles/img/react-bootstrap.png";
import react from "../styles/img/react.png";
import redux from "../styles/img/redux.png";
import sass from "../styles/img/sass.png";
import "../styles/scss/_skills.scss";

const Skills = () => {
  return (
    <div className="skills-page-wrapper">
      <Title text="Look at my skills!" />
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
        <SkillLogo logo={sass} alt="html logo" />
      </div>
    </div>
  );
};

export default Skills;
