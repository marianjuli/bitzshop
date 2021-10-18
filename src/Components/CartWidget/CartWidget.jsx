import React from 'react'
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./CartWidget.css";

export default function CartWidget() {
 
  const { getQuantity } = useContext(CartContext);

  return (
    <div className="cartcont">
      <button>
        <img src="/assets/cart.svg" alt="cart" />
      </button>
      <span className="cartnumber">{getQuantity()}</span>
    </div>
  );
}
