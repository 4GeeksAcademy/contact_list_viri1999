
import React, { useContext } from "react";
import { Context } from "../store/flux";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const { actions } = useContext(Context);

  const handleDelete = () => {
    if (window.confirm("¿Eliminar contacto?")) {
      actions.deleteContact(contact.id);
    }
  };

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <Link to={`/edit/${contact.id}`}>Edit</Link>
      <button onClick={handleDelete}>Borrar</button>
    </div>
  );
};

export default ContactCard;