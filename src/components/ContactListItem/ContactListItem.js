import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

class ContactListItem extends React.Component {
  handleDelete = () => {
    this.props.onDelete(this.props.contact.id);
  };

  render() {
    const { contact } = this.props;

    return (
      <li className={css['contacts__item']}>
        {contact.name}: {contact.number}
        <button type="button" className={css['contacts__btn']} onClick={this.handleDelete}>
          Delete
        </button>
      </li>
    );
  }
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
