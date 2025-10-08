import {test , expect, describe} from 'vitest'
import { add, multiply, substract } from './math.helper';

describe('Calculadora Suma', () => {
    test('Debe sumar dos numeros postivos', () => {
        //!  1 - Arrange
        const a: number = 2;
        const b: number = 3;

        //! 2 - ACT
        const result = add(a, b)

        //! 3- Assert
        expect(result).toBe(5)
    });

    test('Debe sumar dos numeros negativos', () => {
        //!  1 - Arrange
        const a: number = -2;
        const b: number = -3;

        //! 2 - ACT
        const result = add(a, b)

        //! 3- Assert
        expect(result).toBe(-5)
    });
})

describe('Calculadora Resta', () => {
    test('Debe restar dos numeros',()=>{
        //! 1 - Arrange
        const a:number = 5
        const b:number = 10
        //! 2 - Act
        const result: number = substract(a,b)
        //! 3 - Assert
        expect(result).toBe(-5)
    });
        test('Debe restar dos numeros con uno negativo',()=>{
        //! 1 - Arrange
        const a:number = 5
        const b:number = -10
        //! 2 - Act
        const result: number = substract(a,b)
        //! 3 - Assert
        expect(result).toBe(15)
    });
});

describe('Calculadora Multiplicacion', () => {
    test('Debe multiplicar dos numeros postivos', ()=>{
        //! 1 - Arrange
        const a:number = 5
        const b:number = 10
        //! 2 - Act
        const result: number = multiply(a,b)
        //! 3 - Assert
        expect(result).toBe(50)
    });

        test('Debe multiplicar dos numeros con uno negativo', ()=>{
        //! 1 - Arrange
        const a:number = 5
        const b:number = -10
        //! 2 - Act
        const result: number = multiply(a,b)
        //! 3 - Assert
        expect(result).toBe(-50)
    });
});


