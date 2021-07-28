import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import selectors from "../redux/auth/auth-selectors";

const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuthenticated = useSelector(selectors.isAuthenticated);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};

// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.isAuthenticated(state),
// });

export default PrivateRoute;
