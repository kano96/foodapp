import React from "react";
import { Link } from "react-router-dom";

function CardRecipe({ name, img, type, diets, score, id }) {
  return (
    <div className="Card">
      <Link to={`/home/recipe/${id}`}>
        <h3>{name}</h3>
      </Link>
      <img src={img} alt="imagen" />
      <h4>{score}</h4>
      <div className="types">
        {type.map((t) => (
          <p key={`${name}${t}`}>{t}</p>
        ))}
      </div>
      <div className="diets">
        {diets.map((d) => (
          <p key={`${name}${d}`}>{d}</p>
        ))}
      </div>
    </div>
  );
}

export default CardRecipe;
