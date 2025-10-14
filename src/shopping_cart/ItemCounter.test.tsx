import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {
    test("Deberia renderizar un elemento por defecto", () => {
        const name = "Test Item"
        render(<ItemCounter name={name}/>)
        // screen.debug()
        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();

    });

    test("Deberia renderizar un elemento con una cantidad por defecto", () => {
        const name = "Test Item"
        const quantity = 10
        render(<ItemCounter name={name} quantity={quantity}/>)
        // screen.debug();

        expect(screen.getByText(quantity)).toBeDefined();
    });

    test("Deberia incrementar en 1 cuando hago clic en +1", () => {
        const name = "Test Item"
        const quantity = 10
        render(<ItemCounter name={name} quantity={quantity}/>)
        const buttons = screen.getAllByRole('button');
        // console.log(buttons)
        const [btnAdd] = buttons;
        // console.log(btnAdd.innerHTML, btnSubs.innerHTML)
        fireEvent.click(btnAdd)
        expect(screen.getByText('11')).toBeDefined()
    });

    test("Deberia disminuir en 1 cuando hago clic en -1", () => {
        const name = "Test Item"
        const quantity = 10
        render(<ItemCounter name={name} quantity={quantity}/>)
        const buttons = screen.getAllByRole('button');
        // console.log(buttons)
        const [,btnSubs] = buttons;
        // console.log(btnAdd.innerHTML, btnSubs.innerHTML)
        fireEvent.click(btnSubs)
        expect(screen.getByText('9')).toBeDefined()
    });

    test("Deberia disminuir en 1 cuando hago clic en -1 cuando me tengo por cantidad 1", () => {
        const name = "Test Item"
        const quantity = 1
        render(<ItemCounter name={name} quantity={quantity}/>)
        const buttons = screen.getAllByRole('button');
        // console.log(buttons)
        const [,btnSubs] = buttons;
        // console.log(btnAdd.innerHTML, btnSubs.innerHTML)
        fireEvent.click(btnSubs)
        expect(screen.getByText('1')).toBeDefined()
    });

});