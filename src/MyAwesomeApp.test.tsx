import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from "@testing-library/react";

describe("MyAwesomeApp", () => {
  test("should render firstname and lastname", () => {
    // ! No puedo generar el render directamente
    // const render  = <MyAwesomeApp />
    // console.log(render);

    // Como no puedo realizar el render porque no tengo un entorno de DOM
    // Para poder trabajar con JSX necesito un entorno de DOM
    // Ese entorno de DOM me lo da React Testing Library
    // npm install --save-dev @testing-library/react @testing-library/dom @types/react @types/react-dom

    // ! 1. Arrange (Preparacion)
    // console.log(document.body);
    const { container } = render(<MyAwesomeApp />);
    // screen.debug();
    // console.log(container.innerHTML);

    // ! 2. Act (Aplicar actiar)

    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");
    // console.log(h1?.innerHTML);

    // ! 3. Assert
    //expect(h1?.innerHTML).toBe("César");
    expect(h1?.innerHTML).toContain("César");
    expect(h3?.innerHTML).toBe("Carrasco");
  });

  test("should render firstname and lastname - screen", () => {
    // ! 1. Arrange (Preparacion)
    render(<MyAwesomeApp />);
    // screen.debug();

    // ! 2. Act (Aplicar actiar)

    // const h1 = screen.getByRole("heading", { level: 1 });
    const h1 = screen.getByTestId("first-name-title");
    console.log(h1.innerHTML);

    // ! 3. Assert
    expect(h1.innerHTML).toContain("César");
  });

  // Los snapshot son para verificar que la UI no ha cambiado
  // Si la UI cambia, el snapshot va a fallar
  // Si el cambio es intencional, se debe actualizar el snapshot
  // Cuando me refiero a UI, me refiero al HTML generado tiene que ser igual
  // Hablando de structura
  test("should match snapshot", () => {
    // ! 1. Arrange (Preparacion)
    const { container } = render(<MyAwesomeApp />);

    // ! 3. Assert
    expect(container).toMatchSnapshot();

    // screen.debug();
  });

  test("should match snapshot - screen", () => {
    // ! 1. Arrange (Preparacion)
    render(<MyAwesomeApp />);

    // ! 3. Assert
    expect(screen.getByTestId("div-app")).toMatchSnapshot();
  });
});
