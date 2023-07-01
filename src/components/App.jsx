import css from './App.module.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './Form/Form';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Notiflix from 'notiflix';

const App = () => {
  const [parsedContacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = contacts ? JSON.parse(contacts) : [];
    return parsedContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(parsedContacts));
  }, [parsedContacts]);

  const filterContacts = filter => {
    setFilter(filter);
  };

  const addContact = contact => {
    const { name } = contact;
    const lowerName = name.toLowerCase();
    const isInclude = !parsedContacts.some(
     contact => contact.name.toLowerCase() === lowerName
    );

    if (isInclude) {
      const id = nanoid();
      setContacts([...parsedContacts, { ...contact, id }]);
    } else {
      Notiflix.Notify.warning(`${name} is already in contacts.`);
    }
  };

  const deleteContact = id => {
    setContacts(parsedContacts.filter(contact => contact.id !== id));
  };

  const filterList = parsedContacts
    ? parsedContacts.filter(
        contact =>
          contact.name &&
          contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onFilter={filterContacts} />
      <ContactList
        contacts={filterList}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;