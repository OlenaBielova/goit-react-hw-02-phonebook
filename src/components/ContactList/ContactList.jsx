import React from 'react';
import PropTypes from 'prop-types';
import { List, Contact, DeleteBtn } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ name, number, id }) => (
      <Contact key={id}>
        <p>
          {name} : {number}
        </p>
        <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </DeleteBtn>
      </Contact>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func
};