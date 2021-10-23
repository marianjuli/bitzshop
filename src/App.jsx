import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Notification from './Components/Notification/Notification'
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import { useContext } from 'react'
import UserContext from "./context/UserContext";
import { CartContextProvider } from "./context/CartContext";
import { NotificationContextProvider } from "./context/NotificationContext";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <NotificationContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Notification />
            <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>
              <Route path="/category/:categoryid">
                <ItemListContainer />
              </Route>
              <Route  path="/item/:itemid">
                <ItemDetailContainer />
              </Route>

              <Route path="/cart" user={user}>
                <Cart />
              </Route>
              <Route  path="/login" >
                <Login />
              </Route>
            </Switch>
            <Footer />
          </BrowserRouter>
        </CartContextProvider>
      </NotificationContextProvider>
    </div>
  );
};

export default App;
