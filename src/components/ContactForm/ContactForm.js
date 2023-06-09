import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

class ContactForm extends React.Component {
  state = {
      name: '',
      number: '',
    };
  

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, number } = this.state;
    if (!name || !number) {
      alert('Please enter a name and number');
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.props.addContact(contact);

    this.setState({
      name: '',
      number: '',
    });
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = (event) => {
    this.setState({ number: event.target.value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={this.handleNameChange}
            required
          />
        </label>

        <label>
          Phone number
          <input
            type="tel"
            value={number}
            onChange={this.handleNumberChange}
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

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
