import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Input, Label, Btn, Container } from './ContactsForm.styled';
export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const isContactExsists = this.props.addContact({
      id: nanoid(6),
      ...this.state,
    });
    if (!isContactExsists) {
      this.reset();
    }
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <Container onSubmit={this.handleSubmit}>
        <Label>Name</Label>
        <Input
          onChange={this.handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
        />

        <Label>Number</Label>
        <Input
          onChange={this.handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
        />

        <Btn type="submit">Add contact</Btn>
      </Container>
    );
  }
}

ContactsForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
