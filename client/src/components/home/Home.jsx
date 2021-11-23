import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, changePage, filtrar } from "../../redux/actions";
import "./Home.css";
import Paginacion from "./Paginacion";
import CardRecipe from "./CardRecipe";
import Filtrado from "./Filtrado";

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
      <Filtrado />
      <div className="options"></div>
      <div className="recipes">
        {recipes.length ? (
          recipes.map((r) => (
            <CardRecipe
              name={r.name}
              img={r.img}
              type={r.type}
              diets={r.diets}
              key={r.name}
            />
          ))
        ) : (
          <h1>Cargando...</h1>
        )}
      </div>
      {total !== 0 && (
        <Paginacion
          total={total}
          onChange={(page) => {
            dispatch(changePage(page));
          }}
        />
      )}
    </div>
  );
}

export default Home;
