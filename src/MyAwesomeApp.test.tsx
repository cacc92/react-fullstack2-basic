import { describe, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("should render the component", () => {
    // TODO
    // ! 1. Arrange (Preparacion)

    // No puedo hacer el render porque no tengo un entorno de DOM
    const render = <MyAwesomeApp />;
    console.log(render);

    // Como no puedo realizar el render porque no tengo un entorno de DOM
    // Para poder trabajar con JSX necesito un entorno de DOM
    // Ese entorno de DOM me lo da React Testing Library
    // npm install --save-dev @testing-library/react @testing-library/dom @types/react @types/react-dom

    // ! 2. Act (Aplicar actiar)
    // ! 3. Assert
  });
});
