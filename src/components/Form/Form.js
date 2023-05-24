import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Form.module.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    const { contacts, onSubmit } = this.props;

    const contactExists = contacts.some((contact) => contact.name === name);

    if (contactExists) {
      alert(`${name} is already existing in contacts`);
      return;
    }

    onSubmit({ id: nanoid(), name, number });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Phone number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={css['form__btn']}>
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  contacts: PropTypes.array,
  onSubmit: PropTypes.func,
};

export default Form;
