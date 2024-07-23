
import React, { createContext, useState, useEffect } from "react";

const Context = createContext(null);

const StoreProvider = ({ children }) => {
  const [state, setState] = useState({
    contacts: []
  });

  const fetchContacts = async () => {
    try {
      const response = await fetch("https://playground.4geeks.com/contact/");
      if (response.ok) {
        const data = await response.json();
        setState({ ...state, contacts: data });
      } else {
        console.error("Failed to fetch contacts");
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const addContact = async (contact) => {
    try {
      const response = await fetch("https://playground.4geeks.com/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
      });
      if (response.ok) {
        const newContact = await response.json();
        setState({
          ...state,
          contacts: [...state.contacts, newContact]
        });
      } else {
        console.error("Failed to add contact");
      }
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  const updateContact = async (updatedContact) => {
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/${updatedContact.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedContact)
      });
      if (response.ok) {
        const newContact = await response.json();
        setState({
          ...state,
          contacts: state.contacts.map(contact => 
            contact.id === newContact.id ? newContact : contact
          )
        });
      } else {
        console.error("Failed to update contact");
      }
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  const deleteContact = async (contactId) => {
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/${contactId}`, {
        method: "DELETE"
      });
      if (response.ok) {
        setState({
          ...state,
          contacts: state.contacts.filter(contact => contact.id !== contactId)
        });
      } else {
        console.error("Failed to delete contact");
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <Context.Provider value={{ state, actions: { addContact, updateContact, deleteContact, fetchContacts } }}>
      {children}
    </Context.Provider>
  );
};

export { Context, StoreProvider };