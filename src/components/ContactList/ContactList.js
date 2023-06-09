import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import ContactListItem from '../ContactListItem/ContactListItem';

class ContactList extends React.Component {
  render() {
    const { contacts, onDelete } = this.props;

    return (
      <ul className={css['contacts__list']}>
        {contacts.map((contact) => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
