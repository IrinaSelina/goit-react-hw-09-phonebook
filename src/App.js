import React, { Suspense, lazy, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { useDispatch } from "react-redux";
import authOperations from "./redux/auth/auth-operations";
import Routs from "./routes";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";

import NavBar from "./Components/NavBar";

const HomeView = lazy(() => import("./views/HomeView.js"));
const LoginView = lazy(() => import("./views/LoginView.js"));
const ContactsView = lazy(() => import("./views/ContactsView.js"));
const RegisterView = lazy(() => import("./views/RegisterView.js"));
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <PublicRoute exact path={Routs.home} component={HomeView} />
          <PublicRoute
            path={Routs.register}
            component={RegisterView}
            redirectTo={Routs.contacts}
            restricted
          />
          <PublicRoute
            path={Routs.login}
            component={LoginView}
            redirectTo={Routs.contacts}
            restricted
          />
          <PrivateRoute
            path={Routs.contacts}
            component={ContactsView}
            redirectTo={Routs.login}
          />
          <Route component={HomeView} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
