import React from "react";
import "./Nav.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav">
        <NavLink to="/recipe"></NavLink>
      </div>
    </div>
  );
};

export default Nav;
