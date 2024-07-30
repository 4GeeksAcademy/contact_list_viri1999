import React, { useContext } from "react";
import { Context } from "../store/flux";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const { actions } = useContext(Context);

  const handleDelete = () => {
    if (window.confirm("¿Eliminar contacto?")) {
      actions.deleteContact(contact.id)
        .then(() => {
          alert("Contacto eliminado correctamente");
        })
        .catch((error) => {
          console.error("Error al eliminar el contacto:", error);
          alert("Hubo un error al eliminar el contacto");
        });
    }
  };

  return (
    <div className="contact-card">
      <h2>{contact.name}</h2>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <Link to={`/edit/${contact.id}`}>Editar</Link>
      <button onClick={handleDelete}>Borrar</button>
    </div>
  );
};

export default ContactCard;
