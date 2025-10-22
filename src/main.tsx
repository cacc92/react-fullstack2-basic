import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FirstStepApp } from "./FirstStepApp";
import { MyAwesomeApp } from "./MyAwesomeApp";

// StrictMode nos permite asegurarnos que la app funcione como
// tiene que funcionar, problemas con los efectos
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <h1>Hola Mundo!</h1>
    <p>Esto es un parrafo!</p>
    <button>Click me</button>
    <div>
      <h2>Hola dentro de un DIV</h2>
    </div> */}
    <FirstStepApp />
    {/* <MyAwesomeApp /> */}
  </StrictMode>
);
