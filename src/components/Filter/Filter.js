import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

class Filter extends Component {
  handleInputChange = (event) => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };

  render() {
    const { value } = this.props;

    return (
      <label className={styles.filter}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={this.handleInputChange}
          className={styles.filterInput}
        />
      </label>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
