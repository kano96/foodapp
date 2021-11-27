import React from "react";

function SortingByScore({ onChange }) {
  return (
    <div className="sortingOptions">
      <label>Ordenar por puntuación</label>
      <select onChange={(e) => onChange(e)}>
        <option disabled="disabled" selected value="none">
          -----
        </option>
        <option value="asc">Ascendete</option>
        <option value="des">Descendete</option>
      </select>
    </div>
  );
}

export default SortingByScore;
