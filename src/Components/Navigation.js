import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import authSelectors from "../redux/auth/auth-selectors";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
};

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact className="link">
      Главная
    </NavLink>
    {isAuthenticated && (
      <NavLink to="/contacts" exact className="link">
        Контакты пользователя
      </NavLink>
    )}
  </nav>
);
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});
Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
export default connect(mapStateToProps)(Navigation);
