import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  width:100%;
  background-color:darkcyan;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 500;
`;

const Greeting = () => {
  return <Container>Semana de descuentos! 50% OFF</Container>;
};

export default Greeting;
