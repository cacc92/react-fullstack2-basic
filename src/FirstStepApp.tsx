import { ItemCounter } from "./shopping_cart/ItemCounter";

interface ItemCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  //{ productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "Xbox Series X", quantity: 2 },
  { productName: "Playstation 5 Pro", quantity: 3 },
];

export function FirstStepApp() {
  return (
    <>
      {/* <h1>Hola Mundo!</h1>
      <p>Esto es un parrafo!</p>
      <button>Click me</button>
      <div>
        <h2>Hola dentro de un DIV</h2>
      </div> */}
      <h1>Carrito de compras</h1>
      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}

      {/* <ItemCounter name="Nintendo Switch 2" quantity={5} />
      <ItemCounter name="Xbox Series X" quantity={10} />
      <ItemCounter name="Playstation 5 Pro" quantity={2} /> */}
    </>
  );
}
