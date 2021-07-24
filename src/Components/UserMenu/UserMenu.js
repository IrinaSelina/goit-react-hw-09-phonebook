import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import selectors from "../../redux/auth/auth-selectors";
import operations from "../../redux/auth/auth-operations";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const UserMenu = ({ email, logOut }) => (
  <div>
    <span>Welcome, {email}</span>
    <Button onClick={logOut} type="button">
      <ExitToAppIcon />
    </Button>
  </div>
);
const mapStateToProps = (state) => ({
  email: selectors.getEmail(state),
});

const mapDispatchToProps = {
  logOut: operations.logOut,
};
UserMenu.propTypes = {
  email: PropTypes.string.isRequired,
  logOut: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
