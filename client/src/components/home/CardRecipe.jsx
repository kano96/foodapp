import React from "react";

function CardRecipe({ name, img, type, diets }) {
  return (
    <div className="Card">
      <h3>{name}</h3>
      <img src={img} alt="imagen" />
      <div className="types">
        {type.map((t) => (
          <p>{t}</p>
        ))}
      </div>
      <div className="diets">
        {diets.map((d) => (
          <p>{d}</p>
        ))}
      </div>
    </div>
  );
}

export default CardRecipe;
