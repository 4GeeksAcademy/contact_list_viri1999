import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/flux";
import { useParams, useHistory } from "react-router-dom";

const AddContact = () => {
  const { actions, state } = useContext(Context);
  const { id } = useParams();
  const history = useHistory();
  const [contact, setContact] = useState({
    id: null,
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    if (id) {
      const existingContact = state.contacts.find(c => c.id === parseInt(id));
      if (existingContact) {
        setContact(existingContact);
      }
    }
  }, [id, state.contacts]);

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.id) {
      actions.updateContact(contact);
    } else {
      actions.addContact(contact);
    }
    history.push("/");
  };

  return (
    <div>
      <h1>{contact.id ? "Edit Contact" : "Add Contact"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          placeholder="mombre"
        />
        <input
          type="gmail"
          name="gmail"
          value={contact.email}
          onChange={handleChange}
          placeholder="Gmail"
        />
        <input
          type="text"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          placeholder="Telefono"
        />
        <button type="submit">{contact.id ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default AddContact;