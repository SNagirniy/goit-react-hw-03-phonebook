import React, { Component } from 'react';
import propTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.label}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            value={this.state.name}
            className={s.input}
            required
          />
        </label>
        <label className={s.label}>
          <span>Phone</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            value={this.state.number}
            className={s.input}
            required
          />
        </label>
        <button type="submit" className={s.button}>
          Add contacts
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  props: propTypes.func,
};

export default ContactForm;
