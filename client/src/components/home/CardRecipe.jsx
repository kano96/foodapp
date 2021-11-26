import React from "react";
import { Link } from "react-router-dom";
import "./CardRecipe.css";

function CardRecipe({ name, img, type, diets, healthScore, id }) {
  return (
    <div className="Card">
      <Link to={`/home/recipe/${id}`} className="cardTitle">
        <h3>{name}</h3>
      </Link>
      <img src={img} alt="imagen" />

      {type.length ? (
        <div className="types">
          {type.map((t) => (
            <p key={`${name}${t}`}>{t}</p>
          ))}
        </div>
      ) : (
        ""
      )}

      <div className="diets">
        {diets.map((d) => {
          if (typeof d === "object") {
            return <p key={`${name}${d.name}`}>{d.name}</p>;
          } else {
            return <p key={`${name}${d}`}>{d}</p>;
          }
        })}
        <h4>{healthScore}</h4>
      </div>
    </div>
  );
}

export default CardRecipe;
