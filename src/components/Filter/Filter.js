import React from 'react';
import propTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.filter_label}>
      Find contacts by name
      <input
        className={s.filter}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Filter;
