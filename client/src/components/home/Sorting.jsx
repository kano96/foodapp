import React from "react";
import "./Sorting.css";

function Sorting({ onChange }) {
  return (
    <div className="sortingOptions">
      <label>Sort by Name: </label>
      <select
        className="sort"
        onChange={(e) => {
          onChange(e);
        }}
      >
        <option disabled="disabled" selected value="none">
          -----
        </option>
        <option value="asc">A to Z</option>
        <option value="des">Z to A</option>
      </select>
    </div>
  );
}

export default Sorting;
