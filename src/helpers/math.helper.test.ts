import {test , expect, describe} from 'vitest'
import { add } from './math.helper';

describe('Calculadora Suma', () => {
    test('Debe sumar dos numeros', () => {
        //!  1 - Arrange
        const a: number = 2;
        const b: number = 3;

        //! 2 - ACT
        const result = add(a, b)

        //! 3- Assert
        expect(result).toBe(5)
    });
})


