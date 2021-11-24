import React from "react";
import "./Search.css";

function Search() {
  const handleOnSubmit = () => {};
  return (
    <div className="searchcont">
      <form action="GET" onSubmit={handleOnSubmit}>
        <input type="text" name="name" className="navinput" />
        <input type="submit" value="Buscar receta" className="buttoninput" />
      </form>
    </div>
  );
}

export default Search;
