import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Card } from './Card.styled';

import { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
// import { setLocale } from 'yup';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const localKey = 'Contacts';
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(localKey, JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    this.setState({ contacts: JSON.parse(localStorage.getItem('Contacts')) });
  }

  findContacts = filtered => {
    this.setState({
      filter: filtered,
    });
  };

  addContact = newContact => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    }

    if (
      this.state.contacts.find(contact => contact.number === newContact.number)
    ) {
      return alert(`${newContact.number} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDelete = itemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== itemId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;

    const visibleContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Layout>
        <Card>
          <h2>Phonebook</h2>
          <ContactForm onAdd={this.addContact} />
          <h2>Contacts</h2>
          <Filter filteredItems={filter} onFind={this.findContacts} />
          <ContactList contacts={visibleContact} onDelete={this.handleDelete} />
        </Card>
        <GlobalStyle />
      </Layout>
    );
  }
}
