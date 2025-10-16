import { describe, expect, test } from "vitest";
import { render , screen} from '@testing-library/react'
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
    test("Deberia rendereizar con valores por defecto ", () => {
        const name = "Test Item";
        render(<ItemCounter name = {name}/>)
        screen.debug();
        expect(screen.getAllByText(name)).toBeDefined();
        // <h1></h1> => Vacio su texto
        expect(screen.getAllByText(name)).not.toBeNull();
    });
});