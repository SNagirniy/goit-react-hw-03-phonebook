import React, { Component } from 'react';
import Container from 'components/Container';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Contactlist from 'components/Contactlist';
import Filter from 'components/Filter';
import Notification from 'components/Notification';

import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() { 
    const parsedContacts = JSON.parse(localStorage.getItem('Phonebook'));

    if (parsedContacts) { this.setState({contacts: parsedContacts})}
  };

  componentDidUpdate(PrevProps, PrevState) { 

    if (this.state.contacts !== PrevState.contacts) { 
      localStorage.setItem('Phonebook', JSON.stringify(this.state.contacts))
    }
  };

  addContact = ({ name, number }) => {
    const a = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    if (a) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(PrevState => ({
      contacts: PrevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const { getVisibleContacts, addContact, changeFilter, deleteContact } =
      this;
    return (
      <Container>
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={addContact} />
        </Section>
        <Section title={'Contacts'}>
          {contacts.length > 0 && (
            <Filter value={filter} onChange={changeFilter} />
          )}
          {contacts.length > 0 ? (
            <Contactlist
              data={getVisibleContacts()}
              onDelete={deleteContact}/>
          ) : (
            <Notification
              text={'There are no contacts in Your phonebook . . .'}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
