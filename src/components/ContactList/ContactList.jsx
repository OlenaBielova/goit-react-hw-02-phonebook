import React from 'react';
import { nanoid } from 'nanoid';
import { List, Contact, DeleteBtn } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ name, number, id }) => (
      <Contact key={nanoid()}>
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
