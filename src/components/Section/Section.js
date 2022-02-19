import React from 'react';
import propTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      <h1 className={s.title}>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
export default Section;
