import {describe, expect, test} from 'vitest'
import { MyAwesomeApp } from './MyAwesomeApp'
import {render, screen} from '@testing-library/react'

describe('MyAwesomeApp', ()=>{
    test('Debe realizar render de nombre y apellido', () => {
        //! 1 - Arrange
        // const render = <MyAwesomeApp />
        // console.log(render)
        const {container} = render(<MyAwesomeApp />);
        // console.log(container.innerHTML);
        // screen.debug()

        //! 2- Act
        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');
        // console.log(h1?.innerHTML);

        //! 3- Asserts 
        expect(h1?.innerHTML).toContain("César");
        expect(h3?.innerHTML).toBe("Carrasco")

    });

    test("Should render firstname and lastname - screen", () =>{
        const name = "César";
        render(<MyAwesomeApp />);
        // screen.debug()

        // const h1 = screen.getByRole('heading', {level: 1});
        const h1 = screen.getByTestId("first-name-title");
        console.log(h1.innerHTML)

        expect(h1.innerHTML).toContain(name)
    
    });

    test("should match snapshot - screen", () => {
        render(<MyAwesomeApp />);

        expect(screen.getByTestId("div-app")).toMatchSnapshot()
    });
});