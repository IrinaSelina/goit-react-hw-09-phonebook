import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import authOperations from "./redux/auth/auth-operations";
import Routs from "./routes";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";

import NavBar from "./Components/NavBar";

const HomeView = lazy(() => import("./views/HomeView.js"));
const LoginView = lazy(() => import("./views/LoginView.js"));
const ContactsView = lazy(() => import("./views/ContactsView.js"));
const RegisterView = lazy(() => import("./views/RegisterView.js"));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
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
  }
}
// class App extends Component {
//   componentDidMount() {
//     this.props.fetchContacts();
//   }
//   // componentDidUpdate(prevProps, prevState) {
//   //   if (this.state.contacts !== prevState.contacts) {
//   //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//   //   }
//   // }
//   render() {
//     return (
//       <Section>
//         <h1>Phonebook</h1>
//         <Form />
//         <h2>Contacts</h2>
//         <Filter />
//         <ContactList />
//       </Section>
//     );
//   }
// }
// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (filter) => dispatch(formActions.addFilter(filter)),
//   fetchContacts: () => dispatch(formOperations.fetchContacts()),
// });

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
