import React from "react";

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
      <h2>{name}</h2>
      <picture>
        <img src={img} alt="" />
      </picture>
      {type.length ? (
        <div className="tiposdeplatos">
          {type.length && type.map((t) => <p key={t}>{t}</p>)}
        </div>
      ) : (
        ""
      )}
      <div className="tiposdedietas">
        {diets.length &&
          diets.map((d) => {
            if (typeof d === "object") {
              return <p key={d.name}>{d.name}</p>;
            } else {
              return <p key={d}>{d}</p>;
            }
          })}
      </div>
      <div className="scores">
        <p>Spoonacular score: {score}</p>
        <p>Health score: {healthScore}</p>
      </div>
      {summary && <h3>Summary</h3>}
      <div className="resumendetail">
        <p
          dangerouslySetInnerHTML={{
            __html: summary,
          }}
        />
      </div>
      {steps && <h3>Instructions</h3>}
      <div className="pasosdetail">
        <p dangerouslySetInnerHTML={{ __html: steps }} />
      </div>
    </div>
  );
}

export default CardRecipeDetail;
