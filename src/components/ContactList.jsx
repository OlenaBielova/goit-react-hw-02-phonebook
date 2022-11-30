import React from "react";
import { nanoid } from 'nanoid';

export const ContactList = ({contacts, onDeleteContact}) => (
    <ul>
          {contacts.map(({name, number, id}) => (
            <li key={nanoid()}>
                  <p>{name}: {number}</p>
                  <button type="button" onClick={()=>onDeleteContact(id)}>Delete</button>
            </li>
          ))}
        </ul>
)