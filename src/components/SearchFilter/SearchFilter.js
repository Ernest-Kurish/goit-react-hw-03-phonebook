import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchFilter.module.css';

const SearchFilter = ({ value, onChange }) => {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <label className={styles.filter}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        className={styles.filterInput}
      />
    </label>
  );
};

SearchFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchFilter;
