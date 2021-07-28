import React, { useState } from "react";
import { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormGroup from "@material-ui/core/FormGroup";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import formOperations from "../../redux/form/form-operations";
import selectors from "../../redux/form/contacts-selectors";
import "./Form.css";
const InputForm = () => {
  const contacts = useSelector(selectors.getAllItems);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const reset = () => {
    setNumber("");
    setName("");
  };
  const handleChangeName = (e) => {
    setName(e.currentTarget.value);
  };
  const handleChangeNumber = (e) => {
    setNumber(e.currentTarget.value);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();

    contacts.some(
      (contact) => name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${name} is already in contacts.`)
      : dispatch(formOperations.addContact(name, number));
    reset();
  };
  return (
    <form onSubmit={onHandleSubmit}>
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
            onChange={handleChangeName}
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
            onChange={handleChangeNumber}
            value={number}
          />
        </InputLabel>
        <Button variant="contained" type="submit" color="primary" size="small">
          Add contacts
        </Button>
      </FormGroup>
    </form>
  );
};

export default InputForm;
