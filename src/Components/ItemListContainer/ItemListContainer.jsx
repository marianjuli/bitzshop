import React from "react";
import Greeting from "../Greeting/Greeting";
import Slider from "../Slider/Slider";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import {getProducts} from '../../services/firebase/firebase'



const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryid } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    getProducts('category', '==', categoryid).then(products => {
        setProducts(products)
    }).catch((error) => {
        console.log(error)
    }).finally(() => {
        setLoading(false)
    })

    return (() => {
        setLoading(true)
        setProducts([])
    })
}, [categoryid])


  
  console.log("prueba");
  console.log(products);

  return (
    <div>
      <Slider />
      <Greeting />

      {loading ? <Spinner /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
