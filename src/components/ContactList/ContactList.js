import React from 'react';
import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';

import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css['contacts__list']}>
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

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
