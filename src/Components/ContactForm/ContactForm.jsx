import React from "react";
import { useState } from "react";

const ContactForm = ({ toggleVisibility, setContact }) => {
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");

  const handleContactForm = (e) => {
    e.preventDefault();
    toggleVisibility.current.toggleVisibility();

    const objContact = {
      phone,
      address,
      comment,
    };
    setContact(objContact);
    setPhone("");
    setAddress("");
    setComment("");
  };

  return (
    <div className="container mt-1">
      <div>Contacto</div>
      <form className="row" onSubmit={handleContactForm}>
        <div className="col-md-14">
          <input
            id="phone"
            placeholder="Telefono"
            className="form-control my-3"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </div>

        <div className="col-md-14">
          <input
            id="address"
            placeholder="Domicilio"
            className="form-control my-3"
            type="text"
            value={address}
            onChange={({ target }) => setAddress(target.value)}
          />
        </div>

        <div className="col-md-14">
          <input
            id="comment"
            placeholder="Comentario"
            className="form-control my-3"
            type="text"
            value={comment}
            onChange={({ target }) => setComment(target.value)}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
