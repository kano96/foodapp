import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipe } from "../../redux/actions";
import "./Search.css";

function Search() {
  const [name, setName] = useState("");
  const [allowSubmit, setAllowSubmit] = useState(true);
  const dispatch = useDispatch();
  function handleOnSubmit(e) {
    e.preventDefault();
    if (name.length) {
      setAllowSubmit(true);
      dispatch(getRecipe(name));
    } else {
      setAllowSubmit(false);
    }
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
        placeholder="Tasty recipe name"
      />

      <button
        type="submit"
        className="buttoninput"
        onClick={(e) => {
          handleOnSubmit(e);
        }}
      >
        Search Recipe
      </button>
      {!allowSubmit && (
        <p className="alertRecipe">There's no nameless recipe :C</p>
      )}
    </div>
  );
}

export default Search;
