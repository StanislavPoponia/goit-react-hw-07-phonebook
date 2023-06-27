import css from './App.module.css';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
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

  handlerChangeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };
  addContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const isInclude = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isInclude) {
      Notiflix.Report.warning(`${name} is already in contact`);
      return;
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };
  deleteContact = name => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.name.toLowerCase() !== name.toLowerCase()
      ),
    }));
  };
  onFilterContact = () => {
    const { contacts, filter } = this.state;
    const normiliseName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normiliseName)
    );
  };
  render() {
    const { filter } = this.state;
    const filterList = this.onFilterContact();
    return (
      <div className={css.Container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={filter} onChange={this.handlerChangeFilter} />

        <h2>Contacts</h2>
        <ContactsList
          contacts={filterList}
          onDeleteContacts={this.deleteContact}
        />
      </div>
    );
  }
}