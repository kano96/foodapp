import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filtrar, getDietTypes } from "../../redux/actions/index";

function Filtrado() {
  const diets = useSelector((state) => state.diets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDietTypes());
  }, [dispatch]);

  function handleOnChange(e) {
    const diet = e.target.value;
    dispatch(filtrar(diet));
  }

  return (
    <div className="filterSection">
      <label htmlFor="filter">Filtrar por tipo de dieta: </label>
      <select onChange={(e) => handleOnChange(e)}>
        <option value="All">Sin filtro</option>
        {diets.length &&
          diets.map((d) => <option value={d.name}>{d.name}</option>)}
      </select>
    </div>
  );
}

export default Filtrado;
