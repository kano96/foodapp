import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecipes,
  changePage,
  sortByName,
  sortByScore,
  setAllRecipes,
} from "../../redux/actions";
import "./Home.css";
import Paginacion from "./Paginacion";
import CardRecipe from "./CardRecipe";
import Filtrado from "./Filtrado";
import Sorting from "./Sorting";
import SortingByScore from "./SortingByScore";
import Search from "./Search";

function Home() {
  const dispatch = useDispatch();
  const [orden, setOrden] = useState("");
  const [ordenByScore, setOrdenByScore] = useState("");

  //Recetas
  const recipePerPage = 9;
  const allrecipes = useSelector((state) => state.allrecipes);
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  let recipes = useSelector((state) => state.recipes);

  //Paginacion
  const total = Math.ceil(recipes.length / recipePerPage);
  const actualPage = useSelector((state) => state.page);
  if (recipes.length > 1) {
    recipes = recipes.slice(
      (actualPage - 1) * recipePerPage,
      actualPage * recipePerPage
    );
  }
  //Mostrar todas las recetas
  function handleClear(e) {
    e.preventDefault();
    dispatch(setAllRecipes());
  }

  return (
    <div className="main">
      <div className="title-main">
        <h1>Recetas</h1>
      </div>
      <div className="buscador">
        <Search />
      </div>
      <div className="clear">
        <button onClick={(e) => handleClear(e)}>
          Mostrar todas las recetas
        </button>
      </div>
      <div className="filtersortingbuttons">
        <Filtrado />
        <Sorting
          onChange={(e) => {
            e.preventDefault();
            const type = e.target.value;
            dispatch(sortByName(type));
            if (type === "asc") setOrden("ascendente");
            if (type === "des") setOrden("descendente");
            dispatch(changePage(1));
          }}
        />
        <SortingByScore
          onChange={(e) => {
            e.preventDefault();
            const type = e.target.value;
            dispatch(sortByScore(type));
            if (type === "asc") setOrdenByScore("ascendente");
            if (type === "des") setOrdenByScore("descendente");
            dispatch(changePage(1));
          }}
        />
      </div>

      <div className="paginas">
        {total !== 0 && (
          <Paginacion
            total={total}
            onChange={(page) => {
              dispatch(changePage(page));
            }}
          />
        )}
      </div>
      <div className="recipes">
        {!allrecipes.length && <h1>Cargando...</h1>}
        {recipes.length
          ? recipes.map((r) => (
              <CardRecipe
                id={r.id}
                name={r.name}
                img={r.img}
                type={r.type ? r.type : []}
                diets={r.diets}
                healthScore={r.score}
                key={r.name}
              />
            ))
          : ""}
        {allrecipes.length && !recipes.length ? (
          <h2>No hay resultdados</h2>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Home;
