import { describe, expect, test } from "vitest";
import { add, multiply, substract } from "./math.helper";

describe("add", () => {
  test("should add two positives numbers", () => {
    // ! 1. Arrange (Preparacion)
    const a = 2;
    const b = 2;
    // ! 2. Act (Aplicar actiar)
    const result = add(a, b);
    // ! 3. Assert
    expect(result).toBe(4);
  });
  test("should add two negatives numbers", () => {
    // ! 1. Arrange (Preparacion)
    const a = -2;
    const b = -2;
    // ! 2. Act (Aplicar actiar)
    const result = add(a, b);
    // ! 3. Assert
    expect(result).toBe(-4);
  });
});

describe("substract", () => {
  test("should substract two positives numbers", () => {
    // ! 1. Arrange (Preparacion)
    const a = 2;
    const b = 2;
    // ! 2. Act (Aplicar actiar)
    const result = substract(a, b);
    // ! 3. Assert
    expect(result).toBe(0);
  });

  test("should substract a bigger number from a smaller number", () => {
    // ! 1. Arrange (Preparacion)
    const a = 2;
    const b = 4;
    // ! 2. Act (Aplicar actiar)
    const result = substract(a, b);
    // ! 3. Assert
    expect(result).toBe(-2);
  });
});

describe("multiply", () => {
  test("should multiply two positive numbers", () => {
    // ! 1. Arrange (Preparacion)
    const a = 2;
    const b = 2;
    // ! 2. Act (Aplicar actiar)
    const result = multiply(a, b);
    // ! 3. Assert
    expect(result).toBe(4);
  });
  test("should multiply a number by 0", () => {
    // ! 1. Arrange (Preparacion)
    const a = 2;
    const b = 0;
    // ! 2. Act (Aplicar actiar)
    const result = multiply(a, b);
    // ! 3. Assert
    expect(result).toBe(0);
  });
});

// test("should add two positives numbers", () => {
//   // ! 1. Arrange (Preparacion)
//   const a = 1;
//   const b = 2;
//   // ! 2. Act (Aplicar actiar)
//   const result = add(2, 2);
//   // ! 3. Assert
//   expect(result).toBe(4);

// console.log("Hola Mundo!");
// const result = add(2, 2);
// console.log({ result });

// Esto no se realiza de esta manera
// if (result !== 2) {
//   throw new Error("El resultado no es 2");
// }

// expect(result).toBe(4);
// });
