import css from './Form.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handlerChangeName = e => {
    this.setState({
      name: e.target.value,
    });
  };
  handlerChangeNumber = e => {
    this.setState({
      number: e.target.value,
    });
  };

  handlerSubmit = e => {
    e.preventDefault();

    const contactInfo = e.target.elements;
    this.props.onSubmit(contactInfo.name.value, contactInfo.number.value);
    this.onReset();
  };
  onReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className={css.Form} onSubmit={this.handlerSubmit}>
        <label className={css.Form__label} htmlFor="name">
          Name
        </label>

        <input
          className={css.Form__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={this.handlerChangeName}
          required
        />

        <label className={css.Form__label} htmlFor="number">
          Number
        </label>
        <input
          className={css.Form__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={this.handlerChangeNumber}
          required
        />

        <button className={css.Form__btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};