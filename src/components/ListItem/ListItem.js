import React from 'react';
import propTypes from 'prop-types';
import s from './ListItem.module.css';

const ListItem = ({ name, number, id, onDelete }) => {
    return (
      <li className={s.item}>
        {name}: {number}{' '}
        <button className={s.delete_button} onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
  );
};

ListItem.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};

export default ListItem;
