import React from "react";
import { NavLink } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import selectors from "../redux/auth/auth-selectors";
import PropTypes from "prop-types";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
};

const Navigation = () => {
  const isAuthenticated = useSelector(selectors.isAuthenticated);
  return (
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
};

export default Navigation;
