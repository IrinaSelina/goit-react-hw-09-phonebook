import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import formActions from "../../redux/form/form-actions";
import FormGroup from "@material-ui/core/FormGroup";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import "./Filter.css";
import selectors from "../../redux/form/contacts-selectors";

const Filter = ({ onChange, value }) => {
  return (
    <div>
      <h3> Find contact dy name </h3>
      <form noValidate autoComplete="off">
        <FormGroup>
          <InputLabel htmlFor="Filter contacts by name">
            <Input
              id="filter"
              label="Find contact"
              aria-describedby="my-helper-text"
              type="text"
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              onChange={onChange}
              value={value}
            />
          </InputLabel>
        </FormGroup>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: selectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(formActions.addFilter(e.target.value)),
});

Filter.propTypes = {
  handleOnChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
