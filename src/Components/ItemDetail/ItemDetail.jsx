import React from 'react'
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: end;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 85vh;
  padding: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  margin-top: 40px;
`;



const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
  color: #333;
  font-size: 25px;
  font-weight: bold;
  padding: 50px 50px 7px 50px;
  text-transform: capitalize;
`;

const Price = styled.p`
  margin-bottom: 2px;
  color: #333;
  font-weight: bold;
  font-size: 20px;
  padding: 50px 50px 5px 50px;
  align-items: right;
`;

const Stock = styled.p`
  margin-bottom: 2px;
  color: #333;
  font-weight: bold;
  font-size: 20px;
  padding: 50px 50px 5px 50px;
  align-items: right;
`;




const Category = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
  color: #333;
  font-size: 25px;
  font-weight: bold;
  padding: 50px 50px 7px 50px;
  text-transform: capitalize;
`;

export default function ItemDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const {addProduct} = useContext(CartContext);
  
  


  const handleCounter = (contador) => {
    setQuantity(contador);
  };

  const addToCart = () => {
    addProduct(product, quantity);
  };

  
  return (
    <Container>
      <Image src={product.img} alt={`img-${product.id}`} />
      <Info>
        <Box m={2} pb={0} pl={10}>
        
        <Link to='/'>
          <Button  variant="contained" color="secondary" >
            Volver
          </Button>
          </Link>
        </Box>

        <Title>{product.title} </Title>
        <Category> <span>Categoria:</span>{product.category}</Category>

        <Price>${product.price}</Price>
        <Stock>Stock:{product.stock}</Stock>
       
        <ItemCount
          initialValue={1}
          maxValue={10}
          onAdd={handleCounter}
          
        />

        <Box m={2} pb={0} pl={6} pr={10}>
          <Button onClick={addToCart} variant="contained" color="secondary" >
        
            Añadir al carrito ({quantity})
          </Button>

        </Box>
      </Info>
    </Container>
  );
}


