import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import formOperations from "../redux/form/form-operations";
import formActions from "../redux/form/form-actions";
import Section from "../Components/Section";
import Form from "../Components/Form";
import ContactList from "../Components/ContactList";
import Filter from "../Components/Filter";
import Container from "@material-ui/core/Container";

const ContactsView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(formOperations.fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Section>
        <div className="container">
          <h1>Phonebook</h1>
          <Form />
        </div>
        <div className="container">
          <h2>Contacts</h2>
          <Filter />
        </div>

        <ContactList />
      </Section>
    </Container>
  );
};

export default ContactsView;
