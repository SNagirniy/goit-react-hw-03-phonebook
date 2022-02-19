import React from 'react';
import propTypes from 'prop-types';
import s from './Container.module.css';

const Container = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

Container.propTypes = {
  children: propTypes.arrayOf(propTypes.element),
};

export default Container;
