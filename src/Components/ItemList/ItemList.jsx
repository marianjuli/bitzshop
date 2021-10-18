import styled from "styled-components";
import React from "react";
import Item from "../Item/Item";



const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const ItemList = ({ products}) => {




  //map de los items y llamar a Item por cada iteracion
  return (
    <Container>
     {products?.map(product =><Item key={product.id} product={product}/>)}
     
    </Container>
  );
};

export default ItemList





