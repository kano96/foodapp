import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, changePage, sortByName } from "../../redux/actions";
import "./Home.css";
import Paginacion from "./Paginacion";
import CardRecipe from "./CardRecipe";
import Filtrado from "./Filtrado";
import Sorting from "./Sorting";

function Home() {
  const dispatch = useDispatch();
  const [orden, setOrden] = useState("");
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
  recipes = recipes.slice(
    (actualPage - 1) * recipePerPage,
    actualPage * recipePerPage
  );
  //Ordenado

  return (
    <div className="main">
      <div className="title-main">
        <h1>Recetas</h1>
      </div>
      <div className="filtersortingbuttons">
        <Filtrado />
        <Sorting
          onChange={(e) => {
            e.preventDefault();
            const type = e.target.value;
            dispatch(sortByName(type));
            setOrden(`Sorted by ${type}`);
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
        {allrecipes.length ? (
          recipes.map((r) => (
            <CardRecipe
              name={r.name}
              img={r.img}
              type={r.type}
              diets={r.diets}
              key={`recipe:${r.id}`}
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
