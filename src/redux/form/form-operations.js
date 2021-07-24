import axios from "axios";
import actions from "./form-actions";
const {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} = actions;

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
  // axios
  //   .get("/contacts")
  //   .then(({ data }) => dispatch(fetchContactsSuccess(data)))
  //   .catch((error) => dispatch(fetchContactsError(error)));
};
const addContact = (name, number) => (dispatch) => {
  const items = { name, number };
  dispatch(addContactRequest());
  axios
    .post("/contacts", items)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error.message)));
};
const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(deleteContactError(error.message)));
};
export default { fetchContacts, addContact, deleteContact };
