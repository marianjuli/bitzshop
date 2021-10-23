import React from "react";
import styled from "styled-components";
import Announcement from "../Announcement/Announcement";
import { mobile } from "../../responsive";
import Togglable from "../Togglable/Togglable";
import ContactForm from "../ContactForm/ContactForm";
import UserContext from "../../context/UserContext";
import CartContext from "../../context/CartContext";
import NotificationContext from "../../context/NotificationContext";
import { createOrder } from "../../services/firebase/firebase";
import { useHistory } from "react-router";
import { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";




const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 120px;
  font-weight: bold;
  font-size: 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`
  padding-top: 30px;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 650px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.title === "total" && "500"};
  font-size: ${(props) => props.title === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const ButtonRemove = styled.button`
  width: 45%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 400;
  margin-left: 20px;
`;

const Cart = () => {
  const [processingOrder, setProcessingOrder] = useState(false);
  const [contact, setContact] = useState({
    phone: "",
    address: "",
    comment: "",
  });
  const { products, deleteProduct, emptyCart, calculateTotal } =
    useContext(CartContext);

  const { user } = useContext(UserContext);
  const { setNotification } = useContext(NotificationContext);
  const contactFormRef = useRef();
  const history = useHistory();

  const confirmOrder = () => {
    setProcessingOrder(true);

    const objOrder = {
      buyer: user,
      items: products,
      total: calculateTotal(),
      phone: contact.phone,
      address: contact.address,
      comment: contact.comment,
    };

    createOrder(objOrder)
      .then((msg) => {
        setNotification("success", msg);
      })
      .catch((error) => {
        setNotification("error", error);
      })
      .finally(() => {
        setProcessingOrder(false);
        emptyCart();
        setContact({
          phone: "",
          address: "",
          comment: "",
        });
        history.push("/");
      });
  };

  return (
    <Container>
      <Announcement />
      <Wrapper>
        <Title>TUS COMPRAS</Title>
        <Top>
          <Link to="/">
            <TopButton>SEGUIR COMPRANDO</TopButton>
          </Link>
          <TopTexts>
            <TopText>DETALLE</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            {products.map((product) => (
              <Product key={product.id} product={product}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Producto:</b> {product.title}
                    </ProductName>

                    <ProductName>
                      <b>Precio: $</b> {product.price}
                    </ProductName>

                    <ProductId>
                      <b>Descripción:</b> {product.desc}
                    </ProductId>
                    <ProductColor>
                      <b>ID:</b> {product.id}
                    </ProductColor>
                    <ProductSize>
                      <b>Talles: XL, L, M, S</b>
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ButtonRemove onClick={() => deleteProduct(product.id)}>
                    Eliminar
                  </ButtonRemove>

                 


                  <ProductAmountContainer>
                    <ProductAmount> {product.quantity} </ProductAmount>
                  </ProductAmountContainer>

                 
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
          
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Resumen de tu orden</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>

              <div>
                {products.length > 0 && !processingOrder && (
                  <h3> ${calculateTotal()}</h3>
                )}
              </div>
              <SummaryItemPrice> {calculateTotal}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>
                Para finalizar la compra debes iniciar sesion
              </SummaryItemText>
              
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText></SummaryItemText>
              <SummaryItemPrice></SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>
                {" "}
                {products.length > 0 && !processingOrder && (
                  <h3>Total: ${calculateTotal()}</h3>
                )}
              </SummaryItemText>
              <SummaryItemPrice> {calculateTotal}</SummaryItemPrice>
            </SummaryItem>
            <div>
              <>
                {!processingOrder && products.length > 0 && (
                  <Button onClick={() => confirmOrder()}>CONFIRMAR </Button>
                )}
                {!processingOrder && products.length > 0 && (
                  <Button onClick={() => emptyCart()}>CANCELAR </Button>
                )}

                {!processingOrder &&
                  contact.phone !== "" &&
                  contact.address !== "" &&
                  contact.comment !== "" && (
                    <div>
                      <h4>Telefono: {contact.phone}</h4>
                      <h4>Direccion: {contact.address}</h4>
                      <h4>Comentario: {contact.comment}</h4>
                      <button
                        onClick={() =>
                          setContact({ phone: "", address: "", comment: "" })
                        }
                        type="button"
                        className="btn btn-danger"
                      >
                        Borrar datos de contacto
                      </button>
                    </div>
                  )}
                {(!processingOrder && products.length) > 0 && (
                  <Togglable
                    buttonLabelShow={
                      contact.phone !== "" &&
                      contact.address !== "" &&
                      contact.comment !== ""
                        ? "Editar contacto"
                        : "Agregar contacto"
                    }
                    ref={contactFormRef}
                  >
                  
                    <ContactForm
                      toggleVisibility={contactFormRef}
                      setContact={setContact}
                    />
                  </Togglable>
                )}
                {!processingOrder ? (
                  <ItemList products={products.id} />
                ) : (
                  "Procesando Orden"
                )}
                <> </>
              </>
            </div>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
