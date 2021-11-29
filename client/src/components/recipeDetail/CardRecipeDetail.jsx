import React from "react";
import "./CardRecipeDetail.css";

function CardRecipeDetail({
  name,
  img,
  type,
  diets,
  healthScore,
  score,
  summary,
  steps,
}) {
  return (
    <div className="carddetailcontainer">
      <picture>
        <img src={img} alt="" />
      </picture>
      <div className="details">
        <h2>{name}</h2>
        {type.length ? (
          <div className="tiposdeplatos">
            <h4>Types of dish</h4>
            {type.map((t) => (
              <p key={t}>
                {t.replace(/\w/, (firstLetter) => firstLetter.toUpperCase())}
              </p>
            ))}
          </div>
        ) : (
          ""
        )}
        <div className="tiposdedietas">
          <h4>Types of diet</h4>
          {diets.length &&
            diets.map((d) => {
              if (typeof d === "object") {
                return (
                  <p key={d.name}>
                    {d.name.replace(/\w/, (firstLetter) =>
                      firstLetter.toUpperCase()
                    )}
                  </p>
                );
              } else {
                return (
                  <p key={d}>
                    {d.replace(/\w/, (firstLetter) =>
                      firstLetter.toUpperCase()
                    )}
                  </p>
                );
              }
            })}
        </div>
        <div className="scores">
          <p>
            <b>Spoonacular score:</b> {score}
          </p>
          <p>
            <b>Health score:</b> {healthScore}
          </p>
        </div>
        {summary && <h3>Summary</h3>}
        <div className="resumendetail">
          <p
            dangerouslySetInnerHTML={{
              __html: summary,
            }}
          />
        </div>
      </div>
      <div className="stepsdetail">
        {steps && <h3>Instructions</h3>}
        <div className="pasosdetail">
          <p dangerouslySetInnerHTML={{ __html: steps }} />
        </div>
      </div>
    </div>
  );
}

export default CardRecipeDetail;
