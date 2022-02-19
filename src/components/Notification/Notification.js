import React from 'react';
import propTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ text }) => {
  return <p className={s.message}>{text}</p>;
};

Notification.propTypes = {
  text: propTypes.string.isRequired,
};

export default Notification;
