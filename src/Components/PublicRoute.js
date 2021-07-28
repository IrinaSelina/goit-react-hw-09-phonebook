import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import selectors from "../redux/auth/auth-selectors";

const PublicRoute = ({
  component: Component,

  redirectTo,
  ...routeProps
}) => {
  const isAuthenticated = useSelector(selectors.isAuthenticated);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
