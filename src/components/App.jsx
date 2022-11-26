import React from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form';

export class App extends React.Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h3>Phonebook</h3>
        <Form onSubmit={this.formSubmitHandler}></Form>
        <h3>Contacts</h3>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={nanoid()}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
