import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepApp } from "./FirstStepApp";
import { ItemCounter } from "./shopping_cart/ItemCounter";

const mockItemCounter = vi.fn((props: unknown) => {
    return <div data-testid="ItemCounter" name={props.name} quantity={props.quantity}/>
});

vi.mock("./shopping_cart/ItemCounter",() =>({
    ItemCounter : (props: unknown) => mockItemCounter(props)
}));


// vi.mock("./shopping_cart/ItemCounter", () =>({
//     ItemCounter: (props:unknown) => 
//     <div 
//         data-testid="ItemCounter"
//         name = {props.name}
//         quantity = {props.quantity}
//     />
// }));

describe("FirstStepApp", () => {
    afterEach(() =>{
        vi.clearAllMocks();
    })

    test("Deberia hacer match con el snapshot", ()=>{
        const {container} = render(<FirstStepApp />);
        // screen.debug();
        expect(container).toMatchSnapshot();
    });

    test("Deberia devolver de forma correcta el numero de componenetes de ItemCounter", ()=>{
        // Genero render de FirstStepAPP
        render(<FirstStepApp/>)
        screen.debug();
        const itemCounter = screen.getAllByTestId('ItemCounter')
        expect(itemCounter.length).toBe(3);
    });

    test("Deberia renderizar todos los elementos de la lista", () => {
        render(<FirstStepApp/>)
        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({ 
            name: "Nintendo Switch 2", quantity: 1 
        })
        expect(mockItemCounter).toHaveBeenCalledWith({ 
            name: "Xbox Series X", quantity: 2 
        })
        expect(mockItemCounter).toHaveBeenCalledWith({ 
            name: "Playstation 5 Pro", quantity: 3
        })
    
    })
});