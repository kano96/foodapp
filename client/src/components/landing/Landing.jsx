import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="land-cont">
      <div className="landcard">
        <h1>Welcome to my Food App</h1>
        <Link to="/home" className="landbutton">
          <button>Go to Site</button>
        </Link>
      </div>
    </div>
  );
};
export default Landing;
