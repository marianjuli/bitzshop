
import React from "react";
import { useState } from "react";
import "./ItemCount.scss";
import "../Button/Button.scss";

export default function ItemCount({ initialValue, maxValue, onAdd }) {
 
 const [quantity, setQuantity] = useState(initialValue);

  const increment = () => {
    if (quantity < maxValue) {
      setQuantity((prevContador) => {
        let quantity = prevContador + 1;
        onAdd(quantity);
        return quantity;
      });
    }
  };

  const decrement = () => {
    if (quantity > initialValue) {
      setQuantity((prevContador) => {
        let quantity = prevContador - 1;
        onAdd(quantity);
        return quantity;
      });
    }
  };

  return (
    <div id="ItemCount" className="contador">
      <div className=" contador__buttons">
        <p className="contador__num"> {quantity} </p>
        <button className="button__counter" onClick={decrement}>
          -
        </button>
        <button className="button__counter" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
