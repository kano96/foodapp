import React from "react";
import { useSelector } from "react-redux";
import "./Paginacion.css";

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
          key={`page${pag}`}
        >
          {pag}
        </p>
      );
    }
    return result;
  };
  return (
    <div className="pagination">
      <p>
        Página {actualPage} de {total}
      </p>
      <div className="paginas">{pages()}</div>
    </div>
  );
}

export default Paginacion;
