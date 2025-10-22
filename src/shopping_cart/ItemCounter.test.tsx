import { describe, expect, test } from "vitest";
import { render , screen, fireEvent} from '@testing-library/react'
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
    test("Deberia rendereizar con valores por defecto ", () => {
        const name = "Test Item";
        render(<ItemCounter name = {name}/>)
        // screen.debug();
        expect(screen.getAllByText(name)).toBeDefined();
        // <h1></h1> => Vacio su texto
        expect(screen.getAllByText(name)).not.toBeNull();
    });

    test("Deberia renderizar la cantidad definida", () =>{
        const name = "Test Item";
        const quantity = 10;
        render(<ItemCounter name = {name} quantity={quantity}/>);
        // screen.debug()
        expect(screen.getByText('10')).toBeDefined();
    });

    test("Deberia aumentar en +1 la cantidad cuando hago click en +1", ()=>{
        const name = "Test Item";
        const quantity = 10;
        render(<ItemCounter name = {name} quantity={quantity}/>);
        //screen.debug();
        const buttons = screen.getAllByRole('button');
        const [btnAdd] = buttons;

        fireEvent.click(btnAdd);
        expect(screen.getByText('11')).toBeDefined();

    });

    test("Deberia disminuir en 1 la cantidad cuando hago click en -1", ()=>{
        const name = "Test Item";
        const quantity = 10;
        render(<ItemCounter name = {name} quantity={quantity}/>);
        //screen.debug();
        const buttons = screen.getAllByRole('button');
        const [,btnSubs] = buttons;

        fireEvent.click(btnSubs);
        expect(screen.getByText('9')).toBeDefined();

    });

    test("No Deberia disminuir en 1 la cantidad cuando es igual a 1", ()=>{
        const name = "Test Item";
        const quantity = 1;
        render(<ItemCounter name = {name} quantity={quantity}/>);
        //screen.debug();
        const buttons = screen.getAllByRole('button');
        const [,btnSubs] = buttons;

        fireEvent.click(btnSubs);
        expect(screen.getByText('1')).toBeDefined();

    });

    test("No Deberia disminuir en 1 la cantidad cuando es igual a 1", ()=>{
        const name = "Test Item";
        const quantity = 1;
        render(<ItemCounter name = {name} quantity={quantity}/>);
        //screen.debug();
        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe('red');

    });

    test("No Deberia disminuir en 1 la cantidad cuando es igual a 1", ()=>{
        const name = "Test Item";
        const quantity = 2;
        render(<ItemCounter name = {name} quantity={quantity}/>);
        //screen.debug();
        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe('black');

    });
});