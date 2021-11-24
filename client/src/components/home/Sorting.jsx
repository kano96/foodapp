import React from "react";

function Sorting({ onChange }) {
  return (
    <div className="sortingOptions">
      <label>Ordenar: </label>
      <select
        className="sort"
        onChange={(e) => {
          onChange(e);
        }}
      >
        <option>Sin orden</option>
        <option value="asc">De A a Z</option>
        <option value="des">De Z a A</option>
      </select>
    </div>
  );
}

export default Sorting;
