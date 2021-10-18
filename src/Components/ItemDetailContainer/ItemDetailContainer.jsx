import React from "react";
import { useEffect, useState } from "react"
import { getProductById } from '../../services/firebase/firebase'
import styled from "styled-components"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Spinner from "../Spinner/Spinner"





const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const { itemid } = useParams()
  
  useEffect(() => {
    setLoading(true)
    getProductById(itemid).then(product => {
        setProduct(product)
    }).catch((error) => {
        console.log(error)
    }).finally(() => {
        setLoading(false)
    })
    return (() => {
        setLoading(true)
        setProduct(undefined)
    })
},[itemid])

  
  
console.log ("prueba desde ItemDetailContainer")

  return (
    <Container>
      {loading ? <Spinner/> : <ItemDetail product={product}  itemid={itemid}/>}

        </Container>
  );
};

export default ItemDetailContainer;
