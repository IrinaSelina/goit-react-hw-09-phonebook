import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "@material-ui/core/FormGroup";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import formOperations from "../../redux/form/form-operations";
import selectors from "../../redux/form/contacts-selectors";
import "./Form.css";

class InputForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts, onSubmit } = this.props;

    contacts.some(
      (contact) => name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${name} is already in contacts.`)
      : onSubmit(name, number);

    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handelSubmit}>
        <FormGroup>
          <InputLabel htmlFor="name">
            Name
            <Input
              id="name"
              aria-describedby="my-helper-text"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChange}
              value={name}
            />
          </InputLabel>

          <InputLabel htmlFor="number">
            Number
            <Input
              id="number"
              aria-describedby="my-helper-text"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
              value={number}
            />
          </InputLabel>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            size="small"
          >
            Add contacts
          </Button>
        </FormGroup>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: selectors.getAllItems(state),
});
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) => dispatch(formOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
