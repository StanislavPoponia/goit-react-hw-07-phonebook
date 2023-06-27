import PropTypes from 'prop-types';
import { ContactsItems } from '../ContactIstem/ContactsItem.jsx';
import css from './ContactsList.module.css';
export const ContactsList = ({ contacts, onDeleteContacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={css.ContactsList__item} key={id}>
          <ContactsItems
            name={name}
            number={number}
            onDelete={onDeleteContacts}
          />
        </li>
      ))}
    </ul>
  );
};
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),

  onDeleteContacts: PropTypes.func.isRequired,
};