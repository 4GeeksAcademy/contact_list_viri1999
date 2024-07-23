import React, { useContext, useEffect } from "react";
import { Context } from "../store/flux";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  const { state, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchContacts();
  }, []);

  return (
    <div>
      <h1>Contact List</h1>
      <div>
        {state.contacts.map(contact => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Contact;