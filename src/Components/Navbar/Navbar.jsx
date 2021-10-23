import React from "react";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import UserContext from "../../context/UserContext"
import NotificationContext from "../../context/NotificationContext"
import CartWidget from "../CartWidget/CartWidget";
import CartContext from "../../context/CartContext";
import { getCategories } from "../../services/firebase/firebase";

export default function Navbar() {
  const {setCategories} = useState();
 const {setNotification} = useContext(NotificationContext);
 const { user, logout } = useContext(UserContext)
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
  }, [setCategories]);



  const handleLogout = () => {
    logout()
    setNotification('error', `Hasta luego ${user}`)
  }




  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="logo">
        <Link to="/" className="navbar-brand">
    
       
          <img className="logo" src="/assets/logo.png" alt="logo" />
        </Link>
      </div>

      <ul className="navbar-nav">

        <li className="nav-item">
          <NavLink to="/" 
          className="nav-link"
            activeClassName="NavLink"
            activeStyle={{
              fontWeight: "bold",
              color: "darkcyan",
            }}
            >
            Productos 
          </NavLink>
        </li>

        <li className="nav-item active">
          <NavLink
            to={`/category/mujer`}
            className="nav-link"
            activeClassName="NavLink"
            activeStyle={{
              fontWeight: "bold",
              color: "darkcyan",
            }}
          >
            Mujer
          </NavLink>
        </li>

        <li className="nav-item active">
          <NavLink
            to={`/category/hombre`}
            className="nav-link"
            activeClassName="NavLink"
            activeStyle={{
              fontWeight: "bold",
              color: "darkcyan",
            }}



          >
            Hombre
          </NavLink>
        </li>

        <li className="nav-item active">
          <NavLink
            to={`/category/niño`}
            className="nav-link"
            activeClassName="NavLink"
            activeStyle={{
              fontWeight: "bold",
              color: "darkcyan",
            }}
          >
            Niño
          </NavLink>
        </li>

        <li className="nav-item-login">
         
        {
          user 
            ? <button className="loginButton" onClick={handleLogout}>Logout</button>
            : <Link to='/login'><button>Login</button></Link>
        }
           
         
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
