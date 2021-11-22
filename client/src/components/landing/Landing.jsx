import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="land-cont">
      <div className="landcard">
        <h1>Bienvenido al mejor sitio de Recetas</h1>
        <Link to="/home" className="landbutton">
          <button>Ir al Sitio</button>
        </Link>
      </div>
    </div>
  );
};
export default Landing;
