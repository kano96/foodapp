import React from "react";
import { Link } from "react-router-dom";
import "./CardRecipe.css";

function CardRecipe({ name, img, type, diets, healthScore, id }) {
  return (
    <Link to={`/home/recipe/${id}`} className="Card">
      <div>
        <img src={img} alt="imagen" />

        <h3 className="cardTitle">{name}</h3>

        <h4 className="healthScore">Health Score: {healthScore}</h4>
        {type.length ? (
          <div className="types">
            <p className="typestitle">Types</p>
            {type.map((t) => (
              <p key={`${name}${t}`} className="typename">
                {t.replace(/\w/, (firstLetter) => firstLetter.toUpperCase())}
              </p>
            ))}
          </div>
        ) : (
          ""
        )}

        <div className="diets">
          <p className="diettitle">Diets</p>
          {diets.map((d) => {
            if (typeof d === "object") {
              return (
                <p key={`${name}${d.name}`} className="dietsname">
                  {d.name.replace(/\w/, (firstLetter) =>
                    firstLetter.toUpperCase()
                  )}
                </p>
              );
            } else {
              return (
                <p key={`${name}${d}`} className="dietsname">
                  {d.replace(/\w/, (firstLetter) => firstLetter.toUpperCase())}
                </p>
              );
            }
          })}
        </div>
      </div>
    </Link>
  );
}

export default CardRecipe;
