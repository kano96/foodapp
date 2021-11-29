import React from "react";
import { useDispatch } from "react-redux";
import { filtrar, changePage } from "../../redux/actions/index";
import "./Filtrado.css";

function Filtrado() {
  const dispatch = useDispatch();

  function handleOnChange(e) {
    e.preventDefault();
    const diet = e.target.value;
    dispatch(filtrar(diet));
    dispatch(changePage(1));
  }

  return (
    <div className="filterSection">
      <label htmlFor="filter">Filter by type of diet: </label>
      <select onChange={(e) => handleOnChange(e)}>
        <option value="All">No filter</option>
        <option value="gluten free">Gluten Free</option>
        <option value="ketogenic">Ketogenic</option>
        <option value="dairy free">Dairy Free</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="lacto">Lacto-Vegetarian</option>
        <option value="ovo">Ovo-Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="pescatarian">Pescetarian</option>
        <option value="paleolithic">Paleo</option>
        <option value="primal">Primal</option>
        <option value="fodmap friendly">Low FODMAP</option>
        <option value="whole 30">Whole30</option>
      </select>
    </div>
  );
}

export default Filtrado;
