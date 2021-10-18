import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Signup from "./Components/Signup/Signup";
import { CartContextProvider } from "./context/CartContext";
import { NotificationContextProvider } from './context/NotificationContext'
import "bootstrap/dist/css/bootstrap.min.css";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCXGA_UYOCR0mJmcuE5l85RGC_BmG438oA",
  authDomain: "bitz-project.firebaseapp.com",
  projectId: "bitz-project",
  storageBucket: "bitz-project.appspot.com",
  messagingSenderId: "335902526930",
  appId: "1:335902526930:web:7d76bbecb0060abad80c0b",
};

const app = initializeApp(firebaseConfig);

const App = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  });

  return (
    <div className="App">
       <NotificationContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:categoryid">
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:itemid">
              <ItemDetailContainer />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>
            <Route exact path="/login" component={Login} />

            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
      </NotificationContextProvider>
    </div>
  );
};

export default App;
