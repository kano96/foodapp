import React from "react";
import "./SortingByScore.css";

function SortingByScore({ onChange }) {
  return (
    <div className="sortingOptions">
      <label>Sort by Score:</label>
      <select onChange={(e) => onChange(e)}>
        <option disabled="disabled" selected value="none">
          -----
        </option>
        <option value="asc">Ascending</option>
        <option value="des">Descending </option>
      </select>
    </div>
  );
}

export default SortingByScore;
