// Se realiza rafc para completar

import React, { useState, type CSSProperties } from "react";

// import "./ItemCounter.css";
import styles from "./ItemCounter.module.css";

interface Props {
  name: string;
  quantity?: number;
}

const sectionExample: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  marginTop: 10,
};

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity);

  const nameProduct: CSSProperties = {
    // width: 150,
    // color: quantity === 1 ? "red" : " black",
    color: count === 1 ? "red" : " black",
  };

  // const itemCounterObj = useState(10);

  const handleClick = () => {
    console.log(`Click en ${name}`);
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubstract = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    // <section style={sectionExample}>
    <section className={styles.itemRow}>
      <span className={styles.textItem} style={nameProduct}>
        {name}
      </span>
      <button
        // onMouseEnter={() => {
        //   console.log(`Mouse enter ${name}`);
        // }}
        // onClick={() => {
        //   handleClick();
        // }}
        onClick={handleAdd}
      >
        +1
      </button>
      <span>{count}</span>
      <button onClick={handleSubstract}>-1</button>
    </section>
  );
};
