import React from "react";
import { useSelector } from "react-redux";

function Paginacion({ total, onChange }) {
  const actualPage = useSelector((state) => state.page);
  const pages = () => {
    const result = [];
    for (let i = 0; i < total; i++) {
      let pag = i + 1;
      result.push(
        <p
          onClick={() => onChange(pag)}
          className={actualPage === pag ? "activepage" : "inactivepage"}
        >
          {pag}
        </p>
      );
    }
    return result;
  };
  return (
    <div className="pagination">
      <span>
        Página {actualPage} de {total}
      </span>
      {pages()}
    </div>
  );
}

export default Paginacion;
