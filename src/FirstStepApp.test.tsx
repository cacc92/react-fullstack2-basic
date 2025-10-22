import { render, screen } from "@testing-library/react";
import { test, describe, expect, vi, afterEach } from "vitest";
import { FirstStepApp } from "./FirstStepApp";
import { ItemCounter } from "./shopping_cart/ItemCounter";


const mockItemCounter = vi.fn((props:unknown)=>{
    return (<div
        data-testid="ItemCounter"
        name={props.name}
        quantity={props.quantity}
    >
    </div>)
});

vi.mock("./shopping_cart/ItemCounter", () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props)
}));


// vi.mock("./shopping_cart/ItemCounter", () => ({
//     ItemCounter: (props: unknown) => <div
//         data-testid="ItemCounter"
//         name={props.name}
//         quantity={props.quantity}
//     ></div>
// }))

describe("FirstStepApp",() =>{

    afterEach(() => {
        vi.clearAllMocks();
    })

    test("Deberia coincidir el snapshot", () =>{
        const {container} = render(<FirstStepApp />);
        screen.debug();
        expect(container).toMatchSnapshot();
    });

    test("Deberian construirse todos los elementos item counter",()=>{
        render(<FirstStepApp />);
        const itemCounters = screen.getAllByTestId('ItemCounter')
        expect(itemCounters.length).toBe(3);
    })

    test("Deberia llamarse 3 veces la funcion de itemCounter", ()=>{
        render(<FirstStepApp />);
        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: "Nintendo Switch 2", quantity: 1
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: "Xbox Series X", quantity: 2
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: "Playstation 5 Pro", quantity: 3
        });
    })

});