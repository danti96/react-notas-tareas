import React from "react";
import "../stylesheets/Boton.css";

function Boton(props) {
  const esOperador = (valor) => isNaN(valor) && valor !== "." && valor !== "=";
  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : "null"
      }`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Boton;
