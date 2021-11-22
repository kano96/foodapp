import React from "react";
import "./Nav.css";
import logo from "../../assets/logo.png";

const Nav = () => {
  const handleOnSubmit = () => {};
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="searchcont">
        <form action="GET" onSubmit={handleOnSubmit}>
          <input type="text" name="name" className="navinput" />
          <input type="submit" value="Buscar receta" className="buttoninput" />
        </form>
      </div>
    </div>
  );
};

export default Nav;
