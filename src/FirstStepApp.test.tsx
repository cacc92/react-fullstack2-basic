import {afterEach, describe, expect, test, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import {FirstStepApp} from "./FirstStepApp.tsx";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockItemCounter = vi.fn((_props: unknown) => {
    return (<div
        data-testid="ItemCounter"
    />)
})

vi.mock("./shopping_cart/ItemCounter", () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// vi.mock("./shopping_cart/ItemCounter", () => ({
//     ItemCounter: (props: unknown) =>
//         <div
//             data-testid="ItemCounter"
//             name={props.name}
//             quantity={props.quantity}
//         />
// }));

describe("FirstStepApp", () => {

    afterEach(() => {
        vi.clearAllMocks();
    })

   test("Should match snapshot", () => {
       const {container} = render(<FirstStepApp />);

       expect(container).toMatchSnapshot();

       // screen.debug()
   })

    test("Should render the correct number of ItemCounter components", () => {
        render(<FirstStepApp/>);
        const itemCounter = screen.getAllByTestId('ItemCounter');
        expect(itemCounter.length).toBe(3);

        screen.debug();

    });

    test("Should render ItemCounter with correct props", () => {
        render(<FirstStepApp />)
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
    });

});