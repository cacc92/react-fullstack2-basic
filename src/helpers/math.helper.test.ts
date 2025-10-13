import {describe, expect, test} from "vitest";
import {add, multiply, subtract} from "./math.helper.ts";


describe('Calculadora - Suma', () => {
   test('Debe sumar dos números positívos', () => {
       //! 1 - Arrange
       const a : number = 2;
       const b : number = 3;

       //! 2 - Act
       const result = add(a, b);

       //! 3 - Assert
       expect(result).toBe(5);
   });

    test('Debe sumar dos números negativos', () => {
        //! 1 - Arrange
        const a : number = -2;
        const b : number = -3;

        //! 2 - Act
        const result = add(a, b);

        //! 3 - Assert
        expect(result).toBe(-5);
    });
});

describe('Calculadora - Resta', () => {
    test('Debe restar dos números positívos', () => {
        //! 1 - Arrange
        const a : number = 2;
        const b : number = 3;

        //! 2 - Act
        const result = subtract(a, b);

        //! 3 - Assert
        expect(result).toBe(-1);
    });
    test('Debe restar dos números negativos', () => {
        //! 1 - Arrange
        const a : number = -2;
        const b : number = -3;

        //! 2 - Act
        const result = subtract(a, b);

        //! 3 - Assert
        expect(result).toBe(1);
    });
});

describe('Calculadora - Multiplicación', () => {
    test('Debe multiplicar dos números positívos', () => {
        //! 1 - Arrange
        const a : number = 2;
        const b : number = 3;

        //! 2 - Act
        const result = multiply(a, b);

        //! 3 - Assert
        expect(result).toBe(6);
    });
    test('Debe multiplicar dos números', () => {
        //! 1 - Arrange
        const a : number = -2;
        const b : number = 3;

        //! 2 - Act
        const result = multiply(a, b);

        //! 3 - Assert
        expect(result).toBe(-6);
    });
});

