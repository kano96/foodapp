import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addFilter,
  removeFilter,
  getDietTypes,
} from "../../redux/actions/index";

function Filtrado() {
  const filters = useSelector((state) => state.filtros);
  const diets = useSelector((state) => state.diets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDietTypes());
  }, [dispatch]);

  const handleOnChange = (name) => {
    const index = filters.indexOf(name);
    if (index === -1) {
      dispatch(addFilter(name));
    } else {
      dispatch(removeFilter(name));
    }
  };

  return (
    <div className="filterButtons">
      <label htmlFor="filter">Filtrar por tipo de dieta: </label>
      <div className="checkboxpanel">
        {diets.length
          ? diets.map((d) => (
              <div className="checkbox">
                <label>{d.name}</label>
                <input
                  id={d.id}
                  key={d.id}
                  type="checkbox"
                  value={d.name}
                  onChange={() => handleOnChange(d.name)}
                />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default Filtrado;
