import React from "react";
import "../styles/scss/_header.scss";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="nav-wrapper">
      <NavLink activeClassName="nav-selected" className="nav-link" exact to="/">About</NavLink>
      <NavLink activeClassName="nav-selected" className="nav-link" to="/skills">Skills</NavLink>
      <NavLink activeClassName="nav-selected" className="nav-link" to="/experience">Experience</NavLink>
      <NavLink activeClassName="nav-selected" className="nav-link" to="/education">Education</NavLink>
    </div>
  );
};

export default Header;
