import {describe, expect, test} from 'vitest'
import { add, multiply, substract } from './math.helper'

describe('Calculadora - Suma', () =>{
    test('Debo sumar dos numeros positivos',()=>{
        //! 1 - Arrange
        const a:number = 6
        const b:number = 10
        //! 2 - Act
        const result:number = add(a,b)
        //! 3 - Assert
        expect(result).toBe(16)
    });
    test('Debo sumar dos numeros negativos',()=>{
        //! 1 - Arrange
        const a:number = -6
        const b:number = -10
        //! 2 - Act
        const result:number = add(a,b)
        //! 3 - Assert
        expect(result).toBe(-16)
    });
});

describe('Calculadora - Resta', () =>{
    test('Debo restar dos numeros positivos',()=>{
        //! 1 - Arrange
        const a:number = 6
        const b:number = 10
        //! 2 - Act
        const result:number = substract(a,b)
        //! 3 - Assert
        expect(result).toBe(-4)
    });
    test('Debo restar dos numeros negativos',()=>{
        //! 1 - Arrange
        const a:number = -6
        const b:number = -10
        //! 2 - Act
        const result:number = substract(a,b)
        //! 3 - Assert
        expect(result).toBe(4)
    });
});

describe('Calculadora - Multiplicar', () =>{
    test('Debo multiplicar dos numeros positivos',()=>{
        //! 1 - Arrange
        const a:number = 6
        const b:number = 10
        //! 2 - Act
        const result:number = multiply(a,b)
        //! 3 - Assert
        expect(result).toBe(60)
    });
    test('Debo multiplicar dos numeros negativos',()=>{
        //! 1 - Arrange
        const a:number = 6
        const b:number = -10
        //! 2 - Act
        const result:number = multiply(a,b)
        //! 3 - Assert
        expect(result).toBe(-60)
    });
});