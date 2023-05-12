import PropTypes from 'prop-types';
import React from 'react';
import { Btn, ContactsEl, List } from './ContactsList.styled';
export function ContactsList({ contacts, deleteContact }) {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <ContactsEl key={contact.id}>
            <span>{contact.name}</span>:<span>{contact.number}</span>
            <Btn onClick={() => deleteContact(contact.id)}>Delete</Btn>
          </ContactsEl>
        );
      })}
    </List>
  );
}
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
