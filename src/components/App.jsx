import React, { Component } from 'react';
import css from './App.module.css';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './Contacts/Contacts';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: ''
    };
  }

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }));
  };

  filterChange = value => {
    this.setState({
      filter: value
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Form contacts={contacts} onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.filterChange} />
        <ContactList contacts={filteredContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}
