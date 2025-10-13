import {describe, expect, test} from "vitest";
import {fireEvent, render, screen} from '@testing-library/react';
import {ItemCounter} from "./ItemCounter.tsx";


describe('ItemCounter', () => {
    test('Should render with default values', () => {

        const name = "Test Item";

        render(<ItemCounter name={name} />);

        // screen.debug();
        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();

    });
    test('Should render with custom quantity', () => {

        const name = "Test Item";
        const quantity = 10;

        render(<ItemCounter name={name}  quantity={quantity}/>);

        // screen.debug();
        expect(screen.getByText(quantity)).toBeDefined();

    });

    test('Should incrase count when +1 button is pressed', () => {
        const name = "Test Item";
        const quantity = 10;

        render(<ItemCounter name={name} quantity={quantity} />)

        const buttons = screen.getAllByRole('button')

        const [buttonAdd] = buttons;

        // console.log(buttonAdd.innerHTML);

        fireEvent.click(buttonAdd);

        expect(screen.getByText('11')).toBeDefined();
    });

    test('Should decrease count when -1 button is pressed', () => {
        const name = "Test Item";
        const quantity = 10;

        render(<ItemCounter name={name} quantity={quantity} />)

        const buttons = screen.getAllByRole('button')

        const [,btnDecrease] = buttons;

        // console.log(buttonAdd.innerHTML);

        fireEvent.click(btnDecrease);

        expect(screen.getByText('9')).toBeDefined();
    });

    test('Should not decrease count when -1 button is pressed', () => {
        const name = "Test Item";
        const quantity = 1;

        render(<ItemCounter name={name} quantity={quantity} />)

        const buttons = screen.getAllByRole('button')

        const [,btnDecrease] = buttons;

        // console.log(buttonAdd.innerHTML);

        fireEvent.click(btnDecrease);

        expect(screen.getByText('1')).toBeDefined();
    });

    test('Should change to red when count is 1', () => {
        const name = "Test Item";
        const quantity = 1;
        render(<ItemCounter name={name} quantity={quantity} />)

        const itemText = screen.getByText(name);
        // console.log(itemText.style);
        console.log(itemText.style.color);

        expect(itemText.style.color).toBe('red');
    });

    test('Should change to back when count is greater than 1', () => {
        const name = "Test Item";
        const quantity = 2;
        render(<ItemCounter name={name} quantity={quantity} />)

        const itemText = screen.getByText(name);
        // console.log(itemText.style);
        console.log(itemText.style.color);

        expect(itemText.style.color).toBe('black');
    });
});