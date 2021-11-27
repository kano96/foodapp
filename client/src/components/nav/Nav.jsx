import React from "react";
import "./Nav.css";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/home">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav">
        <NavLink to="/home/create" className="createRecipeLink">
          Create Recipe
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
