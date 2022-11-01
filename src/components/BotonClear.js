import React from "react";
import "../stylesheets/BotonClear.css";

const BotonClear = (prop) => (
  <div className="boton-clear" onClick={() => prop.manejarClear("")}>
    {prop.children}
  </div>
);

export default BotonClear;
