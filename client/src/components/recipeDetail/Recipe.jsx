import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeById } from "../../redux/actions";
import CardRecipeDetail from "./CardRecipeDetail";
import plate from "../../assets/plate.jpg";
import "./Recipe.css";

function Recipe() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const rD = useSelector((state) => state.recipeDetail);
  useEffect(() => {
    dispatch(getRecipeById(id));
  }, [dispatch, id]);
  return (
    <div className="recipedetailpage">
      <div className="cardrecipedetail">
        {Object.keys(rD).length ? (
          <CardRecipeDetail
            name={rD.name}
            img={rD.img ? rD.img : plate}
            type={rD.type ? rD.type : []}
            diets={rD.diets}
            score={rD.score}
            healthScore={rD.healthScore}
            summary={rD.summary}
            steps={rD.steps}
          />
        ) : (
          <h2>Cargando...</h2>
        )}
      </div>
    </div>
  );
}

export default Recipe;
