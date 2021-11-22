import React from "react";

function Paginacion({ actual, total, onChange }) {
  const pages = () => {
    const result = [];
    for (let i = 0; i < total; i++) {
      let pag = i + 1;
      result.push(
        <p
          onClick={() => onChange(pag)}
          className={actual === pag ? "activepage" : "inactivepage"}
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
        Página {actual} de {total}
      </span>
      {pages()}
    </div>
  );
}

export default Paginacion;
