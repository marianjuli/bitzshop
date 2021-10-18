import React from 'react';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
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
  height: 350px;
  display: flex;
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
  padding-bottom: 8px;
`;

const Price = styled.p`
  margin-bottom: 3, 5px;
  color: #333;
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 8px;
`;

//Traer la UI del card con su imagen e iconos
const Item = ({ product }) => {


  return (
    <Link to={`/item/${product.id}`}>
      <Container>
        <Image src={product.img} alt={`img-${product.id}`} />
        <Info>
          <Box m={2} pb={0} pl={6}>
            <Button variant="contained" color="primary">
              Comprar
            </Button>
          </Box>
        
          <Price>${product.price}</Price>

          <Price> { product.quantity} </Price>
        


        </Info>
      </Container>
    </Link>
  );
};

export default Item;
