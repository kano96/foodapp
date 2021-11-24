import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecipes,
  changePage,
  sortByName,
  sortByScore,
} from "../../redux/actions";
import "./Home.css";
import Paginacion from "./Paginacion";
import CardRecipe from "./CardRecipe";
import Filtrado from "./Filtrado";
import Sorting from "./Sorting";
import SortingByScore from "./SortingByScore";

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
  if (allrecipes.length) {
    recipes = recipes.slice(
      (actualPage - 1) * recipePerPage,
      actualPage * recipePerPage
    );
  }
  // Quitar filtros y orden
  function handleOnClick() {
    dispatch(getRecipes());
    dispatch(changePage(1));
    setOrden("");
    setOrdenByScore("");
  }

  return (
    <div className="main">
      <div className="title-main">
        <h1>Recetas</h1>
      </div>
      <div className="reset">
        <button onClick={() => handleOnClick()}>
          Limpiar filtros y ordenado
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
            e.target.value = "none";
          }}
        />
        <SortingByScore
          onChange={(e) => {
            e.preventDefault();
            const type = e.target.value;
            dispatch(sortByScore(type));
            if (type === "asc") setOrdenByScore("ascendente");
            if (type === "des") setOrdenByScore("descendente");
            e.target.value = "none";
          }}
        />
      </div>
      <div className="enunciado">
        {orden.length && !ordenByScore.length ? (
          <h3>Ordenado por nombre {}</h3>
        ) : (
          ""
        )}
        {ordenByScore.length && !orden.length ? (
          <h3>Ordenado por score</h3>
        ) : (
          ""
        )}
        {orden.length && ordenByScore.length ? (
          <h3>Ordenado por nombre y score</h3>
        ) : (
          ""
        )}
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
        {allrecipes.length ? (
          recipes.map((r) => (
            <CardRecipe
              name={r.name}
              img={r.img}
              type={r.type}
              diets={r.diets}
              score={r.score}
              key={r.name}
            />
          ))
        ) : (
          <h1>Cargando...</h1>
        )}
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
