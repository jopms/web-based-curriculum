import React from "react";
import "../styles/scss/_title.scss";

/*
 * Component that creates a title text with pixelated font.
 */

const Title = ({ text }) => {
  return <div className="main-header-text">{text}</div>;
};

export default Title;
