import React from "react";

function CardRecipe({ name, img, type, diets, score }) {
  return (
    <div className="Card">
      <h3>{name}</h3>
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
