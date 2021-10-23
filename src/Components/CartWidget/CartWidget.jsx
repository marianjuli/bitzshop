import React from 'react'
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./CartWidget.css";

export default function CartWidget() {
 
  const { getQuantity } = useContext(CartContext);

  return (
    <div className="cartcont">
      <div className="cartdiv">
        <img src="/assets/cart.png" alt="cart" />
      </div>
      <span className="cartnumber">{getQuantity()}</span>
    </div>
  );
}
