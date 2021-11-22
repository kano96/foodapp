import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, changePage } from "../../redux/actions";
import "./Home.css";
import Paginacion from "./Paginacion";
import CardRecipe from "./CardRecipe";

function Home() {
  const dispatch = useDispatch();
  //Recetas
  const recipePerPage = 9;
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  let recipes = useSelector((state) => state.recipes);

  //Paginacion
  const total = Math.ceil(recipes.length / recipePerPage);
  const actualPage = useSelector((state) => state.page);
  recipes = recipes.slice(
    (actualPage - 1) * recipePerPage,
    actualPage * recipePerPage
  );

  return (
    <div className="main">
      <div className="title-main">
        <h1>Todas las recetas</h1>
      </div>
      <div className="recipes">
        {recipes.map((r) => (
          <CardRecipe name={r.name} img={r.img} type={r.type} diets={r.diets} />
        ))}
      </div>
      <div className="options"></div>
      <Paginacion
        actual={actualPage}
        total={total}
        onChange={(page) => {
          dispatch(changePage(page));
        }}
      />
    </div>
  );
}

export default Home;
