import css from './ContactsItem.module.css';
import PropTypes from 'prop-types';
export const ContactsItems = ({ name, number, onDelete }) => {
  return (
    <>
      <p className={css.ContactsList__name}>{name}: </p>
      <a href="tel:{number}" className={css.ContactsList__number}>
        {number}
      </a>

      <button
        className={css.ContactsList__btn}
        type="button"
        onClick={() => onDelete(name)}
      >
        delete
      </button>
    </>
  );
};

ContactsItems.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};