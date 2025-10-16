import { describe, expect, test } from "vitest";
import {render, screen} from '@testing-library/react'
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
    test("Debería renderizar el nombre y apellido", () =>{
        // Esto me va devolver la funcion misma 
        // no el valor que genera
        // const render = <MyAwesomeApp />
        // console.log(render)

        // Para renderizar voy a utilizar testing library
        const {container} =  render(<MyAwesomeApp />);
        // console.log(container.innerHTML);
        // screen.debug();

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toContain("César");
        expect(h3?.innerHTML).toBe("Carrasco");
    });

    test("Debería renderizar el nombre y apellido - Screen", () => {
        render(<MyAwesomeApp/>);
        // screen.debug();
        // const h1 = screen.getByTestId("first-name-title");
        const [h1Principal] = screen.getAllByRole('heading', {level : 1});
        console.log(h1Principal.innerHTML);

        expect(h1Principal.innerHTML).toContain("César");
    });

    test("Deberia ser igual mi pagina al snapshot", ()=>{
        render(<MyAwesomeApp />);
        const divApp = screen.getAllByTestId('div-app');
        expect(divApp).toMatchSnapshot();
    });
});