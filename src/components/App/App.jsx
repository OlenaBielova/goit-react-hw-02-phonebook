import React from 'react';
import PropTypes from 'prop-types';
import { ContactForm } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Container } from './App.styled';

export class App extends React.Component {
  
  static propTypes = {
    contacts: PropTypes.array,
    value: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    onDeleteContact: PropTypes.func,
  };

  state = {
    contacts: [],
    filter: '',
  };
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  handleFormSubmit = data => {
    const { contacts } = this.state;
    const normalizedName = data.name.toLowerCase();
    const repeatedNameList = contacts.filter(
      contact => contact.name.toLowerCase() === normalizedName
    );
    repeatedNameList.length === 0
      ? this.setState(prevState => ({
          contacts: [...prevState.contacts, data],
        }))
      : alert(`${data.name} is already in contacts`);
  };

  handleSearchInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <h3>Phonebook</h3>
        <ContactForm onSubmit={this.handleFormSubmit}/>
        <h3>Contacts</h3>
        <Filter
          value={filter}
          onChange={this.handleSearchInputChange}
        />
        <ContactList
          contacts={this.getFilteredContacts()}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
