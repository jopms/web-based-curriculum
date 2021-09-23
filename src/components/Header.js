import React from "react";
import "../styles/scss/_header.scss";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="nav-wrapper">
      <NavLink className="nav-link" to="/about">About</NavLink>
      <NavLink className="nav-link" to="/skills">Skills</NavLink>
      <NavLink className="nav-link" to="/Experience">Experience</NavLink>
      <NavLink className="nav-link" to="/Education">Education</NavLink>
    </div>
  );
};

export default Header;
