import React from "react";

function Sorting({ onChange }) {
  return (
    <div className="sortingOptions">
      <label>Ordenar por nombre: </label>
      <select
        className="sort"
        onChange={(e) => {
          onChange(e);
        }}
      >
        <option disabled="disabled" defaultValue value="none">
          -----
        </option>
        <option value="asc">De A a Z</option>
        <option value="des">De Z a A</option>
      </select>
    </div>
  );
}

export default Sorting;
