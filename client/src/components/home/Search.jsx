import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipe } from "../../redux/actions";
import "./Search.css";

function Search() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(getRecipe(name));
  }
  function handleOnChange(e) {
    e.preventDefault();
    const type = e.target.value;
    setName(type);
  }
  return (
    <div className="searchcont">
      <input
        type="text"
        className="navinput"
        onChange={(e) => handleOnChange(e)}
        value={name}
      />
      <button
        type="submit"
        className="buttoninput"
        onClick={(e) => {
          handleOnSubmit(e);
        }}
      >
        Buscar receta
      </button>
    </div>
  );
}

export default Search;
