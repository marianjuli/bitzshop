import React from "react";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import CartContext from "../../context/CartContext";
import { getCategories } from "../../services/firebase/firebase";

export default function Navbar() {
  const [categories, setCategories] = useState();

  const { getQuantity } = useContext(CartContext);

  useEffect(() => {
    getCategories()
      .then((categories) => {
        setCategories(categories);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      setCategories();
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="logo">
        <Link to="/" className="navbar-brand">
    
       
          <img className="logo" src="/assets/logo.png" alt="logo" />
        </Link>
      </div>

      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/" className="nav-link">
            Productos <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <NavLink
            to={`/category/mujer`}
            className="nav-link"
            activeClassName="NavLink"
          >
            Mujer
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={`/category/hombre`}
            className="nav-link"
            activeClassName="NavLink"
          >
            Hombre
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={`/category/niño`}
            className="nav-link"
            activeClassName="NavLink"
          >
            Niño
          </NavLink>
        </li>

        <li className="nav-item">
          <div className="nav-link">
            <Link to="/login">
              <label id="login">Login</label>
            </Link>
          </div>
        </li>

        <div className="nav-cart">
          <Link to="/cart">
            <CartWidget quantity={getQuantity()} />
          </Link>
        </div>
      </ul>
    </nav>
  );
}
