import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import useLocalStorage from '../Components/useLocalStorage/useLocalStorage'
import swal from "sweetalert";

const CartContext = createContext();


export const CartContextProvider = ({ children }) => {
    const [products, setProducts] = useLocalStorage("products", []);
    const [quantity, setQuantity] =useState ()
    const [user, setUser] = useState(null);
  


    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, user => {
          setUser(user)
        })
      }, [])
      



  //Add Product to cart
  const addProduct = (product, quantity) => {
    const existingProduct = products.find((prod) => prod.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += quantity;
      setProducts([...products]);
    } else {
      setProducts([...products, { ...product, quantity }]);
    }

    swal(
      "Excelente!",
      `Agregaste ${quantity} ${product.title} al carrito de compras!`, 
      "success"
    );
  };

 

  
  const handleQuantity = (products, quantity) => {
    products.quantity = quantity;
    setProducts([...products]);
    console.log(quantity)
  };


  //Eliminar un item del cart
  const deleteProduct = (id) => {
    products.splice(
      products.findIndex((product) => product.id === id),
      1
    );
    setProducts([...products]);
  };


  

 const getQuantity = () => {
  let count = 0
  products.forEach (prod => {
  count = count + prod.quantity
  })
  return count
}



  const calculateTotal = () => {
  return products.reduce(
    (sum, prod) => sum + prod.quantity * prod.price,
    0
  );
};

  //Vaciar carrito
  const emptyCart = () => {
    products.splice(0, products.length);
    return setProducts([...products]);
  };

  
  return (
    <CartContext.Provider
      value={{
        products,
       quantity,
        user,
        addProduct,
        handleQuantity,
        calculateTotal,
        deleteProduct,
        emptyCart,
        getQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );


};

export default CartContext;
